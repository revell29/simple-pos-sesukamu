import { ITransaction } from "types/transaction.type";
import { supabase } from "./connection";

const transaction = {
  fetchTransaction: async (): Promise<ITransaction | any> => {
    try {
      const {
        data: listTransaction,
        error,
        status,
      } = await supabase
        .from("transaction")
        .select(
          "customer_name, grand_total, trx_number, transaction_date, transaction_details(item_name, qty, amount)"
        );

      if (error && status !== 406) {
        throw error;
      }

      return listTransaction;
    } catch (error: any) {
      return error;
    }
  },
  saveTransaction: async (payload: ITransaction): Promise<any> => {
    try {
      const {
        data: transaction,
        error,
        status,
      } = await supabase.from("transaction").insert({
        trx_number: payload.trx_number,
        customer_name: payload.customer_name,
        is_paid: true,
        grand_total: payload.grand_total,
      });

      if (error && status !== 406) {
        throw error;
      }

      if (transaction) {
        payload.transaction_details = payload.transaction_details.map(
          (item) => {
            return {
              ...item,
              transaction_id: transaction[0].transaction_id,
            };
          }
        );
        await supabase
          .from("transaction_details")
          .insert(payload.transaction_details);
      }

      return transaction;
    } catch (error) {
      return error;
    }
  },
};

export default transaction;

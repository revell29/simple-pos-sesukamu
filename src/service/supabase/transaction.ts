import { ITransaction } from "types/transaction.type";
import { supabase } from "./connection";

const transaction = {
  fetchTransaction: async (): Promise<ITransaction | any> => {
    try {
      const {
        data: listTransaction,
        error,
        status,
      } = await supabase.from("transaction").select("*");

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
        payload.items = payload.items.map((item) => {
          return {
            ...item,
            transaction_id: transaction[0].transaction_id,
          };
        });
        await supabase.from("transaction_details").insert(payload.items);
      }

      return transaction;
    } catch (error) {
      return error;
    }
  },
};

export default transaction;

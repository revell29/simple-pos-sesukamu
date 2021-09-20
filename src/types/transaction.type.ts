import { ItemCartType } from "./cart.type";

export interface ITransaction {
  customer_name: string;
  grand_total: number;
  is_paid: boolean;
  transaction_date?: any;
  transaction_id?: number;
  trx_number: string;
  items: Array<ItemCartType>;
}

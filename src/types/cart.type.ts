export interface ItemCartType {
  item_id?: string;
  item_name: string;
  qty: number;
  amount: number;
}

export interface CartSliceType {
  customer_name: string;
  transaction_date: any;
  grand_total: number;
  is_paid: boolean;
  items: ItemCartType[];
}

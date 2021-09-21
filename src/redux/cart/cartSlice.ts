import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSliceType, ItemCartType } from "types/cart.type";
import { ITransaction } from "types/transaction.type";

const initialState: CartSliceType = {
  customer_name: "",
  transaction_date: "",
  trx_number: "",
  grand_total: 0,
  is_paid: false,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart-slsice",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<ItemCartType>) => {
      const { payload } = action;
      const items = [...state.items, payload];
      state.items = items;
    },

    deleteItems: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const items = state.items.filter((item) => item.item_id !== payload);
      state.items = items;
    },
    clearItems: (state) => {
      state.customer_name = "";
      state.transaction_date = "";
      state.grand_total = 0;
      state.items = [];
    },
    printTransaction: (state, action: PayloadAction<ITransaction>) => {
      const { payload } = action;
      state.customer_name = payload.customer_name;
      state.transaction_date = payload.transaction_date;
      state.trx_number = payload.trx_number;
      state.grand_total = payload.grand_total;
      state.items = payload.transaction_details;
    },
  },
});

export const { addItems, deleteItems, clearItems, printTransaction } =
  cartSlice.actions;
export default cartSlice.reducer;

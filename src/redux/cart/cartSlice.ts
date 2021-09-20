import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSliceType, ItemCartType } from "types/cart.type";

const initialState: CartSliceType = {
  customer_name: "",
  transaction_date: "",
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
      state.items = [];
    },
  },
});

export const { addItems, deleteItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSlice } from "types/auth.type";

const initialState: AuthSlice = {
  id: "",
  email: "",
  verified_email: null,
  name: "",
  given_name: "",
  family_name: "",
  picture: "",
  locale: "",
};

export const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    saveUserInfo: (state, action: PayloadAction<AuthSlice | any>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.verified_email = action.payload.verified_email;
      state.name = action.payload.name;
      state.given_name = action.payload.given_name;
      state.family_name = action.payload.family_name;
      state.picture = action.payload.picture;
      state.locale = action.payload.locale;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUserInfo } = authSlice.actions;

export default authSlice.reducer;

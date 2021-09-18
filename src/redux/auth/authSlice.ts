import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthSlice {
  id: string;
  email: string;
  verified_email: boolean | null;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

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
    saveUserInfo: (state, action: PayloadAction<AuthSlice>) => {
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

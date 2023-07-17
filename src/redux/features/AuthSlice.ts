import { createSlice } from "@reduxjs/toolkit";

type userType = {
  id: string;
  firstName: string;
  lastName: string;
  verified: boolean;
  email: string;
  exp: string;
  iat: string;
};

export interface AuthState {
  token: string | null;
  user: userType | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);

      state = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;

export default authSlice.reducer;

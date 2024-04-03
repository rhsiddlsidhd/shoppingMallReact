import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const { id, password } = action.payload;

      state.id = id;
      state.password = password;
      state.authenticate = true;
    },
    logoutUser(state) {
      state.id = "";
      state.password = "";
      state.authenticate = false;
    },
  },
});

export const { loginSuccess, logoutUser } = authenticateSlice.actions;

export default authenticateSlice.reducer;

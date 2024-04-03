import { configureStore } from "@reduxjs/toolkit";
import authenciateSlice from "./reducers/authenciateSlice";
import productSlice from "./reducers/productSlice";

export const store = configureStore({
  reducer: { auth: authenciateSlice, product: productSlice },
});

import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cardSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});

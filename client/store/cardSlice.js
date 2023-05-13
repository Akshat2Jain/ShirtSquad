import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "counter",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

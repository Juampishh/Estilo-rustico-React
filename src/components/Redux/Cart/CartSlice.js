import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart-utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
      };
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CartSlice.css";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, actions) {
      const { id, title } = actions.payload;
      const existingItem = state.cart.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if the item already exists
        toast(`${title} quantity updated in cart`, {
          position: "bottom-left",
          className: "toast-message",
          progressClassName: "custom-toast-icon",
        });
      } else {
        state.cart.push({ ...actions.payload, quantity: 1 }); // Add the item with quantity 1 if it doesn't exist
        toast(`${title} added to cart`, {
          position: "bottom-left",
          className: "toast-message",
          progressClassName: "custom-toast-icon",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart)); // Update localStorage with state.cart
    },
    remove(state, action) {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1; // Decrease the quantity by 1
        } else {
          state.cart = state.cart.filter((item) => item.id !== itemId); // Remove the item if the quantity is 1
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cart)); // Update localStorage with the updated state.cart
      }
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const foundItem = state.items.find((item) => item.id === newItem.id);

      if (foundItem) {
        foundItem.quantity += 1;
        foundItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
      state.totalCost += newItem.price;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const foundItem = state.items.find((item) => item.id === itemId);

      if (foundItem) {
        if (foundItem.quantity > 1) {
          foundItem.quantity -= 1;
          foundItem.totalPrice -= foundItem.price;
        } else {
          state.items = state.items.filter((item) => item.id !== itemId);
        }
        state.totalQuantity -= 1;
        state.totalCost -= foundItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import productsReducer from "./slices/products";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

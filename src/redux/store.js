import CategorySlice from "./Slices/CategorySlice";
import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./Slices/SearchSlice";
import CartSlice from "./Slices/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});

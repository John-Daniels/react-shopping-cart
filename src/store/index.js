import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { sliceName as cartSliceName } from "./cart.slice";

export const store = configureStore({
  reducer: {
    [cartSliceName]: cartReducer,
  },
});

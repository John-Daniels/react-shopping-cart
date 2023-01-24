import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { sliceName as cartSliceName } from "./cart.slice";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [cartSliceName]: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector<RootState>
export default store
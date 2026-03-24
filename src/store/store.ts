import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { initialProductLoad } from "./productsSlice";
import {products} from '../../db.json'
import cartReducer from "./CartSlice";
export const store=configureStore({
  reducer:{stock:productsReducer, cart:cartReducer}
})
store.subscribe(()=>console.trace(store.getState()))

store.dispatch(initialProductLoad(products))




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
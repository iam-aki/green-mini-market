import { productsReducer } from "./ProductReducer";
import { combineReducers } from "redux";
import { IApplicationState } from "../Store";
import { cartReducer } from "./CartReducer";

export const rootReducer = combineReducers<IApplicationState>({
  products: productsReducer,
  cart: cartReducer,
});

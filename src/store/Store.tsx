import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { IProductsState } from "./actions/productTypes";
import { ICartState } from "./actions/cartTypes";

export interface IApplicationState {
  products: IProductsState;
  cart: ICartState;
}

const middleware = [thunk];

const initialState = {};

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
  return store;
}

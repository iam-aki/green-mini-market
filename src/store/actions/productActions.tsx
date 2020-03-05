import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  getRecycleProduct as getRecycleProductFromAPI
} from "../service/ProductService";
import {
  IProductsLoadingAction,
  IProductsState,
  ProductActionTypes,
  IProductGetRecycleBagAction,
  IProduct
} from "./productTypes";

const loading: ActionCreator<IProductsLoadingAction> = () => ({
  type: ProductActionTypes.LOADING
});

let products: IProduct[] = [];



export const getRecycle: ActionCreator<ThunkAction<
  Promise<AnyAction>,
  IProductsState,
  null,
  IProductGetRecycleBagAction
>> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const product = await getRecycleProductFromAPI();
    return dispatch({
      product,
      type: ProductActionTypes.GETRECYCLE
    });
  };
};





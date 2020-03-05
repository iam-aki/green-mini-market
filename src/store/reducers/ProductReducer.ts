import { Reducer } from "redux";
import {
  IProductsState,
  ProductsActions,
  ProductActionTypes
} from "../actions/productTypes";

const initialProductState: IProductsState = {
  currentProduct: {
    category: '',
    description: '',
    dimensions: '',
    feature: [],
    id: '',
    image: [],
    mrp: 0,
    name: '',
    productId: '',
    subCategory: '',
    weight: '',
    ingredient: [],
    usage: ''
  },
  recycleProduct: [],
  products: [],
  productsLoading: false
};

export const productsReducer: Reducer<IProductsState, ProductsActions> = (state = initialProductState, action) => {
  switch (action.type) {
    case ProductActionTypes.LOADING: {
      return {
        ...state,
        productsLoading: false
      };
    }
    case ProductActionTypes.GETRECYCLE: {
      return {
        ...state,
        recycleProduct: action.product,
        productsLoading: true
      };
    }
  }
  return state;
}
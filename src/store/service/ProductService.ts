import Axios from "axios";
import { IProductResponse, IProduct } from "../actions/productTypes";
import { productList } from "./ProductData";

let resp: IProductResponse;



export const getRecycleProduct = async ()
: Promise<IProduct[]> => {
  return productList;
};




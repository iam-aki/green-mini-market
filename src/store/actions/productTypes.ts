export enum ProductActionTypes {
  LOADING = "PRODUCTS/LOADING",
  GETBYCAT = "PRODUCTS/CATEGORY",
  GETRECYCLE = "PRODUCTS/RECYCLEBAG"
}

export interface IProduct {
  id: string;
  productId: string;
  name: string;
  mrp: number;
  description: string;
  weight: string;
  dimensions: string;
  category: string;
  subCategory: string;
  image: string[];
  feature: string[];
  ingredient : string[];
  usage: string;
}

export interface IProductResponse {
  message?: string;
  status?: string;
  data: IProduct[];
}

export interface IProductsLoadingAction {
  type: ProductActionTypes.LOADING;
}

export interface IProductsGetByCategoryAction {
  type: ProductActionTypes.GETBYCAT;
  products: IProduct[];
}

export interface IProductGetRecycleBagAction {
  type: ProductActionTypes.GETRECYCLE;
  product: IProduct[];
}

export type ProductsActions =
  | IProductsLoadingAction
  | IProductsGetByCategoryAction
  | IProductGetRecycleBagAction

export interface IProductsState {
  readonly currentProduct : IProduct;
  readonly products: IProduct[];
  readonly recycleProduct : IProduct[];
  readonly productsLoading: boolean;
}
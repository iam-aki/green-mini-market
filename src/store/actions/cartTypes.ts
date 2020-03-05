import { IProduct } from "./productTypes";

export enum CartActionTypes {
    ADD = "CART/ADD",
    REMOVE = "CART/REMOVE",
    LOADING = "CART/LOADING",
    DELETE = "CART/DELETE"
}

export interface ICart {
    product: IProduct;
    productId: string;
    count : number;
}

export interface ICartLoadingAction {
    type: CartActionTypes.LOADING;
}

export interface ICartAddAction {
    type: CartActionTypes.ADD;
    product: IProduct;
    productId: string;
}

export interface ICartRemoveAction {
    type: CartActionTypes.REMOVE;
    product: IProduct;
    productId: string;
}

export interface ICartDeleteAction {
    type: CartActionTypes.DELETE;
    product: IProduct;
    productId: string;
}

export type CartActions = ICartAddAction
    | ICartRemoveAction
    | ICartDeleteAction;

export interface ICartState {
    readonly cart: ICart[];
}
import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
    CartActionTypes,
    ICartState,
    ICartAddAction,
    ICartRemoveAction,
    ICartDeleteAction
} from "./cartTypes";
import { IProduct } from "./productTypes";

export const addToCart: ActionCreator<ThunkAction<
    Promise<AnyAction>,
    ICartState,
    null,
    ICartAddAction
>> = (productId: string, product: IProduct) => {
    return async (dispatch: Dispatch) => {
        return dispatch({
            productId,
            product,
            type: CartActionTypes.ADD
        });
    };;
};

export const removeFromCart: ActionCreator<ThunkAction<
    Promise<AnyAction>,
    ICartState,
    null,
    ICartRemoveAction
>> = (productId: string, product: IProduct) => {
    return async (dispatch: Dispatch) => {
        return dispatch({
            productId,
            product,
            type: CartActionTypes.REMOVE
        });
    }
};


export const deleteFromCart: ActionCreator<ThunkAction<
    Promise<AnyAction>,
    ICartState,
    null,
    ICartDeleteAction
>> = (productId: string, product: IProduct) => {
    return async (dispatch: Dispatch) => {
        return dispatch({
            productId,
            product,
            type: CartActionTypes.DELETE
        });
    }
};
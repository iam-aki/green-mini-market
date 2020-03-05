import { Reducer } from "redux";
import { CartActions, CartActionTypes, ICartState, ICart } from "../actions/cartTypes";

const initialCartState: ICartState = {
    cart: []
};


export const cartReducer: Reducer<ICartState, CartActions> = (
    state = initialCartState,
    action
) => {
    switch (action.type) {
        case CartActionTypes.ADD: {
            let itemExists = state.cart.find(cart => cart.productId === action.product.productId);
            if (itemExists) {
                itemExists.count = itemExists.count + 1;
                return {
                    ...state,
                    ...state.cart
                };
            } else {
                let cart: ICart = { productId: action.productId, product: action.product, count: 1 };
                state.cart.push(cart);
                return {
                    ...state,
                    ...state.cart
                };
            }
        }
        case CartActionTypes.REMOVE: {
            let itemExists = state.cart.find(cart => cart.productId === action.product.productId);
            if (itemExists && itemExists.count > 1) {
                itemExists.count = itemExists.count - 1;
                return {
                    ...state,
                    cart: state.cart
                };
            } else if (itemExists && itemExists.count === 1) {
                let index = state.cart.findIndex(item => item.product === action.product);
                state.cart.splice(index, 1);
                return {
                    ...state,
                    cart: state.cart
                };
            }
            else {
                return {
                    ...state,
                    cart: state.cart
                };
            }
        }
        case CartActionTypes.DELETE: {
            let itemExists = state.cart.find(cart => cart.productId === action.product.productId);
            if (itemExists) {
                itemExists.count = 0;
                let index = state.cart.indexOf(itemExists);
                if (index > -1)
                    state.cart.splice(index, 1);
                return {
                    ...state,
                    cart: state.cart
                };
            } else {
                return {
                    ...state,
                    ...state.cart
                };
            }
        }
        default: {
            return state;
        }
    }
};
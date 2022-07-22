import { types } from "../types/types";

const initialState = {
    products: [],
    active: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productAddNew:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        case types.productsLoad:
            return {
                ...state,
                products: [...action.payload]
            }
        case types.productActive:
            return {
                ...state,
                active: {...action.payload }
            }
        default:
            return state;
    }
}
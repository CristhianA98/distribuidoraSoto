import { types } from "../types/types";

const initialState = {
  products: [],
  active: null,
};

export const productReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.productAddNew:
            return{
                ...state,
                products:[action.payload, ...state.products]
            }
        default:
            return state;
    }
}
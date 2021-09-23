import { types } from "../types/types";

const initialState = {
  products: [],
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.carAddProduct:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

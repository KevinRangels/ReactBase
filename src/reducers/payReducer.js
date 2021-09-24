import { types } from "../types/types";

const initialState = {
  address: null,
};

export const payReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.payAddAddress:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

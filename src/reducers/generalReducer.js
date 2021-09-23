import { types } from "../types/types";

const initialState = {
  categories: [],
};

export const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.generalGetCategories:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

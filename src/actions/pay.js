import { types } from "../types/types";

export const handleAddAddress = (state) => ({
  type: types.payAddAddress,
  payload: state,
});

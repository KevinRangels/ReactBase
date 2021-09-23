import { types } from "../types/types";
import axios from "../axios";

export const requestGetAllCategories = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get("/get-categories");
      const { data } = res;
      dispatch(handleGetCategories(data));
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };
};

export const handleGetCategories = (state) => ({
  type: types.generalGetCategories,
  payload: state,
});

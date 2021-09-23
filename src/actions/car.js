import { types } from "../types/types";
import { toast, Slide } from "react-toastify";
import axios from "../axios";

export const addProductToCar = (product) => {
  return async (dispatch, getState) => {
    const { products } = getState().car;
    const { user } = getState().auth;

    if (!user) {
      if (!product.exist) {
        localStorage.setItem(
          "car",
          JSON.stringify([...products, product.product])
        );

        dispatch(handleAddProduct([...products, product.product]));
      } else {
        dispatch(handleAddProduct(product.products));
      }
    }

    toast("Producto agregado al carrito", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };
};

export const handleDeleteItem = (product) => {
  return async (dispatch, getState) => {
    const { products } = getState().car;

    let productList = products.filter((e, index) => {
      return e.id !== product.id;
    });

    localStorage.setItem("car", JSON.stringify(productList));

    dispatch(handleAddProduct(productList));

    toast("Producto eliminado del carrito", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };
};

export const handleAddProduct = (state) => ({
  type: types.carAddProduct,
  payload: state,
});

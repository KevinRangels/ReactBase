import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { transformTextCurrency } from "../../helpers/transformText";
import { addProductValidation } from "../../helpers/shoppingCar";
import { toast, Slide } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCar } from "../../actions/car";

export const ProductCard = ({ data }) => {
  const history = useHistory();

  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.car);

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (opt) => {
    if (opt === "+") {
      let newQuantity = quantity + 1;
      setQuantity(newQuantity);
      return;
    }
    if (opt === "-") {
      if (quantity === 1) {
        return;
      }
      let newQuantity = quantity - 1;
      setQuantity(newQuantity);
      return;
    }
  };

  const handleViewProduct = () => {
    history.push("/producto");
  };

  const handleAddWishlist = () => {
    if (!user) {
      toast("Debes iniciar sesión", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      return false;
    }
  };

  const handleAddToCar = (product) => {
    let objProduct = {
      id: product.id,
      name: product.name,
      cost: product.cost,
      quantity: quantity,
      image: product.image,
      total: product.cost * quantity,
    };

    let foo = addProductValidation(objProduct, products);

    console.log("foo", foo);

    dispatch(addProductToCar(foo));
  };

  return (
    <div class="product-item">
      <div class="product-img">
        <img
          src={`${process.env.REACT_APP_URL_BASE}/images/products/${data.image[0]}`}
          alt={data.name}
          onClick={handleViewProduct}
        />
        <div class="product-absolute-options">
          <span class="offer-badge-1">Nuevo</span>
          <span
            class="like-icon"
            title="wishlist"
            onClick={handleAddWishlist}
          ></span>
        </div>
      </div>
      <div class="product-text-dt">
        <p>
          Disponibles<span>(En Stock)</span>
        </p>
        <h4>{data.name}</h4>
        <div class="product-price">${transformTextCurrency(data.cost)}</div>
        {/* <div class="product-price">
          ${data.cost} <span>$15</span>
        </div> */}
        <div class="qty-cart">
          <div class="quantity buttons_added">
            <input
              type="button"
              onClick={() => handleQuantity("-")}
              class="minus "
              value="-"
            />
            <input
              type="number"
              // step="1"
              // min="1"
              name="quantity"
              value={quantity}
              class="input-text qty text"
              id={`cardProduct_${data.id}`}
            />
            <input
              type="button"
              onClick={() => handleQuantity("+")}
              class="plus"
              value="+"
            />
          </div>
          <span class="cart-icon" onClick={() => handleAddToCar(data)}>
            <i class="uil uil-shopping-cart-alt"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

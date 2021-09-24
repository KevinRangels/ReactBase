import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddProduct, handleDeleteItem } from "../../actions/car";
import {
  addItemProductValid,
  subtractItemProductValid,
} from "../../helpers/shoppingCar";
import { transformTextCurrency } from "../../helpers/transformText";

export const ItemCart = ({ data }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.car);

  const handleAddItemProduct = (opt, product, products) => {
    if (opt === "+") {
      let res = addItemProductValid(product, products);
      dispatch(handleAddProduct(res));
    }
    if (opt === "-") {
      if (data.quantity === 1) {
        return;
      }
      let res = subtractItemProductValid(product, products);
      dispatch(handleAddProduct(res));
    }
  };

  const handleCounter = () => {
    return (
      <div class="quantity buttons_added">
        <input
          type="button"
          value="-"
          class="minus"
          onClick={() => handleAddItemProduct("-", data, products)}
        />
        <input
          type="number"
          name="quantity"
          value={data.quantity}
          class="input-text qty text"
        />
        <input
          type="button"
          value="+"
          class="plus"
          onClick={() => handleAddItemProduct("+", data, products)}
        />
      </div>
    );
  };

  useEffect(() => {
    handleCounter();
  }, [products]);

  return (
    <div class="cart-item">
      <div class="cart-product-img">
        <img
          src={`${process.env.REACT_APP_URL_BASE}/images/products/${data.image}`}
          alt={data.name}
        />
        {/* <div class="offer-badge">6% OFF</div> */}
      </div>
      <div class="cart-text">
        <h4>{data.name}</h4>
        <div class="cart-radio">
          <ul class="kggrm-now">
            <li>
              <input type="radio" id="a1" name="cart1" />
              <label for="a1">0.50</label>
            </li>
            <li>
              <input type="radio" id="a2" name="cart1" />
              <label for="a2">1kg</label>
            </li>
            <li>
              <input type="radio" id="a3" name="cart1" />
              <label for="a3">2kg</label>
            </li>
            <li>
              <input type="radio" id="a4" name="cart1" />
              <label for="a4">3kg</label>
            </li>
          </ul>
        </div>
        <div class="qty-group">
          {handleCounter()}
          <div class="cart-item-price">
            ${transformTextCurrency(data.cost * data.quantity)}
          </div>
          {/* <div class="cart-item-price">
            $10 <span>$15</span>
          </div> */}
        </div>

        <button
          type="button"
          class="cart-close-btn"
          onClick={() => dispatch(handleDeleteItem(data))}
        >
          <i class="uil uil-multiply"></i>
        </button>
      </div>
    </div>
  );
};

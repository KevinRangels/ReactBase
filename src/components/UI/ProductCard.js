import React from "react";
import { useHistory } from "react-router-dom";
import imageDefault from "../../assets/images/product/img-2.jpg";

export const ProductCard = () => {
  const history = useHistory();

  const handleViewProduct = () => {
    history.push("/producto");
  };

  return (
    <div class="product-item">
      <a onClick={handleViewProduct} href="#" class="product-img">
        <img src={imageDefault} alt="" />
        <div class="product-absolute-options">
          <span class="offer-badge-1">Nuevo</span>
          <span class="like-icon" title="wishlist"></span>
        </div>
      </a>
      <div class="product-text-dt">
        <p>
          Disponibles<span>(En Stock)</span>
        </p>
        <h4>Product Title Here</h4>
        <div class="product-price">
          $12 <span>$15</span>
        </div>
        <div class="qty-cart">
          <div class="quantity buttons_added">
            <input type="button" value="-" class="minus minus-btn" />
            <input
              type="number"
              step="1"
              name="quantity"
              value="1"
              class="input-text qty text"
            />
            <input type="button" value="+" class="plus plus-btn" />
          </div>
          <span class="cart-icon">
            <i class="uil uil-shopping-cart-alt"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleDeleteItem } from "../../actions/car";
import { transformTextCurrency } from "../../helpers/transformText";

export const ItemCart = ({ data }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(data.quantity);

  return (
    <div class="cart-item">
      <div class="cart-product-img">
        <img
          src={`${process.env.REACT_APP_URL_BASE}/images/products/${data.image[0]}`}
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
          <div class="quantity buttons_added">
            <input type="button" value="-" class="minus minus-btn" />
            <input
              type="number"
              step="1"
              name="quantity"
              value={quantity}
              class="input-text qty text"
            />
            <input type="button" value="+" class="plus plus-btn" />
          </div>
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

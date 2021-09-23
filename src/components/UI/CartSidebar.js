import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { transformTextCurrency } from "../../helpers/transformText";
import { ItemCart } from "./ItemCart";

export const CartSidebar = () => {
  const { products } = useSelector((state) => state.car);

  const [totalAmount, setTotalAmount] = useState(0);

  const handleCarAmountTotal = () => {
    let totalAmount = products.reduce(
      (sum, value) => parseFloat(sum) + parseFloat(value.total),
      0
    );
    return totalAmount;
  };

  useEffect(() => {
    setTotalAmount(handleCarAmountTotal());
  }, [products]);

  return (
    <div class="bs-canvas bs-canvas-left position-fixed bg-cart h-100">
      <div class="bs-canvas-header side-cart-header p-3 ">
        <div class="d-inline-block  main-cart-title">
          Mi carrito{" "}
          <span>
            {products.length === 0 ? "" : `(${products.length} Items)`}
          </span>
        </div>
        <button type="button" class="bs-canvas-close close" aria-label="Close">
          <i class="uil uil-multiply"></i>
        </button>
      </div>
      <div class="bs-canvas-body">
        {/* <div class="cart-top-total">
          <div class="cart-total-dil">
            <h4>Gambo Super Market</h4>
            <span>$34</span>
          </div>
          <div class="cart-total-dil pt-2">
            <h4>Delivery Charges</h4>
            <span>$1</span>
          </div>
        </div> */}
        <div class="side-cart-items">
          {products.map((data) => (
            <ItemCart key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div class="bs-canvas-footer">
        {/* <div class="cart-total-dil saving-total ">
          <h4>Ahorro total</h4>
          <span>$11</span>
        </div> */}
        <div class="main-total-cart">
          <h2>Total</h2>
          <span>${transformTextCurrency(totalAmount)}</span>
        </div>
        <div class="checkout-cart">
          <a href="#" class="promo-code">
            ¿Tienes un código?
          </a>
          <Link to="/checkout" class="cart-checkout-btn hover-btn">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

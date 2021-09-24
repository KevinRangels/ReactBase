import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { transformTextCurrency } from "../../helpers/transformText";
import { ItemCart } from "./ItemCart";
import { toast, Slide } from "react-toastify";

export const CartSidebar = () => {
  const history = useHistory();
  const { car } = useSelector((state) => state);
  const { products } = useSelector((state) => state.car);
  const { user } = useSelector((state) => state.auth);

  const [cartProducts, setCartProducts] = useState([]);

  const handleCarAmountTotal = () => {
    let totalAmount = cartProducts.reduce(
      (sum, value) => parseFloat(sum) + parseFloat(value.total),
      0
    );
    return totalAmount;
  };

  const sideCartItem = (cartProducts) => {
    return (
      <div class="side-cart-items">
        {cartProducts.map((data) => (
          <ItemCart key={data.id} data={data} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    setCartProducts(products);
    sideCartItem(cartProducts);
  }, [car]);

  const handleGoCheckout = () => {
    if (!user) {
      toast("Debes iniciar sesion", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      return;
    }
    history.push(`/checkout`);
    document.getElementById("btnCart_modal").click();
  };

  return (
    <div class="bs-canvas bs-canvas-left position-fixed bg-cart h-100">
      <div class="bs-canvas-header side-cart-header p-3 ">
        <div class="d-inline-block  main-cart-title">
          Mi carrito{" "}
          <span>
            {cartProducts.length === 0 ? "" : `(${cartProducts.length} Items)`}
          </span>
        </div>
        <button
          type="button"
          class="bs-canvas-close close"
          aria-label="Close"
          id="btnCart_modal"
        >
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
        {sideCartItem(cartProducts)}
      </div>
      <div class="bs-canvas-footer">
        {/* <div class="cart-total-dil saving-total ">
          <h4>Ahorro total</h4>
          <span>$11</span>
        </div> */}
        <div class="main-total-cart">
          <h2>Total</h2>
          <span>${transformTextCurrency(handleCarAmountTotal())}</span>
        </div>
        <div class="checkout-cart">
          <a href="#" class="promo-code">
            ¿Tienes un código?
          </a>
          <button
            onClick={handleGoCheckout}
            class="cart-checkout-btn hover-btn"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

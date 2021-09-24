import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteItem } from "../../actions/car";
import { transformTextCurrency } from "../../helpers/transformText";
export const CartSummary = () => {
  const { products } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const handleCarAmountTotal = () => {
    let totalAmount = products.reduce(
      (sum, value) => parseFloat(sum) + parseFloat(value.total),
      0
    );
    return totalAmount;
  };

  useEffect(() => {
    handleCarAmountTotal();
  }, [products]);
  return (
    <>
      <div className="pdpt-title">
        <h4>Resumen de la orden</h4>
      </div>
      <div className="right-cart-dt-body">
        {products.map((data) => (
          <div className="cart-item border_radius">
            <div className="cart-product-img">
              <img
                src={`${process.env.REACT_APP_URL_BASE}/images/products/${data?.image}`}
                alt={data?.name}
              />
              {/* <div className="offer-badge">4% OFF</div> */}
            </div>
            <div className="cart-text">
              <h4>{data?.name}</h4>
              {/* <div className="cart-item-price">
                $15 <span>$18</span>
              </div> */}
              <div className="cart-item-price">
                ${transformTextCurrency(data.total)}
              </div>
              <button
                type="button"
                className="cart-close-btn"
                onClick={() => dispatch(handleDeleteItem(data))}
              >
                <i className="uil uil-multiply"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div class="main-total-cart">
        <h2>Total</h2>
        <span>${transformTextCurrency(handleCarAmountTotal())}</span>
      </div>
    </>
  );
};

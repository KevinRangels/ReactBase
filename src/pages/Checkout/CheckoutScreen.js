import React, { useState } from "react";
import { AddressForm } from "../../components/Checkout/AddressForm";
import { CartSummary } from "../../components/Checkout/CartSummary";
import { TdcForm } from "../../components/Checkout/TdcForm";
import { Breadcrumb } from "../../components/UI/Breadcrumb";

export const CheckoutScreen = () => {
  const [typePayment, setTypePayment] = useState(null);

  const handleSelectPayment = (e) => {
    setTypePayment(e.target.value);
  };
  return (
    <>
      <Breadcrumb page="Checkout" />
      <div class="all-product-grid">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-7">
              <div id="checkout_wizard" class="checkout accordion left-chck145">
                <div class="checkout-step">
                  <div class="checkout-card" id="headingTwo">
                    <span class="checkout-step-number">1</span>
                    <h4 class="checkout-step-title">
                      <button
                        class="wizard-btn collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        id="btnCheckoutAddress"
                      >
                        {" "}
                        Dirección de entrega
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#checkout_wizard"
                  >
                    <AddressForm />
                  </div>
                </div>
                <div class="checkout-step">
                  <div class="checkout-card" id="headingFour">
                    <span class="checkout-step-number">2</span>
                    <h4 class="checkout-step-title">
                      <button
                        class="wizard-btn collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                        id="btnCheckoutPayments"
                      >
                        Pagos
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#checkout_wizard"
                  >
                    <div class="checkout-step-body">
                      <div class="payment_method-checkout">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="rpt100">
                              <ul class="radio--group-inline-container_1">
                                <li>
                                  <div class="radio-item_1">
                                    <input
                                      id="cashondelivery1"
                                      value="cashondelivery"
                                      name="paymentmethod"
                                      type="radio"
                                      data-minimum="50.0"
                                      onChange={handleSelectPayment}
                                    />
                                    <label
                                      htmlFor="cashondelivery1"
                                      class="radio-label_1"
                                    >
                                      Contra reembolso
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div class="radio-item_1">
                                    <input
                                      id="card1"
                                      value="card"
                                      name="paymentmethod"
                                      type="radio"
                                      data-minimum="50.0"
                                      onChange={handleSelectPayment}
                                    />
                                    <label
                                      htmlFor="card1"
                                      class="radio-label_1"
                                    >
                                      Tarjeta de crédito / débito
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              class="form-group return-departure-dts"
                              data-method="cashondelivery"
                            >
                              <div class="row">
                                {typePayment === "cashondelivery" && (
                                  <div class="col-lg-12">
                                    <div class="pymnt_title">
                                      <h4>Contra reembolso</h4>
                                      <p>
                                        El pago contra reembolso no estará
                                        disponible si el valor de su pedido
                                        supera los $ 10.
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                            {typePayment === "card" && <TdcForm />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-5">
              <div class="pdpt-bg mt-0">
                <CartSummary />
                <div class="payment-secure">
                  <i class="uil uil-padlock"></i>Pago seguro
                </div>
              </div>
              <a href="#" class="promo-link45">
                ¿Tienes un código de promoción?
              </a>
              <div class="checkout-safety-alerts">
                <p>
                  <i class="uil uil-sync"></i>100% Garantía de reemplazo
                </p>
                <p>
                  <i class="uil uil-check-square"></i>100% Productos genuinos
                </p>
                <p>
                  <i class="uil uil-shield-check"></i>Pagos seguros
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { Breadcrumb } from "../../components/UI/Breadcrumb";

export const OffersScreen = () => {
  return (
    <>
      <Breadcrumb page="Ofertas" />
      <div class="all-product-grid mb-14">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="default-title mt-4">
                <h2>Ofertas</h2>
                <img src="assets/images/line.svg" alt="" />
              </div>
            </div>
            <div class="col-lg-4">
              <a href="#" class="offers-item">
                <div class="offer-img">
                  <img src="assets/images/offers/img-1.jpg" alt="" />
                </div>
                <div class="offers-text">
                  <h4>📢 Offer Title Here!</h4>
                  <p>Up to 25% off on Vegetables & Fruits & much more</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <a href="#" class="offers-item">
                <div class="offer-img">
                  <img src="assets/images/offers/img-2.jpg" alt="" />
                </div>
                <div class="offers-text">
                  <h4>📢 Offer Title Here!</h4>
                  <p>Up to 25% off on Grocery & Staples & much more</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <a href="#" class="offers-item">
                <div class="offer-img">
                  <img src="assets/images/offers/img-3.jpg" alt="" />
                </div>
                <div class="offers-text">
                  <h4>📢 Offer Title Here!</h4>
                  <p>Up to 75% off on Personal Care & much more</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import OwlCarousel from "react-owl-carousel";

export const MainBanner = () => {
  return (
    <div class="main-banner-slider">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <OwlCarousel
              items={3}
              className="owl-theme"
              loop
              margin={8}
              autoplay={true}
              dots={false}
              responsive={{
                0: {
                  items: 1,
                  nav: false,
                },
                600: {
                  items: 2,
                  nav: false,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              <div class="item">
                <div class="offer-item">
                  <div class="offer-item-img">
                    <div class="gambo-overlay"></div>
                    <img src="assets/images/banners/offer-1.jpg" alt="" />
                  </div>
                  <div class="offer-text-dt">
                    <div class="offer-top-text-banner">
                      <p>6% Off</p>
                      <div class="top-text-1">Buy More & Save More</div>
                      <span>Fresh Vegetables</span>
                    </div>
                    <a href="#" class="Offer-shop-btn hover-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="offer-item">
                  <div class="offer-item-img">
                    <div class="gambo-overlay"></div>
                    <img src="assets/images/banners/offer-2.jpg" alt="" />
                  </div>
                  <div class="offer-text-dt">
                    <div class="offer-top-text-banner">
                      <p>5% Off</p>
                      <div class="top-text-1">Buy More & Save More</div>
                      <span>Fresh Fruits</span>
                    </div>
                    <a href="#" class="Offer-shop-btn hover-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="offer-item">
                  <div class="offer-item-img">
                    <div class="gambo-overlay"></div>
                    <img src="assets/images/banners/offer-3.jpg" alt="" />
                  </div>
                  <div class="offer-text-dt">
                    <div class="offer-top-text-banner">
                      <p>3% Off</p>
                      <div class="top-text-1">Hot Deals on New Items</div>
                      <span>Daily Essentials Eggs & Dairy</span>
                    </div>
                    <a href="#" class="Offer-shop-btn hover-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="offer-item">
                  <div class="offer-item-img">
                    <div class="gambo-overlay"></div>
                    <img src="assets/images/banners/offer-4.jpg" alt="" />
                  </div>
                  <div class="offer-text-dt">
                    <div class="offer-top-text-banner">
                      <p>2% Off</p>
                      <div class="top-text-1">Buy More & Save More</div>
                      <span>Beverages</span>
                    </div>
                    <a href="#" class="Offer-shop-btn hover-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

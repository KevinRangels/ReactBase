import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

export const TopFeaturedProducts = () => {
  return (
    <div class="section145">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-title-tt">
              <div class="main-title-left">
                <span>Para ti</span>
                <h2>Top Productos Destacados</h2>
              </div>
              <Link to="/shop " class="see-more-btn">
                Ver Todo
              </Link>
            </div>
          </div>
          <div class="col-md-12">
            <OwlCarousel
              items={3}
              className="owl-carousel featured-slider owl-theme"
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
                  items: 4,
                },
              }}
            >
              <div class="item">
                <div class="product-item">
                  <a
                    href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                    class="product-img"
                  >
                    <img src="assets/images/product/img-1.jpg" alt="" />
                    <div class="product-absolute-options">
                      <span class="offer-badge-1">6% off</span>
                      <span class="like-icon" title="wishlist"></span>
                    </div>
                  </a>
                  <div class="product-text-dt">
                    <p>
                      Available<span>(In Stock)</span>
                    </p>
                    <h4>Product Title Here</h4>
                    <div class="product-price">
                      $12 <span>$15</span>
                    </div>
                    <div class="qty-cart">
                      <div class="quantity buttons_added">
                        <input
                          type="button"
                          value="-"
                          class="minus minus-btn"
                        />
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
              </div>
              <div class="item">
                <div class="product-item">
                  <a
                    href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                    class="product-img"
                  >
                    <img src="assets/images/product/img-2.jpg" alt="" />
                    <div class="product-absolute-options">
                      <span class="offer-badge-1">2% off</span>
                      <span class="like-icon" title="wishlist"></span>
                    </div>
                  </a>
                  <div class="product-text-dt">
                    <p>
                      Available<span>(In Stock)</span>
                    </p>
                    <h4>Product Title Here</h4>
                    <div class="product-price">
                      $10 <span>$13</span>
                    </div>
                    <div class="qty-cart">
                      <div class="quantity buttons_added">
                        <input
                          type="button"
                          value="-"
                          class="minus minus-btn"
                        />
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
              </div>
              <div class="item">
                <div class="product-item">
                  <a
                    href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                    class="product-img"
                  >
                    <img src="assets/images/product/img-3.jpg" alt="" />
                    <div class="product-absolute-options">
                      <span class="offer-badge-1">5% off</span>
                      <span class="like-icon" title="wishlist"></span>
                    </div>
                  </a>
                  <div class="product-text-dt">
                    <p>
                      Available<span>(In Stock)</span>
                    </p>
                    <h4>Product Title Here</h4>
                    <div class="product-price">
                      $5 <span>$8</span>
                    </div>
                    <div class="qty-cart">
                      <div class="quantity buttons_added">
                        <input
                          type="button"
                          value="-"
                          class="minus minus-btn"
                        />
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
              </div>
              <div class="item">
                <div class="product-item">
                  <a
                    href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                    class="product-img"
                  >
                    <img src="assets/images/product/img-4.jpg" alt="" />
                    <div class="product-absolute-options">
                      <span class="offer-badge-1">3% off</span>
                      <span class="like-icon" title="wishlist"></span>
                    </div>
                  </a>
                  <div class="product-text-dt">
                    <p>
                      Available<span>(In Stock)</span>
                    </p>
                    <h4>Product Title Here</h4>
                    <div class="product-price">
                      $15 <span>$20</span>
                    </div>
                    <div class="qty-cart">
                      <div class="quantity buttons_added">
                        <input
                          type="button"
                          value="-"
                          class="minus minus-btn"
                        />
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
              </div>
              <div class="item">
                <div class="product-item">
                  <a
                    href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                    class="product-img"
                  >
                    <img src="assets/images/product/img-5.jpg" alt="" />
                    <div class="product-absolute-options">
                      <span class="offer-badge-1">2% off</span>
                      <span class="like-icon" title="wishlist"></span>
                    </div>
                  </a>
                  <div class="product-text-dt">
                    <p>
                      Available<span>(In Stock)</span>
                    </p>
                    <h4>Product Title Here</h4>
                    <div class="product-price">
                      $9 <span>$10</span>
                    </div>
                    <div class="qty-cart">
                      <div class="quantity buttons_added">
                        <input
                          type="button"
                          value="-"
                          class="minus minus-btn"
                        />
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
              </div>
              <div class="item">
                <div class="product-item">
                  <a
                    href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                    class="product-img"
                  >
                    <img src="assets/images/product/img-6.jpg" alt="" />
                    <div class="product-absolute-options">
                      <span class="offer-badge-1">2% off</span>
                      <span class="like-icon" title="wishlist"></span>
                    </div>
                  </a>
                  <div class="product-text-dt">
                    <p>
                      Available<span>(In Stock)</span>
                    </p>
                    <h4>Product Title Here</h4>
                    <div class="product-price">
                      $7 <span>$8</span>
                    </div>
                    <div class="qty-cart">
                      <div class="quantity buttons_added">
                        <input
                          type="button"
                          value="-"
                          class="minus minus-btn"
                        />
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
              </div>
              <div class="item">
                <div class="product-item">
                  <a
                    href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                    class="product-img"
                  >
                    <img src="assets/images/product/img-7.jpg" alt="" />
                    <div class="product-absolute-options">
                      <span class="offer-badge-1">1% off</span>
                      <span class="like-icon" title="wishlist"></span>
                    </div>
                  </a>
                  <div class="product-text-dt">
                    <p>
                      Available<span>(In Stock)</span>
                    </p>
                    <h4>Product Title Here</h4>
                    <div class="product-price">
                      $6.95 <span>$7</span>
                    </div>
                    <div class="qty-cart">
                      <div class="quantity buttons_added">
                        <input
                          type="button"
                          value="-"
                          class="minus minus-btn"
                        />
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
              </div>
              <div class="item">
                <div class="product-item">
                  <a
                    href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                    class="product-img"
                  >
                    <img src="assets/images/product/img-8.jpg" alt="" />
                    <div class="product-absolute-options">
                      <span class="offer-badge-1">3% off</span>
                      <span class="like-icon" title="wishlist"></span>
                    </div>
                  </a>
                  <div class="product-text-dt">
                    <p>
                      Available<span>(In Stock)</span>
                    </p>
                    <h4>Product Title Here</h4>
                    <div class="product-price">
                      $8 <span>$10</span>
                    </div>
                    <div class="qty-cart">
                      <div class="quantity buttons_added">
                        <input
                          type="button"
                          value="-"
                          class="minus minus-btn"
                        />
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
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};
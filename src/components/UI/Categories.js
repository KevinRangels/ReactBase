import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

export const Categories = () => {
  return (
    <div class="section145">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-title-tt">
              <div class="main-title-left">
                <span>Comprar por</span>
                <h2>Categorías</h2>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <OwlCarousel
              items={6}
              className="owl-theme"
              loop
              margin={38}
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
                  items: 6,
                },
              }}
            >
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-1.svg" alt="" />
                  </div>
                  <h4>Vegetables & Fruits</h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-2.svg" alt="" />
                  </div>
                  <h4> Grocery & Staples </h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-3.svg" alt="" />
                  </div>
                  <h4> Dairy & Eggs </h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-4.svg" alt="" />
                  </div>
                  <h4> Beverages </h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-5.svg" alt="" />
                  </div>
                  <h4> Snacks </h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-6.svg" alt="" />
                  </div>
                  <h4> Home Care </h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-7.svg" alt="" />
                  </div>
                  <h4> Noodles & Sauces </h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-8.svg" alt="" />
                  </div>
                  <h4> Personal Care </h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-9.svg" alt="" />
                  </div>
                  <h4> Pet Care </h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-10.svg" alt="" />
                  </div>
                  <h4> Meat & Seafood </h4>
                </Link>
              </div>
              <div class="item">
                <Link to="/shop" class="category-item">
                  <div class="cate-img">
                    <img src="assets/images/category/icon-11.svg" alt="" />
                  </div>
                  <h4> Electronics </h4>
                </Link>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

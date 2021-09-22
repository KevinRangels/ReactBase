import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const CategoryModalStart = () => {
  const history = useHistory();

  const handleSelectCategory = (route) => {
    history.push(`/shop`);
    document.getElementById("btnCategory_model").click();
  };

  return (
    <div
      id="category_model"
      class="header-cate-model main-gambo-model modal fade"
      tabindex="-1"
      role="dialog"
      aria-modal="false"
    >
      <div class="modal-dialog category-area" role="document">
        <div class="category-area-inner">
          <div class="modal-header">
            <button
              type="button"
              class="close btn-close"
              data-dismiss="modal"
              aria-label="Close"
              id="btnCategory_model"
            >
              <i class="uil uil-multiply"></i>
            </button>
          </div>
          <div class="category-model-content modal-content">
            <div class="cate-header">
              <h4>Select Category</h4>
            </div>
            <ul class="category-by-cat">
              <li>
                <button
                  onClick={() => handleSelectCategory()}
                  class="single-cat-item"
                  style={{
                    background: "none",
                    border: "none",
                  }}
                >
                  <div class="icon">
                    <img src="assets/images/category/icon-1.svg" alt="" />
                  </div>
                  <div class="text"> Fruits and Vegetables </div>
                </button>
              </li>
              <li>
                <Link to="/shop" class="single-cat-item">
                  <div class="icon">
                    <img src="assets/images/category/icon-2.svg" alt="" />
                  </div>
                  <div class="text"> Grocery & Staples </div>
                </Link>
              </li>
              <li>
                <Link to="/shop" class="single-cat-item">
                  <div class="icon">
                    <img src="assets/images/category/icon-3.svg" alt="" />
                  </div>
                  <div class="text"> Dairy & Eggs </div>
                </Link>
              </li>
              <li>
                <Link to="/shop" class="single-cat-item">
                  <div class="icon">
                    <img src="assets/images/category/icon-4.svg" alt="" />
                  </div>
                  <div class="text"> Beverages </div>
                </Link>
              </li>
              <li>
                <Link to="/shop" class="single-cat-item">
                  <div class="icon">
                    <img src="assets/images/category/icon-5.svg" alt="" />
                  </div>
                  <div class="text"> Snacks </div>
                </Link>
              </li>
              <li>
                <Link to="/shop" class="single-cat-item">
                  <div class="icon">
                    <img src="assets/images/category/icon-6.svg" alt="" />
                  </div>
                  <div class="text"> Home Care </div>
                </Link>
              </li>
              <li>
                <Link to="/shop" class="single-cat-item">
                  <div class="icon">
                    <img src="assets/images/category/icon-7.svg" alt="" />
                  </div>
                  <div class="text"> Noodles & Sauces </div>
                </Link>
              </li>
              <li>
                <Link to="/shop" class="single-cat-item">
                  <div class="icon">
                    <img src="assets/images/category/icon-8.svg" alt="" />
                  </div>
                  <div class="text"> Personal Care </div>
                </Link>
              </li>
              <li>
                <Link to="/shop" class="single-cat-item">
                  <div class="icon">
                    <img src="assets/images/category/icon-9.svg" alt="" />
                  </div>
                  <div class="text"> Pet Care </div>
                </Link>
              </li>
            </ul>
            <Link to="/shop" class="morecate-btn">
              <i class="uil uil-apps"></i>More Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

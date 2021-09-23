import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { transformTextUppercase } from "../../../helpers/transformText";

export const CategoryModalStart = () => {
  const history = useHistory();

  const { categories } = useSelector((state) => state.general);

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
              <h4>Seleccionar categoría</h4>
            </div>
            <ul class="category-by-cat">
              {categories.map((data) => (
                <li>
                  <Link to="/shop" class="single-cat-item">
                    <div class="icon">
                      <img src="assets/images/category/icon-9.svg" alt="" />
                    </div>
                    <div class="text"> {transformTextUppercase(data.name)}</div>
                  </Link>
                </li>
              ))}
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

import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { useSelector } from "react-redux";
import { transformTextUppercase } from "../../helpers/transformText";

export const Categories = () => {
  const { categories } = useSelector((state) => state.general);

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
          {categories.length > 0 && (
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
                {categories.map((data) => (
                  <div class="item" key={data.id}>
                    <Link to="/shop" class="category-item">
                      <div class="cate-img">
                        <img src="assets/images/category/icon-1.svg" alt="" />
                      </div>
                      <h4>{transformTextUppercase(data.name)}</h4>
                    </Link>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

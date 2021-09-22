import React from "react";
import OwlCarousel from "react-owl-carousel";
import { ProductCard } from "../UI/ProductCard";

export const AddedNewProducts = () => {
  return (
    <div class="section145">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-title-tt">
              <div class="main-title-left">
                <span>Para ti</span>
                <h2>Nuevos Productos Agregados</h2>
              </div>
              <a href="#" class="see-more-btn">
                Ver Todo
              </a>
            </div>
          </div>
          <div class="col-md-12">
            <OwlCarousel
              items={4}
              className="owl-carousel featured-slider owl-theme"
              loop
              margin={8}
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
                <ProductCard />
              </div>
              <div class="item">
                <ProductCard />
              </div>
              <div class="item">
                <ProductCard />
              </div>
              <div class="item">
                <ProductCard />
              </div>
              <div class="item">
                <ProductCard />
              </div>
              <div class="item">
                <ProductCard />
              </div>
              <div class="item">
                <ProductCard />
              </div>
              <div class="item">
                <ProductCard />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import axios from "../../axios";
import OwlCarousel from "react-owl-carousel";
import { ProductCard } from "../UI/ProductCard";

export const AddedNewProducts = () => {
  const [products, setProducts] = useState([]);

  const getNewProducts = async () => {
    let res = await axios.get("/new-products");
    let { data } = res;
    setProducts(data.products);
  };

  useEffect(() => {
    getNewProducts();
  }, []);

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
          {products.length > 0 && (
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
                {products.map((data) => (
                  <div class="item" key={data.id}>
                    <ProductCard data={data} />
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

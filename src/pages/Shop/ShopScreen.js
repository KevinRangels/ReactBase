import React, { useState } from "react";
import { FiltersSection } from "../../components/Shop/FiltersSection";
import { Breadcrumb } from "../../components/UI/Breadcrumb";
import { ProductCard } from "../../components/UI/ProductCard";

export const ShopScreen = () => {
  const [viewFilters, setViewFilters] = useState(false);

  return (
    <>
      <Breadcrumb page="Tienda" />
      <div class="all-product-grid">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="product-top-dt">
                <div class="product-left-title">
                  <h2>Vegetables & Fruits</h2>
                </div>
                <a href="#" class="filter-btn pull-bs-canvas-right">
                  Filtros
                </a>
                <div class="product-sort">
                  <div
                    class="ui selection dropdown vchrt-dropdown"
                    style={{
                      zIndex: "100",
                    }}
                    onClick={() => setViewFilters(!viewFilters)}
                  >
                    <input name="gender" type="hidden" value="default" />
                    <i class="dropdown icon d-icon"></i>
                    <div class="text">Popularidad</div>
                    {viewFilters && (
                      <div
                        class="menu"
                        style={{
                          display: "block",
                        }}
                      >
                        <div class="item" data-value="0">
                          Popularidad
                        </div>
                        <div class="item" data-value="1">
                          Precio - Bajo a Alto
                        </div>
                        <div class="item" data-value="2">
                          Precio - Alto a Bajo
                        </div>
                        <div class="item" data-value="3">
                          Alfabético
                        </div>
                        <div class="item" data-value="4">
                          Ahorro - Alto a Bajo
                        </div>
                        <div class="item" data-value="5">
                          Ahorro - Bajo a Alto
                        </div>
                        <div class="item" data-value="6">
                          Ahorro - Bajo a Alto
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-list-view">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <ProductCard />
              </div>
              <div class="col-md-12">
                <div class="more-product-btn">
                  <button
                    class="show-more-btn hover-btn"
                    onclick="window.location.href = '#';"
                  >
                    Ver mas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FiltersSection />
    </>
  );
};

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { transformTextUppercase } from "../../helpers/transformText";
import axios from "../../axios";

export const FiltersSection = () => {
  const { categories } = useSelector((state) => state.general);
  const [brands, setBrands] = useState([]);

  const handleGetBrands = async () => {
    let res = await axios.get("/get-brands");
    let { data } = res;
    setBrands(data);
  };

  useEffect(() => {
    handleGetBrands();
  }, []);

  return (
    <div className="bs-canvas bs-canvas-right position-fixed bg-cart h-100">
      <div className="bs-canvas-header side-cart-header p-3 ">
        <div className="d-inline-block  main-cart-title">Filtros</div>
        <button
          type="button"
          className="bs-canvas-close close"
          aria-label="Close"
        >
          <i className="uil uil-multiply"></i>
        </button>
      </div>
      <div className="bs-canvas-body filter-body">
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Categorías</h4>
          </div>
          <div className="filter-item-body scrollstyle_4">
            <div className="cart-radio">
              <ul className="cte-select">
                <li>
                  <input type="radio" id="c1" name="category1" />
                  <label for="c1">All</label>
                </li>
                {categories.map((data) => (
                  <li>
                    <input
                      type="radio"
                      id={`filterCategory-${data.id}`}
                      name="category1"
                      checked
                    />
                    <label for="c2">{transformTextUppercase(data.name)}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Marcas</h4>
          </div>
          <div className="other-item-body scrollstyle_4">
            <div className="brand-list">
              <div className="search-by-catgory">
                <div className="ui search">
                  <div className="ui left icon input swdh10">
                    <input
                      className="prompt srch10"
                      type="text"
                      placeholder="Buscar por marca"
                    />
                    <i className="uil uil-search-alt icon icon1"></i>
                  </div>
                </div>
              </div>
              {categories.map((data) => (
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`brandFilter_${data.id}`}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`brandFilter_${data.id}`}
                  >
                    {transformTextUppercase(data.name)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Precio</h4>
          </div>
          <div className="price-pack-item-body scrollstyle_4">
            <div className="brand-list">
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_1"
                />
                <label className="custom-control-label" for="price_1">
                  Less than $2 <span className="webproduct">(9)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_2"
                />
                <label className="custom-control-label" for="price_2">
                  $2 to $5 <span className="webproduct">(8)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_3"
                />
                <label className="custom-control-label" for="price_3">
                  $6 to $10 <span className="webproduct">(12)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_4"
                />
                <label className="custom-control-label" for="price_4">
                  $11 to $15 <span className="webproduct">(4)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_5"
                />
                <label className="custom-control-label" for="price_5">
                  $15 to $20 <span className="webproduct">(16)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_6"
                />
                <label className="custom-control-label" for="price_6">
                  $21 to $25 <span className="webproduct">(18)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price_7"
                />
                <label className="custom-control-label" for="price_7">
                  More than $25 <span className="webproduct">(25)</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Descuento</h4>
          </div>
          <div className="offer-item-body scrollstyle_4">
            <div className="brand-list">
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="offer_1"
                />
                <label className="custom-control-label" for="offer_1">
                  2% - 5% <span className="webproduct">(9)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="offer_2"
                />
                <label className="custom-control-label" for="offer_2">
                  6% - 10% <span className="webproduct">(5)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="offer_3"
                />
                <label className="custom-control-label" for="offer_3">
                  11% - 15% <span className="webproduct">(11)</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="offer_4"
                />
                <label className="custom-control-label" for="offer_4">
                  16% - 25% <span className="webproduct">(27)</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-items">
          <div className="filtr-cate-title">
            <h4>Tamaño del paquete</h4>
          </div>
          <div className="price-pack-item-body scrollstyle_4">
            <div className="brand-list">
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_1"
                />
                <label className="custom-control-label" for="pack_1">
                  1 pc
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_2"
                />
                <label className="custom-control-label" for="pack_2">
                  1 pc approx. 400 to 600 gm
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_3"
                />
                <label className="custom-control-label" for="pack_3">
                  1 pc approx. 500 to 800 gm
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_4"
                />
                <label className="custom-control-label" for="pack_4">
                  Combo 3 Items
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_5"
                />
                <label className="custom-control-label" for="pack_5">
                  Combo 4 Items
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_6"
                />
                <label className="custom-control-label" for="pack_6">
                  Combo 5 Items
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_7"
                />
                <label className="custom-control-label" for="pack_7">
                  2 pcs
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_8"
                />
                <label className="custom-control-label" for="pack_8">
                  100 g
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_9"
                />
                <label className="custom-control-label" for="pack_9">
                  200 g
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_10"
                />
                <label className="custom-control-label" for="pack_10">
                  250 g
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_11"
                />
                <label className="custom-control-label" for="pack_11">
                  500g
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_12"
                />
                <label className="custom-control-label" for="pack_12">
                  1kg
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_13"
                />
                <label className="custom-control-label" for="pack_13">
                  2kg
                </label>
              </div>
              <div className="custom-control custom-checkbox pb2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="pack_14"
                />
                <label className="custom-control-label" for="pack_14">
                  3kg
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

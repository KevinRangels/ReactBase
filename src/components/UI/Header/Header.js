import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestGetAllCategories } from "../../../actions/general";
import { OptionsAccount } from "./OptionsAccount";
import { OptionsLogged } from "./OptionsLogged";

export const Header = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.car);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    dispatch(requestGetAllCategories());
  }, []);

  return (
    <header className="header clearfix">
      <div className="top-header-group">
        <div className="top-header">
          <div className="res_main_logo">
            <Link to="/">
              <img src="assets/images/dark-logo-1.svg" alt="" />
            </Link>
          </div>
          <div className="main_logo" id="logo">
            <Link to="/">
              <img src="assets/images/logo.svg" alt="" />
            </Link>
            <Link to="/">
              <img
                className="logo-inverse"
                src="%PUBLIC_URL%/assets/images/dark-logo.svg"
                alt=""
              />
            </Link>
          </div>

          <div className="search120">
            <div className="ui search">
              <div className="ui left icon input swdh10">
                <input
                  className="prompt srch10"
                  type="text"
                  placeholder="Buscar productos.."
                />
                <i className="uil uil-search-alt icon icon1"></i>
              </div>
            </div>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <a href="#" className="offer-link">
                  <i className="uil uil-phone-alt"></i>1800-000-000
                </a>
              </li>
              <li>
                <Link to="/offers" className="offer-link">
                  <i className="uil uil-gift"></i>Ofertas
                </Link>
              </li>
              <li>
                <Link to="/faq" className="offer-link">
                  <i className="uil uil-question-circle"></i>Ayuda
                </Link>
              </li>
              <li>
                <Link
                  to="/user/wishlist"
                  className="option_links"
                  title="Lista de deseos"
                >
                  <i className="uil uil-heart icon_wishlist"></i>
                  <span className="noti_count1">3</span>
                </Link>
              </li>
              {logged ? <OptionsAccount /> : <OptionsLogged />}
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-header-group">
        <div className="sub-header">
          <div className="ui dropdown">
            <a
              href="#"
              className="category_drop hover-btn"
              data-toggle="modal"
              data-target="#category_model"
              title="Categorias"
            >
              <i className="uil uil-apps"></i>
              <span className="cate__icon">Seleccionar categoría</span>
            </a>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container-fluid">
              <button
                className="navbar-toggler menu_toggle_btn"
                type="button"
                data-target="#navbarSupportedContent"
              >
                <i className="uil uil-bars"></i>
              </button>
              <div
                className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav main_nav align-self-stretch">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" title="Inicio">
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/new-products"
                      className="nav-link new_item"
                      title="Nuevos Productos"
                    >
                      Nuevos Productos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/featured-products"
                      className="nav-link"
                      title="Productos Destacados"
                    >
                      Productos Destacados
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/contact-us"
                      className="nav-link"
                      title="Contactanos"
                    >
                      Contactanos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="catey__icon">
            <a
              href="#"
              className="cate__btn"
              data-toggle="modal"
              data-target="#category_model"
              title="Categories"
            >
              <i className="uil uil-apps"></i>
            </a>
          </div>
          <div className="header_cart order-1">
            <a
              href="#"
              className="cart__btn hover-btn pull-bs-canvas-left"
              title="Cart"
            >
              <i className="uil uil-shopping-cart-alt"></i>
              <span>Carrito</span>
              <ins>{products.length === 0 ? "" : products.length}</ins>
              <i className="uil uil-angle-down"></i>
            </a>
          </div>
          <div className="search__icon order-1">
            <a
              href="#"
              className="search__btn hover-btn"
              data-toggle="modal"
              data-target="#search_model"
              title="Search"
            >
              <i className="uil uil-search"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

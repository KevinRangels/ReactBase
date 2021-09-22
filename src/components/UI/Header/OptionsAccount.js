import React, { useState } from "react";
import { Link } from "react-router-dom";

export const OptionsAccount = () => {
  const [viewOptions, setViewOptions] = useState(false);
  return (
    <li className="ui dropdown">
      <a
        href="#"
        className="opts_account"
        onMouseEnter={() => setViewOptions(true)}
      >
        <img src="assets/images/avatar/img-5.jpg" alt="" />
        <span className="user__name">John Doe</span>
        <i className="uil uil-angle-down"></i>
      </a>
      {viewOptions && (
        <div
          onMouseEnter={() => setViewOptions(true)}
          onMouseLeave={() => setViewOptions(false)}
          className="menu dropdown_account"
          style={{
            right: "0",
            left: "auto",
            display: "block",
          }}
        >
          {/* <div className="night_mode_switch__btn">
            <a href="#" id="night-mode" className="btn-night-mode">
              <i className="uil uil-moon"></i> Night mode
              <span className="btn-night-mode-switch">
                <span className="uk-switch-button"></span>
              </span>
            </a>
          </div> */}
          <Link to="/user/dashboard" className="item channel_item">
            <i className="uil uil-apps icon__1"></i>Dashbaord
          </Link>
          <Link to="/user/orders" className="item channel_item">
            <i className="uil uil-box icon__1"></i>Mis ordenes
          </Link>
          <Link to="/user/wishlist" className="item channel_item">
            <i className="uil uil-heart icon__1"></i>Mi lista de deseos
          </Link>
          <Link to="/user/wallet" className="item channel_item">
            <i className="uil uil-usd-circle icon__1"></i>Mi cartera
          </Link>
          <Link to="/user/address" className="item channel_item">
            <i className="uil uil-location-point icon__1"></i>Mis direcciones
          </Link>
          {/* <Link to="offers.html" className="item channel_item">
            <i className="uil uil-gift icon__1"></i>Ofertas
          </Link> */}
          <Link to="/faq" className="item channel_item">
            <i className="uil uil-info-circle icon__1"></i>Preguntas frecuentes
          </Link>
          <Link to="/" className="item channel_item">
            <i className="uil uil-lock-alt icon__1"></i>Cerrar sesion
          </Link>
        </div>
      )}
    </li>
  );
};

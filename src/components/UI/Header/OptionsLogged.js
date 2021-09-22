import React, { useState } from "react";
import { Link } from "react-router-dom";

export const OptionsLogged = () => {
  const [viewOptions, setViewOptions] = useState(false);

  return (
    <li class="ui dropdown">
      <a
        href="#"
        class="opts_account"
        onMouseEnter={() => setViewOptions(true)}
      >
        <img src="assets/images/avatar/img-21.jpg" alt="" />
        <span class="user__name">Regístrese o inicie sesión</span>
        <i class="uil uil-angle-down"></i>
      </a>
      {viewOptions && (
        <div
          onMouseEnter={() => setViewOptions(true)}
          onMouseLeave={() => setViewOptions(false)}
          class="menu right dropdown_account dropdown_account_rl"
          style={{
            right: "0",
            left: "auto",
            display: "block",
          }}
        >
          <div class="rl-account">
            <div class="rl-account-step">
              <p>¿Soy Cliente?</p>
              <Link to="/login" class="item lr-acount-btn hover-btn">
                Iniciar Sesion
              </Link>
            </div>
            <div class="rl-account-step">
              <p>¿No tienes una cuenta?</p>
              <Link to="/register" class="item lr-acount-btn hover-btn">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

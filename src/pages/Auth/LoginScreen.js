import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <div className="sign-inup">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="sign-form">
              <div className="sign-inner">
                <div className="sign-logo" id="logo">
                  <Link to="/">
                    <img src="assets/images/logo.svg" alt="" />
                  </Link>
                  <Link to="/">
                    <img
                      className="logo-inverse"
                      src="assets/images/dark-logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="form-dt">
                  <div className="form-inpts checout-address-step">
                    <form>
                      <div className="form-title">
                        <h6>Iniciar sesión</h6>
                      </div>
                      <div className="form-group pos_rel">
                        <input
                          id="phone[number]"
                          name="phone"
                          type="text"
                          placeholder="Correo electrónico"
                          className="form-control lgn_input"
                          required=""
                        />
                        <i className="uil uil-envelope lgn_icon"></i>
                      </div>
                      <div className="form-group pos_rel">
                        <input
                          id="password1"
                          name="password1"
                          type="password"
                          placeholder="Contraseña"
                          className="form-control lgn_input"
                          required=""
                        />
                        <i className="uil uil-padlock lgn_icon"></i>
                      </div>
                      <button className="login-btn hover-btn" type="submit">
                        Iniciar Sesión
                      </button>
                    </form>
                  </div>
                  <div className="password-forgor">
                    <Link to="/forgot-password">
                      ¿Olvidaste tu constraseña?
                    </Link>
                  </div>
                  <div className="signup-link">
                    <p>
                      ¿No tienes una cuenta? -{" "}
                      <Link to="/register">Registrate ahora</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-text text-center mt-3">
              <i className="uil uil-copyright"></i>Copyright 2020{" "}
              <b>Gambolthemes</b> . All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

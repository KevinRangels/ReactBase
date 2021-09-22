import React from "react";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <div class="sign-inup">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="sign-form">
              <div class="sign-inner">
                <div class="sign-logo" id="logo">
                  <a href="index.html">
                    <img src="assets/images/logo.svg" alt="" />
                  </a>
                  <a href="index.html">
                    <img
                      class="logo-inverse"
                      src="assets/images/dark-logo.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="form-dt">
                  <div class="form-inpts checout-address-step">
                    <form>
                      <div class="form-title">
                        <h6>Recuperar contraseña</h6>
                      </div>
                      <div class="form-group pos_rel">
                        <input
                          id="email[address]"
                          name="emailaddress"
                          type="email"
                          placeholder="Correo electrónico"
                          class="form-control lgn_input"
                          required=""
                        />
                        <i class="uil uil-envelope lgn_icon"></i>
                      </div>
                      <div class="form-group pos_rel">
                        <input
                          id="password[old]"
                          name="passwordold"
                          type="password"
                          placeholder="Contraseña"
                          class="form-control lgn_input"
                          required=""
                        />
                        <i class="uil uil-padlock lgn_icon"></i>
                      </div>
                      <div class="form-group pos_rel">
                        <input
                          id="password[new]"
                          name="passwordnew"
                          type="password"
                          placeholder="Confirmar constraseña"
                          class="form-control lgn_input"
                          required=""
                        />
                        <i class="uil uil-padlock lgn_icon"></i>
                      </div>
                      <button class="login-btn hover-btn" type="submit">
                        Enviar
                      </button>
                    </form>
                  </div>
                  <div class="signup-link">
                    <p>
                      Regresar - <Link to="/login">Iniciar sesión</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyright-text text-center mt-3">
              <i class="uil uil-copyright"></i>Copyright 2020{" "}
              <b>Gambolthemes</b> . All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

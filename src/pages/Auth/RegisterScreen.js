import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <div class="sign-inup">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="sign-form">
              <div class="sign-inner">
                <div class="sign-logo" id="logo">
                  <Link to="/">
                    <img src="assets/images/logo.svg" alt="" />
                  </Link>
                  <Link to="/">
                    <img
                      class="logo-inverse"
                      src="assets/images/dark-logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div class="form-dt">
                  <div class="form-inpts checout-address-step">
                    <form>
                      <div class="form-title">
                        <h6>Registro</h6>
                      </div>
                      <div class="form-group pos_rel">
                        <input
                          id="full[name]"
                          name="fullname"
                          type="text"
                          placeholder="Nombre completo"
                          class="form-control lgn_input"
                          required=""
                        />
                        <i class="uil uil-user-circle lgn_icon"></i>
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
                          id="phone[number]"
                          name="phone"
                          type="text"
                          placeholder="Número de teléfono"
                          class="form-control lgn_input"
                          required=""
                        />
                        <i class="uil uil-mobile-android-alt lgn_icon"></i>
                      </div>

                      <div class="form-group pos_rel">
                        <input
                          id="password1"
                          name="password1"
                          type="password"
                          placeholder="Contraseña"
                          class="form-control lgn_input"
                          required=""
                        />
                        <i class="uil uil-padlock lgn_icon"></i>
                      </div>
                      <button class="login-btn hover-btn" type="submit">
                        Registrarse
                      </button>
                    </form>
                  </div>
                  <div class="signup-link">
                    <p>
                      ¿Ya tienes una cuenta? -{" "}
                      <Link to="/login">Inicia sesión</Link>
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

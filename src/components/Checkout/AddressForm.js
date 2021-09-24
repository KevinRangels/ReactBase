import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { expresiones } from "../../helpers/regex";
import { useDispatch } from "react-redux";
import { handleAddAddress } from "../../actions/pay";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo requerido")
    .matches(expresiones.name, "Solo letras"),
  email: yup
    .string()
    .required("Campo requerido")
    .email("Correo electrónico inválido"),
  flat: yup
    .string()
    .required("Campo requerido")
    .matches(expresiones.address, "Caracteres inválidos")
    .max(255, "Máximo 255 caracteres"),
  street: yup
    .string()
    .required("Campo requerido")
    .matches(expresiones.address, "Caracteres inválidos")
    .max(255, "Máximo 255 caracteress"),
  pincode: yup
    .string()
    .required("Campo requerido")
    .matches(expresiones.numbers, "Solo números"),
  locality: yup
    .string()
    .required("Campo requerido")
    .matches(expresiones.address, "Caracteres inválidos")
    .max(255, "Máximo 255 caracteres"),
});

export const AddressForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitSaveAddress = (data) => {
    console.log("onSubmitSaveAddress", data);
  };

  const onSubmitNext = (data) => {
    console.log("onSubmitNext", data);
    dispatch(handleAddAddress(data));
    document.getElementById("btnCheckoutPayments").click();
  };

  return (
    <div className="checkout-step-body">
      <div className="checout-address-step">
        <div className="row">
          <div className="col-lg-12">
            <form className="" onSubmit={handleSubmit(onSubmitSaveAddress)}>
              {/* <!-- Multiple Radios (inline) --> */}
              <div className="form-group">
                <div className="product-radio">
                  <ul className="product-now">
                    <li>
                      <input type="radio" id="ad1" name="address1" />
                      <label htmlFor="ad1">Hogar</label>
                    </li>
                    <li>
                      <input type="radio" id="ad2" name="address1" />
                      <label htmlFor="ad2">Oficina</label>
                    </li>
                    <li>
                      <input type="radio" id="ad3" name="address1" />
                      <label htmlFor="ad3">Otra</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="address-fieldset">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Nombre*</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        className="form-control input-md"
                        {...register("name")}
                      />
                    </div>
                    <p className="validationMessage">
                      {errors["name"]?.message}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">
                        Dirección de correo electrónico*
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Correo electrónico"
                        className="form-control input-md"
                        {...register("email")}
                      />
                    </div>
                    <p className="validationMessage">
                      {errors["email"]?.message}
                    </p>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="control-label">
                        Piso / Casa / Oficina No *
                      </label>
                      <input
                        id="flat"
                        name="flat"
                        type="text"
                        placeholder="Dirección"
                        className="form-control input-md"
                        {...register("flat")}
                      />
                    </div>
                    <p className="validationMessage">
                      {errors["flat"]?.message}
                    </p>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="control-label">
                        Calle / Sociedad / Nombre de la oficina *
                      </label>
                      <input
                        id="street"
                        name="street"
                        type="text"
                        placeholder="Calle"
                        className="form-control input-md"
                        {...register("street")}
                      />
                    </div>
                    <p className="validationMessage">
                      {errors["street"]?.message}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Código PIN*</label>
                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        placeholder="
                        Código PIN"
                        className="form-control input-md"
                        {...register("pincode")}
                      />
                    </div>
                    <p className="validationMessage">
                      {errors["pincode"]?.message}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Localidad*</label>
                      <input
                        id="Locality"
                        name="locality"
                        type="text"
                        placeholder="
                        Ingrese Ciudad"
                        className="form-control input-md"
                        {...register("locality")}
                      />
                    </div>
                    <p className="validationMessage">
                      {errors["locality"]?.message}
                    </p>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="address-btns">
                        <button className="save-btn14 hover-btn">
                          Guardar
                        </button>
                        <a
                          className="collapsed ml-auto next-btn16 hover-btn"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#checkout_wizard"
                          href="#collapseThree"
                          onClick={handleSubmit(onSubmitNext)}
                        >
                          {" "}
                          Siguiente{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

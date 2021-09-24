import React from "react";

export const TdcForm = () => {
  return (
    <>
      <div class="form-group return-departure-dts" data-method="card">
        <div class="row">
          <div class="col-lg-12">
            <div class="pymnt_title mb-4">
              <h4>Tarjeta de crédito / débito</h4>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-1">
              <label class="control-label">Nombre de la titular*</label>
              <div class="ui search focus">
                <div class="ui left icon input swdh11 swdh19">
                  <input
                    class="prompt srch_explore"
                    type="text"
                    name="holdername"
                    value=""
                    id="holder[name]"
                    required=""
                    maxlength="64"
                    placeholder="Nombre de la titular"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-1">
              <label class="control-label">Número de tarjeta*</label>
              <div class="ui search focus">
                <div class="ui left icon input swdh11 swdh19">
                  <input
                    class="prompt srch_explore"
                    type="text"
                    name="cardnumber"
                    value=""
                    id="card[number]"
                    required=""
                    maxlength="64"
                    placeholder="Número de tarjeta"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group mt-1">
              <label class="control-label">Mes de expiración *</label>
              <select
                class="ui fluid search dropdown form-dropdown"
                name="card[expire-month]"
              >
                <option value="">Mes</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group mt-1">
              <label class="control-label">Año de vencimiento*</label>
              <div class="ui search focus">
                <div class="ui left icon input swdh11 swdh19">
                  <input
                    class="prompt srch_explore"
                    type="text"
                    name="card[expire-year]"
                    maxlength="4"
                    placeholder="Año"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group mt-1">
              <label class="control-label">CVV*</label>
              <div class="ui search focus">
                <div class="ui left icon input swdh11 swdh19">
                  <input
                    class="prompt srch_explore"
                    name="card[cvc]"
                    maxlength="3"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="next-btn16 hover-btn">
        Realizar pedido
      </a>
    </>
  );
};

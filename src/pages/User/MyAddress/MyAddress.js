import React from "react";

export const MyAddress = () => {
  return (
    <div class="dashboard-right">
      <div class="row">
        <div class="col-md-12">
          <div class="main-title-tab">
            <h4>
              <i class="uil uil-location-point"></i>My Address
            </h4>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="pdpt-bg">
            <div class="pdpt-title">
              <h4>My Address</h4>
            </div>
            <div class="address-body">
              <a
                href="#"
                class="add-address hover-btn"
                data-toggle="modal"
                data-target="#address_model"
              >
                Add New Address
              </a>
              <div class="address-item">
                <div class="address-icon1">
                  <i class="uil uil-home-alt"></i>
                </div>
                <div class="address-dt-all">
                  <h4>Home</h4>
                  <p>
                    #0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall,
                    Frozpur road, Ludhiana, 141001
                  </p>
                  <ul class="action-btns">
                    <li>
                      <a href="#" class="action-btn">
                        <i class="uil uil-edit"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="action-btn">
                        <i class="uil uil-trash-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="address-item">
                <div class="address-icon1">
                  <i class="uil uil-home-alt"></i>
                </div>
                <div class="address-dt-all">
                  <h4>Office</h4>
                  <p>
                    #0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall,
                    Frozpur road, Ludhiana, 141001
                  </p>
                  <ul class="action-btns">
                    <li>
                      <a href="#" class="action-btn">
                        <i class="uil uil-edit"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="action-btn">
                        <i class="uil uil-trash-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="address-item">
                <div class="address-icon1">
                  <i class="uil uil-home-alt"></i>
                </div>
                <div class="address-dt-all">
                  <h4>Other</h4>
                  <p>
                    #0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall,
                    Frozpur road, Ludhiana, 141001
                  </p>
                  <ul class="action-btns">
                    <li>
                      <a href="#" class="action-btn">
                        <i class="uil uil-edit"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="action-btn">
                        <i class="uil uil-trash-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
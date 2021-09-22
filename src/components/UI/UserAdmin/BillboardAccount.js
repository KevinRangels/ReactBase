import React from "react";

export const BillboardAccount = () => {
  return (
    <div class="dashboard-group">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="user-dt">
              <div class="user-img">
                <img src="images/avatar/img-5.jpg" alt="" />
                <div class="img-add">
                  <input type="file" id="file" />
                  <label for="file">
                    <i class="uil uil-camera-plus"></i>
                  </label>
                </div>
              </div>
              <h4>Johe Doe</h4>
              <p>
                +91999999999
                <a href="#">
                  <i class="uil uil-edit"></i>
                </a>
              </p>
              <div class="earn-points">
                <img src="images/Dollar.svg" alt="" />
                Points : <span>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumb = ({ page = "" }) => {
  return (
    <div class="gambo-Breadcrumb">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/">Inicio</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {page}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

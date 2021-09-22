import React from "react";
import { NavLink } from "react-router-dom";

export const MenuAccount = () => {
  return (
    <div class="left-side-tabs">
      <div class="dashboard-left-links">
        <NavLink
          to="/user/dashboard"
          activeClassName="active"
          class="user-item"
        >
          <i class="uil uil-apps"></i>Dashboard
        </NavLink>
        <NavLink to="/user/orders" class="user-item" activeClassName="active">
          <i class="uil uil-box"></i>Mis ordenes
        </NavLink>
        <NavLink to="/user/rewards" class="user-item" activeClassName="active">
          <i class="uil uil-gift"></i>Mi recompensa
        </NavLink>
        <NavLink to="/user/wallet" class="user-item" activeClassName="active">
          <i class="uil uil-wallet"></i>Mi billetera
        </NavLink>
        <NavLink to="/user/wishlist" class="user-item" activeClassName="active">
          <i class="uil uil-heart"></i>Lista de deseos
        </NavLink>
        <NavLink to="/user/address" class="user-item" activeClassName="active">
          <i class="uil uil-location-point"></i>Mi direccion
        </NavLink>
        <NavLink to="/user/" class="user-item" activeClassName="active">
          <i class="uil uil-exit"></i>Logout
        </NavLink>
      </div>
    </div>
  );
};

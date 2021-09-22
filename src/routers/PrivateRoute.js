import React from "react";
import { Route, Redirect, Switch, useRouteMatch } from "react-router-dom";
import { Breadcrumb } from "../components/UI/Breadcrumb";
import { CartSidebar } from "../components/UI/CartSidebar";
import { Footer } from "../components/UI/Footer";
import { Header } from "../components/UI/Header/Header";
import { CategoryModalStart } from "../components/UI/Modals/CategoryModalStart";
import { ModalSearchStart } from "../components/UI/Modals/ModalSearchStart";
import { BillboardAccount } from "../components/UI/UserAdmin/BillboardAccount";
import { MenuAccount } from "../components/UI/UserAdmin/MenuAccount";
import { Dashboard } from "../pages/User/Dashboard/Dashboard";
import { MyAddress } from "../pages/User/MyAddress/MyAddress";
import { MyOrders } from "../pages/User/MyOrders/MyOrders";
import { MyRewards } from "../pages/User/MyRewards/MyRewards";
import { MyWallet } from "../pages/User/MyWallet/MyWallet";
import { MyWishlist } from "../pages/User/MyWishList/MyWishlist";

export const PrivateRoute = () => {
  return (
    <>
      <Header />
      <div class="wrapper">
        <Breadcrumb />
        <BillboardAccount />
        <div class="">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-4">
                <MenuAccount />
              </div>
              <div class="col-lg-9 col-md-8">
                <Switch>
                  <Route path="/user/dashboard" component={Dashboard} />
                  <Route path="/user/orders" component={MyOrders} />
                  <Route path="/user/rewards" component={MyRewards} />
                  <Route path="/user/wallet" component={MyWallet} />
                  <Route path="/user/wishlist" component={MyWishlist} />
                  <Route path="/user/address" component={MyAddress} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CategoryModalStart />
      <ModalSearchStart />
      <CartSidebar />
    </>
  );
};

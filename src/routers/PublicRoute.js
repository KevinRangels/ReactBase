import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { CartSidebar } from "../components/UI/CartSidebar";
import { Footer } from "../components/UI/Footer";
import { Header } from "../components/UI/Header/Header";
import { CategoryModalStart } from "../components/UI/Modals/CategoryModalStart";
import { ModalSearchStart } from "../components/UI/Modals/ModalSearchStart";
import { CheckoutScreen } from "../pages/Checkout/CheckoutScreen";
import { HomeScreen } from "../pages/Home/HomeScreen";
import { ProductScreen } from "../pages/ProductDetails/ProductScreen";
import { FaqScreen } from "../pages/Faq/FaqScreen";
import { ContactUsScreen } from "../pages/ContactUs/ContactUsScreen";
import { OffersScreen } from "../pages/Offers/OffersScreen";
import { AboutScreen } from "../pages/About/AboutScreen";
import { ShopScreen } from "../pages/Shop/ShopScreen";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const PublicRoute = () => {
  return (
    <>
      <Header />
      <div class="wrapper">
        <Switch>
          <Route path="/about" component={AboutScreen} />
          <Route path="/shop" component={ShopScreen} />
          <Route path="/faq" component={FaqScreen} />
          <Route path="/contact-us" component={ContactUsScreen} />
          <Route path="/producto" component={ProductScreen} />
          <Route path="/checkout" component={CheckoutScreen} />
          <Route path="/offers" component={OffersScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </div>
      <Footer />
      <CategoryModalStart />
      <ModalSearchStart />
      <CartSidebar />
    </>
  );
};

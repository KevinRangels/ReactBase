import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../pages/Auth/LoginScreen";
import { RegisterScreen } from "../pages/Auth/RegisterScreen";
import { ForgotPassword } from "../pages/Auth/ForgotPassword";
import ScrollToTop from "./helpers/ScrollToTop";

export const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/user" component={PrivateRoute} />
          <Route path="/" component={PublicRoute} />
        </Switch>
      </div>
    </Router>
  );
};

import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={PublicRoute} />
            <Route path="/" component={PrivateRoute} />
          </Switch>
        </div>
      </Router>
    )
}

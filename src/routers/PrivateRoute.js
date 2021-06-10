import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Promotions } from '../pages/Logged/Promotions/Promotions';

export const PrivateRoute = () => {
    return (
        <Switch>
            <Route exact path="/promociones" component={Promotions} />
        </Switch>
    )
}

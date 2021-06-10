import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Home } from '../pages/Home/Home';

export const PublicRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    )
}


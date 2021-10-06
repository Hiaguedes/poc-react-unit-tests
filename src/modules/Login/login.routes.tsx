import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

import LoginRootPage from './login.page'

const LoginRoutes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={LoginRootPage} />
        </Switch>
    )
}

export default LoginRoutes

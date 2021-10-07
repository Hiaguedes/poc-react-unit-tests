import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

import LoginRootPage from './LoginHomePage/login.page'
import CreateAccount from './CreateAccount/createAccount.page'

const LoginRoutes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact  path="/login" component={LoginRootPage} />
            <Route exact  path="/login/criar-conta" component={CreateAccount} />
            <Route path="*" component={() => <Redirect exact from="/" to="/login" />} />
        </Switch>
    )
}

export default LoginRoutes

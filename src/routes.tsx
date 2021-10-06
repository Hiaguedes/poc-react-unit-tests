import {Route, Switch} from 'react-router-dom';

import HomePage from './modules/Home/home.page'
import PaymentsPage from './modules/Payments/payments.page'

export const RootRoutes = {
    Home:'/',
    Pagamento:'/pagamento'
}

const GlobalRoutes = () => {

    return (
        <Switch>
          <Route exact component={HomePage} path={`${RootRoutes.Home}`} />
          <Route component={PaymentsPage} path={`${RootRoutes.Pagamento}`} />
        </Switch>      
    );
}

export default GlobalRoutes;
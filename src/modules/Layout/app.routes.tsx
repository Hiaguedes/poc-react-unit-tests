import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from '../Home/home.page'
import PaymentsPage from '../Payments/payments.page'

import {RootRoutes} from './routes';

const AppRoutes = () => {

return(
  <Switch>
    <Redirect exact from="/login/*" to={`${RootRoutes.Home}`} />
    <Route exact component={HomePage} path={`${RootRoutes.Home}`} />
    <Route component={PaymentsPage} path={`${RootRoutes.Pagamento}`} />
    <Route path="*" component={() => <Redirect exact from="/" to={`${RootRoutes.Home}`} />} />
  </Switch>  
)
}

export default AppRoutes;
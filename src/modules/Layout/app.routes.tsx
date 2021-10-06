import {Route, Switch} from 'react-router-dom';

import HomePage from '../Home/home.page'
import PaymentsPage from '../Payments/payments.page'

import {RootRoutes} from './routes';

const AppRoutes = () => {

return(
  <Switch>
    <Route exact component={HomePage} path={`${RootRoutes.Home}`} />
    <Route component={PaymentsPage} path={`${RootRoutes.Pagamento}`} />
  </Switch>  
)
}

export default AppRoutes;
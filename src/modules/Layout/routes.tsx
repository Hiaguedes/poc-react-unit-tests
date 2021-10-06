import AppRoutes from './app.routes';
import LoginRoutes from '../Login/login.routes';

export const RootRoutes = {
    Home:'/',
    Pagamento:'/pagamento',
}

const GlobalRoutes = () => {

    return (
        true ? <LoginRoutes /> :<AppRoutes />   
    );
}

export default GlobalRoutes;
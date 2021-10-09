import AppRoutes from './app.routes';
import LoginRoutes from '../Login/login.routes';
import { useAuth } from '../Login/hooks/useAuth';

export const RootRoutes = {
    Home:'/',
    Pagamento:'/pagamento',
}

const GlobalRoutes = () => {

    const {isLogged} = useAuth();

    return (
        isLogged ? <AppRoutes /> :<LoginRoutes />   
    );
}

export default GlobalRoutes;
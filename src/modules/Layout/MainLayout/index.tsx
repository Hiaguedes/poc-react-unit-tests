import LoginLayout from "../LoginLayout/loginLayout.page"
import AppLayout from '../AppLayout/appLayout.page';
import { useAuth } from "../../Login/hooks/useAuth";

const MainLayout = () => {
    const {isLogged} = useAuth();
    return (
        isLogged ? <AppLayout /> : <LoginLayout />
    )
}

export default MainLayout

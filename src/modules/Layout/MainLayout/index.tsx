import LoginLayout from "../LoginLayout/loginLayout.page"
import AppRoute from '../AppLayout/appLayout.page';


const MainLayout = () => {
    return (
        true ? <LoginLayout /> : <AppRoute />
    )
}

export default MainLayout

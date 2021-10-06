import LoginLayout from "../LoginLayout/loginLayout.page"
import AppRoute from '../AppLayout/mainLayout.page';


const MainLayout = () => {
    return (
        true ? <LoginLayout /> : <AppRoute />
    )
}

export default MainLayout

import React from 'react'
import {Wrapper, MenuLinksWrapper} from './sidebar.styles'
import {RootRoutes} from '../../modules/Layout/routes'
import {Link} from 'react-router-dom'
import {useTypedSelector} from '../../redux-store/useTypedSelector';
import {toogleSidebarOpen} from './sidebar.slice'
import { useDispatch } from 'react-redux';
import {useAuth} from '../../modules/Login/hooks/useAuth'


const Sidebar = () => {
    const dispatch = useDispatch();
    const sidebarOpen = useTypedSelector(state => state.sidebar.open);
    const {handleLogout} = useAuth();
    return (
        <Wrapper data-testid="wrapper" isOpen={sidebarOpen}>
            {!sidebarOpen ? (
                <button data-testid="botaoToogle" onClick={() => dispatch(toogleSidebarOpen())}>T</button>
            ) : (
                
                <MenuLinksWrapper>
                <button data-testid="botaoToogle" onClick={() => dispatch(toogleSidebarOpen())}>Toogle</button>
                {Object
                    .entries(RootRoutes)
                    .map(([route, link]) => (
                        <Link data-testid={link} key={link} to={{pathname: link}}>
                            {route}
                        </Link>
                    ))
                    }
                <button onClick={handleLogout}>Logout</button>
                </MenuLinksWrapper>

            )}
        </Wrapper>
    )
}

export default Sidebar

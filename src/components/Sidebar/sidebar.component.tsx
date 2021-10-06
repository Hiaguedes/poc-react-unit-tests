import React from 'react'
import {Wrapper, MenuLinksWrapper} from './sidebar.styles'
import {RootRoutes} from '../../modules/Layout/routes'
import {Link} from 'react-router-dom'
import {useTypedSelector} from '../../redux-store/useTypedSelector';
import {toogleSidebarOpen} from './sidebar.slice'
import { useDispatch } from 'react-redux';


const Sidebar = () => {
    const dispatch = useDispatch();
    const sidebarOpen = useTypedSelector(state => state.sidebar.open)
    return (
        <Wrapper isOpen={sidebarOpen}>
            {!sidebarOpen ? (
                <button onClick={() => dispatch(toogleSidebarOpen())}>T</button>
            ) : (
                
                <MenuLinksWrapper>
                <button onClick={() => dispatch(toogleSidebarOpen())}>Toogle</button>
                {Object
                    .entries(RootRoutes)
                    .map(([route, link]) => (
                        <Link key={link} to={{pathname: link}}>
                            {route}
                        </Link>
                    ))
                    }
                </MenuLinksWrapper>

            )}
        </Wrapper>
    )
}

export default Sidebar

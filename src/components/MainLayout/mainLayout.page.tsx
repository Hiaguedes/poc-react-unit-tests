import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar.component'
import GlobalRoutes from '../../routes'
import {Wrapper, Main} from './mainLayout.styles'
import {BrowserRouter} from 'react-router-dom'

const MainLayout = () => {

    return (   
            <BrowserRouter>
                <Wrapper>
                    <Sidebar />
                    <Main>
                        <GlobalRoutes />
                    </Main>
                </Wrapper>
            </BrowserRouter>
    )
}

export default MainLayout

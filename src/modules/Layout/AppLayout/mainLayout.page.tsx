import React from 'react'
import Sidebar from '../../../components/Sidebar/sidebar.component'
import GlobalRoutes from '../routes'
import {Wrapper, Main} from './mainLayout.styles'

const MainLayout = () => {

    return (   
                <Wrapper>
                    <Sidebar />
                    <Main>
                        <GlobalRoutes />
                    </Main>
                </Wrapper>
    )
}

export default MainLayout

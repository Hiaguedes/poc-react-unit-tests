import React from 'react'
import Sidebar from '../../../components/Sidebar/sidebar.component'
import GlobalRoutes from '../routes'
import {Wrapper, Main} from './appLayout.styles'

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

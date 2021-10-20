import HomePage from './home.page'
import {render, screen, fireEvent} from '@testing-library/react'
import {AuthContext, User} from '../Login/hooks/useAuth'
import MainLayout from '../../modules/Layout/MainLayout'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import SidebarSlice from '../../components/Sidebar/sidebar.slice'
import {BrowserRouter} from 'react-router-dom'

let store = configureStore({ reducer: { sidebar: SidebarSlice.reducer } });


const user: User = {id: '0', name: 'Hiago'}

describe('Testes da Home Page', () => {
    test('Mostrar nome do usuário pego do login', () => {
        render(
        <AuthContext.Provider value={{user, handleLogin: jest.fn(), handleLogout: jest.fn(), isLogged: true}} >
                <HomePage />
            </AuthContext.Provider>
        )
        expect(screen.getByText(/Hiago/i)).toBeTruthy()
    })

    test('Consigo ir para a página de pagamentos', () => {

        const {debug, getByText} = render(
            <BrowserRouter>
            <Provider store={store}>
                <AuthContext.Provider value={{user, handleLogin: jest.fn(), handleLogout: jest.fn(), isLogged: true}} >
                        <MainLayout />
                    </AuthContext.Provider>
                
            </Provider>
            </BrowserRouter>
        )
            const linkPagamento = getByText('Pagamento')

        expect(linkPagamento).toBeTruthy()

        debug();

        fireEvent.click(linkPagamento)

        debug();
    })

})
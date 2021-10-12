import HomePage from './home.page'
import {render, screen} from '@testing-library/react'
import {AuthContext, User} from '../Login/hooks/useAuth'

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

})
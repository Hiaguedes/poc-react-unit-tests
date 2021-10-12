import { render, fireEvent, waitFor, screen, act } from '@testing-library/react'
import LoginUser from './login.page'
import {BrowserRouter} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

global.fetch = jest.fn(() => 
    Promise.resolve(
        {
            json: () => Promise.resolve({
                data: {
                    allUsers: [{
                        id: '1',
                        name: 'Hiago',
                        password: '123456'
                    }]
                }
            })
        }
    )
) as any;

const mockedHandleLogin = jest.fn();

jest.mock('../hooks/useAuth', () => {
    return{
        useAuth: () => {
            return {
                handleLogin: mockedHandleLogin
            }
        }

    }
})




// const spy = jest.spyOn(LoginUser.prototype, 'handleUserLogin')

describe('Testes da home de login', () => {

    test('Se usuário não for encontrado entao mostra uma mensagem de erro', async () => {
        const {getByTestId, rerender} = render(<LoginUser />, {wrapper: BrowserRouter})

        const inputUsuario = getByTestId('inputUsuario')
        const inputSenha = getByTestId('inputSenha')
        const loginButton = getByTestId('loginButton')
        
        act(() => {
            fireEvent.change(inputUsuario, {target: {value: 'Jojo'}});
            
        })

        rerender(<LoginUser />)

        act(() => {
            fireEvent.change(inputSenha, {target: {value: '101010'}});

        })
        
        fireEvent.click(loginButton);
        // fireEvent.click(loginButton)
        await waitFor(() => {
            expect(screen.queryByText(/Usuário não encontrado/i)).toBeTruthy()
        })
    })

    test('Se usuário for encontrado entao a funcao handleLogin tem que ser chamada', async() => {
        const {getByTestId, debug, rerender} = render(
                <LoginUser /> ,
        {wrapper: BrowserRouter});

        const inputUsuario = getByTestId('inputUsuario') as HTMLInputElement;
        const inputSenha = getByTestId('inputSenha') as HTMLInputElement;
        const loginButton = getByTestId('loginButton');
        
        act(() => {
            fireEvent.change(inputUsuario, {target: {value: 'Hiago'}});

        })

        rerender(<LoginUser />)

        act(() => {
            fireEvent.change(inputSenha, {target: {value: '123456'}});
            
        })
        
        await waitFor(() => {
            expect(global.fetch).toBeCalled()
        })
        fireEvent.click(loginButton);

        expect(mockedHandleLogin).toHaveBeenCalled()

    })
})
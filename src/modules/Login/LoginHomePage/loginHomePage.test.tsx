import { render, fireEvent, waitFor, screen, act } from '@testing-library/react'
import LoginUser from './login.page'
import App from '../../../App'
import {BrowserRouter} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import MainLayout from '../../Layout/MainLayout'

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

/*
jest.mock('node-fetch', () => {
    return jest.fn((url) => {
        // Get and parse the URL parameter.
        const value = parseInt(url.split('/').slice(-1)[0], 10);

        return Promise.resolve({
            json: () => ({ importantData: value > 100 ? 1000 : value })
        });
    });
});
*/

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
                <MainLayout />,
                {wrapper: BrowserRouter});

        const inputUsuario = getByTestId('inputUsuario') as HTMLInputElement;
        const inputSenha = getByTestId('inputSenha') as HTMLInputElement;
        const loginButton = getByTestId('loginButton');
        
        act(() => {
            fireEvent.change(inputUsuario, {target: {value: 'Hiago'}});

        })

        rerender(<MainLayout />)

        act(() => {
            fireEvent.change(inputSenha, {target: {value: '123456'}});
            
        })
        
        await waitFor(() => {
            expect(global.fetch).toBeCalled()
        })
        fireEvent.click(loginButton);

        rerender(<MainLayout />)


        // debug()

        expect(mockedHandleLogin).toHaveBeenCalled()

        await waitFor(() => {
            expect(screen.getByText(/Hiago/i)).toBeTruthy()
        })

    })
})
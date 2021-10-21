import { render, fireEvent, waitFor, screen, act } from '@testing-library/react'
import LoginUser from './login.page'
import {BrowserRouter} from 'react-router-dom'
import {ApolloProvider} from '@apollo/client'
import {client} from '../../../ApolloClient';

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

// /*
// jest.mock('node-fetch', () => {
//     return jest.fn((url) => {
//         // Get and parse the URL parameter.
//         const value = parseInt(url.split('/').slice(-1)[0], 10);

//         return Promise.resolve({
//             json: () => ({ importantData: value > 100 ? 1000 : value })
//         });
//     });
// });
// */

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
        const {getByTestId, rerender} = render(
        <ApolloProvider client={client}>
            <LoginUser />
        </ApolloProvider>
        , 
        {wrapper: BrowserRouter})

        const inputUsuario = getByTestId('inputUsuario')
        const inputSenha = getByTestId('inputSenha')
        const loginButton = getByTestId('loginButton')
        
        act(() => {
            fireEvent.change(inputUsuario, {target: {value: 'Jojo'}});
            
        })

        rerender(
        <ApolloProvider client={client}>
        <LoginUser />
        </ApolloProvider>
        )

        act(() => {
            fireEvent.change(inputSenha, {target: {value: '101010'}});

        })
        
        fireEvent.click(loginButton);
        // fireEvent.click(loginButton)
        await waitFor(() => {
            expect(screen.queryByText(/Usuário não encontrado/i)).toBeTruthy()
        })
    })

})

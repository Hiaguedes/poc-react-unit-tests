import { render, fireEvent, waitFor } from '@testing-library/react'
import LoginUser from './login.page'
import {BrowserRouter} from 'react-router-dom'

describe('Testes da home de login', () => {
    test('Quando a pagina renderiza ela chama todos os usuários', async () => {
        const {getByTestId} = render(<LoginUser />, {wrapper: BrowserRouter})

        // const loginButton = getByTestId('loginButton')
        global.fetch = jest.fn();

        // fireEvent.click(loginButton)
        await waitFor(() => {
            expect(global.fetch).toBeCalled();
        })
    })
})
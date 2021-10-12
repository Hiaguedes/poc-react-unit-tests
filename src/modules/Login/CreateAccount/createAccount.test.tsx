import CreateAccountPage from './createAccount.page'
import {render, fireEvent, waitFor} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import { debug } from 'console';

global.fetch = jest.fn(() =>
    Promise.resolve({
    json: () => Promise.resolve({ 
        name: 'Usuário Teste', 
        password: '101010'
        }),
    })
) as any;

describe('Testes para a página createAccount',  () => {
    test('Digitando usuário e senha eu tenho uma modal de confirmação', async () => {

        const {getByTestId, rerender} = render(<CreateAccountPage />, {wrapper: BrowserRouter})

        const div = document.createElement('div')

        div.id = 'modal'

        const body = document.querySelector('body');
        body!.appendChild(div);

        const nomeInput = getByTestId('nomeInput')
        const senhaInput = getByTestId('senhaInput')
        const criarContaButao = getByTestId('criarContaButao')

        fireEvent.change(nomeInput, {target: {value: 'Usuário Teste'}})

        rerender(<CreateAccountPage />)

        fireEvent.change(senhaInput, {target: {value: '101010'}})
        fireEvent.click(criarContaButao);
        
        await waitFor(() => {
            expect(getByTestId('modalNovoUsuario')).toBeTruthy()
        })
    })

    test('Após clicar em confirmar usuário eu tenho os valores dos inputs resetados', async() => {
        const {getByTestId, rerender} = render(<CreateAccountPage />, {wrapper: BrowserRouter})

        const div = document.createElement('div')

        div.id = 'modal'

        const body = document.querySelector('body');
        body!.appendChild(div);

        const nomeInput = getByTestId('nomeInput')
        const senhaInput = getByTestId('senhaInput')
        const criarContaButao = getByTestId('criarContaButao')

        fireEvent.change(nomeInput, {target: {value: 'Usuário Teste'}})
        rerender(<CreateAccountPage />)
        fireEvent.change(senhaInput, {target: {value: '101010'}})
        debug()
        fireEvent.click(criarContaButao);

        await waitFor(() => {
            expect(nomeInput.textContent).toBe( '');
            expect(senhaInput.textContent).toBe( '');
        })
    })

    test('Botão de voltar vai para a página de login', () => {
        const {getByTestId} = render(<CreateAccountPage />, {wrapper: BrowserRouter})

        const botaoVoltar = getByTestId('botaoVoltar')

        // console.log(botaoVoltar)

        expect(botaoVoltar.getAttribute('href')).toBe( '/login');
    })

})
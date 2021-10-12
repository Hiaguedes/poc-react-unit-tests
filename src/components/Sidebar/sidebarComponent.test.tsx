import {ReactElement, ReactNode} from 'react';
import { render as RTLrender, fireEvent } from "@testing-library/react";
import Sidebar from './sidebar.component'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import SidebarSlice from './sidebar.slice'
import {BrowserRouter} from 'react-router-dom'
import "jest-styled-components";

const render = 
(
ui: ReactElement,
{
  store = configureStore({ reducer: { sidebar: SidebarSlice.reducer } }),
  ...renderOptions
} = {}
) => {
const Wrapper = ({ children }: {children: ReactNode}) => {
    return (
    <BrowserRouter>
    <Provider store={store}>
        {children}
    </Provider>
    </BrowserRouter>
    )
    }
return RTLrender(<Wrapper>{ui}</Wrapper>, { ...renderOptions })
}

describe('Teste da sidebar', () => {
    test('Quando clica no botao de toogle a sidebar fica comprimida', () => {
        // jest.useFakeTimers()
        const {getByTestId} = render(<Sidebar />);
        const botaoToogle = getByTestId('botaoToogle');
        const wrapper = getByTestId('wrapper')
        fireEvent.click(botaoToogle)

        // jest.advanceTimersByTime(1000);

        expect(wrapper).toHaveStyleRule('width', '50px')

    })

    test('Quando clica de novo no botao de toogle a sidebar abre', () => {

        const {getByTestId} = render(<Sidebar />);
        const botaoToogle = getByTestId('botaoToogle');
        const wrapper = getByTestId('wrapper')
        fireEvent.click(botaoToogle);

        const novoBotaoToogle = getByTestId('botaoToogle');
        fireEvent.click(novoBotaoToogle);
        
        expect(wrapper).toHaveStyleRule('width', '200px')
    })
})
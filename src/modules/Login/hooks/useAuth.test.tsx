import {useAuth, AuthProvider, localStorageKey} from './useAuth'
import {act, renderHook} from '@testing-library/react-hooks'

describe('Testes do hook useAuth', () => {
    describe('Testes do handleLogin', () => {

        const user = {id: '1', name: 'Teste'};

        test('handleLoggin deve setar isLogged para true', () => {
            const {result} = renderHook(() => useAuth(), {wrapper: AuthProvider})
    
            act(() => {
                result.current.handleLogin(user)
            })
    
            expect(result.current.isLogged).toBeTruthy();
        })


        test('Os dados de usuário deverão ser guardados no local Storage', () => {
            
            const {result} = renderHook(() => useAuth(), {wrapper: AuthProvider})
    
            act(() => {
                result.current.handleLogin(user)
            })

            const resultLocalStorage = localStorage.getItem(localStorageKey);

            expect(JSON.parse(resultLocalStorage!)).toEqual({...user,  isLogged: true});
    
        })

        describe('Teste do handleLogout', () => {
            test('deve setar isLogged para falso com usuário ativo', () => {
                const {result} = renderHook(() => useAuth(), {wrapper: AuthProvider})
    
                act(() => {
                    result.current.handleLogin(user);
                    result.current.handleLogout();
                })
        
                expect(result.current.isLogged).not.toBeTruthy();
            })

            test('exclui dados do local Storage', () => {
                const {result} = renderHook(() => useAuth(), {wrapper: AuthProvider})
    
                act(() => {
                    result.current.handleLogin(user);
                    result.current.handleLogout();
                })
    
                const resultLocalStorage = localStorage.getItem(localStorageKey);
    
                expect(resultLocalStorage).toBeNull();
            })
        })
    })
})
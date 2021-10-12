import SidebarSlice, {initialState, toogleSidebarOpen} from './sidebar.slice'
const reducer = SidebarSlice.reducer;

describe('Testes do slice da sidebar', () => {
    test('Deve retornar o estado inicial (sidebar aberta)', () => {
        expect(reducer(undefined, {} as any)).toEqual(initialState)
    })

    test('Quando chamada a action de toogle, trocar o estado de open', () => {
        const previousState= {open: true};
        expect(reducer(previousState, toogleSidebarOpen())).toEqual({open: false})
    })
})
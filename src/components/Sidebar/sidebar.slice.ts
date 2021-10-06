import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface SidebarState {
    open: boolean;
}

const initialState : SidebarState = {
    open: true,
};

const SidebarSlice = createSlice({
    name: 'Sidebar',
    initialState,
    reducers: {
        toogleSidebarOpen: (
            state,
        ) => ({
            ...state, 
            open: !state.open
        }),

    }
})

export default SidebarSlice;
export const {toogleSidebarOpen} = SidebarSlice.actions
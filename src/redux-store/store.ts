import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import SidebarReducer from '../components/Sidebar/sidebar.slice'


const rootReducer = combineReducers({
  sidebar: SidebarReducer.reducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store

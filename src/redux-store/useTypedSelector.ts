import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type store from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
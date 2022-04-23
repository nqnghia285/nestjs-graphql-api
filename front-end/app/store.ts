import { reduxBatch } from '@manaflair/redux-batch'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
import rootReducer from './root.reducer'

const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(logger),
   devTools: process.env.NODE_ENV !== 'production',
   // preloadedState,
   enhancers: [reduxBatch],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>

const wrapper = createWrapper(() => store)

export default wrapper

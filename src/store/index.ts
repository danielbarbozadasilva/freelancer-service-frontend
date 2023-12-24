import { configureStore } from '@reduxjs/toolkit'
import SignReducer from './auth/auth.reducer'

const store = configureStore({
  reducer:{
    auth: SignReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

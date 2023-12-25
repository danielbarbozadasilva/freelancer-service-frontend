import { configureStore } from '@reduxjs/toolkit'
import SignReducer from './auth/auth.reducer'
import CategoryReducer from './category/category.reducer'

const store = configureStore({
  reducer:{
    auth: SignReducer,
    category: CategoryReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

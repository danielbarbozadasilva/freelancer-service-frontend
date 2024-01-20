import { configureStore } from '@reduxjs/toolkit'
import SignReducer from './auth/auth.reducer'
import CategoryReducer from './category/category.reducer'
import ProductReducer from './product/product.reducer'
import messageReducer from './message/message.reducer'
import conversationReducer from './conversation/conversation.reducer'

const store = configureStore({
  reducer:{
    auth: SignReducer,
    category: CategoryReducer,
    product: ProductReducer,
    message: messageReducer,
    conversation: conversationReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

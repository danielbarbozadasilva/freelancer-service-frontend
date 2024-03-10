import { configureStore } from '@reduxjs/toolkit'
import SignReducer from './auth/auth.reducer'
import CategoryReducer from './category/category.reducer'
import ProductReducer from './product/product.reducer'
import messageReducer from './message/message.reducer'
import conversationReducer from './conversation/conversation.reducer'
import userReducer from './user/user.reducer'
import ratingReducer from './rating/rating.reducer'
import orderReducer from './order/order.reducer'

const store = configureStore({
  reducer: {
    auth: SignReducer,
    category: CategoryReducer,
    product: ProductReducer,
    message: messageReducer,
    conversation: conversationReducer,
    user: userReducer,
    rating: ratingReducer,
    order: orderReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

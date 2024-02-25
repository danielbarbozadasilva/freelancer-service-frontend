import { createSlice } from '@reduxjs/toolkit'
import { IOrder } from './types'
import {
  createPaymentIntent,
  listAllOrdersAction,
  listByIdUserOrdersAction,
  updateOrderAction
} from './order.action'

export const slice = createSlice({
  name: 'order',
  initialState: {
    loading: false,
    all: [] as IOrder[],
    orderByUser: [] as IOrder[],
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listAllOrdersAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listAllOrdersAction.fulfilled, (state, action) => {
        state.loading = false
        state.all = action.payload
      })
      .addCase(listAllOrdersAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(listByIdUserOrdersAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listByIdUserOrdersAction.fulfilled, (state, action) => {
        state.loading = false
        state.orderByUser = action.payload.data
      })
      .addCase(listByIdUserOrdersAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(createPaymentIntent.pending, (state) => {
        state.loading = true
      })
      .addCase(createPaymentIntent.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(createPaymentIntent.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(updateOrderAction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateOrderAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateOrderAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }
})

export default slice.reducer

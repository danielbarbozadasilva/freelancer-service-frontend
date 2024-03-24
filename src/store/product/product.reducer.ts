import { createSlice } from '@reduxjs/toolkit'
import { IProduct, IProductById } from './types'
import {
  createProductAction,
  listAllProductsAction,
  listByIdProductsAction,
  removeProductAction,
  updateProductAction
} from './product.action'

export const slice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    all: [] as IProduct[],
    productid: {} as IProductById,
    sort: '',
    error: '',
    features: [] as string[]
  },
  reducers: {
    listSort(state, { payload }) {
      return {
        ...state,
        sort: payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(listAllProductsAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listAllProductsAction.fulfilled, (state, action) => {
        state.loading = false
        state.all = action.payload
      })
      .addCase(listAllProductsAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(listByIdProductsAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listByIdProductsAction.fulfilled, (state, action) => {
        state.loading = false
        state.productid = action.payload
      })
      .addCase(listByIdProductsAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(createProductAction.pending, (state) => {
        state.loading = true
      })
      .addCase(createProductAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(createProductAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(updateProductAction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateProductAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateProductAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(removeProductAction.pending, (state) => {
        state.loading = true
      })
      .addCase(removeProductAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(removeProductAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }
})

export const { listSort } = slice.actions
export default slice.reducer

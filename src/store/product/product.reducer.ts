import { createSlice } from '@reduxjs/toolkit'
import { Product } from './types'

export const slice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    all: [] as Product[],
    productid: {} as Product,
    sort: '',
  },
  reducers: {
    loadingProduct(state) {
      return { ...state, error: false, loading: true }
    },
    finishLoadingProduct(state) {
      return { ...state, error: false, loading: false }
    },
    listAllProduct(state, { payload }) {
      return {
        ...state,
        all: payload,
        loading: false
      }
    },
    listSort(state, { payload }) {
      return {
        ...state,
        sort: payload,
      }
    },
    listByIdProduct(state, { payload }) {
      return {
        ...state,
        productid: payload,
        loading: false
      }
    },
    createProduct(state) {
      return {
        ...state,
        loading: false
      }
    }
  }
})
export const { loadingProduct, finishLoadingProduct, listAllProduct, listByIdProduct, createProduct, listSort } = slice.actions
export default slice.reducer

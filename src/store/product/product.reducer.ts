import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    all: [],
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
        all: payload.data,
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
export const { loadingProduct, finishLoadingProduct, listAllProduct, createProduct } = slice.actions
export default slice.reducer

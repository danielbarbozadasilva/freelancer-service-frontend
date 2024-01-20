import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'category',
  initialState: {
    loading: false,
    all: [],
  },
  reducers: {
    loadingCategory(state) {
      return { ...state, error: false, loading: true }
    },
    finishLoadingCategory(state) {
      return { ...state, error: false, loading: false }
    },
    listAllCategory(state, { payload }) {
      return {
        ...state,
        all: payload.data,
        loading: false
      }
    },
    createCategory(state) {
      return {
        ...state,
        loading: false
      }
    }
  }
})
export const { loadingCategory, finishLoadingCategory, listAllCategory, createCategory } = slice.actions
export default slice.reducer

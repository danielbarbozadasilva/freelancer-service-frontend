import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'category',
  initialState: {
    loading: false,
    all: [],
    categoryid: []
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
    listByIdCategory(state, { payload }) {
      return {
        ...state,
        categoryid: payload.data,
        loading: false
      }
    },
    createCategory(state) {
      return {
        ...state,
        loading: false
      }
    },
    updateCategory(state) {
      return {
        ...state,
        loading: false
      }
    },
    deleteCategory(state) {
      return {
        ...state,
        loading: false
      }
    }
  }
})

export const { 
  loadingCategory, 
  finishLoadingCategory, 
  listAllCategory, 
  listByIdCategory, 
  createCategory,
  updateCategory,
  deleteCategory
} = slice.actions

export default slice.reducer

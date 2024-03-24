import { createSlice } from '@reduxjs/toolkit'
import { ICategory } from './types'
import {
  listAllCategoryAction,
  listCategoryByIdAction,
  createCategoryAction,
  updateCategoryAction,
  removeCategoryAction
} from './category.action'

export const slice = createSlice({
  name: 'category',
  initialState: {
    loading: false,
    all: [] as ICategory[],
    categoryid: {} as ICategory,
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listAllCategoryAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listAllCategoryAction.fulfilled, (state, action) => {
        state.loading = false
        state.all = action?.payload?.data
      })
      .addCase(listAllCategoryAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(listCategoryByIdAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listCategoryByIdAction.fulfilled, (state, action) => {
        state.loading = false
        state.categoryid = action.payload.data
      })
      .addCase(listCategoryByIdAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(createCategoryAction.pending, (state) => {
        state.loading = true
      })
      .addCase(createCategoryAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(createCategoryAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(updateCategoryAction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateCategoryAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateCategoryAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(removeCategoryAction.pending, (state) => {
        state.loading = true
      })
      .addCase(removeCategoryAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(removeCategoryAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }
})

export default slice.reducer

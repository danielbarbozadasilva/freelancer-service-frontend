import { createSlice } from '@reduxjs/toolkit'
import { ResultRating } from './types'
import { createRatingAction, deleteRatingAction, findByIdRatingAction, updateRatingAction } from './rating.action'

export const slice = createSlice({
  name: 'rating',
  initialState: {
    loading: false,
    all: {} as ResultRating,
    ratingid: {} as ResultRating,
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findByIdRatingAction.pending, (state) => {
        state.loading = true
      })
      .addCase(findByIdRatingAction.fulfilled, (state, action) => {
        state.loading = false
        state.ratingid = action.payload
      })
      .addCase(findByIdRatingAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(createRatingAction.pending, (state) => {
        state.loading = true
      })
      .addCase(createRatingAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(createRatingAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(updateRatingAction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateRatingAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateRatingAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(deleteRatingAction.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteRatingAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(deleteRatingAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }
})

export default slice.reducer

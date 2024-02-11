import { createSlice } from '@reduxjs/toolkit'
import { createMessageAction, listByIdMessageAction } from './message.action'

export const slice = createSlice({
  name: 'message',
  initialState: {
    loading: false,
    all: [],
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listByIdMessageAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listByIdMessageAction.fulfilled, (state, action) => {
        state.loading = false
        state.all = action.payload.data
      })
      .addCase(listByIdMessageAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(createMessageAction.pending, (state) => {
        state.loading = true
      })
      .addCase(createMessageAction.fulfilled, (state, action) => {
        state.loading = false
        state.all = action.payload.data
      })
      .addCase(createMessageAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }  
})

export default slice.reducer

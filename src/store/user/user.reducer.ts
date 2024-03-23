import { createSlice } from '@reduxjs/toolkit'
import {
  listAllUsersAction,
  listUserByIdAction,
  removeUserAction,
  updateUserAction,
  updateUserSellerAction
} from './user.action'
import { IUserInterface } from './types'

export const slice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    all: [] as IUserInterface[],
    userid: {} as IUserInterface,
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listAllUsersAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listAllUsersAction.fulfilled, (state, action) => {
        state.loading = false
        state.all = action.payload
      })
      .addCase(listAllUsersAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(listUserByIdAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listUserByIdAction.fulfilled, (state, action) => {
        state.loading = false
        state.userid = action.payload
      })
      .addCase(listUserByIdAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(updateUserAction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateUserAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateUserAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(updateUserSellerAction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateUserSellerAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateUserSellerAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(removeUserAction.pending, (state) => {
        state.loading = true
      })
      .addCase(removeUserAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(removeUserAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }
})

export default slice.reducer

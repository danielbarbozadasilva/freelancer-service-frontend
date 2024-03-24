import { getUser } from '../../config/auth'
import { createSlice } from '@reduxjs/toolkit'
import { signInAction, signUpAction } from './auth.action'

export const slice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    token: '',
    user: getUser(),
    userid: '',
    error: '',
    registered: false
  },
  reducers: {
    logoutUser(state) {
      return {
        ...state,
        token: '',
        user: {},
        error: ''
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAction.pending, (state) => {
        state.loading = true
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.loading = false
        state.registered = true,
        state.token = action.payload?.token,
        state.user = action.payload?.data
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(signUpAction.pending, (state) => {
        state.loading = true
      })
      .addCase(signUpAction.fulfilled, (state) => {
        state.loading = false
        state.registered = true
      })
      .addCase(signUpAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }
})
export const { logoutUser } = slice.actions
export default slice.reducer

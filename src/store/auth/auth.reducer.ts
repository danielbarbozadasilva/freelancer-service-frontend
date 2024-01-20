import { getToken, getUser } from '../../config/auth'
import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    token: '',
    user: getUser(),
    clientid: '',
    userid: '',
    error: false,
    registered: false
  },
  reducers: {
    loadingUser(state) {
      return { ...state, error: false, loading: true }
    },
    finishLoadingUser(state) {
      return { ...state, error: false, loading: false }
    },
    signInUser(state, { payload }) {
      return {
        ...state,
        registered: true,
        token: payload?.token,
        user: payload?.data,
        loading: false
      }
    },
    signUpUser(state) {
      return {
        ...state,
        registered: true,
        loading: false
      }
    },
    logoutUser(state) {
      return {
        ...state,
        token: '',
        user: {},
        error: false
      }
    }
  }
})
export const { loadingUser, finishLoadingUser, signInUser, signUpUser, logoutUser } = slice.actions
export default slice.reducer

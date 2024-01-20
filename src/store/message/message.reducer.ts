import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'message',
  initialState: {
    loading: false,
    all: [],
  },
  reducers: {
    loadingMessage(state) {
      return { ...state, error: false, loading: true }
    },
    finishLoadingMessage(state) {
      return { ...state, error: false, loading: false }
    },
    listMessage(state, { payload }) {
      return {
        ...state,
        all: payload.data,
        loading: false
      }
    },
    createMessage(state) {
      return {
        ...state,
        loading: false
      }
    }
  }
})
export const { loadingMessage, finishLoadingMessage, listMessage, createMessage } = slice.actions
export default slice.reducer

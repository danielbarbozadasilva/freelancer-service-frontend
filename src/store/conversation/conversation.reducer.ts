import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'conversation',
  initialState: {
    loading: false,
    all: [],
    single: {}
  },
  reducers: {
    loadingConversation(state) {
      return { ...state, error: false, loading: true }
    },
    finishLoadingConversation(state) {
      return { ...state, error: false, loading: false }
    },
    listConversation(state, { payload }) {
      return {
        ...state,
        all: payload.data,
        loading: false
      }
    },
    listSingleConversation(state, { payload }) {
      return {
        ...state,
        single: payload.data,
        loading: false
      }
    },
    createConversation(state) {
      return {
        ...state,
        loading: false
      }
    }, 
    updateConversation(state){
      return {
        ...state,
        loading: false
      }
    }
  }
})
export const { 
  loadingConversation, 
  finishLoadingConversation, 
  listConversation, 
  listSingleConversation, 
  createConversation, 
  updateConversation } = slice.actions
  
export default slice.reducer

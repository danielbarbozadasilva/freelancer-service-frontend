import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'client',
  initialState: {
    loading: false,
    all: [],
    clientid: {}
  },
  reducers: {
    loadingClient(state) {
      return { ...state, error: false, loading: true }
    },
    finishLoadingClient(state) {
      return { ...state, error: false, loading: false }
    },
    listAllClient(state, { payload }) {
      return {
        ...state,
        all: payload,
        loading: false
      }
    },
    listByIdClient(state, { payload }) {
      return {
        ...state,
        clientid: payload,
        loading: false
      }
    },
    updateClient(state) {
      return {
        ...state,
        loading: false
      }
    },
    deleteClient(state) {
      return {
        ...state,
        loading: false
      }
    }
  }
})

export const { 
  loadingClient, 
  finishLoadingClient, 
  listAllClient, 
  listByIdClient, 
  updateClient,
  deleteClient
} = slice.actions

export default slice.reducer

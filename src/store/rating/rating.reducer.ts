import { createSlice } from '@reduxjs/toolkit'
import { ResultRating } from './types'

export const slice = createSlice({
  name: 'rating',
  initialState: {
    loading: false,
    all: {} as ResultRating,
    ratingid: {} as ResultRating
  },
  reducers: {
    loadingRating(state) {
      return { ...state, error: false, loading: true }
    },
    finishLoadingRating(state) {
      return { ...state, error: false, loading: false }
    },
    listAllRating(state, { payload }) {
      return {
        ...state,
        all: payload,
        loading: false
      }
    },
    listByIdRating(state, { payload }) {
      return {
        ...state,
        ratingid: payload.data,
        loading: false
      }
    },
    createRating(state) {
      return {
        ...state,
        loading: false
      }
    },
    updateRating(state) {
      return {
        ...state,
        loading: false
      }
    },
    deleteRating(state) {
      return {
        ...state,
        loading: false
      }
    }
  }
})

export const { 
  loadingRating, 
  finishLoadingRating, 
  listAllRating, 
  listByIdRating, 
  createRating,
  updateRating,
  deleteRating
} = slice.actions

export default slice.reducer

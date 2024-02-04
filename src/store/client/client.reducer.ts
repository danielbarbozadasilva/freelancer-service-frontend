import { createSlice } from '@reduxjs/toolkit'
import { listAllClientAction, listClientByIdAction, removeClientAction, updateClientAction, updateClientSellerAction } from './client.action'
import { UserInterface } from './types'

export const slice = createSlice({
  name: 'client',
  initialState: {
    loading: false,
    all: [] as UserInterface[],
    clientid: {} as UserInterface,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listAllClientAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listAllClientAction.fulfilled, (state, action) => {
        state.loading = false
        state.all = action.payload
      })
      .addCase(listAllClientAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(listClientByIdAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listClientByIdAction.fulfilled, (state, action) => {
        state.loading = false
        state.clientid = action.payload
      })
      .addCase(listClientByIdAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(updateClientAction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateClientAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateClientAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(updateClientSellerAction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateClientSellerAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateClientSellerAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(removeClientAction.pending, (state) => {
        state.loading = true
      })
      .addCase(removeClientAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(removeClientAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }  
})


export default slice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { createConversationAction, listAllConversationAction, listByIdConversationAction, updateConversationAction } from './conversation.action'
import { IConversation } from './types'

export const slice = createSlice({
  name: 'conversation',
  initialState: {
    loading: false,
    all: [] as IConversation[],
    single: {} as IConversation,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listAllConversationAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listAllConversationAction.fulfilled, (state, action) => {
        state.loading = false
        state.all = action.payload.data
      })
      .addCase(listAllConversationAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(listByIdConversationAction.pending, (state) => {
        state.loading = true
      })
      .addCase(listByIdConversationAction.fulfilled, (state, action) => {
        state.loading = false
        state.single = action?.payload?.data
      })
      .addCase(listByIdConversationAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(createConversationAction.pending, (state) => {
        state.loading = true
      })
      .addCase(createConversationAction.fulfilled, (state, action) => {
        state.loading = false
        state.all = action.payload.data
      })
      .addCase(createConversationAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })

      .addCase(updateConversationAction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateConversationAction.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateConversationAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }  
})
 
export default slice.reducer

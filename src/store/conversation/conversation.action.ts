import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createConversationService,
  listAllConversationService,
  listByIdConversationService,
  updateConversationService
} from '../../services/conversation.service'
import { IDataSend, IDataSendUpdate } from './types'

export const listAllConversationAction = createAsyncThunk(
  'conversation/listAll',
  async (data: IDataSend) => {
    try {
      const result = await listAllConversationService(data)
      return result.data
    } catch (error) {}
  }
)

export const listByIdConversationAction = createAsyncThunk(
  'conversation/listById',
  async (id: string) => {
    try {
      const result = await listByIdConversationService(id)
      return result.data
    } catch (error) {}
  }
)

export const createConversationAction = createAsyncThunk(
  'conversation/create',
  async (data: IDataSend) => {
    try {
      await createConversationService(data)
    } catch (error) {}
  }
)

export const updateConversationAction = createAsyncThunk(
  'conversation/update',
  async (data: IDataSendUpdate) => {
    try {
      await updateConversationService(data.id, data.isSeller)
    } catch (error) {}
  }
)

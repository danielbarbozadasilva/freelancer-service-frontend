import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createConversationService,
  listAllConversationService,
  listByIdConversationService,
  updateConversationService
} from '../../services/conversation.service'
import { IDataList, IDataSend, IDataSendUpdate } from './types'

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
  async (data: IDataList) => {
    try {
      const result = await listByIdConversationService(data.userId, data.buyerId)
      return result.data
    } catch (error) {}
  }
)

export const createConversationAction = createAsyncThunk(
  'conversation/create',
  async (data: IDataSend) => {
    try {
      const result = await createConversationService(data)
      return result.data
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

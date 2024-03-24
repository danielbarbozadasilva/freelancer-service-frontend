import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listByIdMessageService,
  createMessageService
} from '../../services/message.service'
import { IMessage } from './types'

export const listByIdMessageAction = createAsyncThunk(
  'message/listById',
  async (id: string) => {
    try {
      const result = await listByIdMessageService(id)
      return result.data
    } catch (error) {}
  }
)

export const createMessageAction = createAsyncThunk(
  'message/create',
  async (data: IMessage) => {
    try {
      const result = await createMessageService(data)
      return result.data
    } catch (error) {}
  }
)

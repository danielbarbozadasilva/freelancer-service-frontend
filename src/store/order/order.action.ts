import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listAllOrdersService,
  listByIdUserOrdersService,
  updateOrderService,
  createPaymentIntentService
} from '../../services/order.service'
import { IOrder, IUser } from './types'

export const listAllOrdersAction = createAsyncThunk(
  'order/listAll',
  async () => {
    try {
      const result = await listAllOrdersService()
      return result.data.data
    } catch (error) {}
  }
)

export const listByIdUserOrdersAction = createAsyncThunk(
  'order/listById',
  async (data: IUser) => {
    try {
      const result = await listByIdUserOrdersService(data.id, data.isSeller)
      return result.data
    } catch (error) {}
  }
)

export const updateOrderAction = createAsyncThunk(
  'order/update',
  async (data: IOrder) => {
    try {
      await updateOrderService(data)
    } catch (error) {}
  }
)

export const createPaymentIntent = createAsyncThunk(
  'order/create',
  async (data: IOrder) => {
    try {
      await createPaymentIntentService(data)
    } catch (error) {}
  }
)

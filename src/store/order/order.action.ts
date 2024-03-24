import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listAllOrdersService,
  listByIdUserOrdersService,
  updateOrderService,
  createPaymentIntentService
} from '../../services/order.service'
import { IPayment, IUser } from './types'

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
  async (payment_intent: string) => {
    try {
      await updateOrderService(payment_intent)
    } catch (error) {}
  }
)

export const createPaymentIntent = createAsyncThunk(
  'order/create',
  async (data: IPayment) => {
    try {
      const result = await createPaymentIntentService(data.id, data.buyerid, data.data.description)
      return result
    } catch (error) {}
  }
)

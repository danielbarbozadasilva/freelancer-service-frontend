import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listAllUsersService,
  listUserByIdService,
  removeUserService,
  updateUserService,
  updateUserSellerService
} from '../../services/user.service'
import { toast } from 'react-toastify'
import { ISeller, IUserSendInterface } from './types'

export const listAllUsersAction = createAsyncThunk(
  'user/listAll', 
  async () => {
  try {
    const result = await listAllUsersService()
    return result.data.data
  } catch (error: any) {
    toast.error(error.response.data.message)
  }
})

export const listUserByIdAction = createAsyncThunk(
  'user/listById',
  async (id: string) => {
    try {
      const result = await listUserByIdService(id)
      return result.data.data
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
)

export const updateUserAction = createAsyncThunk(
  'user/update',
  async (user: IUserSendInterface) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const result = await updateUserService(user.id, user.data, config)
      toast.success(`${result.data.message}`)
      return true
    } catch (error: any) {
      toast.error(error.response.data.message)
      return false
    }
  }
)

export const updateUserSellerAction = createAsyncThunk(
  'user/updateSeller',
  async (data: ISeller) => {
    try {
      const result = await updateUserSellerService(data.id, data.isSeller)
      toast.success(`${result.data.message}`)
      return true
    } catch (error: any) {
      toast.error(error.response.data.message)
      return false
    }
  }
)

export const removeUserAction = createAsyncThunk(
  'user/remove',
  async (id: string) => {
    try {
      const result = await removeUserService(id)
      toast.success(`${result.data.message}`)
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listAllUsersService,
  listUserByIdService,
  removeUserService,
  updateUserService,
  updateUserSellerService
} from '../../services/user.service'
import { toast } from 'react-toastify'
import { ISeller, UserSendDataInterface } from './types'

export const listAllUsersAction = createAsyncThunk(
  'user/listAll',
  async () => {
    try {
      const result = await listAllUsersService()
      return result.data.data
    } catch (error) {}
  }
)

export const listUserByIdAction = createAsyncThunk(
  'user/listById',
  async (id: string) => {
    try {
      const result = await listUserByIdService(id)
      return result.data.data
    } catch (error) {}
  }
)

export const updateUserAction = createAsyncThunk(
  'user/update',
  async (result: UserSendDataInterface) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      await updateUserService(result.id, result.data, config)
      toast.success('Usuário atualizado com sucesso!')
      return true
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
      return false
    }
  }
)

export const updateUserSellerAction = createAsyncThunk(
  'user/updateSeller',
  async (data: ISeller) => {
    try {
      await updateUserSellerService(data.id, data.isSeller)
      toast.success('Usuário atualizado com sucesso!')
      return true
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
      return false
    }
  }
)

export const removeUserAction = createAsyncThunk(
  'user/remove',
  async (id: string) => {
    try {
      await removeUserService(id)
      toast.success('Usuário excluido com sucesso!')
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
    }
  }
)

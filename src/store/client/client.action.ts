import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listAllClientService,
  listClientByIdService,
  removeClientService,
  updateClientService,
  updateClientSellerService
} from '../../services/client.service'
import { toast } from 'react-toastify'
import { ISeller, UserSendDataInterface } from './types'

export const listAllClientAction = createAsyncThunk(
  'client/listAll',
  async () => {
    try {
      const result = await listAllClientService()
      return result.data.data
    } catch (error) {}
  }
)

export const listClientByIdAction = createAsyncThunk(
  'client/listById',
  async (id: string) => {
    try {
      const result = await listClientByIdService(id)
      return result.data.data
    } catch (error) {}
  }
)

export const updateClientAction = createAsyncThunk(
  'client/update',
  async (result: UserSendDataInterface) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      await updateClientService(result.id, result.data, config)
      toast.success('Cliente atualizado com sucesso!')
      return true
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
      return false
    }
  }
)

export const updateClientSellerAction = createAsyncThunk(
  'client/updateSeller',
  async (data: ISeller) => {
    try {
      await updateClientSellerService(data.id, data.isSeller)
      toast.success('Cliente atualizado com sucesso!')
      return true
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
      return false
    }
  }
)

export const removeClientAction = createAsyncThunk(
  'client/remove',
  async (id: string) => {
    try {
      await removeClientService(id)
      toast.success('Cliente excluido com sucesso!')
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
    }
  }
)

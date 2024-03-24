import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listAllProductsService,
  listByIdProductService,
  createProductService,
  updateProductService,
  removeProductService
} from '../../services/product.service'
import { Filters, IProductSend, IProductSendUpdate } from './types'
import { toast } from 'react-toastify'

export const listAllProductsAction = createAsyncThunk(
  'product/listAll',
  async (filters: Filters) => {
    try {
      const result = await listAllProductsService(filters)
      return result.data.data
    } catch (error) {}
  }
)

export const listByIdProductsAction = createAsyncThunk(
  'product/listById',
  async (id: string) => {
    try {
      const result = await listByIdProductService(id)
      return result.data.data
    } catch (error) {}
  }
)

export const createProductAction = createAsyncThunk(
  'product/create',
  async (data: IProductSend) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const result = await createProductService(data, config)
      toast.success(`${result.data.message}`)
    } catch (error) {}
  }
)

export const updateProductAction = createAsyncThunk(
  'product/update',
  async (product: IProductSendUpdate) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const result = await updateProductService(product.id, product.data, config)
      toast.success(`${result.data.message}`)
    } catch (error) {}
  }
)

export const removeProductAction = createAsyncThunk(
  'product/remove',
  async (id: string) => {
    try {
      const result = await removeProductService(id)
      toast.success(`${result.data.message}`)
    } catch (error) {}
  }
)

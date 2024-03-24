import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listAllCategoryService,
  listCategoryByIdService,
  createCategoryService,
  updateCategoryService,
  removeCategoryService
} from '../../services/category.service'
import { toast } from 'react-toastify'
import { ICategorySendData } from './types'

export const listAllCategoryAction = createAsyncThunk(
  'category/listAll',
  async () => {
    try {
      const result = await listAllCategoryService()
      return result.data
    } catch (error) {}
  }
)

export const listCategoryByIdAction = createAsyncThunk(
  'category/listById',
  async (categoryid: string) => {
    try {
      const result = await listCategoryByIdService(categoryid)
      return result.data
    } catch (error) {}
  }
)

export const createCategoryAction = createAsyncThunk(
  'category/create',
  async (category: FormData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const result = await createCategoryService(category, config)
      toast.success(`${result.data.message}`)
      return true
    } catch (error: any) {
      toast.error(error.response.data.message)
      return false
    }
  }
)

export const updateCategoryAction = createAsyncThunk(
  'category/update',
  async (category: ICategorySendData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const result = await updateCategoryService(category.id, category.data, config)
      toast.success(`${result.data.message}`)   
      return true
    } catch (error: any) {
      toast.error(error.response.data.message)
      return false
    }
  }
)

export const removeCategoryAction = createAsyncThunk(
  'category/delete',
  async (id: string) => {
    try {
      const result = await removeCategoryService(id)
      toast.success(`${result.data.message}`)
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
)

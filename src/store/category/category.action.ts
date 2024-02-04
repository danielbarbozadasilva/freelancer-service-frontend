import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listAllCategoryService,
  listCategoryByIdService,
  createCategoryService,
  updateCategoryService,
  removeCategoryService
} from '../../services/category.service'
import { toast } from 'react-toastify'
import { ICategory } from './types'

export const listAllCategoryAction = createAsyncThunk('category/listAll', 
async () => {
  try {
    const result = await listAllCategoryService()
    return result.data.data
  } catch (error) {}
})

export const listCategoryByIdAction = createAsyncThunk('category/listById', 
async (categoryid: string) => {
  try {
    const result = await listCategoryByIdService(categoryid)
    return result.data
  } catch (error) {}
})

export const createCategoryAction = createAsyncThunk('category/create', 
async (data: ICategory) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    await createCategoryService(data, config)
    toast.success('Categoria criada com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
})

export const updateCategoryAction = createAsyncThunk('category/update', 
async (data: ICategory) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    await updateCategoryService(data.id, data, config)
    toast.success('Categoria atualizada com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
})

export const removeCategoryAction = createAsyncThunk('category/delete', 
async (id: string) => {
  try {
    await removeCategoryService(id)
    toast.success('Categoria excluida com sucesso!')
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
  }
})

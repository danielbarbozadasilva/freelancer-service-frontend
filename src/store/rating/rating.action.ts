import { 
    createRatingService,
    deleteRatingService,
    findByIdRatingService,
    updateRatingService
  } from '../../services/rating.service'
import { toast } from 'react-toastify'
import { IRating } from './types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const findByIdRatingAction = createAsyncThunk(
  'rating/listById',
  async (id: string) => {
  try {
    const result = await findByIdRatingService(id)    
    return result.data.data
  } catch (error) {}
})

export const createRatingAction = createAsyncThunk(
  'rating/create',
  async (data: IRating) => {
  try {
    await createRatingService(data)
    toast.success('Avaliação criada com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
})

export const updateRatingAction = createAsyncThunk(
  'rating/update',
  async (data: Rating) => {
  try {
    await updateRatingService(data.id, data)
    toast.success('Avaliação atualizada com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
})

export const deleteRatingAction = createAsyncThunk(
  'rating/delete',
  async (id: string) => {
    try {
      await deleteRatingService(id)
      toast.success('Avaliação excluida com sucesso!')
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
    }
})
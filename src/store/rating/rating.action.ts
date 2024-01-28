import { 
    createRatingService,
    deleteRatingService,
    findByIdRatingService,
    updateRatingService
  } from '../../services/rating.service'
import { toast } from 'react-toastify'
import { Rating } from './types'

export const findByIdRatingAction = async (categoryid: string) => {
  try {
    const result = await findByIdRatingService(categoryid)    
    return result.data
  } catch (error) {}
}

export const createRatingAction = async (data: Rating) => {
  try {
    await createRatingService(data)
    toast.success('Avaliação criada com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
}

export const updateRatingAction = async (id: string, data: Rating) => {
  try {
    await updateRatingService(id, data)
    toast.success('Avaliação atualizada com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
}

export const deleteRatingAction = async (id: string) => {
    try {
      await deleteRatingService(id)
      toast.success('Avaliação excluida com sucesso!')
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
    }
}
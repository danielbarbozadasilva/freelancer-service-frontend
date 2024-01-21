import { 
    listAllCategoryService,
    listCategoryByIdService, 
    createCategoryService,
    updateCategoryService,
    removeCategoryService
  } from '../../services/category.service'
import { toast } from 'react-toastify'

export const listAllCategoryAction = async () => {
  try {
    const result = await listAllCategoryService()    
    return result.data
  } catch (error) {}
}

export const listCategoryByIdAction = async (categoryid: string) => {
  try {
    const result = await listCategoryByIdService(categoryid)    
    return result.data
  } catch (error) {}
}

export const createCategoryAction = async (data: object) => {
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
}

export const updateCategoryAction = async (categoryid: string, data: object) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    await updateCategoryService(categoryid, data, config)
    toast.success('Categoria atualizada com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
}

export const removeCategoryAction = async (id: string) => {
    try {
      await removeCategoryService(id)
      toast.success('Categoria excluida com sucesso!')
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
    }
}
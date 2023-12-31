import { listAllCategory, createCategory } from '../../services/category.service'
import { toast } from 'react-toastify'

export const listAllCategoryAction = async () => {
  try {
    const result = await listAllCategory()    
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
    await createCategory(data, config)
    toast.success('Categoria criada com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
}
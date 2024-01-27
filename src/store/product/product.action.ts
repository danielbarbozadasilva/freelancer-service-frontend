import { listAllProductsService, listByIdProductService, createProductService } from '../../services/product.service'
import { Filters } from './types'

export const listAllProductsAction = async (filters: Filters) => {
  try {
    const result = await listAllProductsService(filters)  
    return result.data.data
  } catch (error) {}
}

export const listByIdProductsAction = async (id: string) => {
  try {
    const result = await listByIdProductService(id)  
    return result.data.data
  } catch (error) {}
}

export const createProductAction = async (data: any) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    await createProductService(data, config)  
  } catch (error) {}
}
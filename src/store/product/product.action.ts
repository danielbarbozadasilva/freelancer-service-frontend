import { listAllProductsService } from '../../services/product.service'
import { Filters } from './types'

export const listAllProductsAction = async (filters: Filters) => {
  try {
    const result = await listAllProductsService(filters)  
    return result.data.data
  } catch (error) {}
}
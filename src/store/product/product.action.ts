import { listAllProductsService } from '../../services/product.service'
import { toast } from 'react-toastify'

export const listAllProductsAction = async () => {
  try {
    const result = await listAllProductsService()    
    return result.data
  } catch (error) {}
}
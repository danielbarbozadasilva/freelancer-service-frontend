import http from '../config/http'
import { Filters, IProduct, IProductCreate } from './types'

export const listAllProductsService = (filters: Filters) => http.get(`/product?userId=${filters?.userId}&category=${filters.category}&search=${filters.search}&offset=${filters.offset}&limit=${filters.limit}&order=${filters?.order}`)
export const listByIdProductService = (id: string) => http.get(`/product/${id}`)
export const createProductService = (data: IProductCreate, config: Object) => http.post(`/product`, data, config)
export const updateProductService = (id: string, data: IProduct, config: Object) => http.put(`/product/${id}`, data, config)
export const removeProductService = (id: string) => http.delete(`/product/${id}`)


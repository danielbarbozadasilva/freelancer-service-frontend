import http from '../config/http'
import { Filters } from './types'

export const listAllProductsService = (filters: Filters) => http.get(`/product?userId=${filters?.userId}&category=${filters.category}&search=${filters.search}&offset=${filters.offset}&limit=${filters.limit}&order=${filters?.order}`)
export const listByIdProductService = (id: string) => http.get(`/product/${id}`)
export const createProductService = (data: Object, config: Object) => http.post(`/product`, data, config)

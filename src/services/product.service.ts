import http from '../config/http'
import { Filters } from './types'

export const listAllProductsService = (filters: Filters) => http.get(`/product?userId=${filters?.userId}&category=${filters.category}&search=${filters.search}&offset=${filters.offset}&limit=${filters.limit}`)

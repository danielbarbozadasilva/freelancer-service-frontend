import http from '../config/http'
import { ICategory } from './types'

export const listAllCategoryService = () => http.get('/category')
export const listCategoryByIdService = (id: string) => http.get(`/category/${id}`)
export const createCategoryService = (data: ICategory, config: Object) => http.post('/category', data, config)
export const updateCategoryService = (id: string, data: ICategory, config: Object) => http.put(`/category/${id}`, data, config)
export const removeCategoryService = (id: string) => http.delete(`/category/${id}`)

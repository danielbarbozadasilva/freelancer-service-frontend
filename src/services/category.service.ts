import http from '../config/http'

export const listAllCategoryService = () => http.get('/category')
export const createCategoryService = (data: Object, config: Object) => http.post('/category', data, config)

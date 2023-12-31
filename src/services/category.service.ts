import http from '../config/http'

export const listAllCategory = () => http.get('/category')
export const createCategory = (data: Object, config: Object) => http.post('/category', data, config)

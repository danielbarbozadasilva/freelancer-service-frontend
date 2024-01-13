import http from '../config/http'

export const listAllProductsService = () => http.get('/product')

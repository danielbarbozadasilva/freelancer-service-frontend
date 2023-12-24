import http from '../config/http'

export const authService = (data: Object) => http.post('/auth', data)
export const registerService = (data: Object, config: Object) => http.post('/register', data, config)

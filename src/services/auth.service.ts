import http from '../config/http'
import { ISignIn, ISignUp } from './types'

export const authService = (data: ISignIn) => http.post('/auth', data)
export const registerService = (data: ISignUp, config: Object) => http.post('/register', data, config)

import http from '../config/http'
import { IUserSendDataInterface } from './types'

export const listAllUsersService = () => http.get('/user')
export const listUserByIdService = (id: string) => http.get(`/user/${id}`)
export const updateUserService = (id: string, data: IUserSendDataInterface, config: Object) => http.put(`/user/${id}`, data, config)
export const updateUserSellerService = (id: string, isSeller: boolean) => http.put(`/user/${id}/seller`, { isSeller: isSeller })
export const removeUserService = (id: string) => http.delete(`/user/${id}`)

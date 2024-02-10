import http from '../config/http'
import { IClient } from './types'

export const listAllClientService = () => http.get('/client')
export const listClientByIdService = (id: string) => http.get(`/client/${id}`)
export const updateClientService = (id: string, data: IClient, config: Object) => http.put(`/client/${id}`, data, config)
export const updateClientSellerService = (id: string, isSeller: boolean) => http.put(`/client/${id}/seller`, {isSeller: isSeller})
export const removeClientService = (id: string) => http.delete(`/client/${id}`)

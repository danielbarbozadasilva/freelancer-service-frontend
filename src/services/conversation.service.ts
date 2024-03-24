import http from '../config/http'
import { IDataSend } from './types'

export const listAllConversationService = (data: IDataSend) => http.get(`/conversation/userid/${data.userId}/isseller/${data.isSeller}`)
export const listByIdConversationService = (userId: string, buyerId: string) => http.get(`/conversation/userId/${userId}/buyerId/${buyerId}`)
export const createConversationService = (data: IDataSend) => http.post('/conversation', data)
export const updateConversationService = (id: string, isSeller: boolean) => http.put(`/conversation/${id}`, { isSeller })


import http from '../config/http'
import { IMessage } from './types'

export const listByIdMessageService = (id: string) => http.get(`/message/${id}`)
export const createMessageService = (data: IMessage) => http.post('/message', data)


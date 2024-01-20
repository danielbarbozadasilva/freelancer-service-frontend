import http from '../config/http'

export const listByIdMessageService = (id: string) => http.get(`/message/${id}`)
export const createMessageService = (data: Object) => http.post('/message', data)


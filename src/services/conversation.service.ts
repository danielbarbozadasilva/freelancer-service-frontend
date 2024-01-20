import http from '../config/http'

export const listAllConversationService = (data: Object) => http.get('/conversation', data)
export const listByIdConversationService = (id: string) => http.get(`/conversation/single/${id}`)
export const createConversationService = (data: Object) => http.post('/conversation', data)
export const updateConversationService = (id: string, data: Object) => http.put(`/conversation/${id}`, data)


import http from '../config/http'

export const listAllClientService = () => http.get('/client')
export const listClientByIdService = (id: string) => http.get(`/client/${id}`)
export const updateClientService = (id: string, data: Object, config: Object) => http.put(`/client/${id}`, data, config)
export const removeClientService = (id: string) => http.delete(`/client/${id}`)

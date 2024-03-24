import http from '../config/http'
import { IRating } from './types'

export const createRatingService = (data: IRating) => http.post(`/rating`, data)
export const updateRatingService = (id: string, data: IRating) => http.put(`/rating/${id}`, data)
export const deleteRatingService = (id: string) => http.delete(`/rating/${id}`)
export const findByIdRatingService = (id: string) => http.get(`/rating/product/${id}`)
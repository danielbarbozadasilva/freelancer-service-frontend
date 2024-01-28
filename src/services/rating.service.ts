import http from '../config/http'
import { Rating } from './types'

export const createRatingService = (data: Rating) => http.post(`/rating`, data)
export const updateRatingService = (id: string, data: Rating) => http.put(`/rating/${id}`, data)
export const deleteRatingService = (id: string) => http.delete(`/rating/${id}`)
export const findByIdRatingService = (id: string) => http.get(`/rating/product/${id}`)
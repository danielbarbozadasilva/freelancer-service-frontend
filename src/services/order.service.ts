import http from '../config/http'
import { Order } from './types'

export const listAllOrdersService = () => http.get(`/order`)
export const listByIdUserOrdersService = (id: string, isSeller: boolean) => http.get(`/order/${id}/isSeller/${isSeller}`)
export const createPaymentIntentService = (order: Order) => http.post(`/order/create-payment-intent/${order.productId}`, {buyerId: order.buyerId})
export const updateOrderService = (order: Order) => http.put(`/order`, order)
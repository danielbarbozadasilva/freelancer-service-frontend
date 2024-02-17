import http from '../config/http'

export const listAllOrdersService = () => http.get(`/order`)
export const listByIdUserOrdersService = (id: string, isSeller: boolean) => http.get(`/order/${id}/isSeller/${isSeller}`)
export const createPaymentIntentService = (productId: string, buyerId: string, description: string) => http.post(`/order/create-payment-intent/${productId}`, {buyerId, description})
export const updateOrderService = (payment_intent: string) => http.put(`/order/${payment_intent}`)
export interface PageTitle {
  title: string
}

export interface IOrder {
  productId: string
  title: string
  price: number
  userId: string
  buyerId: string
  isCompleted: boolean
  payment_intent: string
}

export interface IUser {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

export interface IOrder {
  _id: string
  productId: {
    _id: string
    userId: string
    title: string
    description: string
    category: string
    price: number
    images: string[]
    deliveryTime: string
    features: string[]
    sales: number
    rating: string
  }
  title: string
  price: number
  userId: {
    _id: string
    name: string
    username: string
    email: string
    cpf: string
    birthDate: Date
    picture: string[]
    country: string
    phone: string
    description: string
    permissions: string[]
    isSeller: boolean
    createdAt: Date
  }
  buyerId: {
    _id: string
    name: string
    username: string
    email: string
    cpf: string
    birthDate: Date
    picture: string[]
    country: string
    phone: string
    description: string
    permissions: string[]
    isSeller: boolean
    createdAt: Date
  }
  isCompleted: boolean
  isSeller: boolean
  payment_intent: string
  createdAt: string
  updatedAt: string
}

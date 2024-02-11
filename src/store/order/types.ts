export interface IOrder {
  _id: string
  description: string
  product: {
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
  user: {
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
  buyer: {
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

export interface IPayment {
  buyerId: string
  productId: string
}

export interface IUser {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

export interface Filters {
  userId?: string
  category: string
  offset: number
  limit: number
  search: string
  order: string
}

export interface IRating {
  name: string
  text: string
  score: number
  productId: string
  userId: string
}

export interface IOrder {
  id: string
  description: string
  product: {
    id: string
    userId: string
    title: string
    description: string
    category: string
    price: number
    images: string[]
    deliveryTime: number
    features: string[]
    sales: number
    rating: string
  }
  title: string
  price: number
  user: {
    id: string
    name: string
    username: string
    email: string
    cpf: string
    birthDate: Date
    picture: string
    country: string
    phone: string
    description: string
    permissions: string[]
    isSeller: boolean
    createdAt: Date
  }
  buyer: {
    id: string
    name: string
    username: string
    email: string
    cpf: string
    birthDate: Date
    picture: string
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

export type IDataSend = {
  isSeller: boolean
  userId: string
}

export interface ISignIn {
  email: string
  password: string
}

export interface ISignUp {
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  country: string
  phone: string
  description: string
  isSeller: boolean
  password: string
}

export interface IMessage {
  conversationId: string
  userId: string
  description: string
}

export interface IProduct {
  title: string
  description: string
  category: string
  price: number
  deliveryTime: number
  features: string[]
  userId: string
}

export interface IProductCreate {
  title: string
  description: string
  category: string
  price: number
  deliveryTime: number
  features: string[]
  userId: string
}

export interface ICategory {
  name: string
  description: string
  picture: string
}

export interface IUserSendDataInterface {
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: string
  country: string
  phone: string
  description: string
  permissions: string[]
  isSeller: boolean
}

export interface IPayment {
  buyerId: string
  productId: string
}

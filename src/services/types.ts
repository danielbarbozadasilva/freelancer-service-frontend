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
  picture?: string
  country: string
  phone: string
  description: string
  isSeller: boolean
  password: string
  confirmPassword: string
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
  deliveryTime: string
  features: string[]
  userId: string
}

export interface IProductCreate{
  title: string
  description: string
  category: string
  price: number
  deliveryTime: string
  features: string[]
  userId: string
}

export interface ICategory {
  id: string
  name: string
  description: string
  picture: string
}

export interface IClient {
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: string[]
  country: string
  phone: string
  description: string
  isSeller: boolean
}

export interface IPayment {
  buyerId: string
  productId: string
}
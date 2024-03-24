export interface Filters {
  userId?: string
  category: string
  offset: number
  limit: number
  search: string
  order: string
}

interface User {
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
}

interface Category {
  id: string
  name: string
  description: string
  picture: string
}

export interface IProduct {
  metadata?: any
  data: {
    id: string
    userId: string
    title: string
    description: string
    category?: Category
    price: number
    promotion: number
    images: string
    deliveryTime: number
    features: string[]
    sales: number
    rating?: Rating
  }
}

interface Category {
  id: string
  name: string
  description: string
  picture: string
}

interface Rating {
  id: string
  name: string
  text: string
  score: number
  productId: string
  userId: string
}

export interface IProductSend {
  id?: string
  title: string
  description: string
  category: string
  price: number
  deliveryTime: number
  features: string[]
  userId: string
}

export interface IProductSendUpdate {
  id: string
  data: {
    title: string
    description: string
    category: string
    price: number
    deliveryTime: number
    features: string[]
    userId: string
  }
}

interface IUser {
  id: string
  name: string
  username: string
  email: string
  cpf: string
  Date: string
  picture: string
  country: string
  phone: string
  description: string
  permissions: string[]
  isSeller: boolean
}

export interface ICategory {
  _id: string
  name: string
  description: string
  picture: string
}

export interface IProductById {
  id: string
  title: string
  description: string
  category: ICategory
  price: number
  promotion: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales: number
  userId?: IUser
}

export interface IProduct {
  id: string
  title: string
  description: string
  category: ICategory
  price: number
  promotion: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales: number
  userId?: User
}

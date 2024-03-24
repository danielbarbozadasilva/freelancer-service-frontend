import { IProduct } from "../types"

export interface IProductModal {
  open: boolean
  data: IProduct
}

export interface DataListProps {
  data: IOrders[]
  modal: any
  loading: boolean
}

interface IOrders {
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

export interface IModal {
  id?: string
  type?: number
  status?: boolean
}

export interface OrdersProps {
  title: string
}

export interface UserInterface {
  id: string
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
  hash: string
  salt: string
  recovery: {
    token: string
    date: Date
  }
  isSeller: boolean
}

export interface IOrder {
  id: string
  productId: string
  title: string
  description: string
  price: number
  userId: string
  buyerId: string
  isCompleted: boolean
  isSeller: boolean
  payment_intent: string
  createdAt: Date
  updatedAt: Date
  product?: {
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
    rating: string[]
  }
  buyer?: {
    _id: string
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
  user?: {
    _id: string
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
}
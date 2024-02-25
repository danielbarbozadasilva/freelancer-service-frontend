export interface IUserModal {
  open: boolean
  data: IUser[]
}

export interface IClientModal {
  open: boolean
  data: IClient[]
}

export interface IOrdersModal {
  open: boolean
  data: IOrders[]
}

export interface IRatingModal {
  open: boolean
  data: IRating[]
}

export interface DataListProps {
  data: IProduct[]
  modal: any
  loading: boolean
}

export interface IOrders {
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
}

export interface IProduct {
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

export interface IUser {
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

export interface IClient {
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

export interface IRating {
  id: string
  name: string
  text: string
  score: number
  productId: string
  userId: string
}

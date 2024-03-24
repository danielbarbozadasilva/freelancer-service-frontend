export interface IUserModal {
  open: boolean
  data: IUser[]
}

export interface IBuyerModal {
  open: boolean
  data: IBuyer[]
}

export interface IProductModal {
  open: boolean
  data: IProduct[]
}

export interface DataListProps {
  data: IOrder[]
  modal: any
  loading: boolean
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

export interface IBuyer {
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

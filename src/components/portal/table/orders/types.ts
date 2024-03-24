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

export interface IPayment {
  id: string
  buyerid: string
  data: any
}

export interface IUser {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

export interface IMessage {
  conversationId: string
  userId: string
  description: string
  isSeller: boolean
}

export interface IDataConversation {
  isSeller: boolean
  userId: string
  to: string
}

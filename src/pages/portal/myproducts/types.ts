export interface PageTitle {
  title: string
}

export interface Filters {
  userId?: string
  category: string
  offset: number
  limit: number
  search: string
  order: string
}

export interface IUser {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

export interface IProduct {
  metadata?: any
  data: {
    _id: string
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
  _id: string
  name: string
  description: string
  picture: string
}

interface Rating {
  _id: string
  name: string
  text: string
  score: number
  productId: string
  userId: string
}

export interface IModal {
  id?: string | null
  type?: number
  status?: boolean
}

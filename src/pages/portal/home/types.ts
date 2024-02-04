export type PageTitle = {
  title: string
}

export interface ICategory {
  id: string
  name: string
  description: string
  picture: string
}

export interface Filters {
  userId?: string
  category: string
  offset: number
  limit: number
  search: string
  order: string
}
interface Rating {
  _id: string
  name: string
  text: string
  score: number
  productId: string
  userId: string
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

export interface IProduct {
  metadata?: any
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
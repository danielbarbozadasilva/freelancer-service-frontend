export type IUser = {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

interface Rating {
  id: string;
  name: string;
  text: string;
  score: number;
  productId: string;
  userId: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  picture: string;
}

export interface Product {
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

export interface Filters {
  userId?: string
  category: string 
  offset: number
  limit: number
  search: string
  order: string
}

export type PageTitle = {
    title: string
}
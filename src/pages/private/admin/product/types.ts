export interface IModal {
  id?: string
  type?: number
  status?: boolean
}

export interface OrdersProps {
  title: string
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

export interface IProductData {
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

export interface IFilters {
  userId?: string
  category: string
  offset: number
  limit: number
  search: string
  order: string
}

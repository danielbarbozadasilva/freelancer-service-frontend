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

export interface IModal {
  status: boolean
  id?: string | null
  type?: number
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

export interface IUser {
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

export interface IProductSend {
  title: string
  description: string
  category: string
  price: number
  deliveryTime: number
  features: string[]
  userId: string
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

export interface IModal {
  id?: string | null
  type?: number
  status?: boolean
}

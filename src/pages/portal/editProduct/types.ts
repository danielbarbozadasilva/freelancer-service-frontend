export type PageTitle = {
  title: string
}

interface ICategory {
  _id: string
  name: string
  description: string
  picture: string[]
}

export interface ICategoryAll {
  id: string
  name: string
  description: string
  picture: string
}

interface IUser {
  _id: string
  name: string
  username: string
  email: string
  cpf: string
  Date: string
  picture: string[]
  country: string
  phone: string
  description: string
  permissions: string[]
  isSeller: boolean
}

export interface IProductById {
  _id?: string
  id: string
  title: string
  description: string
  category: ICategory
  price: number
  promotion: number
  images: string[]
  deliveryTime: string
  features: string[]
  sales: number
  userId?: IUser
}

export interface IProduct {
  _id: string
  userId: string
  title: string
  description: string
  price: number
  promotion: number
  images: string
  deliveryTime: number
  features: string[]
  sales: number
}

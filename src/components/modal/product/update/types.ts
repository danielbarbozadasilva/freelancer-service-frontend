export interface IProps {
  data: IProductById
  submit?: any
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

export interface ICategoryAll {
  id: string
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
  categorySelected?: string
}

export interface ICategory {
  _id: string
  name: string
  description: string
  picture: string
}

export interface IFormSend {
  userId: any
  title: string
  category: any
  description: string
  deliveryTime: number
  features: string[]
  price: string
  files?: boolean
}

export interface IProductById {
  id: string
  title: string
  description: string
  category: ICategory
  price: number
  images: string[]
  deliveryTime: number
  features: string[]
}

export const dataServices: string[] = [
  'Adobe Premiere Pro',
  'Adobe Photoshop',
  'Sony Vegas Pro',
  'Wordpress',
  'Blogger'
]

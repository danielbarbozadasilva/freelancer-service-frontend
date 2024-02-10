export interface IProps {
  data: IProduct
  submit?: any
}

export interface IProduct {
  id: string
  title: string
  description: string
  category: Category
  price: number
  promotion: number
  images: string[]
  deliveryTime: string
  features: string[]
  sales: number
  userId?: IUser
}
export interface IUser {
  _id: string
  name: string
  username: string
  id?: string
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

export interface Category {
  _id: string
  name: string
  description: string
  picture: string[]
}

export interface ICategory {
  _id?: string
  id: string
  name: string
  description: string
  picture: string
}

export interface IFormSend {
  userId: any
  title: string
  category: any
  description: string
  deliveryTime: string
  features: string[]
  price: string
}

export interface IProductById {
  id: string
  title: string
  description: string
  category: ICategory
  price: number
  images: string[]
  deliveryTime: string
  features: string[]
}

export const dataServices: string[] = [
  'Adobe Premiere Pro',
  'Adobe Photoshop',
  'Sony Vegas Pro',
  'Wordpress',
  'Blogger'
]

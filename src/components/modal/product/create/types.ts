export interface IProps {
  submit?: any
}

export interface IUser {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

export interface ICategory {
  id: string
  name: string
  description: string
  picture: string
}

export interface IFormSend {
  userId: string
  title: string
  category: string
  description: string
  deliveryTime: number
  features: string[]
  price: string
}

export interface IProductById {
  id: string
  title: string
  description: string
  category: string
  price: string
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

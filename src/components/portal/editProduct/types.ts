export interface IEditProduct {
  submit: (formData: any) => void
  product: IProductById,
  category: ICategoryAll[]
}

export interface ICategoryAll {
  id: string
  name: string
  description: string
  picture: string
}

interface ICategory {
  _id: string
  name: string
  description: string
  picture: string[]
}

export interface IUser {
  id: string
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
  userId: string
  title: string
  description: string
  price: number
  deliveryTime: string
  features: any
  category: string
}

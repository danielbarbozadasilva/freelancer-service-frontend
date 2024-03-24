export interface IProduct {
  title: string
  description: string
  category: string
  price: number
  images?: string
  deliveryTime: number
  features: string[]
}

export type TypeSignUp = {
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture?: string
  country: string
  phone: string
  description: string
  isSeller: boolean
  password: string
  confirmPassword: string
}

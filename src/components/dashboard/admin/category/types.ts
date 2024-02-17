export interface IProduct {
  id: string
  userId: string
  title: string
  description: string
  category: string
  price: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales: number
  rating: string[]
}

export type ICategory = {
  id: string
  name: string
  description: string
  picture: any
}

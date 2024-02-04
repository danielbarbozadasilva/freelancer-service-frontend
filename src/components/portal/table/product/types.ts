export interface Row {
  metadata?: any
  data: {
    _id: string
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

interface Category {
  _id: string
  name: string
  description: string
  picture: string
}

interface Rating {
  _id: string
  name: string
  text: string
  score: number
  productId: string
  userId: string
}

export interface IProps {
  result: Row[]
  onRemove: any
}

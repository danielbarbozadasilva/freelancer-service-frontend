export interface ListProductProps {
  open: boolean
  close: () => void
  products: IProduct[]
}

interface IProduct {
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

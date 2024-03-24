export interface ProductCardProps {
  item: {
    data: {
      id: string
      title: string
      description: string
      images: string
      price: number
      promotion: number
      features: string[]
    }
  }
}

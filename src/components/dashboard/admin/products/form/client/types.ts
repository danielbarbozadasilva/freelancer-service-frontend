export interface ListClientProps {
  open: boolean
  close: () => void
  client: IClient[]
}

interface IClient {
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
  rating: string
}

export interface ListRatingProps {
  open: boolean
  close: () => void
  rating: any[]
}

interface IRating {
  name: string
  text: string
  score: number
  productId: string
  userId: string
}
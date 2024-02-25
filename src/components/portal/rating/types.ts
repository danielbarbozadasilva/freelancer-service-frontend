export interface Rating {
  id: string
  name: string
  text: string
  score: number
  productId: string
  userId: string
}

export interface ResultRating {
  result: Rating[]
  averageScore: number
}

export interface IProps {
  data: IRating[]
}

interface IRating {
  name: string
  text: string
  score: number
  productId: string
  userId: string
}

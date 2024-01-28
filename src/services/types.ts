export interface Filters {
    userId?: string
    category: string 
    offset: number
    limit: number
    search: string
    order: string
}

export interface Rating{
  _id: string
  name: string
  text: string
  score: string
  productId: string
  userId: string
}
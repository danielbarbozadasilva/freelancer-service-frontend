export interface Filters {
    userId?: string
    category: string 
    offset: number
    limit: number
    search: string
    order: string
}

export interface Rating{
  name: string
  text: string
  score: number
  productId: string
  userId: string
}
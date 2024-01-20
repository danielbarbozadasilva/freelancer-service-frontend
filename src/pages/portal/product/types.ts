export interface Filters {
    userId: string
    category: string 
    offset: number
    limit: number
    search: string
  }

  export type IUser = {
    id: string
    username: string
    email: string
    isSeller: boolean
    picture: string
  }

export type PageTitle = {
    title: string
}
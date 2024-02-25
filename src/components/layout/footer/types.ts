export type IUser = {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

export type ICategory = {
  id?: string
  name: string
  description: string
  picture: string
}

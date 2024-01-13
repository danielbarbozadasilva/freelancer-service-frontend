export type IUser = {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

export type PageType = {
  submit?: any
}

export interface IMessage {
  _id: string
  userId: string
  description: string
}
  
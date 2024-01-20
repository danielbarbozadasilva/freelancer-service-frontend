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

export type IConversation = {
  _id: string
  id: string
  sellerId: string
  buyerId: string
  readBySeller: boolean
  readByBuyer: boolean
  lastMessage: string
  isSeller: boolean
  userId: string
  to: string
  updatedAt: string
 }
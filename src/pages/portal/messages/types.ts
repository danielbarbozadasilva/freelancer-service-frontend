export type IUser = {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

export type IConversation = {}

export type IDataSend = {
  isSeller: boolean
  userId: string
}

export type IDataSendUpdate = {
  isSeller: boolean
  id: string
}

export type PageTitle = {
  title: string
}

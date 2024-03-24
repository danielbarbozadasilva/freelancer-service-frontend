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
  id: string
  userId: string
  description: string
}

 export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  cpf: string;
  birthDate: Date;
  picture: string;
  country: string;
  phone?: string;
  description?: string;
  permissions: string[];
  isSeller: boolean;
}

export interface IConversation {
  _id: string;
  id: string;
  sellerId: User;
  buyerId: User;
  readBySeller: boolean;
  readByBuyer: boolean;
  lastMessage?: string;
  isSeller: boolean
  userId: string
  to: string
  updatedAt: string
}
export type IDataSend = {
  isSeller: boolean
  userId: string
  to?: string
}

export type IDataList = {
  buyerId: string
  userId: string
}

export type IDataSendUpdate = {
  isSeller: boolean
  id: string
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

export interface IUserSendInterface {
  id: string
  data: {
    name: string
    username: string
    email: string
    cpf: string
    birthDate: string
    picture: string
    country: string
    phone: string
    description: string
    permissions: string[]
    isSeller: boolean
  }
}

export interface IUserInterface {
  id: string
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: string
  country: string
  phone: string
  description: string
  permissions: string[]
  isSeller: boolean
}

export interface ISeller {
  id: string
  isSeller: boolean
}

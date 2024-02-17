export interface UserInterface {
  id: string | undefined
  id?: string
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: string[]
  country: string
  phone: string
  description: string
  permissions: string[]
  hash: string
  salt: string
  recovery: {
    token: string
    date: Date
  }
  isSeller: boolean
}

export interface ISeller {
  id: string
  isSeller: boolean,
}

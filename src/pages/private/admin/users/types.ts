export interface IModal {
  id?: string
  type?: number
  status?: boolean
}

export interface ClientProps {
  title: string
}

export interface UserInterface {
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

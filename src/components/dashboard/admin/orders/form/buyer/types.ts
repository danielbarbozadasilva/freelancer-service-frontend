export interface ListBuyerProps {
  open: boolean
  close: () => void
  buyer: IBuyer[]
}

export interface IBuyer {
  id: string
  name: string
  username: string
  email: string
  cpf: string
  birthDate: Date
  picture: string
  country: string
  phone: string
  description: string
  permissions: string[]
  isSeller: boolean
  createdAt: Date
}
export interface ListFreelancerProps {
  open: boolean
  close: () => void
  user: IUser[]
}

interface IUser {
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

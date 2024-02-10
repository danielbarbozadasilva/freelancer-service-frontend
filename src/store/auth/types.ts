export interface ISignIn {
  email: string
  password: string
}

export interface ISignUp {
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture?: string
  country: string
  phone: string
  description: string
  isSeller: boolean
  password: string
  confirmPassword: string
}

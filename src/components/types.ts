export type PageType = {
  submit: any
}

export type ISignIn = {
  email: string
  password: string
}

export type TypeSignUp = {
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture?: any
  country: string
  phone: string
  description: string
  isSeller: boolean
  password: string
  confirmPassword?: string
}

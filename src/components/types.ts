export type PageType = {
  submit: (formData: FormData) => void;
}

export type TypeSignUp = {
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

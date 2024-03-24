export interface ContainerFormProps {
  id: string
  submit: (formData: FormData) => void
}

export interface FormData {
  name: string
  text: string
  score: number
  productId: string
  userId: string
}

export interface IUser {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

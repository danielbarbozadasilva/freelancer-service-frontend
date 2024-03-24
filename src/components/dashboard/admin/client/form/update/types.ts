export interface FormClientUpdateProps {
    submit: (formData: FormData) => void;
    data: IUser;
}

export interface IUser {
    name: string
    username: string
    email: string
    cpf: string
    birthDate: string
    picture?: any
    country: string
    phone: string
    description: string
    permissions?: string[]
    hash?: string
    salt?: string
    recovery?: {
      token: string,
      date: Date
    },
    isSeller: boolean
    files?: boolean,
    password?: string | null
  }
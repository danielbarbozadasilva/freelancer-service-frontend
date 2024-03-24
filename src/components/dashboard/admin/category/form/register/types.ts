export interface FormCategoryRegisterProps {
  submit: (formData: FormData) => void
}

export type ICategory = {
  id?: string
  name: string
  description: string
  picture?: any
}

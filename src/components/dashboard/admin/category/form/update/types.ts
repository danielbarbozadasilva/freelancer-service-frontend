export interface FormCategoryUpdateProps {
  submit: (formData: FormData) => void
  data: ICategory
}

export type ICategory = {
  id?: string
  name: string
  description: string
  picture?: any
  files?: boolean
}

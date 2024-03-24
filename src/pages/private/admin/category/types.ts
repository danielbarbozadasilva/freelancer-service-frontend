export interface IModal {
  id?: string | null
  type?: number
  status?: boolean
}

export interface CategoryProps {
  title: string
}

export type ICategory = {
  id: string
  name: string
  description: string
  picture: any
}

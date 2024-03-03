export interface ICategory {
    id: string
    name: string
    description: string
    picture: string
}

export interface ICategorySendData {
  id: string
  data: {
    name: string
    description: string
    picture: string
  }
}

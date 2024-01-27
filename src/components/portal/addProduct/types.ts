export interface IAddProduct{
    submit: any
}

export interface IProduct {
    userId?: string;
    title: string;
    description: string;
    category: string;
    price: number;
    images?: string;
    deliveryTime: string;
    features: string;
}

export type ICategory = {
    id?: string
    name: string
    description: string
    picture: string
}
  
export type IUser = {
    id: string
    username: string
    email: string
    isSeller: boolean
    picture: string
  }

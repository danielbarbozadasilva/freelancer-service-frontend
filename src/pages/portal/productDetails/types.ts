export interface Filters {
  userId: string
  category: string 
  offset: number
  limit: number
  search: string
}

export type PageTitle = {
  title: string
}

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  cpf: string;
  birthDate: Date;
  picture: string[];
  country: string;
  phone: string;
  description: string;
  permissions: string[];
  isSeller: boolean;
}

export interface ICategory {
  _id: string
  name: string
  description: string
  picture: string[]
}

export interface IProduct {
  id: string;
  userId?: User;
  title: string;
  description: string;
  category: ICategory;
  price: number;
  images: string[];
  deliveryTime: string;
  features: string[];
  sales: number;
}

export interface IRating {
  name: string;
  text: string;
  score: number;
  productId: string;
  userId: string;
}

export interface IResultRating {
  result: IRating[];
  averageScore: number;
}
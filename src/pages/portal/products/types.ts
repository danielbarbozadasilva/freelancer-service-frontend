export type IUser = {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

interface Rating {
  _id: string;
  name: string;
  text: string;
  score: number;
  productId: string;
  userId: string;
}

interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  cpf: string;
  birthDate: string;
  picture: string;
  country: string;
  phone: string;
  description: string;
  permissions: string[];
  isSeller: boolean;
}

interface Category {
  _id: string;
  name: string;
  description: string;
  picture: string;
}

export interface Product {
  metadata?: number,
  data:{
    _id: string;
    userId: string;
    title: string;
    description: string;
    category: Category;
    price: number;
    promotion: number;
    images: string;
    deliveryTime: number;
    features: string[];
    sales: number;
    rating: Rating;
    user: User;
  }
}

export interface Filters {
  userId?: string
  category: string 
  offset: number
  limit: number
  search: string
}

export type PageTitle = {
    title: string
}
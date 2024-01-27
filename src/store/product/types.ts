export interface Filters {
    userId?: string
    category: string 
    offset: number
    limit: number
    search: string
    order: string
  }
  
  interface User {
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
  
  export interface Product {
    id: string;
    userId?: User;
    title: string;
    description: string;
    category: string;
    price: number;
    images: string;
    deliveryTime: string;
    features: string[];
    sales: number;
    rating: string;
  }
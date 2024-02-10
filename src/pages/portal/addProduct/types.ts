export type PageTitle = {
    title: string
}

export interface IProduct {
    id: string; 
    promotion: number;
    sales: number;
    userId?: string;
    title: string;
    description: string;
    category: string;
    price: number;
    images?: string;
    deliveryTime: string;
    features: string;
}
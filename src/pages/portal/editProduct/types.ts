export type PageTitle = {
    title: string
}

export interface IProduct {
    title: string;
    description: string;
    category: string;
    price: number;
    images?: string;
    deliveryTime: string;
    features: string[];
}
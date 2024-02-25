export interface ListProductProps {
    open: boolean;
    close: () => void;
    products: IProduct[];
}

interface IProduct {
    id: string
    userId: string
    title: string
    description: string
    category: string
    price: number
    images: string[]
    deliveryTime: number
    features: string[]
    sales: number
    rating: string[]
}
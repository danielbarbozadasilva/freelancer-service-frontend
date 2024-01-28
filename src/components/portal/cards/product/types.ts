export interface ProductCardProps {
  item: {
    data:{
      _id: string;
      title: string;
      user: {
        username: string;
      };
      description: string;
      rating: {
        score: number;
      };
      images: string;
      price: number;
      promotion: number;
      features: string[]
    };
    }
}
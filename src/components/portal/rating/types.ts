export interface Rating {
    _id: string;
    name: string;
    text: string;
    score: number;
    productId: string;
    userId: string;
}
  
export interface ResultRating {
    result: Rating[];
    averageScore: number;
}

export interface IProps {
    data: [{
      name: string
      text: string
      score: number
    }]
}
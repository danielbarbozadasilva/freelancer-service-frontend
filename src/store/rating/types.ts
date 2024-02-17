export interface IRating {
  id?: string;
  name: string;
  text: string;
  score: number;
  productId: string;
  userId: string;
}

export interface ResultRating {
  result: IRating[];
  averageScore: number;
}
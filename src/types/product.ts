import { Rating } from "./rating";

export type ProductKey = keyof ProductType;

  export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  
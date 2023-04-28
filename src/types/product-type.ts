// import { Rating } from "./rating";

export type ProductKey = keyof ProductType;

// export interface ProductType {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: Rating;
//   }

export interface ProductType {
  images: string;
  name: string;
  processor: string;
  price: number;
  display: number;
  ram: number;
  camera: number;
  storage: number;
  stock: number;
  ratings: number;
  category: string;
  brand: string;
  currency: string;
  description: string;
  color: string;
  reviews: Review[];
  id: number;
  }


  export interface Rating {
    average: number;
    count: number;
  }
  
  export interface Review {
    username: string;
    rating: number;
    comment: string;
  }
  
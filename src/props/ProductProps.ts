import { ProductType } from "@/types/product-type";
import { Dispatch, SetStateAction } from "react";

export interface ProductProps {
    products: ProductType[],
    uniqueBrands: string[],
    brandFilter: string,
    setBrandFilter: Dispatch<SetStateAction<string>>,
    isLoading: boolean,
    isError: boolean,
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void,
    activeProducts: ProductType[]
}

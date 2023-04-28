// useProductQuery.ts
import { QueryObserverResult, useQuery } from "react-query";
import { ProductType } from "@/types/product";
import { fetchProductsFromDb } from "@/api/fetch-products";

export const useProductQuery = (categoryName: string) => {
  const { data, isLoading, isError }: QueryObserverResult<ProductType[], unknown> =
    useQuery("products", () => fetchProductsFromDb(categoryName));

  return {
    products: data ?? [],
    isLoading,
    isError,
  };
};


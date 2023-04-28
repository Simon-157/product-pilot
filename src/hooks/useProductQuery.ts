// useProductQuery.ts
import { QueryObserverResult, useQuery } from "react-query";
import { ProductType } from "@/types/product-type";
import { fetchCategoriesFromDb, fetchProductsFromDb } from "@/api/fetch-products";
import { CategoryType } from "@/types/category";


// Query hook to fetch and cache categories data
export const useCategoryQuery = () => {
  const { data, isLoading, isError }: QueryObserverResult<CategoryType[], unknown> =
    useQuery("categories", fetchCategoriesFromDb);

  return {
    categories: data ?? [],
    isLoading,
    isError,
  };
};

// Query hook to fetch and cache product data
export const useProductQuery = (categoryName: string) => {
  const { data, isLoading, isError }: QueryObserverResult<ProductType[], unknown> =
    useQuery("products", () => fetchProductsFromDb(categoryName));

  return {
    products: data ?? [],
    isLoading,
    isError,
  };
};


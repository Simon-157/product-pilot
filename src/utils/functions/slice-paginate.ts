import { ProductType } from "@/types/product-type";

export const paginateProducts = (
  products: ProductType[],
  currentPage: number,
  itemsPerPage: number
): ProductType[] => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  return products?.slice(startIndex, endIndex);
};

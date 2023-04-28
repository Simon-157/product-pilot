import { ProductType } from "@/types/product";

export const filterProductsByBrand = (
  products: ProductType[],
  brandFilter: string
): ProductType[] => {
  if (!brandFilter) {
    return products;
  }
  return products.filter((product) => product.brand === brandFilter);
};

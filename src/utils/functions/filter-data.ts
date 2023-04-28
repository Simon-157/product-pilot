import { ProductType } from "@/types/product-type";

export const filterProductsByBrand = (
  products: ProductType[],
  brandFilter: string
): ProductType[] => {
  if (!brandFilter) {
    return products;
  }
  return products?.filter((product) => product.brand === brandFilter);
};

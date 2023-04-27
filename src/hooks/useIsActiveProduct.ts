import { ProductType } from "@/types/product";
import { useState, useEffect } from "react";

export const useIsActiveProduct = (initialState = [] as ProductType[]) => {
  const [activeProducts, setActiveProducts] = useState(initialState);

  const addActiveProduct = (product: ProductType) => {
    setActiveProducts((prevActiveProducts) => [
      ...prevActiveProducts,
      product,
    ]);
  };

  const removeActiveProduct = (product: ProductType) => {
    setActiveProducts((prevActiveProducts) =>
      prevActiveProducts.filter((p) => p.id !== product.id)
    );
  };

  const isActiveProduct = (product:ProductType) => {
    return activeProducts.some((p) => p.id === product.id);
  };

  useEffect(() => {
    console.log("active products:", activeProducts);
  }, [activeProducts]);

  return { activeProducts, addActiveProduct, removeActiveProduct, isActiveProduct };
};

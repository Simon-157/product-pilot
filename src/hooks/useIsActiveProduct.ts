/**
 * This is a custom hook in TypeScript that manages a list of active products and provides functions to
 * add, remove, and check if a product is active.
 * @param initialState - The initial state for the activeProducts array. It is an optional parameter
 * and if not provided, an empty array of ProductType will be used as the initial state.
 * @returns An object with four properties: `activeProducts`, `addActiveProduct`,
 * `removeActiveProduct`, and `isActiveProduct`.
 */
import { ProductType } from "@/types/product-type";
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
      prevActiveProducts?.filter((p) => p.id !== product.id)
    );
  };

  const isActiveProduct = (product:ProductType) => {
    return activeProducts?.some((p) => p.id === product.id);
  };

  useEffect(() => {
    console.log("active products:", activeProducts);
  }, [activeProducts]);

  return { activeProducts, addActiveProduct, removeActiveProduct, isActiveProduct };
};

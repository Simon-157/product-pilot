/**
 * This is a custom hook that returns the current category name and a function to update it, using the
 * CategoryNameContext.
 * @returns The `useCategoryName` function returns an object with two properties: `categoryName` and
 * `setCategoryName`. 
 */
//library
import { useContext } from "react";

//context
import CategoryContext from "@/contexts/CategoryNameContext";

export const useCategoryName = () => {
  const { categoryName, setCategoryName } = useContext(CategoryContext);
  return { categoryName, setCategoryName };
};

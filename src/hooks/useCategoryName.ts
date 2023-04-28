//library
import { useContext } from "react";

//context
import CategoryContext from "@/contexts/CategoryNameContext";

export const useCategoryName = () => {
  const { categoryName, setCategoryName } = useContext(CategoryContext);
  return { categoryName, setCategoryName };
};

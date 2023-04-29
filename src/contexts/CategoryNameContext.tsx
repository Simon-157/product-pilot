/**
 * This creates creates a context for a category name and provides a way to set
 * and access it.
 * @property {string} categoryName - a string that represents the current category name in the context.
 * @property setCategoryName - `setCategoryName` is a function that takes a string argument and updates
 * the `categoryName` state with the new value. It is used in the `CategoryContextProvider` component
 * to provide the `categoryName` and `setCategoryName` values to the context. Other components that
 * consume this
 */

import React, { ReactNode, useState } from "react";

type CategoryContextType = {
  categoryName: string;
  setCategoryName:  (categoryName: string) => void;
};

const CategoryContext = React.createContext<CategoryContextType>({
  categoryName: "",
  setCategoryName:  () => {},
});

interface Props {
  children: ReactNode;
}

export const CategoryContextProvider: React.FC<Props> = ({ children }) => {
  const [categoryName, setCategoryName] = useState<string>("");


  return (
    <CategoryContext.Provider value={{categoryName, setCategoryName}}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;

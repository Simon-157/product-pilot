


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

import { createContext, useContext, useState, ReactNode } from "react";
import { products } from "@/utils/data/products";
import { ProductKey, ProductType } from "@/types/product";
import { sortTable } from "@/utils/functions/functions";

interface ItemsContextType {
  items: ProductType[];
  setItems: React.Dispatch<React.SetStateAction<ProductType[]>>;
  sortItems: (key: ProductKey) => void;
}


interface Props {
  children: ReactNode;
}

export const ItemsContext = createContext<ItemsContextType>({
  items: products,
  setItems: () => {},
  sortItems: () => {},
});

export const useItemsContext = () => useContext(ItemsContext);


export const ItemsProvider: React.FC<Props> = ({ children }) => {
  const [items, setItems] = useState(products);

  const sortItems = (key: ProductKey) => {
    setItems((prevProducts) => sortTable(prevProducts, key));
  };

  return (
    <ItemsContext.Provider value={{ items, setItems, sortItems}}>
      {children}
    </ItemsContext.Provider>
  );
};

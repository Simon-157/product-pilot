import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { products } from "@/utils/data/products";
import { ProductKey, ProductType } from "@/types/product";
import { useItemsContextStore } from "./ActiveItemsStoreContext";
import { useIsActiveProduct } from "@/store/useActiveProductA";
import { useStore } from "zustand";
import { sortTable } from "@/utils/functions/sort-data";
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
  const {activeProducts} = useStore(useIsActiveProduct);
  const [items, setItems] = useState(activeProducts?.length >0 ? activeProducts : products);

  const sortItems = (key: ProductKey) => {
    setItems((prevProducts) => sortTable(prevProducts, key));
  };

  useEffect(() =>{
    return 
  }, activeProducts)

  return (
    <ItemsContext.Provider value={{ items, setItems, sortItems}}>
      {children}
    </ItemsContext.Provider>
  );
};

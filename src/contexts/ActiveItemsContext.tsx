import React, { createContext, useContext, useState, ReactNode } from "react";
import { products } from "@/utils/data/products";
import { ProductKey, ProductType } from "@/types/product";

interface ActiveItemContextType {
  items: { key: number; status: boolean; item: ProductType; }[]
  setItems: React.Dispatch<React.SetStateAction<{ key: number; status: boolean; item: ProductType; }[]>>;
}

interface ActiveItemType {
  key: ProductKey;
  status: boolean;
  item: ProductType;
}


interface Props {
  children: ReactNode;
}


export const ActiveItemsContext = createContext<ActiveItemContextType>({
  items:  products.map((product) => ({
    key: product.id,
    status: false,
    item: product,
  })),
  setItems: () => {},
});

export const useActiveItemsContext = () => useContext(ActiveItemsContext);

export const ItemsProvider: React.FC<Props> = ({ children }) => {
//   const [items, setItems] = useState([] as ActiveItemType[]);
  const [items, setItems] = useState(
    products.map((product) => ({
      key: product.id,
      status: false,
      item: product,
    }))
  );

console.log(items)
  return (
    <ActiveItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ActiveItemsContext.Provider>
  );
};

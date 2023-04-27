import { useActiveProductsStore } from '@/store/useActiveProduct';
import { useIsActiveProduct } from '@/store/useActiveProductA';
import { ProductType } from '@/types/product';
import React, { ReactNode } from 'react';

interface ItemsContextState {
  activeProducts: ProductType[];
  addToActive: (product:ProductType) => void;
  removeFromActive: (productId:number) => void;
}

interface Props {
    children: ReactNode;
  }
  

const defaultContextValue: ItemsContextState = {
  activeProducts: [],
  addToActive: () => {},
  removeFromActive: () => {},
};

const ItemsContext = React.createContext<ItemsContextState>(defaultContextValue);

export const ItemsProvider: React.FC<Props> = ({ children }) => {
  const { activeProducts, addToActive, removeFromActive } = useIsActiveProduct();

  const contextValue: ItemsContextState = {
    activeProducts,
    addToActive,
    removeFromActive
    
  };

  console.log(activeProducts)

  return <ItemsContext.Provider value={contextValue}>{children}</ItemsContext.Provider>;
};

export const useItemsContext = () => React.useContext(ItemsContext);

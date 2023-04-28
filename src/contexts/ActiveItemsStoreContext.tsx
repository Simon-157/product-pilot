import { useIsActiveProduct } from '@/store/useActiveProduct';
import { ProductType } from '@/types/product-type';
import React, { ReactNode } from 'react';

interface ActiveItemsContextState {
  activeProducts: ProductType[];
  addToActive: (product:ProductType) => void;
  removeFromActive: (productId:number) => void;
}

interface Props {
    children: ReactNode;
  }
  

const defaultContextValue: ActiveItemsContextState = {
  activeProducts: [],
  addToActive: () => {},
  removeFromActive: () => {},
};

const ActiveItemsContext = React.createContext<ActiveItemsContextState>(defaultContextValue);

export const ActiveItemsProvider: React.FC<Props> = ({ children }) => {
  const { activeProducts, addToActive, removeFromActive } = useIsActiveProduct();

  const contextValue: ActiveItemsContextState = {
    activeProducts,
    addToActive,
    removeFromActive
    
  };

  console.log(activeProducts)

  return <ActiveItemsContext.Provider value={contextValue}>{children}</ActiveItemsContext.Provider>;
};

export const useItemsContextStore = () => React.useContext(ActiveItemsContext);

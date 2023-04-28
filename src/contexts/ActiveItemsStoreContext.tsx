/* This code is creating a React context and provider for managing a list of active products. It
imports a custom hook `useIsActiveProduct` from a store file, which likely contains state and
actions related to managing active products. It also imports a type `ProductType` from a types file.
The `ActiveItemsContextState` interface defines the shape of the context state, which includes an
array of active products, and functions for adding and removing products from the active list. The
`ActiveItemsProvider` component wraps its children with the context provider, and passes down the
active products and related functions as context values. Finally, the `useItemsContextStore` hook is
exported for consuming the context values in child components. */
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

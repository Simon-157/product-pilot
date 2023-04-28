import { ProductType } from "@/types/product-type";
import {create} from "zustand";

type ActiveProductsState = {
  activeProducts: ProductType[];
  resetActive: () => void;
  addToActive: (product: ProductType) => void;
  removeFromActive: (id: number) => void;
};

export const useIsActiveProduct = create<ActiveProductsState>((set) => ({
  activeProducts: [],
  resetActive: () => set((state) => ({ activeProducts: [] })),
  addToActive: (product) =>
    set((state) => ({ activeProducts: [...state.activeProducts, product] })),
  removeFromActive: (id) =>
    {set((state) => ({
      activeProducts: state.activeProducts?.filter((p) => p.id !== id),
    })); console.log("i am in zustand");
    },
}));



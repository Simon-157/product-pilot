import { ProductType } from "@/types/product";
import {create} from "zustand";

type ActiveProductsState = {
  activeProducts: ProductType[];
  addToActive: (product: ProductType) => void;
  removeFromActive: (id: number) => void;
};

export const useIsActiveProduct = create<ActiveProductsState>((set) => ({
  activeProducts: [],
  addToActive: (product) =>
    set((state) => ({ activeProducts: [...state.activeProducts, product] })),
  removeFromActive: (id) =>
    {set((state) => ({
      activeProducts: state.activeProducts.filter((p) => p.id !== id),
    })); console.log("i am in zustand");
    },
}));
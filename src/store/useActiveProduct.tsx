import create from 'zustand';

type ProductId = number;

interface ActiveProductsState {
  activeProductIds: ProductId[];
  addActiveProduct: (productId: ProductId) => void;
  removeActiveProduct: (productId: ProductId) => void;
}

export const useActiveProductsStore = create<ActiveProductsState>((set) => ({
  activeProductIds: [],
  addActiveProduct: (productId) =>
    set((state) => ({ activeProductIds: [...state.activeProductIds, productId] })),
  removeActiveProduct: (productId) =>
    set((state) => ({
      activeProductIds: state.activeProductIds.filter((id) => id !== productId),
    })),
}));

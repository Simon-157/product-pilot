import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
  categoryName: string;
}

// key to use for localStorage
const localStorageKey = 'categoryName'; 

  const initialState: CategoryState = {
    categoryName: typeof window !== 'undefined'? localStorage.getItem(localStorageKey) ?? '':'', // get categoryName from localStorage or use empty string as default
  };

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryName(state, action: PayloadAction<string>) {
      state.categoryName = action.payload;
      localStorage.setItem(localStorageKey, action.payload); // save categoryName to localStorage
    },
  },
});

export const { setCategoryName } = categorySlice.actions;
export default categorySlice.reducer;

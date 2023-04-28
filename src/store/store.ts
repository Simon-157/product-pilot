import { configureStore } from '@reduxjs/toolkit';
import categoryReducer, { setCategoryName } from './CategorySlice';


const store = configureStore({
    reducer: {
      category: categoryReducer,
    },
  });
  
  // Load initial state from localStorage
if (typeof window !== 'undefined') {
const storedCategoryName = localStorage.getItem('categoryName');
if (storedCategoryName) {
    store.dispatch(setCategoryName(storedCategoryName));
}
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;

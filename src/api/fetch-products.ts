import { ProductType } from "@/types/product-type";
import { API_BASE_URL, CATEGORY, PRODUCTS } from "@/utils/constants";
import axios from "axios";
import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";
import { firebaseApp } from "./firebase";
import { CategoryType } from "@/types/category";


export const fetchProductsFromDb = async (category: string): Promise<ProductType[]> => {
  const db = getFirestore(firebaseApp);
  const productsCollection = collection(db, "products");

  const q = query(
    productsCollection,
    where("category", "==", category),
    limit(20)
  );
  
  const querySnapshot = await getDocs(q);
  const products: ProductType[] = [];
  
  querySnapshot.forEach((doc) => {
    products.push(doc.data() as ProductType);
  });
  
  return products;
};


export const fetchCategoriesFromDb = async (): Promise<CategoryType[]> => {
  const db = getFirestore(firebaseApp);
  const categoriesCollection = collection(db, "categories");
  const querySnapshot = await getDocs(categoriesCollection);
  const categories: CategoryType[] = [];
  querySnapshot.forEach((doc) => {
    categories.push(doc.data() as CategoryType);
  });
  return categories;
};



export const fetchProducts = async (category: string): Promise<ProductType[]> => {
  const { data } = await axios.get<ProductType[]>(
    `${API_BASE_URL}${PRODUCTS}/${CATEGORY}/${category}?limit=4`
  );
  return data;
};

export default fetchProducts;

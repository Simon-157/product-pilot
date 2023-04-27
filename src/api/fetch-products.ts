import { ProductType } from "@/types/product";
import { API_BASE_URL, CATEGORY, PRODUCTS } from "@/utils/constants";
import axios from "axios";

const fetchProducts = async (category: string): Promise<ProductType[]> => {
  const { data } = await axios.get<ProductType[]>(
    `${API_BASE_URL}${PRODUCTS}/${CATEGORY}/${category}?limit=4`
  );
  return data;
};

export default fetchProducts;

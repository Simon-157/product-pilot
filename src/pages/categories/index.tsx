//components
import CategoryCard from "@/components/category-card/CategoryCard";

//hooks
import { useCategoryQuery } from "@/hooks/useProductQuery";
import { CategoryType } from "@/types/category";

//styles
import categoryStyles from "./categories-styles.module.scss"
import Loader from "@/components/loader/Loader";

const CategoryPage = () => {
  const { categories, isLoading, isError } = useCategoryQuery();

  return (
   

  <div className={categoryStyles.baseWrapper}>
    {isLoading && <Loader />}
    {isError && <p>Error fetching categories.</p>}
    {categories.map((category: CategoryType) => (
      <CategoryCard key={category.id} category={category} />
    ))}
  </div>

  );
};

export default CategoryPage;

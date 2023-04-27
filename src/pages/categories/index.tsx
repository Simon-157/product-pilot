import { Category } from "@/types/category";
import { categories } from "@/utils/data/categories";
import categoryStyles from "./categories-styles.module.scss"
import CategoryCard from "@/components/category-card/CategoryCard";


const CategoryPage = () => {
  return (
    <div className={categoryStyles.baseWrapper}>
      {categories.map((category:Category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryPage;

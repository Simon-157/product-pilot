/* This is a component that renders a list of categories using the `CategoryCard`
component. It is using the `useCategoryQuery` hook to fetch the categories data and displaying a
loader while the data is being fetched. If there is an error fetching the data, it displays an error
message. The `CategoryType` type is used to define the shape of the category data. */

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
    <>
      <header className={categoryStyles.banner}>
        <h1>BROWSE THE AVAILABLE CATEGORIES OF PRODUCTS</h1>
      </header>
      <div className={categoryStyles.baseWrapper}>

          {isLoading && <Loader />}
          {isError && <p>Error fetching categories.</p>}
          {categories?.map((category: CategoryType) => (
            <CategoryCard key={category.id} category={category} />
          ))}

      </div>
    </>

  );
};

export default CategoryPage;

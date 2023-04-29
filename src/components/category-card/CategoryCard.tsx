/**
 * This CategoryCard component that renders a card for a category, with an image, name,
 * description, and a link to view products in that category.
 * @param  - it that takes in a single prop called `category` of type `CategoryType`.`
 * @returns The CategoryCard component is being returned.
 */

//libraries
import { useDispatch } from "react-redux";
import Link from "next/link";

//components
import { CategoryType } from "@/types/category";
import { setCategoryName } from "@/store/CategorySlice";

//styles
import styles from "./card-styles.module.scss";



interface Props {
  category: CategoryType;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
  const dispatch = useDispatch();


  const handleCategoryChange =  (name: string) => {
    dispatch(setCategoryName(name));
  };

  
  return (
    <div className={styles.itemOne}>
      <div className={styles.imgWrapper}>
        <img alt="category image" src={category?.image} />
      </div>
      <div className={styles.textWrapper}>
        <h3>{category?.name}</h3>
        <h4>{category?.description}</h4>
        <Link
          href={`/products?category=${category?.name}`}
          onClick={() =>  handleCategoryChange(category?.name)}
        >
          Pilot Products
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;

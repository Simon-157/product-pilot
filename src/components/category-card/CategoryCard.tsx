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
        <img alt="category image" src={category.image} />
      </div>
      <div className={styles.textWrapper}>
        <h3>{category.name}</h3>
        <h4>{category.description}</h4>
        <Link
          href={`/products?category=${category.name}`}
          onClick={() =>  handleCategoryChange(category.name)}
        >
          Pilot Products
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;

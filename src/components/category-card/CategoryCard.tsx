//libraries
import Link from "next/link";

//components
import { CategoryType } from "@/types/category";

//styles
import styles from "./card-styles.module.scss";

interface Props {
  category: CategoryType;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
  return (
    <div className={styles.itemOne}>
      <div className={styles.imgWrapper}>
        <img alt="category image" src={category.image} />
      </div>
      <div className={styles.textWrapper}>
        <h3>{category.name}</h3>
        <h4>{category.description}</h4>
        <Link href={`/products?category=${category.name}`} >Pilot Products</Link>
      </div>
    </div>
  );
};

export default CategoryCard;

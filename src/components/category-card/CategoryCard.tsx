
import { Category } from "@/types/category";
import styles from "./card-styles.module.scss";

interface Props {
  category: Category;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
  return (
    <div className={styles.itemOne}>
      <div className={styles.imgWrapper}>
        <img alt="group_img" src={category.image} />
      </div>
      <div className={styles.textWrapper}>
        <h3>{category.name}</h3>
        <h4>{category.description}</h4>
        <a href={category.link}>Pilot Products</a>
      </div>
    </div>
  );
};

export default CategoryCard;

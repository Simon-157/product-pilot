// import { useItemsContext } from "@/contexts/activeItemsContextA";
import { ProductType } from "@/types/product";
import productStyles from './card-styles.module.scss';
import { useIsActiveProduct } from "@/store/useActiveProductA";
import { useEffect, useState } from "react";
import { useItemsContext } from "@/contexts/ItemsContext";

interface Props {
  product: ProductType;
  compare: boolean;
}

const ProductCard: React.FC<Props> = ({ product, compare }) => {
  const { activeProducts, addToActive, removeFromActive } = useIsActiveProduct();
  const {setItems} = useItemsContext();

  // const isActive = useIsActiveProduct(product as unknown as ProductTyp);
  const [state, setState] = useState(compare)

  const handlePilotClick = () => {
    console.log("clicked");

    if (state) {
      removeFromActive(product.id);
      setItems(activeProducts)
      // console.log(product.id)
      setState(false)
    } else {
      addToActive(product);
      setState(true)
      setItems(activeProducts)
      console.log(activeProducts);

    }
  };

  return (
    <div key={product.id} className={`${productStyles.col_sm_6} ${productStyles.col_md_3}`}>
      <div className={`${productStyles.product}${state ? ` ${productStyles.compare}` : ''}`}>
        <img src={product.images} alt="" />
        <div className={productStyles.image_overlay} />
        <div className={productStyles.view_details} onClick={handlePilotClick}>
          {state ? 'Remove' : 'Pilot'}
        </div>
        <div className={productStyles.stats}>
          <div className={productStyles.stats_container}>
            <span className={productStyles.product_price}>{product.price}</span>
            <span className={productStyles.product_name} />
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>)
}


export default ProductCard

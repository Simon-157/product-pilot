/* This code is defining a React functional component called `ProductCard` that takes in two props:
`product` of type `ProductType` and `compare` of type `boolean`.  */

// libraries
import { useState } from "react";

// components
import { ProductType } from "@/types/product-type";

import { useIsActiveProduct } from "@/store/useActiveProduct";

//custom snackbar hook
import { useSnackbar } from "@/hooks/useSnackBar";

// styles
import productStyles from './card-styles.module.scss';

interface Props {
  product: ProductType;
  compare: boolean;
}

const ProductCard: React.FC<Props> = ({ product, compare }) => {
  const { addToActive, removeFromActive } = useIsActiveProduct();
  const [state, setState] = useState(compare)
  const { showSnackbar, snackbar } = useSnackbar();


  const handlePilotClick = () => {
    // console.log("clicked");
    if (state) {
      removeFromActive(product.id);
      setState(false)
      showSnackbar("Product removed", "info")
      
    } else {
      addToActive(product);
      setState(true)
      showSnackbar("Pilotted Product", "success")
      // console.log(activeProducts);
    }
  };

  return (
    <div key={product.id} className={`${productStyles.col_sm_6} ${productStyles.col_md_3}`}>
      <div className={`${productStyles.product}${state ? ` ${productStyles.compare}` : ''}`}>
        <img src={product.images} alt="" />
        <div className={productStyles.image_overlay} />
        <div className={productStyles.view_details} onClick={handlePilotClick}>
          {state ? 'Remove' : 'Pilot'}
          {snackbar}
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

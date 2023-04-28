// import { useItemsContext } from '@/contexts/ActiveItemsStoreContext';
// import productStyles from './card-styles.module.scss';
// import { ProductType } from '@/types/product';
// import { useState } from 'react';
// import { useIsActiveProduct } from '@/hooks/useIsActiveProduct';

// interface Props {
//   product: ProductType;
//   compare: boolean;
// }

// const ProductCard: React.FC<Props> = ({ product, compare }) => {
//   const { addActiveProduct, removeActiveProduct, isActiveProduct } = useIsActiveProduct();

//   const handleClick = () => {
//     if (isActiveProduct(product)) {
//       removeActiveProduct(product);
//     } else {
//       addActiveProduct(product);
//     }
//   };

//   return (
//     <div key={product.id} className={productStyles.col_sm_6 + " " + productStyles.col_md_3}>
//       <div className={productStyles.product  + (isActiveProduct(product) ? ` ${productStyles.compare}` : "")} >
//         <img src={product.image} alt={""} />
//         <div className={productStyles.image_overlay}/>
//         <div className={productStyles.view_details} onClick={handleClick}>
//           {isActiveProduct(product) ? "Remove" : "Pilot"}
//         </div>
//         <div className={productStyles.stats}>
//           <div className={productStyles.stats_container}>
//             <span className={productStyles.product_price}>{product.price}</span>
//             <span className={productStyles.product_name}>{}</span>
//             <p>{product.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };





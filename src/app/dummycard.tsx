// import productStyles from "./card-styles.module.scss";
// import { ProductKey, ProductType } from "@/types/product";
// import { useEffect, useState } from "react";
// import { useActiveItemsContext } from "@/contexts/ActiveItemsContext";

// interface Props {
//   product: { key: number; status: boolean; item: ProductType; }
//   compare: boolean;
// }

// const ProductCard: React.FC<Props> = ({ product, compare }) => {
//   const { items, setItems } = useActiveItemsContext();
//   const [status, setStatus] = useState(compare);

//   const handleToggleStatus = () => {
//     const index = items.findIndex((item) => item.item.id === product.item.id);
//     if (index !== -1) {
//       setItems((prevItems) =>
//         prevItems.map((item, i) =>
//           i === index ? { ...item, status: !item.status } : item
//         )
//       );
//     } else {
//         // setItems((prevItems) => [
//         //     ...prevItems,
//         //     { key: product.id, item: product, status: true }
//         //   ]);
          
//     }
//     console.log(items);
    
//     setStatus(!status);
//   };


//   return (
//     <div
//       key={product.item.id}
//       className={productStyles.col_sm_6 + " " + productStyles.col_md_3}
//     >
//       <div
//         className={
//           productStyles.product +
//           (product.status ? ` ${productStyles.compare}` : "")
//         }
//       >
//         <img src={product.item.image} alt={""} />
//         <div className={productStyles.image_overlay} />
//         <div
//           className={productStyles.view_details}
//           onClick={handleToggleStatus}
//         >
//           {status ? "Remove" : "Pilot"}
//         </div>
//         <div className={productStyles.stats}>
//           <div className={productStyles.stats_container}>
//             <span className={productStyles.product_price}>{product.item.price}</span>
//             <span className={productStyles.product_name}>{}</span>
//             <p>{product.item.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

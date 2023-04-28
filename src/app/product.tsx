
// const Product: React.FC<ProductProps> = () => {
//   const { activeProducts } = useIsActiveProduct();
//   const router = useRouter();
//   const { category } = router.query;
//   const categoryName = typeof category === "string" ? category : "";

//   const { products, isLoading, isError } = useProductQuery("phones");

//   const [currentPage, setCurrentPage] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(4);
//   const [brandFilter, setBrandFilter] = useState("");

//   const handleResize = debounce(() => {
//     const smallScreen = window.innerWidth < 768;
//     setItemsPerPage(smallScreen ? 2 : 4);
//   }, 100);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const filteredData = brandFilter
//     ? products?.filter((prod: ProductType) => prod.brand === brandFilter)
//     : products;
//   const displayedData = filteredData?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

//   const uniqueBrands = Array.from(new Set(products?.map((prod: ProductType) => prod.brand)));

//   return (
//     <>
//       <main>
//         <section>
//           {isError && <h2>An error occurred</h2>}
//           {isLoading ? (
//             <p>Loading...</p>

//           ) : (
//             <><div className={pStyles.filterWrapper}>
//                 <label>
//                   Filter by brand:
//                   <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
//                     <option value="">All</option>
//                     {uniqueBrands.map((brand) => (
//                       <option key={brand} value={brand}>
//                         {brand}
//                       </option>
//                     ))}
//                   </select>
//                 </label>
//               </div><div className={pStyles.baseWrapper}>

//                   {displayedData?.map((prod: ProductType) => (
//                     <div key={prod.id} className={pStyles.categoryCard}>
//                       <ProductCard product={prod} compare={false} />
//                     </div>
//                   ))}
//                 </div></>
//           )}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={Math.ceil(filteredData?.length / itemsPerPage || 0)}
//             onPageChange={(page: number) => setCurrentPage(page)}
//           />
//         </section>
//         <section>
//           <Rankings active={activeProducts} />
//         </section>
//       </main>
//     </>
//   );
// };

// export default Product;


// //libraries
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { QueryObserverResult } from "react-query";
// import { debounce } from "lodash";

// //components
// import { ProductType } from "@/types/product";
// import { useIsActiveProduct } from "@/store/useActiveProductA";
// import ProductCard from "@/components/product-card/ProductCard";
// import Rankings from "@/pages/compare";
// import Pagination from "./components/Pagination";
// import useProductQuery from "@/hooks/useProductQuery";

// //style
// import pStyles from "./product-styles.module.scss";

// interface ProductProps {}

// const Product: React.FC<ProductProps> = () => {
//   const { activeProducts } = useIsActiveProduct();
//   const router = useRouter();
//   const { category } = router.query;
//   const categoryName = typeof category === "string" ? category : "";

//   const { products, isLoading, isError } = useProductQuery("phones");

//   const [currentPage, setCurrentPage] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(4);

//   const handleResize = debounce(() => {
//     const smallScreen = window.innerWidth < 768;
//     setItemsPerPage(smallScreen ? 2 : 4);
//   }, 100);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const displayedData = products?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

//   return (
//     <>
//       <main>
//         <section >
//           {isError && <h2>An error occurred</h2>}
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : (
//             <div className={pStyles.baseWrapper}>
                
//               {displayedData?.map((prod: ProductType) => (
//                 <div key={prod.id} className={pStyles.categoryCard}>
//                 <ProductCard product={prod} compare={false} />
//               </div>
//               ))}
//             </div>
//           )}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={Math.ceil(products?.length / itemsPerPage || 0)}
//             onPageChange={(page: number) => setCurrentPage(page)}
//           />
//         </section>
//         <section>
//           <Rankings active={activeProducts} />
//         </section>
//       </main>
//     </>
//   );
// };

// export default Product;






/*********************************MOST FREQUENT WORKING ONE */



// //libraries
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { debounce } from "lodash";


// // custom hooks and functions
// import { ProductType } from "@/types/product";
// import { filterProductsByBrand } from "@/utils/functions/filter-data";
// import { paginateProducts } from "@/utils/functions/slice-paginate";
// import { useIsActiveProduct } from "@/store/useActiveProductA";
// import {useProductQuery} from "@/hooks/useProductQuery";

// // components
// import ProductCard from "@/components/product-card/ProductCard";
// import Rankings from "@/pages/compare";
// import Pagination from "./components/Pagination";
// import ProductFilter from "./components/ProductFilter";

// // styles
// import pStyles from "./product-styles.module.scss";
// import Loader from "@/components/loader/Loader";

// interface ProductProps {}

// const Product: React.FC<ProductProps> = () => {
//   const { activeProducts } = useIsActiveProduct();
//   const router = useRouter();
//   const categoryName = router.query.category as string;
//   const { products, isLoading, isError } = useProductQuery(categoryName);
//   console.log("products", products, "route", categoryName);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(4);
//   const [brandFilter, setBrandFilter] = useState("");

//   const handleResize = debounce(() => {
//     const smallScreen = window.innerWidth < 768;
//     setItemsPerPage(smallScreen ? 2 : 4);
//   }, 100);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const filteredData = filterProductsByBrand(products, brandFilter);
//   const displayedData = paginateProducts(filteredData, currentPage, itemsPerPage);

//   const uniqueBrands = Array.from(new Set(products?.map((prod: ProductType) => prod.brand)));

//   return (
//     <>
//       <main>
//         <section>
//           {isError && <h2>An error occurred</h2>}
//           {isLoading ? (
//             <Loader />
//           ) : (
//             <>
//             <ProductFilter // render the ProductFilter component
//                 uniqueBrands={uniqueBrands}
//                 brandFilter={brandFilter}
//                 setBrandFilter={setBrandFilter}
//               />
             
//               <div className={pStyles.baseWrapper}>
//                 {displayedData.map((prod: ProductType) => (
//                   <div key={prod.id} className={pStyles.categoryCard}>
//                     <ProductCard product={prod} compare={false} />
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={Math.ceil(filteredData.length / itemsPerPage)}
//             onPageChange={(page: number) => setCurrentPage(page)}
//           />
//         </section>
//         <section>
//           <Rankings active={activeProducts} />
//         </section>
//       </main>
//     </>
//   );
// };

// export default Product;


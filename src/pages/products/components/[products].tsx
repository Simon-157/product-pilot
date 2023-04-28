//libraries
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { debounce } from "lodash";

// custom hooks and functions
import { ProductType } from "@/types/product";
import { filterProductsByBrand } from "@/utils/functions/filter-data";
import { paginateProducts } from "@/utils/functions/slice-paginate";
import { useIsActiveProduct } from "@/store/useActiveProductA";
import {useProductQuery} from "@/hooks/useProductQuery";

// components
import ProductCard from "@/components/product-card/ProductCard";
import Rankings from "@/pages/compare";
import Pagination from "./Pagination";
import ProductFilter from "./ProductFilter";

// styles
import pStyles from "./product-styles.module.scss";

interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  const { activeProducts } = useIsActiveProduct();
  const router = useRouter();
  const { category } = router.query;
  const categoryName = typeof category === "string" ? category : "";

  const { products, isLoading, isError } = useProductQuery(categoryName);
  console.log("products", products, "route", category);
  

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [brandFilter, setBrandFilter] = useState("");

  const handleResize = debounce(() => {
    const smallScreen = window.innerWidth < 768;
    setItemsPerPage(smallScreen ? 2 : 4);
  }, 100);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredData = filterProductsByBrand(products, brandFilter);
  const displayedData = paginateProducts(filteredData, currentPage, itemsPerPage);

  const uniqueBrands = Array.from(new Set(products?.map((prod: ProductType) => prod.brand)));

  return (
    <>
      <main>
        <section>
          {isError && <h2>An error occurred</h2>}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
            <ProductFilter // render the ProductFilter component
                uniqueBrands={uniqueBrands}
                brandFilter={brandFilter}
                setBrandFilter={setBrandFilter}
              />
             
              <div className={pStyles.baseWrapper}>
                {displayedData.map((prod: ProductType) => (
                  <div key={prod.id} className={pStyles.categoryCard}>
                    <ProductCard product={prod} compare={false} />
                  </div>
                ))}
              </div>
            </>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredData.length / itemsPerPage)}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </section>
        <section>
          <Rankings active={activeProducts} />
        </section>
      </main>
    </>
  );
};

export default Product;

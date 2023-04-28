//libraries
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QueryObserverResult, useQuery } from "react-query";
import { debounce } from "lodash";

//components
import { ProductType } from "@/types/product";
import { ItemsProvider, useItemsContext } from "@/contexts/ItemsContext";
import { useIsActiveProduct } from "@/store/useActiveProductA";
// import { products } from "@/utils/data/products";
import { NextIcon, PreviousIcon } from "@/components/custom-icons/Svg";
import ProductCard from "@/components/product-card/ProductCard";
import fetchProducts, { fetchProductsFromDb } from "@/api/fetch-products";
import styles from "./category.module.scss";
import Rankings from "../../compare";


interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  const { activeProducts } = useIsActiveProduct();
  // const { setItems } = useItemsContext();
  // setItems(activeProducts);

  const router = useRouter();
  const { category } = router.query;
  const categoryName = typeof category === "string" ? category : "";
  const { data, isLoading, isError }: QueryObserverResult<ProductType[], unknown> =
    useQuery("products", () => fetchProductsFromDb("phones"));

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  // const itemsPerPage = 4;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data?.slice(startIndex, endIndex);


  useEffect(() => {
    const handleResize = debounce(() => {
      const smallScreen = window.innerWidth < 768;
      setItemsPerPage(smallScreen ? 2 : 4);
    }, 100);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

  return (
    <>
      <main>
        <section className="">
          {isError && <h2>An error occurred</h2>}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
             <div className={styles.baseWrapper}>
              <div className={styles.paginationWrapper}>
                <button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>
                  <span><PreviousIcon /></span> 
                </button>
                {displayedData &&
                  displayedData.map((prod) => (
                    <div key={prod.id} className={styles.categoryCard}>
                      <ProductCard product={prod} compare={false} />
                    </div>
                  ))}
              <button disabled={displayedData!.length > itemsPerPage} onClick={() => setCurrentPage(currentPage + 1)}>
                   <span><NextIcon /></span>
                </button>
              </div>
              </div>
            </>
          )}
        </section>
        <section>
            <Rankings active={activeProducts} />
        </section>
      </main>
    </>
  );
};

export default Product;
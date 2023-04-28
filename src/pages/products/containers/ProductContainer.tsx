// ProductContainer.tsx
import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

// custom hooks and functions
import { ProductType } from "@/types/product-type";
import { filterProductsByBrand } from "@/utils/functions/filter-data";
import { paginateProducts } from "@/utils/functions/slice-paginate";
import { useIsActiveProduct } from "@/store/useActiveProduct";
import { useProductQuery } from "@/hooks/useProductQuery";

// components
import Product from "./Product";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface ProductContainerProps {}

const ProductContainer: React.FC<ProductContainerProps> = () => {
  const { activeProducts } = useIsActiveProduct();
  const categoryName = useSelector((state: RootState) => state.category.categoryName);
  console.log(categoryName);
  
  const { products, isLoading, isError } = useProductQuery(categoryName);
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
        <Product
          products={displayedData}
          uniqueBrands={uniqueBrands}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          isLoading={isLoading}
          isError={isError}
          currentPage={currentPage}
          totalPages={Math.ceil(filteredData?.length / itemsPerPage)}
          onPageChange={(page: number) => setCurrentPage(page)}
          activeProducts={activeProducts}
          />
  );
};

export default ProductContainer;

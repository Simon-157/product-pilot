//libraries
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { debounce } from "lodash";

// custom hooks and functions
import { ProductType } from "@/types/product-type";
import { filterProductsByBrand } from "@/utils/functions/filter-data";
import { paginateProducts } from "@/utils/functions/slice-paginate";
import { useIsActiveProduct } from "@/store/useActiveProductA";
import { useProductQuery } from "@/hooks/useProductQuery";

// components
import ProductCard from "@/components/product-card/ProductCard";
import Rankings from "@/pages/compare";
import Pagination from "../components/Pagination";
import ProductFilter from "../components/ProductFilter";

// styles
import pStyles from "../product-styles.module.scss";
import Loader from "@/components/loader/Loader";
import { ProductProps } from "@/props/ProductProps";


const Product: React.FC<ProductProps> = ({ products, uniqueBrands, brandFilter,setBrandFilter,isLoading,isError,currentPage,totalPages,onPageChange,activeProducts }:ProductProps) => {
    const router = useRouter();
    const categoryName = router.query.category as string;
    console.log("products", products, "route", categoryName);
    const [currentPg, setCurrentPage] = useState(currentPage);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    const handleResize = debounce(() => {
        const smallScreen = window.innerWidth < 768;
        setItemsPerPage(smallScreen ? 2 : 4);
    }, 100);


    const filteredData = filterProductsByBrand(products, brandFilter);
    const displayedData = paginateProducts(filteredData, currentPg, itemsPerPage);


    return (
        <>
            <main>
                <section>
                    {isError && <h2>An error occurred</h2>}
                    {isLoading ? (
                        <Loader />
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
                        currentPage={currentPg}
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

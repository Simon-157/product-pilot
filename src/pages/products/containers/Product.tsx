/* Te Prouct component takes in props of type `ProductProps` which includes an
array of `products`, an array of `uniqueBrands`, a `brandFilter` string, a `setBrandFilter`
function, a boolean `isLoading`, a boolean `isError`, the current page number `currentPage`, the
total number of pages `totalPages`, a function to handle page changes `onPageChange`, and an array
of `activeProducts`. */

//libraries
import React from "react";

// custom hooks and functions
import { ProductType } from "@/types/product-type";
import { ProductProps } from "@/props/ProductProps";

// components
import ProductCard from "@/components/product-card/ProductCard";
import Rankings from "@/pages/compare";
import Pagination from "../components/Pagination";
import ProductFilter from "../components/ProductFilter";
import Loader from "@/components/loader/Loader";


// styles
import pStyles from "../product-styles.module.scss";
import { useSnackbar } from "@/hooks/useSnackBar";

const Product: React.FC<ProductProps> = ({ products, uniqueBrands, brandFilter, setBrandFilter, isLoading, isError, currentPage, totalPages, onPageChange, activeProducts }) => {
    const { showSnackbar, snackbar } = useSnackbar();

    // function to handle error
    const handleLoadError = () => {
        showSnackbar("An error occurred", "error");
        return null;
    }

    return (
        <>
            <main>
                <section>
                    {isError && handleLoadError()} 
                    {snackbar}
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <ProductFilter // render the ProductFilter component
                                uniqueBrands={uniqueBrands}
                                brandFilter={brandFilter}
                                setBrandFilter={setBrandFilter}
                            />
                            {products?.length == 0 && <h2 className={pStyles.placeholder}>No products in this category</h2>}

                            <div className={pStyles.baseWrapper}>
                                {products?.map((prod: ProductType) => (
                                    <div key={prod.id} className={pStyles.categoryCard}>
                                        <ProductCard product={prod} compare={false} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </section>
                <section>
                    <Rankings active={activeProducts} />
                </section>
            </main>
        </>
    );
};

export default Product
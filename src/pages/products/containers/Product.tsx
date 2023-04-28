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



const Product: React.FC<ProductProps> = ({ products, uniqueBrands, brandFilter, setBrandFilter, isLoading, isError, currentPage, totalPages, onPageChange, activeProducts }) => {

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
                                {products.map((prod: ProductType) => (
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

export default Product;

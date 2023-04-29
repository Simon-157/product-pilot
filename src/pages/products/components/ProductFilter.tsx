/**
 * This is component renders a dropdown menu to filter products by brand.
 * @returns  It takes in three props: `uniqueBrands`, `brandFilter`, and `setBrandFilter`. It returns a div that contains a label
 * with a select dropdown menu. The options in the dropdown menu are generated dynamically based on the
 * `uniqueBrands` prop. The selected value of the dropdown menu is controlled by the `brandFilter
 */
import React from "react";
import pStyles from "../product-styles.module.scss";

interface ProductFilterProps {
  uniqueBrands: string[];
  brandFilter: string;
  setBrandFilter: (brand: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ uniqueBrands, brandFilter, setBrandFilter }) => {
  return (
    <div className={pStyles.filterWrapper}>
        {/* <header>Available Products in the Phones Category</header> */}
        <h2>Filter by brand:</h2> 
      <label>
        <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
          <option value="">All</option>
          {uniqueBrands?.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ProductFilter;

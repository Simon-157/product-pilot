/* This Table component that takes in three props: `headers`, `body`,
and `sortProducts`. It renders a table with the headers and body data passed in as props. It also
has state variables for `col`, `key`, `hoveredProductId`, and uses the `useState` hook to manage
them. It uses the `useCallback` hook to define memoized functions for handling click and mouse
events. */
import React, { useCallback, useState } from "react";
import tableStyles from "./table.module.scss"
import { ProductKey, ProductType } from "@/types/product-type";
import { useIsActiveProduct } from "@/store/useActiveProduct";
import { sortTable } from "@/utils/functions/sort-data";
import assert, { equal } from "assert";

interface TableProps {
    headers: string[];
    body: ProductType[];
    sortProducts: (headName: ProductKey) => void;
}

const Table: React.FC<TableProps> = ({ headers, body, sortProducts }) => {
    const [col, setCol] = useState<number>(0);
    const [sortedColumn, setSortedColumn] = useState("");
    const { activeProducts } = useIsActiveProduct()
    const [key, setKey] = useState('name' as ProductKey)
    const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

    const handeClicked = useCallback((k: ProductKey) => {
        setSortedColumn(k);
        // sortTable(activeProducts, key)
    }, activeProducts)

    const handleMouseEnter = useCallback((productId: number) => {
        setHoveredProductId(productId);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredProductId(null);
    }, []);

    return (
        <main className={tableStyles.tableWrapper}>
            <table cellSpacing="0">
                <colgroup>
                    <col span={col} style={{ backgroundColor: "#ffff" }} />
                    <col span={1} style={{ backgroundColor: "var(--green-col)" }} />
                </colgroup>
                <thead>
                    <tr>
                        {headers?.map((headName, index: number) => {
                            return (
                                <th
                                    title="sort"
                                    onClick={() => {
                                        sortProducts(headName.toLocaleLowerCase() as ProductKey);
                                        setCol(index);
                                        setKey(headName as ProductKey)
                                        handeClicked(key)
                                    }}
                                    key={index}
                                >
                                    {headName} {sortedColumn.toLocaleLowerCase() === key ? "🔼" : "" }
                                    
                                </th>
                            );
                        }) ?? <div>loading...</div>}
                    </tr>
                </thead>
                <tbody>

                    {activeProducts?.length > 0 ? sortTable(activeProducts, key)?.map((product: ProductType, index: number) => (
                        <tr key={index}>
                            <td
                                className={tableStyles.imgTd}
                                onMouseEnter={() => handleMouseEnter(product.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img className={tableStyles.proImg} src={product.images} alt={product.name} />
                                {hoveredProductId === product.id && (
                                    <div className={tableStyles.card}>
                                        <div className={tableStyles.cardImageWrapper}>
                                            <img className={tableStyles.cardImage} src={product.images} alt={product.name} />
                                        </div>
                                        <div className={tableStyles.cardDetails}>
                                            <h2>{product.name}</h2>
                                            <p>{product.description}</p>
                                            <p>{product.price}</p>
                                        </div>
                                    </div>
                                )}
                            </td>
                            <td>{product.name}</td>
                            <td>{product.processor}</td>
                            <td>{product.price}</td>
                            <td>{product.display}</td>
                            <td>{product.ram}</td>
                            <td>{product.storage}</td>
                            <td>{product.camera}</td>
                            <td>{product.ratings}</td>

                        </tr>
                    )) ?? <div>loading...</div>

                        : ""}
                </tbody>
            </table>
        </main>
    );
};

export default Table;
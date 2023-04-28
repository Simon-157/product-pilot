import React, { useCallback, useState } from "react";
import tableStyles from "./table.module.scss"
import { ProductKey, ProductType } from "@/types/product";
import { useIsActiveProduct } from "@/store/useActiveProductA";
import { sortTable } from "@/utils/functions/sort-data";

interface TableProps {
  headers: string[];
  body: ProductType[];
  sortProducts: (headName: ProductKey) => void;
}

const Table: React.FC<TableProps> = ({ headers, body, sortProducts }) => {
  const [col, setCol] = useState<number>(0);
  const { activeProducts } = useIsActiveProduct()
  const [key, setKey] = useState('title' as ProductKey)

  const handeClicked = useCallback((body: ProductType[], key: ProductKey) => {
    sortTable(activeProducts, key)
  }, activeProducts)


  return (
    <main className={tableStyles.tableWrapper}>
      <table cellSpacing="0">
        <colgroup>
          <col span={col} style={{ backgroundColor: "#ffff" }} />
          <col span={1} style={{ backgroundColor: "#FAFAFA" }} />
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
                  }}
                  key={index}
                >
                  {headName}
                </th>
              );
            }) ?? <div>loading...</div>}
          </tr>
        </thead>
        <tbody>

          {activeProducts?.length > 0 ? sortTable(activeProducts, key)?.map((product: ProductType, index: number) => (
            <tr key={index}>
              <td className={tableStyles.imgTd}><img className={tableStyles.proImg} src={product.images} alt={product.name} /></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.ratings}</td>
              <td>{product.ram}</td>
              <td>{product.camera}</td>
            </tr>
          )) ?? <div>loading...</div> 
          
          : body?.map((product: ProductType, index: number) => (
            <tr key={index}>
              <td className={tableStyles.imgTd}><img className={tableStyles.proImg} src={product.images} alt={product.name} /></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.ratings}</td>
              <td>{product.ram}</td>
              <td>{product.camera}</td>
            </tr>))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;

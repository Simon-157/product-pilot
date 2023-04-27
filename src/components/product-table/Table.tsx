import React, { useState } from "react";
import tableStyles from "./table.module.scss"
import { ProductKey, ProductType } from "@/types/product";

interface TableProps {
  headers: string[];
  body: ProductType[];
  sortProducts: (headName: ProductKey) => void;
}

const Table: React.FC<TableProps> = ({ headers, body, sortProducts }) => {
  const [col, setCol] = useState<number>(0);
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
                    console.log(headName)
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
          {body?.map((product: ProductType, index: number) => (
            <tr key={index}>
              <td className={tableStyles.imgTd}><img className={tableStyles.proImg} src={product.image} alt={product.title} /></td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.rating.count}</td>
              <td>{product.rating.rate}</td>
              {/* <td>{product.sql}</td> */}
              {/* <td>{product.algorithms + product.scripting + product.sql}</td> */}
              {/* <td>{product.buttons ?? product.buttons}</td> */}
            </tr>
          )) ?? <div>loading...</div>}
        </tbody>
      </table>
    </main>
  );
};

export default Table;

//libraries 
import React, { useState } from "react";

//styles
import rankingsStyles from "./rankings.module.scss";

//components
import { headers } from "@/utils/data/headers";
import { sortTable } from "@/utils/functions/functions";
import Table from "@/components/product-table/Table";
import { ItemsProvider, useItemsContext } from "@/contexts/ItemsContext";
import Head from "next/head";
import { ProductKey, ProductType } from "@/types/product";

interface PropsType {
  active: ProductType[];
}

function Rankings({active}:PropsType) {
  const { items, setItems, sortItems} = useItemsContext();
  // const [activeProducts, setActiveProducts] = useState(items);


  return (
    <>
        <main className={rankingsStyles.rankingsWrapper}>
          <header className={rankingsStyles.banner}>
            <h1>Rankings</h1>
            <div></div>
          </header>
          {items.length > 0 ? (
            <section className={rankingsStyles.tableParent}>
              <Table headers={headers} body={active} sortProducts={sortItems} />

            </section>
          ) : (
            <section className={rankingsStyles.tableParent}>
              <div className={rankingsStyles.placeholder}>
                <h2>
                  No new rankings...Sign up for{" "}
                  <strong className={rankingsStyles.highlight}>
                    upcoming challenges
                  </strong>{" "}
                  🎉
                </h2>
              </div>
              <div className={rankingsStyles.centerBtn}>Add more products</div>
            </section>
          )}
        </main>

    </>
  );
}

export default Rankings;

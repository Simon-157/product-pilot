//libraries 
import React, { useState } from "react";

//styles
import rankingsStyles from "./rankings.module.scss";

//components
import { headers } from "@/utils/data/headers";
// import Table from "@/components/product-table/Table";
import { useItemsContext } from "@/contexts/ItemsContext";
import { ProductType } from "@/types/product";
import Table from "@/components/product-table/TableA";
import Button from "@/components/button/Button";
import { useIsActiveProduct } from "@/store/useActiveProductA";

interface PropsType {
  active: ProductType[];
}

function Rankings({active}:PropsType) {
  const {sortItems} = useItemsContext();

  const resetTable = ()=>{
    useIsActiveProduct.getState().resetActive()
  }

  return (
    <>
        <main className={rankingsStyles.rankingsWrapper}>
          <header className={rankingsStyles.banner}>
            <h1>Piloted Products Comparison</h1>
            {/* <span><Button type="button" children={undefined} onClick={()=>resetTable()}/></span> */}
          </header>
          {active.length > 0 ? (
            <section className={rankingsStyles.tableParent}>
              <Table headers={headers} body={active} sortProducts={sortItems} />

            </section>
          ) : (
            <section className={rankingsStyles.tableParent}>
              <div className={rankingsStyles.placeholder}>
                <h2 style={{textAlign:"center"}}>
                  No new product piloted...Add more products{" "}
                  <strong className={rankingsStyles.highlight}>
                    to compare
                  </strong>{" "}
                  🎉
                </h2>
              </div>
            </section>
          )}
        </main>

    </>
  );
}

export default Rankings;

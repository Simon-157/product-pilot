//libraries 
import React, { useState } from "react";

//styles
import rankingsStyles from "./rankings.module.scss";

//components
import { headers } from "@/utils/data/headers";
import { ProductType } from "@/types/product-type";
import Table from "@/components/product-table/Table";
import Button from "@/components/button/Button";
import { useIsActiveProduct } from "@/store/useActiveProduct";

interface PropsType {
  active: ProductType[];
}

function Rankings({active}:PropsType) {

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
              <Table headers={headers} body={active} sortProducts={() =>{}} />

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

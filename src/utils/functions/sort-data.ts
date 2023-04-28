/**
 * sort an array of objects by a specified key in descending order
 *
 *  @param { Array <{ [key: string]: number | string }> } table - The array of objects to be sorted
 *  @param { string } key - The key to sort according to
 *
 *  @return Array <{ [key: string]: number | string }>
 */


import { ProductType } from "@/types/product-type";

type ProductKey = keyof ProductType;

export function sortTable(table: ProductType[], key: ProductKey,): ProductType[] {
  // ...

  const table_: ProductType[] = [...table];

  if (!(key in table_[0]))
    throw new Error("Table does not contain key: " + key);

  if (key === "name") {
    table_?.sort((a, b) => {
      if (typeof a['name'] === "string" && typeof b['name'] === "string") {
        const current = a?.name.toLowerCase();
        const next = b?.name.toLowerCase();

        if (current < next) return -1;
        else if (current > next) return 1;
        else return 0;
      } else {
        throw new Error("Name property is not a string.");
      }
    });
  }

  else if(key === "processor") {
    table_.sort((a, b) => {
      if (typeof a['processor'] === "string" && typeof b['processor'] === "string") {
        const current = a?.processor.toLowerCase();
        const next = b?.processor.toLowerCase();

        if (current < next) return -1;
        else if (current > next) return 1;
        else return 0;
      } else {
        throw new Error("Processor property is not a string.");
      }
    });
  }

  table_?.sort((a, b) => (b[key] as number) - (a[key] as number));

  return table_;
}

  
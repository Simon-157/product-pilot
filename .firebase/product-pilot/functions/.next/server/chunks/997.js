exports.id = 997;
exports.ids = [997];
exports.modules = {

/***/ 2528:
/***/ ((module) => {

// Exports
module.exports = {
	"tableWrapper": "table_tableWrapper__CQIdM",
	"proImg": "table_proImg__cl293",
	"imgTd": "table_imgTd__Gqbit"
};


/***/ }),

/***/ 4743:
/***/ ((module) => {

// Exports
module.exports = {
	"rankingsWrapper": "rankings_rankingsWrapper__zymZ_",
	"banner": "rankings_banner__59GVz",
	"tableParent": "rankings_tableParent__KOWAj"
};


/***/ }),

/***/ 9554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Kn": () => (/* binding */ ItemsProvider),
  "pm": () => (/* binding */ useItemsContext)
});

// UNUSED EXPORTS: ItemsContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utils/data/products.ts
const products = [
    {
        id: 1,
        title: "Eectorn 1",
        price: 100.0,
        description: "This is a product description",
        category: "Category 1",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        id: 78,
        title: "Flat",
        price: 100.0,
        description: "This is a product description",
        category: "Category 1",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        id: 189,
        title: "Product 1",
        price: 100.0,
        description: "This is a product description",
        category: "Category 1",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        id: 100,
        title: "Product 1",
        price: 100.0,
        description: "This is a product description",
        category: "Category 1",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        id: 95,
        title: "Advanced 1",
        price: 100.0,
        description: "This is a product description",
        category: "Category 1",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        id: 2,
        title: "Product 2",
        price: 50.0,
        description: "This is another product description",
        category: "Category 2",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 3.5,
            count: 20
        }
    },
    {
        id: 3,
        title: "Product 3",
        price: 300.0,
        description: "This is yet another product description",
        category: "Category 3",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 4.0,
            count: 5
        }
    },
    {
        id: 4,
        title: "Product 4",
        price: 400.0,
        description: "This is a product description for product 4",
        category: "Category 1",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 2.5,
            count: 15
        }
    },
    {
        id: 5,
        title: "Product 5",
        price: 800.0,
        description: "This is a product description for product 5",
        category: "Category 2",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 4.8,
            count: 25
        }
    },
    {
        id: 6,
        title: "Product 6",
        price: 600.0,
        description: "This is a product description for product 6",
        category: "Category 3",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 3.2,
            count: 8
        }
    },
    {
        id: 7,
        title: "Product 7",
        price: 700.0,
        description: "This is a product description for product 7",
        category: "Category 1",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 4.6,
            count: 18
        }
    },
    {
        id: 8,
        title: "Product 8",
        price: 800.0,
        description: "This is a product description for product 8",
        category: "Category 2",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 3.9,
            count: 12
        }
    }
];

;// CONCATENATED MODULE: ./src/utils/functions/functions.ts
/**
 * sort an array of objects by a specified key in descending order
 *
 *  @param { Array <{ [key: string]: number | string }> } table - The array of objects to be sorted
 *  @param { string } key - The key to sort according to
 *
 *  @return Array <{ [key: string]: number | string }>
 */ // import { ProductType } from "@/types/product";
// export function sortTable(table: ProductType[], key: string): ProductType[] {
//   // ...
//     const table_: Array<{ [key: string]: number | any }> = [...table];
//     if (!(key in table_[0]))
//       throw new Error("Table does not contain key: " + key);
//     if (key === "name") {
//       table_.sort((a, b) => {
//         if (typeof a.name === "string" && typeof b.name === "string") {
//           const current = a.name.toLowerCase();
//           const next = b.name.toLowerCase();
//           if (current < next) return -1;
//           else if (current > next) return 1;
//           else return 0;
//         } else {
//           throw new Error("Name property is not a string.");
//         }
//       });
//     }
//     table_.sort((a, b) => (b[key] as number) - (a[key] as number));
//     return table_;
//   }
function sortTable(table, key) {
    // ...
    const table_ = [
        ...table
    ];
    if (!(key in table_[0])) throw new Error("Table does not contain key: " + key);
    if (key === "title") {
        table_.sort((a, b)=>{
            if (typeof a["title"] === "string" && typeof b["title"] === "string") {
                const current = a.title.toLowerCase();
                const next = b.title.toLowerCase();
                if (current < next) return -1;
                else if (current > next) return 1;
                else return 0;
            } else {
                throw new Error("Name property is not a string.");
            }
        });
    }
    table_.sort((a, b)=>b[key] - a[key]);
    return table_;
}

;// CONCATENATED MODULE: ./src/contexts/ItemsContext.tsx




const ItemsContext = /*#__PURE__*/ (0,external_react_.createContext)({
    items: products,
    setItems: ()=>{},
    sortItems: ()=>{}
});
const useItemsContext = ()=>(0,external_react_.useContext)(ItemsContext);
const ItemsProvider = ({ children  })=>{
    const [items, setItems] = (0,external_react_.useState)(products);
    const sortItems = (key)=>{
        setItems((prevProducts)=>sortTable(prevProducts, key));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ItemsContext.Provider, {
        value: {
            items,
            setItems,
            sortItems
        },
        children: children
    });
};


/***/ }),

/***/ 5997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ compare)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/pages/compare/rankings.module.scss
var rankings_module = __webpack_require__(4743);
var rankings_module_default = /*#__PURE__*/__webpack_require__.n(rankings_module);
;// CONCATENATED MODULE: ./src/utils/data/headers.ts
const headers = [
    "image",
    "title",
    "price",
    "description",
    "rating"
];

// EXTERNAL MODULE: ./src/components/product-table/table.module.scss
var table_module = __webpack_require__(2528);
var table_module_default = /*#__PURE__*/__webpack_require__.n(table_module);
;// CONCATENATED MODULE: ./src/components/product-table/Table.tsx



const Table = ({ headers , body , sortProducts  })=>{
    const [col, setCol] = (0,external_react_.useState)(0);
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: (table_module_default()).tableWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            cellSpacing: "0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("colgroup", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("col", {
                            span: col,
                            style: {
                                backgroundColor: "#ffff"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("col", {
                            span: 1,
                            style: {
                                backgroundColor: "#FAFAFA"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                        children: headers?.map((headName, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                title: "sort",
                                onClick: ()=>{
                                    sortProducts(headName.toLocaleLowerCase());
                                    setCol(index);
                                    console.log(headName);
                                },
                                children: headName
                            }, index);
                        }) ?? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "loading..."
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                    children: body?.map((product, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: (table_module_default()).imgTd,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: (table_module_default()).proImg,
                                        src: product.image,
                                        alt: product.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: product.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: product.price
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: product.rating.count
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: product.rating.rate
                                })
                            ]
                        }, index)) ?? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "loading..."
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const product_table_Table = (Table);

// EXTERNAL MODULE: ./src/contexts/ItemsContext.tsx + 2 modules
var ItemsContext = __webpack_require__(9554);
;// CONCATENATED MODULE: ./src/pages/compare/index.tsx
//libraries 


//styles

//components



function Rankings({ active  }) {
    const { items , setItems , sortItems  } = (0,ItemsContext/* useItemsContext */.pm)();
    // const [activeProducts, setActiveProducts] = useState(items);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: (rankings_module_default()).rankingsWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: (rankings_module_default()).banner,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Rankings"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                items.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: (rankings_module_default()).tableParent,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(product_table_Table, {
                        headers: headers,
                        body: active,
                        sortProducts: sortItems
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: (rankings_module_default()).tableParent,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (rankings_module_default()).placeholder,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                children: [
                                    "No new rankings...Sign up for",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        className: (rankings_module_default()).highlight,
                                        children: "upcoming challenges"
                                    }),
                                    " ",
                                    "\uD83C\uDF89"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (rankings_module_default()).centerBtn,
                            children: "Add more products"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const compare = (Rankings);


/***/ })

};
;
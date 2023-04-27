exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 7274:
/***/ ((module) => {

// Exports
module.exports = {
	"Wrapper": "home_Wrapper__CC41m",
	"joinBtn": "home_joinBtn__I_JEo",
	"button-animate": "home_button-animate__fHIHZ",
	"codeShot": "home_codeShot__trkB_",
	"suspend": "home_suspend__77Ty7",
	"arbitrary": "home_arbitrary__Vpxqy"
};


/***/ }),

/***/ 8854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home_Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/pages/home/home.module.scss
var home_module = __webpack_require__(7274);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
;// CONCATENATED MODULE: ./src/assets/breeze-shot.png
/* harmony default export */ const breeze_shot = ({"src":"/_next/static/media/breeze-shot.f6a1fead.png","height":2205,"width":3609,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfElEQVR42gVAyQnCQBR9Gf8EQZAguJz1YhvWYAOWZCO24Vnw5M3YgIrOkpm/hOZ4/Uq2V/X94HLSkLEP3CUmKJK507tfpn/hiTHfZHPROTWKT8Vhi93MZaUpVbqH86MjMzSicbEqa1/YtW2V5w+DkomZQmLU7E3IUMECwwhzCEn9QeHLXgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/pages/home/Home.tsx
/* Importing the useContext hook from react. */ 


/* Importing the components and the styles from the folder. */ 

const Home = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (home_module_default()).Wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: " Lets Solve the Challenge Together "
                            }),
                            "enjoy the full assets of a ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "collaborative environment "
                            }),
                            "with visual ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "interractions"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (home_module_default()).joinBtn
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (home_module_default()).codeShot,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: breeze_shot,
                            alt: "code-shot"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (home_module_default()).arbitrary
            })
        ]
    });
};
/* harmony default export */ const home_Home = (Home);


/***/ })

};
;
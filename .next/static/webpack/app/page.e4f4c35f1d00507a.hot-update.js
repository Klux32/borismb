"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/pages/gallery/gallery2.js":
/*!***************************************!*\
  !*** ./app/pages/gallery/gallery2.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ \"(app-pages-browser)/./node_modules/photoswipe/dist/photoswipe.css\");\n/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-photoswipe-gallery */ \"(app-pages-browser)/./node_modules/react-photoswipe-gallery/dist/index.js\");\n/* harmony import */ var _compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compoenents/containers/containers */ \"(app-pages-browser)/./app/compoenents/containers/containers.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _imagesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imagesData */ \"(app-pages-browser)/./app/pages/gallery/imagesData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n// import img7 from \"../../../public/img-7.jpg\";\n// import img8 from \"../../../public/img-20.jpg\";\nconst Gallery2 = ()=>{\n    const uiElements = [\n        // add custom UI element\n        {\n            name: \"custom-button\",\n            ariaLabel: \"Custom button\",\n            order: 9,\n            isButton: true,\n            html: {\n                isCustomSVG: true,\n                inner: '<path d=\"<ICON_PATH>\" id=\"pswp__icn-cstm-btn\"/>',\n                outlineID: \"pswp__icn-cstm-btn\"\n            },\n            appendTo: \"bar\",\n            onInit: (el, pswpInstance)=>{\n            // do something on UI element's init event\n            },\n            onClick: (e, el, pswpInstance)=>{\n            // do something on UI element's click event\n            }\n        }\n    ];\n    console.log(_imagesData__WEBPACK_IMPORTED_MODULE_5__.imagesData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"galleryContent\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    children: \"Projekti\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Gallery, {\n                    uiElements: uiElements,\n                    children: _imagesData__WEBPACK_IMPORTED_MODULE_5__.imagesData.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Item, {\n                            original: item.src.src,\n                            thumbnail: item.src.src,\n                            width: item.width,\n                            height: item.height,\n                            children: (param)=>{\n                                let { ref, open } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    ref: ref,\n                                    onClick: open,\n                                    src: item.src.src\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 19\n                                }, undefined);\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                            lineNumber: 50,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                    lineNumber: 47,\n                    columnNumber: 3\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Gallery2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery2);\nvar _c;\n$RefreshReg$(_c, \"Gallery2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3VDO0FBRWlCO0FBRXFCO0FBRTlDO0FBQ1c7QUFFMUMsZ0RBQWdEO0FBQ2hELGlEQUFpRDtBQUVqRCxNQUFNTSxXQUFXO0lBRWIsTUFBTUMsYUFBYTtRQUNmLHdCQUF3QjtRQUN4QjtZQUNFQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLE1BQU07Z0JBQ0pDLGFBQWE7Z0JBQ2JDLE9BQ0U7Z0JBQ0ZDLFdBQVc7WUFDYjtZQUNBQyxVQUFVO1lBQ1ZDLFFBQVEsQ0FBQ0MsSUFBSUM7WUFDWCwwQ0FBMEM7WUFDNUM7WUFDQUMsU0FBUyxDQUFDQyxHQUFHSCxJQUFJQztZQUNmLDJDQUEyQztZQUM3QztRQUNGO0tBSUQ7SUFFSEcsUUFBUUMsR0FBRyxDQUFDbEIsbURBQVVBO0lBQ3RCLHFCQUNJLDhEQUFDbUI7UUFBSUMsSUFBRztrQkFDViw0RUFBQ3ZCLHlFQUFTQTs7OEJBQ1YsOERBQUNDLHVFQUFPQTs4QkFBQzs7Ozs7OzhCQUNiLDhEQUFDSCw2REFBT0E7b0JBQUNPLFlBQVlBOzhCQUVURixtREFBVUEsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQyxvQkFDakIsOERBQUMzQiwwREFBSUE7NEJBQ0w0QixVQUFVRixLQUFLRyxHQUFHLENBQUNBLEdBQUc7NEJBQ3RCQyxXQUFXSixLQUFLRyxHQUFHLENBQUNBLEdBQUc7NEJBQ3ZCRSxPQUFPTCxLQUFLSyxLQUFLOzRCQUNqQkMsUUFBUU4sS0FBS00sTUFBTTtzQ0FFcEI7b0NBQUMsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7cURBQ2IsOERBQUNDO29DQUFJRixLQUFLQTtvQ0FBS2QsU0FBU2U7b0NBQU1MLEtBQUtILEtBQUtHLEdBQUcsQ0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoRTtLQW5ES3hCO0FBcUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkyLmpzPzU4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0ICdwaG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5jc3MnXHJcblxyXG5pbXBvcnQgeyBHYWxsZXJ5LCBJdGVtIH0gZnJvbSAncmVhY3QtcGhvdG9zd2lwZS1nYWxsZXJ5J1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vY29tcG9lbmVudHMvY29udGFpbmVycy9jb250YWluZXJzJztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgaW1hZ2VzRGF0YSB9IGZyb20gJy4vaW1hZ2VzRGF0YSc7XHJcblxyXG4vLyBpbXBvcnQgaW1nNyBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy03LmpwZ1wiO1xyXG4vLyBpbXBvcnQgaW1nOCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy0yMC5qcGdcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnkyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVpRWxlbWVudHMgPSBbXHJcbiAgICAgICAgLy8gYWRkIGN1c3RvbSBVSSBlbGVtZW50XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ2N1c3RvbS1idXR0b24nLFxyXG4gICAgICAgICAgYXJpYUxhYmVsOiAnQ3VzdG9tIGJ1dHRvbicsXHJcbiAgICAgICAgICBvcmRlcjogOSxcclxuICAgICAgICAgIGlzQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgaHRtbDoge1xyXG4gICAgICAgICAgICBpc0N1c3RvbVNWRzogdHJ1ZSxcclxuICAgICAgICAgICAgaW5uZXI6XHJcbiAgICAgICAgICAgICAgJzxwYXRoIGQ9XCI8SUNPTl9QQVRIPlwiIGlkPVwicHN3cF9faWNuLWNzdG0tYnRuXCIvPicsXHJcbiAgICAgICAgICAgIG91dGxpbmVJRDogJ3Bzd3BfX2ljbi1jc3RtLWJ0bicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXBwZW5kVG86ICdiYXInLFxyXG4gICAgICAgICAgb25Jbml0OiAoZWwsIHBzd3BJbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkbyBzb21ldGhpbmcgb24gVUkgZWxlbWVudCdzIGluaXQgZXZlbnRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbkNsaWNrOiAoZSwgZWwsIHBzd3BJbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkbyBzb21ldGhpbmcgb24gVUkgZWxlbWVudCdzIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIGFkZCBhbm90aGVyIGN1c3RvbSBVSSBlbGVtZW50XHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICAgIF1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZXNEYXRhKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9J2dhbGxlcnlDb250ZW50Jz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWRpbmc+UHJvamVrdGk8L0hlYWRpbmc+XHJcbiAgPEdhbGxlcnkgdWlFbGVtZW50cz17dWlFbGVtZW50c30+XHJcbiAgICB7XHJcbiAgICAgICAgICAgICAgaW1hZ2VzRGF0YS5tYXAoKGl0ZW0sa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAgICBvcmlnaW5hbD17aXRlbS5zcmMuc3JjfVxyXG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWw9e2l0ZW0uc3JjLnNyY31cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2l0ZW0ud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17aXRlbS5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgcmVmLCBvcGVuIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGltZyByZWY9e3JlZn0gb25DbGljaz17b3Blbn0gc3JjPXtpdGVtLnNyYy5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gIDwvR2FsbGVyeT5cclxuICA8L0NvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnkyOyJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiSXRlbSIsIkNvbnRhaW5lciIsIkhlYWRpbmciLCJJbWFnZSIsImltYWdlc0RhdGEiLCJHYWxsZXJ5MiIsInVpRWxlbWVudHMiLCJuYW1lIiwiYXJpYUxhYmVsIiwib3JkZXIiLCJpc0J1dHRvbiIsImh0bWwiLCJpc0N1c3RvbVNWRyIsImlubmVyIiwib3V0bGluZUlEIiwiYXBwZW5kVG8iLCJvbkluaXQiLCJlbCIsInBzd3BJbnN0YW5jZSIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwibWFwIiwiaXRlbSIsImtleSIsIm9yaWdpbmFsIiwic3JjIiwidGh1bWJuYWlsIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiLCJvcGVuIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/gallery/gallery2.js\n"));

/***/ })

});
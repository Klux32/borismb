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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ \"(app-pages-browser)/./node_modules/photoswipe/dist/photoswipe.css\");\n/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-photoswipe-gallery */ \"(app-pages-browser)/./node_modules/react-photoswipe-gallery/dist/index.js\");\n/* harmony import */ var _compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compoenents/containers/containers */ \"(app-pages-browser)/./app/compoenents/containers/containers.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _imagesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imagesData */ \"(app-pages-browser)/./app/pages/gallery/imagesData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n// import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'\n// import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'\n\n\n\n\n// import img7 from \"../../../public/img-7.jpg\";\n// import img8 from \"../../../public/img-20.jpg\";\nconst Gallery2 = ()=>{\n    const options = {\n        arrowPrev: true,\n        arrowNext: true,\n        zoom: false,\n        close: true,\n        counter: false,\n        // bgOpacity: 1,\n        padding: {\n            top: 20,\n            bottom: 40,\n            left: 100,\n            right: 100\n        }\n    };\n    console.log(_imagesData__WEBPACK_IMPORTED_MODULE_5__.imagesData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"galleryContent\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    children: \"Projekti\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Gallery, {\n                    options: options,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: _imagesData__WEBPACK_IMPORTED_MODULE_5__.imagesData.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Item, {\n                                original: item.src.src,\n                                thumbnail: item.src.src,\n                                width: item.width,\n                                height: item.height,\n                                children: (param)=>{\n                                    let { ref, open } = param;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-25 d-flex flex-row\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            ref: ref,\n                                            onClick: open,\n                                            src: item.src.src\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 21\n                                    }, undefined);\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                                lineNumber: 37,\n                                columnNumber: 19\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                    lineNumber: 33,\n                    columnNumber: 3\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Gallery2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery2);\nvar _c;\n$RefreshReg$(_c, \"Gallery2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3VDO0FBQ3ZDLG1GQUFtRjtBQUNuRiwyRUFBMkU7QUFFbkI7QUFFcUI7QUFFOUM7QUFDVztBQUUxQyxnREFBZ0Q7QUFDaEQsaURBQWlEO0FBRWpELE1BQU1NLFdBQVc7SUFFWCxNQUFNQyxVQUFVO1FBQ2RDLFdBQVc7UUFDWEMsV0FBVztRQUNYQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztRQUNULGdCQUFnQjtRQUNoQkMsU0FBUztZQUFFQyxLQUFLO1lBQUlDLFFBQVE7WUFBSUMsTUFBTTtZQUFLQyxPQUFPO1FBQUk7SUFDeEQ7SUFFRkMsUUFBUUMsR0FBRyxDQUFDZCxtREFBVUE7SUFDdEIscUJBQ0ksOERBQUNlO1FBQUlDLElBQUc7a0JBQ1YsNEVBQUNuQix5RUFBU0E7OzhCQUNWLDhEQUFDQyx1RUFBT0E7OEJBQUM7Ozs7Ozs4QkFDYiw4REFBQ0gsNkRBQU9BO29CQUFDTyxTQUFTQTs4QkFDaEIsNEVBQUNhO3dCQUFJRSxXQUFVO2tDQUVMakIsbURBQVVBLENBQUNrQixHQUFHLENBQUMsQ0FBQ0MsTUFBS0Msb0JBQ2pCLDhEQUFDeEIsMERBQUlBO2dDQUNMeUIsVUFBVUYsS0FBS0csR0FBRyxDQUFDQSxHQUFHO2dDQUN0QkMsV0FBV0osS0FBS0csR0FBRyxDQUFDQSxHQUFHO2dDQUN2QkUsT0FBT0wsS0FBS0ssS0FBSztnQ0FDakJDLFFBQVFOLEtBQUtNLE1BQU07MENBRXBCO3dDQUFDLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO3lEQUNYLDhEQUFDWjt3Q0FBSUUsV0FBVTtrREFDWCw0RUFBQ1c7NENBQUlGLEtBQUtBOzRDQUFLRyxTQUFTRjs0Q0FBTUwsS0FBS0gsS0FBS0csR0FBRyxDQUFDQSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV0RTtLQXZDS3JCO0FBeUNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkyLmpzPzU4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0ICdwaG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5jc3MnXHJcbi8vIGltcG9ydCAncGhvdG9zd2lwZS1keW5hbWljLWNhcHRpb24tcGx1Z2luL3Bob3Rvc3dpcGUtZHluYW1pYy1jYXB0aW9uLXBsdWdpbi5jc3MnXHJcbi8vIGltcG9ydCBQaG90b1N3aXBlRHluYW1pY0NhcHRpb24gZnJvbSAncGhvdG9zd2lwZS1keW5hbWljLWNhcHRpb24tcGx1Z2luJ1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeSwgSXRlbSB9IGZyb20gJ3JlYWN0LXBob3Rvc3dpcGUtZ2FsbGVyeSdcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvZW5lbnRzL2NvbnRhaW5lcnMvY29udGFpbmVycyc7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IGltYWdlc0RhdGEgfSBmcm9tICcuL2ltYWdlc0RhdGEnO1xyXG5cclxuLy8gaW1wb3J0IGltZzcgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWctNy5qcGdcIjtcclxuLy8gaW1wb3J0IGltZzggZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWctMjAuanBnXCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5MiA9ICgpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgYXJyb3dQcmV2OiB0cnVlLFxyXG4gICAgICAgIGFycm93TmV4dDogdHJ1ZSxcclxuICAgICAgICB6b29tOiBmYWxzZSxcclxuICAgICAgICBjbG9zZTogdHJ1ZSxcclxuICAgICAgICBjb3VudGVyOiBmYWxzZSxcclxuICAgICAgICAvLyBiZ09wYWNpdHk6IDEsXHJcbiAgICAgICAgcGFkZGluZzogeyB0b3A6IDIwLCBib3R0b206IDQwLCBsZWZ0OiAxMDAsIHJpZ2h0OiAxMDAgfSxcclxuICAgICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGltYWdlc0RhdGEpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD0nZ2FsbGVyeUNvbnRlbnQnPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZGluZz5Qcm9qZWt0aTwvSGVhZGluZz5cclxuICA8R2FsbGVyeSBvcHRpb25zPXtvcHRpb25zfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAge1xyXG4gICAgICAgICAgICAgIGltYWdlc0RhdGEubWFwKChpdGVtLGtleSk9PihcclxuICAgICAgICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICAgICAgb3JpZ2luYWw9e2l0ZW0uc3JjLnNyY31cclxuICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsPXtpdGVtLnNyYy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtpdGVtLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e2l0ZW0uaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IHJlZiwgb3BlbiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMjUgZC1mbGV4IGZsZXgtcm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyByZWY9e3JlZn0gb25DbGljaz17b3Blbn0gc3JjPXtpdGVtLnNyYy5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgPC9HYWxsZXJ5PlxyXG4gIDwvQ29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTI7Il0sIm5hbWVzIjpbIkdhbGxlcnkiLCJJdGVtIiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIkltYWdlIiwiaW1hZ2VzRGF0YSIsIkdhbGxlcnkyIiwib3B0aW9ucyIsImFycm93UHJldiIsImFycm93TmV4dCIsInpvb20iLCJjbG9zZSIsImNvdW50ZXIiLCJwYWRkaW5nIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImtleSIsIm9yaWdpbmFsIiwic3JjIiwidGh1bWJuYWlsIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiLCJvcGVuIiwiaW1nIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/gallery/gallery2.js\n"));

/***/ })

});
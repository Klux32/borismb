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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ \"(app-pages-browser)/./node_modules/photoswipe/dist/photoswipe.css\");\n/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-photoswipe-gallery */ \"(app-pages-browser)/./node_modules/react-photoswipe-gallery/dist/index.js\");\n/* harmony import */ var _compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compoenents/containers/containers */ \"(app-pages-browser)/./app/compoenents/containers/containers.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _imagesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imagesData */ \"(app-pages-browser)/./app/pages/gallery/imagesData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n// import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'\n// import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'\n\n\n\n\n// import img7 from \"../../../public/img-7.jpg\";\n// import img8 from \"../../../public/img-20.jpg\";\nconst Gallery2 = ()=>{\n    const uiElements = [\n        // add custom UI element\n        {\n            name: \"custom-button\",\n            ariaLabel: \"Custom button\",\n            order: 9,\n            isButton: true,\n            html: {\n                isCustomSVG: true,\n                inner: '<path d=\"<ICON_PATH>\" id=\"pswp__icn-cstm-btn\"/>',\n                outlineID: \"pswp__icn-cstm-btn\"\n            },\n            appendTo: \"bar\",\n            onInit: (el, pswpInstance)=>{\n            // do something on UI element's init event\n            },\n            onClick: (e, el, pswpInstance)=>{\n            // do something on UI element's click event\n            }\n        }\n    ];\n    const options = {\n        arrowPrev: true,\n        arrowNext: true,\n        zoom: false,\n        close: true,\n        counter: false,\n        // bgOpacity: 1,\n        padding: {\n            top: 20,\n            bottom: 40,\n            left: 100,\n            right: 100\n        }\n    };\n    console.log(_imagesData__WEBPACK_IMPORTED_MODULE_5__.imagesData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"galleryContent\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    children: \"Projekti\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Gallery, {\n                    withCaption: true,\n                    uiElements: uiElements,\n                    options: options,\n                    children: _imagesData__WEBPACK_IMPORTED_MODULE_5__.imagesData.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Item, {\n                            original: item.src.src,\n                            thumbnail: item.src.src,\n                            width: item.width,\n                            height: item.height,\n                            children: (param)=>{\n                                let { ref, open } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    ref: ref,\n                                    onClick: open,\n                                    src: item.src.src\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 19\n                                }, undefined);\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                            lineNumber: 64,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                    lineNumber: 59,\n                    columnNumber: 3\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Gallery2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery2);\nvar _c;\n$RefreshReg$(_c, \"Gallery2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3VDO0FBQ3ZDLG1GQUFtRjtBQUNuRiwyRUFBMkU7QUFFbkI7QUFFcUI7QUFFOUM7QUFDVztBQUUxQyxnREFBZ0Q7QUFDaEQsaURBQWlEO0FBRWpELE1BQU1NLFdBQVc7SUFFYixNQUFNQyxhQUFhO1FBQ2Ysd0JBQXdCO1FBQ3hCO1lBQ0VDLE1BQU07WUFDTkMsV0FBVztZQUNYQyxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsTUFBTTtnQkFDSkMsYUFBYTtnQkFDYkMsT0FDRTtnQkFDRkMsV0FBVztZQUNiO1lBQ0FDLFVBQVU7WUFDVkMsUUFBUSxDQUFDQyxJQUFJQztZQUNYLDBDQUEwQztZQUM1QztZQUNBQyxTQUFTLENBQUNDLEdBQUdILElBQUlDO1lBQ2YsMkNBQTJDO1lBQzdDO1FBQ0Y7S0FJRDtJQUVELE1BQU1HLFVBQVU7UUFDZEMsV0FBVztRQUNYQyxXQUFXO1FBQ1hDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCQyxTQUFTO1lBQUVDLEtBQUs7WUFBSUMsUUFBUTtZQUFJQyxNQUFNO1lBQUtDLE9BQU87UUFBSTtJQUN4RDtJQUVGQyxRQUFRQyxHQUFHLENBQUM3QixtREFBVUE7SUFDdEIscUJBQ0ksOERBQUM4QjtRQUFJQyxJQUFHO2tCQUNWLDRFQUFDbEMseUVBQVNBOzs4QkFDViw4REFBQ0MsdUVBQU9BOzhCQUFDOzs7Ozs7OEJBQ2IsOERBQUNILDZEQUFPQTtvQkFFUnFDLFdBQVc7b0JBQUM5QixZQUFZQTtvQkFBWWUsU0FBU0E7OEJBRWpDakIsbURBQVVBLENBQUNpQyxHQUFHLENBQUMsQ0FBQ0MsTUFBS0Msb0JBQ2pCLDhEQUFDdkMsMERBQUlBOzRCQUNMd0MsVUFBVUYsS0FBS0csR0FBRyxDQUFDQSxHQUFHOzRCQUN0QkMsV0FBV0osS0FBS0csR0FBRyxDQUFDQSxHQUFHOzRCQUN2QkUsT0FBT0wsS0FBS0ssS0FBSzs0QkFDakJDLFFBQVFOLEtBQUtNLE1BQU07c0NBRXBCO29DQUFDLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO3FEQUNiLDhEQUFDQztvQ0FBSUYsS0FBS0E7b0NBQUsxQixTQUFTMkI7b0NBQU1MLEtBQUtILEtBQUtHLEdBQUcsQ0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoRTtLQS9ES3BDO0FBaUVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkyLmpzPzU4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0ICdwaG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5jc3MnXHJcbi8vIGltcG9ydCAncGhvdG9zd2lwZS1keW5hbWljLWNhcHRpb24tcGx1Z2luL3Bob3Rvc3dpcGUtZHluYW1pYy1jYXB0aW9uLXBsdWdpbi5jc3MnXHJcbi8vIGltcG9ydCBQaG90b1N3aXBlRHluYW1pY0NhcHRpb24gZnJvbSAncGhvdG9zd2lwZS1keW5hbWljLWNhcHRpb24tcGx1Z2luJ1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeSwgSXRlbSB9IGZyb20gJ3JlYWN0LXBob3Rvc3dpcGUtZ2FsbGVyeSdcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvZW5lbnRzL2NvbnRhaW5lcnMvY29udGFpbmVycyc7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IGltYWdlc0RhdGEgfSBmcm9tICcuL2ltYWdlc0RhdGEnO1xyXG5cclxuLy8gaW1wb3J0IGltZzcgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWctNy5qcGdcIjtcclxuLy8gaW1wb3J0IGltZzggZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWctMjAuanBnXCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5MiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB1aUVsZW1lbnRzID0gW1xyXG4gICAgICAgIC8vIGFkZCBjdXN0b20gVUkgZWxlbWVudFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdjdXN0b20tYnV0dG9uJyxcclxuICAgICAgICAgIGFyaWFMYWJlbDogJ0N1c3RvbSBidXR0b24nLFxyXG4gICAgICAgICAgb3JkZXI6IDksXHJcbiAgICAgICAgICBpc0J1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGh0bWw6IHtcclxuICAgICAgICAgICAgaXNDdXN0b21TVkc6IHRydWUsXHJcbiAgICAgICAgICAgIGlubmVyOlxyXG4gICAgICAgICAgICAgICc8cGF0aCBkPVwiPElDT05fUEFUSD5cIiBpZD1cInBzd3BfX2ljbi1jc3RtLWJ0blwiLz4nLFxyXG4gICAgICAgICAgICBvdXRsaW5lSUQ6ICdwc3dwX19pY24tY3N0bS1idG4nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFwcGVuZFRvOiAnYmFyJyxcclxuICAgICAgICAgIG9uSW5pdDogKGVsLCBwc3dwSW5zdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIG9uIFVJIGVsZW1lbnQncyBpbml0IGV2ZW50XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb25DbGljazogKGUsIGVsLCBwc3dwSW5zdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIG9uIFVJIGVsZW1lbnQncyBjbGljayBldmVudFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgICAgICAvLyBhZGQgYW5vdGhlciBjdXN0b20gVUkgZWxlbWVudFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgICBdXHJcblxyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGFycm93UHJldjogdHJ1ZSxcclxuICAgICAgICBhcnJvd05leHQ6IHRydWUsXHJcbiAgICAgICAgem9vbTogZmFsc2UsXHJcbiAgICAgICAgY2xvc2U6IHRydWUsXHJcbiAgICAgICAgY291bnRlcjogZmFsc2UsXHJcbiAgICAgICAgLy8gYmdPcGFjaXR5OiAxLFxyXG4gICAgICAgIHBhZGRpbmc6IHsgdG9wOiAyMCwgYm90dG9tOiA0MCwgbGVmdDogMTAwLCByaWdodDogMTAwIH0sXHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZXNEYXRhKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9J2dhbGxlcnlDb250ZW50Jz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWRpbmc+UHJvamVrdGk8L0hlYWRpbmc+XHJcbiAgPEdhbGxlcnlcclxuICBcclxuICB3aXRoQ2FwdGlvbiB1aUVsZW1lbnRzPXt1aUVsZW1lbnRzfSBvcHRpb25zPXtvcHRpb25zfT5cclxuICAgIHtcclxuICAgICAgICAgICAgICBpbWFnZXNEYXRhLm1hcCgoaXRlbSxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAgICAgIG9yaWdpbmFsPXtpdGVtLnNyYy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbD17aXRlbS5zcmMuc3JjfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17aXRlbS53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpdGVtLmhlaWdodH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyByZWYsIG9wZW4gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHJlZj17cmVmfSBvbkNsaWNrPXtvcGVufSBzcmM9e2l0ZW0uc3JjLnNyY30gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgPC9HYWxsZXJ5PlxyXG4gIDwvQ29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTI7Il0sIm5hbWVzIjpbIkdhbGxlcnkiLCJJdGVtIiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIkltYWdlIiwiaW1hZ2VzRGF0YSIsIkdhbGxlcnkyIiwidWlFbGVtZW50cyIsIm5hbWUiLCJhcmlhTGFiZWwiLCJvcmRlciIsImlzQnV0dG9uIiwiaHRtbCIsImlzQ3VzdG9tU1ZHIiwiaW5uZXIiLCJvdXRsaW5lSUQiLCJhcHBlbmRUbyIsIm9uSW5pdCIsImVsIiwicHN3cEluc3RhbmNlIiwib25DbGljayIsImUiLCJvcHRpb25zIiwiYXJyb3dQcmV2IiwiYXJyb3dOZXh0Iiwiem9vbSIsImNsb3NlIiwiY291bnRlciIsInBhZGRpbmciLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJ3aXRoQ2FwdGlvbiIsIm1hcCIsIml0ZW0iLCJrZXkiLCJvcmlnaW5hbCIsInNyYyIsInRodW1ibmFpbCIsIndpZHRoIiwiaGVpZ2h0IiwicmVmIiwib3BlbiIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/gallery/gallery2.js\n"));

/***/ })

});
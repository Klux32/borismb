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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ \"(app-pages-browser)/./node_modules/photoswipe/dist/photoswipe.css\");\n/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-photoswipe-gallery */ \"(app-pages-browser)/./node_modules/react-photoswipe-gallery/dist/index.js\");\n/* harmony import */ var _compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compoenents/containers/containers */ \"(app-pages-browser)/./app/compoenents/containers/containers.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _imagesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imagesData */ \"(app-pages-browser)/./app/pages/gallery/imagesData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n// import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'\n// import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'\n\n\n\n\n// import img7 from \"../../../public/img-7.jpg\";\n// import img8 from \"../../../public/img-20.jpg\";\nconst Gallery2 = ()=>{\n    const options = {\n        arrowPrev: true,\n        arrowNext: true,\n        zoom: false,\n        close: true,\n        counter: false,\n        // bgOpacity: 1,\n        padding: {\n            top: 20,\n            bottom: 40,\n            left: 100,\n            right: 100\n        }\n    };\n    console.log(_imagesData__WEBPACK_IMPORTED_MODULE_5__.imagesData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"galleryContent\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    children: \"Projekti\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Gallery, {\n                    options: options,\n                    children: _imagesData__WEBPACK_IMPORTED_MODULE_5__.imagesData.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Item, {\n                            original: item.src.src,\n                            thumbnail: item.src.src,\n                            width: item.width,\n                            height: item.height,\n                            children: (param)=>{\n                                let { ref, open } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-25\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        ref: ref,\n                                        onClick: open,\n                                        src: item.src.src\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 21\n                                }, undefined);\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                            lineNumber: 36,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n                    lineNumber: 33,\n                    columnNumber: 3\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery2.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Gallery2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery2);\nvar _c;\n$RefreshReg$(_c, \"Gallery2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3VDO0FBQ3ZDLG1GQUFtRjtBQUNuRiwyRUFBMkU7QUFFbkI7QUFFcUI7QUFFOUM7QUFDVztBQUUxQyxnREFBZ0Q7QUFDaEQsaURBQWlEO0FBRWpELE1BQU1NLFdBQVc7SUFFWCxNQUFNQyxVQUFVO1FBQ2RDLFdBQVc7UUFDWEMsV0FBVztRQUNYQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztRQUNULGdCQUFnQjtRQUNoQkMsU0FBUztZQUFFQyxLQUFLO1lBQUlDLFFBQVE7WUFBSUMsTUFBTTtZQUFLQyxPQUFPO1FBQUk7SUFDeEQ7SUFFRkMsUUFBUUMsR0FBRyxDQUFDZCxtREFBVUE7SUFDdEIscUJBQ0ksOERBQUNlO1FBQUlDLElBQUc7a0JBQ1YsNEVBQUNuQix5RUFBU0E7OzhCQUNWLDhEQUFDQyx1RUFBT0E7OEJBQUM7Ozs7Ozs4QkFDYiw4REFBQ0gsNkRBQU9BO29CQUFDTyxTQUFTQTs4QkFFTkYsbURBQVVBLENBQUNpQixHQUFHLENBQUMsQ0FBQ0MsTUFBS0Msb0JBQ2pCLDhEQUFDdkIsMERBQUlBOzRCQUNMd0IsVUFBVUYsS0FBS0csR0FBRyxDQUFDQSxHQUFHOzRCQUN0QkMsV0FBV0osS0FBS0csR0FBRyxDQUFDQSxHQUFHOzRCQUN2QkUsT0FBT0wsS0FBS0ssS0FBSzs0QkFDakJDLFFBQVFOLEtBQUtNLE1BQU07c0NBRXBCO29DQUFDLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO3FEQUNYLDhEQUFDWDtvQ0FBSVksV0FBVTs4Q0FFWCw0RUFBQ0M7d0NBQUlILEtBQUtBO3dDQUFLSSxTQUFTSDt3Q0FBTUwsS0FBS0gsS0FBS0csR0FBRyxDQUFDQSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdEU7S0F0Q0twQjtBQXdDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5Mi5qcz81ODE5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCAncGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuY3NzJ1xyXG4vLyBpbXBvcnQgJ3Bob3Rvc3dpcGUtZHluYW1pYy1jYXB0aW9uLXBsdWdpbi9waG90b3N3aXBlLWR5bmFtaWMtY2FwdGlvbi1wbHVnaW4uY3NzJ1xyXG4vLyBpbXBvcnQgUGhvdG9Td2lwZUR5bmFtaWNDYXB0aW9uIGZyb20gJ3Bob3Rvc3dpcGUtZHluYW1pYy1jYXB0aW9uLXBsdWdpbidcclxuXHJcbmltcG9ydCB7IEdhbGxlcnksIEl0ZW0gfSBmcm9tICdyZWFjdC1waG90b3N3aXBlLWdhbGxlcnknXHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRpbmcgfSBmcm9tICcuLi8uLi9jb21wb2VuZW50cy9jb250YWluZXJzL2NvbnRhaW5lcnMnO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBpbWFnZXNEYXRhIH0gZnJvbSAnLi9pbWFnZXNEYXRhJztcclxuXHJcbi8vIGltcG9ydCBpbWc3IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1nLTcuanBnXCI7XHJcbi8vIGltcG9ydCBpbWc4IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1nLTIwLmpwZ1wiO1xyXG5cclxuY29uc3QgR2FsbGVyeTIgPSAoKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGFycm93UHJldjogdHJ1ZSxcclxuICAgICAgICBhcnJvd05leHQ6IHRydWUsXHJcbiAgICAgICAgem9vbTogZmFsc2UsXHJcbiAgICAgICAgY2xvc2U6IHRydWUsXHJcbiAgICAgICAgY291bnRlcjogZmFsc2UsXHJcbiAgICAgICAgLy8gYmdPcGFjaXR5OiAxLFxyXG4gICAgICAgIHBhZGRpbmc6IHsgdG9wOiAyMCwgYm90dG9tOiA0MCwgbGVmdDogMTAwLCByaWdodDogMTAwIH0sXHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZXNEYXRhKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9J2dhbGxlcnlDb250ZW50Jz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWRpbmc+UHJvamVrdGk8L0hlYWRpbmc+XHJcbiAgPEdhbGxlcnkgb3B0aW9ucz17b3B0aW9uc30+XHJcbiAgICB7XHJcbiAgICAgICAgICAgICAgaW1hZ2VzRGF0YS5tYXAoKGl0ZW0sa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAgICBvcmlnaW5hbD17aXRlbS5zcmMuc3JjfVxyXG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWw9e2l0ZW0uc3JjLnNyY31cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2l0ZW0ud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17aXRlbS5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgcmVmLCBvcGVuIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0yNSc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHJlZj17cmVmfSBvbkNsaWNrPXtvcGVufSBzcmM9e2l0ZW0uc3JjLnNyY30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgPC9HYWxsZXJ5PlxyXG4gIDwvQ29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTI7Il0sIm5hbWVzIjpbIkdhbGxlcnkiLCJJdGVtIiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIkltYWdlIiwiaW1hZ2VzRGF0YSIsIkdhbGxlcnkyIiwib3B0aW9ucyIsImFycm93UHJldiIsImFycm93TmV4dCIsInpvb20iLCJjbG9zZSIsImNvdW50ZXIiLCJwYWRkaW5nIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwibWFwIiwiaXRlbSIsImtleSIsIm9yaWdpbmFsIiwic3JjIiwidGh1bWJuYWlsIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiLCJvcGVuIiwiY2xhc3NOYW1lIiwiaW1nIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/gallery/gallery2.js\n"));

/***/ })

});
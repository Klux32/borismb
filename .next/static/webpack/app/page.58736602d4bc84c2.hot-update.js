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

/***/ "(app-pages-browser)/./app/pages/gallery/gallery.js":
/*!**************************************!*\
  !*** ./app/pages/gallery/gallery.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _imagesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagesData */ \"(app-pages-browser)/./app/pages/gallery/imagesData.js\");\n/* harmony import */ var _compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compoenents/containers/containers */ \"(app-pages-browser)/./app/compoenents/containers/containers.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Gallery = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const elApp = document.querySelector(\"#app\");\n        const elImages = Array.from(document.querySelectorAll(\".gallery-image\"));\n        const elDetail = document.querySelector(\".detail\");\n        function flipImages(firstEl, lastEl, change) {\n            const firstRect = firstEl.getBoundingClientRect();\n            const lastRect = lastEl.getBoundingClientRect();\n            // INVERT\n            const deltaX = firstRect.left - lastRect.left;\n            const deltaY = firstRect.top - lastRect.top;\n            const deltaW = firstRect.width / lastRect.width;\n            const deltaH = firstRect.height / lastRect.height;\n            change();\n            lastEl.parentElement.dataset.flipping = true;\n            const animation = lastEl.animate([\n                {\n                    transform: \"translateX(\".concat(deltaX, \"px) translateY(\").concat(deltaY, \"px) scaleX(\").concat(deltaW, \") scaleY(\").concat(deltaH, \")\")\n                },\n                {\n                    transform: \"none\"\n                }\n            ], {\n                duration: 600,\n                easing: \"cubic-bezier(.2, 0, .3, 1)\"\n            });\n            animation.onfinish = ()=>{\n                delete lastEl.parentElement.dataset.flipping;\n            };\n        }\n        elImages.forEach((figure)=>{\n            figure.addEventListener(\"click\", ()=>{\n                const elImage = figure.querySelector(\"img\");\n                elDetail.innerHTML = \"\";\n                const elClone = figure.cloneNode(true);\n                elDetail.appendChild(elClone);\n                const elCloneImage = elClone.querySelector(\"img\");\n                flipImages(elImage, elCloneImage, ()=>{\n                    elApp.dataset.state = \"detail\";\n                });\n                function revert() {\n                    flipImages(elCloneImage, elImage, ()=>{\n                        elApp.dataset.state = \"gallery\";\n                        elDetail.removeEventListener(\"click\", revert);\n                    });\n                }\n                elDetail.addEventListener(\"click\", revert);\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"gallery\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Projekti\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                    lineNumber: 90,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://youtu.be/9cYVDKmS7r8\",\n                    target: \"_blank\",\n                    \"data-keyframers-credit\": true,\n                    style: {\n                        color: \"#FFF\"\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                    lineNumber: 92,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"app\",\n                    \"data-state\": \"gallery\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"gallery flex-row align-items-stretch justify-content-center\",\n                            children: _imagesData__WEBPACK_IMPORTED_MODULE_3__.imagesData.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                    className: \"gallery-image align-self-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.src,\n                                            width: item.width,\n                                            height: item.height\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                            children: key\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, key, true, {\n                                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 19\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"detail\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                            lineNumber: 109,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                    lineNumber: 95,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3NDO0FBRVA7QUFDVztBQUMwQjtBQUVwRSxNQUFNSyxVQUFVOztJQUVaSixnREFBU0EsQ0FBQztRQUlOLE1BQU1LLFFBQVFDLFNBQVNDLGFBQWEsQ0FBQztRQUVyQyxNQUFNQyxXQUFXQyxNQUFNQyxJQUFJLENBQUNKLFNBQVNLLGdCQUFnQixDQUFDO1FBRXRELE1BQU1DLFdBQVdOLFNBQVNDLGFBQWEsQ0FBQztRQUd4QyxTQUFTTSxXQUFXQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsTUFBTTtZQUN2QyxNQUFNQyxZQUFZSCxRQUFRSSxxQkFBcUI7WUFFL0MsTUFBTUMsV0FBV0osT0FBT0cscUJBQXFCO1lBRTdDLFNBQVM7WUFDVCxNQUFNRSxTQUFTSCxVQUFVSSxJQUFJLEdBQUdGLFNBQVNFLElBQUk7WUFDN0MsTUFBTUMsU0FBU0wsVUFBVU0sR0FBRyxHQUFHSixTQUFTSSxHQUFHO1lBQzNDLE1BQU1DLFNBQVNQLFVBQVVRLEtBQUssR0FBR04sU0FBU00sS0FBSztZQUMvQyxNQUFNQyxTQUFTVCxVQUFVVSxNQUFNLEdBQUdSLFNBQVNRLE1BQU07WUFFakRYO1lBQ0FELE9BQU9hLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRLEdBQUc7WUFFeEMsTUFBTUMsWUFBWWhCLE9BQU9pQixPQUFPLENBQUM7Z0JBQy9CO29CQUNFQyxXQUFXLGNBQXNDWCxPQUF4QkYsUUFBTyxtQkFBcUNJLE9BQXBCRixRQUFPLGVBQStCSSxPQUFsQkYsUUFBTyxhQUFrQixPQUFQRSxRQUFPO2dCQUNoRztnQkFDQTtvQkFDRU8sV0FBVztnQkFDYjthQUNELEVBQUU7Z0JBQ0RDLFVBQVU7Z0JBQ1ZDLFFBQVE7WUFDVjtZQUVBSixVQUFVSyxRQUFRLEdBQUc7Z0JBQ25CLE9BQU9yQixPQUFPYSxhQUFhLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUTtZQUM5QztRQUVGO1FBRUF0QixTQUFTNkIsT0FBTyxDQUFDQyxDQUFBQTtZQUVmQSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTO2dCQUMvQixNQUFNQyxVQUFVRixPQUFPL0IsYUFBYSxDQUFDO2dCQUVyQ0ssU0FBUzZCLFNBQVMsR0FBRztnQkFFckIsTUFBTUMsVUFBVUosT0FBT0ssU0FBUyxDQUFDO2dCQUNqQy9CLFNBQVNnQyxXQUFXLENBQUNGO2dCQUVyQixNQUFNRyxlQUFlSCxRQUFRbkMsYUFBYSxDQUFDO2dCQUUzQ00sV0FBVzJCLFNBQVNLLGNBQWM7b0JBQ2hDeEMsTUFBTXdCLE9BQU8sQ0FBQ2lCLEtBQUssR0FBQztnQkFDdEI7Z0JBRUEsU0FBU0M7b0JBRVBsQyxXQUFXZ0MsY0FBY0wsU0FBUzt3QkFDaENuQyxNQUFNd0IsT0FBTyxDQUFDaUIsS0FBSyxHQUFDO3dCQUNwQmxDLFNBQVNvQyxtQkFBbUIsQ0FBQyxTQUFRRDtvQkFDdkM7Z0JBRUY7Z0JBRUFuQyxTQUFTMkIsZ0JBQWdCLENBQUMsU0FBUVE7WUFFcEM7UUFDRjtJQUVWLEdBQUUsRUFBRTtJQUlGLHFCQUNFLDhEQUFDRTtRQUFJQyxJQUFHO2tCQUNOLDRFQUFDL0MseUVBQVNBOzs4QkFDViw4REFBQ2dEOzhCQUFHOzs7Ozs7OEJBRUosOERBQUNDO29CQUFFQyxNQUFLO29CQUErQkMsUUFBTztvQkFBU0Msd0JBQXNCO29CQUFDQyxPQUFPO3dCQUFDQyxPQUFPO29CQUFNOzs7Ozs7OEJBR25HLDhEQUFDUjtvQkFBSUMsSUFBRztvQkFBTVEsY0FBVzs7c0NBQ3ZCLDhEQUFDVDs0QkFBSVUsV0FBVTtzQ0FJVHpELG1EQUFVQSxDQUFDMEQsR0FBRyxDQUFDLENBQUNDLE1BQUtDLG9CQUNqQiw4REFBQ3hCO29DQUFpQnFCLFdBQVU7O3NEQUM1Qiw4REFBQzFELGtEQUFLQTs0Q0FBQzhELEtBQUtGLEtBQUtFLEdBQUc7NENBQUV0QyxPQUFPb0MsS0FBS3BDLEtBQUs7NENBQUVFLFFBQVFrQyxLQUFLbEMsTUFBTTs7Ozs7O3NEQUN4RCw4REFBQ3FDO3NEQUFZRjs7Ozs7OzttQ0FGSkE7Ozs7Ozs7Ozs7c0NBUXZCLDhEQUFDYjs0QkFBSVUsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkI7R0E1R012RDtLQUFBQTtBQThHTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LmpzPzE3YzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgaW1hZ2VzRGF0YSB9IGZyb20gJy4vaW1hZ2VzRGF0YSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvZW5lbnRzL2NvbnRhaW5lcnMvY29udGFpbmVycyc7XHJcblxyXG5jb25zdCBHYWxsZXJ5ID0gKCkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgIFxyXG5cclxuICAgICAgICBjb25zdCBlbEFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBlbEltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5LWltYWdlXCIpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWxEZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbFwiKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZsaXBJbWFnZXMoZmlyc3RFbCwgbGFzdEVsLCBjaGFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RSZWN0ID0gZmlyc3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBsYXN0UmVjdCA9IGxhc3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJTlZFUlRcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0gZmlyc3RSZWN0LmxlZnQgLSBsYXN0UmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVkgPSBmaXJzdFJlY3QudG9wIC0gbGFzdFJlY3QudG9wO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVcgPSBmaXJzdFJlY3Qud2lkdGggLyBsYXN0UmVjdC53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFIID0gZmlyc3RSZWN0LmhlaWdodCAvIGxhc3RSZWN0LmhlaWdodDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjaGFuZ2UoKTtcclxuICAgICAgICAgICAgbGFzdEVsLnBhcmVudEVsZW1lbnQuZGF0YXNldC5mbGlwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gbGFzdEVsLmFuaW1hdGUoW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtkZWx0YVh9cHgpIHRyYW5zbGF0ZVkoJHtkZWx0YVl9cHgpIHNjYWxlWCgke2RlbHRhV30pIHNjYWxlWSgke2RlbHRhSH0pYFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwLCAvLyBtaWxsaXNlY29uZHNcclxuICAgICAgICAgICAgICBlYXNpbmc6ICdjdWJpYy1iZXppZXIoLjIsIDAsIC4zLCAxKSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgYW5pbWF0aW9uLm9uZmluaXNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRlbGV0ZSBsYXN0RWwucGFyZW50RWxlbWVudC5kYXRhc2V0LmZsaXBwaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZWxJbWFnZXMuZm9yRWFjaChmaWd1cmUgPT4ge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVsSW1hZ2UgPSBmaWd1cmUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBlbERldGFpbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29uc3QgZWxDbG9uZSA9IGZpZ3VyZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgZWxEZXRhaWwuYXBwZW5kQ2hpbGQoZWxDbG9uZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb25zdCBlbENsb25lSW1hZ2UgPSBlbENsb25lLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgZmxpcEltYWdlcyhlbEltYWdlLCBlbENsb25lSW1hZ2UsICgpPT57XHJcbiAgICAgICAgICAgICAgICBlbEFwcC5kYXRhc2V0LnN0YXRlPVwiZGV0YWlsXCI7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBmdW5jdGlvbiByZXZlcnQoKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmxpcEltYWdlcyhlbENsb25lSW1hZ2UsIGVsSW1hZ2UsICgpPT57XHJcbiAgICAgICAgICAgICAgICAgIGVsQXBwLmRhdGFzZXQuc3RhdGU9XCJnYWxsZXJ5XCI7XHJcbiAgICAgICAgICAgICAgICAgIGVsRGV0YWlsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZXZlcnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBlbERldGFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmV2ZXJ0KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxufSxbXSlcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD0nZ2FsbGVyeSc+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxoMj5Qcm9qZWt0aTwvaDI+XHJcblxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly95b3V0dS5iZS85Y1lWREttUzdyOFwiIHRhcmdldD1cIl9ibGFua1wiIGRhdGEta2V5ZnJhbWVycy1jcmVkaXQgc3R5bGU9e3tjb2xvcjogXCIjRkZGXCJ9fT48L2E+XHJcbiAgICAgIHsvKiA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZXBlbi5pby9zaHNoYXcvcGVuL1FtWllNRy5qc1wiPjwvc2NyaXB0PiAqL31cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJhcHBcIiBkYXRhLXN0YXRlPVwiZ2FsbGVyeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeSBmbGV4LXJvdyBhbGlnbi1pdGVtcy1zdHJldGNoIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIHsvKiA8IS0tIGZpZ3VyZS5nYWxsZXJ5LWltYWdlKjMwPmltZ1tzcmM9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi8yMDIyMDQzLzcwMHg5MDAvPz0kJFwiXStmaWdjYXB0aW9uIC0tPiAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGltYWdlc0RhdGEubWFwKChpdGVtLGtleSk9PihcclxuICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBrZXk9e2tleX0gY2xhc3NOYW1lPVwiZ2FsbGVyeS1pbWFnZSBhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLnNyY30gd2lkdGg9e2l0ZW0ud2lkdGh9IGhlaWdodD17aXRlbS5oZWlnaHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj57a2V5fTwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgIHsvKiA8IS0tICAgY2xvbmVkIGZpZ3VyZS9pbWFnZSBnb2VzIGhlcmUhICAgLS0+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsImltYWdlc0RhdGEiLCJDb250YWluZXIiLCJHYWxsZXJ5IiwiZWxBcHAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbEltYWdlcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbERldGFpbCIsImZsaXBJbWFnZXMiLCJmaXJzdEVsIiwibGFzdEVsIiwiY2hhbmdlIiwiZmlyc3RSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGFzdFJlY3QiLCJkZWx0YVgiLCJsZWZ0IiwiZGVsdGFZIiwidG9wIiwiZGVsdGFXIiwid2lkdGgiLCJkZWx0YUgiLCJoZWlnaHQiLCJwYXJlbnRFbGVtZW50IiwiZGF0YXNldCIsImZsaXBwaW5nIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsImR1cmF0aW9uIiwiZWFzaW5nIiwib25maW5pc2giLCJmb3JFYWNoIiwiZmlndXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsSW1hZ2UiLCJpbm5lckhUTUwiLCJlbENsb25lIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJlbENsb25lSW1hZ2UiLCJzdGF0ZSIsInJldmVydCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJpZCIsImgyIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJkYXRhLWtleWZyYW1lcnMtY3JlZGl0Iiwic3R5bGUiLCJjb2xvciIsImRhdGEtc3RhdGUiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwia2V5Iiwic3JjIiwiZmlnY2FwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/gallery/gallery.js\n"));

/***/ })

});
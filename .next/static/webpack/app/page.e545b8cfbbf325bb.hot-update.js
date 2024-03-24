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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _imagesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagesData */ \"(app-pages-browser)/./app/pages/gallery/imagesData.js\");\n/* harmony import */ var _compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compoenents/containers/containers */ \"(app-pages-browser)/./app/compoenents/containers/containers.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Gallery = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const elApp = document.querySelector(\"#galleryApp\");\n        const elImages = Array.from(document.querySelectorAll(\".gallery-image\"));\n        const elDetail = document.querySelector(\".detail\");\n        function flipImages(firstEl, lastEl, change) {\n            const firstRect = firstEl.getBoundingClientRect();\n            const lastRect = lastEl.getBoundingClientRect();\n            // INVERT\n            const deltaX = firstRect.left - lastRect.left;\n            const deltaY = firstRect.top - lastRect.top;\n            const deltaW = firstRect.width / lastRect.width;\n            const deltaH = firstRect.height / lastRect.height;\n            change();\n            lastEl.parentElement.dataset.flipping = true;\n            const animation = lastEl.animate([\n                {\n                    transform: \"translateX(\".concat(deltaX, \"px) translateY(\").concat(deltaY, \"px) scaleX(\").concat(deltaW, \") scaleY(\").concat(deltaH, \")\")\n                },\n                {\n                    transform: \"none\"\n                }\n            ], {\n                duration: 600,\n                easing: \"cubic-bezier(.2, 0, .3, 1)\"\n            });\n            animation.onfinish = ()=>{\n                delete lastEl.parentElement.dataset.flipping;\n            };\n        }\n        elImages.forEach((figure)=>{\n            figure.addEventListener(\"click\", ()=>{\n                const elImage = figure.querySelector(\"img\");\n                elDetail.innerHTML = \"\";\n                const elClone = figure.cloneNode(true);\n                elDetail.appendChild(elClone);\n                const elCloneImage = elClone.querySelector(\"img\");\n                flipImages(elImage, elCloneImage, ()=>{\n                    elApp.dataset.state = \"detail\";\n                });\n                function revert() {\n                    flipImages(elCloneImage, elImage, ()=>{\n                        elApp.dataset.state = \"gallery\";\n                        elDetail.removeEventListener(\"click\", revert);\n                    });\n                }\n                elDetail.addEventListener(\"click\", revert);\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"galleryContent\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compoenents_containers_containers__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                    children: \"Projekti\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                    lineNumber: 90,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://youtu.be/9cYVDKmS7r8\",\n                    target: \"_blank\",\n                    \"data-keyframers-credit\": true,\n                    style: {\n                        color: \"#FFF\"\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                    lineNumber: 92,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"galleryApp\",\n                    \"data-state\": \"gallery\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"gallery flex-row align-items-stretch justify-content-center\",\n                            children: _imagesData__WEBPACK_IMPORTED_MODULE_3__.imagesData.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                    className: \"gallery-image align-self-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.src,\n                                            width: item.width,\n                                            height: item.height\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {}, void 0, false, {\n                                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, key, true, {\n                                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 19\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"detail\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                            lineNumber: 109,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n                    lineNumber: 95,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Development\\\\mbb\\\\app\\\\pages\\\\gallery\\\\gallery.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3NDO0FBRVA7QUFDVztBQUNtQztBQUU3RSxNQUFNTSxVQUFVOztJQUVaTCxnREFBU0EsQ0FBQztRQUlOLE1BQU1NLFFBQVFDLFNBQVNDLGFBQWEsQ0FBQztRQUVyQyxNQUFNQyxXQUFXQyxNQUFNQyxJQUFJLENBQUNKLFNBQVNLLGdCQUFnQixDQUFDO1FBRXRELE1BQU1DLFdBQVdOLFNBQVNDLGFBQWEsQ0FBQztRQUd4QyxTQUFTTSxXQUFXQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsTUFBTTtZQUN2QyxNQUFNQyxZQUFZSCxRQUFRSSxxQkFBcUI7WUFFL0MsTUFBTUMsV0FBV0osT0FBT0cscUJBQXFCO1lBRTdDLFNBQVM7WUFDVCxNQUFNRSxTQUFTSCxVQUFVSSxJQUFJLEdBQUdGLFNBQVNFLElBQUk7WUFDN0MsTUFBTUMsU0FBU0wsVUFBVU0sR0FBRyxHQUFHSixTQUFTSSxHQUFHO1lBQzNDLE1BQU1DLFNBQVNQLFVBQVVRLEtBQUssR0FBR04sU0FBU00sS0FBSztZQUMvQyxNQUFNQyxTQUFTVCxVQUFVVSxNQUFNLEdBQUdSLFNBQVNRLE1BQU07WUFFakRYO1lBQ0FELE9BQU9hLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRLEdBQUc7WUFFeEMsTUFBTUMsWUFBWWhCLE9BQU9pQixPQUFPLENBQUM7Z0JBQy9CO29CQUNFQyxXQUFXLGNBQXNDWCxPQUF4QkYsUUFBTyxtQkFBcUNJLE9BQXBCRixRQUFPLGVBQStCSSxPQUFsQkYsUUFBTyxhQUFrQixPQUFQRSxRQUFPO2dCQUNoRztnQkFDQTtvQkFDRU8sV0FBVztnQkFDYjthQUNELEVBQUU7Z0JBQ0RDLFVBQVU7Z0JBQ1ZDLFFBQVE7WUFDVjtZQUVBSixVQUFVSyxRQUFRLEdBQUc7Z0JBQ25CLE9BQU9yQixPQUFPYSxhQUFhLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUTtZQUM5QztRQUVGO1FBRUF0QixTQUFTNkIsT0FBTyxDQUFDQyxDQUFBQTtZQUVmQSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTO2dCQUMvQixNQUFNQyxVQUFVRixPQUFPL0IsYUFBYSxDQUFDO2dCQUVyQ0ssU0FBUzZCLFNBQVMsR0FBRztnQkFFckIsTUFBTUMsVUFBVUosT0FBT0ssU0FBUyxDQUFDO2dCQUNqQy9CLFNBQVNnQyxXQUFXLENBQUNGO2dCQUVyQixNQUFNRyxlQUFlSCxRQUFRbkMsYUFBYSxDQUFDO2dCQUUzQ00sV0FBVzJCLFNBQVNLLGNBQWM7b0JBQ2hDeEMsTUFBTXdCLE9BQU8sQ0FBQ2lCLEtBQUssR0FBQztnQkFDdEI7Z0JBRUEsU0FBU0M7b0JBRVBsQyxXQUFXZ0MsY0FBY0wsU0FBUzt3QkFDaENuQyxNQUFNd0IsT0FBTyxDQUFDaUIsS0FBSyxHQUFDO3dCQUNwQmxDLFNBQVNvQyxtQkFBbUIsQ0FBQyxTQUFRRDtvQkFDdkM7Z0JBRUY7Z0JBRUFuQyxTQUFTMkIsZ0JBQWdCLENBQUMsU0FBUVE7WUFFcEM7UUFDRjtJQUVWLEdBQUUsRUFBRTtJQUlGLHFCQUNFLDhEQUFDRTtRQUFJQyxJQUFHO2tCQUNOLDRFQUFDaEQseUVBQVNBOzs4QkFDViw4REFBQ0MsdUVBQU9BOzhCQUFDOzs7Ozs7OEJBRVQsOERBQUNnRDtvQkFBRUMsTUFBSztvQkFBK0JDLFFBQU87b0JBQVNDLHdCQUFzQjtvQkFBQ0MsT0FBTzt3QkFBQ0MsT0FBTztvQkFBTTs7Ozs7OzhCQUduRyw4REFBQ1A7b0JBQUlDLElBQUc7b0JBQWFPLGNBQVc7O3NDQUM5Qiw4REFBQ1I7NEJBQUlTLFdBQVU7c0NBSVR6RCxtREFBVUEsQ0FBQzBELEdBQUcsQ0FBQyxDQUFDQyxNQUFLQyxvQkFDakIsOERBQUN2QjtvQ0FBaUJvQixXQUFVOztzREFDMUIsOERBQUMxRCxrREFBS0E7NENBQUM4RCxLQUFLRixLQUFLRSxHQUFHOzRDQUFFckMsT0FBT21DLEtBQUtuQyxLQUFLOzRDQUFFRSxRQUFRaUMsS0FBS2pDLE1BQU07Ozs7OztzREFDNUQsOERBQUNvQzs7Ozs7O21DQUZVRjs7Ozs7Ozs7OztzQ0FRdkIsOERBQUNaOzRCQUFJUyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92QjtHQTVHTXREO0tBQUFBO0FBOEdOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkuanM/MTdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBpbWFnZXNEYXRhIH0gZnJvbSAnLi9pbWFnZXNEYXRhJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vY29tcG9lbmVudHMvY29udGFpbmVycy9jb250YWluZXJzJztcclxuXHJcbmNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgXHJcblxyXG4gICAgICAgIGNvbnN0IGVsQXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYWxsZXJ5QXBwXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBlbEltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5LWltYWdlXCIpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWxEZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbFwiKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZsaXBJbWFnZXMoZmlyc3RFbCwgbGFzdEVsLCBjaGFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RSZWN0ID0gZmlyc3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBsYXN0UmVjdCA9IGxhc3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJTlZFUlRcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0gZmlyc3RSZWN0LmxlZnQgLSBsYXN0UmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVkgPSBmaXJzdFJlY3QudG9wIC0gbGFzdFJlY3QudG9wO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVcgPSBmaXJzdFJlY3Qud2lkdGggLyBsYXN0UmVjdC53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFIID0gZmlyc3RSZWN0LmhlaWdodCAvIGxhc3RSZWN0LmhlaWdodDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjaGFuZ2UoKTtcclxuICAgICAgICAgICAgbGFzdEVsLnBhcmVudEVsZW1lbnQuZGF0YXNldC5mbGlwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gbGFzdEVsLmFuaW1hdGUoW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtkZWx0YVh9cHgpIHRyYW5zbGF0ZVkoJHtkZWx0YVl9cHgpIHNjYWxlWCgke2RlbHRhV30pIHNjYWxlWSgke2RlbHRhSH0pYFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwLCAvLyBtaWxsaXNlY29uZHNcclxuICAgICAgICAgICAgICBlYXNpbmc6ICdjdWJpYy1iZXppZXIoLjIsIDAsIC4zLCAxKSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgYW5pbWF0aW9uLm9uZmluaXNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRlbGV0ZSBsYXN0RWwucGFyZW50RWxlbWVudC5kYXRhc2V0LmZsaXBwaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZWxJbWFnZXMuZm9yRWFjaChmaWd1cmUgPT4ge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVsSW1hZ2UgPSBmaWd1cmUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBlbERldGFpbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29uc3QgZWxDbG9uZSA9IGZpZ3VyZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgZWxEZXRhaWwuYXBwZW5kQ2hpbGQoZWxDbG9uZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb25zdCBlbENsb25lSW1hZ2UgPSBlbENsb25lLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgZmxpcEltYWdlcyhlbEltYWdlLCBlbENsb25lSW1hZ2UsICgpPT57XHJcbiAgICAgICAgICAgICAgICBlbEFwcC5kYXRhc2V0LnN0YXRlPVwiZGV0YWlsXCI7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBmdW5jdGlvbiByZXZlcnQoKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmxpcEltYWdlcyhlbENsb25lSW1hZ2UsIGVsSW1hZ2UsICgpPT57XHJcbiAgICAgICAgICAgICAgICAgIGVsQXBwLmRhdGFzZXQuc3RhdGU9XCJnYWxsZXJ5XCI7XHJcbiAgICAgICAgICAgICAgICAgIGVsRGV0YWlsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZXZlcnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBlbERldGFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmV2ZXJ0KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxufSxbXSlcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD0nZ2FsbGVyeUNvbnRlbnQnPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZGluZz5Qcm9qZWt0aTwvSGVhZGluZz5cclxuXHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3lvdXR1LmJlLzljWVZES21TN3I4XCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS1rZXlmcmFtZXJzLWNyZWRpdCBzdHlsZT17e2NvbG9yOiBcIiNGRkZcIn19PjwvYT5cclxuICAgICAgey8qIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL3Noc2hhdy9wZW4vUW1aWU1HLmpzXCI+PC9zY3JpcHQ+ICovfVxyXG5cclxuICAgICAgPGRpdiBpZD1cImdhbGxlcnlBcHBcIiBkYXRhLXN0YXRlPVwiZ2FsbGVyeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeSBmbGV4LXJvdyBhbGlnbi1pdGVtcy1zdHJldGNoIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIHsvKiA8IS0tIGZpZ3VyZS5nYWxsZXJ5LWltYWdlKjMwPmltZ1tzcmM9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi8yMDIyMDQzLzcwMHg5MDAvPz0kJFwiXStmaWdjYXB0aW9uIC0tPiAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGltYWdlc0RhdGEubWFwKChpdGVtLGtleSk9PihcclxuICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBrZXk9e2tleX0gY2xhc3NOYW1lPVwiZ2FsbGVyeS1pbWFnZSBhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uc3JjfSB3aWR0aD17aXRlbS53aWR0aH0gaGVpZ2h0PXtpdGVtLmhlaWdodH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj48L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICB7LyogPCEtLSAgIGNsb25lZCBmaWd1cmUvaW1hZ2UgZ29lcyBoZXJlISAgIC0tPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJpbWFnZXNEYXRhIiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIkdhbGxlcnkiLCJlbEFwcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsSW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImVsRGV0YWlsIiwiZmxpcEltYWdlcyIsImZpcnN0RWwiLCJsYXN0RWwiLCJjaGFuZ2UiLCJmaXJzdFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsYXN0UmVjdCIsImRlbHRhWCIsImxlZnQiLCJkZWx0YVkiLCJ0b3AiLCJkZWx0YVciLCJ3aWR0aCIsImRlbHRhSCIsImhlaWdodCIsInBhcmVudEVsZW1lbnQiLCJkYXRhc2V0IiwiZmxpcHBpbmciLCJhbmltYXRpb24iLCJhbmltYXRlIiwidHJhbnNmb3JtIiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbmZpbmlzaCIsImZvckVhY2giLCJmaWd1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxJbWFnZSIsImlubmVySFRNTCIsImVsQ2xvbmUiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImVsQ2xvbmVJbWFnZSIsInN0YXRlIiwicmV2ZXJ0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJkYXRhLWtleWZyYW1lcnMtY3JlZGl0Iiwic3R5bGUiLCJjb2xvciIsImRhdGEtc3RhdGUiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwia2V5Iiwic3JjIiwiZmlnY2FwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/gallery/gallery.js\n"));

/***/ })

});
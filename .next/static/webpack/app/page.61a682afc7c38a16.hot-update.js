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

/***/ "(app-pages-browser)/./app/compoenents/navbars/navShrink.js":
/*!**********************************************!*\
  !*** ./app/compoenents/navbars/navShrink.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollFunction: function() { return /* binding */ scrollFunction; }\n/* harmony export */ });\nwindow.onscroll = function() {\n    scrollFunction();\n};\nfunction scrollFunction() {\n    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {\n        document.getElementById(\"navbar\").style.padding = \"5px 10px\";\n        document.getElementById(\"navbar\").classList.add(\"bg-white\", \"text-dark\", \"shadow-sm\");\n        document.getElementById(\"togglerIcon\").classList.add(\"togglerColorChange\");\n        const links = document.getElementsByClassName(\"nav-link\");\n        for(let i = 0; i < links.length; i++){\n            links[i].classList.add(\"text-dark\");\n        }\n        document.getElementById(\"logo\").style.width = \"70px\";\n    } else {\n        document.getElementById(\"navbar\").style.padding = \"10px 10px\";\n        document.getElementById(\"navbar\").classList.remove(\"bg-white\", \"text-dark\", \"shadow-sm\");\n        document.getElementById(\"togglerIcon\").classList.remove(\"togglerColorChange\");\n        const links = document.getElementsByClassName(\"nav-link\");\n        for(let i = 0; i < links.length; i++){\n            links[i].classList.remove(\"text-dark\");\n        }\n        document.getElementById(\"logo\").style.width = \"100px\";\n    }\n    const viewWidth = window.innerWidth;\n    console.log(viewWidth);\n    const logoPosition = \"\".concat((viewWidth > 768 ? 50 : 80) + document.documentElement.scrollTop / 10, \"%\");\n    console.log(parseInt(logoPosition) >= 113.636);\n    document.getElementById(\"landing_logo\").style.top = parseInt(logoPosition) >= 113.636 ? \"113.636%\" : logoPosition;\n// document.getElementById(\"togglerIcon\").classList.add(\"togglerColorChange\")\n//   document.getElementById(\"landing_logo\").style.position = `absolute`;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb2VuZW50cy9uYXZiYXJzL25hdlNocmluay5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUFBLE9BQU9DLFFBQVEsR0FBRztJQUFZQztBQUFnQjtBQUV2QyxTQUFTQTtJQUNkLElBQUlDLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxHQUFHLE1BQU1GLFNBQVNHLGVBQWUsQ0FBQ0QsU0FBUyxHQUFHLElBQUk7UUFDM0VGLFNBQVNJLGNBQWMsQ0FBQyxVQUFVQyxLQUFLLENBQUNDLE9BQU8sR0FBRztRQUNsRE4sU0FBU0ksY0FBYyxDQUFDLFVBQVVHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVcsYUFBWTtRQUN2RVIsU0FBU0ksY0FBYyxDQUFDLGVBQWVHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQ3JELE1BQU1DLFFBQVFULFNBQVNVLHNCQUFzQixDQUFDO1FBRTlDLElBQUksSUFBSUMsSUFBRSxHQUFHQSxJQUFFRixNQUFNRyxNQUFNLEVBQUVELElBQUk7WUFDN0JGLEtBQUssQ0FBQ0UsRUFBRSxDQUFDSixTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUMzQjtRQUNBUixTQUFTSSxjQUFjLENBQUMsUUFBUUMsS0FBSyxDQUFDUSxLQUFLLEdBQUc7SUFDaEQsT0FBTztRQUNMYixTQUFTSSxjQUFjLENBQUMsVUFBVUMsS0FBSyxDQUFDQyxPQUFPLEdBQUc7UUFDbEROLFNBQVNJLGNBQWMsQ0FBQyxVQUFVRyxTQUFTLENBQUNPLE1BQU0sQ0FBRSxZQUFXLGFBQVk7UUFDM0VkLFNBQVNJLGNBQWMsQ0FBQyxlQUFlRyxTQUFTLENBQUNPLE1BQU0sQ0FBQztRQUN4RCxNQUFNTCxRQUFRVCxTQUFTVSxzQkFBc0IsQ0FBQztRQUU5QyxJQUFJLElBQUlDLElBQUUsR0FBR0EsSUFBRUYsTUFBTUcsTUFBTSxFQUFFRCxJQUFJO1lBQzdCRixLQUFLLENBQUNFLEVBQUUsQ0FBQ0osU0FBUyxDQUFDTyxNQUFNLENBQUM7UUFDOUI7UUFDQWQsU0FBU0ksY0FBYyxDQUFDLFFBQVFDLEtBQUssQ0FBQ1EsS0FBSyxHQUFHO0lBQ2hEO0lBRUEsTUFBTUUsWUFBWWxCLE9BQU9tQixVQUFVO0lBRW5DQyxRQUFRQyxHQUFHLENBQUNIO0lBRVosTUFBTUksZUFBZSxHQUF5RSxPQUF0RSxDQUFDSixZQUFZLE1BQU0sS0FBSyxFQUFDLElBQU1mLFNBQVNHLGVBQWUsQ0FBQ0QsU0FBUyxHQUFDLElBQUk7SUFFOUZlLFFBQVFDLEdBQUcsQ0FBQ0UsU0FBU0QsaUJBQWdCO0lBQ3JDbkIsU0FBU0ksY0FBYyxDQUFDLGdCQUFnQkMsS0FBSyxDQUFDZ0IsR0FBRyxHQUFHRCxTQUFTRCxpQkFBaUIsVUFBVSxhQUFhQTtBQUNyRyw2RUFBNkU7QUFDL0UseUVBQXlFO0FBQ3pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb2VuZW50cy9uYXZiYXJzL25hdlNocmluay5qcz80Zjc5Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge3Njcm9sbEZ1bmN0aW9uKCl9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEZ1bmN0aW9uKCkge1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDgwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA4MCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIikuc3R5bGUucGFkZGluZyA9IFwiNXB4IDEwcHhcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJiZy13aGl0ZVwiLFwidGV4dC1kYXJrXCIsXCJzaGFkb3ctc21cIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZXJJY29uXCIpLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGVyQ29sb3JDaGFuZ2VcIilcclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1saW5rXCIpXHJcblxyXG4gICAgZm9yKGxldCBpPTAgO2k8bGlua3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxpbmtzW2ldLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhcmtcIilcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKS5zdHlsZS53aWR0aCA9IFwiNzBweFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKS5zdHlsZS5wYWRkaW5nID0gXCIxMHB4IDEwcHhcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLmNsYXNzTGlzdC5yZW1vdmUoIFwiYmctd2hpdGVcIixcInRleHQtZGFya1wiLFwic2hhZG93LXNtXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVySWNvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlckNvbG9yQ2hhbmdlXCIpXHJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXYtbGlua1wiKVxyXG5cclxuICAgIGZvcihsZXQgaT0wIDtpPGxpbmtzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1kYXJrXCIpXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIikuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2aWV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgY29uc29sZS5sb2codmlld1dpZHRoKVxyXG5cclxuICBjb25zdCBsb2dvUG9zaXRpb24gPSBgJHsodmlld1dpZHRoID4gNzY4ID8gNTAgOiA4MCkgKyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcC8xMCl9JWBcclxuICBcclxuICBjb25zb2xlLmxvZyhwYXJzZUludChsb2dvUG9zaXRpb24pID49MTEzLjYzNilcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhbmRpbmdfbG9nb1wiKS5zdHlsZS50b3AgPSBwYXJzZUludChsb2dvUG9zaXRpb24pID49IDExMy42MzYgPyBcIjExMy42MzYlXCIgOiBsb2dvUG9zaXRpb247XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVySWNvblwiKS5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlckNvbG9yQ2hhbmdlXCIpXHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW5kaW5nX2xvZ29cIikuc3R5bGUucG9zaXRpb24gPSBgYWJzb2x1dGVgO1xyXG59Il0sIm5hbWVzIjpbIndpbmRvdyIsIm9uc2Nyb2xsIiwic2Nyb2xsRnVuY3Rpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwicGFkZGluZyIsImNsYXNzTGlzdCIsImFkZCIsImxpbmtzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJ3aWR0aCIsInJlbW92ZSIsInZpZXdXaWR0aCIsImlubmVyV2lkdGgiLCJjb25zb2xlIiwibG9nIiwibG9nb1Bvc2l0aW9uIiwicGFyc2VJbnQiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/compoenents/navbars/navShrink.js\n"));

/***/ })

});
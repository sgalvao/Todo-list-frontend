"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AddTask/index.tsx":
/*!******************************************!*\
  !*** ./src/components/AddTask/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddTaskModal\": function() { return /* binding */ AddTaskModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Input */ \"./src/components/Input/index.tsx\");\n/* harmony import */ var components_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TextArea */ \"./src/components/TextArea/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/AddTask/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar AddTaskModal = function(param) {\n    var isOpen = param.isOpen, onClose = param.onClose;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        isOpen: !isOpen,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Form, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    type: \"name\",\n                    name: \"name\",\n                    label: \"Task Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddTask/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_TextArea__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    name: \"description\",\n                    label: \"Description\"\n                }, void 0, false, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddTask/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    children: \"Create Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddTask/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddTask/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddTask/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_c = AddTaskModal;\nvar _c;\n$RefreshReg$(_c, \"AddTaskModal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRUYXNrL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvQztBQUNNO0FBQ2I7O0FBT3RCLEdBQUssQ0FBQ0csWUFBWSxHQUFHLFFBQVEsUUFBd0IsQ0FBQztRQUE5QkMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLE9BQU8sU0FBUEEsT0FBTztJQUM1QyxNQUFNLDZFQUNISCw4Q0FBVztRQUFDRSxNQUFNLEdBQUdBLE1BQU07OEZBQ3pCRix5Q0FBTTs7NEZBQ0pGLHdEQUFLO29CQUFDUSxJQUFJLEVBQUMsQ0FBTTtvQkFBQ0MsSUFBSSxFQUFDLENBQU07b0JBQUNDLEtBQUssRUFBQyxDQUFXOzs7Ozs7NEZBQy9DVCwyREFBUTtvQkFBQ1EsSUFBSSxFQUFDLENBQWE7b0JBQUNDLEtBQUssRUFBQyxDQUFhOzs7Ozs7NEZBQy9DUiwyQ0FBUTs4QkFBQyxDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QixDQUFDO0tBVllDLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkVGFzay9pbmRleC50c3g/ZjU5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvSW5wdXRcIjtcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiY29tcG9uZW50cy9UZXh0QXJlYVwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQWRkVGFza01vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyIGlzT3Blbj17IWlzT3Blbn0+XG4gICAgICA8Uy5Gb3JtPlxuICAgICAgICA8SW5wdXQgdHlwZT1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIGxhYmVsPVwiVGFzayBOYW1lXCIgLz5cbiAgICAgICAgPFRleHRBcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGxhYmVsPVwiRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICA8Uy5CdXR0b24+Q3JlYXRlIFRhc2s8L1MuQnV0dG9uPlxuICAgICAgPC9TLkZvcm0+XG4gICAgPC9TLkNvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW5wdXQiLCJUZXh0QXJlYSIsIlMiLCJBZGRUYXNrTW9kYWwiLCJpc09wZW4iLCJvbkNsb3NlIiwiQ29udGFpbmVyIiwiRm9ybSIsInR5cGUiLCJuYW1lIiwibGFiZWwiLCJCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddTask/index.tsx\n");

/***/ })

});
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

/***/ "./src/components/AddProject/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/AddProject/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddProject\": function() { return /* binding */ AddProject; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Input */ \"./src/components/Input/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/AddProject/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AddProject = function(param) {\n    var onSubmit = param.onSubmit;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                children: \"Add New Project\"\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddProject/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"name\",\n                        placeholder: \"Project name\",\n                        label: \"Project Name\",\n                        onChange: function(e) {\n                            return setValue(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddProject/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: function() {\n                            return onSubmit(value);\n                        },\n                        children: \"Add Project\"\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddProject/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddProject/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/AddProject/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_s(AddProject, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = AddProject;\nvar _c;\n$RefreshReg$(_c, \"AddProject\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRQcm9qZWN0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0M7QUFDSjtBQUNIOzs7QUFNdEIsR0FBSyxDQUFDRyxVQUFVLEdBQUcsUUFBUSxRQUFpQixDQUFDO1FBQXZCQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ25DLEdBQUssQ0FBcUJILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCSSxLQUFLLEdBQWNKLEdBQVksS0FBeEJLLFFBQVEsR0FBSUwsR0FBWTtJQUN0QyxNQUFNLDZFQUNIQyw4Q0FBVzs7d0ZBQ1RBLDBDQUFPOzBCQUFDLENBQWU7Ozs7Ozt3RkFDdkJBLHlDQUFNOztnR0FDSkYsd0RBQUs7d0JBQ0pVLElBQUksRUFBQyxDQUFNO3dCQUNYQyxXQUFXLEVBQUMsQ0FBYzt3QkFDMUJDLEtBQUssRUFBQyxDQUFjO3dCQUNwQkMsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzs0QkFBS1IsTUFBTSxDQUFOQSxRQUFRLENBQUNRLENBQUMsQ0FBQ0MsTUFBTSxDQUFDVixLQUFLOzs7Ozs7O2dHQUV6Q0gsMkNBQVE7d0JBQUNlLE9BQU8sRUFBRSxRQUFROzRCQUFGYixNQUFNLENBQU5BLFFBQVEsQ0FBQ0MsS0FBSzs7a0NBQUcsQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdELENBQUM7R0FoQllGLFVBQVU7S0FBVkEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZGRQcm9qZWN0L2luZGV4LnRzeD9jOGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tIFwiY29tcG9uZW50cy9JbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uU3VibWl0OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFkZFByb2plY3QgPSAoeyBvblN1Ym1pdCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgIDxTLlRpdGxlPkFkZCBOZXcgUHJvamVjdDwvUy5UaXRsZT5cbiAgICAgIDxTLkZvcm0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2plY3QgbmFtZVwiXG4gICAgICAgICAgbGFiZWw9XCJQcm9qZWN0IE5hbWVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8Uy5CdXR0b24gb25DbGljaz17KCkgPT4gb25TdWJtaXQodmFsdWUpfT5BZGQgUHJvamVjdDwvUy5CdXR0b24+XG4gICAgICA8L1MuRm9ybT5cbiAgICA8L1MuQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbnB1dCIsInVzZVN0YXRlIiwiUyIsIkFkZFByb2plY3QiLCJvblN1Ym1pdCIsInZhbHVlIiwic2V0VmFsdWUiLCJDb250YWluZXIiLCJUaXRsZSIsIkZvcm0iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIkJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddProject/index.tsx\n");

/***/ })

});
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

/***/ "./src/components/UpdateNameModal/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/UpdateNameModal/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UpdateNameModal\": function() { return /* binding */ UpdateNameModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Input */ \"./src/components/Input/index.tsx\");\n/* harmony import */ var hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useClickOutside */ \"./src/hooks/useClickOutside.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/UpdateNameModal/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UpdateNameModal = function(param) {\n    var onSubmit = param.onSubmit, isOpen = param.isOpen, onClose = param.onClose;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_2__.useClickOutside)(ref1, onClose);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Title, {\n                children: \"Update Name\"\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/UpdateNameModal/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                placeholder: \"Update name\",\n                onChange: function(e) {\n                    return setName(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/UpdateNameModal/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                children: \"Update\"\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/UpdateNameModal/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/UpdateNameModal/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_s(UpdateNameModal, \"RbhQ7tv9P/juDhsMbbOP9d3kZMw=\", false, function() {\n    return [\n        hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_2__.useClickOutside\n    ];\n});\n_c = UpdateNameModal;\nvar _c;\n$RefreshReg$(_c, \"UpdateNameModal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGRhdGVOYW1lTW9kYWwvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDbUI7QUFDZjtBQUNYOzs7QUFRdEIsR0FBSyxDQUFDSyxlQUFlLEdBQUcsUUFBUSxRQUFrQyxDQUFDO1FBQXhDQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLE9BQU8sU0FBUEEsT0FBTzs7SUFDekQsR0FBSyxDQUFtQkwsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBNUJNLElBQUksR0FBYU4sR0FBWSxLQUF2Qk8sT0FBTyxHQUFJUCxHQUFZO0lBRXBDLEdBQUssQ0FBQ1EsSUFBRyxHQUFHVCw2Q0FBTSxDQUFDLElBQUk7SUFDdkJELHNFQUFlLENBQUNVLElBQUcsRUFBRUgsT0FBTztJQUU1QixNQUFNLDZFQUNISiw4Q0FBVzs7d0ZBQ1RBLDBDQUFPOzBCQUFDLENBQVc7Ozs7Ozt3RkFDbkJKLHdEQUFLO2dCQUNKYyxXQUFXLEVBQUMsQ0FBYTtnQkFDekJDLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7b0JBQUtOLE1BQU0sQ0FBTkEsT0FBTyxDQUFDTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozt3RkFFeENkLDJDQUFROzBCQUFDLENBQU07Ozs7Ozs7Ozs7OztBQUd0QixDQUFDO0dBaEJZQyxlQUFlOztRQUkxQkosa0VBQWU7OztLQUpKSSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VwZGF0ZU5hbWVNb2RhbC9pbmRleC50c3g/ODA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvSW5wdXRcIjtcbmltcG9ydCB7IHVzZUNsaWNrT3V0c2lkZSB9IGZyb20gXCJob29rcy91c2VDbGlja091dHNpZGVcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uU3VibWl0OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgVXBkYXRlTmFtZU1vZGFsID0gKHsgb25TdWJtaXQsIGlzT3Blbiwgb25DbG9zZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUNsaWNrT3V0c2lkZShyZWYsIG9uQ2xvc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyPlxuICAgICAgPFMuVGl0bGU+VXBkYXRlIE5hbWU8L1MuVGl0bGU+XG4gICAgICA8SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJVcGRhdGUgbmFtZVwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPFMuQnV0dG9uPlVwZGF0ZTwvUy5CdXR0b24+XG4gICAgPC9TLkNvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW5wdXQiLCJ1c2VDbGlja091dHNpZGUiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlMiLCJVcGRhdGVOYW1lTW9kYWwiLCJvblN1Ym1pdCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJuYW1lIiwic2V0TmFtZSIsInJlZiIsIkNvbnRhaW5lciIsIlRpdGxlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UpdateNameModal/index.tsx\n");

/***/ })

});
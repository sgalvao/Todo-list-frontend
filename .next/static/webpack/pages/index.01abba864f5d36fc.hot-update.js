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

/***/ "./src/components/Homepage/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Homepage/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var components_AddProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/AddProject */ \"./src/components/AddProject/index.tsx\");\n/* harmony import */ var components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ProjectCard */ \"./src/components/ProjectCard/index.tsx\");\n/* harmony import */ var graphql_mutations_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/mutations/project */ \"./src/graphql/mutations/project.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Base */ \"./src/components/Base/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./src/components/Homepage/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Homepage = function(data) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(data.loadProjects), projects = ref[0], setProjects = ref[1];\n    var ref1 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation)(graphql_mutations_project__WEBPACK_IMPORTED_MODULE_3__.CREATE_PROJECT), 1), createProject = ref1[0];\n    var handleAddProject = function(project) {\n        try {\n            createProject({\n                variables: {\n                    name: project.name\n                }\n            });\n            setProjects(_toConsumableArray(projects).concat([\n                project\n            ]));\n        } catch (e) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(e.message);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Base__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_7__.ContentBox, {\n                children: [\n                    projects.map(function(project) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__.ProjectCard, _objectSpread({}, project), project.id, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Homepage/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_AddProject__WEBPACK_IMPORTED_MODULE_1__.AddProject, {}, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Homepage/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Homepage/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Homepage/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Homepage/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this));\n};\n_s(Homepage, \"kHP7/PH6BD8wSUOs1uzWM69I1Xc=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation\n    ];\n});\n_c = Homepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lcGFnZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTTtBQUNFO0FBQ007QUFDMUI7QUFDTTtBQUVaO0FBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLEdBQUssQ0FBQ1EsUUFBUSxHQUFHLFFBQVEsQ0FBUEMsSUFBbUIsRUFBSyxDQUFDOzs7SUFDekMsR0FBSyxDQUEyQkwsR0FBMkIsR0FBM0JBLCtDQUFRLENBQUNLLElBQUksQ0FBQ0MsWUFBWSxHQUFuREMsUUFBUSxHQUFpQlAsR0FBMkIsS0FBMUNRLFdBQVcsR0FBSVIsR0FBMkI7SUFDM0QsR0FBSyxDQUFtQkosSUFBMkIsa0JBQTNCQSwyREFBVyxDQUFDRyxxRUFBYyxPQUEzQ1UsYUFBYSxHQUFJYixJQUEyQjtJQUNuRCxHQUFLLENBQUNjLGdCQUFnQixHQUFHLFFBQVEsQ0FBUEMsT0FBZ0IsRUFBSyxDQUFDO1FBQzlDLEdBQUcsQ0FBQyxDQUFDO1lBQ0hGLGFBQWEsQ0FBQyxDQUFDO2dCQUNiRyxTQUFTLEVBQUUsQ0FBQztvQkFDVkMsSUFBSSxFQUFFRixPQUFPLENBQUNFLElBQUk7Z0JBQ3BCLENBQUM7WUFDSCxDQUFDO1lBQ0RMLFdBQVcsb0JBQUtELFFBQVEsU0FBWixDQUFDO2dCQUFhSSxPQUFPO1lBQUEsQ0FBQztRQUNwQyxDQUFDLENBQUMsS0FBSyxFQUFFRyxDQUFDLEVBQU8sQ0FBQztZQUNoQmIsdURBQVcsQ0FBQ2EsQ0FBQyxDQUFDRSxPQUFPO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSGQsNkNBQUk7OEZBQ0ZDLDhDQUFXO2tHQUNUQSwrQ0FBWTs7b0JBQ1ZJLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLFFBQVEsQ0FBUFIsT0FBTztzQ0FDcEIsTUFBTSwrREFBTGIsK0RBQVcsb0JBQXNCYSxPQUFPLEdBQXZCQSxPQUFPLENBQUNTLEVBQUU7Ozs7OztnR0FFN0J2Qiw2REFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCLENBQUM7R0E1QktPLFFBQVE7O1FBRVlSLHVEQUFXOzs7S0FGL0JRLFFBQVE7QUE4QmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lcGFnZS9pbmRleC50c3g/OWUzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgQWRkUHJvamVjdCB9IGZyb20gXCJjb21wb25lbnRzL0FkZFByb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RDYXJkIH0gZnJvbSBcImNvbXBvbmVudHMvUHJvamVjdENhcmRcIjtcbmltcG9ydCB7IENSRUFURV9QUk9KRUNUIH0gZnJvbSBcImdyYXBocWwvbXV0YXRpb25zL3Byb2plY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdHNQcm9wcyB9IGZyb20gXCJ0eXBlcy9hcGlcIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuLi9CYXNlXCI7XG5cbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEhvbWVwYWdlID0gKGRhdGE6IFByb2plY3RzUHJvcHMpID0+IHtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShkYXRhLmxvYWRQcm9qZWN0cyk7XG4gIGNvbnN0IFtjcmVhdGVQcm9qZWN0XSA9IHVzZU11dGF0aW9uKENSRUFURV9QUk9KRUNUKTtcbiAgY29uc3QgaGFuZGxlQWRkUHJvamVjdCA9IChwcm9qZWN0OiBQcm9qZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNyZWF0ZVByb2plY3Qoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHNldFByb2plY3RzKFsuLi5wcm9qZWN0cywgcHJvamVjdF0pO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgdG9hc3QuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QmFzZT5cbiAgICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgICAgPFMuQ29udGVudEJveD5cbiAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8UHJvamVjdENhcmQga2V5PXtwcm9qZWN0LmlkfSB7Li4ucHJvamVjdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8QWRkUHJvamVjdCAvPlxuICAgICAgICA8L1MuQ29udGVudEJveD5cbiAgICAgIDwvUy5Db250YWluZXI+XG4gICAgPC9CYXNlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2U7XG4iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJBZGRQcm9qZWN0IiwiUHJvamVjdENhcmQiLCJDUkVBVEVfUFJPSkVDVCIsInVzZVN0YXRlIiwidG9hc3QiLCJCYXNlIiwiUyIsIkhvbWVwYWdlIiwiZGF0YSIsImxvYWRQcm9qZWN0cyIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJjcmVhdGVQcm9qZWN0IiwiaGFuZGxlQWRkUHJvamVjdCIsInByb2plY3QiLCJ2YXJpYWJsZXMiLCJuYW1lIiwiZSIsImVycm9yIiwibWVzc2FnZSIsIkNvbnRhaW5lciIsIkNvbnRlbnRCb3giLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Homepage/index.tsx\n");

/***/ }),

/***/ "./src/graphql/mutations/project.ts":
/*!******************************************!*\
  !*** ./src/graphql/mutations/project.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_PROJECT\": function() { return /* binding */ CREATE_PROJECT; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation CreateProject($name: String) {\\n    createProject(name: $name) {\\n      name\\n      id\\n      tasks {\\n        id\\n        name\\n        description\\n        status\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar CREATE_PROJECT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9tdXRhdGlvbnMvcHJvamVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7Ozs7Ozs7Ozs7Ozs7UUFFRixDQWFsQzs7Ozs7OztBQWJPLEdBQUssQ0FBQ0MsY0FBYyxHQUFHRCxtREFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ3JhcGhxbC9tdXRhdGlvbnMvcHJvamVjdC50cz81MjhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BST0pFQ1QgPSBncWxgXG4gIG11dGF0aW9uIENyZWF0ZVByb2plY3QoJG5hbWU6IFN0cmluZykge1xuICAgIGNyZWF0ZVByb2plY3QobmFtZTogJG5hbWUpIHtcbiAgICAgIG5hbWVcbiAgICAgIGlkXG4gICAgICB0YXNrcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgc3RhdHVzXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbImdxbCIsIkNSRUFURV9QUk9KRUNUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/mutations/project.ts\n");

/***/ })

});
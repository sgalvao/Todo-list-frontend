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

/***/ "./src/components/Task/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Task/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Task/styles.ts\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var hooks_useDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useDate */ \"./src/hooks/useDate.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Task = function(param) {\n    var task = param.task, onChange = param.onChange, onRemove = param.onRemove, status = param.status;\n    _s();\n    console.log(task);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {\n                onClick: function() {\n                    return task.status === \"DONE\" ? null : onChange(task.id);\n                },\n                children: task.status === \"DONE\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineCheck, {\n                    size: 12\n                }, void 0, false, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 36\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ContentBox, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                            children: task.name\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Description, {\n                            children: task.description\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this),\n                        task.finishedAt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.FinishedTask, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.FinishedTaskText, {\n                                children: [\n                                    \"Task finished at: \",\n                                    (0,hooks_useDate__WEBPACK_IMPORTED_MODULE_2__.useDate)(task.finishedAt)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            task.status !== \"DONE\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.RemoveTask, {\n                onClick: function() {\n                    return onRemove(task.id);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsTrash, {\n                    size: 16\n                }, void 0, false, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this));\n};\n_s(Task, \"7RuHMJrKLZdC5RQHFLghGMbz5eI=\", false, function() {\n    return [\n        hooks_useDate__WEBPACK_IMPORTED_MODULE_2__.useDate\n    ];\n});\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXNrL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDa0I7QUFDUDtBQUVEOzs7QUFTaEMsR0FBSyxDQUFDSSxJQUFJLEdBQUcsUUFBUSxRQUE4QyxDQUFDO1FBQXBEQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxNQUFNLFNBQU5BLE1BQU07O0lBQ3JEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsSUFBSTtJQUVoQixNQUFNLDZFQUNITCw4Q0FBVzs7d0ZBQ1RBLDZDQUFVO2dCQUNUYSxPQUFPLEVBQUUsUUFBUTtvQkFBRixNQUFNTCxDQUFMSCxJQUFJLENBQUNHLE1BQU0sS0FBSyxDQUFNLFFBQUcsSUFBSSxHQUFHRixRQUFRLENBQUNELElBQUksQ0FBQ1MsRUFBRTs7MEJBRS9EVCxJQUFJLENBQUNHLE1BQU0sS0FBSyxDQUFNLHFGQUFLUCwwREFBYztvQkFBQ2MsSUFBSSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7O3dGQUVwRGYsK0NBQVk7c0dBQ1ZBLDRDQUFTOztvR0FDUEEsMENBQU87c0NBQUVLLElBQUksQ0FBQ2MsSUFBSTs7Ozs7O29HQUNsQm5CLGdEQUFhO3NDQUFFSyxJQUFJLENBQUNnQixXQUFXOzs7Ozs7d0JBQy9CaEIsSUFBSSxDQUFDaUIsVUFBVSxnRkFDYnRCLGlEQUFjO2tIQUNaQSxxREFBa0I7O29DQUFDLENBQ0E7b0NBQUNHLHNEQUFPLENBQUNFLElBQUksQ0FBQ2lCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTW5EakIsSUFBSSxDQUFDRyxNQUFNLEtBQUssQ0FBTSxxRkFDcEJSLCtDQUFZO2dCQUFDYSxPQUFPLEVBQUUsUUFBUTtvQkFBRk4sTUFBTSxDQUFOQSxRQUFRLENBQUNGLElBQUksQ0FBQ1MsRUFBRTs7c0dBQzFDWixtREFBTztvQkFBQ2EsSUFBSSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCLENBQUM7R0E5QllYLElBQUk7O1FBaUJrQkQsa0RBQU87OztLQWpCN0JDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFzay9pbmRleC50c3g/OTRkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgQWlPdXRsaW5lQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IEJzVHJhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IFRhc2tQcm9wcyB9IGZyb20gXCJ0eXBlcy9hcGlcIjtcbmltcG9ydCB7IHVzZURhdGUgfSBmcm9tIFwiaG9va3MvdXNlRGF0ZVwiO1xuXG5pbnRlcmZhY2UgSVRhc2tQcm9wcyB7XG4gIHRhc2s6IFRhc2tQcm9wcztcbiAgb25DaGFuZ2U6ICh0YXNrSWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb25SZW1vdmU6ICh0YXNrSWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgc3RhdHVzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKHsgdGFzaywgb25DaGFuZ2UsIG9uUmVtb3ZlLCBzdGF0dXMgfTogSVRhc2tQcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyh0YXNrKTtcblxuICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgIDxTLkNoZWNrYm94XG4gICAgICAgIG9uQ2xpY2s9eygpID0+ICh0YXNrLnN0YXR1cyA9PT0gXCJET05FXCIgPyBudWxsIDogb25DaGFuZ2UodGFzay5pZCkpfVxuICAgICAgPlxuICAgICAgICB7dGFzay5zdGF0dXMgPT09IFwiRE9ORVwiICYmIDxBaU91dGxpbmVDaGVjayBzaXplPXsxMn0gLz59XG4gICAgICA8L1MuQ2hlY2tib3g+XG4gICAgICA8Uy5Db250ZW50Qm94PlxuICAgICAgICA8Uy5XcmFwcGVyPlxuICAgICAgICAgIDxTLlRpdGxlPnt0YXNrLm5hbWV9PC9TLlRpdGxlPlxuICAgICAgICAgIDxTLkRlc2NyaXB0aW9uPnt0YXNrLmRlc2NyaXB0aW9ufTwvUy5EZXNjcmlwdGlvbj5cbiAgICAgICAgICB7dGFzay5maW5pc2hlZEF0ICYmIChcbiAgICAgICAgICAgIDxTLkZpbmlzaGVkVGFzaz5cbiAgICAgICAgICAgICAgPFMuRmluaXNoZWRUYXNrVGV4dD5cbiAgICAgICAgICAgICAgICBUYXNrIGZpbmlzaGVkIGF0OiB7dXNlRGF0ZSh0YXNrLmZpbmlzaGVkQXQpfVxuICAgICAgICAgICAgICA8L1MuRmluaXNoZWRUYXNrVGV4dD5cbiAgICAgICAgICAgIDwvUy5GaW5pc2hlZFRhc2s+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICA8L1MuQ29udGVudEJveD5cbiAgICAgIHt0YXNrLnN0YXR1cyAhPT0gXCJET05FXCIgJiYgKFxuICAgICAgICA8Uy5SZW1vdmVUYXNrIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlKHRhc2suaWQpfT5cbiAgICAgICAgICA8QnNUcmFzaCBzaXplPXsxNn0gLz5cbiAgICAgICAgPC9TLlJlbW92ZVRhc2s+XG4gICAgICApfVxuICAgIDwvUy5Db250YWluZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlMiLCJBaU91dGxpbmVDaGVjayIsIkJzVHJhc2giLCJ1c2VEYXRlIiwiVGFzayIsInRhc2siLCJvbkNoYW5nZSIsIm9uUmVtb3ZlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsIkNvbnRhaW5lciIsIkNoZWNrYm94Iiwib25DbGljayIsImlkIiwic2l6ZSIsIkNvbnRlbnRCb3giLCJXcmFwcGVyIiwiVGl0bGUiLCJuYW1lIiwiRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImZpbmlzaGVkQXQiLCJGaW5pc2hlZFRhc2siLCJGaW5pc2hlZFRhc2tUZXh0IiwiUmVtb3ZlVGFzayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Task/index.tsx\n");

/***/ })

});
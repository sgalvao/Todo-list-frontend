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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Task/styles.ts\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var hooks_useDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useDate */ \"./src/hooks/useDate.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Task = function(param) {\n    var task = param.task, onChange = param.onChange, onRemove = param.onRemove;\n    _s();\n    console.log(task);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {\n                onClick: function() {\n                    return task.status === \"DONE\" ? null : onChange(task.id);\n                },\n                children: task.status === \"DONE\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineCheck, {\n                    size: 12\n                }, void 0, false, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 36\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ContentBox, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                                children: task.name\n                            }, void 0, false, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Description, {\n                                children: task.description\n                            }, void 0, false, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.FinishedTask, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.FinishedTaskText, {\n                                    children: [\n                                        \"Task finished at: \",\n                                        (0,hooks_useDate__WEBPACK_IMPORTED_MODULE_2__.useDate)(task.finishedAt)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    task.status !== \"DONE\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.RemoveTask, {\n                        onClick: function() {\n                            return onRemove(task.id);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsTrash, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/Task/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this));\n};\n_s(Task, \"7RuHMJrKLZdC5RQHFLghGMbz5eI=\", false, function() {\n    return [\n        hooks_useDate__WEBPACK_IMPORTED_MODULE_2__.useDate\n    ];\n});\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXNrL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDa0I7QUFDUDtBQUVEOzs7QUFRaEMsR0FBSyxDQUFDSSxJQUFJLEdBQUcsUUFBUSxRQUFzQyxDQUFDO1FBQTVDQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDN0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJO0lBRWhCLE1BQU0sNkVBQ0hMLDhDQUFXOzt3RkFDVEEsNkNBQVU7Z0JBQ1RZLE9BQU8sRUFBRSxRQUFRO29CQUFGLE1BQU1DLENBQUxSLElBQUksQ0FBQ1EsTUFBTSxLQUFLLENBQU0sUUFBRyxJQUFJLEdBQUdQLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDUyxFQUFFOzswQkFFL0RULElBQUksQ0FBQ1EsTUFBTSxLQUFLLENBQU0scUZBQUtaLDBEQUFjO29CQUFDYyxJQUFJLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7d0ZBRXBEZiwrQ0FBWTs7Z0dBQ1ZBLDRDQUFTOzt3R0FDUEEsMENBQU87MENBQUVLLElBQUksQ0FBQ2MsSUFBSTs7Ozs7O3dHQUNsQm5CLGdEQUFhOzBDQUFFSyxJQUFJLENBQUNnQixXQUFXOzs7Ozs7d0dBQy9CckIsaURBQWM7c0hBQ1pBLHFEQUFrQjs7d0NBQUMsQ0FDQTt3Q0FBQ0csc0RBQU8sQ0FBQ0UsSUFBSSxDQUFDbUIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUkvQ25CLElBQUksQ0FBQ1EsTUFBTSxLQUFLLENBQU0scUZBQ3BCYiwrQ0FBWTt3QkFBQ1ksT0FBTyxFQUFFLFFBQVE7NEJBQUZMLE1BQU0sQ0FBTkEsUUFBUSxDQUFDRixJQUFJLENBQUNTLEVBQUU7OzhHQUMxQ1osbURBQU87NEJBQUNhLElBQUksRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03QixDQUFDO0dBNUJZWCxJQUFJOztRQWdCZ0JELGtEQUFPOzs7S0FoQjNCQyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Rhc2svaW5kZXgudHN4Pzk0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEFpT3V0bGluZUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBCc1RyYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBUYXNrUHJvcHMgfSBmcm9tIFwidHlwZXMvYXBpXCI7XG5pbXBvcnQgeyB1c2VEYXRlIH0gZnJvbSBcImhvb2tzL3VzZURhdGVcIjtcblxuaW50ZXJmYWNlIElUYXNrUHJvcHMge1xuICB0YXNrOiBUYXNrUHJvcHM7XG4gIG9uQ2hhbmdlOiAodGFza0lkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlOiAodGFza0lkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKHsgdGFzaywgb25DaGFuZ2UsIG9uUmVtb3ZlIH06IElUYXNrUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2codGFzayk7XG5cbiAgcmV0dXJuIChcbiAgICA8Uy5Db250YWluZXI+XG4gICAgICA8Uy5DaGVja2JveFxuICAgICAgICBvbkNsaWNrPXsoKSA9PiAodGFzay5zdGF0dXMgPT09IFwiRE9ORVwiID8gbnVsbCA6IG9uQ2hhbmdlKHRhc2suaWQpKX1cbiAgICAgID5cbiAgICAgICAge3Rhc2suc3RhdHVzID09PSBcIkRPTkVcIiAmJiA8QWlPdXRsaW5lQ2hlY2sgc2l6ZT17MTJ9IC8+fVxuICAgICAgPC9TLkNoZWNrYm94PlxuICAgICAgPFMuQ29udGVudEJveD5cbiAgICAgICAgPFMuV3JhcHBlcj5cbiAgICAgICAgICA8Uy5UaXRsZT57dGFzay5uYW1lfTwvUy5UaXRsZT5cbiAgICAgICAgICA8Uy5EZXNjcmlwdGlvbj57dGFzay5kZXNjcmlwdGlvbn08L1MuRGVzY3JpcHRpb24+XG4gICAgICAgICAgPFMuRmluaXNoZWRUYXNrPlxuICAgICAgICAgICAgPFMuRmluaXNoZWRUYXNrVGV4dD5cbiAgICAgICAgICAgICAgVGFzayBmaW5pc2hlZCBhdDoge3VzZURhdGUodGFzay5maW5pc2hlZEF0KX1cbiAgICAgICAgICAgIDwvUy5GaW5pc2hlZFRhc2tUZXh0PlxuICAgICAgICAgIDwvUy5GaW5pc2hlZFRhc2s+XG4gICAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgICB7dGFzay5zdGF0dXMgIT09IFwiRE9ORVwiICYmIChcbiAgICAgICAgICA8Uy5SZW1vdmVUYXNrIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlKHRhc2suaWQpfT5cbiAgICAgICAgICAgIDxCc1RyYXNoIHNpemU9ezE2fSAvPlxuICAgICAgICAgIDwvUy5SZW1vdmVUYXNrPlxuICAgICAgICApfVxuICAgICAgPC9TLkNvbnRlbnRCb3g+XG4gICAgPC9TLkNvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUyIsIkFpT3V0bGluZUNoZWNrIiwiQnNUcmFzaCIsInVzZURhdGUiLCJUYXNrIiwidGFzayIsIm9uQ2hhbmdlIiwib25SZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiQ29udGFpbmVyIiwiQ2hlY2tib3giLCJvbkNsaWNrIiwic3RhdHVzIiwiaWQiLCJzaXplIiwiQ29udGVudEJveCIsIldyYXBwZXIiLCJUaXRsZSIsIm5hbWUiLCJEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiRmluaXNoZWRUYXNrIiwiRmluaXNoZWRUYXNrVGV4dCIsImZpbmlzaGVkQXQiLCJSZW1vdmVUYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Task/index.tsx\n");

/***/ })

});
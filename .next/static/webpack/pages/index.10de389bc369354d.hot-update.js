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

/***/ "./src/components/ProjectCard/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ProjectCard/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectCard\": function() { return /* binding */ ProjectCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/ProjectCard/styles.ts\");\n/* harmony import */ var components_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Task */ \"./src/components/Task/index.tsx\");\n/* harmony import */ var components_AddTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/AddTask */ \"./src/components/AddTask/index.tsx\");\n/* harmony import */ var components_UpdateNameModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UpdateNameModal */ \"./src/components/UpdateNameModal/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectCard = function(param) {\n    var project = param.project, onRemove = param.onRemove, onUpdate = param.onUpdate;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(project.name), projectName = ref1[0], setProjectName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openUpdate = ref2[0], setOpenUpdate = ref2[1];\n    var handleClose = function() {\n        setIsOpen(false);\n    };\n    var handleChange = function() {\n        console.log(\"fois\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_UpdateNameModal__WEBPACK_IMPORTED_MODULE_5__.UpdateNameModal, {}, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Info, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                        children: projectName\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.EditInfo, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiEdit3, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.RemoveProject, {\n                        onClick: function() {\n                            return onRemove(project.id);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsTrash, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Content, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.TodoList, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                                children: \"Todo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, _this),\n                            project.tasks.map(function(task) {\n                                if (task.status === \"todo\") {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Task__WEBPACK_IMPORTED_MODULE_3__.Task, {\n                                        task: task,\n                                        onChange: handleChange\n                                    }, task.id, false, {\n                                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 22\n                                    }, _this1));\n                                }\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.DoneList, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                                children: \"Done\"\n                            }, void 0, false, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            project.tasks.map(function(task) {\n                                if (task.status === \"DONE\") {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Task__WEBPACK_IMPORTED_MODULE_3__.Task, {\n                                        task: task,\n                                        onChange: handleChange\n                                    }, task.id, false, {\n                                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 22\n                                    }, _this1));\n                                }\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.AddTaskButton, {\n                            onClick: function() {\n                                return setIsOpen(true);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlinePlus, {\n                                size: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_AddTask__WEBPACK_IMPORTED_MODULE_4__.AddTaskModal, {\n                isOpen: isOpen,\n                onClose: handleClose\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProjectCard, \"4Z09f/S/SKd9VS4odE0gQAA0rKc=\");\n_c = ProjectCard;\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFFUTtBQUNBO0FBQ007QUFFakI7QUFDUztBQUNXO0FBRVc7OztBQVFyRCxHQUFLLENBQUNRLFdBQVcsR0FBRyxRQUN0QixRQUdtQixDQUFDO1FBSHZCQyxPQUFPLFNBQVBBLE9BQU8sRUFDUEMsUUFBUSxTQUFSQSxRQUFRLEVBQ1JDLFFBQVEsU0FBUkEsUUFBUTs7O0lBRVIsR0FBSyxDQUF1QlgsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBbkNZLE1BQU0sR0FBZVosR0FBZSxLQUE1QmEsU0FBUyxHQUFJYixHQUFlO0lBRTNDLEdBQUssQ0FBaUNBLElBQXNCLEdBQXRCQSwrQ0FBUSxDQUFDUyxPQUFPLENBQUNLLElBQUksR0FBcERDLFdBQVcsR0FBb0JmLElBQXNCLEtBQXhDZ0IsY0FBYyxHQUFJaEIsSUFBc0I7SUFFNUQsR0FBSyxDQUErQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NpQixVQUFVLEdBQW1CakIsSUFBZSxLQUFoQ2tCLGFBQWEsR0FBSWxCLElBQWU7SUFFbkQsR0FBSyxDQUFDbUIsV0FBVyxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7UUFDekJOLFNBQVMsQ0FBQyxLQUFLO0lBQ2pCLENBQUM7SUFFRCxHQUFLLENBQUNPLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFNO0lBQ3BCLENBQUM7SUFFRCxNQUFNLDZFQUNIbEIsOENBQVc7O3dGQUNURyx1RUFBZTs7Ozs7d0ZBQ2ZILHlDQUFNOztnR0FDSkEsMENBQU87a0NBQUVXLFdBQVc7Ozs7OztnR0FDcEJYLDZDQUFVOzhHQUNSSCxtREFBTzs0QkFBQzBCLElBQUksRUFBRSxFQUFFOzs7Ozs7Ozs7OztnR0FFbEJ2QixrREFBZTt3QkFBQ3lCLE9BQU8sRUFBRSxRQUFROzRCQUFGbkIsTUFBTSxDQUFOQSxRQUFRLENBQUNELE9BQU8sQ0FBQ3FCLEVBQUU7OzhHQUNoRDVCLG1EQUFPOzRCQUFDeUIsSUFBSSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUdwQnZCLDRDQUFTOzs7Ozt3RkFDVEEsNENBQVM7O2dHQUNQQSw2Q0FBVTs7d0dBQ1JBLDBDQUFPOzBDQUFDLENBQUk7Ozs7Ozs0QkFDWkssT0FBTyxDQUFDeUIsS0FBSyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztnQ0FDNUIsRUFBRSxFQUFFQSxJQUFJLENBQUNDLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztvQ0FDM0IsTUFBTSw2RUFBRWhDLGlEQUFJO3dDQUFlK0IsSUFBSSxFQUFFQSxJQUFJO3dDQUFFRSxRQUFRLEVBQUVsQixZQUFZO3VDQUEzQ2dCLElBQUksQ0FBQ04sRUFBRTs7Ozs7Z0NBQzNCLENBQUM7NEJBQ0gsQ0FBQzs7Ozs7OztnR0FFRjFCLDZDQUFVOzt3R0FDUkEsMENBQU87MENBQUMsQ0FBSTs7Ozs7OzRCQUNaSyxPQUFPLENBQUN5QixLQUFLLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO2dDQUM1QixFQUFFLEVBQUVBLElBQUksQ0FBQ0MsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO29DQUMzQixNQUFNLDZFQUFFaEMsaURBQUk7d0NBQWUrQixJQUFJLEVBQUVBLElBQUk7d0NBQUVFLFFBQVEsRUFBRWxCLFlBQVk7dUNBQTNDZ0IsSUFBSSxDQUFDTixFQUFFOzs7OztnQ0FDM0IsQ0FBQzs0QkFDSCxDQUFDOzs7Ozs7O2dHQUdGMUIsNENBQVM7OEdBQ1BBLGtEQUFlOzRCQUFDeUIsT0FBTyxFQUFFLFFBQVE7Z0NBQUZoQixNQUFNLENBQU5BLFNBQVMsQ0FBQyxJQUFJOztrSEFDM0NWLHlEQUFhO2dDQUFDd0IsSUFBSSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSTVCckIsNERBQVk7Z0JBQUNNLE1BQU0sRUFBRUEsTUFBTTtnQkFBRThCLE9BQU8sRUFBRXZCLFdBQVc7Ozs7Ozs7Ozs7OztBQUd4RCxDQUFDO0dBM0RZWCxXQUFXO0tBQVhBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQvaW5kZXgudHN4P2JmN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgRmlFZGl0MyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgQnNUcmFzaCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgQWlPdXRsaW5lUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuXG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCJjb21wb25lbnRzL1Rhc2tcIjtcbmltcG9ydCB7IEFkZFRhc2tNb2RhbCB9IGZyb20gXCJjb21wb25lbnRzL0FkZFRhc2tcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwidHlwZXMvYXBpXCI7XG5pbXBvcnQgeyBVcGRhdGVOYW1lTW9kYWwgfSBmcm9tIFwiY29tcG9uZW50cy9VcGRhdGVOYW1lTW9kYWxcIjtcblxuaW50ZXJmYWNlIFByb2plY3RDYXJkUHJvcHMge1xuICBwcm9qZWN0OiBQcm9qZWN0O1xuICBvblJlbW92ZTogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVXBkYXRlOiAoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUHJvamVjdENhcmQgPSAoe1xuICBwcm9qZWN0LFxuICBvblJlbW92ZSxcbiAgb25VcGRhdGUsXG59OiBQcm9qZWN0Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZShwcm9qZWN0Lm5hbWUpO1xuXG4gIGNvbnN0IFtvcGVuVXBkYXRlLCBzZXRPcGVuVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZvaXNcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Uy5Db250YWluZXI+XG4gICAgICA8VXBkYXRlTmFtZU1vZGFsIC8+XG4gICAgICA8Uy5JbmZvPlxuICAgICAgICA8Uy5UaXRsZT57cHJvamVjdE5hbWV9PC9TLlRpdGxlPlxuICAgICAgICA8Uy5FZGl0SW5mbz5cbiAgICAgICAgICA8RmlFZGl0MyBzaXplPXsxNn0gLz5cbiAgICAgICAgPC9TLkVkaXRJbmZvPlxuICAgICAgICA8Uy5SZW1vdmVQcm9qZWN0IG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlKHByb2plY3QuaWQpfT5cbiAgICAgICAgICA8QnNUcmFzaCBzaXplPXsxNn0gLz5cbiAgICAgICAgPC9TLlJlbW92ZVByb2plY3Q+XG4gICAgICA8L1MuSW5mbz5cbiAgICAgIDxTLkRpdmlkZXIgLz5cbiAgICAgIDxTLkNvbnRlbnQ+XG4gICAgICAgIDxTLlRvZG9MaXN0PlxuICAgICAgICAgIDxTLlRpdGxlPlRvZG88L1MuVGl0bGU+XG4gICAgICAgICAge3Byb2plY3QudGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5zdGF0dXMgPT09IFwidG9kb1wiKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8VGFzayBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1MuVG9kb0xpc3Q+XG4gICAgICAgIDxTLkRvbmVMaXN0PlxuICAgICAgICAgIDxTLlRpdGxlPkRvbmU8L1MuVGl0bGU+XG4gICAgICAgICAge3Byb2plY3QudGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5zdGF0dXMgPT09IFwiRE9ORVwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8VGFzayBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1MuRG9uZUxpc3Q+XG5cbiAgICAgICAgPFMuV3JhcHBlcj5cbiAgICAgICAgICA8Uy5BZGRUYXNrQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0+XG4gICAgICAgICAgICA8QWlPdXRsaW5lUGx1cyBzaXplPXsxNn0gLz5cbiAgICAgICAgICA8L1MuQWRkVGFza0J1dHRvbj5cbiAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICA8L1MuQ29udGVudD5cbiAgICAgIDxBZGRUYXNrTW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSAvPlxuICAgIDwvUy5Db250YWluZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmlFZGl0MyIsIkJzVHJhc2giLCJBaU91dGxpbmVQbHVzIiwiUyIsIlRhc2siLCJBZGRUYXNrTW9kYWwiLCJVcGRhdGVOYW1lTW9kYWwiLCJQcm9qZWN0Q2FyZCIsInByb2plY3QiLCJvblJlbW92ZSIsIm9uVXBkYXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibmFtZSIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJvcGVuVXBkYXRlIiwic2V0T3BlblVwZGF0ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIkNvbnRhaW5lciIsIkluZm8iLCJUaXRsZSIsIkVkaXRJbmZvIiwic2l6ZSIsIlJlbW92ZVByb2plY3QiLCJvbkNsaWNrIiwiaWQiLCJEaXZpZGVyIiwiQ29udGVudCIsIlRvZG9MaXN0IiwidGFza3MiLCJtYXAiLCJ0YXNrIiwic3RhdHVzIiwib25DaGFuZ2UiLCJEb25lTGlzdCIsIldyYXBwZXIiLCJBZGRUYXNrQnV0dG9uIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProjectCard/index.tsx\n");

/***/ }),

/***/ "./src/components/UpdateNameModal/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/UpdateNameModal/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UpdateNameModal\": function() { return /* binding */ UpdateNameModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Input */ \"./src/components/Input/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UpdateNameModal/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar UpdateNameModal = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                children: \"Update Name\"\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/UpdateNameModal/index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/UpdateNameModal/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                children: \"Update\"\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/UpdateNameModal/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/UpdateNameModal/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this));\n};\n_c = UpdateNameModal;\nvar _c;\n$RefreshReg$(_c, \"UpdateNameModal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGRhdGVOYW1lTW9kYWwvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFDUDs7QUFFdEIsR0FBSyxDQUFDRSxlQUFlLEdBQUcsUUFDL0IsR0FEcUMsQ0FBQztJQUNwQyxNQUFNLDZFQUNIRCw4Q0FBVzs7d0ZBQ1RBLDBDQUFPOzBCQUFDLENBQVc7Ozs7Ozt3RkFDbkJELHdEQUFLOzs7Ozt3RkFDTEMsMkNBQVE7MEJBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O0FBR3RCLENBQUM7S0FSWUMsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VcGRhdGVOYW1lTW9kYWwvaW5kZXgudHN4PzgwNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gXCJjb21wb25lbnRzL0lucHV0XCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5leHBvcnQgY29uc3QgVXBkYXRlTmFtZU1vZGFsID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgIDxTLlRpdGxlPlVwZGF0ZSBOYW1lPC9TLlRpdGxlPlxuICAgICAgPElucHV0IC8+XG4gICAgICA8Uy5CdXR0b24+VXBkYXRlPC9TLkJ1dHRvbj5cbiAgICA8L1MuQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbnB1dCIsIlMiLCJVcGRhdGVOYW1lTW9kYWwiLCJDb250YWluZXIiLCJUaXRsZSIsIkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UpdateNameModal/index.tsx\n");

/***/ }),

/***/ "./src/components/UpdateNameModal/styles.ts":
/*!**************************************************!*\
  !*** ./src/components/UpdateNameModal/styles.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"Button\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  position: absolute;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 2rem;\\n  font-weight: bold;\\n  color: #fff;\\n  margin-bottom: 1rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  height: 50px;\\n  border-radius: 5px;\\n  border: none;\\n  background-color: #00bcd4;\\n  color: white;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n  cursor: pointer;\\n  margin-top: 10px;\\n  margin-bottom: 10px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject1());\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject2());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGRhdGVOYW1lTW9kYWwvc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDOzs7Ozs7Ozs7Ozs7O1FBRUYsQ0FRcEM7Ozs7Ozs7OztRQUUrQixDQUsvQjs7Ozs7Ozs7O1FBRW9DLENBWXBDOzs7Ozs7O0FBN0JPLEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCw2REFBVTtBQVU1QixHQUFLLENBQUNHLEtBQUssR0FBR0gsNERBQVM7QUFPdkIsR0FBSyxDQUFDSyxNQUFNLEdBQUdMLGdFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VwZGF0ZU5hbWVNb2RhbC9zdHlsZXMudHM/ZTFkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIlRpdGxlIiwiaDEiLCJCdXR0b24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UpdateNameModal/styles.ts\n");

/***/ })

});
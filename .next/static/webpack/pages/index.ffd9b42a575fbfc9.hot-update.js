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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectCard\": function() { return /* binding */ ProjectCard; }\n/* harmony export */ });\n/* harmony import */ var _Users_silviogabrielpimentagalvao_Desktop_development_bolttech_todo_list_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_silviogabrielpimentagalvao_Desktop_development_bolttech_todo_list_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_silviogabrielpimentagalvao_Desktop_development_bolttech_todo_list_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/ProjectCard/styles.ts\");\n/* harmony import */ var components_Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Task */ \"./src/components/Task/index.tsx\");\n/* harmony import */ var components_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AddTask */ \"./src/components/AddTask/index.tsx\");\n/* harmony import */ var components_UpdateNameModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UpdateNameModal */ \"./src/components/UpdateNameModal/index.tsx\");\n/* harmony import */ var graphql_mutations_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql/mutations/task */ \"./src/graphql/mutations/task.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectCard = function(param1) {\n    var project = param1.project, onRemove = param1.onRemove, onUpdate = param1.onUpdate;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(project.name), projectName = ref1[0], setProjectName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openUpdate = ref2[0], setOpenUpdate = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(project.tasks), tasks = ref3[0], setTasks = ref3[1];\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)(), session = ref4.data;\n    var handleClose = function() {\n        setIsOpen(false);\n    };\n    var handleUpdateClose = function() {\n        setOpenUpdate(false);\n    };\n    var handleUpdate = function(newName) {\n        onUpdate(project.id, newName);\n        setProjectName(newName);\n        handleUpdateClose();\n    };\n    var ref5 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(graphql_mutations_task__WEBPACK_IMPORTED_MODULE_7__.CREATE_TASK), 1), createTask = ref5[0];\n    var handleCreateTask = function() {\n        var _ref = _asyncToGenerator(_Users_silviogabrielpimentagalvao_Desktop_development_bolttech_todo_list_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var name, description;\n            return _Users_silviogabrielpimentagalvao_Desktop_development_bolttech_todo_list_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        name = param.name, description = param.description;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return createTask({\n                            variables: {\n                                task: {\n                                    projectId: project.id,\n                                    name: name,\n                                    description: description\n                                }\n                            },\n                            context: {\n                                session: session\n                            }\n                        });\n                    case 4:\n                        handleClose();\n                        react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success(\"Task created successfully\");\n                        _ctx.next = 12;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(project.id);\n                        react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(_ctx.t0.message);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function handleCreateTask(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleChange = function() {\n        console.log(\"change\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_UpdateNameModal__WEBPACK_IMPORTED_MODULE_6__.UpdateNameModal, {\n                onClose: handleClose,\n                isOpen: openUpdate,\n                onSubmit: handleUpdate\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Info, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                        children: projectName\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.EditInfo, {\n                        onClick: function() {\n                            return setOpenUpdate(true);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__.FiEdit3, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.RemoveProject, {\n                        onClick: function() {\n                            return onRemove(project.id);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__.BsTrash, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Divider, {}, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Content, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.TodoList, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                                children: \"Todo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, _this),\n                            tasks.map(function(task) {\n                                if (task.status === \"todo\") {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Task__WEBPACK_IMPORTED_MODULE_4__.Task, {\n                                        task: task,\n                                        onChange: handleChange\n                                    }, task.id, false, {\n                                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 22\n                                    }, _this1));\n                                }\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.DoneList, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                                children: \"Done\"\n                            }, void 0, false, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, _this),\n                            tasks.map(function(task) {\n                                if (task.status === \"DONE\") {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Task__WEBPACK_IMPORTED_MODULE_4__.Task, {\n                                        task: task,\n                                        onChange: handleChange\n                                    }, task.id, false, {\n                                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 22\n                                    }, _this1));\n                                }\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.AddTaskButton, {\n                            onClick: function() {\n                                return setIsOpen(true);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__.AiOutlinePlus, {\n                                size: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_AddTask__WEBPACK_IMPORTED_MODULE_5__.AddTaskModal, {\n                isOpen: isOpen,\n                onClose: handleClose,\n                onSubmit: handleCreateTask\n            }, void 0, false, {\n                fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/components/ProjectCard/index.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProjectCard, \"XILQ0OjccYaJ9K9/JlAWui2BLXg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation\n    ];\n});\n_c = ProjectCard;\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUVRO0FBQ0E7QUFDTTtBQUVqQjtBQUNTO0FBQ1c7QUFFVztBQUNSO0FBQ1I7QUFDQTtBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhL0IsR0FBSyxDQUFDWSxXQUFXLEdBQUcsUUFDdEIsU0FHbUIsQ0FBQztRQUh2QkMsT0FBTyxVQUFQQSxPQUFPLEVBQ1BDLFFBQVEsVUFBUkEsUUFBUSxFQUNSQyxRQUFRLFVBQVJBLFFBQVE7OztJQUVSLEdBQUssQ0FBdUJmLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5DZ0IsTUFBTSxHQUFlaEIsR0FBZSxLQUE1QmlCLFNBQVMsR0FBSWpCLEdBQWU7SUFDM0MsR0FBSyxDQUFpQ0EsSUFBc0IsR0FBdEJBLCtDQUFRLENBQUNhLE9BQU8sQ0FBQ0ssSUFBSSxHQUFwREMsV0FBVyxHQUFvQm5CLElBQXNCLEtBQXhDb0IsY0FBYyxHQUFJcEIsSUFBc0I7SUFDNUQsR0FBSyxDQUErQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NxQixVQUFVLEdBQW1CckIsSUFBZSxLQUFoQ3NCLGFBQWEsR0FBSXRCLElBQWU7SUFFbkQsR0FBSyxDQUFxQkEsSUFBdUIsR0FBdkJBLCtDQUFRLENBQUNhLE9BQU8sQ0FBQ1UsS0FBSyxHQUF6Q0EsS0FBSyxHQUFjdkIsSUFBdUIsS0FBbkN3QixRQUFRLEdBQUl4QixJQUF1QjtJQUVqRCxHQUFLLENBQXFCVSxJQUFZLEdBQVpBLDJEQUFVLElBQXRCZSxPQUFPLEdBQUtmLElBQVksQ0FBOUJnQixJQUFJO0lBRVosR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUN6QlYsU0FBUyxDQUFDLEtBQUs7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TUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO29DQUMzQixNQUFNLDZFQUFFckQsaURBQUk7d0NBQWUrQixJQUFJLEVBQUVBLElBQUk7d0NBQUV1QixRQUFRLEVBQUVmLFlBQVk7dUNBQTNDUixJQUFJLENBQUNMLEVBQUU7Ozs7O2dDQUMzQixDQUFDOzRCQUNILENBQUM7Ozs7Ozs7Z0dBRUYzQiw0Q0FBUzs4R0FDUEEsa0RBQWU7NEJBQUMrQyxPQUFPLEVBQUUsUUFBUTtnQ0FBRmxDLE1BQU0sQ0FBTkEsU0FBUyxDQUFDLElBQUk7O2tIQUMzQ2QsMERBQWE7Z0NBQUNpRCxJQUFJLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJNUI5Qyw0REFBWTtnQkFDWFUsTUFBTSxFQUFFQSxNQUFNO2dCQUNkOEIsT0FBTyxFQUFFbkIsV0FBVztnQkFDcEJvQixRQUFRLEVBQUVkLGdCQUFnQjs7Ozs7Ozs7Ozs7O0FBSWxDLENBQUM7R0FwR1lyQixXQUFXOztRQVdJRix1REFBVTtRQWdCZkQsd0RBQVc7OztLQTNCckJHLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQvaW5kZXgudHN4P2JmN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgRmlFZGl0MyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgQnNUcmFzaCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgQWlPdXRsaW5lUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuXG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCJjb21wb25lbnRzL1Rhc2tcIjtcbmltcG9ydCB7IEFkZFRhc2tNb2RhbCB9IGZyb20gXCJjb21wb25lbnRzL0FkZFRhc2tcIjtcbmltcG9ydCB7IFByb2plY3QsIFRhc2tQcm9wcyB9IGZyb20gXCJ0eXBlcy9hcGlcIjtcbmltcG9ydCB7IFVwZGF0ZU5hbWVNb2RhbCB9IGZyb20gXCJjb21wb25lbnRzL1VwZGF0ZU5hbWVNb2RhbFwiO1xuaW1wb3J0IHsgQ1JFQVRFX1RBU0sgfSBmcm9tIFwiZ3JhcGhxbC9tdXRhdGlvbnMvdGFza1wiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5pbnRlcmZhY2UgUHJvamVjdENhcmRQcm9wcyB7XG4gIHByb2plY3Q6IFByb2plY3Q7XG4gIG9uUmVtb3ZlOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb25VcGRhdGU6IChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBGb3JtVmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUHJvamVjdENhcmQgPSAoe1xuICBwcm9qZWN0LFxuICBvblJlbW92ZSxcbiAgb25VcGRhdGUsXG59OiBQcm9qZWN0Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUocHJvamVjdC5uYW1lKTtcbiAgY29uc3QgW29wZW5VcGRhdGUsIHNldE9wZW5VcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUocHJvamVjdC50YXNrcyk7XG5cbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuVXBkYXRlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSAobmV3TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgb25VcGRhdGUocHJvamVjdC5pZCwgbmV3TmFtZSk7XG4gICAgc2V0UHJvamVjdE5hbWUobmV3TmFtZSk7XG4gICAgaGFuZGxlVXBkYXRlQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBbY3JlYXRlVGFza10gPSB1c2VNdXRhdGlvbihDUkVBVEVfVEFTSyk7XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlVGFzayA9IGFzeW5jICh7IG5hbWUsIGRlc2NyaXB0aW9uIH06IEZvcm1WYWx1ZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY3JlYXRlVGFzayh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgIHByb2plY3RJZDogcHJvamVjdC5pZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjb250ZXh0OiB7IHNlc3Npb24gfSxcbiAgICAgIH0pO1xuICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJUYXNrIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdC5pZCk7XG4gICAgICB0b2FzdC5lcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2VcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Uy5Db250YWluZXI+XG4gICAgICA8VXBkYXRlTmFtZU1vZGFsXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBpc09wZW49e29wZW5VcGRhdGV9XG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVVcGRhdGV9XG4gICAgICAvPlxuICAgICAgPFMuSW5mbz5cbiAgICAgICAgPFMuVGl0bGU+e3Byb2plY3ROYW1lfTwvUy5UaXRsZT5cbiAgICAgICAgPFMuRWRpdEluZm8gb25DbGljaz17KCkgPT4gc2V0T3BlblVwZGF0ZSh0cnVlKX0+XG4gICAgICAgICAgPEZpRWRpdDMgc2l6ZT17MTZ9IC8+XG4gICAgICAgIDwvUy5FZGl0SW5mbz5cbiAgICAgICAgPFMuUmVtb3ZlUHJvamVjdCBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZShwcm9qZWN0LmlkKX0+XG4gICAgICAgICAgPEJzVHJhc2ggc2l6ZT17MTZ9IC8+XG4gICAgICAgIDwvUy5SZW1vdmVQcm9qZWN0PlxuICAgICAgPC9TLkluZm8+XG4gICAgICA8Uy5EaXZpZGVyIC8+XG4gICAgICA8Uy5Db250ZW50PlxuICAgICAgICA8Uy5Ub2RvTGlzdD5cbiAgICAgICAgICA8Uy5UaXRsZT5Ub2RvPC9TLlRpdGxlPlxuICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gXCJ0b2RvXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUy5Ub2RvTGlzdD5cbiAgICAgICAgPFMuRG9uZUxpc3Q+XG4gICAgICAgICAgPFMuVGl0bGU+RG9uZTwvUy5UaXRsZT5cbiAgICAgICAgICB7dGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5zdGF0dXMgPT09IFwiRE9ORVwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8VGFzayBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1MuRG9uZUxpc3Q+XG4gICAgICAgIDxTLldyYXBwZXI+XG4gICAgICAgICAgPFMuQWRkVGFza0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9PlxuICAgICAgICAgICAgPEFpT3V0bGluZVBsdXMgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgPC9TLkFkZFRhc2tCdXR0b24+XG4gICAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgPC9TLkNvbnRlbnQ+XG4gICAgICA8QWRkVGFza01vZGFsXG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUNyZWF0ZVRhc2t9XG4gICAgICAvPlxuICAgIDwvUy5Db250YWluZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmlFZGl0MyIsIkJzVHJhc2giLCJBaU91dGxpbmVQbHVzIiwiUyIsIlRhc2siLCJBZGRUYXNrTW9kYWwiLCJVcGRhdGVOYW1lTW9kYWwiLCJDUkVBVEVfVEFTSyIsInVzZU11dGF0aW9uIiwidXNlU2Vzc2lvbiIsInRvYXN0IiwiUHJvamVjdENhcmQiLCJwcm9qZWN0Iiwib25SZW1vdmUiLCJvblVwZGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsIm5hbWUiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwib3BlblVwZGF0ZSIsInNldE9wZW5VcGRhdGUiLCJ0YXNrcyIsInNldFRhc2tzIiwic2Vzc2lvbiIsImRhdGEiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVVwZGF0ZUNsb3NlIiwiaGFuZGxlVXBkYXRlIiwibmV3TmFtZSIsImlkIiwiY3JlYXRlVGFzayIsImhhbmRsZUNyZWF0ZVRhc2siLCJkZXNjcmlwdGlvbiIsInZhcmlhYmxlcyIsInRhc2siLCJwcm9qZWN0SWQiLCJjb250ZXh0Iiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJDb250YWluZXIiLCJvbkNsb3NlIiwib25TdWJtaXQiLCJJbmZvIiwiVGl0bGUiLCJFZGl0SW5mbyIsIm9uQ2xpY2siLCJzaXplIiwiUmVtb3ZlUHJvamVjdCIsIkRpdmlkZXIiLCJDb250ZW50IiwiVG9kb0xpc3QiLCJtYXAiLCJzdGF0dXMiLCJvbkNoYW5nZSIsIkRvbmVMaXN0IiwiV3JhcHBlciIsIkFkZFRhc2tCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProjectCard/index.tsx\n");

/***/ })

});
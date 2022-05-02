/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styles_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var utils_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/apollo */ \"./src/utils/apollo.ts\");\n\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps: { session , ...pageProps }  })=>{\n    const client = (0,utils_apollo__WEBPACK_IMPORTED_MODULE_7__.useApollo)(pageProps, session);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n            client: client,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Todo List - Project\"\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/pages/_app.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Todo list application\"\n                        }, void 0, false, {\n                            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/pages/_app.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/pages/_app.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/pages/_app.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styles_global__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/pages/_app.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/pages/_app.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/pages/_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/silviogabrielpimentagalvao/Desktop/development/bolttech-todo-list-frontend/src/pages/_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNFO0FBRXJCO0FBQ21CO0FBQ0Q7QUFDTjtBQUNBO0FBRXhDLEtBQUssQ0FBQ00sR0FBRyxJQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUUsQ0FBQyxDQUFDQyxPQUFPLE1BQUtELFNBQVMsQ0FBQyxDQUFDLEVBQVcsQ0FBQyxHQUFLLENBQUM7SUFDOUUsS0FBSyxDQUFDRSxNQUFNLEdBQUdMLHVEQUFTLENBQUNHLFNBQVMsRUFBRUMsT0FBTztJQUMzQyxNQUFNLDZFQUNIUiw0REFBZTtRQUFDUSxPQUFPLEVBQUVELFNBQVMsQ0FBQ0MsT0FBTzs4RkFDeENULDBEQUFjO1lBQUNVLE1BQU0sRUFBRUEsTUFBTTs7NEZBQzNCUixrREFBSTs7b0dBQ0ZTLENBQUs7c0NBQUMsQ0FBbUI7Ozs7OztvR0FFekJDLENBQUk7NEJBQUNDLElBQUksRUFBQyxDQUFhOzRCQUFDQyxPQUFPLEVBQUMsQ0FBdUI7Ozs7Ozs7Ozs7Ozs0RkFFekRYLDBEQUFjOzs7Ozs0RkFDZEMscURBQVk7Ozs7OzRGQUNaRyxTQUFTO3VCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHQtYm9pbGVycGxhY2UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gXCJzdHlsZXMvZ2xvYmFsXCI7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwidXRpbHMvYXBvbGxvXCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH06IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMsIHNlc3Npb24pO1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlRvZG8gTGlzdCAtIFByb2plY3Q8L3RpdGxlPlxuXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRvZG8gbGlzdCBhcHBsaWNhdGlvblwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsIlNlc3Npb25Qcm92aWRlciIsIkhlYWQiLCJUb2FzdENvbnRhaW5lciIsIkdsb2JhbFN0eWxlcyIsInVzZUFwb2xsbyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJjbGllbnQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  html, body, #__next {\n    height: 100%;\n  }\n\n  body {\n    background-color: #202124;\n    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n    \n  }\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFFckQsS0FBSyxDQUFDQyxXQUFXLEdBQUdELGdFQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdEM7QUFFQSxpRUFBZUMsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbmV4dC1ib2lsZXJwbGFjZS8uL3NyYy9zdHlsZXMvZ2xvYmFsLnRzPzBmZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gIH1cblxuICBodG1sLCBib2R5LCAjX19uZXh0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTI0O1xuICAgIGZvbnQtZmFtaWx5OiAtLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXG4gICAgXG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/utils/apollo.ts":
/*!*****************************!*\
  !*** ./src/utils/apollo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createApolloClient\": () => (/* binding */ createApolloClient),\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"addApolloState\": () => (/* binding */ addApolloState),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/context */ \"@apollo/client/link/context\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ \"lodash/isEqual\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nlet apolloClient;\nconst createApolloClient = (session)=>{\n    const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n        uri: \"http://localhost:9000/graphql\"\n    });\n    const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__.setContext)((_, { headers , session: clientSession  })=>{\n        const jwt = session?.accessToken || clientSession?.accessToken || \"\";\n        const authorization = jwt ? jwt : \"\";\n        return {\n            headers: {\n                ...headers,\n                authorization\n            }\n        };\n    });\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        ssrMode: \"undefined\" === \"undefined\",\n        link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.from)([\n            authLink,\n            httpLink\n        ]),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({})\n    });\n};\nfunction initializeApollo(initialState = null, session) {\n    const apolloClientGlobal = apolloClient ?? createApolloClient(session);\n    // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n    // gets hydrated here\n    const existingCache = apolloClientGlobal.extract();\n    if (initialState && existingCache) {\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(initialState, existingCache, {\n            // combine arrays using object equality (like in sets)\n            arrayMerge: (destinationArray, sourceArray)=>[\n                    ...sourceArray,\n                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d, s)\n                        )\n                    ), \n                ]\n        });\n        apolloClientGlobal.cache.restore(data);\n    }\n    // For SSG and SSR always create a new Apollo Client\n    if (true) return apolloClientGlobal;\n    // Create the Apollo Client once in the client\n    apolloClient = apolloClient ?? apolloClientGlobal;\n    return apolloClient;\n}\nfunction addApolloState(client, // eslint-disable-next-line @typescript-eslint/no-explicit-any\npageProps) {\n    if (pageProps?.props) {\n        pageProps.props[\"__APOLLO_STATE__\"] = client.cache.extract();\n    }\n    return pageProps;\n}\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nfunction useApollo(pageProps, session) {\n    const state = pageProps[\"__APOLLO_STATE__\"];\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state, session)\n    , [\n        state,\n        session\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEUsS0FBSyxDQUFDbUMsS0FBSyxHQUFHSCxTQUFTLENBQUMsQ0FBa0I7SUFDMUMsS0FBSyxDQUFDSSxLQUFLLEdBQUc5Qyw4Q0FBTyxLQUNiMEIsZ0JBQWdCLENBQUNtQixLQUFLLEVBQUVuQyxPQUFPO01BQ3JDLENBQUNtQztRQUFBQSxLQUFLO1FBQUVuQyxPQUFPO0lBQUEsQ0FBQztJQUVsQixNQUFNLENBQUNvQyxLQUFLO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHQtYm9pbGVycGxhY2UvLi9zcmMvdXRpbHMvYXBvbGxvLnRzP2U4MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBIdHRwTGluayxcbiAgTm9ybWFsaXplZENhY2hlT2JqZWN0LFxuICBJbk1lbW9yeUNhY2hlLFxuICBmcm9tLFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0XCI7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCJkZWVwbWVyZ2VcIjtcbmltcG9ydCBpc0VxdWFsIGZyb20gXCJsb2Rhc2gvaXNFcXVhbFwiO1xuXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0IHwgbnVsbD47XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcG9sbG9DbGllbnQgPSAoc2Vzc2lvbj86IFNlc3Npb24gfCBudWxsKSA9PiB7XG4gIGNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKHtcbiAgICB1cmk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dSQVBIUUxfSE9TVCxcbiAgfSk7XG5cbiAgY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMsIHNlc3Npb246IGNsaWVudFNlc3Npb24gfSkgPT4ge1xuICAgIGNvbnN0IGp3dCA9IHNlc3Npb24/LmFjY2Vzc1Rva2VuIHx8IGNsaWVudFNlc3Npb24/LmFjY2Vzc1Rva2VuIHx8IFwiXCI7XG4gICAgY29uc3QgYXV0aG9yaXphdGlvbiA9IGp3dCA/IGp3dCA6IFwiXCI7XG4gICAgcmV0dXJuIHsgaGVhZGVyczogeyAuLi5oZWFkZXJzLCBhdXRob3JpemF0aW9uIH0gfTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIsXG4gICAgbGluazogZnJvbShbYXV0aExpbmssIGh0dHBMaW5rXSksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHt9KSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhcbiAgaW5pdGlhbFN0YXRlOiBOb3JtYWxpemVkQ2FjaGVPYmplY3QgfCBudWxsID0gbnVsbCxcbiAgc2Vzc2lvbj86IFNlc3Npb24gfCBudWxsXG4pIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50R2xvYmFsID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudChzZXNzaW9uKTtcblxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXG4gIC8vIGdldHMgaHlkcmF0ZWQgaGVyZVxuICBjb25zdCBleGlzdGluZ0NhY2hlID0gYXBvbGxvQ2xpZW50R2xvYmFsLmV4dHJhY3QoKTtcbiAgaWYgKGluaXRpYWxTdGF0ZSAmJiBleGlzdGluZ0NhY2hlKSB7XG4gICAgY29uc3QgZGF0YSA9IG1lcmdlKGluaXRpYWxTdGF0ZSwgZXhpc3RpbmdDYWNoZSwge1xuICAgICAgLy8gY29tYmluZSBhcnJheXMgdXNpbmcgb2JqZWN0IGVxdWFsaXR5IChsaWtlIGluIHNldHMpXG4gICAgICBhcnJheU1lcmdlOiAoZGVzdGluYXRpb25BcnJheSwgc291cmNlQXJyYXkpID0+IFtcbiAgICAgICAgLi4uc291cmNlQXJyYXksXG4gICAgICAgIC4uLmRlc3RpbmF0aW9uQXJyYXkuZmlsdGVyKChkKSA9PlxuICAgICAgICAgIHNvdXJjZUFycmF5LmV2ZXJ5KChzKSA9PiAhaXNFcXVhbChkLCBzKSlcbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBhcG9sbG9DbGllbnRHbG9iYWwuY2FjaGUucmVzdG9yZShkYXRhKTtcbiAgfVxuXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBhcG9sbG9DbGllbnRHbG9iYWw7XG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcbiAgYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGFwb2xsb0NsaWVudEdsb2JhbDtcblxuICByZXR1cm4gYXBvbGxvQ2xpZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXBvbGxvU3RhdGUoXG4gIGNsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdCB8IG51bGw+LFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBwYWdlUHJvcHM6IGFueVxuKSB7XG4gIGlmIChwYWdlUHJvcHM/LnByb3BzKSB7XG4gICAgcGFnZVByb3BzLnByb3BzW1wiX19BUE9MTE9fU1RBVEVfX1wiXSA9IGNsaWVudC5jYWNoZS5leHRyYWN0KCk7XG4gIH1cblxuICByZXR1cm4gcGFnZVByb3BzO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhwYWdlUHJvcHM6IGFueSwgc2Vzc2lvbjogU2Vzc2lvbiB8IG51bGwpIHtcbiAgY29uc3Qgc3RhdGUgPSBwYWdlUHJvcHNbXCJfX0FQT0xMT19TVEFURV9fXCJdO1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhzdGF0ZSwgc2Vzc2lvbiksXG4gICAgW3N0YXRlLCBzZXNzaW9uXVxuICApO1xuICByZXR1cm4gc3RvcmU7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImZyb20iLCJzZXRDb250ZXh0IiwibWVyZ2UiLCJpc0VxdWFsIiwiYXBvbGxvQ2xpZW50IiwiY3JlYXRlQXBvbGxvQ2xpZW50Iiwic2Vzc2lvbiIsImh0dHBMaW5rIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dSQVBIUUxfSE9TVCIsImF1dGhMaW5rIiwiXyIsImhlYWRlcnMiLCJjbGllbnRTZXNzaW9uIiwiand0IiwiYWNjZXNzVG9rZW4iLCJhdXRob3JpemF0aW9uIiwic3NyTW9kZSIsImxpbmsiLCJjYWNoZSIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJhcG9sbG9DbGllbnRHbG9iYWwiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsImRhdGEiLCJhcnJheU1lcmdlIiwiZGVzdGluYXRpb25BcnJheSIsInNvdXJjZUFycmF5IiwiZmlsdGVyIiwiZCIsImV2ZXJ5IiwicyIsInJlc3RvcmUiLCJhZGRBcG9sbG9TdGF0ZSIsImNsaWVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwidXNlQXBvbGxvIiwic3RhdGUiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/apollo.ts\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
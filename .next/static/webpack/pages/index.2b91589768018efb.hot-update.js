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

/***/ "./src/components/Homepage/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/Homepage/styles.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"ContentBox\": function() { return /* binding */ ContentBox; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-media-query */ \"./node_modules/styled-media-query/dist/styled-media-query.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  width: 100%;\\n  align-items: center;\\n  justify-content: center;\\n  height: 100%;\\n  overflow: hidden;\\n  padding: 1rem 0;\\n  background-color: #202124;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: grid;\\n  width: 80%;\\n  grid-template-columns: repeat(2, 1fr);\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: grid;\\n  width: 80%;\\n  grid-template-columns: repeat(3, 1fr);\\n  \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100%;\\n  height: 60rem;\\n  overflow-y: scroll;\\n  ::-webkit-scrollbar {\\n    display: none;\\n  }\\n  gap: 1rem;\\n  border-radius: 1.6rem;\\n  padding: 1rem;\\n  margin: 0 auto;\\n  background-color: #494b4e;\\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\\n    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\\n  \",\n        \"\\n\\n  \",\n        \"\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3(), styled_media_query__WEBPACK_IMPORTED_MODULE_0__[\"default\"].greaterThan(\"medium\")(_templateObject1()), styled_media_query__WEBPACK_IMPORTED_MODULE_0__[\"default\"].greaterThan(\"large\")(_templateObject2()));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lcGFnZS9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDQTs7Ozs7Ozs7Ozs7OztRQUVGLENBU3BDOzs7Ozs7Ozs7UUFvQmdDLENBSTlCOzs7Ozs7Ozs7UUFFNkIsQ0FJN0I7Ozs7Ozs7OztRQTVCbUMsQ0FrQm5DO1FBSUUsQ0FFRjtRQUlFLENBQ0o7Ozs7Ozs7QUF4Q08sR0FBSyxDQUFDRSxTQUFTLEdBQUdGLDZEQUFVO0FBVzVCLEdBQUssQ0FBQ0ksVUFBVSxHQUFHSiw2REFBVSxxQkFrQmhDQyxzRUFBaUIsQ0FBQyxDQUFRLDhCQU0xQkEsc0VBQWlCLENBQUMsQ0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lcGFnZS9zdHlsZXMudHM/YWQ1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IG1lZGlhIGZyb20gXCJzdHlsZWQtbWVkaWEtcXVlcnlcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTI0O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRCb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjByZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBnYXA6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTRiNGU7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNjBweCAtMTJweCBpbnNldCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDtcbiAgJHttZWRpYS5ncmVhdGVyVGhhbihcIm1lZGl1bVwiKWBcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDgwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgYH1cblxuICAke21lZGlhLmdyZWF0ZXJUaGFuKFwibGFyZ2VcIilgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiA4MCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIm1lZGlhIiwiQ29udGFpbmVyIiwiZGl2IiwiQ29udGVudEJveCIsImdyZWF0ZXJUaGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Homepage/styles.ts\n");

/***/ })

});
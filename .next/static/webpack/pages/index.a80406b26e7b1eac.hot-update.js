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

/***/ "./src/components/Task/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Task/styles.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"ContentBox\": function() { return /* binding */ ContentBox; },\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"Checkbox\": function() { return /* binding */ Checkbox; },\n/* harmony export */   \"Description\": function() { return /* binding */ Description; },\n/* harmony export */   \"RemoveTask\": function() { return /* binding */ RemoveTask; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  width: 100%;\\n  margin: 1rem 0;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-start;\\n  width: 100%;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 1.4rem;\\n  font-weight: 700;\\n  color: #fff;\\n  margin-left: 1rem;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 2rem;\\n  height: 2rem;\\n  background-color: #fff;\\n  border-radius: 1.6rem;\\n  border: none;\\n\\n  svg {\\n    fill: #202124;\\n    transition: all 0.2s ease-in-out;\\n    animation: fadeIn 0.5s ease-in-out;\\n    &:hover {\\n      cursor: pointer;\\n      fill: #ff0000;\\n    }\\n\\n    @keyframes fadeIn {\\n      from {\\n        opacity: 0;\\n      }\\n      to {\\n        opacity: 1;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n  color: #fff;\\n  margin-left: 1rem;\\n  max-width: 28rem;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  line-clamp: 2;\\n  -webkit-line-clamp: 2;\\n  -webkit-box-orient: vertical;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 2.2rem;\\n  height: 2.2rem;\\n  background-color: #fff;\\n  border-radius: 1.6rem;\\n  border: none;\\n  margin-left: 2rem;\\n\\n  svg {\\n    fill: #202124;\\n    transition: all 0.2s ease-in-out;\\n    &:hover {\\n      cursor: pointer;\\n      fill: #ff0000;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject3());\nvar Checkbox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(_templateObject5());\nvar RemoveTask = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject6());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXNrL3N0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7Ozs7Ozs7Ozs7Ozs7UUFFRixDQUlwQzs7Ozs7Ozs7O1FBRXFDLENBS3JDOzs7Ozs7Ozs7UUFFa0M7Ozs7Ozs7OztRQUVILENBSy9COzs7Ozs7Ozs7UUFFbUMsQ0E0Qm5DOzs7Ozs7Ozs7UUFFdUMsQ0FXdkM7Ozs7Ozs7OztRQUVxQyxDQW1CckM7Ozs7Ozs7QUFwRk8sR0FBSyxDQUFDQyxTQUFTLEdBQUdELDZEQUFVO0FBTTVCLEdBQUssQ0FBQ0csVUFBVSxHQUFHSCw2REFBVTtBQU83QixHQUFLLENBQUNJLE9BQU8sR0FBR0osNkRBQVU7QUFFMUIsR0FBSyxDQUFDSyxLQUFLLEdBQUdMLDREQUFTO0FBT3ZCLEdBQUssQ0FBQ08sUUFBUSxHQUFHUCw2REFBVTtBQThCM0IsR0FBSyxDQUFDUSxXQUFXLEdBQUdSLDhEQUFXO0FBYS9CLEdBQUssQ0FBQ1UsVUFBVSxHQUFHViw2REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYXNrL3N0eWxlcy50cz82NjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxcmVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudEJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IENoZWNrYm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcbiAgYm9yZGVyOiBub25lO1xuXG4gIHN2ZyB7XG4gICAgZmlsbDogIzIwMjEyNDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZmlsbDogI2ZmMDAwMDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXgtd2lkdGg6IDI4cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuYDtcblxuZXhwb3J0IGNvbnN0IFJlbW92ZVRhc2sgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIuMnJlbTtcbiAgaGVpZ2h0OiAyLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcblxuICBzdmcge1xuICAgIGZpbGw6ICMyMDIxMjQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmaWxsOiAjZmYwMDAwO1xuICAgIH1cbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJDb250ZW50Qm94IiwiV3JhcHBlciIsIlRpdGxlIiwiaDEiLCJDaGVja2JveCIsIkRlc2NyaXB0aW9uIiwic3BhbiIsIlJlbW92ZVRhc2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Task/styles.ts\n");

/***/ })

});
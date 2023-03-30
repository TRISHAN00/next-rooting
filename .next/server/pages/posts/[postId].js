"use strict";
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
exports.id = "pages/posts/[postId]";
exports.ids = ["pages/posts/[postId]"];
exports.modules = {

/***/ "./pages/posts/[postId].jsx":
/*!**********************************!*\
  !*** ./pages/posts/[postId].jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"D:\\\\Office Practice\\\\medium\\\\pages\\\\posts\\\\[postId].jsx\";\n\n\n\n\n\nconst MyComponent = ({\n  post\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(StyledComponent, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      children: post?.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: post?.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst getStaticProps = async ({\n  params\n}) => {\n  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);\n  const data = await res.json();\n  return {\n    props: {\n      post: data\n    }\n  };\n};\nconst getStaticPaths = async () => {\n  const res = await fetch('https://jsonplaceholder.typicode.com/posts');\n  const posts = await res.json();\n  const paths = posts?.map(post => {\n    return {\n      params: {\n        postId: `${post.id}`\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst StyledComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({\n  displayName: \"postId__StyledComponent\",\n  componentId: \"sc-17hp6lm-0\"\n})([\"\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNRyxXQUFXLEdBQUcsQ0FBQztFQUFFQztBQUFGLENBQUQsS0FBYztFQUM5QixvQkFDSSw4REFBQyxlQUFEO0lBQUEsd0JBQ0k7TUFBQSxVQUFLQSxJQUFJLEVBQUVDO0lBQVg7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURKLGVBRUk7TUFBQSxVQUFJRCxJQUFJLEVBQUVFO0lBQVY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUZKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURKO0FBTUgsQ0FQRDs7QUFTTyxNQUFNQyxjQUFjLEdBQUcsT0FBTztFQUFFQztBQUFGLENBQVAsS0FBc0I7RUFDaEQsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSw4Q0FBNkNGLE1BQU0sRUFBRUcsTUFBTyxFQUE5RCxDQUF2QjtFQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNSCxHQUFHLENBQUNJLElBQUosRUFBbkI7RUFFQSxPQUFPO0lBQ0hDLEtBQUssRUFBRTtNQUNIVixJQUFJLEVBQUVRO0lBREg7RUFESixDQUFQO0FBS0gsQ0FUTTtBQVdBLE1BQU1HLGNBQWMsR0FBRyxZQUFZO0VBQ3RDLE1BQU1OLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsNENBQUQsQ0FBdkI7RUFDQSxNQUFNTSxLQUFLLEdBQUcsTUFBTVAsR0FBRyxDQUFDSSxJQUFKLEVBQXBCO0VBRUEsTUFBTUksS0FBSyxHQUFHRCxLQUFLLEVBQUVFLEdBQVAsQ0FBWWQsSUFBRCxJQUFVO0lBQy9CLE9BQU87TUFDSEksTUFBTSxFQUFHO1FBQ0xHLE1BQU0sRUFBRyxHQUFFUCxJQUFJLENBQUNlLEVBQUc7TUFEZDtJQUROLENBQVA7RUFLSCxDQU5hLENBQWQ7RUFRQSxPQUFPO0lBQ0hGLEtBREc7SUFFSEcsUUFBUSxFQUFFO0VBRlAsQ0FBUDtBQUlILENBaEJNO0FBa0JQLE1BQU1DLGVBQWUsR0FBR3BCLDJFQUFIO0VBQUE7RUFBQTtBQUFBLFFBQXJCO0FBRUEsaUVBQWVFLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kY2FzdGFsaWEtbmV4dC5qcy1hcHBsaWNhdGlvbi8uL3BhZ2VzL3Bvc3RzL1twb3N0SWRdLmpzeD9lYzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IE15Q29tcG9uZW50ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRDb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDxoMj57cG9zdD8udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHA+e3Bvc3Q/LmJvZHl9PC9wPlxyXG4gICAgICAgIDwvU3R5bGVkQ29tcG9uZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cGFyYW1zPy5wb3N0SWR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBvc3Q6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBwb3N0cz8ubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zIDoge1xyXG4gICAgICAgICAgICAgICAgcG9zdElkOiBgJHtwb3N0LmlkfWAsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkQ29tcG9uZW50ID0gc3R5bGVkLnNlY3Rpb25gYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJ1c2VSb3V0ZXIiLCJNeUNvbXBvbmVudCIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInJlcyIsImZldGNoIiwicG9zdElkIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicG9zdHMiLCJwYXRocyIsIm1hcCIsImlkIiwiZmFsbGJhY2siLCJTdHlsZWRDb21wb25lbnQiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[postId].jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[postId].jsx"));
module.exports = __webpack_exports__;

})();
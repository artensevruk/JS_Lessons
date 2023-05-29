"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateto_do_app"]("main",{

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteToDoButton: () => (/* binding */ deleteToDoButton),\n/* harmony export */   inlineForm: () => (/* binding */ inlineForm),\n/* harmony export */   toDoList: () => (/* binding */ toDoList),\n/* harmony export */   toDoListItem: () => (/* binding */ toDoListItem)\n/* harmony export */ });\n/* harmony import */ var create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-element */ \"../../createElement/index.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\nconst inlineForm = (onsubmit) => {\r\n  const input = (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\", { className: \"ToDoInput\" });\r\n  const button = (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\", {\r\n    type: \"submit\",\r\n    value: \"Add\",\r\n    className: \"AddButton\",\r\n  });\r\n\r\n  const inlineForm = (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"form\", [input, button]);\r\n\r\n  inlineForm.onsubmit = (event) => {\r\n    event.preventDefault();\r\n    onsubmit(input.value);\r\n    input.value = \"\";\r\n  };\r\n\r\n  return inlineForm;\r\n};\r\n\r\nconst deleteToDoButton = (toDo, onDeleted) => {\r\n  return (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\", {\r\n    value: \"Delete\",\r\n    className: \"delete\",\r\n    onclick: (event) => {\r\n      onDeleted();\r\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteElement)(toDo);\r\n    },\r\n  });\r\n};\r\n\r\nconst toDoListItem = (toDo) => {\r\n  const clickOnCheckBox = () => {\r\n    toDo.done = !toDo.done;\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.update)(toDo);\r\n  };\r\n\r\n  const onDeleted = () => {\r\n    domElement.remove();\r\n  };\r\n\r\n  const domElement = (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", { className: \"ToDoItem\" }, [\r\n    deleteToDoButton(toDo, onDeleted),\r\n    (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\", toDo.text),\r\n    (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\", {\r\n      type: \"checkbox\",\r\n      checked: toDo.done,\r\n      className: \"checkBox\",\r\n      onchange: clickOnCheckBox,\r\n    }),\r\n  ]);\r\n\r\n  return domElement;\r\n};\r\n\r\nconst toDoList = (toDos) => {\r\n  return (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    \"div\",\r\n    { className: \"toDoList\" },\r\n    toDos.map((toDo) => toDoListItem(toDo))\r\n  );\r\n};\r\n\n\n//# sourceURL=webpack://to-do-app/./src/components.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9b306214b6744fb4b1fb")
/******/ })();
/******/ 
/******/ }
);
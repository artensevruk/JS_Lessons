/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../createElement/index.js":
/*!************************************!*\
  !*** ../../createElement/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//createElement('div')\r\n//createElement(\"span\" , \"Hello world\")\r\n//createElement('div', [ul] )\r\n//createElement('input' , {type : 'text'}])\r\n\r\nconst createElement = (tagName, ...options) => {\r\n  const element = document.createElement(tagName);\r\n  for (const item of options) {\r\n    if (Array.isArray(item)) {\r\n      element.append(...item);\r\n    } else if (typeof item === \"object\") {\r\n      for (const key in item) {\r\n        const value = item[key];\r\n        element[key] = value;\r\n      }\r\n    } else {\r\n      element.innerText = item;\r\n    }\r\n  }\r\n\r\n  return element;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\r\n\n\n//# sourceURL=webpack://to-do-app/../../createElement/index.js?");

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteToDoButton: () => (/* binding */ deleteToDoButton),\n/* harmony export */   inlineForm: () => (/* binding */ inlineForm),\n/* harmony export */   toDoList: () => (/* binding */ toDoList),\n/* harmony export */   toDoListItem: () => (/* binding */ toDoListItem)\n/* harmony export */ });\n/* harmony import */ var create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-element */ \"../../createElement/index.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\nconst inlineForm = (onsubmit) => {\r\n  const input = (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\", { className: \"ToDoInput\" });\r\n  const button = (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\", {\r\n    type: \"submit\",\r\n    value: \"Add\",\r\n    className: \"AddButton\",\r\n  });\r\n\r\n  const inlineForm = (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"form\", [input, button]);\r\n\r\n  inlineForm.onsubmit = (event) => {\r\n    event.preventDefault();\r\n    onsubmit(input.value);\r\n    input.value = \"\";\r\n  };\r\n\r\n  return inlineForm;\r\n};\r\n\r\nconst deleteToDoButton = (toDo, onDeleted) => {\r\n  return (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\", {\r\n    value: \"Delete\",\r\n    className: \"delete\",\r\n    onclick: (event) => {\r\n      onDeleted();\r\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteElement)(toDo);\r\n    },\r\n  });\r\n};\r\n\r\nconst toDoListItem = (toDo) => {\r\n  const clickOnCheckBox = () => {\r\n    toDo.done = !toDo.done;\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.update)(toDo);\r\n  };\r\n\r\n  const onDeleted = () => {\r\n    domElement.remove();\r\n  };\r\n\r\n  const domElement = (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", { className: \"ToDoItem\" }, [\r\n    deleteToDoButton(toDo, onDeleted),\r\n    (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\", toDo.text),\r\n    (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\", {\r\n      type: \"checkbox\",\r\n      checked: toDo.done,\r\n      className: \"checkBox\",\r\n      onchange: clickOnCheckBox,\r\n    }),\r\n  ]);\r\n\r\n  return domElement;\r\n};\r\n\r\nconst toDoList = (toDos) => {\r\n  return (0,create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    \"div\",\r\n    { className: \"toDoList\" },\r\n    toDos.map((toDo) => toDoListItem(toDo))\r\n  );\r\n};\r\n\n\n//# sourceURL=webpack://to-do-app/./src/components.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ \"./src/toDo.js\");\n\r\nconsole.time(\"d\");\r\ndocument.body.append((0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.toDoApp)());\r\nconsole.timeEnd(\"d\");\r\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteElement: () => (/* binding */ deleteElement),\n/* harmony export */   readToDos: () => (/* binding */ readToDos),\n/* harmony export */   update: () => (/* binding */ update),\n/* harmony export */   writeToDo: () => (/* binding */ writeToDo)\n/* harmony export */ });\n\r\n\r\nconst toDosKey = \"toDos\";\r\nconst nextIdKey = \"nextId\";\r\nconst readToDos = () => {\r\n  const array = JSON.parse(localStorage.getItem(toDosKey)) || [];\r\n\r\n  let nextId = 0;\r\n\r\n  if (!localStorage.hasOwnProperty(nextIdKey)) {\r\n    localStorage.setItem(nextIdKey, nextId);\r\n  }\r\n\r\n  return array;\r\n};\r\n\r\nconst update = (updatedToDo) => {\r\n  const toDos = readToDos();\r\n  // const storedToDoIndex = toDos.findIndex(storedToDo => storedToDo.id === updatedToDo.id)\r\n  for (let i = 0; i < toDos.length; i++) {\r\n    if (toDos[i].id === updatedToDo.id) {\r\n      toDos[i] = updatedToDo;\r\n      writeJson(toDos);\r\n    }\r\n  }\r\n};\r\n\r\nconst writeJson = (array) => {\r\n  localStorage.setItem(toDosKey, JSON.stringify(array));\r\n};\r\n\r\nconst writeToDo = (toDo) => {\r\n  const array = readToDos();\r\n  let nextId = localStorage.getItem(nextIdKey);\r\n\r\n  nextId = +nextId + 1;\r\n  toDo.id = nextId;\r\n  localStorage.setItem(nextIdKey, nextId);\r\n\r\n  array.push(toDo);\r\n  writeJson(array);\r\n};\r\n\r\nconst deleteElement = (deleteElement) =>{\r\n  const array = readToDos();\r\n  let newArray =[]; \r\n  for(let i = 0 ; i < array.length; i++) {\r\n    if( array[i].id !== deleteElement.id){\r\n      newArray.push(array[i]);\r\n    }\r\n  }\r\n  writeJson(newArray);\r\n}\r\n\r\n// export function checkCheckbox(toDo) {\r\n//   const array = readToDos();\r\n//   const checkbox = document.querySelector(\"checkBox\");\r\n//   if (checkbox.checked) {\r\n\r\n//     let nextId = localStorage.getItem(nextIdKey);\r\n\r\n//     nextId = +nextId + 2;\r\n//     toDo.id = nextId;\r\n//     localStorage.setItem(nextIdKey, nextId);\r\n//     console.log(\"Checkbox is checked\");\r\n\r\n//     array.push(toDo);\r\n//     writeJson(array);\r\n//   } else {\r\n//     console.log(\"Checkbox is not checked\");\r\n//   }\r\n// }\r\n\n\n//# sourceURL=webpack://to-do-app/./src/storage.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toDoApp: () => (/* binding */ toDoApp)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n/* harmony import */ var create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! create-element */ \"../../createElement/index.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\nconst toDoApp = () => {\r\n  let array = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.readToDos)();\r\n  const form = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.inlineForm)((text) => {\r\n    const toDo = { text, done: false };\r\n    const div = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.toDoListItem)(toDo);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.writeToDo)(toDo);\r\n    list.append(div);\r\n  });\r\n  const list = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.toDoList)(array);\r\n  const div = (0,create_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", { className: \"toDoApp\" }, [form, list]);\r\n  return div;\r\n};\r\n\n\n//# sourceURL=webpack://to-do-app/./src/toDo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
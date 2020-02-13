/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/main.js":
/*!************************!*\
  !*** ./client/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pizza__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza */ \"./client/pizza.js\");\nconst getPizzaButton = document.getElementById('get-pizza')\nconst postPizzaButton = document.getElementById('post-pizza')\n\n\n\ngetPizzaButton.addEventListener('click', _pizza__WEBPACK_IMPORTED_MODULE_0__[\"getPizzas\"])\npostPizzaButton.addEventListener('click', _pizza__WEBPACK_IMPORTED_MODULE_0__[\"postPizza\"])\n\n\n//# sourceURL=webpack:///./client/main.js?");

/***/ }),

/***/ "./client/pizza.js":
/*!*************************!*\
  !*** ./client/pizza.js ***!
  \*************************/
/*! exports provided: getPizzas, postPizza */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPizzas\", function() { return getPizzas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postPizza\", function() { return postPizza; });\n//1) fetch the pizzas from our database using AJAX\n//2) create list elements using fetched pizzas\n\nconst ul = document.getElementById('pizza-ul')\n\nconst getPizzas = async () => {\n  // console.log('function to GET pizzas')\n  const response = await window.fetch('/api/pizzas')\n  const pizzas = await response.json()\n\n  pizzas.forEach(pizza => {\n    const li = document.createElement('li')\n    li.innerText = pizza.name\n    ul.appendChild(li)\n  })\n}\n\nconst postPizza = async () => {\n  // console.log('function to POST pizzas')\n  const newPizza = {name: 'mushroom'}\n  const response = await window.fetch('/api/pizzas', {\n    method: 'POST',\n    body: JSON.stringify(newPizza),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  })\n  const mushroomPizza = await response.json()\n  const li = document.createElement('li')\n  li.innerText = mushroomPizza.name\n  ul.appendChild(li)\n}\n\n\n//# sourceURL=webpack:///./client/pizza.js?");

/***/ })

/******/ });
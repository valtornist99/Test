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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ \"./js/user.js\");\n/* harmony import */ var _poke_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poke.js */ \"./js/poke.js\");\n\r\n\r\n\r\n\r\n\r\nfunction main() {\r\n  //userInfo().then(alert);\r\n  Object(_user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n  button.addEventListener('click', _poke_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n}\r\n\r\n\r\n\r\nmain();\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/poke.js":
/*!********************!*\
  !*** ./js/poke.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pokeInfo; });\n\r\nasync function pokeInfo(){\r\n\r\n  let pokeId = prompt(\"Pokemon ID\", 1);\r\n  if(pokeId == null) {\r\n    return;\r\n  }\r\n\r\n  cont.innerHTML = '<h1>Pokemon info</h1>';\r\n\r\n  let pokeObj = {\r\n    name: \"\",\r\n    ab1: \"-\",\r\n    ab2: \"-\",\r\n    ab3: \"-\"\r\n  }\r\n\r\n  let urlPoke = 'https://pokeapi.co/api/v2/pokemon/' + pokeId + '/';\r\n  let responsePoke = await fetch(urlPoke);\r\n  let poke = await responsePoke.json();\r\n\r\n  pokeObj.name = poke.forms[0].name\r\n\r\n  let abs = poke.abilities;\r\n  for(let i = 0; i < abs.length; i++){\r\n    let urlAb = abs[i].ability.url;\r\n    let responseAb = await fetch(urlAb);\r\n    let pokeAb = await responseAb.json();\r\n\r\n    let abName = 'ab' + (i + 1);\r\n    pokeObj[abName] = pokeAb.effect_entries[0].effect;\r\n  }\r\n\r\n  cont.insertAdjacentHTML('beforeend', `<strong>${pokeObj.name}</strong>\r\n                                        <ol>\r\n                                          <li>${pokeObj.ab1}</li>\r\n                                          <li>${pokeObj.ab2}</li>\r\n                                          <li>${pokeObj.ab3}</li>\r\n                                        </ol>`);\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./js/poke.js?");

/***/ }),

/***/ "./js/user.js":
/*!********************!*\
  !*** ./js/user.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userInfo; });\n\r\nasync function userInfo(){\r\n  cont.innerHTML = `<span>Eduard</span><br />\r\n                    <span>Glekler</span><br />\r\n                    <span>M3300</span><br />\r\n                    <button id=\"button\" type=button>Показать покемона</button>`;\r\n}\r\n\n\n//# sourceURL=webpack:///./js/user.js?");

/***/ })

/******/ });
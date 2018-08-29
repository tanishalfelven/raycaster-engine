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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    width      : _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWidth(),\n    height     : _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getHeight(),\n    clearColor : 'white',\n    targetFps  : 30\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcz9kYjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB3aWR0aCAgICAgIDogdXRpbC5nZXRXaWR0aCgpLFxuICAgIGhlaWdodCAgICAgOiB1dGlsLmdldEhlaWdodCgpLFxuICAgIGNsZWFyQ29sb3IgOiAnd2hpdGUnLFxuICAgIHRhcmdldEZwcyAgOiAzMFxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/delta.js":
/*!**********************!*\
  !*** ./src/delta.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Delta; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\r\n\r\n/** @type {number} interval in ms */\r\nconst interval = 1000 / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].targetFps;\r\n\r\n/**\r\n * Small delta time manager\r\n */\r\nclass Delta {\r\n    constructor() {\r\n        this.then = Date.now(); \r\n    }\r\n\r\n    /**\r\n     * Checks if enough time has passed to start next drawing frame\r\n     */\r\n    ready() {\r\n        this.now = Date.now();\r\n        this.delta = this.now - this.then;\r\n\r\n        const isReady = this.delta > interval;\r\n\r\n        if (isReady) {\r\n            /** modulo clears delta overflow, more info {@link http://codetheory.in/controlling-the-frame-rate-with-requestanimationframe/ } */\r\n            this.then = this.now - (this.delta % this.now);\r\n        }\r\n\r\n        return isReady;\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVsdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVsdGEuanM/NDY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2ZnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuLyoqIEB0eXBlIHtudW1iZXJ9IGludGVydmFsIGluIG1zICovXHJcbmNvbnN0IGludGVydmFsID0gMTAwMCAvIGNmZy50YXJnZXRGcHM7XHJcblxyXG4vKipcclxuICogU21hbGwgZGVsdGEgdGltZSBtYW5hZ2VyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWx0YSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpOyBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiBlbm91Z2ggdGltZSBoYXMgcGFzc2VkIHRvIHN0YXJ0IG5leHQgZHJhd2luZyBmcmFtZVxyXG4gICAgICovXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xyXG5cclxuICAgICAgICBjb25zdCBpc1JlYWR5ID0gdGhpcy5kZWx0YSA+IGludGVydmFsO1xyXG5cclxuICAgICAgICBpZiAoaXNSZWFkeSkge1xyXG4gICAgICAgICAgICAvKiogbW9kdWxvIGNsZWFycyBkZWx0YSBvdmVyZmxvdywgbW9yZSBpbmZvIHtAbGluayBodHRwOi8vY29kZXRoZW9yeS5pbi9jb250cm9sbGluZy10aGUtZnJhbWUtcmF0ZS13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZS8gfSAqL1xyXG4gICAgICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmRlbHRhICUgdGhpcy5ub3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGlzUmVhZHk7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/delta.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n/* harmony import */ var _raycaster_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raycaster/index */ \"./src/raycaster/index.js\");\n/* harmony import */ var _delta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delta */ \"./src/delta.js\");\n\r\n\r\n\r\n/* global window */\r\n\r\n/**\r\n * Main/Game is the owner of the game loop and controls sub-modules\r\n */\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({    \r\n    init(canvas) {\r\n        _renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(canvas);\r\n        _raycaster_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n\r\n        this.delta = new _delta__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        this.loop();\r\n    },\r\n\r\n    loop() {\r\n        window.requestAnimationFrame(this.loop.bind(this));\r\n        \r\n        if (this.delta.ready()) {\r\n            _raycaster_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\r\n\r\n            _renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render();\r\n        }\r\n    },\r\n\r\n    update() {\r\n        // TODO update game objects \r\n        _raycaster_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update();\r\n    }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHIgZnJvbSAnLi9yZW5kZXJlcic7XHJcbmltcG9ydCByYXljYXN0ZXIgZnJvbSBcIi4vcmF5Y2FzdGVyL2luZGV4XCI7XHJcbmltcG9ydCBEZWx0YSBmcm9tICcuL2RlbHRhJztcclxuLyogZ2xvYmFsIHdpbmRvdyAqL1xyXG5cclxuLyoqXHJcbiAqIE1haW4vR2FtZSBpcyB0aGUgb3duZXIgb2YgdGhlIGdhbWUgbG9vcCBhbmQgY29udHJvbHMgc3ViLW1vZHVsZXNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHsgICAgXHJcbiAgICBpbml0KGNhbnZhcykge1xyXG4gICAgICAgIHIuaW5pdChjYW52YXMpO1xyXG4gICAgICAgIHJheWNhc3Rlci5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVsdGEgPSBuZXcgRGVsdGEoKTtcclxuICAgICAgICB0aGlzLmxvb3AoKTtcclxuICAgIH0sXHJcblxyXG4gICAgbG9vcCgpIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5kZWx0YS5yZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIHJheWNhc3Rlci5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHIucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gVE9ETyB1cGRhdGUgZ2FtZSBvYmplY3RzIFxyXG4gICAgICAgIHJheWNhc3Rlci51cGRhdGUoKTtcclxuICAgIH1cclxufTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n/* global document */\r\n\r\n// create a canvas for rendering\r\nconst canvas = document.createElement('canvas');\r\n// append to document\r\ndocument.body.appendChild(canvas);\r\n\r\n// let the magic happen\r\n_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(canvas);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnXHJcbi8qIGdsb2JhbCBkb2N1bWVudCAqL1xyXG5cclxuLy8gY3JlYXRlIGEgY2FudmFzIGZvciByZW5kZXJpbmdcclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbi8vIGFwcGVuZCB0byBkb2N1bWVudFxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4vLyBsZXQgdGhlIG1hZ2ljIGhhcHBlblxyXG5HYW1lLmluaXQoY2FudmFzKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/raycaster/index.js":
/*!********************************!*\
  !*** ./src/raycaster/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ \"./src/renderer.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/raycaster/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./src/raycaster/map.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    init() {\r\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_1___default.a();\r\n        this.map = _map__WEBPACK_IMPORTED_MODULE_2___default.a.getMap();\r\n    },\r\n\r\n    update() {\r\n        this.player.update();\r\n    },\r\n\r\n    render() {\r\n        \r\n    }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmF5Y2FzdGVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JheWNhc3Rlci9pbmRleC5qcz82ODdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByIGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcclxuICAgICAgICB0aGlzLm1hcCA9IE1hcC5nZXRNYXAoKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/raycaster/index.js\n");

/***/ }),

/***/ "./src/raycaster/map.js":
/*!******************************!*\
  !*** ./src/raycaster/map.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmF5Y2FzdGVyL21hcC5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/raycaster/map.js\n");

/***/ }),

/***/ "./src/raycaster/player.js":
/*!*********************************!*\
  !*** ./src/raycaster/player.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmF5Y2FzdGVyL3BsYXllci5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/raycaster/player.js\n");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\r\n/* global document */\r\n\r\n/**\r\n * Render layer. Handles all drawing magic.\r\n * TODO dynamically resize canvases on window resize\r\n */\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    /**\r\n     * Init all needed renderer variables\r\n     * @param {HTMLElement} documentCanvas document canvas\r\n     */\r\n    init(documentCanvas) {  \r\n        this.documentCtx = this.initCanvas(documentCanvas);\r\n        // @type {CanvasRenderingContext2D} shorthand for BufferContext, this is where all rendering calls are rendered to until `this.render` is called\r\n        this.bc = this.initCanvas(document.createElement('canvas'));\r\n    },\r\n\r\n    /**\r\n     * Initiates canvas to standard config values, then request the context\r\n     * @param {HTMLElement} canvas canvas to init\r\n     * @return {CanvasRenderingContext2D}\r\n     */\r\n    initCanvas(canvas) {\r\n        if (document.body.contains(canvas)) {\r\n            // if canvas exists on the page, make sure it is aligned to the edge of the page\r\n            canvas.style.position = 'absolute';\r\n            canvas.style.top      = '0'\r\n            canvas.style.left     = '0';\r\n        }\r\n\r\n        // canvas settings\r\n        canvas.width  = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width;\r\n        canvas.height = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height;\r\n\r\n        // context settings\r\n        const ctx = canvas.getContext('2d');\r\n        ctx.width = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width;\r\n        ctx.height = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height;\r\n\r\n        return ctx;\r\n    },\r\n\r\n    /**\r\n     * Render defined rectangle\r\n     * @param {number} x \r\n     * @param {number} y \r\n     * @param {number} width \r\n     * @param {number} height \r\n     * @param {string | object} [style] Optional style. Will only be set if not equal to current style.\r\n     * @param {boolean} [fill]\r\n     */\r\n    rect(x, y, width, height, style, fill = true) {\r\n        if (style) {\r\n            if (fill) {\r\n                this.bc.fillStyle = style;\r\n            } else {\r\n                if (style.lineWidth)   this.bc.lineWidth   = style.lineWidth;\r\n                if (style.strokeStyle) this.bc.strokeStyle = style.strokeStyle;\r\n            }\r\n        }\r\n\r\n        if (fill) {\r\n            this.bc.fillRect(x, y, width, height);\r\n        } else {\r\n            this.bc.strokeRect(x, y, width, height);    \r\n        }\r\n    },\r\n\r\n    /**\r\n     * Clears buffer context to `cfg.clearColor`\r\n     */\r\n    clear() {\r\n        this.rect(0, 0, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height, 'black');\r\n    },\r\n\r\n    /**\r\n     * Renders buffer context to document canvas, then clears buffer context for new frame.\r\n     */\r\n    render() {\r\n        this.documentCtx.drawImage(this.bc.canvas, 0, 0);\r\n        this.clear();\r\n    }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVuZGVyZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanM/ODhjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2ZnIGZyb20gJy4vY29uZmlnLmpzJztcclxuLyogZ2xvYmFsIGRvY3VtZW50ICovXHJcblxyXG4vKipcclxuICogUmVuZGVyIGxheWVyLiBIYW5kbGVzIGFsbCBkcmF3aW5nIG1hZ2ljLlxyXG4gKiBUT0RPIGR5bmFtaWNhbGx5IHJlc2l6ZSBjYW52YXNlcyBvbiB3aW5kb3cgcmVzaXplXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXQgYWxsIG5lZWRlZCByZW5kZXJlciB2YXJpYWJsZXNcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvY3VtZW50Q2FudmFzIGRvY3VtZW50IGNhbnZhc1xyXG4gICAgICovXHJcbiAgICBpbml0KGRvY3VtZW50Q2FudmFzKSB7ICBcclxuICAgICAgICB0aGlzLmRvY3VtZW50Q3R4ID0gdGhpcy5pbml0Q2FudmFzKGRvY3VtZW50Q2FudmFzKTtcclxuICAgICAgICAvLyBAdHlwZSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBzaG9ydGhhbmQgZm9yIEJ1ZmZlckNvbnRleHQsIHRoaXMgaXMgd2hlcmUgYWxsIHJlbmRlcmluZyBjYWxscyBhcmUgcmVuZGVyZWQgdG8gdW50aWwgYHRoaXMucmVuZGVyYCBpcyBjYWxsZWRcclxuICAgICAgICB0aGlzLmJjID0gdGhpcy5pbml0Q2FudmFzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWF0ZXMgY2FudmFzIHRvIHN0YW5kYXJkIGNvbmZpZyB2YWx1ZXMsIHRoZW4gcmVxdWVzdCB0aGUgY29udGV4dFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2FudmFzIGNhbnZhcyB0byBpbml0XHJcbiAgICAgKiBAcmV0dXJuIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9XHJcbiAgICAgKi9cclxuICAgIGluaXRDYW52YXMoY2FudmFzKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoY2FudmFzKSkge1xyXG4gICAgICAgICAgICAvLyBpZiBjYW52YXMgZXhpc3RzIG9uIHRoZSBwYWdlLCBtYWtlIHN1cmUgaXQgaXMgYWxpZ25lZCB0byB0aGUgZWRnZSBvZiB0aGUgcGFnZVxyXG4gICAgICAgICAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBjYW52YXMuc3R5bGUudG9wICAgICAgPSAnMCdcclxuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmxlZnQgICAgID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FudmFzIHNldHRpbmdzXHJcbiAgICAgICAgY2FudmFzLndpZHRoICA9IGNmZy53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2ZnLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gY29udGV4dCBzZXR0aW5nc1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC53aWR0aCA9IGNmZy53aWR0aDtcclxuICAgICAgICBjdHguaGVpZ2h0ID0gY2ZnLmhlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGN0eDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgZGVmaW5lZCByZWN0YW5nbGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBvYmplY3R9IFtzdHlsZV0gT3B0aW9uYWwgc3R5bGUuIFdpbGwgb25seSBiZSBzZXQgaWYgbm90IGVxdWFsIHRvIGN1cnJlbnQgc3R5bGUuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaWxsXVxyXG4gICAgICovXHJcbiAgICByZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlLCBmaWxsID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChzdHlsZSkge1xyXG4gICAgICAgICAgICBpZiAoZmlsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYy5maWxsU3R5bGUgPSBzdHlsZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdHlsZS5saW5lV2lkdGgpICAgdGhpcy5iYy5saW5lV2lkdGggICA9IHN0eWxlLmxpbmVXaWR0aDtcclxuICAgICAgICAgICAgICAgIGlmIChzdHlsZS5zdHJva2VTdHlsZSkgdGhpcy5iYy5zdHJva2VTdHlsZSA9IHN0eWxlLnN0cm9rZVN0eWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmlsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmJjLmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmMuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyBidWZmZXIgY29udGV4dCB0byBgY2ZnLmNsZWFyQ29sb3JgXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMucmVjdCgwLCAwLCBjZmcud2lkdGgsIGNmZy5oZWlnaHQsICdibGFjaycpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcnMgYnVmZmVyIGNvbnRleHQgdG8gZG9jdW1lbnQgY2FudmFzLCB0aGVuIGNsZWFycyBidWZmZXIgY29udGV4dCBmb3IgbmV3IGZyYW1lLlxyXG4gICAgICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudEN0eC5kcmF3SW1hZ2UodGhpcy5iYy5jYW52YXMsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxufTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/renderer.js\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    /**\r\n     * Browsers are stupid. This is a safe way to get the browser window height/width.\r\n     * This is take from {@link https://stackoverflow.com/a/1038781 }\r\n     */\r\n    getWidth() {\r\n        return Math.max(\r\n          document.body.scrollWidth,\r\n          document.documentElement.scrollWidth,\r\n          document.body.offsetWidth,\r\n          document.documentElement.offsetWidth,\r\n          document.documentElement.clientWidth\r\n        );\r\n      },\r\n      getHeight() {\r\n        return Math.max(\r\n          document.body.scrollHeight,\r\n          document.documentElement.scrollHeight,\r\n          document.body.offsetHeight,\r\n          document.documentElement.offsetHeight,\r\n          document.documentElement.clientHeight\r\n        );\r\n      }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsLmpzP2UwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCcm93c2VycyBhcmUgc3R1cGlkLiBUaGlzIGlzIGEgc2FmZSB3YXkgdG8gZ2V0IHRoZSBicm93c2VyIHdpbmRvdyBoZWlnaHQvd2lkdGguXHJcbiAgICAgKiBUaGlzIGlzIHRha2UgZnJvbSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEwMzg3ODEgfVxyXG4gICAgICovXHJcbiAgICBnZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoLFxyXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLFxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldEhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcclxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcclxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util.js\n");

/***/ })

/******/ });
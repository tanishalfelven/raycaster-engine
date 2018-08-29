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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n/* harmony import */ var _raycaster_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raycaster/index */ \"./src/raycaster/index.js\");\n/* harmony import */ var _delta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delta */ \"./src/delta.js\");\n/* harmony import */ var _inputHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputHandler */ \"./src/inputHandler.js\");\n\r\n\r\n\r\n\r\n/* global window */\r\n\r\n/**\r\n * Main/Game is the owner of the game loop and controls sub-modules\r\n */\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({    \r\n    init(canvas) {\r\n        _renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(canvas);\r\n        _inputHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\r\n        _raycaster_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n\r\n        this.delta = new _delta__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        this.loop();\r\n    },\r\n\r\n    loop() {\r\n        window.requestAnimationFrame(this.loop.bind(this));\r\n        \r\n        if (this.delta.ready()) {\r\n            this.update();\r\n\r\n            _raycaster_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\r\n            _renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render();\r\n        }\r\n    },\r\n\r\n    update() {\r\n        // TODO update game objects \r\n        _raycaster_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update();\r\n    }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHIgZnJvbSAnLi9yZW5kZXJlcic7XHJcbmltcG9ydCByYXljYXN0ZXIgZnJvbSBcIi4vcmF5Y2FzdGVyL2luZGV4XCI7XHJcbmltcG9ydCBEZWx0YSBmcm9tICcuL2RlbHRhJztcclxuaW1wb3J0IGlucHV0SGFuZGxlciBmcm9tIFwiLi9pbnB1dEhhbmRsZXJcIjtcclxuLyogZ2xvYmFsIHdpbmRvdyAqL1xyXG5cclxuLyoqXHJcbiAqIE1haW4vR2FtZSBpcyB0aGUgb3duZXIgb2YgdGhlIGdhbWUgbG9vcCBhbmQgY29udHJvbHMgc3ViLW1vZHVsZXNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHsgICAgXHJcbiAgICBpbml0KGNhbnZhcykge1xyXG4gICAgICAgIHIuaW5pdChjYW52YXMpO1xyXG4gICAgICAgIGlucHV0SGFuZGxlci5pbml0KCk7XHJcbiAgICAgICAgcmF5Y2FzdGVyLmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IG5ldyBEZWx0YSgpO1xyXG4gICAgICAgIHRoaXMubG9vcCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBsb29wKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmRlbHRhLnJlYWR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHJheWNhc3Rlci5yZW5kZXIoKTtcclxuICAgICAgICAgICAgci5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBUT0RPIHVwZGF0ZSBnYW1lIG9iamVjdHMgXHJcbiAgICAgICAgcmF5Y2FzdGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game.js\n");

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

/***/ "./src/inputHandler.js":
/*!*****************************!*\
  !*** ./src/inputHandler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* global window */\r\n\r\n/**\r\n * Simple input handler interface. Updates asyncronous of game animation code.\r\n */\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    init() {\r\n        const keytracker = {};\r\n\r\n        window.addEventListener(\"keydown\", e => {\r\n            keytracker[e.key] = true;\r\n        });\r\n\r\n        window.addEventListener(\"keyup\", e => {\r\n            keytracker[e.key] = false;\r\n        });\r\n\r\n        this.keytracker = keytracker;\r\n    },\r\n\r\n    /**\r\n     * Returns if key is pressed (e.g. \"a\" to see if a key is pressed). Is asyncronous to game loop\r\n     * @param {string} key key value to check against\r\n     */\r\n    isPressed(key) {\r\n        return this.keytracker[key];\r\n    }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5wdXRIYW5kbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0SGFuZGxlci5qcz84MmVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCB3aW5kb3cgKi9cclxuXHJcbi8qKlxyXG4gKiBTaW1wbGUgaW5wdXQgaGFuZGxlciBpbnRlcmZhY2UuIFVwZGF0ZXMgYXN5bmNyb25vdXMgb2YgZ2FtZSBhbmltYXRpb24gY29kZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3Qga2V5dHJhY2tlciA9IHt9O1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIGtleXRyYWNrZXJbZS5rZXldID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcclxuICAgICAgICAgICAga2V5dHJhY2tlcltlLmtleV0gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5rZXl0cmFja2VyID0ga2V5dHJhY2tlcjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGlmIGtleSBpcyBwcmVzc2VkIChlLmcuIFwiYVwiIHRvIHNlZSBpZiBhIGtleSBpcyBwcmVzc2VkKS4gSXMgYXN5bmNyb25vdXMgdG8gZ2FtZSBsb29wXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IGtleSB2YWx1ZSB0byBjaGVjayBhZ2FpbnN0XHJcbiAgICAgKi9cclxuICAgIGlzUHJlc3NlZChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXl0cmFja2VyW2tleV07XHJcbiAgICB9XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/inputHandler.js\n");

/***/ }),

/***/ "./src/raycaster/index.js":
/*!********************************!*\
  !*** ./src/raycaster/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/raycaster/player.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/raycaster/map.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    init() {\r\n        this.map = _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMap();\r\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.map.getStartPos());\r\n    },\r\n\r\n    update() {\r\n        this.player.update();\r\n    },\r\n\r\n    render() {\r\n        // TODO get raycasting working. For now, we have a 2d map\r\n        this.map.render();\r\n        this.player.render();\r\n    }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmF5Y2FzdGVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JheWNhc3Rlci9pbmRleC5qcz82ODdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBNYXAgZnJvbSBcIi4vbWFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubWFwID0gTWFwLmdldE1hcCgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLm1hcC5nZXRTdGFydFBvcygpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gVE9ETyBnZXQgcmF5Y2FzdGluZyB3b3JraW5nLiBGb3Igbm93LCB3ZSBoYXZlIGEgMmQgbWFwXHJcbiAgICAgICAgdGhpcy5tYXAucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVuZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/raycaster/index.js\n");

/***/ }),

/***/ "./src/raycaster/map.js":
/*!******************************!*\
  !*** ./src/raycaster/map.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ \"./src/renderer.js\");\n\r\n\r\n/**\r\n * Map is an interface to the underlying data structure that represents maps (right now), a 2d array.\r\n * @typedef {{ x : number, y : number }} Position \r\n */\r\nclass Map {\r\n    constructor(map, cfg) {\r\n        this.map = map;\r\n        this.startPos = cfg.startPos;\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @return {Position} get starting position\r\n     */\r\n    getStartPos() {\r\n        return this.startPos;\r\n    }\r\n\r\n    render() {\r\n        /** @type {number} pixel scale */\r\n        const scale = 20;\r\n        this.map.forEach((row, y) => {\r\n            row.forEach((point, x) => {\r\n                _renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rect(x * scale, y * scale, scale, scale, point ? \"gray\" : \"white\");\r\n            })\r\n        })\r\n    }\r\n\r\n    static getMap() {\r\n        return new Map([\r\n            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],\r\n            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\r\n            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\r\n        ], {\r\n            // coordinates are defined from top left of the map to the bottom right\r\n            startPos : {\r\n                x : 1.5,\r\n                y : 1.5\r\n            }\r\n        });\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmF5Y2FzdGVyL21hcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yYXljYXN0ZXIvbWFwLmpzPzBhOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XHJcblxyXG4vKipcclxuICogTWFwIGlzIGFuIGludGVyZmFjZSB0byB0aGUgdW5kZXJseWluZyBkYXRhIHN0cnVjdHVyZSB0aGF0IHJlcHJlc2VudHMgbWFwcyAocmlnaHQgbm93KSwgYSAyZCBhcnJheS5cclxuICogQHR5cGVkZWYge3sgeCA6IG51bWJlciwgeSA6IG51bWJlciB9fSBQb3NpdGlvbiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGNmZykge1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSBjZmcuc3RhcnRQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge1Bvc2l0aW9ufSBnZXQgc3RhcnRpbmcgcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgZ2V0U3RhcnRQb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSBwaXhlbCBzY2FsZSAqL1xyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gMjA7XHJcbiAgICAgICAgdGhpcy5tYXAuZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChwb2ludCwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgci5yZWN0KHggKiBzY2FsZSwgeSAqIHNjYWxlLCBzY2FsZSwgc2NhbGUsIHBvaW50ID8gXCJncmF5XCIgOiBcIndoaXRlXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE1hcCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXVxyXG4gICAgICAgIF0sIHtcclxuICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXMgYXJlIGRlZmluZWQgZnJvbSB0b3AgbGVmdCBvZiB0aGUgbWFwIHRvIHRoZSBib3R0b20gcmlnaHRcclxuICAgICAgICAgICAgc3RhcnRQb3MgOiB7XHJcbiAgICAgICAgICAgICAgICB4IDogMS41LFxyXG4gICAgICAgICAgICAgICAgeSA6IDEuNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/raycaster/map.js\n");

/***/ }),

/***/ "./src/raycaster/player.js":
/*!*********************************!*\
  !*** ./src/raycaster/player.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ \"./src/renderer.js\");\n/* harmony import */ var _inputHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputHandler */ \"./src/inputHandler.js\");\n\r\n\r\n\r\nclass Player {\r\n    constructor(pos) {\r\n        this.x = pos.x;\r\n        this.y = pos.y;\r\n        this.rotation = 0;\r\n    }\r\n\r\n    update() {\r\n        const speed = 0.1;\r\n\r\n        if (_inputHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isPressed(\"w\")) {\r\n            this.y -= speed;\r\n        } else if (_inputHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isPressed(\"s\")) {\r\n            this.y += speed;\r\n        }\r\n\r\n        if (_inputHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isPressed(\"a\")) {\r\n            this.x -= speed;\r\n        } else if (_inputHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isPressed(\"d\")) {\r\n            this.x += speed;\r\n        }\r\n    }\r\n\r\n    render() {\r\n        // center 10x10 over current position\r\n        _renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rect(this.x * 20, this.y * 20, 10, 10, \"red\");\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmF5Y2FzdGVyL3BsYXllci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yYXljYXN0ZXIvcGxheWVyLmpzPzZkOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XHJcbmltcG9ydCBpbnB1dEhhbmRsZXIgZnJvbSBcIi4uL2lucHV0SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcykge1xyXG4gICAgICAgIHRoaXMueCA9IHBvcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBvcy55O1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBzcGVlZCA9IDAuMTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0SGFuZGxlci5pc1ByZXNzZWQoXCJ3XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSBzcGVlZDtcclxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0SGFuZGxlci5pc1ByZXNzZWQoXCJzXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSBzcGVlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbnB1dEhhbmRsZXIuaXNQcmVzc2VkKFwiYVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLnggLT0gc3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dEhhbmRsZXIuaXNQcmVzc2VkKFwiZFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjZW50ZXIgMTB4MTAgb3ZlciBjdXJyZW50IHBvc2l0aW9uXHJcbiAgICAgICAgci5yZWN0KHRoaXMueCAqIDIwLCB0aGlzLnkgKiAyMCwgMTAsIDEwLCBcInJlZFwiKTtcclxuICAgIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/raycaster/player.js\n");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (72:4)\\nYou may need an appropriate loader to handle this file type.\\n|     line(x1, y1, x2, y2, strokeStyle = null) {\\r\\n|         this.bc.\\r\\n>     },\\r\\n| \\r\\n|     /**\\r\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVuZGVyZXIuanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/renderer.js\n");

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
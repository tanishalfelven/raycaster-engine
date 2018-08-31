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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/util */ \"./src/lib/util.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    width      : _lib_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWidth(),\n    height     : _lib_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getHeight(),\n    clearColor : 'white',\n    targetFps  : 30,\n    scale      : 20\n});\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/lib/math/line.js":
/*!******************************!*\
  !*** ./src/lib/math/line.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Line; });\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ \"./src/lib/math/point.js\");\n\r\n\r\nclass Line {\r\n    /**\r\n     * @param {Point} a \r\n     * @param {Point} b \r\n     */\r\n    constructor(a, b) {\r\n        if (b.distanceFromOrigin() < a.distanceFromOrigin()) {\r\n            this.b = a;\r\n            this.a = b;\r\n        } else {\r\n            this.a = a;\r\n            this.b = b;\r\n        }\r\n    }\r\n\r\n    // TODO implement\r\n    // /**\r\n    //  * Get distance to point from line\r\n    //  * @param {Point} point\r\n    //  * @return {number}\r\n    //  */\r\n    // distanceFrom(point) {\r\n\r\n    // }\r\n\r\n    // /**\r\n    //  * Is point on line?\r\n    //  * @param {Point} point \r\n    //  * @return {boolean}\r\n    //  */\r\n    // onLine(point) {\r\n\r\n    // }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/lib/math/line.js?");

/***/ }),

/***/ "./src/lib/math/point.js":
/*!*******************************!*\
  !*** ./src/lib/math/point.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Point; });\n/**\r\n * Point Vector/Point math object\r\n */\r\nclass Point {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n\r\n    /**\r\n     * @return {number}\r\n     */\r\n    magnitude() {\r\n        return Math.sqrt(this.x*this.x, this.y*this.y);\r\n    }\r\n\r\n    distanceFromOrigin() {\r\n        return Math.pow(Math.sqrt(this.x + this.y), 2)\r\n    }\r\n\r\n    /**\r\n     * @param {Point} point\r\n     * @return {Point}\r\n     */\r\n    crossProduct(point) {\r\n        return (this.x * point.y) - (this.y * point.x);\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {Point} point\r\n     */\r\n    dot(point) {\r\n        return (this.x * point.x) + (this.y * point.y);\r\n    }\r\n\r\n    /**\r\n     * @param {Point} point \r\n     * @return {Point}\r\n     */\r\n    add(point) {\r\n        return new Point(this.x + point.x, this.y + point.y);\r\n    }\r\n    \r\n    /**\r\n     * @param {Point} point \r\n     * @return {Point}\r\n     */\r\n    subtract(point) {\r\n        return new Point(this.x - point.x, this.y - point.y);\r\n    }\r\n\r\n    /**\r\n     * @param {Point} point \r\n     * @return {Point}\r\n     */\r\n    multiply(point) {\r\n        return new Point(this.x * point.x, this.y * point.y);\r\n    }\r\n    \r\n    /**\r\n     * @param {Point} point \r\n     * @return {Point}\r\n     */\r\n    divide(point) {\r\n        return new Point(this.x * point.x, this.y * point.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/lib/math/point.js?");

/***/ }),

/***/ "./src/lib/math/ray.js":
/*!*****************************!*\
  !*** ./src/lib/math/ray.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ray; });\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ \"./src/lib/math/point.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./src/lib/util.js\");\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ \"./src/lib/math/line.js\");\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderer */ \"./src/lib/renderer.js\");\n\r\n\r\n\r\n\r\n\r\nclass Ray extends _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y, angle) {\r\n        super(x, y);\r\n        this.angle = angle;\r\n    }\r\n    \r\n    rotate(distance) {\r\n        this.angle = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrapRadian(this.angle + distance);\r\n    }\r\n\r\n    /**\r\n     * Project point @radius distance from center\r\n     * ! RELATIVE COORDINATES TO SELF\r\n     * @param {number} radius distance to project\r\n     * @param {number} offset radians offset for angle\r\n     * @return {Point}\r\n     */ \r\n    project(radius, offset = 0) {\r\n        return new _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( \r\n            Math.cos(this.angle + offset) * radius, \r\n            Math.sin(-this.angle + offset) * radius\r\n        );\r\n    }\r\n\r\n    /**\r\n     * Check if ray intersects given line\r\n     * Inspired from {@link https://stackoverflow.com/questions/14307158/how-do-you-check-for-intersection-between-a-line-segment-and-a-line-ray-emanatin }\r\n     * @param {Line} line \r\n     * @return {boolean}\r\n     */\r\n    intersectsLine(line) {\r\n        const rayDirection = this.add(this.project(5));\r\n        const ortho = new _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-rayDirection.y, rayDirection.x);\r\n        const aToO = this.subtract(line.a);\r\n        const aToB = line.b.subtract(line.a);\r\n\r\n        const denom = aToB.dot(ortho);\r\n\r\n        const t1 = Math.abs(aToB.crossProduct(aToO)) / denom;\r\n        const t2 = aToO.dot(ortho) / denom;\r\n        return 0 <= t2 && t2 <= 1 && t1 >= 0;\r\n    }\r\n\r\n    /**\r\n     * @param {Section} section \r\n     */\r\n    findIntersectingLines(section) {\r\n        const self = this;\r\n        let lines = section.lines.filter((line) => self.intersectsLine(line));\r\n\r\n        section.children.forEach((section) => {\r\n            lines = lines.concat(self.findIntersectingLines(section));\r\n        });\r\n\r\n        return lines;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/lib/math/ray.js?");

/***/ }),

/***/ "./src/lib/math/section.js":
/*!*********************************!*\
  !*** ./src/lib/math/section.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Section; });\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ \"./src/lib/renderer.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point */ \"./src/lib/math/point.js\");\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line */ \"./src/lib/math/line.js\");\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Data structure to represent map data.\r\n * Each section serves metadata, and a series of boundaries\r\n */\r\nclass Section {\r\n    /**\r\n     * @param {Point[]} boundaries \r\n     * @param {object} metadata\r\n     * @param {Section | Section[]} [children]\r\n     */\r\n    constructor(boundaries, metadata, children = null) {\r\n        // combine metadata to self\r\n        Object.assign(this, metadata);\r\n        this.boundaries = boundaries;\r\n        this.lines = this._generateLines();\r\n        this.children = [];\r\n\r\n        if (children) {\r\n            this.addChild(children);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Generate lines, avoid using. Prefer `this.lines`.\r\n     */\r\n    _generateLines() {\r\n        const lines = [];\r\n        this.boundaries.forEach((currentPoint, i) => {\r\n            let nextPoint;\r\n            if (i + 1 < this.boundaries.length) {\r\n                nextPoint = this.boundaries[i + 1];\r\n            } else {\r\n                nextPoint = this.boundaries[0];\r\n            }\r\n\r\n            lines.push(new _line__WEBPACK_IMPORTED_MODULE_3__[\"default\"](currentPoint, nextPoint));\r\n        });\r\n\r\n        return lines;\r\n    }\r\n\r\n    /**\r\n     * Add children to section\r\n     * @param {Section | Section[]} child \r\n     * @return {Section} this, for function chaining\r\n     */\r\n    addChild(child) {\r\n        this.children = this.children.concat(child);\r\n        return this;\r\n    }\r\n\r\n    render() {\r\n        const transform = this.boundaries.map(p => { \r\n            // transform by scale\r\n            return new _point__WEBPACK_IMPORTED_MODULE_2__[\"default\"](p.x * _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scale, p.y * _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scale);\r\n        });\r\n\r\n        _renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].polygon(transform, \"white\");\r\n        _renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].polygon(transform, { lineWidth : \"5px\", strokeStyle : \"red\" }, false)\r\n\r\n        this.children.forEach(section => section.render());\r\n    }\r\n\r\n    /**\r\n     * Helper method to define section boxes\r\n     * @param {number} x \r\n     * @param {number} y \r\n     * @param {number} width \r\n     * @param {number} height \r\n     */\r\n    static box(x, y, width, height) {\r\n        return [\r\n            new _point__WEBPACK_IMPORTED_MODULE_2__[\"default\"](x, y),\r\n            new _point__WEBPACK_IMPORTED_MODULE_2__[\"default\"](x, y + height),\r\n            new _point__WEBPACK_IMPORTED_MODULE_2__[\"default\"](x + width, y + height),\r\n            new _point__WEBPACK_IMPORTED_MODULE_2__[\"default\"](x + width, y),\r\n        ]\r\n    }\r\n\r\n    /**\r\n     * test function, get test section data\r\n     * TODO create a map creator\r\n     */\r\n    static getSection() {\r\n        return new Section(\r\n            Section.box(1, 1, 11, 11),\r\n            {\r\n                y      : 0,\r\n                height : 1\r\n            },\r\n            new Section(\r\n                Section.box(5, 5, 3, 3),\r\n                {\r\n                    y      : 0,\r\n                    height : 1\r\n                }\r\n            )\r\n        );\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/lib/math/section.js?");

/***/ }),

/***/ "./src/lib/renderer.js":
/*!*****************************!*\
  !*** ./src/lib/renderer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\r\n/* global document */\r\n\r\n/**\r\n * Render layer. Handles all drawing magic.\r\n * TODO dynamically resize canvases on window resize\r\n */\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    /**\r\n     * Init all needed renderer variables\r\n     * @param {HTMLElement} documentCanvas document canvas\r\n     */\r\n    init(documentCanvas) {  \r\n        this.documentCtx = this.initCanvas(documentCanvas);\r\n        // @type {CanvasRenderingContext2D} shorthand for BufferContext, this is where all rendering calls are rendered to until `this.render` is called\r\n        this.bc = this.initCanvas(document.createElement('canvas'));\r\n    },\r\n\r\n    /**\r\n     * Initiates canvas to standard config values, then request the context\r\n     * @param {HTMLElement} canvas canvas to init\r\n     * @return {CanvasRenderingContext2D}\r\n     */\r\n    initCanvas(canvas) {\r\n        if (document.body.contains(canvas)) {\r\n            // if canvas exists on the page, make sure it is aligned to the edge of the page\r\n            canvas.style.position = 'absolute';\r\n            canvas.style.top      = '0'\r\n            canvas.style.left     = '0';\r\n        }\r\n\r\n        // canvas settings\r\n        canvas.width  = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width;\r\n        canvas.height = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height;\r\n\r\n        // context settings\r\n        const ctx = canvas.getContext('2d');\r\n        ctx.width = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width;\r\n        ctx.height = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height;\r\n\r\n        return ctx;\r\n    },\r\n\r\n    /**\r\n     * Override current styles. If fill, replace fillStyle with style. If not fill, then attempt to overwrite lineWidth and strokeStyle\r\n     * @typedef {string | { lineWidth : string, strokeStyle : string }} Style\r\n     * @param {Style} style Override style\r\n     */\r\n    setStyle(style, fill) {\r\n        if (style) {\r\n            if (fill && typeof style === \"string\") {\r\n                this.bc.fillStyle = style;\r\n            } else if (typeof style === \"object\") {\r\n                if (style.lineWidth)   this.bc.lineWidth   = style.lineWidth;\r\n                if (style.strokeStyle) this.bc.strokeStyle = style.strokeStyle;\r\n            }\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Render defined rectangle\r\n     * @param {number} x \r\n     * @param {number} y \r\n     * @param {number} width \r\n     * @param {number} height \r\n     * @param {Style} [style] Optional style. Will only be set if not equal to current style.\r\n     * @param {boolean} [fill]\r\n     */\r\n    rect(x, y, width, height, style, fill = true) {\r\n        this.setStyle(style, fill);\r\n\r\n        if (fill) {\r\n            this.bc.fillRect(x, y, width, height);\r\n        } else {\r\n            this.bc.strokeRect(x, y, width, height);    \r\n        }\r\n    },\r\n\r\n    /**\r\n     * Draw a line from two points\r\n     * @param {number} x1 x position for first point\r\n     * @param {number} y1 y position for first point\r\n     * @param {number} x2 \r\n     * @param {number} y2 \r\n     * @param {string} strokeStyle \r\n     */\r\n    line(x1, y1, x2, y2, stroke = { lineWidth : \"1px\", strokeStyle : \"black\" }) {\r\n        this.setStyle(stroke, false);\r\n\r\n        this.bc.beginPath();\r\n        this.bc.moveTo(x1, y1);\r\n        this.bc.lineTo(x2, y2);\r\n        this.bc.stroke();\r\n    },\r\n\r\n    /**\r\n     * Given n points render a polygon by connecting given points;\r\n     * @typedef {{x : number, y : number}} Point\r\n     * @param {Point[]} points \r\n     * @param {Style} style \r\n     * @param {boolean} fill \r\n     */\r\n    polygon(points, style, fill = true) {\r\n        const self = this;\r\n        this.setStyle(style, fill);\r\n\r\n        this.bc.beginPath();\r\n        points.forEach((p, i) => {\r\n            if (i === 0) {\r\n                self.bc.moveTo(p.x, p.y);\r\n            } else {\r\n                self.bc.lineTo(p.x, p.y);\r\n            }\r\n        });\r\n\r\n        if (fill) {\r\n            this.bc.fill();\r\n        } else {\r\n            this.bc.closePath();\r\n            this.bc.stroke();\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Clears buffer context to `cfg.clearColor`\r\n     */\r\n    clear() {\r\n        this.rect(0, 0, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height, 'black');\r\n    },\r\n\r\n    /**\r\n     * Renders buffer context to document canvas, then clears buffer context for new frame.\r\n     */\r\n    render() {\r\n        this.documentCtx.drawImage(this.bc.canvas, 0, 0);\r\n        this.clear();\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/lib/renderer.js?");

/***/ }),

/***/ "./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* global document */\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    /**\r\n     * Browsers are stupid. This is a safe way to get the browser window height/width.\r\n     * This is take from {@link https://stackoverflow.com/a/1038781 }\r\n     */\r\n    getWidth() {\r\n        return Math.max(\r\n            document.body.scrollWidth,\r\n            document.documentElement.scrollWidth,\r\n            document.body.offsetWidth,\r\n            document.documentElement.offsetWidth,\r\n            document.documentElement.clientWidth\r\n        );\r\n    },\r\n    getHeight() {\r\n        return Math.max(\r\n            document.body.scrollHeight,\r\n            document.documentElement.scrollHeight,\r\n            document.body.offsetHeight,\r\n            document.documentElement.offsetHeight,\r\n            document.documentElement.clientHeight\r\n        );\r\n    },\r\n\r\n    _2pi : Math.PI * 2,\r\n    /**\r\n     * Wrap radians that are >2pi or <0 to equivalent values\r\n     * @param {number} n radians\r\n     * @return {number} wrapped value\r\n     */\r\n    wrapRadian(n) {\r\n        if (n > this._2pi) {\r\n            return (n % this._2pi);\r\n        } else if (n < 0) {\r\n            return this._2pi + n;\r\n        }\r\n\r\n        return n;\r\n    },\r\n\r\n    _piOver180 : Math.PI / 180,\r\n    /**\r\n     * @param {number} n value in degrees\r\n     * @return {number} value in radians\r\n     */\r\n    toRadians(n) {\r\n        return n * this._piOver180;\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/lib/util.js?");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_lib_math_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/lib/math/point */ \"./src/lib/math/point.js\");\n/* harmony import */ var _src_lib_math_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/lib/math/section */ \"./src/lib/math/section.js\");\n/* harmony import */ var _src_lib_math_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/lib/math/line */ \"./src/lib/math/line.js\");\n/* harmony import */ var _src_lib_math_ray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/lib/math/ray */ \"./src/lib/math/ray.js\");\n\r\n\r\n\r\n\r\n\r\nfunction test(name, passed) {\r\n    console.log(`${name}: ${passed ? \"PASS\" : \"FAIL\"}`);\r\n}\r\n\r\ntest(\"test\", true);\r\n\n\n//# sourceURL=webpack:///./test.js?");

/***/ })

/******/ });
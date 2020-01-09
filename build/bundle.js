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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game */ \"./src/game.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var canvas = document.querySelector(\"canvas\");\n    var game = new _src_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](canvas);\n    game.startLoop();\n    setTimeout(function () {\n        game.endLoop();\n    }, 2000);\n});\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/snake.ts\");\n\nvar Game = /** @class */ (function () {\n    function Game(canvas) {\n        this.requestedFrameId = -1;\n        this.loopCount = 0;\n        this.canvas = canvas;\n        this.ctx = canvas.getContext(\"2d\");\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"Snake\"](canvas);\n    }\n    Game.prototype.loop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n        // console.log(\"looping\");\n        // console.log(++this.loopCount);\n        this.snake.draw();\n        this.snake.update();\n    };\n    Game.prototype.startLoop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n    };\n    Game.prototype.endLoop = function () {\n        cancelAnimationFrame(this.requestedFrameId);\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\nvar tune = {\n    speed: 6,\n    dX: 15,\n    dY: 15,\n};\nvar Snake = /** @class */ (function () {\n    function Snake(canvas) {\n        this.ctx = canvas.getContext(\"2d\");\n        var canvasWidth = canvas.width;\n        var canvasHeight = canvas.height;\n        this.cellWidth = canvasWidth / 20;\n        this.cellHeight = canvasHeight / 20;\n        this.body = [\n            [1, 1],\n            [2, 1],\n            [3, 1]\n            // start with length of 2 body (one being head)\n        ];\n        this.head = this.body[0]; // replace one cell of body with head.\n    }\n    Snake.prototype.controlSnake = function () {\n        var _this = this;\n        document.addEventListener(\"keydown\", function (e) {\n            switch (e.key) {\n                case  true && \"s\":\n                    _this.dir = \"S\";\n                    console.log('down');\n                    break;\n                case  true && \"w\":\n                    _this.dir = \"N\";\n                    console.log('up');\n                    break;\n                case  true && \"a\":\n                    _this.dir = \"W\";\n                    console.log('left');\n                    break;\n                case  true && \"d\":\n                    _this.dir = \"E\";\n                    console.log('right');\n                    break;\n                default:\n                    break;\n            }\n        });\n    };\n    Snake.prototype.draw = function () {\n        this.controlSnake();\n        for (var i = 0; i < this.body.length; i++) {\n            // this.body is a 2d array of coords.\n            this.ctx.fillStyle = 'rgb(89, 0, 255)';\n            this.ctx.strokeStyle = '#000';\n            this.ctx.fillRect(this.body[i][0], this.body[i][1], this.cellWidth, this.cellHeight);\n        }\n    };\n    Snake.prototype.update = function () {\n        switch (this.dir) {\n            case \"S\":\n                this.body.pop();\n                console.log('heading south');\n            default:\n                break;\n        }\n    };\n    return Snake;\n}());\n\n\n\n//# sourceURL=webpack:///./src/snake.ts?");

/***/ })

/******/ });
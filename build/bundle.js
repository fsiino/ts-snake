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

/***/ "./src/food.ts":
/*!*********************!*\
  !*** ./src/food.ts ***!
  \*********************/
/*! exports provided: Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Food\", function() { return Food; });\nvar FOODCOLOR = 'red';\nvar FOODSTROKECOLOR = 'black';\nvar Food = /** @class */ (function () {\n    function Food(canvas) {\n        this.ctx = canvas.getContext('2d');\n        this.canvasWidth = canvas.width;\n        this.canvasHeight = canvas.height;\n        this.foodLoc = [];\n    }\n    Food.prototype.randomFoods = function (min, max) {\n        var randomCoord = Math.round((Math.random() * (max - min) + min) / 10) * 10;\n        return randomCoord;\n    };\n    Food.prototype.createFood = function () {\n        var foodX = this.randomFoods(0, this.canvasWidth - 10);\n        var foodY = this.randomFoods(0, this.canvasHeight - 10);\n        this.foodLoc = [foodX, foodY];\n        this.drawFood();\n    };\n    Food.prototype.drawFood = function () {\n        this.ctx.fillStyle = FOODCOLOR;\n        this.ctx.strokeStyle = FOODSTROKECOLOR;\n        this.ctx.fillRect(this.foodLoc[0], this.foodLoc[1], 10, 10);\n    };\n    return Food;\n}());\n\n\n\n//# sourceURL=webpack:///./src/food.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/snake.ts\");\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food */ \"./src/food.ts\");\n\n\n// TODO: Move consts to its own file ?\nvar CANVASBGCOLOR = 'gray';\nvar CANVASBORDERCOLOR = 'black';\nvar GAMESPEED = 200;\nvar Game = /** @class */ (function () {\n    // private loopCount = 0;\n    function Game(canvas) {\n        this.requestedFrameId = -1;\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"Snake\"](canvas);\n        this.food = new _food__WEBPACK_IMPORTED_MODULE_1__[\"Food\"](canvas);\n    }\n    Game.prototype.clearCanvas = function () {\n        this.ctx.fillStyle = CANVASBGCOLOR;\n        this.ctx.strokeStyle = CANVASBORDERCOLOR;\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    Game.prototype.loop = function () {\n        var _this = this;\n        // this.requestedFrameId = requestAnimationFrame(() => this.loop());\n        console.log(\"looping\");\n        // console.log(++this.loopCount);\n        setTimeout(function () {\n            _this.clearCanvas();\n            _this.food.drawFood();\n            _this.snake.moveSnake();\n            _this.snake.drawSnake();\n            _this.loop();\n        }, GAMESPEED);\n    };\n    Game.prototype.startLoop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n    };\n    Game.prototype.endLoop = function () {\n        cancelAnimationFrame(this.requestedFrameId);\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food */ \"./src/food.ts\");\n\nvar SNAKECOLOR = 'lightgreen';\nvar SNAKESTROKECOLOR = 'darkgreen';\nvar Snake = /** @class */ (function () {\n    function Snake(canvas) {\n        var _this = this;\n        this.score = 0;\n        this.ctx = canvas.getContext('2d');\n        this.snake = [\n            { x: 150, y: 60 },\n            { x: 140, y: 60 },\n            { x: 130, y: 60 },\n            { x: 120, y: 60 },\n            { x: 110, y: 60 },\n        ];\n        this.food = new _food__WEBPACK_IMPORTED_MODULE_0__[\"Food\"](canvas);\n        this.dx = 0;\n        this.dy = 10;\n        // document.addEventListener(\"keydown\", this.turn.bind(this))\n        document.addEventListener('keydown', function (e) {\n            _this.turn(e);\n        });\n        this.snake.forEach(function (part) {\n            if (part.x !== _this.food.foodLoc[0] && part.y !== _this.food.foodLoc[1]) {\n                _this.food.createFood();\n            }\n        });\n    }\n    Snake.prototype.drawSnake = function () {\n        var _this = this;\n        this.snake.forEach(function (snakePart) { return _this.drawSnakePart(snakePart); });\n    };\n    Snake.prototype.drawSnakePart = function (snakePart) {\n        this.ctx.fillStyle = SNAKECOLOR;\n        this.ctx.strokeStyle = SNAKESTROKECOLOR;\n        this.ctx.fillRect(snakePart.x, snakePart.y, 10, 10);\n        this.ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);\n    };\n    Snake.prototype.moveSnake = function () {\n        var head = {\n            x: this.snake[0].x + this.dx,\n            y: this.snake[0].y + this.dy,\n        };\n        this.snake.unshift(head);\n        if (this.snake[0].x === this.food.foodLoc[0] && this.snake[0].y === this.food.foodLoc[1]) {\n            this.food.createFood();\n            // TODO: increase score here\n            console.log('ate some food');\n        }\n        else {\n            this.snake.pop();\n        }\n    };\n    Snake.prototype.turn = function (e) {\n        var LEFT = 65;\n        var RIGHT = 68;\n        var UP = 87;\n        var DOWN = 83;\n        //TODO: Fix 180 degree turn positioning e.g. (up -> left, down -> should shift down and not overlap with previous path)\n        switch (e.keyCode) {\n            case LEFT:\n                if (this.dx !== 10) { // Disables 180 degree turn e.g. (right -> left)\n                    this.dx = -10;\n                    this.dy = 0;\n                    // console.log('l')\n                    break;\n                }\n            case RIGHT:\n                if (this.dx !== -10) {\n                    this.dx = 10;\n                    this.dy = 0;\n                    // console.log('r')\n                    break;\n                }\n            case UP:\n                if (this.dy !== 10) {\n                    this.dx = 0;\n                    this.dy = -10;\n                    // console.log('u')\n                    break;\n                }\n            case DOWN:\n                if (this.dy !== -10) {\n                    this.dx = 0;\n                    this.dy = 10;\n                    // console.log('d')\n                    break;\n                }\n            default:\n                return;\n        }\n        ;\n    };\n    return Snake;\n}());\n\n\n\n//# sourceURL=webpack:///./src/snake.ts?");

/***/ })

/******/ });
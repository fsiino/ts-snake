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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game */ \"./src/game.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var canvas = document.querySelector(\"canvas\");\n    var game = new _src_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](canvas);\n    game.startLoop();\n    // setTimeout(() => {\n    //   game.endLoop();\n    // }, 2000);\n});\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return Settings; });\nvar Settings = {\n    snake: {\n        SNAKECOLOR: 'cyan',\n        SNAKESTROKECOLOR: 'blue',\n    },\n    food: {\n        FOODCOLOR: 'red',\n        FOODSTROKECOLOR: 'black',\n    },\n    game: {\n        CANVASBGCOLOR: 'rgb(68,105,220)',\n        CANVASBORDERCOLOR: 'black',\n        GAMESPEED: 130,\n    },\n    grid: {\n        TILECOLOR: 'black',\n        TILESTROKE: 'rgb(68,105,220)',\n        TILESROW: 35,\n        TILESCOL: 20\n    },\n};\n\n\n//# sourceURL=webpack:///./src/constants.ts?");

/***/ }),

/***/ "./src/food.ts":
/*!*********************!*\
  !*** ./src/food.ts ***!
  \*********************/
/*! exports provided: Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Food\", function() { return Food; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n\nvar Food = /** @class */ (function () {\n    function Food(canvas) {\n        this.ctx = canvas.getContext('2d');\n        this.canvasWidth = canvas.width;\n        this.canvasHeight = canvas.height;\n        this.foodLoc = [];\n    }\n    Food.prototype.randomFood = function (min, max) {\n        var randomCoord = Math.round((Math.random() * (max - min) + min) / 10) * 10;\n        return randomCoord;\n    };\n    Food.prototype.createFood = function (snake) {\n        var _this = this;\n        var foodX = this.randomFood(0, this.canvasWidth - 10);\n        var foodY = this.randomFood(0, this.canvasHeight - 10);\n        snake.body.forEach(function (part) {\n            if (part.x !== foodX && part.y !== foodY) {\n                _this.foodLoc = [foodX, foodY];\n            }\n            else {\n                _this.createFood(snake);\n            }\n        });\n    };\n    Food.prototype.drawFood = function (x, y) {\n        this.ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].food.FOODCOLOR;\n        this.ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].food.FOODSTROKECOLOR;\n        this.ctx.fillRect(x, y, 10, 10);\n        this.ctx.strokeRect(x, y, 10, 10);\n    };\n    return Food;\n}());\n\n\n\n//# sourceURL=webpack:///./src/food.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ \"./src/snake.ts\");\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food */ \"./src/food.ts\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid */ \"./src/grid.ts\");\n\n\n\n\nvar Game = /** @class */ (function () {\n    // private loopCount = 0;\n    function Game(canvas) {\n        var _a;\n        var _this = this;\n        this.requestedFrameId = -1;\n        this.currentScore = 0;\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        this.canvasWidth = this.canvas.width;\n        this.canvasHeight = this.canvas.height;\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_1__[\"Snake\"](canvas);\n        this.food = new _food__WEBPACK_IMPORTED_MODULE_2__[\"Food\"](canvas);\n        this.grid = new _grid__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"](canvas);\n        this.foodCoords = [];\n        this.snake.body.forEach(function (part) {\n            if (part.x !== _this.food.foodLoc[0] && part.y !== _this.food.foodLoc[1]) {\n                _this.food.createFood(_this.snake);\n            }\n        });\n        this.food.drawFood(this.food.foodLoc[0], this.food.foodLoc[1]);\n        (_a = this.foodCoords).push.apply(_a, [this.randomFood(0, this.canvasWidth - 10), this.randomFood(0, this.canvasHeight - 10)]);\n        this.currentScore = 0;\n        this.appleBite = new Audio('./sound/appleBite.mp3');\n    }\n    Game.prototype.clearCanvas = function () {\n        this.ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].game.CANVASBGCOLOR;\n        this.ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].game.CANVASBORDERCOLOR;\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    Game.prototype.randomFood = function (min, max) {\n        var randomCoord = Math.round((Math.random() * (max - min) + min) / 10) * 10;\n        return randomCoord;\n    };\n    Game.prototype.ateFood = function () {\n        return this.snake.body[0].x === this.food.foodLoc[0] && this.snake.body[0].y === this.food.foodLoc[1];\n    };\n    Game.prototype.hitWall = function () {\n        // Check if snake hits canvas boundaries:\n        var head = this.snake.body[0];\n        if (head.x < 0 || head.x > this.canvasWidth - 10 || head.y < 0 || head.y > this.canvasHeight - 10) {\n            return true;\n        }\n    };\n    Game.prototype.gameOver = function () {\n        var _this = this;\n        this.endLoop();\n        this.highScore = this.currentScore;\n        document.querySelector('#high-score').innerHTML = \"High Score: \" + this.currentScore;\n        this.ctx.textAlign = 'center';\n        this.ctx.font = '18pt Arial';\n        this.ctx.fillText('Game Over', this.canvasWidth / 2, (this.canvasHeight / 2) - 20);\n        this.ctx.textAlign = 'center';\n        this.ctx.font = '12pt Arial';\n        this.ctx.fillText(\"You scored \" + this.currentScore, this.canvasWidth / 2, (this.canvasHeight / 2));\n        this.ctx.textAlign = 'center';\n        this.ctx.font = '12pt Arial';\n        this.ctx.fillText('Press Enter to play again', this.canvasWidth / 2, (this.canvasHeight / 2) + 24);\n        document.addEventListener('keydown', function (e) {\n            if (e.keyCode === 13)\n                _this.restart();\n        });\n    };\n    Game.prototype.restart = function () {\n        this.currentScore = 0;\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_1__[\"Snake\"](this.canvas);\n        this.food = new _food__WEBPACK_IMPORTED_MODULE_2__[\"Food\"](this.canvas);\n        this.food.createFood(this.snake);\n        this.snake.dx = 0;\n        this.snake.dy = 10;\n        this.startLoop();\n    };\n    Game.prototype.loop = function () {\n        // this.requestedFrameId = requestAnimationFrame(() => this.loop());\n        // console.log(\"looping\");\n        // console.log(++this.loopCount);\n        var _this = this;\n        if (this.hitWall()) {\n            this.gameOver();\n            return;\n        }\n        ;\n        setTimeout(function () {\n            _this.clearCanvas();\n            if (_this.ateFood()) {\n                _this.appleBite.play();\n                _this.food.createFood(_this.snake);\n                _this.currentScore++;\n            }\n            document.getElementById('score').innerHTML = \"Score: \" + _this.currentScore;\n            _this.grid.drawGrid();\n            _this.food.drawFood(_this.food.foodLoc[0], _this.food.foodLoc[1]);\n            _this.snake.moveSnake(_this.food.foodLoc);\n            _this.snake.drawSnake();\n            _this.loop();\n        }, _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].game.GAMESPEED);\n    };\n    Game.prototype.startLoop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n    };\n    Game.prototype.endLoop = function () {\n        cancelAnimationFrame(this.requestedFrameId);\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n\nvar Grid = /** @class */ (function () {\n    function Grid(canvas) {\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        this.canvasWidth = this.canvas.width;\n        this.canvasHeight = this.canvas.height;\n        this.tileWidth = this.canvasWidth / _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].grid.TILESROW;\n        this.tileHeight = this.canvasHeight / _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].grid.TILESCOL;\n        this.drawGrid();\n    }\n    Grid.prototype.drawGrid = function () {\n        this.ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].grid.TILECOLOR;\n        this.ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].game.CANVASBGCOLOR;\n        var tilesAcross = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].grid.TILESROW;\n        var tilesDown = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].grid.TILESCOL;\n        for (var i = (1 / tilesAcross); i < tilesAcross; i++) {\n            for (var j = (1 / tilesDown); j < tilesDown; j++) {\n                this.ctx.fillRect(i * this.tileWidth, j * this.tileHeight, this.tileWidth - 1, this.tileHeight - 1);\n            }\n        }\n    };\n    return Grid;\n}());\n\n\n\n//# sourceURL=webpack:///./src/grid.ts?");

/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food */ \"./src/food.ts\");\n\n\nvar Snake = /** @class */ (function () {\n    function Snake(canvas) {\n        var _this = this;\n        this.ctx = canvas.getContext('2d');\n        this.body = [\n            { x: 150, y: 60 },\n            { x: 140, y: 60 },\n            { x: 130, y: 60 },\n        ];\n        this.food = new _food__WEBPACK_IMPORTED_MODULE_1__[\"Food\"](canvas);\n        this.dx = 0;\n        this.dy = 10;\n        document.addEventListener('keydown', function (e) { return _this.turn(e); });\n    }\n    Snake.prototype.drawSnake = function () {\n        var _this = this;\n        this.body.forEach(function (snakePart) { return _this.drawSnakePart(snakePart); });\n    };\n    Snake.prototype.drawSnakePart = function (snakePart) {\n        this.ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].snake.SNAKECOLOR;\n        this.ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].snake.SNAKESTROKECOLOR;\n        this.ctx.fillRect(snakePart.x, snakePart.y, 10, 10);\n        this.ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);\n    };\n    Snake.prototype.moveSnake = function (foodLoc) {\n        var head = {\n            x: this.body[0].x + this.dx,\n            y: this.body[0].y + this.dy,\n        };\n        this.body.unshift(head);\n        var ateFood = (this.body[0].x === foodLoc[0] && this.body[0].y === foodLoc[1]);\n        if (!ateFood) {\n            this.body.pop();\n        }\n    };\n    Snake.prototype.turn = function (e) {\n        var LEFT = 65;\n        var RIGHT = 68;\n        var UP = 87;\n        var DOWN = 83;\n        //TODO: Fix 180 degree turn positioning e.g. (up -> left, down -> should shift down and not overlap with previous path)\n        switch (e.keyCode) {\n            case LEFT:\n                if (this.dx !== 10) { // Disables 180 degree turn e.g. (right -> left)\n                    this.dx = -10;\n                    this.dy = 0;\n                    break;\n                }\n            case RIGHT:\n                if (this.dx !== -10) {\n                    this.dx = 10;\n                    this.dy = 0;\n                    break;\n                }\n            case UP:\n                if (this.dy !== 10) {\n                    this.dx = 0;\n                    this.dy = -10;\n                    break;\n                }\n            case DOWN:\n                if (this.dy !== -10) {\n                    this.dx = 0;\n                    this.dy = 10;\n                    break;\n                }\n            default:\n                return;\n        }\n        ;\n    };\n    return Snake;\n}());\n\n\n\n//# sourceURL=webpack:///./src/snake.ts?");

/***/ })

/******/ });
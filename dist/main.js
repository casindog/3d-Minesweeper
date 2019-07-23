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

/***/ "./src/GameLogic/game.js":
/*!*******************************!*\
  !*** ./src/GameLogic/game.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Plane = require('./plane');\n\nclass Game {\n    // assume a 4x4x4 for development\n    constructor(layers=4,gameConfig = 'cube') {\n        this.layers = layers;\n        this.gameOver = false;\n        this.planes = [];\n        this.gameConfig = gameConfig; \n        \n        this.gameSetup();\n\n    }\n\n    gameSetup() {\n        let minesPerPlane = [];\n        \n        // USER EDIT\n        // assume 8 mines in a 4x4x4\n        let mineCount = 9;\n        \n        for (let i=0; i<this.layers+2; i++) {\n            if (i===0 || i===this.layers+1) {\n                minesPerPlane.push(0);\n            } else {\n                if (i===this.layers) {\n                    minesPerPlane.push(mineCount);\n                } else {\n                    let mines = Math.floor(Math.random()*mineCount);\n                    minesPerPlane.push(mines);\n                    mineCount -= mines;\n                }\n            }\n             \n        }\n\n        // intentionally adding 2 to 4\n        for (let i=0; i<this.layers+2; i++) {\n            if (i === 0 || i ===this.layers+1) {               \n                this.planes.push(this.createNullPlane(6, 6, null));\n            } else {\n                this.planes.push(new Plane(6,6,minesPerPlane[i]));\n            }\n        }\n\n        if (this.gameConfig==='cube') {\n            for (let i=1; i<this.layers+1; i++) {\n                this.setNeighbors(this.planes[i], i);\n            } \n        } else if (this.gameConfig==='wheel') {\n            for (let i = 1; i < this.layers + 1; i++) {\n                this.setNeighbors(this.planes[i], i);\n            } \n\n            this.setNeighborsWheel(this.planes[1], this.planes[this.layers])\n        }\n        \n        for (let i=1; i<this.layers+1; i++) {\n            this.planes[i].setPointValue(this.planes[i]);\n        }\n        \n    }\n\n    createNullPlane(row, col, val) {\n        let nullPlane = new Plane(row, col, 0);\n\n        for (let i=0; i < row-1; i++) {\n            for (let j=0; j < col-1; j++) {\n                nullPlane.grid[i][j].value = null;\n            }\n        }\n\n        return nullPlane\n    }\n\n    displayNeighbors(row, col, idx) {\n        console.log(this.planes[idx].grid[row][col].neighbors)\n    }\n\n    setNeighbors(plane, idx) {\n        let neighbors;\n        \n        for (let row=1; row < plane.row-1; row++) {\n            for (let col=1; col < plane.col-1; col++) { \n\n                neighbors = {\n                    upPlane: {\n                        \"up\": this.planes[idx - 1].grid[row][col],\n                        \"N\": this.planes[idx - 1].grid[row - 1][col],\n                        \"NE\": this.planes[idx - 1].grid[row - 1][col + 1],\n                        \"E\": this.planes[idx - 1].grid[row][col + 1],\n                        \"SE\": this.planes[idx - 1].grid[row + 1][col + 1],\n                        \"S\": this.planes[idx - 1].grid[row + 1][col],\n                        \"SW\": this.planes[idx - 1].grid[row + 1][col - 1],\n                        \"W\": this.planes[idx - 1].grid[row][col - 1],\n                        \"NW\": this.planes[idx - 1].grid[row - 1][col - 1]\n                    },\n                    samePlane: {\n                        \"N\": plane.grid[row - 1][col],\n                        \"NE\": plane.grid[row - 1][col + 1],\n                        \"E\": plane.grid[row][col + 1],\n                        \"SE\": plane.grid[row + 1][col + 1],\n                        \"S\": plane.grid[row + 1][col],\n                        \"SW\": plane.grid[row + 1][col - 1],\n                        \"W\": plane.grid[row][col - 1],\n                        \"NW\": plane.grid[row - 1][col - 1]\n                    },\n                    downPlane: {\n                        \"down\": this.planes[idx+1].grid[row][col],\n                        \"N\": this.planes[idx+1].grid[row - 1][col],\n                        \"NE\": this.planes[idx+1].grid[row - 1][col + 1],\n                        \"E\": this.planes[idx+1].grid[row][col + 1],\n                        \"SE\": this.planes[idx+1].grid[row + 1][col + 1],\n                        \"S\": this.planes[idx+1].grid[row + 1][col],\n                        \"SW\": this.planes[idx+1].grid[row + 1][col - 1],\n                        \"W\": this.planes[idx+1].grid[row][col - 1],\n                        \"NW\": this.planes[idx+1].grid[row - 1][col - 1]\n                    }\n                }\n                \n                plane.grid[row][col].neighbors = neighbors;\n            }\n        }\n    }\n\n    setNeighborsWheel(topPlane, bottomPlane) {\n        let neighbors = {};\n        \n        // topPlane\n        for (let row = 1; row < this.layers+1; row++) {\n            for (let col = 1; col < this.layers+1; col++) {\n\n                topPlane.grid[row][col].idx = this.layers+1;\n\n                topPlane.grid[row][col].neighbors['upPlane'] = {\n                    \"up\": bottomPlane.grid[row][col],\n                    \"N\": bottomPlane.grid[row - 1][col],\n                    \"NE\": bottomPlane.grid[row - 1][col + 1],\n                    \"E\": bottomPlane.grid[row][col + 1],\n                    \"SE\": bottomPlane.grid[row + 1][col + 1],\n                    \"S\": bottomPlane.grid[row + 1][col],\n                    \"SW\": bottomPlane.grid[row + 1][col - 1],\n                    \"W\": bottomPlane.grid[row][col - 1],\n                    \"NW\": bottomPlane.grid[row - 1][col - 1]\n                }\n            }\n        }\n\n        // bottomPlane\n        for (let row = 1; row < this.layers+1; row++) {\n            for (let col = 1; col < this.layers+1; col++) {\n\n                bottomPlane.grid[row][col].idx = 1;\n\n                bottomPlane.grid[row][col].neighbors['downPlane'] = {\n                    \"down\": topPlane.grid[row][col],\n                    \"N\": topPlane.grid[row - 1][col],\n                    \"NE\": topPlane.grid[row - 1][col + 1],\n                    \"E\": topPlane.grid[row][col + 1],\n                    \"SE\": topPlane.grid[row + 1][col + 1],\n                    \"S\": topPlane.grid[row + 1][col],\n                    \"SW\": topPlane.grid[row + 1][col - 1],\n                    \"W\": topPlane.grid[row][col - 1],\n                    \"NW\": topPlane.grid[row - 1][col - 1]\n                }\n\n                // plane.grid[row][col].neighbors = neighbors;\n            }\n        }\n\n    }\n\n    makeMove(row, col, idx) {\n        this.planes[idx].grid[row][col].hidden = false;\n        \n        let value = this.planes[idx].grid[row][col].value;\n        switch (value) {\n            case 'Mine':\n                this.gameOver = true;\n                // render mine explosion\n                console.log('You exploded.')\n                break\n            case value>0:\n                break;\n            case 'vac':\n                // trigger a recursive call to reveal other adj vacs\n                let vacSet = new Set;\n                this.revealVacs(row, col, idx, vacSet);\n\n                vacSet.forEach((point) => {\n                    point.hidden = false;\n\n                    let neighborsUpPlane = Object.values(point.neighbors.upPlane);\n                    let neighborsSamePlane = Object.values(point.neighbors.samePlane);\n                    let neighborsDownPlane = Object.values(point.neighbors.downPlane);\n\n                    neighborsUpPlane.forEach((point) => {\n                        point.hidden = false;\n                    })\n                    neighborsSamePlane.forEach((point) => {\n                        point.hidden = false;\n                    })\n                    neighborsDownPlane.forEach((point) => {\n                        point.hidden = false;\n                    })\n\n                })\n                break;\n        }\n\n        this.renderMove();\n\n    }\n\n    revealVacs(row, col, idx, vacSet) {\n        let neighbors = this.planes[idx].grid[row][col].neighbors;\n\n        let neighborsUpPlane = Object.values(neighbors.upPlane);\n        let neighborsSamePlane = Object.values(neighbors.samePlane);\n        let neighborsDownPlane = Object.values(neighbors.downPlane);\n\n        this.planes[idx].grid[row][col].idx = idx;\n        vacSet.add(this.planes[idx].grid[row][col])\n\n        // iterate through the neighbors\n        neighborsUpPlane.forEach((neighbor) => {\n            if (vacSet.has(neighbor)) { \n                // do nothing\n            } else if (neighbor.value==='vac') {\n                this.revealVacs(neighbor.row, neighbor.col, idx-1, vacSet);\n            }\n        })\n\n        neighborsSamePlane.forEach((neighbor) => {\n            if (vacSet.has(neighbor)) {\n                // do nothing\n            } else if (neighbor.value==='vac') {\n                this.revealVacs(neighbor.row, neighbor.col, idx, vacSet);\n            }\n        })\n        neighborsDownPlane.forEach((neighbor) => {\n            if (vacSet.has(neighbor)) {\n                // do nothing\n            } else if (neighbor.value==='vac') {\n                this.revealVacs(neighbor.row, neighbor.col, idx+1, vacSet);\n            }\n        })\n\n    }\n\n    reset() {\n        this.gameOver = false;\n        g = new Game();\n    }\n\n    renderCheat() {\n        this.planes.forEach((plane, idx) => {\n            console.log(`planeIdx: ${idx}`)\n            plane.render();\n            console.log('\\n')\n        })\n    }\n\n    renderMove() {\n        this.planes.forEach((plane, idx) => {\n            if (idx === 0 || idx === this.planes.length - 1) {\n                console.log(`planeIdx: ${idx}`)\n                plane.render();\n                console.log('\\n')\n            } else {\n                console.log(`planeIdx: ${idx}`)\n                plane.renderMove();\n                console.log('\\n')\n            }\n        })\n            \n    }\n}\n\n// development debugging\n// let g = new Game(4, 'wheel');\n\n// g.player.makeMove(x,y,planeIdx);\n// g.renderCheat();\n// g.renderCheat();\n// console.log('\\n')\n\n\n\n//# sourceURL=webpack:///./src/GameLogic/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__ (/*! ./GameLogic/game */ \"./src/GameLogic/game.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
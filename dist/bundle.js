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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar item_1 = __webpack_require__(/*! ./item */ \"./src/item.ts\");\nvar elem = document.getElementById('output');\nvar aBook = new item_1.Item('はじめてのTypeScript', 2980);\naBook.say(elem);\nvar age = 1;\nage = 2;\n//リテラル型\nvar name = \"Jon\";\n//定数のように扱うことはできない\n//リテラル型のユニオン型\nvar name2 = \"a\";\n//anyとunknown\n//どんな値でも入ってしまう\nvar unk = \"aiko\";\nunk = 1;\n//unknown型のオブジェクトのプロパティは使用、呼び出しできない(anyはできる)\n//console.log(unk.length)\n//これによりランタイム時のエラーが起きないようにできる\n//何のためにunknownで定義するの？\n//キャストする際に全く関係ないものにキャストすることはできないが、一度anyかunknownにキャストして経由するとキャストできる。\n//そのような場合に使用する\n//名前つき関数\nfunction increment(num) {\n    return num + 1;\n}\n//匿名関数\nvar increment2 = function (num) {\n    return num + 1;\n};\n//匿名かつアロー関数\nvar increment3 = function (num) {\n    return num + 1;\n};\n//匿名かつアロー関数の省略記法\nvar increment4 = function (num) { return num + 1; };\n//このときにreturnはかけない\n//thisについて\n//() => {} とfunction() {}ではthisの扱いが異なる\n//() => {}は宣言時にthisであるものを使用する\n//function() {}は実行時にthisであるものを使用する\nvar v1 = undefined;\nvar ud1 = undefined;\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/item.ts":
/*!*********************!*\
  !*** ./src/item.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Item = void 0;\nvar Item = /** @class */ (function () {\n    function Item(name, price) {\n        this.name = name;\n        this.price = price;\n    }\n    Item.prototype.say = function (elem) {\n        if (elem) { // 引数がnullでない場合\n            elem.innerHTML = '書名：' + this.name + '  価格: ' + this.price + '円';\n        }\n    };\n    return Item;\n}());\nexports.Item = Item;\n\n\n//# sourceURL=webpack:///./src/item.ts?");

/***/ })

/******/ });
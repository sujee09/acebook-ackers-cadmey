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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
// import * as ActiveStorage from "@rails/activestorage"
// import "channels"
//
// Rails.start()
// Turbolinks.start()
// ActiveStorage.start()
__webpack_require__(/*! ./components/Homepage.jsx */ "./app/javascript/packs/components/Homepage.jsx"); // require('bootstrap')
// import 'bootstrap/dist/css/bootstrap'

/***/ }),

/***/ "./app/javascript/packs/components/Homepage.jsx":
/*!******************************************************!*\
  !*** ./app/javascript/packs/components/Homepage.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/app/javascript/packs/components/Homepage.jsx: Support for the experimental syntax 'jsx' isn't currently enabled (4:1):\n\n  2 | render: function() {\n  3 | return (\n> 4 | <h1>Hello {this.props.name}!</h1>\n    | ^\n  5 | )\n  6 | }\n  7 | });\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.expectOnePlugin (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:9198:18)\n    at Parser.parseExprAtom (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10667:22)\n    at Parser.parseExprSubscripts (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10248:23)\n    at Parser.parseUpdate (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10228:21)\n    at Parser.parseMaybeUnary (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10206:23)\n    at Parser.parseExprOps (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10071:23)\n    at Parser.parseMaybeConditional (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10045:23)\n    at Parser.parseMaybeAssign (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10008:21)\n    at /Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:9975:39\n    at Parser.allowInAnd (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:11647:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:9975:17)\n    at Parser.parseParenAndDistinguishExpression (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10850:28)\n    at Parser.parseExprAtom (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10568:21)\n    at Parser.parseExprSubscripts (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10248:23)\n    at Parser.parseUpdate (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10228:21)\n    at Parser.parseMaybeUnary (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10206:23)\n    at Parser.parseExprOps (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10071:23)\n    at Parser.parseMaybeConditional (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10045:23)\n    at Parser.parseMaybeAssign (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:10008:21)\n    at Parser.parseExpressionBase (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:9953:23)\n    at /Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:9947:39\n    at Parser.allowInAnd (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:11641:16)\n    at Parser.parseExpression (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:9947:17)\n    at Parser.parseReturnStatement (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:12145:28)\n    at Parser.parseStatementContent (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:11824:21)\n    at Parser.parseStatement (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:11776:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:12358:25)\n    at Parser.parseBlockBody (/Users/cahallavelle/Desktop/Projects/acebook-akers-cademy/node_modules/@babel/parser/lib/index.js:12349:10)");

/***/ })

/******/ });
//# sourceMappingURL=application-63cb044394a3bbe928b1.js.map
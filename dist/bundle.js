/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#enemy-grid,\n#player-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 400px;\n  height: 400px;\n  background-color: rgba(255, 255, 255, 0.235);\n  color: rgba(255, 255, 255, 0);\n}\n\n* {\n  border: 1px solid black;\n}\n\ndialog {\n  width: 100%;\n  height: 100%;\n  opacity: 0.2;\n  background-color: black;\n  display: grid;\n}\ndialog div {\n  justify-self: center;\n  align-self: center;\n  background-color: white;\n  height: 200px;\n  width: 200px;\n}\n\n.valid {\n  background-color: rgba(0, 0, 255, 0.35);\n}\n\n.invalid {\n  background-color: red;\n}\n\n.ship-overlay,\n.ship-over {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  z-index: -1;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;EACA,SAAA;EACA,UAAA;AACF;;AACA;;EAEE,aAAA;EAEA,sCAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EAEA,4CAAA;EACA,6BAAA;AAAF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,uBAAA;EACA,aAAA;AACF;AAAE;EACE,oBAAA;EACA,kBAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;AAEJ;;AAEA;EACE,uCAAA;AACF;;AACA;EACE,qBAAA;AAEF;;AAAA;;EAEE,kBAAA;EACA,OAAA;EACA,QAAA;EAEA,4BAAA;EACA,2BAAA;EACA,sBAAA;EAGA,WAAA;EACA,YAAA;AAAF","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n#enemy-grid,\n#player-grid {\n  display: grid;\n  \n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 400px;\n  height: 400px;\n  // opacity: 0.5;\n  background-color: rgba(255, 255, 255, 0.235);\n  color: rgba(255, 255, 255, 0);\n}\n* {\n  border: 1px solid black;\n}\n\ndialog {\n  width: 100%;\n  height: 100%;\n  opacity: 0.2;\n  background-color: black;\n  display: grid;\n  div {\n    justify-self: center;\n    align-self: center;\n    background-color: white;\n    height: 200px;\n    width: 200px;\n  }\n}\n\n.valid {\n  background-color: rgba(0, 0, 255, 0.35);\n}\n.invalid {\n  background-color: red;\n}\n.ship-overlay,\n.ship-over {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  // object-fit: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  // height: 100px;\n  // width: 100px;\n  z-index: -1;\n  border: none;\n  // background-image: url(./patrol.svg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGrid": () => (/* binding */ createGrid),
/* harmony export */   "editMode": () => (/* binding */ editMode),
/* harmony export */   "editModeEvent": () => (/* binding */ editModeEvent),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "updateEnemyGrid": () => (/* binding */ updateEnemyGrid),
/* harmony export */   "updateGrid": () => (/* binding */ updateGrid)
/* harmony export */ });
/* harmony import */ var _patrol_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patrol.svg */ "./src/patrol.svg");
/* harmony import */ var _submarine_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submarine.svg */ "./src/submarine.svg");
/* harmony import */ var _destroyer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destroyer.svg */ "./src/destroyer.svg");
/* harmony import */ var _carrier_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrier.svg */ "./src/carrier.svg");
/* harmony import */ var _patrol_v_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patrol-v.svg */ "./src/patrol-v.svg");
/* harmony import */ var _submarine_v_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submarine-v.svg */ "./src/submarine-v.svg");
/* harmony import */ var _destroyer_v_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./destroyer-v.svg */ "./src/destroyer-v.svg");
/* harmony import */ var _destroyer1v_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./destroyer1v.svg */ "./src/destroyer1v.svg");
/* harmony import */ var _carrier_v_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carrier-v.svg */ "./src/carrier-v.svg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable no-param-reassign */
// import pubsub from './utils';











const IMG = [];
const ships = [
  { length: 2, url: _patrol_svg__WEBPACK_IMPORTED_MODULE_0__, v: _patrol_v_svg__WEBPACK_IMPORTED_MODULE_4__ },
  { length: 3, url: _submarine_svg__WEBPACK_IMPORTED_MODULE_1__, v: _submarine_v_svg__WEBPACK_IMPORTED_MODULE_5__ },
  { length: 3.5, url: _destroyer_svg__WEBPACK_IMPORTED_MODULE_2__, v: _destroyer_v_svg__WEBPACK_IMPORTED_MODULE_6__ },
  { length: 4, url: _destroyer_svg__WEBPACK_IMPORTED_MODULE_2__, v: _destroyer1v_svg__WEBPACK_IMPORTED_MODULE_7__ },
  { length: 5, url: _carrier_svg__WEBPACK_IMPORTED_MODULE_3__, v: _carrier_v_svg__WEBPACK_IMPORTED_MODULE_8__ },
];
let shipIndex = 0;
const ORIENTATION = 'h';
const LENGHT = 3;

function createGrid(size = 10) {
  const grid = document.createElement('div');
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const div = document.createElement('div');
      div.setAttribute('data-x', i);
      div.setAttribute('data-y', j);
      grid.appendChild(div);
    }
  }
  return grid;
}

function updateGrid(board, grid) {
  board.forEach((rows, x) => {
    rows.forEach((columns, y) => {
      const div = grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      div.innerText = columns;
    });
  });
  IMG.forEach((img) => {
    grid.querySelector(`[data-x="${img.x}"][data-y="${img.y}"]`).appendChild(img.image);
  });
}

function updateEnemyGrid(board, grid, eventCB) {
  board.forEach((rows, x) => {
    rows.forEach((columns, y) => {
      const div = grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      div.textContent = columns;
      div.removeEventListener('click', eventCB);
      if (columns === '') { div.addEventListener('click', eventCB); }
    });
  });
}

function modal() {
  // console.log('hello');
  const dialog = document.createElement('dialog');
  dialog.open = true;
  document.body.appendChild(dialog);
  const div = document.createElement('div');
  dialog.appendChild(div);
}
// modal();
function xyToIndex(x, y) {
  return Number(x) * 10 + Number(y);
}

function addShipToGrid(e) {
  const x = Number(e.target.getAttribute(['data-x']));
  const y = Number(e.target.getAttribute(['data-y']));
  const length = Math.floor(ships[shipIndex].length);
  const grid = e.target.parentNode;
  const image = document.createElement('span');
  image.classList.add('ship-over');
  if (ORIENTATION === 'h') {
    image.style.backgroundImage = `url("${ships[shipIndex].url}")`;
    image.style.height = `${e.target.clientHeight}px`;
    image.style.width = `${e.target.clientWidth * length}px`;
  } else {
    image.style.backgroundImage = `url("${ships[shipIndex].v}")`;
    image.style.height = `${e.target.clientHeight * length}px`;
    image.style.width = `${e.target.clientWidth}px`;
    // } else {

    // image.style.transform = 'rotate(90deg)';
    // image.style.height = `${e.target.clientHeight}px`;
    // image.style.width = `${e.target.clientWidth * length}px`;
    // image.style.top = length < 4 ? `${33 * length}%` : `${38 * length}%`;
    // image.style.left = `${-30 * length}%`;
  }
  IMG.push({ x, y, image });
  _utils__WEBPACK_IMPORTED_MODULE_9__.pubsub.publish('player1AddShipToGrid', { length: Math.floor(ships[shipIndex].length), coord: { x, y, orientation: ORIENTATION } });
  if (shipIndex < 4) { shipIndex += 1; } else {
    _utils__WEBPACK_IMPORTED_MODULE_9__.pubsub.publish('killEvents', grid);
    document.querySelector('#edit-button').remove();
  }
}

function isPositionValid(length, { x, y, orientation }, grid, size = 10) {
  const nx = Number(x);
  const ny = Number(y);
  const array = Array.from(grid.querySelectorAll('div'));
  const index = orientation === 'v' ? nx : ny;
  for (let i = index; i < index + length && i < size; i += 1) {
    if (orientation === 'v') {
      // console.log(array[xyToIndex(i, ny)]);
      if (array[xyToIndex(i, ny)].textContent !== '' || index + length > size) {
        return false;
      }
    } else if (array[xyToIndex(nx, i)].textContent !== '' || index + length > size) {
      return false;
    }
  }
  array[xyToIndex(nx, ny)].style.position = 'relative';
  return true;
}

function manageValidClass(length, { x, y, orientation }, grid, classToAdd, size = 10) {
  const nx = Number(x);
  const ny = Number(y);
  const array = Array.from(grid.querySelectorAll('div'));
  if (orientation === 'v') {
    for (let j = nx; j < nx + length && j < size; j += 1) {
      array[xyToIndex(j, ny)].classList.add(classToAdd);
    }
  } else {
    for (let j = ny; j < ny + length && j < size; j += 1) {
      array[xyToIndex(nx, j)].classList.add(classToAdd);
    }
  }
  array[xyToIndex(nx, ny)].style.position = 'relative';
}

function editModeEvent(e) {
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  const grid = e.target.parentNode;

  const array = Array.from(grid.querySelectorAll('div'));
  array.forEach((div) => {
    div.classList.remove('invalid');
    div.classList.remove('valid');
    if (!div.innerHTML) { div.style.position = 'static'; }
    grid.querySelectorAll('span.ship-overlay').forEach((span) => span.remove());
  });
  const length = Math.floor(ships[shipIndex].length);
  const positionIsValid = isPositionValid(
    length,
    { x, y, orientation: ORIENTATION },
    grid,
  );
  const shipOverlay = document.createElement('span');
  shipOverlay.classList.add('ship-overlay');
  if (positionIsValid) {
    manageValidClass(length, { x, y, orientation: ORIENTATION }, grid, 'valid');
    if (ORIENTATION === 'h') {
      shipOverlay.style.backgroundImage = `url("${ships[shipIndex].url}")`;
      shipOverlay.style.height = `${e.target.clientHeight}px`;
      shipOverlay.style.width = `${e.target.clientWidth * length}px`;
    } else {
      shipOverlay.style.backgroundImage = `url("${ships[shipIndex].v}")`;
      shipOverlay.style.height = `${e.target.clientHeight * length}px`;
      shipOverlay.style.width = `${e.target.clientWidth}px`;

      // shipOverlay.style.transform = 'rotate(90deg)';
      // shipOverlay.style.height = `${e.target.clientHeight}px`;
      // shipOverlay.style.width = `${e.target.clientWidth * length}px`;
      // shipOverlay.style.top = length < 4 ? `${33 * length}%` : `${38 * length}%`;
      // shipOverlay.style.left = `${-30 * length}%`;
    }
    e.target.appendChild(shipOverlay);
    array[xyToIndex(x, y)].addEventListener('click', addShipToGrid);
  } else {
    manageValidClass(ships[shipIndex].length, { x, y, orientation: ORIENTATION }, grid, 'invalid');
    array[xyToIndex(x, y)].removeEventListener('click', addShipToGrid);
  }
}

function editMode(grid) {
  const divs = grid.querySelectorAll('div');
  divs.forEach((div) => div.addEventListener('mouseover', editModeEvent));
  const button = document.createElement('button');
  button.id = 'edit-button';
  button.textContent = 'Done';
  grid.parentNode.appendChild(button);
  button.onclick = () => {
    divs.forEach((div) => div.removeEventListener('mouseover', editModeEvent));
    button.remove();
  };
}

_utils__WEBPACK_IMPORTED_MODULE_9__.pubsub.subscribe('killEvents', (grid) => {
  grid.querySelectorAll('div').forEach((div) => {
    div.removeEventListener('mouseover', editModeEvent);
    div.classList.remove('valid');
    div.classList.remove('invalid');
    if (!div.innerHTML) { div.style.position = 'static'; }
    grid.querySelectorAll('span.ship-overlay').forEach((span) => span.remove());
  });
});




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



function Gameboard(size = 10) {
  let pBoard = _utils__WEBPACK_IMPORTED_MODULE_0__.getEmptyBoard(size);

  const ships = [];

  function addToBoard({ position }) {
    pBoard = pBoard.map((a, i) => (a.map((b, j) => {
      if (position[i][j].includes('O')) {
        return 'O';
      }
      if (position[i][j].includes('X')) {
        return 'X';
      }
      return b + position[i][j];
    })));
  }

  function updateBoard() {
    pBoard = _utils__WEBPACK_IMPORTED_MODULE_0__.getEmptyBoard(size);
    ships.forEach((ship) => addToBoard(ship));
  }

  function checkBoard() {
    pBoard.forEach((vector) => vector.forEach((element) => {
      if (element.length > 1) {
        ships.pop();
        throw new Error('There another ship in that place');
      }
    }));
  }

  function addShip(length, { x, y, orientation }) {
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(length, { x, y, orientation });
    ships.push(ship);
    updateBoard();
    checkBoard();
    return 'SUCCESS';
  }

  function receiveAttack(x, y) {
    for (let i = 0; i < ships.length; i += 1) {
      const hit = ships[i].hit(x, y);
      updateBoard();
      if (hit === 'HIT') {
        const shipHit = ships[i];
        return { shipHit, board: pBoard };
      }
    }
    return { board: pBoard };
  }

  function isGameOver() {
    let allShipSunk = true;
    ships.forEach((ship) => {
      if (!ship.isSunk()) {
        allShipSunk = false;
      }
    });
    return allShipSunk;
  }

  return {
    addShip,
    receiveAttack,
    isGameOver,
    get board() { return pBoard; },
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



function Player(num) {
  const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const pEnemyBoard = _utils__WEBPACK_IMPORTED_MODULE_1__.getEmptyBoard();
  function fire(x, y) {
    if (pEnemyBoard[x][y] === 'X' || pEnemyBoard[x][y] === 'O') { throw new Error('you can not fire where you already did'); }
    _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish(`player${num}Played`, [x, y]);
  }

  function takeFire([x, y]) {
    const { shipHit, board } = playerBoard.receiveAttack(x, y);
    _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish(`player${num}BoardChanged`, board);
    if (shipHit !== undefined) {
      _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish(`player${num}Hit`, [x, y, true, board]);
    } else {
      _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish(`player${num}Hit`, [x, y, false, board]);
    }
  }
  _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe(`player${num === 2 ? 1 : 2}Played`, takeFire);

  function updateEnemyBoard([x, y, hit]) {
    if (hit) { pEnemyBoard[x][y] = 'X'; } else { pEnemyBoard[x][y] = 'O'; }
    _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish(`enemy${num}BoardChanged`, pEnemyBoard);
  }
  _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe(`player${num === 2 ? 1 : 2}Hit`, updateEnemyBoard);

  function randomCoord(size = 10, size2 = 10) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size2);
    return [x, y];
  }

  function computerFire() {
    for (let i = 0; i < 100; i += 1) {
      try {
        const [x, y] = randomCoord();
        fire(x, y);
        return;
      } catch (err) {
        // console.log(err);
      }
    }
  }

  function addShip(...params) {
    playerBoard.addShip(params[0], params[1]);
    _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish(`player${num}BoardChanged`, playerBoard.board);
  }

  function addComputerShip(lenght, size = 10) {
    let x; let y; let orientation;
    let count = 0;
    for (let i = 0; i < 100; i += 1) {
      try {
        orientation = Math.floor(Math.random() * 2) ? 'v' : 'h';
        const size1 = orientation === 'v' ? (size - Math.floor(lenght)) : size;
        const size2 = orientation === 'h' ? (size - Math.floor(lenght)) : size;
        [x, y] = randomCoord(size1, size2);
        addShip(lenght, { x, y, orientation });
        count = 0;
        break;
      } catch (err) {
        // console.log(err);
        count += 1;
        if (count > 100) { break; }
      }
    }
  }

  return {
    get enemyBoard() { return pEnemyBoard; },
    playerBoard,
    addShip,
    fire,
    computerFire,
    addComputerShip,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


function Ship(length, { x, y, orientation }) {
  let name;
  switch (length) { // Select Name and Error check
    case 2:
      name = 'Patrol Boat';
      break;
    case 3:
      name = 'Submarine';
      break;
    case 3.5:
      name = 'Battleship';
      break;
    case 4:
      name = 'Destroyer';
      break;
    case 5:
      name = 'Carrier';
      break;
    default:
      name = 'ERROR';
      break;
  }
  const lengthFloor = Math.floor(length);
  const position = (() => { // put the ship in an empty board
    if ((orientation === 'v' && x + lengthFloor > 10) || (orientation === 'h' && y + lengthFloor > 10)) {
      throw new Error('ERROR: The ship is out of bounds');
    }
    const newArray = _utils__WEBPACK_IMPORTED_MODULE_0__.getEmptyBoard();
    for (let i = 0; i < lengthFloor; i += 1) {
      if (orientation === 'v') {
        newArray[x + i][y] = name.at(0);
      } else {
        newArray[x][y + i] = name.at(0);
      }
    }
    return newArray;
  })();

  function isSunk() {
    for (let i = 0; i < 10; i += 1) {
      if (position[i].includes(name.at(0))) {
        return false;
      }
    }
    return true;
  }

  function hit(hx, hy) {
    if (hx > 9 || hy > 9) { return 'ERROR'; }
    if (position[hx][hy] !== '') {
      position[hx][hy] = 'X';
      return 'HIT';
    }
    position[hx][hy] = 'O';
    return 'MISS';
  }

  return {
    length: lengthFloor,
    name,
    position,
    hit,
    isSunk,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncPipe": () => (/* binding */ asyncPipe),
/* harmony export */   "getEmptyBoard": () => (/* binding */ getEmptyBoard),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
const pubsub = {
  events: {},
  subscribe(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  unsubscribe(eventName, fn) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((f) => f !== fn);
    }
  },
  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((f) => f(data));
    }
  },
};

function handleError(fn) {
  return (...params) => fn(...params).catch((er) => {
    pubsub.publish('error', er);
  });
}

const asyncPipe = (...fns) => (x) => (
  fns.reduce(async (y, f) => f(await y), x)
);

function getEmptyBoard(size = 10) {
  const array = [];
  for (let i = 0; i < size; i += 1) {
    array[i] = [];
    for (let j = 0; j < size; j += 1) {
      array[i][j] = '';
    }
  }
  return array;
}




/***/ }),

/***/ "./src/carrier-v.svg":
/*!***************************!*\
  !*** ./src/carrier-v.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b5a759577057c56e711.svg";

/***/ }),

/***/ "./src/carrier.svg":
/*!*************************!*\
  !*** ./src/carrier.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69be4df16a9a79625ec9.svg";

/***/ }),

/***/ "./src/destroyer-v.svg":
/*!*****************************!*\
  !*** ./src/destroyer-v.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5b7170845e7385d23f7.svg";

/***/ }),

/***/ "./src/destroyer.svg":
/*!***************************!*\
  !*** ./src/destroyer.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9281e50ac335172eca7.svg";

/***/ }),

/***/ "./src/destroyer1v.svg":
/*!*****************************!*\
  !*** ./src/destroyer1v.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09662d84fd997bae557a.svg";

/***/ }),

/***/ "./src/patrol-v.svg":
/*!**************************!*\
  !*** ./src/patrol-v.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98a54292c9c1629e6385.svg";

/***/ }),

/***/ "./src/patrol.svg":
/*!************************!*\
  !*** ./src/patrol.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5050c3ee4e2425de07ce.svg";

/***/ }),

/***/ "./src/submarine-v.svg":
/*!*****************************!*\
  !*** ./src/submarine-v.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae5634929fdf7ab6e1d6.svg";

/***/ }),

/***/ "./src/submarine.svg":
/*!***************************!*\
  !*** ./src/submarine.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03df36427e6535115de6.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");

// import Ship from './ship';

// import Gameboard from './gameboard';



// --- init ---

const playerGrid = _DOM__WEBPACK_IMPORTED_MODULE_3__.createGrid();
playerGrid.setAttribute('id', 'player-grid');
document.body.appendChild(playerGrid);

const enemyGrid = _DOM__WEBPACK_IMPORTED_MODULE_3__.createGrid();
enemyGrid.setAttribute('id', 'enemy-grid');
document.body.appendChild(enemyGrid);

_utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('player1BoardChanged', (board) => _DOM__WEBPACK_IMPORTED_MODULE_3__.updateGrid(board, playerGrid));

const shipsClassicTemplate = [2, 3, 3.5, 4, 5];
const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(1);
const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(2);
function enemyBoardEvent(e) {
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  player1.fire(x, y);
  player2.computerFire();
}
enemyGrid.querySelectorAll('div').forEach((div) => div.addEventListener('click', enemyBoardEvent));
_utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('enemy1BoardChanged', (board) => _DOM__WEBPACK_IMPORTED_MODULE_3__.updateEnemyGrid(board, enemyGrid, enemyBoardEvent));

shipsClassicTemplate.forEach((length) => {
  // player1.addComputerShip(length);
  player2.addComputerShip(length);
});
_utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('player1AddShipToGrid', ({ length, coord }) => {
  player1.addShip(length, coord);
  // console.table(player1.playerBoard.board);
  // console.log({ length, coord });
});

_DOM__WEBPACK_IMPORTED_MODULE_3__.editMode(playerGrid);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2VuZW15LWdyaWQsXFxuI3BsYXllci1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMzUpO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcblxcbioge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmRpYWxvZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuZGlhbG9nIGRpdiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjM1KTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc2hpcC1vdmVybGF5LFxcbi5zaGlwLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTs7RUFFRSxhQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsNENBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQUE7O0VBRUUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUdBLFdBQUE7RUFDQSxZQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbiNlbmVteS1ncmlkLFxcbiNwbGF5ZXItZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIC8vIG9wYWNpdHk6IDAuNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMzUpO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcbioge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmRpYWxvZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGRpdiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICB9XFxufVxcblxcbi52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4zNSk7XFxufVxcbi5pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLnNoaXAtb3ZlcmxheSxcXG4uc2hpcC1vdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAvLyBoZWlnaHQ6IDEwMHB4O1xcbiAgLy8gd2lkdGg6IDEwMHB4O1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXI6IG5vbmU7XFxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9wYXRyb2wuc3ZnKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8vIGltcG9ydCBwdWJzdWIgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgcGF0cm9sIGZyb20gJy4vcGF0cm9sLnN2Zyc7XG5pbXBvcnQgc3VibWFyaW5lIGZyb20gJy4vc3VibWFyaW5lLnN2Zyc7XG5pbXBvcnQgZGVzdHJveWVyIGZyb20gJy4vZGVzdHJveWVyLnN2Zyc7XG5pbXBvcnQgY2FycmllciBmcm9tICcuL2NhcnJpZXIuc3ZnJztcbmltcG9ydCBwYXRyb2x2IGZyb20gJy4vcGF0cm9sLXYuc3ZnJztcbmltcG9ydCBzdWJtYXJpbmV2IGZyb20gJy4vc3VibWFyaW5lLXYuc3ZnJztcbmltcG9ydCBkZXN0cm95ZXJ2IGZyb20gJy4vZGVzdHJveWVyLXYuc3ZnJztcbmltcG9ydCBkZXN0cm95ZXJidiBmcm9tICcuL2Rlc3Ryb3llcjF2LnN2Zyc7XG5pbXBvcnQgY2FycmllcnYgZnJvbSAnLi9jYXJyaWVyLXYuc3ZnJztcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBJTUcgPSBbXTtcbmNvbnN0IHNoaXBzID0gW1xuICB7IGxlbmd0aDogMiwgdXJsOiBwYXRyb2wsIHY6IHBhdHJvbHYgfSxcbiAgeyBsZW5ndGg6IDMsIHVybDogc3VibWFyaW5lLCB2OiBzdWJtYXJpbmV2IH0sXG4gIHsgbGVuZ3RoOiAzLjUsIHVybDogZGVzdHJveWVyLCB2OiBkZXN0cm95ZXJ2IH0sXG4gIHsgbGVuZ3RoOiA0LCB1cmw6IGRlc3Ryb3llciwgdjogZGVzdHJveWVyYnYgfSxcbiAgeyBsZW5ndGg6IDUsIHVybDogY2FycmllciwgdjogY2FycmllcnYgfSxcbl07XG5sZXQgc2hpcEluZGV4ID0gMDtcbmNvbnN0IE9SSUVOVEFUSU9OID0gJ2gnO1xuY29uc3QgTEVOR0hUID0gMztcblxuZnVuY3Rpb24gY3JlYXRlR3JpZChzaXplID0gMTApIHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaiArPSAxKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGkpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS15Jywgaik7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG4gIHJldHVybiBncmlkO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVHcmlkKGJvYXJkLCBncmlkKSB7XG4gIGJvYXJkLmZvckVhY2goKHJvd3MsIHgpID0+IHtcbiAgICByb3dzLmZvckVhY2goKGNvbHVtbnMsIHkpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgICAgZGl2LmlubmVyVGV4dCA9IGNvbHVtbnM7XG4gICAgfSk7XG4gIH0pO1xuICBJTUcuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgZ3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtpbWcueH1cIl1bZGF0YS15PVwiJHtpbWcueX1cIl1gKS5hcHBlbmRDaGlsZChpbWcuaW1hZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRW5lbXlHcmlkKGJvYXJkLCBncmlkLCBldmVudENCKSB7XG4gIGJvYXJkLmZvckVhY2goKHJvd3MsIHgpID0+IHtcbiAgICByb3dzLmZvckVhY2goKGNvbHVtbnMsIHkpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gY29sdW1ucztcbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50Q0IpO1xuICAgICAgaWYgKGNvbHVtbnMgPT09ICcnKSB7IGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50Q0IpOyB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb2RhbCgpIHtcbiAgLy8gY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBkaWFsb2cub3BlbiA9IHRydWU7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChkaXYpO1xufVxuLy8gbW9kYWwoKTtcbmZ1bmN0aW9uIHh5VG9JbmRleCh4LCB5KSB7XG4gIHJldHVybiBOdW1iZXIoeCkgKiAxMCArIE51bWJlcih5KTtcbn1cblxuZnVuY3Rpb24gYWRkU2hpcFRvR3JpZChlKSB7XG4gIGNvbnN0IHggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS14J10pKTtcbiAgY29uc3QgeSA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoWydkYXRhLXknXSkpO1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmZsb29yKHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoKTtcbiAgY29uc3QgZ3JpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdzaGlwLW92ZXInKTtcbiAgaWYgKE9SSUVOVEFUSU9OID09PSAnaCcpIHtcbiAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtzaGlwc1tzaGlwSW5kZXhdLnVybH1cIilgO1xuICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGAke2UudGFyZ2V0LmNsaWVudEhlaWdodH1weGA7XG4gICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBgJHtlLnRhcmdldC5jbGllbnRXaWR0aCAqIGxlbmd0aH1weGA7XG4gIH0gZWxzZSB7XG4gICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7c2hpcHNbc2hpcEluZGV4XS52fVwiKWA7XG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0ICogbGVuZ3RofXB4YDtcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9IGAke2UudGFyZ2V0LmNsaWVudFdpZHRofXB4YDtcbiAgICAvLyB9IGVsc2Uge1xuXG4gICAgLy8gaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgIC8vIGltYWdlLnN0eWxlLmhlaWdodCA9IGAke2UudGFyZ2V0LmNsaWVudEhlaWdodH1weGA7XG4gICAgLy8gaW1hZ2Uuc3R5bGUud2lkdGggPSBgJHtlLnRhcmdldC5jbGllbnRXaWR0aCAqIGxlbmd0aH1weGA7XG4gICAgLy8gaW1hZ2Uuc3R5bGUudG9wID0gbGVuZ3RoIDwgNCA/IGAkezMzICogbGVuZ3RofSVgIDogYCR7MzggKiBsZW5ndGh9JWA7XG4gICAgLy8gaW1hZ2Uuc3R5bGUubGVmdCA9IGAkey0zMCAqIGxlbmd0aH0lYDtcbiAgfVxuICBJTUcucHVzaCh7IHgsIHksIGltYWdlIH0pO1xuICBwdWJzdWIucHVibGlzaCgncGxheWVyMUFkZFNoaXBUb0dyaWQnLCB7IGxlbmd0aDogTWF0aC5mbG9vcihzaGlwc1tzaGlwSW5kZXhdLmxlbmd0aCksIGNvb3JkOiB7IHgsIHksIG9yaWVudGF0aW9uOiBPUklFTlRBVElPTiB9IH0pO1xuICBpZiAoc2hpcEluZGV4IDwgNCkgeyBzaGlwSW5kZXggKz0gMTsgfSBlbHNlIHtcbiAgICBwdWJzdWIucHVibGlzaCgna2lsbEV2ZW50cycsIGdyaWQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWJ1dHRvbicpLnJlbW92ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUG9zaXRpb25WYWxpZChsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb24gfSwgZ3JpZCwgc2l6ZSA9IDEwKSB7XG4gIGNvbnN0IG54ID0gTnVtYmVyKHgpO1xuICBjb25zdCBueSA9IE51bWJlcih5KTtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKGdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykpO1xuICBjb25zdCBpbmRleCA9IG9yaWVudGF0aW9uID09PSAndicgPyBueCA6IG55O1xuICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIGxlbmd0aCAmJiBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFycmF5W3h5VG9JbmRleChpLCBueSldKTtcbiAgICAgIGlmIChhcnJheVt4eVRvSW5kZXgoaSwgbnkpXS50ZXh0Q29udGVudCAhPT0gJycgfHwgaW5kZXggKyBsZW5ndGggPiBzaXplKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFycmF5W3h5VG9JbmRleChueCwgaSldLnRleHRDb250ZW50ICE9PSAnJyB8fCBpbmRleCArIGxlbmd0aCA+IHNpemUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYXJyYXlbeHlUb0luZGV4KG54LCBueSldLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG1hbmFnZVZhbGlkQ2xhc3MobGVuZ3RoLCB7IHgsIHksIG9yaWVudGF0aW9uIH0sIGdyaWQsIGNsYXNzVG9BZGQsIHNpemUgPSAxMCkge1xuICBjb25zdCBueCA9IE51bWJlcih4KTtcbiAgY29uc3QgbnkgPSBOdW1iZXIoeSk7XG4gIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpKTtcbiAgaWYgKG9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICBmb3IgKGxldCBqID0gbng7IGogPCBueCArIGxlbmd0aCAmJiBqIDwgc2l6ZTsgaiArPSAxKSB7XG4gICAgICBhcnJheVt4eVRvSW5kZXgoaiwgbnkpXS5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBqID0gbnk7IGogPCBueSArIGxlbmd0aCAmJiBqIDwgc2l6ZTsgaiArPSAxKSB7XG4gICAgICBhcnJheVt4eVRvSW5kZXgobngsIGopXS5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICAgIH1cbiAgfVxuICBhcnJheVt4eVRvSW5kZXgobngsIG55KV0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xufVxuXG5mdW5jdGlvbiBlZGl0TW9kZUV2ZW50KGUpIHtcbiAgY29uc3QgeCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShbJ2RhdGEteCddKTtcbiAgY29uc3QgeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShbJ2RhdGEteSddKTtcbiAgY29uc3QgZ3JpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKGdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykpO1xuICBhcnJheS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZCcpO1xuICAgIGlmICghZGl2LmlubmVySFRNTCkgeyBkaXYuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJzsgfVxuICAgIGdyaWQucXVlcnlTZWxlY3RvckFsbCgnc3Bhbi5zaGlwLW92ZXJsYXknKS5mb3JFYWNoKChzcGFuKSA9PiBzcGFuLnJlbW92ZSgpKTtcbiAgfSk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguZmxvb3Ioc2hpcHNbc2hpcEluZGV4XS5sZW5ndGgpO1xuICBjb25zdCBwb3NpdGlvbklzVmFsaWQgPSBpc1Bvc2l0aW9uVmFsaWQoXG4gICAgbGVuZ3RoLFxuICAgIHsgeCwgeSwgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OIH0sXG4gICAgZ3JpZCxcbiAgKTtcbiAgY29uc3Qgc2hpcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNoaXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3NoaXAtb3ZlcmxheScpO1xuICBpZiAocG9zaXRpb25Jc1ZhbGlkKSB7XG4gICAgbWFuYWdlVmFsaWRDbGFzcyhsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OIH0sIGdyaWQsICd2YWxpZCcpO1xuICAgIGlmIChPUklFTlRBVElPTiA9PT0gJ2gnKSB7XG4gICAgICBzaGlwT3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtzaGlwc1tzaGlwSW5kZXhdLnVybH1cIilgO1xuICAgICAgc2hpcE92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLndpZHRoID0gYCR7ZS50YXJnZXQuY2xpZW50V2lkdGggKiBsZW5ndGh9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwT3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtzaGlwc1tzaGlwSW5kZXhdLnZ9XCIpYDtcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2UudGFyZ2V0LmNsaWVudEhlaWdodCAqIGxlbmd0aH1weGA7XG4gICAgICBzaGlwT3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2UudGFyZ2V0LmNsaWVudFdpZHRofXB4YDtcblxuICAgICAgLy8gc2hpcE92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgLy8gc2hpcE92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICAgIC8vIHNoaXBPdmVybGF5LnN0eWxlLndpZHRoID0gYCR7ZS50YXJnZXQuY2xpZW50V2lkdGggKiBsZW5ndGh9cHhgO1xuICAgICAgLy8gc2hpcE92ZXJsYXkuc3R5bGUudG9wID0gbGVuZ3RoIDwgNCA/IGAkezMzICogbGVuZ3RofSVgIDogYCR7MzggKiBsZW5ndGh9JWA7XG4gICAgICAvLyBzaGlwT3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7LTMwICogbGVuZ3RofSVgO1xuICAgIH1cbiAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChzaGlwT3ZlcmxheSk7XG4gICAgYXJyYXlbeHlUb0luZGV4KHgsIHkpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFNoaXBUb0dyaWQpO1xuICB9IGVsc2Uge1xuICAgIG1hbmFnZVZhbGlkQ2xhc3Moc2hpcHNbc2hpcEluZGV4XS5sZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OIH0sIGdyaWQsICdpbnZhbGlkJyk7XG4gICAgYXJyYXlbeHlUb0luZGV4KHgsIHkpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFNoaXBUb0dyaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRNb2RlKGdyaWQpIHtcbiAgY29uc3QgZGl2cyA9IGdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZWRpdE1vZGVFdmVudCkpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmlkID0gJ2VkaXQtYnV0dG9uJztcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICBncmlkLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlZGl0TW9kZUV2ZW50KSk7XG4gICAgYnV0dG9uLnJlbW92ZSgpO1xuICB9O1xufVxuXG5wdWJzdWIuc3Vic2NyaWJlKCdraWxsRXZlbnRzJywgKGdyaWQpID0+IHtcbiAgZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZWRpdE1vZGVFdmVudCk7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICBpZiAoIWRpdi5pbm5lckhUTUwpIHsgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7IH1cbiAgICBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4uc2hpcC1vdmVybGF5JykuZm9yRWFjaCgoc3BhbikgPT4gc3Bhbi5yZW1vdmUoKSk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUdyaWQsXG4gIHVwZGF0ZUdyaWQsXG4gIHVwZGF0ZUVuZW15R3JpZCxcbiAgbW9kYWwsXG4gIGVkaXRNb2RlLFxuICBlZGl0TW9kZUV2ZW50LFxufTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZnVuY3Rpb24gR2FtZWJvYXJkKHNpemUgPSAxMCkge1xuICBsZXQgcEJvYXJkID0gdXRpbHMuZ2V0RW1wdHlCb2FyZChzaXplKTtcblxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZFRvQm9hcmQoeyBwb3NpdGlvbiB9KSB7XG4gICAgcEJvYXJkID0gcEJvYXJkLm1hcCgoYSwgaSkgPT4gKGEubWFwKChiLCBqKSA9PiB7XG4gICAgICBpZiAocG9zaXRpb25baV1bal0uaW5jbHVkZXMoJ08nKSkge1xuICAgICAgICByZXR1cm4gJ08nO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uW2ldW2pdLmluY2x1ZGVzKCdYJykpIHtcbiAgICAgICAgcmV0dXJuICdYJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBiICsgcG9zaXRpb25baV1bal07XG4gICAgfSkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkKCkge1xuICAgIHBCb2FyZCA9IHV0aWxzLmdldEVtcHR5Qm9hcmQoc2l6ZSk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gYWRkVG9Cb2FyZChzaGlwKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0JvYXJkKCkge1xuICAgIHBCb2FyZC5mb3JFYWNoKCh2ZWN0b3IpID0+IHZlY3Rvci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHNoaXBzLnBvcCgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFub3RoZXIgc2hpcCBpbiB0aGF0IHBsYWNlJyk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2hpcChsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb24gfSkge1xuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9KTtcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIHVwZGF0ZUJvYXJkKCk7XG4gICAgY2hlY2tCb2FyZCgpO1xuICAgIHJldHVybiAnU1VDQ0VTUyc7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwc1tpXS5oaXQoeCwgeSk7XG4gICAgICB1cGRhdGVCb2FyZCgpO1xuICAgICAgaWYgKGhpdCA9PT0gJ0hJVCcpIHtcbiAgICAgICAgY29uc3Qgc2hpcEhpdCA9IHNoaXBzW2ldO1xuICAgICAgICByZXR1cm4geyBzaGlwSGl0LCBib2FyZDogcEJvYXJkIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGJvYXJkOiBwQm9hcmQgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzR2FtZU92ZXIoKSB7XG4gICAgbGV0IGFsbFNoaXBTdW5rID0gdHJ1ZTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgYWxsU2hpcFN1bmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWxsU2hpcFN1bms7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZFNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBpc0dhbWVPdmVyLFxuICAgIGdldCBib2FyZCgpIHsgcmV0dXJuIHBCb2FyZDsgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gUGxheWVyKG51bSkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwRW5lbXlCb2FyZCA9IHV0aWxzLmdldEVtcHR5Qm9hcmQoKTtcbiAgZnVuY3Rpb24gZmlyZSh4LCB5KSB7XG4gICAgaWYgKHBFbmVteUJvYXJkW3hdW3ldID09PSAnWCcgfHwgcEVuZW15Qm9hcmRbeF1beV0gPT09ICdPJykgeyB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBjYW4gbm90IGZpcmUgd2hlcmUgeW91IGFscmVhZHkgZGlkJyk7IH1cbiAgICB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19UGxheWVkYCwgW3gsIHldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRha2VGaXJlKFt4LCB5XSkge1xuICAgIGNvbnN0IHsgc2hpcEhpdCwgYm9hcmQgfSA9IHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfUJvYXJkQ2hhbmdlZGAsIGJvYXJkKTtcbiAgICBpZiAoc2hpcEhpdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19SGl0YCwgW3gsIHksIHRydWUsIGJvYXJkXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBwbGF5ZXIke251bX1IaXRgLCBbeCwgeSwgZmFsc2UsIGJvYXJkXSk7XG4gICAgfVxuICB9XG4gIHV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoYHBsYXllciR7bnVtID09PSAyID8gMSA6IDJ9UGxheWVkYCwgdGFrZUZpcmUpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUVuZW15Qm9hcmQoW3gsIHksIGhpdF0pIHtcbiAgICBpZiAoaGl0KSB7IHBFbmVteUJvYXJkW3hdW3ldID0gJ1gnOyB9IGVsc2UgeyBwRW5lbXlCb2FyZFt4XVt5XSA9ICdPJzsgfVxuICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBlbmVteSR7bnVtfUJvYXJkQ2hhbmdlZGAsIHBFbmVteUJvYXJkKTtcbiAgfVxuICB1dGlscy5wdWJzdWIuc3Vic2NyaWJlKGBwbGF5ZXIke251bSA9PT0gMiA/IDEgOiAyfUhpdGAsIHVwZGF0ZUVuZW15Qm9hcmQpO1xuXG4gIGZ1bmN0aW9uIHJhbmRvbUNvb3JkKHNpemUgPSAxMCwgc2l6ZTIgPSAxMCkge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZTIpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlckZpcmUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gcmFuZG9tQ29vcmQoKTtcbiAgICAgICAgZmlyZSh4LCB5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2hpcCguLi5wYXJhbXMpIHtcbiAgICBwbGF5ZXJCb2FyZC5hZGRTaGlwKHBhcmFtc1swXSwgcGFyYW1zWzFdKTtcbiAgICB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19Qm9hcmRDaGFuZ2VkYCwgcGxheWVyQm9hcmQuYm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ29tcHV0ZXJTaGlwKGxlbmdodCwgc2l6ZSA9IDEwKSB7XG4gICAgbGV0IHg7IGxldCB5OyBsZXQgb3JpZW50YXRpb247XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICB0cnkge1xuICAgICAgICBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID8gJ3YnIDogJ2gnO1xuICAgICAgICBjb25zdCBzaXplMSA9IG9yaWVudGF0aW9uID09PSAndicgPyAoc2l6ZSAtIE1hdGguZmxvb3IobGVuZ2h0KSkgOiBzaXplO1xuICAgICAgICBjb25zdCBzaXplMiA9IG9yaWVudGF0aW9uID09PSAnaCcgPyAoc2l6ZSAtIE1hdGguZmxvb3IobGVuZ2h0KSkgOiBzaXplO1xuICAgICAgICBbeCwgeV0gPSByYW5kb21Db29yZChzaXplMSwgc2l6ZTIpO1xuICAgICAgICBhZGRTaGlwKGxlbmdodCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9KTtcbiAgICAgICAgY291bnQgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICBpZiAoY291bnQgPiAxMDApIHsgYnJlYWs7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBlbmVteUJvYXJkKCkgeyByZXR1cm4gcEVuZW15Qm9hcmQ7IH0sXG4gICAgcGxheWVyQm9hcmQsXG4gICAgYWRkU2hpcCxcbiAgICBmaXJlLFxuICAgIGNvbXB1dGVyRmlyZSxcbiAgICBhZGRDb21wdXRlclNoaXAsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBTaGlwKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9KSB7XG4gIGxldCBuYW1lO1xuICBzd2l0Y2ggKGxlbmd0aCkgeyAvLyBTZWxlY3QgTmFtZSBhbmQgRXJyb3IgY2hlY2tcbiAgICBjYXNlIDI6XG4gICAgICBuYW1lID0gJ1BhdHJvbCBCb2F0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG5hbWUgPSAnU3VibWFyaW5lJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMy41OlxuICAgICAgbmFtZSA9ICdCYXR0bGVzaGlwJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIG5hbWUgPSAnRGVzdHJveWVyJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIG5hbWUgPSAnQ2Fycmllcic7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbmFtZSA9ICdFUlJPUic7XG4gICAgICBicmVhaztcbiAgfVxuICBjb25zdCBsZW5ndGhGbG9vciA9IE1hdGguZmxvb3IobGVuZ3RoKTtcbiAgY29uc3QgcG9zaXRpb24gPSAoKCkgPT4geyAvLyBwdXQgdGhlIHNoaXAgaW4gYW4gZW1wdHkgYm9hcmRcbiAgICBpZiAoKG9yaWVudGF0aW9uID09PSAndicgJiYgeCArIGxlbmd0aEZsb29yID4gMTApIHx8IChvcmllbnRhdGlvbiA9PT0gJ2gnICYmIHkgKyBsZW5ndGhGbG9vciA+IDEwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFUlJPUjogVGhlIHNoaXAgaXMgb3V0IG9mIGJvdW5kcycpO1xuICAgIH1cbiAgICBjb25zdCBuZXdBcnJheSA9IHV0aWxzLmdldEVtcHR5Qm9hcmQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aEZsb29yOyBpICs9IDEpIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgIG5ld0FycmF5W3ggKyBpXVt5XSA9IG5hbWUuYXQoMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdBcnJheVt4XVt5ICsgaV0gPSBuYW1lLmF0KDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgaWYgKHBvc2l0aW9uW2ldLmluY2x1ZGVzKG5hbWUuYXQoMCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoaHgsIGh5KSB7XG4gICAgaWYgKGh4ID4gOSB8fCBoeSA+IDkpIHsgcmV0dXJuICdFUlJPUic7IH1cbiAgICBpZiAocG9zaXRpb25baHhdW2h5XSAhPT0gJycpIHtcbiAgICAgIHBvc2l0aW9uW2h4XVtoeV0gPSAnWCc7XG4gICAgICByZXR1cm4gJ0hJVCc7XG4gICAgfVxuICAgIHBvc2l0aW9uW2h4XVtoeV0gPSAnTyc7XG4gICAgcmV0dXJuICdNSVNTJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoOiBsZW5ndGhGbG9vcixcbiAgICBuYW1lLFxuICAgIHBvc2l0aW9uLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJjb25zdCBwdWJzdWIgPSB7XG4gIGV2ZW50czoge30sXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfSxcbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoKGYpID0+IGYgIT09IGZuKTtcbiAgICB9XG4gIH0sXG4gIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZikgPT4gZihkYXRhKSk7XG4gICAgfVxuICB9LFxufTtcblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZm4pIHtcbiAgcmV0dXJuICguLi5wYXJhbXMpID0+IGZuKC4uLnBhcmFtcykuY2F0Y2goKGVyKSA9PiB7XG4gICAgcHVic3ViLnB1Ymxpc2goJ2Vycm9yJywgZXIpO1xuICB9KTtcbn1cblxuY29uc3QgYXN5bmNQaXBlID0gKC4uLmZucykgPT4gKHgpID0+IChcbiAgZm5zLnJlZHVjZShhc3luYyAoeSwgZikgPT4gZihhd2FpdCB5KSwgeClcbik7XG5cbmZ1bmN0aW9uIGdldEVtcHR5Qm9hcmQoc2l6ZSA9IDEwKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgYXJyYXlbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgYXJyYXlbaV1bal0gPSAnJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQge1xuICBwdWJzdWIsIGhhbmRsZUVycm9yLCBhc3luY1BpcGUsIGdldEVtcHR5Qm9hcmQsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbi8vIGltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbi8vIGltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00nO1xuXG4vLyAtLS0gaW5pdCAtLS1cblxuY29uc3QgcGxheWVyR3JpZCA9IERPTS5jcmVhdGVHcmlkKCk7XG5wbGF5ZXJHcmlkLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLWdyaWQnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGxheWVyR3JpZCk7XG5cbmNvbnN0IGVuZW15R3JpZCA9IERPTS5jcmVhdGVHcmlkKCk7XG5lbmVteUdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdlbmVteS1ncmlkJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZW15R3JpZCk7XG5cbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ3BsYXllcjFCb2FyZENoYW5nZWQnLCAoYm9hcmQpID0+IERPTS51cGRhdGVHcmlkKGJvYXJkLCBwbGF5ZXJHcmlkKSk7XG5cbmNvbnN0IHNoaXBzQ2xhc3NpY1RlbXBsYXRlID0gWzIsIDMsIDMuNSwgNCwgNV07XG5jb25zdCBwbGF5ZXIxID0gUGxheWVyKDEpO1xuY29uc3QgcGxheWVyMiA9IFBsYXllcigyKTtcbmZ1bmN0aW9uIGVuZW15Qm9hcmRFdmVudChlKSB7XG4gIGNvbnN0IHggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoWydkYXRhLXgnXSk7XG4gIGNvbnN0IHkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoWydkYXRhLXknXSk7XG4gIHBsYXllcjEuZmlyZSh4LCB5KTtcbiAgcGxheWVyMi5jb21wdXRlckZpcmUoKTtcbn1cbmVuZW15R3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKS5mb3JFYWNoKChkaXYpID0+IGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVuZW15Qm9hcmRFdmVudCkpO1xudXRpbHMucHVic3ViLnN1YnNjcmliZSgnZW5lbXkxQm9hcmRDaGFuZ2VkJywgKGJvYXJkKSA9PiBET00udXBkYXRlRW5lbXlHcmlkKGJvYXJkLCBlbmVteUdyaWQsIGVuZW15Qm9hcmRFdmVudCkpO1xuXG5zaGlwc0NsYXNzaWNUZW1wbGF0ZS5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgLy8gcGxheWVyMS5hZGRDb21wdXRlclNoaXAobGVuZ3RoKTtcbiAgcGxheWVyMi5hZGRDb21wdXRlclNoaXAobGVuZ3RoKTtcbn0pO1xudXRpbHMucHVic3ViLnN1YnNjcmliZSgncGxheWVyMUFkZFNoaXBUb0dyaWQnLCAoeyBsZW5ndGgsIGNvb3JkIH0pID0+IHtcbiAgcGxheWVyMS5hZGRTaGlwKGxlbmd0aCwgY29vcmQpO1xuICAvLyBjb25zb2xlLnRhYmxlKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuICAvLyBjb25zb2xlLmxvZyh7IGxlbmd0aCwgY29vcmQgfSk7XG59KTtcblxuRE9NLmVkaXRNb2RlKHBsYXllckdyaWQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
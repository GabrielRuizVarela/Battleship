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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable no-param-reassign */
// import pubsub from './utils';






const IMG = [];
const ships = [
  { length: 2, url: _patrol_svg__WEBPACK_IMPORTED_MODULE_0__ },
  { length: 3, url: _submarine_svg__WEBPACK_IMPORTED_MODULE_1__ },
  { length: 3.5, url: _destroyer_svg__WEBPACK_IMPORTED_MODULE_2__ },
  { length: 4, url: _destroyer_svg__WEBPACK_IMPORTED_MODULE_2__ },
  { length: 5, url: _carrier_svg__WEBPACK_IMPORTED_MODULE_3__ },
];
let shipIndex = 0;
const ORIENTATION = 'v';
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
  image.style.backgroundImage = `url("${ships[shipIndex].url}")`;
  image.classList.add('ship-over');
  if (ORIENTATION === 'h') {
    image.style.height = `${e.target.clientHeight}px`;
    image.style.width = `${e.target.clientWidth * length}px`;
  } else {
    image.style.transform = 'rotate(90deg)';
    image.style.height = `${e.target.clientHeight}px`;
    image.style.width = `${e.target.clientWidth * length}px`;
    image.style.top = length < 4 ? `${33 * length}%` : `${38 * length}%`;
    image.style.left = `${-30 * length}%`;
  }
  IMG.push({ x, y, image });
  console.log(IMG);
  _utils__WEBPACK_IMPORTED_MODULE_4__.pubsub.publish('player1AddShipToGrid', { length: Math.floor(ships[shipIndex].length), coord: { x, y, orientation: ORIENTATION } });
  if (shipIndex < 4) { shipIndex += 1; } else {
    _utils__WEBPACK_IMPORTED_MODULE_4__.pubsub.publish('killEvents', grid);
    console.log('this');
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

  const shipOverlay = document.createElement('span');
  shipOverlay.classList.add('ship-overlay');
  shipOverlay.style.backgroundImage = `url("${ships[shipIndex].url}")`;

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
  if (positionIsValid) {
    manageValidClass(length, { x, y, orientation: ORIENTATION }, grid, 'valid');
    if (ORIENTATION === 'h') {
      shipOverlay.style.height = `${e.target.clientHeight}px`;
      shipOverlay.style.width = `${e.target.clientWidth * length}px`;
    } else {
      shipOverlay.style.transform = 'rotate(90deg)';
      shipOverlay.style.height = `${e.target.clientHeight}px`;
      shipOverlay.style.width = `${e.target.clientWidth * length}px`;
      shipOverlay.style.top = length < 4 ? `${33 * length}%` : `${38 * length}%`;
      shipOverlay.style.left = `${-30 * length}%`;
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

_utils__WEBPACK_IMPORTED_MODULE_4__.pubsub.subscribe('killEvents', (grid) => {
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

/***/ "./src/carrier.svg":
/*!*************************!*\
  !*** ./src/carrier.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69be4df16a9a79625ec9.svg";

/***/ }),

/***/ "./src/destroyer.svg":
/*!***************************!*\
  !*** ./src/destroyer.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3e87b67a091a7b85628.svg";

/***/ }),

/***/ "./src/patrol.svg":
/*!************************!*\
  !*** ./src/patrol.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5050c3ee4e2425de07ce.svg";

/***/ }),

/***/ "./src/submarine.svg":
/*!***************************!*\
  !*** ./src/submarine.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71ee6bde3829e4d27560.svg";

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
  // utils.pubsub.subscribe('player1BoardChanged', (board) => console.table(board));
  player1.addShip(length, coord);
  console.table(player1.playerBoard.board);
  console.log({ length, coord });
});
// console.table(player2.playerBoard.board);

_DOM__WEBPACK_IMPORTED_MODULE_3__.editMode(playerGrid);
// console.log(utils.isPositionValid(2, { x: 0, y: 2, orientation: 'v' }, playerGrid));

// const ships = [
//   { length: 2, url: './patrol.svg' },
//   { length: 3, url: './submarine.svg' },
//   { length: 3.5, url: './destroyer.svg' },
//   { length: 4, url: './destroyer.svg' },
//   { length: 5, url: './carrier.svg' },
// ];
// const shipOverlay = document.createElement('div');
// shipOverlay.classList.add('ship-overlay');
// // document.querySelector('div').clientHeight
// shipOverlay.style.backgroundImage = `url("${ships[0].url}")`;
// document.body.appendChild(shipOverlay);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDdEI7QUFDaUM7QUFDakM7QUFDOEI7QUFDRDs7QUFFN0I7O0FBRUEsbUJBQW1CLDRDQUFjO0FBQ2pDO0FBQ0E7O0FBRUEsa0JBQWtCLDRDQUFjO0FBQ2hDO0FBQ0E7O0FBRUEsb0RBQXNCLG1DQUFtQyw0Q0FBYzs7QUFFdkU7QUFDQSxnQkFBZ0IsbURBQU07QUFDdEIsZ0JBQWdCLG1EQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQXNCLGtDQUFrQyxpREFBbUI7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvREFBc0IsNEJBQTRCLGVBQWU7QUFDakU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0IsQ0FBQztBQUNEOztBQUVBLDBDQUFZO0FBQ1osMENBQTBDLDhCQUE4Qjs7QUFFeEU7QUFDQSxPQUFPLGdDQUFnQztBQUN2QyxPQUFPLG1DQUFtQztBQUMxQyxPQUFPLHFDQUFxQztBQUM1QyxPQUFPLG1DQUFtQztBQUMxQyxPQUFPLGlDQUFpQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2VuZW15LWdyaWQsXFxuI3BsYXllci1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMzUpO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcblxcbioge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmRpYWxvZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuZGlhbG9nIGRpdiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjM1KTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc2hpcC1vdmVybGF5LFxcbi5zaGlwLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTs7RUFFRSxhQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsNENBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQUE7O0VBRUUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUdBLFdBQUE7RUFDQSxZQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbiNlbmVteS1ncmlkLFxcbiNwbGF5ZXItZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIC8vIG9wYWNpdHk6IDAuNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMzUpO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcbioge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmRpYWxvZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGRpdiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICB9XFxufVxcblxcbi52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4zNSk7XFxufVxcbi5pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLnNoaXAtb3ZlcmxheSxcXG4uc2hpcC1vdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAvLyBoZWlnaHQ6IDEwMHB4O1xcbiAgLy8gd2lkdGg6IDEwMHB4O1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXI6IG5vbmU7XFxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9wYXRyb2wuc3ZnKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8vIGltcG9ydCBwdWJzdWIgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgcGF0cm9sIGZyb20gJy4vcGF0cm9sLnN2Zyc7XG5pbXBvcnQgc3VibWFyaW5lIGZyb20gJy4vc3VibWFyaW5lLnN2Zyc7XG5pbXBvcnQgZGVzdHJveWVyIGZyb20gJy4vZGVzdHJveWVyLnN2Zyc7XG5pbXBvcnQgY2FycmllciBmcm9tICcuL2NhcnJpZXIuc3ZnJztcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBJTUcgPSBbXTtcbmNvbnN0IHNoaXBzID0gW1xuICB7IGxlbmd0aDogMiwgdXJsOiBwYXRyb2wgfSxcbiAgeyBsZW5ndGg6IDMsIHVybDogc3VibWFyaW5lIH0sXG4gIHsgbGVuZ3RoOiAzLjUsIHVybDogZGVzdHJveWVyIH0sXG4gIHsgbGVuZ3RoOiA0LCB1cmw6IGRlc3Ryb3llciB9LFxuICB7IGxlbmd0aDogNSwgdXJsOiBjYXJyaWVyIH0sXG5dO1xubGV0IHNoaXBJbmRleCA9IDA7XG5jb25zdCBPUklFTlRBVElPTiA9ICd2JztcbmNvbnN0IExFTkdIVCA9IDM7XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoc2l6ZSA9IDEwKSB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBpKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIGopO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ3JpZDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlR3JpZChib2FyZCwgZ3JpZCkge1xuICBib2FyZC5mb3JFYWNoKChyb3dzLCB4KSA9PiB7XG4gICAgcm93cy5mb3JFYWNoKChjb2x1bW5zLCB5KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAgIGRpdi5pbm5lclRleHQgPSBjb2x1bW5zO1xuICAgIH0pO1xuICB9KTtcbiAgSU1HLmZvckVhY2goKGltZykgPT4ge1xuICAgIGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7aW1nLnh9XCJdW2RhdGEteT1cIiR7aW1nLnl9XCJdYCkuYXBwZW5kQ2hpbGQoaW1nLmltYWdlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVuZW15R3JpZChib2FyZCwgZ3JpZCwgZXZlbnRDQikge1xuICBib2FyZC5mb3JFYWNoKChyb3dzLCB4KSA9PiB7XG4gICAgcm93cy5mb3JFYWNoKChjb2x1bW5zLCB5KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IGNvbHVtbnM7XG4gICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudENCKTtcbiAgICAgIGlmIChjb2x1bW5zID09PSAnJykgeyBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudENCKTsgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW9kYWwoKSB7XG4gIC8vIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgZGlhbG9nLm9wZW4gPSB0cnVlO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cbi8vIG1vZGFsKCk7XG5mdW5jdGlvbiB4eVRvSW5kZXgoeCwgeSkge1xuICByZXR1cm4gTnVtYmVyKHgpICogMTAgKyBOdW1iZXIoeSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNoaXBUb0dyaWQoZSkge1xuICBjb25zdCB4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShbJ2RhdGEteCddKSk7XG4gIGNvbnN0IHkgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS15J10pKTtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5mbG9vcihzaGlwc1tzaGlwSW5kZXhdLmxlbmd0aCk7XG4gIGNvbnN0IGdyaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7c2hpcHNbc2hpcEluZGV4XS51cmx9XCIpYDtcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2hpcC1vdmVyJyk7XG4gIGlmIChPUklFTlRBVElPTiA9PT0gJ2gnKSB7XG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9IGAke2UudGFyZ2V0LmNsaWVudFdpZHRoICogbGVuZ3RofXB4YDtcbiAgfSBlbHNlIHtcbiAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9IGAke2UudGFyZ2V0LmNsaWVudFdpZHRoICogbGVuZ3RofXB4YDtcbiAgICBpbWFnZS5zdHlsZS50b3AgPSBsZW5ndGggPCA0ID8gYCR7MzMgKiBsZW5ndGh9JWAgOiBgJHszOCAqIGxlbmd0aH0lYDtcbiAgICBpbWFnZS5zdHlsZS5sZWZ0ID0gYCR7LTMwICogbGVuZ3RofSVgO1xuICB9XG4gIElNRy5wdXNoKHsgeCwgeSwgaW1hZ2UgfSk7XG4gIGNvbnNvbGUubG9nKElNRyk7XG4gIHB1YnN1Yi5wdWJsaXNoKCdwbGF5ZXIxQWRkU2hpcFRvR3JpZCcsIHsgbGVuZ3RoOiBNYXRoLmZsb29yKHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoKSwgY29vcmQ6IHsgeCwgeSwgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OIH0gfSk7XG4gIGlmIChzaGlwSW5kZXggPCA0KSB7IHNoaXBJbmRleCArPSAxOyB9IGVsc2Uge1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdraWxsRXZlbnRzJywgZ3JpZCk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1idXR0b24nKS5yZW1vdmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1Bvc2l0aW9uVmFsaWQobGVuZ3RoLCB7IHgsIHksIG9yaWVudGF0aW9uIH0sIGdyaWQsIHNpemUgPSAxMCkge1xuICBjb25zdCBueCA9IE51bWJlcih4KTtcbiAgY29uc3QgbnkgPSBOdW1iZXIoeSk7XG4gIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpKTtcbiAgY29uc3QgaW5kZXggPSBvcmllbnRhdGlvbiA9PT0gJ3YnID8gbnggOiBueTtcbiAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBsZW5ndGggJiYgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhcnJheVt4eVRvSW5kZXgoaSwgbnkpXSk7XG4gICAgICBpZiAoYXJyYXlbeHlUb0luZGV4KGksIG55KV0udGV4dENvbnRlbnQgIT09ICcnIHx8IGluZGV4ICsgbGVuZ3RoID4gc2l6ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcnJheVt4eVRvSW5kZXgobngsIGkpXS50ZXh0Q29udGVudCAhPT0gJycgfHwgaW5kZXggKyBsZW5ndGggPiBzaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGFycmF5W3h5VG9JbmRleChueCwgbnkpXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtYW5hZ2VWYWxpZENsYXNzKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9LCBncmlkLCBjbGFzc1RvQWRkLCBzaXplID0gMTApIHtcbiAgY29uc3QgbnggPSBOdW1iZXIoeCk7XG4gIGNvbnN0IG55ID0gTnVtYmVyKHkpO1xuICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKSk7XG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgZm9yIChsZXQgaiA9IG54OyBqIDwgbnggKyBsZW5ndGggJiYgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgYXJyYXlbeHlUb0luZGV4KGosIG55KV0uY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaiA9IG55OyBqIDwgbnkgKyBsZW5ndGggJiYgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgYXJyYXlbeHlUb0luZGV4KG54LCBqKV0uY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcbiAgICB9XG4gIH1cbiAgYXJyYXlbeHlUb0luZGV4KG54LCBueSldLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbn1cblxuZnVuY3Rpb24gZWRpdE1vZGVFdmVudChlKSB7XG4gIGNvbnN0IHggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoWydkYXRhLXgnXSk7XG4gIGNvbnN0IHkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoWydkYXRhLXknXSk7XG4gIGNvbnN0IGdyaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuXG4gIGNvbnN0IHNoaXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzaGlwT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaGlwLW92ZXJsYXknKTtcbiAgc2hpcE92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7c2hpcHNbc2hpcEluZGV4XS51cmx9XCIpYDtcblxuICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKSk7XG4gIGFycmF5LmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgaWYgKCFkaXYuaW5uZXJIVE1MKSB7IGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnOyB9XG4gICAgZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuLnNoaXAtb3ZlcmxheScpLmZvckVhY2goKHNwYW4pID0+IHNwYW4ucmVtb3ZlKCkpO1xuICB9KTtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5mbG9vcihzaGlwc1tzaGlwSW5kZXhdLmxlbmd0aCk7XG4gIGNvbnN0IHBvc2l0aW9uSXNWYWxpZCA9IGlzUG9zaXRpb25WYWxpZChcbiAgICBsZW5ndGgsXG4gICAgeyB4LCB5LCBvcmllbnRhdGlvbjogT1JJRU5UQVRJT04gfSxcbiAgICBncmlkLFxuICApO1xuICBpZiAocG9zaXRpb25Jc1ZhbGlkKSB7XG4gICAgbWFuYWdlVmFsaWRDbGFzcyhsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OIH0sIGdyaWQsICd2YWxpZCcpO1xuICAgIGlmIChPUklFTlRBVElPTiA9PT0gJ2gnKSB7XG4gICAgICBzaGlwT3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtlLnRhcmdldC5jbGllbnRIZWlnaHR9cHhgO1xuICAgICAgc2hpcE92ZXJsYXkuc3R5bGUud2lkdGggPSBgJHtlLnRhcmdldC5jbGllbnRXaWR0aCAqIGxlbmd0aH1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2UudGFyZ2V0LmNsaWVudEhlaWdodH1weGA7XG4gICAgICBzaGlwT3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2UudGFyZ2V0LmNsaWVudFdpZHRoICogbGVuZ3RofXB4YDtcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLnRvcCA9IGxlbmd0aCA8IDQgPyBgJHszMyAqIGxlbmd0aH0lYCA6IGAkezM4ICogbGVuZ3RofSVgO1xuICAgICAgc2hpcE92ZXJsYXkuc3R5bGUubGVmdCA9IGAkey0zMCAqIGxlbmd0aH0lYDtcbiAgICB9XG4gICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoc2hpcE92ZXJsYXkpO1xuICAgIGFycmF5W3h5VG9JbmRleCh4LCB5KV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRTaGlwVG9HcmlkKTtcbiAgfSBlbHNlIHtcbiAgICBtYW5hZ2VWYWxpZENsYXNzKHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoLCB7IHgsIHksIG9yaWVudGF0aW9uOiBPUklFTlRBVElPTiB9LCBncmlkLCAnaW52YWxpZCcpO1xuICAgIGFycmF5W3h5VG9JbmRleCh4LCB5KV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRTaGlwVG9HcmlkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0TW9kZShncmlkKSB7XG4gIGNvbnN0IGRpdnMgPSBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBkaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGVkaXRNb2RlRXZlbnQpKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5pZCA9ICdlZGl0LWJ1dHRvbic7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgZ3JpZC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZWRpdE1vZGVFdmVudCkpO1xuICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgfTtcbn1cblxucHVic3ViLnN1YnNjcmliZSgna2lsbEV2ZW50cycsIChncmlkKSA9PiB7XG4gIGdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGVkaXRNb2RlRXZlbnQpO1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZCcpO1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgaWYgKCFkaXYuaW5uZXJIVE1MKSB7IGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnOyB9XG4gICAgZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuLnNoaXAtb3ZlcmxheScpLmZvckVhY2goKHNwYW4pID0+IHNwYW4ucmVtb3ZlKCkpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQge1xuICBjcmVhdGVHcmlkLFxuICB1cGRhdGVHcmlkLFxuICB1cGRhdGVFbmVteUdyaWQsXG4gIG1vZGFsLFxuICBlZGl0TW9kZSxcbiAgZWRpdE1vZGVFdmVudCxcbn07XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmZ1bmN0aW9uIEdhbWVib2FyZChzaXplID0gMTApIHtcbiAgbGV0IHBCb2FyZCA9IHV0aWxzLmdldEVtcHR5Qm9hcmQoc2l6ZSk7XG5cbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRUb0JvYXJkKHsgcG9zaXRpb24gfSkge1xuICAgIHBCb2FyZCA9IHBCb2FyZC5tYXAoKGEsIGkpID0+IChhLm1hcCgoYiwgaikgPT4ge1xuICAgICAgaWYgKHBvc2l0aW9uW2ldW2pdLmluY2x1ZGVzKCdPJykpIHtcbiAgICAgICAgcmV0dXJuICdPJztcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbltpXVtqXS5pbmNsdWRlcygnWCcpKSB7XG4gICAgICAgIHJldHVybiAnWCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gYiArIHBvc2l0aW9uW2ldW2pdO1xuICAgIH0pKSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCb2FyZCgpIHtcbiAgICBwQm9hcmQgPSB1dGlscy5nZXRFbXB0eUJvYXJkKHNpemUpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IGFkZFRvQm9hcmQoc2hpcCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tCb2FyZCgpIHtcbiAgICBwQm9hcmQuZm9yRWFjaCgodmVjdG9yKSA9PiB2ZWN0b3IuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMSkge1xuICAgICAgICBzaGlwcy5wb3AoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBhbm90aGVyIHNoaXAgaW4gdGhhdCBwbGFjZScpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNoaXAobGVuZ3RoLCB7IHgsIHksIG9yaWVudGF0aW9uIH0pIHtcbiAgICBjb25zdCBzaGlwID0gU2hpcChsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb24gfSk7XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICB1cGRhdGVCb2FyZCgpO1xuICAgIGNoZWNrQm9hcmQoKTtcbiAgICByZXR1cm4gJ1NVQ0NFU1MnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaGl0ID0gc2hpcHNbaV0uaGl0KHgsIHkpO1xuICAgICAgdXBkYXRlQm9hcmQoKTtcbiAgICAgIGlmIChoaXQgPT09ICdISVQnKSB7XG4gICAgICAgIGNvbnN0IHNoaXBIaXQgPSBzaGlwc1tpXTtcbiAgICAgICAgcmV0dXJuIHsgc2hpcEhpdCwgYm9hcmQ6IHBCb2FyZCB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBib2FyZDogcEJvYXJkIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuICAgIGxldCBhbGxTaGlwU3VuayA9IHRydWU7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGFsbFNoaXBTdW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbFNoaXBTdW5rO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNHYW1lT3ZlcixcbiAgICBnZXQgYm9hcmQoKSB7IHJldHVybiBwQm9hcmQ7IH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmZ1bmN0aW9uIFBsYXllcihudW0pIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcEVuZW15Qm9hcmQgPSB1dGlscy5nZXRFbXB0eUJvYXJkKCk7XG4gIGZ1bmN0aW9uIGZpcmUoeCwgeSkge1xuICAgIGlmIChwRW5lbXlCb2FyZFt4XVt5XSA9PT0gJ1gnIHx8IHBFbmVteUJvYXJkW3hdW3ldID09PSAnTycpIHsgdGhyb3cgbmV3IEVycm9yKCd5b3UgY2FuIG5vdCBmaXJlIHdoZXJlIHlvdSBhbHJlYWR5IGRpZCcpOyB9XG4gICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfVBsYXllZGAsIFt4LCB5XSk7XG4gIH1cblxuICBmdW5jdGlvbiB0YWtlRmlyZShbeCwgeV0pIHtcbiAgICBjb25zdCB7IHNoaXBIaXQsIGJvYXJkIH0gPSBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBwbGF5ZXIke251bX1Cb2FyZENoYW5nZWRgLCBib2FyZCk7XG4gICAgaWYgKHNoaXBIaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfUhpdGAsIFt4LCB5LCB0cnVlLCBib2FyZF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19SGl0YCwgW3gsIHksIGZhbHNlLCBib2FyZF0pO1xuICAgIH1cbiAgfVxuICB1dGlscy5wdWJzdWIuc3Vic2NyaWJlKGBwbGF5ZXIke251bSA9PT0gMiA/IDEgOiAyfVBsYXllZGAsIHRha2VGaXJlKTtcblxuICBmdW5jdGlvbiB1cGRhdGVFbmVteUJvYXJkKFt4LCB5LCBoaXRdKSB7XG4gICAgaWYgKGhpdCkgeyBwRW5lbXlCb2FyZFt4XVt5XSA9ICdYJzsgfSBlbHNlIHsgcEVuZW15Qm9hcmRbeF1beV0gPSAnTyc7IH1cbiAgICB1dGlscy5wdWJzdWIucHVibGlzaChgZW5lbXkke251bX1Cb2FyZENoYW5nZWRgLCBwRW5lbXlCb2FyZCk7XG4gIH1cbiAgdXRpbHMucHVic3ViLnN1YnNjcmliZShgcGxheWVyJHtudW0gPT09IDIgPyAxIDogMn1IaXRgLCB1cGRhdGVFbmVteUJvYXJkKTtcblxuICBmdW5jdGlvbiByYW5kb21Db29yZChzaXplID0gMTAsIHNpemUyID0gMTApIHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUyKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZXJGaXJlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHJhbmRvbUNvb3JkKCk7XG4gICAgICAgIGZpcmUoeCwgeSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNoaXAoLi4ucGFyYW1zKSB7XG4gICAgcGxheWVyQm9hcmQuYWRkU2hpcChwYXJhbXNbMF0sIHBhcmFtc1sxXSk7XG4gICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfUJvYXJkQ2hhbmdlZGAsIHBsYXllckJvYXJkLmJvYXJkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvbXB1dGVyU2hpcChsZW5naHQsIHNpemUgPSAxMCkge1xuICAgIGxldCB4OyBsZXQgeTsgbGV0IG9yaWVudGF0aW9uO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA/ICd2JyA6ICdoJztcbiAgICAgICAgY29uc3Qgc2l6ZTEgPSBvcmllbnRhdGlvbiA9PT0gJ3YnID8gKHNpemUgLSBNYXRoLmZsb29yKGxlbmdodCkpIDogc2l6ZTtcbiAgICAgICAgY29uc3Qgc2l6ZTIgPSBvcmllbnRhdGlvbiA9PT0gJ2gnID8gKHNpemUgLSBNYXRoLmZsb29yKGxlbmdodCkpIDogc2l6ZTtcbiAgICAgICAgW3gsIHldID0gcmFuZG9tQ29vcmQoc2l6ZTEsIHNpemUyKTtcbiAgICAgICAgYWRkU2hpcChsZW5naHQsIHsgeCwgeSwgb3JpZW50YXRpb24gfSk7XG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgaWYgKGNvdW50ID4gMTAwKSB7IGJyZWFrOyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgZW5lbXlCb2FyZCgpIHsgcmV0dXJuIHBFbmVteUJvYXJkOyB9LFxuICAgIHBsYXllckJvYXJkLFxuICAgIGFkZFNoaXAsXG4gICAgZmlyZSxcbiAgICBjb21wdXRlckZpcmUsXG4gICAgYWRkQ29tcHV0ZXJTaGlwLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gU2hpcChsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb24gfSkge1xuICBsZXQgbmFtZTtcbiAgc3dpdGNoIChsZW5ndGgpIHsgLy8gU2VsZWN0IE5hbWUgYW5kIEVycm9yIGNoZWNrXG4gICAgY2FzZSAyOlxuICAgICAgbmFtZSA9ICdQYXRyb2wgQm9hdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBuYW1lID0gJ1N1Ym1hcmluZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMuNTpcbiAgICAgIG5hbWUgPSAnQmF0dGxlc2hpcCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBuYW1lID0gJ0Rlc3Ryb3llcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBuYW1lID0gJ0NhcnJpZXInO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG5hbWUgPSAnRVJST1InO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc3QgbGVuZ3RoRmxvb3IgPSBNYXRoLmZsb29yKGxlbmd0aCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gKCgpID0+IHsgLy8gcHV0IHRoZSBzaGlwIGluIGFuIGVtcHR5IGJvYXJkXG4gICAgaWYgKChvcmllbnRhdGlvbiA9PT0gJ3YnICYmIHggKyBsZW5ndGhGbG9vciA+IDEwKSB8fCAob3JpZW50YXRpb24gPT09ICdoJyAmJiB5ICsgbGVuZ3RoRmxvb3IgPiAxMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRVJST1I6IFRoZSBzaGlwIGlzIG91dCBvZiBib3VuZHMnKTtcbiAgICB9XG4gICAgY29uc3QgbmV3QXJyYXkgPSB1dGlscy5nZXRFbXB0eUJvYXJkKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhGbG9vcjsgaSArPSAxKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICBuZXdBcnJheVt4ICsgaV1beV0gPSBuYW1lLmF0KDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3QXJyYXlbeF1beSArIGldID0gbmFtZS5hdCgwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGlmIChwb3NpdGlvbltpXS5pbmNsdWRlcyhuYW1lLmF0KDApKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0KGh4LCBoeSkge1xuICAgIGlmIChoeCA+IDkgfHwgaHkgPiA5KSB7IHJldHVybiAnRVJST1InOyB9XG4gICAgaWYgKHBvc2l0aW9uW2h4XVtoeV0gIT09ICcnKSB7XG4gICAgICBwb3NpdGlvbltoeF1baHldID0gJ1gnO1xuICAgICAgcmV0dXJuICdISVQnO1xuICAgIH1cbiAgICBwb3NpdGlvbltoeF1baHldID0gJ08nO1xuICAgIHJldHVybiAnTUlTUyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlbmd0aDogbGVuZ3RoRmxvb3IsXG4gICAgbmFtZSxcbiAgICBwb3NpdGlvbixcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY29uc3QgcHVic3ViID0ge1xuICBldmVudHM6IHt9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH0sXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKChmKSA9PiBmICE9PSBmbik7XG4gICAgfVxuICB9LFxuICBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGYpID0+IGYoZGF0YSkpO1xuICAgIH1cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGZuKSB7XG4gIHJldHVybiAoLi4ucGFyYW1zKSA9PiBmbiguLi5wYXJhbXMpLmNhdGNoKChlcikgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdlcnJvcicsIGVyKTtcbiAgfSk7XG59XG5cbmNvbnN0IGFzeW5jUGlwZSA9ICguLi5mbnMpID0+ICh4KSA9PiAoXG4gIGZucy5yZWR1Y2UoYXN5bmMgKHksIGYpID0+IGYoYXdhaXQgeSksIHgpXG4pO1xuXG5mdW5jdGlvbiBnZXRFbXB0eUJvYXJkKHNpemUgPSAxMCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGFycmF5W2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgIGFycmF5W2ldW2pdID0gJyc7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IHtcbiAgcHVic3ViLCBoYW5kbGVFcnJvciwgYXN5bmNQaXBlLCBnZXRFbXB0eUJvYXJkLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG4vLyBpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG4vLyBpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJztcblxuLy8gLS0tIGluaXQgLS0tXG5cbmNvbnN0IHBsYXllckdyaWQgPSBET00uY3JlYXRlR3JpZCgpO1xucGxheWVyR3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllci1ncmlkJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXllckdyaWQpO1xuXG5jb25zdCBlbmVteUdyaWQgPSBET00uY3JlYXRlR3JpZCgpO1xuZW5lbXlHcmlkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW5lbXktZ3JpZCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbmVteUdyaWQpO1xuXG51dGlscy5wdWJzdWIuc3Vic2NyaWJlKCdwbGF5ZXIxQm9hcmRDaGFuZ2VkJywgKGJvYXJkKSA9PiBET00udXBkYXRlR3JpZChib2FyZCwgcGxheWVyR3JpZCkpO1xuXG5jb25zdCBzaGlwc0NsYXNzaWNUZW1wbGF0ZSA9IFsyLCAzLCAzLjUsIDQsIDVdO1xuY29uc3QgcGxheWVyMSA9IFBsYXllcigxKTtcbmNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoMik7XG5mdW5jdGlvbiBlbmVteUJvYXJkRXZlbnQoZSkge1xuICBjb25zdCB4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS14J10pO1xuICBjb25zdCB5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS15J10pO1xuICBwbGF5ZXIxLmZpcmUoeCwgeSk7XG4gIHBsYXllcjIuY29tcHV0ZXJGaXJlKCk7XG59XG5lbmVteUdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykuZm9yRWFjaCgoZGl2KSA9PiBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmVteUJvYXJkRXZlbnQpKTtcbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ2VuZW15MUJvYXJkQ2hhbmdlZCcsIChib2FyZCkgPT4gRE9NLnVwZGF0ZUVuZW15R3JpZChib2FyZCwgZW5lbXlHcmlkLCBlbmVteUJvYXJkRXZlbnQpKTtcblxuc2hpcHNDbGFzc2ljVGVtcGxhdGUuZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gIC8vIHBsYXllcjEuYWRkQ29tcHV0ZXJTaGlwKGxlbmd0aCk7XG4gIHBsYXllcjIuYWRkQ29tcHV0ZXJTaGlwKGxlbmd0aCk7XG59KTtcbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ3BsYXllcjFBZGRTaGlwVG9HcmlkJywgKHsgbGVuZ3RoLCBjb29yZCB9KSA9PiB7XG4gIC8vIHV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ3BsYXllcjFCb2FyZENoYW5nZWQnLCAoYm9hcmQpID0+IGNvbnNvbGUudGFibGUoYm9hcmQpKTtcbiAgcGxheWVyMS5hZGRTaGlwKGxlbmd0aCwgY29vcmQpO1xuICBjb25zb2xlLnRhYmxlKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xuICBjb25zb2xlLmxvZyh7IGxlbmd0aCwgY29vcmQgfSk7XG59KTtcbi8vIGNvbnNvbGUudGFibGUocGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZCk7XG5cbkRPTS5lZGl0TW9kZShwbGF5ZXJHcmlkKTtcbi8vIGNvbnNvbGUubG9nKHV0aWxzLmlzUG9zaXRpb25WYWxpZCgyLCB7IHg6IDAsIHk6IDIsIG9yaWVudGF0aW9uOiAndicgfSwgcGxheWVyR3JpZCkpO1xuXG4vLyBjb25zdCBzaGlwcyA9IFtcbi8vICAgeyBsZW5ndGg6IDIsIHVybDogJy4vcGF0cm9sLnN2ZycgfSxcbi8vICAgeyBsZW5ndGg6IDMsIHVybDogJy4vc3VibWFyaW5lLnN2ZycgfSxcbi8vICAgeyBsZW5ndGg6IDMuNSwgdXJsOiAnLi9kZXN0cm95ZXIuc3ZnJyB9LFxuLy8gICB7IGxlbmd0aDogNCwgdXJsOiAnLi9kZXN0cm95ZXIuc3ZnJyB9LFxuLy8gICB7IGxlbmd0aDogNSwgdXJsOiAnLi9jYXJyaWVyLnN2ZycgfSxcbi8vIF07XG4vLyBjb25zdCBzaGlwT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gc2hpcE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2hpcC1vdmVybGF5Jyk7XG4vLyAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKS5jbGllbnRIZWlnaHRcbi8vIHNoaXBPdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3NoaXBzWzBdLnVybH1cIilgO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGlwT3ZlcmxheSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
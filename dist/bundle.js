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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#enemy-grid,\n#player-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 400px;\n  height: 400px;\n  background-color: rgba(255, 255, 255, 0.235);\n}\n\n* {\n  border: 1px solid black;\n}\n\ndialog {\n  width: 100%;\n  height: 100%;\n  opacity: 0.2;\n  background-color: black;\n  display: grid;\n}\ndialog div {\n  justify-self: center;\n  align-self: center;\n  background-color: white;\n  height: 200px;\n  width: 200px;\n}\n\n.valid {\n  background-color: rgba(0, 0, 255, 0.35);\n}\n\n.invalid {\n  background-color: red;\n}\n\n.ship-overlay {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  object-fit: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  z-index: -1;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;EACA,SAAA;EACA,UAAA;AACF;;AACA;;EAEE,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EAEA,4CAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,uBAAA;EACA,aAAA;AACF;AAAE;EACE,oBAAA;EACA,kBAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;AAEJ;;AAEA;EACE,uCAAA;AACF;;AACA;EACE,qBAAA;AAEF;;AAAA;EACE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,iBAAA;EACA,4BAAA;EACA,2BAAA;EACA,wBAAA;EAGA,WAAA;EACA,YAAA;AACF","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n#enemy-grid,\n#player-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 400px;\n  height: 400px;\n  // opacity: 0.5;\n  background-color: rgba(255, 255, 255, 0.235);\n\n}\n* {\n  border: 1px solid black;\n}\n\ndialog {\n  width: 100%;\n  height: 100%;\n  opacity: 0.2;\n  background-color: black;\n  display: grid;\n  div {\n    justify-self: center;\n    align-self: center;\n    background-color: white;\n    height: 200px;\n    width: 200px;\n  }\n}\n\n.valid {\n  background-color: rgba(0, 0, 255, 0.35);\n}\n.invalid {\n  background-color: red;\n}\n.ship-overlay {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  object-fit: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  // height: 100px;\n  // width: 100px;\n  z-index: -1;\n  border: none;\n  // background-image: url(./patrol.svg);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _patrol_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patrol.svg */ "./src/patrol.svg");
/* harmony import */ var _submarine_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submarine.svg */ "./src/submarine.svg");
/* harmony import */ var _destroyer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destroyer.svg */ "./src/destroyer.svg");
/* harmony import */ var _carrier_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carrier.svg */ "./src/carrier.svg");






const ships = [
  { length: 2, url: _patrol_svg__WEBPACK_IMPORTED_MODULE_1__ },
  { length: 3, url: _submarine_svg__WEBPACK_IMPORTED_MODULE_2__ },
  { length: 3.5, url: _destroyer_svg__WEBPACK_IMPORTED_MODULE_3__ },
  { length: 4, url: _destroyer_svg__WEBPACK_IMPORTED_MODULE_3__ },
  { length: 5, url: _carrier_svg__WEBPACK_IMPORTED_MODULE_4__ },
];
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
      div.textContent = columns;
    });
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

function isPositionValid(length, { x, y, orientation }, grid, size = 10) {
  const nx = Number(x);
  const ny = Number(y);
  const array = Array.from(grid.querySelectorAll('div'));
  array.forEach((div) => {
    div.classList.remove('invalid');
    div.classList.remove('valid');
    div.style.position = 'static';
    document.querySelectorAll('span').forEach((span) => span.remove());
  });
  // e.style.position = 'relative';
  const index = orientation === 'v' ? nx : ny;
  for (let i = index; i < index + length && i < size; i += 1) {
    if (orientation === 'v') {
      if (array[xyToIndex(i, ny)].textContent !== '' || index + length > size) {
        for (let j = index; j < index + length && j < size; j += 1) {
          array[xyToIndex(j, ny)].classList.add('invalid');
          // array[xyToIndex(j, ny)].style.position = 'relative';
        }
        return false;
      }
      for (let j = index; j < index + length && j < size; j += 1) {
        array[xyToIndex(j, ny)].classList.add('valid');
        // array[xyToIndex(j, ny)].style.position = 'relative';
      }
    } else {
      if (array[xyToIndex(nx, i)].textContent !== '' || index + length > size) {
        for (let j = index; j < index + length && j < size; j += 1) {
          array[xyToIndex(nx, j)].classList.add('invalid');
          // array[xyToIndex(j, ny)].style.position = 'relative';
        }
        return false;
      }
      for (let j = index; j < index + length && j < size; j += 1) {
        array[xyToIndex(nx, j)].classList.add('valid');
        // array[xyToIndex(nx, j)].style.position = 'relative';
      }
    }
  }
  array[xyToIndex(nx, ny)].style.position = 'relative';
  return true;
}

function editModeEvent(e) {
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  const valid = isPositionValid(LENGHT, { x, y, orientation: ORIENTATION }, e.target.parentNode);
  const shipOverlay = document.createElement('span');
  shipOverlay.classList.add('ship-overlay');
  shipOverlay.style.backgroundImage = `url("${ships[1].url}")`;
  if (ORIENTATION === 'h') {
    shipOverlay.style.height = `${e.target.clientHeight}px`;
    shipOverlay.style.width = `${e.target.clientWidth * ships[1].length}px`;
  } else {
    shipOverlay.style.transform = 'rotate(90deg)';
    shipOverlay.style.height = `${e.target.clientHeight}px`;
    shipOverlay.style.width = `${e.target.clientWidth * ships[1].length}px`;
    shipOverlay.style.top = '100%';
    shipOverlay.style.left = '-100%';
    // shipOverlay.style.height = `${e.target.clientHeight * ships[1].length}px`;
    // shipOverlay.style.width = `${e.target.clientWidth}px`;
  }

  // shipOverlay.style.backgroundImage = `url("../src/${ships[1].url}")`;
  if (valid) {
    // document.body.appendChild(shipOverlay);
    e.target.appendChild(shipOverlay);
    // e.target.style.backgroundColor = 'blue';
  } else {
    // e.target.style.backgroundColor = 'red';
  }
}

function editMode(grid) {
  const divs = grid.querySelectorAll('div');
  divs.forEach((div) => div.addEventListener('mouseover', editModeEvent));
  const button = document.createElement('button');
  button.textContent = 'Done';
  grid.parentNode.appendChild(button);
  button.onclick = () => {
    divs.forEach((div) => div.removeEventListener('mouseover', editModeEvent));
    button.remove();
  };
}




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
    // return (() => { utils.pubsub.publish(`player${num}Played`, [x, y]); })();
  }

  function takeFire([x, y]) {
    const { shipHit, board } = playerBoard.receiveAttack(x, y);
    // console.log({ shipHit, board });
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
        console.log(err);
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
    while (true) {
      try {
        orientation = Math.floor(Math.random() * 2) ? 'v' : 'h';
        const size1 = orientation === 'v' ? (size - Math.floor(lenght)) : size;
        const size2 = orientation === 'h' ? (size - Math.floor(lenght)) : size;
        [x, y] = randomCoord(size1, size2);
        // console.log({ size1, size2 });
        addShip(lenght, { x, y, orientation });
        count = 0;
        break;
      } catch (err) {
        console.log(err);
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
  player1.addComputerShip(length);
  player2.addComputerShip(length);
});

console.table(player2.playerBoard.board);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFzQixrQ0FBa0MsaURBQW1COztBQUUzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLDBDQUFZO0FBQ1osMENBQTBDLDhCQUE4Qjs7QUFFeEU7QUFDQSxPQUFPLGdDQUFnQztBQUN2QyxPQUFPLG1DQUFtQztBQUMxQyxPQUFPLHFDQUFxQztBQUM1QyxPQUFPLG1DQUFtQztBQUMxQyxPQUFPLGlDQUFpQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2VuZW15LWdyaWQsXFxuI3BsYXllci1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMzUpO1xcbn1cXG5cXG4qIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbmRpYWxvZyBkaXYge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4zNSk7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNoaXAtb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB6LWluZGV4OiAtMTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTs7RUFFRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsNENBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFFQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI2VuZW15LWdyaWQsXFxuI3BsYXllci1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIC8vIG9wYWNpdHk6IDAuNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMzUpO1xcblxcbn1cXG4qIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBkaXYge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcbn1cXG5cXG4udmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMzUpO1xcbn1cXG4uaW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5zaGlwLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgLy8gaGVpZ2h0OiAxMDBweDtcXG4gIC8vIHdpZHRoOiAxMDBweDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vcGF0cm9sLnN2Zyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHBhdHJvbCBmcm9tICcuL3BhdHJvbC5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZSBmcm9tICcuL3N1Ym1hcmluZS5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llciBmcm9tICcuL2Rlc3Ryb3llci5zdmcnO1xuaW1wb3J0IGNhcnJpZXIgZnJvbSAnLi9jYXJyaWVyLnN2Zyc7XG5cbmNvbnN0IHNoaXBzID0gW1xuICB7IGxlbmd0aDogMiwgdXJsOiBwYXRyb2wgfSxcbiAgeyBsZW5ndGg6IDMsIHVybDogc3VibWFyaW5lIH0sXG4gIHsgbGVuZ3RoOiAzLjUsIHVybDogZGVzdHJveWVyIH0sXG4gIHsgbGVuZ3RoOiA0LCB1cmw6IGRlc3Ryb3llciB9LFxuICB7IGxlbmd0aDogNSwgdXJsOiBjYXJyaWVyIH0sXG5dO1xuY29uc3QgT1JJRU5UQVRJT04gPSAnaCc7XG5jb25zdCBMRU5HSFQgPSAzO1xuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKHNpemUgPSAxMCkge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS14JywgaSk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBqKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyaWQoYm9hcmQsIGdyaWQpIHtcbiAgYm9hcmQuZm9yRWFjaCgocm93cywgeCkgPT4ge1xuICAgIHJvd3MuZm9yRWFjaCgoY29sdW1ucywgeSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZ3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSBjb2x1bW5zO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRW5lbXlHcmlkKGJvYXJkLCBncmlkLCBldmVudENCKSB7XG4gIGJvYXJkLmZvckVhY2goKHJvd3MsIHgpID0+IHtcbiAgICByb3dzLmZvckVhY2goKGNvbHVtbnMsIHkpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gY29sdW1ucztcbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50Q0IpO1xuICAgICAgaWYgKGNvbHVtbnMgPT09ICcnKSB7IGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50Q0IpOyB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb2RhbCgpIHtcbiAgLy8gY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBkaWFsb2cub3BlbiA9IHRydWU7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChkaXYpO1xufVxuLy8gbW9kYWwoKTtcbmZ1bmN0aW9uIHh5VG9JbmRleCh4LCB5KSB7XG4gIHJldHVybiBOdW1iZXIoeCkgKiAxMCArIE51bWJlcih5KTtcbn1cblxuZnVuY3Rpb24gaXNQb3NpdGlvblZhbGlkKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9LCBncmlkLCBzaXplID0gMTApIHtcbiAgY29uc3QgbnggPSBOdW1iZXIoeCk7XG4gIGNvbnN0IG55ID0gTnVtYmVyKHkpO1xuICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKSk7XG4gIGFycmF5LmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpLmZvckVhY2goKHNwYW4pID0+IHNwYW4ucmVtb3ZlKCkpO1xuICB9KTtcbiAgLy8gZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIGNvbnN0IGluZGV4ID0gb3JpZW50YXRpb24gPT09ICd2JyA/IG54IDogbnk7XG4gIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgbGVuZ3RoICYmIGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgaWYgKGFycmF5W3h5VG9JbmRleChpLCBueSldLnRleHRDb250ZW50ICE9PSAnJyB8fCBpbmRleCArIGxlbmd0aCA+IHNpemUpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGluZGV4OyBqIDwgaW5kZXggKyBsZW5ndGggJiYgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgICAgIGFycmF5W3h5VG9JbmRleChqLCBueSldLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAvLyBhcnJheVt4eVRvSW5kZXgoaiwgbnkpXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaiA9IGluZGV4OyBqIDwgaW5kZXggKyBsZW5ndGggJiYgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgICBhcnJheVt4eVRvSW5kZXgoaiwgbnkpXS5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICAgICAgICAvLyBhcnJheVt4eVRvSW5kZXgoaiwgbnkpXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhcnJheVt4eVRvSW5kZXgobngsIGkpXS50ZXh0Q29udGVudCAhPT0gJycgfHwgaW5kZXggKyBsZW5ndGggPiBzaXplKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBpbmRleDsgaiA8IGluZGV4ICsgbGVuZ3RoICYmIGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgICAgICBhcnJheVt4eVRvSW5kZXgobngsIGopXS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgLy8gYXJyYXlbeHlUb0luZGV4KGosIG55KV0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGogPSBpbmRleDsgaiA8IGluZGV4ICsgbGVuZ3RoICYmIGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgICAgYXJyYXlbeHlUb0luZGV4KG54LCBqKV0uY2xhc3NMaXN0LmFkZCgndmFsaWQnKTtcbiAgICAgICAgLy8gYXJyYXlbeHlUb0luZGV4KG54LCBqKV0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhcnJheVt4eVRvSW5kZXgobngsIG55KV0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZWRpdE1vZGVFdmVudChlKSB7XG4gIGNvbnN0IHggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoWydkYXRhLXgnXSk7XG4gIGNvbnN0IHkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoWydkYXRhLXknXSk7XG4gIGNvbnN0IHZhbGlkID0gaXNQb3NpdGlvblZhbGlkKExFTkdIVCwgeyB4LCB5LCBvcmllbnRhdGlvbjogT1JJRU5UQVRJT04gfSwgZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gIGNvbnN0IHNoaXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzaGlwT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaGlwLW92ZXJsYXknKTtcbiAgc2hpcE92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7c2hpcHNbMV0udXJsfVwiKWA7XG4gIGlmIChPUklFTlRBVElPTiA9PT0gJ2gnKSB7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2UudGFyZ2V0LmNsaWVudFdpZHRoICogc2hpcHNbMV0ubGVuZ3RofXB4YDtcbiAgfSBlbHNlIHtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2UudGFyZ2V0LmNsaWVudFdpZHRoICogc2hpcHNbMV0ubGVuZ3RofXB4YDtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS50b3AgPSAnMTAwJSc7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUubGVmdCA9ICctMTAwJSc7XG4gICAgLy8gc2hpcE92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0ICogc2hpcHNbMV0ubGVuZ3RofXB4YDtcbiAgICAvLyBzaGlwT3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2UudGFyZ2V0LmNsaWVudFdpZHRofXB4YDtcbiAgfVxuXG4gIC8vIHNoaXBPdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuLi9zcmMvJHtzaGlwc1sxXS51cmx9XCIpYDtcbiAgaWYgKHZhbGlkKSB7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGlwT3ZlcmxheSk7XG4gICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoc2hpcE92ZXJsYXkpO1xuICAgIC8vIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgfSBlbHNlIHtcbiAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0TW9kZShncmlkKSB7XG4gIGNvbnN0IGRpdnMgPSBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBkaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGVkaXRNb2RlRXZlbnQpKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgZ3JpZC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZWRpdE1vZGVFdmVudCkpO1xuICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlR3JpZCxcbiAgdXBkYXRlR3JpZCxcbiAgdXBkYXRlRW5lbXlHcmlkLFxuICBtb2RhbCxcbiAgZWRpdE1vZGUsXG4gIGVkaXRNb2RlRXZlbnQsXG59O1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQoc2l6ZSA9IDEwKSB7XG4gIGxldCBwQm9hcmQgPSB1dGlscy5nZXRFbXB0eUJvYXJkKHNpemUpO1xuXG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgZnVuY3Rpb24gYWRkVG9Cb2FyZCh7IHBvc2l0aW9uIH0pIHtcbiAgICBwQm9hcmQgPSBwQm9hcmQubWFwKChhLCBpKSA9PiAoYS5tYXAoKGIsIGopID0+IHtcbiAgICAgIGlmIChwb3NpdGlvbltpXVtqXS5pbmNsdWRlcygnTycpKSB7XG4gICAgICAgIHJldHVybiAnTyc7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25baV1bal0uaW5jbHVkZXMoJ1gnKSkge1xuICAgICAgICByZXR1cm4gJ1gnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGIgKyBwb3NpdGlvbltpXVtqXTtcbiAgICB9KSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQm9hcmQoKSB7XG4gICAgcEJvYXJkID0gdXRpbHMuZ2V0RW1wdHlCb2FyZChzaXplKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBhZGRUb0JvYXJkKHNoaXApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQm9hcmQoKSB7XG4gICAgcEJvYXJkLmZvckVhY2goKHZlY3RvcikgPT4gdmVjdG9yLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgc2hpcHMucG9wKCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgYW5vdGhlciBzaGlwIGluIHRoYXQgcGxhY2UnKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTaGlwKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9KSB7XG4gICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoLCB7IHgsIHksIG9yaWVudGF0aW9uIH0pO1xuICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgdXBkYXRlQm9hcmQoKTtcbiAgICBjaGVja0JvYXJkKCk7XG4gICAgcmV0dXJuICdTVUNDRVNTJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXBzW2ldLmhpdCh4LCB5KTtcbiAgICAgIHVwZGF0ZUJvYXJkKCk7XG4gICAgICBpZiAoaGl0ID09PSAnSElUJykge1xuICAgICAgICBjb25zdCBzaGlwSGl0ID0gc2hpcHNbaV07XG4gICAgICAgIHJldHVybiB7IHNoaXBIaXQsIGJvYXJkOiBwQm9hcmQgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgYm9hcmQ6IHBCb2FyZCB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcbiAgICBsZXQgYWxsU2hpcFN1bmsgPSB0cnVlO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBhbGxTaGlwU3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxTaGlwU3VuaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzR2FtZU92ZXIsXG4gICAgZ2V0IGJvYXJkKCkgeyByZXR1cm4gcEJvYXJkOyB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBQbGF5ZXIobnVtKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBFbmVteUJvYXJkID0gdXRpbHMuZ2V0RW1wdHlCb2FyZCgpO1xuICBmdW5jdGlvbiBmaXJlKHgsIHkpIHtcbiAgICBpZiAocEVuZW15Qm9hcmRbeF1beV0gPT09ICdYJyB8fCBwRW5lbXlCb2FyZFt4XVt5XSA9PT0gJ08nKSB7IHRocm93IG5ldyBFcnJvcigneW91IGNhbiBub3QgZmlyZSB3aGVyZSB5b3UgYWxyZWFkeSBkaWQnKTsgfVxuICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBwbGF5ZXIke251bX1QbGF5ZWRgLCBbeCwgeV0pO1xuICAgIC8vIHJldHVybiAoKCkgPT4geyB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19UGxheWVkYCwgW3gsIHldKTsgfSkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRha2VGaXJlKFt4LCB5XSkge1xuICAgIGNvbnN0IHsgc2hpcEhpdCwgYm9hcmQgfSA9IHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgLy8gY29uc29sZS5sb2coeyBzaGlwSGl0LCBib2FyZCB9KTtcbiAgICB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19Qm9hcmRDaGFuZ2VkYCwgYm9hcmQpO1xuICAgIGlmIChzaGlwSGl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBwbGF5ZXIke251bX1IaXRgLCBbeCwgeSwgdHJ1ZSwgYm9hcmRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfUhpdGAsIFt4LCB5LCBmYWxzZSwgYm9hcmRdKTtcbiAgICB9XG4gIH1cbiAgdXRpbHMucHVic3ViLnN1YnNjcmliZShgcGxheWVyJHtudW0gPT09IDIgPyAxIDogMn1QbGF5ZWRgLCB0YWtlRmlyZSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlRW5lbXlCb2FyZChbeCwgeSwgaGl0XSkge1xuICAgIGlmIChoaXQpIHsgcEVuZW15Qm9hcmRbeF1beV0gPSAnWCc7IH0gZWxzZSB7IHBFbmVteUJvYXJkW3hdW3ldID0gJ08nOyB9XG4gICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYGVuZW15JHtudW19Qm9hcmRDaGFuZ2VkYCwgcEVuZW15Qm9hcmQpO1xuICB9XG4gIHV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoYHBsYXllciR7bnVtID09PSAyID8gMSA6IDJ9SGl0YCwgdXBkYXRlRW5lbXlCb2FyZCk7XG5cbiAgZnVuY3Rpb24gcmFuZG9tQ29vcmQoc2l6ZSA9IDEwLCBzaXplMiA9IDEwKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplMik7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyRmlyZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSByYW5kb21Db29yZCgpO1xuICAgICAgICBmaXJlKHgsIHkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTaGlwKC4uLnBhcmFtcykge1xuICAgIHBsYXllckJvYXJkLmFkZFNoaXAocGFyYW1zWzBdLCBwYXJhbXNbMV0pO1xuICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBwbGF5ZXIke251bX1Cb2FyZENoYW5nZWRgLCBwbGF5ZXJCb2FyZC5ib2FyZCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21wdXRlclNoaXAobGVuZ2h0LCBzaXplID0gMTApIHtcbiAgICBsZXQgeDsgbGV0IHk7IGxldCBvcmllbnRhdGlvbjtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID8gJ3YnIDogJ2gnO1xuICAgICAgICBjb25zdCBzaXplMSA9IG9yaWVudGF0aW9uID09PSAndicgPyAoc2l6ZSAtIE1hdGguZmxvb3IobGVuZ2h0KSkgOiBzaXplO1xuICAgICAgICBjb25zdCBzaXplMiA9IG9yaWVudGF0aW9uID09PSAnaCcgPyAoc2l6ZSAtIE1hdGguZmxvb3IobGVuZ2h0KSkgOiBzaXplO1xuICAgICAgICBbeCwgeV0gPSByYW5kb21Db29yZChzaXplMSwgc2l6ZTIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh7IHNpemUxLCBzaXplMiB9KTtcbiAgICAgICAgYWRkU2hpcChsZW5naHQsIHsgeCwgeSwgb3JpZW50YXRpb24gfSk7XG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgaWYgKGNvdW50ID4gMTAwKSB7IGJyZWFrOyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgZW5lbXlCb2FyZCgpIHsgcmV0dXJuIHBFbmVteUJvYXJkOyB9LFxuICAgIHBsYXllckJvYXJkLFxuICAgIGFkZFNoaXAsXG4gICAgZmlyZSxcbiAgICBjb21wdXRlckZpcmUsXG4gICAgYWRkQ29tcHV0ZXJTaGlwLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gU2hpcChsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb24gfSkge1xuICBsZXQgbmFtZTtcbiAgc3dpdGNoIChsZW5ndGgpIHsgLy8gU2VsZWN0IE5hbWUgYW5kIEVycm9yIGNoZWNrXG4gICAgY2FzZSAyOlxuICAgICAgbmFtZSA9ICdQYXRyb2wgQm9hdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBuYW1lID0gJ1N1Ym1hcmluZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMuNTpcbiAgICAgIG5hbWUgPSAnQmF0dGxlc2hpcCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBuYW1lID0gJ0Rlc3Ryb3llcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBuYW1lID0gJ0NhcnJpZXInO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG5hbWUgPSAnRVJST1InO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc3QgbGVuZ3RoRmxvb3IgPSBNYXRoLmZsb29yKGxlbmd0aCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gKCgpID0+IHsgLy8gcHV0IHRoZSBzaGlwIGluIGFuIGVtcHR5IGJvYXJkXG4gICAgaWYgKChvcmllbnRhdGlvbiA9PT0gJ3YnICYmIHggKyBsZW5ndGhGbG9vciA+IDEwKSB8fCAob3JpZW50YXRpb24gPT09ICdoJyAmJiB5ICsgbGVuZ3RoRmxvb3IgPiAxMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRVJST1I6IFRoZSBzaGlwIGlzIG91dCBvZiBib3VuZHMnKTtcbiAgICB9XG4gICAgY29uc3QgbmV3QXJyYXkgPSB1dGlscy5nZXRFbXB0eUJvYXJkKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhGbG9vcjsgaSArPSAxKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICBuZXdBcnJheVt4ICsgaV1beV0gPSBuYW1lLmF0KDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3QXJyYXlbeF1beSArIGldID0gbmFtZS5hdCgwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGlmIChwb3NpdGlvbltpXS5pbmNsdWRlcyhuYW1lLmF0KDApKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0KGh4LCBoeSkge1xuICAgIGlmIChoeCA+IDkgfHwgaHkgPiA5KSB7IHJldHVybiAnRVJST1InOyB9XG4gICAgaWYgKHBvc2l0aW9uW2h4XVtoeV0gIT09ICcnKSB7XG4gICAgICBwb3NpdGlvbltoeF1baHldID0gJ1gnO1xuICAgICAgcmV0dXJuICdISVQnO1xuICAgIH1cbiAgICBwb3NpdGlvbltoeF1baHldID0gJ08nO1xuICAgIHJldHVybiAnTUlTUyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlbmd0aDogbGVuZ3RoRmxvb3IsXG4gICAgbmFtZSxcbiAgICBwb3NpdGlvbixcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY29uc3QgcHVic3ViID0ge1xuICBldmVudHM6IHt9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH0sXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKChmKSA9PiBmICE9PSBmbik7XG4gICAgfVxuICB9LFxuICBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGYpID0+IGYoZGF0YSkpO1xuICAgIH1cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGZuKSB7XG4gIHJldHVybiAoLi4ucGFyYW1zKSA9PiBmbiguLi5wYXJhbXMpLmNhdGNoKChlcikgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdlcnJvcicsIGVyKTtcbiAgfSk7XG59XG5cbmNvbnN0IGFzeW5jUGlwZSA9ICguLi5mbnMpID0+ICh4KSA9PiAoXG4gIGZucy5yZWR1Y2UoYXN5bmMgKHksIGYpID0+IGYoYXdhaXQgeSksIHgpXG4pO1xuXG5mdW5jdGlvbiBnZXRFbXB0eUJvYXJkKHNpemUgPSAxMCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGFycmF5W2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgIGFycmF5W2ldW2pdID0gJyc7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IHtcbiAgcHVic3ViLCBoYW5kbGVFcnJvciwgYXN5bmNQaXBlLCBnZXRFbXB0eUJvYXJkLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG4vLyBpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG4vLyBpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJztcblxuLy8gLS0tIGluaXQgLS0tXG5cbmNvbnN0IHBsYXllckdyaWQgPSBET00uY3JlYXRlR3JpZCgpO1xucGxheWVyR3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllci1ncmlkJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXllckdyaWQpO1xuXG5jb25zdCBlbmVteUdyaWQgPSBET00uY3JlYXRlR3JpZCgpO1xuZW5lbXlHcmlkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW5lbXktZ3JpZCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbmVteUdyaWQpO1xuXG51dGlscy5wdWJzdWIuc3Vic2NyaWJlKCdwbGF5ZXIxQm9hcmRDaGFuZ2VkJywgKGJvYXJkKSA9PiBET00udXBkYXRlR3JpZChib2FyZCwgcGxheWVyR3JpZCkpO1xuXG5jb25zdCBzaGlwc0NsYXNzaWNUZW1wbGF0ZSA9IFsyLCAzLCAzLjUsIDQsIDVdO1xuY29uc3QgcGxheWVyMSA9IFBsYXllcigxKTtcbmNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoMik7XG5mdW5jdGlvbiBlbmVteUJvYXJkRXZlbnQoZSkge1xuICBjb25zdCB4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS14J10pO1xuICBjb25zdCB5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS15J10pO1xuICBwbGF5ZXIxLmZpcmUoeCwgeSk7XG4gIHBsYXllcjIuY29tcHV0ZXJGaXJlKCk7XG59XG5lbmVteUdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykuZm9yRWFjaCgoZGl2KSA9PiBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmVteUJvYXJkRXZlbnQpKTtcbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ2VuZW15MUJvYXJkQ2hhbmdlZCcsIChib2FyZCkgPT4gRE9NLnVwZGF0ZUVuZW15R3JpZChib2FyZCwgZW5lbXlHcmlkLCBlbmVteUJvYXJkRXZlbnQpKTtcblxuc2hpcHNDbGFzc2ljVGVtcGxhdGUuZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gIHBsYXllcjEuYWRkQ29tcHV0ZXJTaGlwKGxlbmd0aCk7XG4gIHBsYXllcjIuYWRkQ29tcHV0ZXJTaGlwKGxlbmd0aCk7XG59KTtcblxuY29uc29sZS50YWJsZShwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkKTtcblxuRE9NLmVkaXRNb2RlKHBsYXllckdyaWQpO1xuLy8gY29uc29sZS5sb2codXRpbHMuaXNQb3NpdGlvblZhbGlkKDIsIHsgeDogMCwgeTogMiwgb3JpZW50YXRpb246ICd2JyB9LCBwbGF5ZXJHcmlkKSk7XG5cbi8vIGNvbnN0IHNoaXBzID0gW1xuLy8gICB7IGxlbmd0aDogMiwgdXJsOiAnLi9wYXRyb2wuc3ZnJyB9LFxuLy8gICB7IGxlbmd0aDogMywgdXJsOiAnLi9zdWJtYXJpbmUuc3ZnJyB9LFxuLy8gICB7IGxlbmd0aDogMy41LCB1cmw6ICcuL2Rlc3Ryb3llci5zdmcnIH0sXG4vLyAgIHsgbGVuZ3RoOiA0LCB1cmw6ICcuL2Rlc3Ryb3llci5zdmcnIH0sXG4vLyAgIHsgbGVuZ3RoOiA1LCB1cmw6ICcuL2NhcnJpZXIuc3ZnJyB9LFxuLy8gXTtcbi8vIGNvbnN0IHNoaXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBzaGlwT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaGlwLW92ZXJsYXknKTtcbi8vIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLmNsaWVudEhlaWdodFxuLy8gc2hpcE92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7c2hpcHNbMF0udXJsfVwiKWA7XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNoaXBPdmVybGF5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
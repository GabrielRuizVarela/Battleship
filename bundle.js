/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/wood-texture.jpg */ "./src/images/wood-texture.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/plastic-texture.jpg */ "./src/images/plastic-texture.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/water-texture.jpg */ "./src/images/water-texture.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Bebas Neue\", cursive;\n}\n\n:root,\nbody {\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100px;\n}\n\nbutton,\n.tile {\n  cursor: pointer;\n}\n\n.valid {\n  background-color: rgba(110, 133, 183, 0.8);\n  color: rgba(206, 171, 147, 0.8);\n}\n\n.invalid {\n  background-color: rgba(206, 171, 147, 0.8);\n  color: rgba(110, 133, 183, 0.8);\n}\n\n.ship-overlay,\n.ship-over {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border: none;\n}\n\ndialog {\n  max-width: 50ch;\n  margin: auto;\n  box-shadow: 0 2px 1rem 5px rgba(0, 0, 0, 0.8);\n  border-left: #ceab93 solid 0.8rem;\n  border-right: #6e85b7 solid 0.8rem;\n  border-top: none;\n  border-bottom: none;\n  border-radius: 0.5rem;\n}\ndialog h1 {\n  font-size: 2.1rem;\n}\ndialog > div {\n  padding: 2rem;\n  background: linear-gradient(45deg, rgba(110, 133, 183, 0.6) 30%, rgba(206, 171, 147, 0.6) 100%);\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-rows: repeat(2, 1fr);\n}\ndialog .buttons {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 1rem;\n  gap: 0.2rem;\n}\ndialog button {\n  font-size: 1.2rem;\n  padding: 1rem;\n  border: 1px solid white;\n}\ndialog #start-game {\n  background-color: #ceab93;\n  color: #6e85b7;\n  aspect-ratio: 1/1;\n}\ndialog #quick-start {\n  background-color: #6e85b7;\n  color: #ceab93;\n  aspect-ratio: 1/1;\n}\ndialog #reset-button {\n  background-color: #ceab93;\n  background-color: #6e85b7;\n  aspect-ratio: 1/1;\n}\ndialog::backdrop {\n  background: rgba(0, 0, 0, 0.3);\n}\n\nmain {\n  display: grid;\n  padding: 1rem;\n  gap: 0.5rem;\n}\n\n#switch-orientation {\n  justify-self: center;\n  width: min-content;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid white;\n}\n\n#tittle {\n  padding: 1rem;\n  justify-self: center;\n  font-size: 5rem;\n  background: -webkit-linear-gradient(#6e85b7, #ceab93);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 5px -5px 0px black;\n}\n\n#boards {\n  display: grid;\n  height: 100%;\n  width: 100%;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 500px));\n  gap: 1rem;\n  justify-content: center;\n}\n\n#enemy-grid,\n#player-grid {\n  justify-self: center;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 100%;\n  width: 100%;\n  aspect-ratio: 1/1;\n  background-color: rgb(154, 12, 12);\n  position: relative;\n  border: 1rem solid;\n  border-image-source: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  border-image-slice: 100;\n  border-image-repeat: repeat;\n  box-shadow: 6px -8px 1rem 5px rgba(0, 0, 0, 0.4);\n}\n#enemy-grid::after,\n#player-grid::after {\n  content: \"\";\n  position: absolute;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: repeat;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.75;\n}\n\n#player-grid {\n  outline: rgba(110, 133, 183, 0.8) solid 1px;\n}\n\n#enemy-grid {\n  outline: rgba(206, 171, 147, 0.8) solid 1px;\n}\n\n.tile {\n  border: 1px solid #ceab93;\n  z-index: 1;\n}\n\n#enemy-grid {\n  color: black;\n}\n\n.hit {\n  background-color: rgba(255, 0, 0, 0.222);\n}\n\n.miss {\n  background-color: rgba(0, 0, 255, 0.213);\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AAUA;;;EAGE,sBAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;AARF;;AAWA;;EAEE,iBAAA;EACA,gBAAA;AARF;;AAWA;EACE,yDAAA;EACA,sBAAA;AARF;;AAWA;;EAEE,eAAA;AARF;;AAWA;EACE,0CAAA;EACA,+BAAA;AARF;;AAUA;EACE,0CAAA;EACA,+BAAA;AAPF;;AAUA;;EAEE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;EACA,YAAA;AAPF;;AAUA;EACE,eAAA;EACA,YAAA;EACA,6CAAA;EACA,iCAAA;EACA,kCAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;AAPF;AAQE;EACE,iBAAA;AANJ;AAQE;EACE,aAAA;EACA,+FAAA;EAKA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,kCAAA;AAVJ;AAYE;EACE,aAAA;EACA,qCAAA;EACA,aAAA;EACA,WAAA;AAVJ;AAYE;EACE,iBAAA;EACA,aAAA;EACA,uBAAA;AAVJ;AAYE;EACE,yBAAA;EACA,cAAA;EACA,iBAAA;AAVJ;AAYE;EACE,yBAAA;EACA,cAAA;EACA,iBAAA;AAVJ;AAYE;EACE,yBAAA;EACA,yBAAA;EACA,iBAAA;AAVJ;AAYE;EACE,8BAAA;AAVJ;;AAcA;EACE,aAAA;EACA,aAAA;EACA,WAAA;AAXF;;AAcA;EACE,oBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,uBAAA;AAXF;;AAcA;EACE,aAAA;EACA,oBAAA;EACA,eAAA;EACA,qDAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;EACA,+BAAA;AAXF;;AAaA;EACE,aAAA;EACA,YAAA;EACA,WAAA;EACA,8DAAA;EACA,SAAA;EACA,uBAAA;AAVF;;AAaA;;EAEE,oBAAA;EACA,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,kCAAA;EACA,kBAAA;EAYA,kBAAA;EACA,4DAAA;EACA,uBAAA;EACA,2BAAA;EACA,gDAAA;AArBF;AAME;;EACE,WAAA;EACA,kBAAA;EACA,yDAAA;EACA,yBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,SAAA;EACA,aAAA;AAHJ;;AAWA;EACE,2CAAA;AARF;;AAUA;EACE,2CAAA;AAPF;;AAUA;EACE,yBAAA;EACA,UAAA;AAPF;;AAUA;EACE,YAAA;AAPF;;AAUA;EACE,wCAAA;AAPF;;AASA;EACE,wCAAA;AANF","sourcesContent":["@use \"colors\" as *;\n@use \"shades\" as *;\n@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap\");\n\n@function clr($color, $shade) {\n  $newcolor: map-get($colors, $color);\n  $newshade: map-get($shades, $shade);\n  @return rgba($newcolor, $newshade);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Bebas Neue\", cursive;\n}\n\n:root,\nbody {\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\nbody {\n  background-image: url(\"../images/wood-texture.jpg\");\n  background-size: 100px;\n}\n\nbutton,\n.tile {\n  cursor: pointer;\n}\n\n.valid {\n  background-color: clr(secondary, 4);\n  color: clr(primary, 4);\n}\n.invalid {\n  background-color: clr(primary, 4);\n  color: clr(secondary, 4);\n}\n\n.ship-overlay,\n.ship-over {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border: none;\n}\n\ndialog {\n  max-width: 50ch;\n  margin: auto;\n  box-shadow: 0 2px 1rem 5px clr(black, 4);\n  border-left: clr(primary, 5) solid 0.8rem;\n  border-right: clr(secondary, 5) solid 0.8rem;\n  border-top: none;\n  border-bottom: none;\n  border-radius: 0.5rem;\n  h1 {\n    font-size: 2.1rem;\n  }\n  > div {\n    padding: 2rem;\n    background: linear-gradient(\n      45deg,\n      clr(secondary, 3) 30%,\n      clr(primary, 3) 100%\n    );\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-rows: repeat(2, 1fr);\n  }\n  .buttons {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 1rem;\n    gap: 0.2rem;\n  }\n  button {\n    font-size: 1.2rem;\n    padding: 1rem;\n    border: 1px solid white;\n  }\n  #start-game {\n    background-color: clr(primary, 5);\n    color: clr(secondary, 5);\n    aspect-ratio: 1/1;\n  }\n  #quick-start {\n    background-color: clr(secondary, 5);\n    color: clr(primary, 5);\n    aspect-ratio: 1/1;\n  }\n  #reset-button {\n    background-color: clr(primary, 5);\n    background-color: clr(secondary, 5);\n    aspect-ratio: 1/1;\n  }\n  &::backdrop {\n    background: rgba(0, 0, 0, 0.3);\n  }\n}\n\nmain {\n  display: grid;\n  padding: 1rem;\n  gap: 0.5rem;\n}\n\n#switch-orientation {\n  justify-self: center;\n  width: min-content;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid white;\n}\n\n#tittle {\n  padding: 1rem;\n  justify-self: center;\n  font-size: 5rem;\n  background: -webkit-linear-gradient(clr(secondary, 5), clr(primary, 5));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 5px -5px 0px black;\n}\n#boards {\n  display: grid;\n  height: 100%;\n  width: 100%;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 500px));\n  gap: 1rem;\n  justify-content: center;\n}\n\n#enemy-grid,\n#player-grid {\n  justify-self: center;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 100%;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  background-color: rgb(154, 12, 12);\n  position: relative;\n  &::after {\n    content: \"\";\n    position: absolute;\n    background-image: url(\"../images/water-texture.jpg\");\n    background-repeat: repeat;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.75;\n  }\n  border: 1rem solid;\n  border-image-source: url(\"../images/plastic-texture.jpg\");\n  border-image-slice: 100;\n  border-image-repeat: repeat;\n  box-shadow: 6px -8px 1rem 5px clr(black, 2);\n}\n#player-grid {\n  outline: clr(secondary, 4) solid 1px;\n}\n#enemy-grid {\n  outline: clr(primary, 4) solid 1px;\n}\n\n.tile {\n  border: 1px solid clr(primary, 5);\n  z-index: 1;\n}\n\n#enemy-grid {\n  color: black;\n}\n\n.hit {\n  background-color: rgba(255, 0, 0, 0.222);\n}\n.miss {\n  background-color: rgba(0, 0, 255, 0.213);\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

      
      
      
      
      
      
      
      
      

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
/* harmony export */   "addShipToGrid": () => (/* binding */ addShipToGrid),
/* harmony export */   "createGrid": () => (/* binding */ createGrid),
/* harmony export */   "editMode": () => (/* binding */ editMode),
/* harmony export */   "editModeEvent": () => (/* binding */ editModeEvent),
/* harmony export */   "endScreen": () => (/* binding */ endScreen),
/* harmony export */   "updateEnemyGrid": () => (/* binding */ updateEnemyGrid),
/* harmony export */   "updateGrid": () => (/* binding */ updateGrid),
/* harmony export */   "welcomeScreen": () => (/* binding */ welcomeScreen)
/* harmony export */ });
/* harmony import */ var _images_patrol_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/patrol.svg */ "./src/images/patrol.svg");
/* harmony import */ var _images_submarine_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/submarine.svg */ "./src/images/submarine.svg");
/* harmony import */ var _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/destroyer.svg */ "./src/images/destroyer.svg");
/* harmony import */ var _images_carrier_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/carrier.svg */ "./src/images/carrier.svg");
/* harmony import */ var _images_patrol_v_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/patrol-v.svg */ "./src/images/patrol-v.svg");
/* harmony import */ var _images_submarine_v_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/submarine-v.svg */ "./src/images/submarine-v.svg");
/* harmony import */ var _images_destroyer_v_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/destroyer-v.svg */ "./src/images/destroyer-v.svg");
/* harmony import */ var _images_destroyer1v_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/destroyer1v.svg */ "./src/images/destroyer1v.svg");
/* harmony import */ var _images_carrier_v_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/carrier-v.svg */ "./src/images/carrier-v.svg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable no-param-reassign */
// import pubsub from './utils';











let IMG = [];
const ships = [
  { length: 2, url: _images_patrol_svg__WEBPACK_IMPORTED_MODULE_0__, v: _images_patrol_v_svg__WEBPACK_IMPORTED_MODULE_4__ },
  { length: 3, url: _images_submarine_svg__WEBPACK_IMPORTED_MODULE_1__, v: _images_submarine_v_svg__WEBPACK_IMPORTED_MODULE_5__ },
  { length: 3.5, url: _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__, v: _images_destroyer_v_svg__WEBPACK_IMPORTED_MODULE_6__ },
  { length: 4, url: _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__, v: _images_destroyer1v_svg__WEBPACK_IMPORTED_MODULE_7__ },
  { length: 5, url: _images_carrier_svg__WEBPACK_IMPORTED_MODULE_3__, v: _images_carrier_v_svg__WEBPACK_IMPORTED_MODULE_8__ },
];
let shipIndex = 0;
let ORIENTATION = 'h';
const switchOrientation = document.querySelector('#switch-orientation');
switchOrientation.classList.add('valid');
switchOrientation.addEventListener('click', () => {
  if (ORIENTATION === 'v') {
    ORIENTATION = 'h';
    switchOrientation.classList.add('valid');
    switchOrientation.classList.remove('invalid');
  } else {
    ORIENTATION = 'v';
    switchOrientation.classList.add('invalid');
    switchOrientation.classList.remove('valid');
  }
});

function createGrid(size = 10) {
  const grid = document.createElement('div');
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const div = document.createElement('div');
      div.setAttribute('data-x', i);
      div.setAttribute('data-y', j);
      div.classList.add('tile');
      grid.appendChild(div);
    }
  }
  return grid;
}

function updateGrid(board, grid, reset = false) {
  board.forEach((rows, x) => {
    rows.forEach((columns, y) => {
      const div = grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      div.setAttribute('data-ship', columns);
      if (columns === 'X') {
        div.classList.add('hit');
      }
      if (columns === 'O') {
        div.classList.add('miss');
      }
      if (reset) { div.textContent = ''; }
    });
  });
  if (reset) {
    IMG = [];
    shipIndex = 0;
  }
  IMG.forEach((img) => {
    const target = grid.querySelector(`[data-x="${img.x}"][data-y="${img.y}"]`);
    target.appendChild(img.image);
    target.style.position = 'relative';
  });
}

function updateEnemyGrid(board, grid, eventCB) {
  // console.table(board);
  board.forEach((rows, x) => {
    rows.forEach((columns, y) => {
      const div = grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      div.setAttribute('data-ship', columns);
      if (columns === 'X') {
        div.classList.add('hit');
      }
      if (columns === 'O') {
        div.classList.add('miss');
      }
      div.removeEventListener('click', eventCB);
      if (columns === '') { div.addEventListener('click', eventCB); }
    });
  });
}

function xyToIndex(x, y) {
  return Number(x) * 10 + Number(y);
}

function addShipToGrid(e) {
  let orientation = ORIENTATION;
  let target;
  if (e.orientation) {
    orientation = e.orientation;
    target = e.target;
  } else {
    target = this;
  }
  const x = Number(target.getAttribute(['data-x']));
  const y = Number(target.getAttribute(['data-y']));
  const length = Math.floor(ships[shipIndex].length);
  const grid = target.parentNode;
  const image = document.createElement('span');
  image.classList.add('ship-over');
  if (orientation === 'h') {
    image.style.backgroundImage = `url("${ships[shipIndex].url}")`;
    image.style.height = `${target.clientHeight}px`;
    image.style.width = `${target.clientWidth * length}px`;
  } else {
    image.style.backgroundImage = `url("${ships[shipIndex].v}")`;
    image.style.height = `${target.clientHeight * length}px`;
    image.style.width = `${target.clientWidth}px`;
  }
  IMG.push({ x, y, image });
  if (!e.orientation) {
    _utils__WEBPACK_IMPORTED_MODULE_9__.pubsub.publish('player1AddShipToGrid', { length: Math.floor(ships[shipIndex].length), coord: { x, y, orientation: ORIENTATION } });
    if (shipIndex < ships.length - 1) { shipIndex += 1; } else {
      _utils__WEBPACK_IMPORTED_MODULE_9__.pubsub.publish('killEvents', grid);
    }
  } else if (shipIndex < ships.length - 1) { shipIndex += 1; } else {
    _utils__WEBPACK_IMPORTED_MODULE_9__.pubsub.publish('killEvents', grid);
  }
}

function isPositionValid(length, { x, y, orientation }, grid, size = 10) {
  const nx = Number(x);
  const ny = Number(y);
  const array = Array.from(grid.querySelectorAll('div'));
  const index = orientation === 'v' ? nx : ny;
  for (let i = index; i < index + length && i < size; i += 1) {
    if (orientation === 'v') {
      if (!(array[xyToIndex(i, ny)].getAttribute(['data-ship']) === '' || array[xyToIndex(i, ny)].getAttribute(['data-ship']) === null) || index + length > size) {
        return false;
      }
    } else if (!(array[xyToIndex(nx, i)].getAttribute(['data-ship']) === '' || array[xyToIndex(i, ny)].getAttribute(['data-ship']) === null) || index + length > size) {
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
  // e.stopPropagation();
  if (e.target !== this) { return; }
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  const grid = e.target.parentNode;
  const array = Array.from(grid.querySelectorAll('.tile'));
  array.forEach((div) => {
    div.classList.remove('invalid');
    div.classList.remove('valid');
    if (!div.innerHTML) { div.style.position = 'static'; }
  });
  grid.querySelectorAll('span.ship-overlay').forEach((span) => span.remove());
  const length = Math.floor(ships[shipIndex].length);
  const positionIsValid = isPositionValid(
    length,
    { x, y, orientation: ORIENTATION },
    grid,
  );
  const shipOverlay = document.createElement('span');
  shipOverlay.classList.add('ship-overlay');
  if (positionIsValid) {
    shipOverlay.classList.add('valid');
    // manageValidClass(length, { x, y, orientation: ORIENTATION }, grid, 'valid');
    if (ORIENTATION === 'h') {
      shipOverlay.style.backgroundImage = `url("${ships[shipIndex].url}")`;
      shipOverlay.style.height = `${e.target.clientHeight}px`;
      shipOverlay.style.width = `${e.target.clientWidth * length}px`;
    } else {
      shipOverlay.style.backgroundImage = `url("${ships[shipIndex].v}")`;
      shipOverlay.style.height = `${e.target.clientHeight * length}px`;
      shipOverlay.style.width = `${e.target.clientWidth}px`;
    }
    array[xyToIndex(x, y)].addEventListener('click', addShipToGrid);
    array[xyToIndex(x, y)].appendChild(shipOverlay);
  } else {
    // shipOverlay.classList.add('invalid');
    manageValidClass(ships[shipIndex].length, { x, y, orientation: ORIENTATION }, grid, 'invalid');
    array[xyToIndex(x, y)].removeEventListener('click', addShipToGrid);
  }
}

function editMode(grid) {
  const divs = grid.querySelectorAll('.tile');
  divs.forEach((div) => div.addEventListener('mouseover', editModeEvent));
}

function welcomeScreen(grid) {
  const modal = document.querySelector('#welcome-modal');
  modal.addEventListener('cancel', () => {
    _utils__WEBPACK_IMPORTED_MODULE_9__.pubsub.publish('addShipsAtRandom', ships);
  });
  const startGameButton = document.querySelector('#start-game');
  startGameButton.addEventListener('click', () => {
    editMode(grid);
    modal.close();
  });
  const quickStart = document.querySelector('#quick-start');
  quickStart.addEventListener('click', () => {
    _utils__WEBPACK_IMPORTED_MODULE_9__.pubsub.publish('addShipsAtRandom', ships);
    modal.close();
  });
  modal.showModal();
  return {
    showModal: () => modal.showModal(),
    close: () => modal.close(),
  };
}

function endScreen(cb) {
  const modal = document.querySelector('#end-modal');
  // modal.showModal();
  modal.addEventListener('cancel', () => {
    cb();
  });
  const h1 = modal.querySelector('h1');
  // h1.textContent = msg;
  const button = modal.querySelector('#reset-button');
  button.addEventListener('click', () => {
    modal.close();
    cb();
  });
  return {
    showModal: () => modal.showModal(),
    title: h1,
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
  _utils__WEBPACK_IMPORTED_MODULE_9__.pubsub.publish('ready');
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

  let ships = [];

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
    if (ships.length === 0) { return false; }
    ships.forEach((ship) => {
      if (!ship.isSunk()) {
        allShipSunk = false;
      }
    });
    return allShipSunk;
  }

  function resetBoard() {
    pBoard = _utils__WEBPACK_IMPORTED_MODULE_0__.getEmptyBoard(size);
    ships = [];
  }

  return {
    addShip,
    receiveAttack,
    isGameOver,
    get board() { return pBoard; },
    resetBoard,
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
  let pEnemyBoard = _utils__WEBPACK_IMPORTED_MODULE_1__.getEmptyBoard();
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
    return [x, y, orientation];
  }

  function reset() {
    pEnemyBoard = _utils__WEBPACK_IMPORTED_MODULE_1__.getEmptyBoard();
    playerBoard.resetBoard();
    _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish(`player${num}BoardChanged`, playerBoard.board);
    // utils.pubsub.publish(`enemy${num}BoardChanged`, pEnemyBoard);
  }

  return {
    get enemyBoard() { return pEnemyBoard; },
    playerBoard,
    addShip,
    fire,
    computerFire,
    addComputerShip,
    reset,
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

/***/ "./src/images/carrier-v.svg":
/*!**********************************!*\
  !*** ./src/images/carrier-v.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b5a759577057c56e711.svg";

/***/ }),

/***/ "./src/images/carrier.svg":
/*!********************************!*\
  !*** ./src/images/carrier.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69be4df16a9a79625ec9.svg";

/***/ }),

/***/ "./src/images/destroyer-v.svg":
/*!************************************!*\
  !*** ./src/images/destroyer-v.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5b7170845e7385d23f7.svg";

/***/ }),

/***/ "./src/images/destroyer.svg":
/*!**********************************!*\
  !*** ./src/images/destroyer.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9281e50ac335172eca7.svg";

/***/ }),

/***/ "./src/images/destroyer1v.svg":
/*!************************************!*\
  !*** ./src/images/destroyer1v.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09662d84fd997bae557a.svg";

/***/ }),

/***/ "./src/images/patrol-v.svg":
/*!*********************************!*\
  !*** ./src/images/patrol-v.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98a54292c9c1629e6385.svg";

/***/ }),

/***/ "./src/images/patrol.svg":
/*!*******************************!*\
  !*** ./src/images/patrol.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5050c3ee4e2425de07ce.svg";

/***/ }),

/***/ "./src/images/plastic-texture.jpg":
/*!****************************************!*\
  !*** ./src/images/plastic-texture.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ad0647247d6d9ed7124.jpg";

/***/ }),

/***/ "./src/images/submarine-v.svg":
/*!************************************!*\
  !*** ./src/images/submarine-v.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae5634929fdf7ab6e1d6.svg";

/***/ }),

/***/ "./src/images/submarine.svg":
/*!**********************************!*\
  !*** ./src/images/submarine.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03df36427e6535115de6.svg";

/***/ }),

/***/ "./src/images/water-texture.jpg":
/*!**************************************!*\
  !*** ./src/images/water-texture.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66fe044e23be83c5a783.jpg";

/***/ }),

/***/ "./src/images/wood-texture.jpg":
/*!*************************************!*\
  !*** ./src/images/wood-texture.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aef757cb88b9701e58e1.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");

// import Ship from './ship';

// import Gameboard from './gameboard';



// --- init ---
let ready = false;
_utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('ready', () => { ready = true; });
const main = document.querySelector('#boards');

const playerGrid = _DOM__WEBPACK_IMPORTED_MODULE_3__.createGrid();
playerGrid.setAttribute('id', 'player-grid');
main.appendChild(playerGrid);

const enemyGrid = _DOM__WEBPACK_IMPORTED_MODULE_3__.createGrid();
enemyGrid.setAttribute('id', 'enemy-grid');
main.appendChild(enemyGrid);

const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(1);
const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(2);

const welcomeModal = _DOM__WEBPACK_IMPORTED_MODULE_3__.welcomeScreen(playerGrid);
const endScreen = _DOM__WEBPACK_IMPORTED_MODULE_3__.endScreen(welcomeModal.showModal);

_utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('player1BoardChanged', (board) => {
  _DOM__WEBPACK_IMPORTED_MODULE_3__.updateGrid(board, playerGrid);
  if (player1.playerBoard.isGameOver()) {
    _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish('GameOver', 'Computer Wins');
  }
});

function enemyBoardEvent(e) {
  if (!ready) { return; }
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  player1.fire(x, y);
  player2.computerFire();
}
enemyGrid.querySelectorAll('div').forEach((div) => div.addEventListener('click', enemyBoardEvent));

_utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('enemy1BoardChanged', (board) => {
  _DOM__WEBPACK_IMPORTED_MODULE_3__.updateEnemyGrid(board, enemyGrid, enemyBoardEvent);
  if (player2.playerBoard.isGameOver()) {
    // console.log(player2.playerBoard.isGameOver());
    _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish('GameOver', 'Player Wins');
  }
});

_utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('player1AddShipToGrid', ({ length, coord }) => {
  player1.addShip(length, coord);
  player2.addComputerShip(length);
});

_utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('addShipsAtRandom', (ships) => {
  ships.forEach((ship) => {
    const [x, y, orientation] = player1.addComputerShip(ship.length);
    const div = playerGrid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    div.style.position = 'relative';
    _DOM__WEBPACK_IMPORTED_MODULE_3__.addShipToGrid({ target: div, orientation });
    player2.addComputerShip(ship.length);
  });
  _utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish('player1BoardChanged', player1.playerBoard.board);
});

_utils__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('GameOver', (str) => {
  player1.reset();
  _DOM__WEBPACK_IMPORTED_MODULE_3__.updateGrid(player1.playerBoard.board, playerGrid, true);
  player2.reset();
  _DOM__WEBPACK_IMPORTED_MODULE_3__.updateEnemyGrid(player1.enemyBoard, enemyGrid);
  endScreen.title.textContent = str;
  endScreen.showModal();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhOztBQUUvQixvREFBc0I7QUFDdEIsRUFBRSw0Q0FBYztBQUNoQjtBQUNBLElBQUksa0RBQW9CO0FBQ3hCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQXNCO0FBQ3RCLEVBQUUsaURBQW1CO0FBQ3JCO0FBQ0E7QUFDQSxJQUFJLGtEQUFvQjtBQUN4QjtBQUNBLENBQUM7O0FBRUQsb0RBQXNCLDRCQUE0QixlQUFlO0FBQ2pFO0FBQ0E7QUFDQSxDQUFDOztBQUVELG9EQUFzQjtBQUN0QjtBQUNBO0FBQ0EscURBQXFELEVBQUUsYUFBYSxFQUFFO0FBQ3RFO0FBQ0EsSUFBSSwrQ0FBaUIsR0FBRywwQkFBMEI7QUFDbEQ7QUFDQSxHQUFHO0FBQ0gsRUFBRSxrREFBb0I7QUFDdEIsQ0FBQzs7QUFFRCxvREFBc0I7QUFDdEI7QUFDQSxFQUFFLDRDQUFjO0FBQ2hCO0FBQ0EsRUFBRSxpREFBbUI7QUFDckI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz83NDdlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd29vZC10ZXh0dXJlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wbGFzdGljLXRleHR1cmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3dhdGVyLXRleHR1cmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZWJhcyBOZXVlXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuOnJvb3QsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XFxufVxcblxcbmJ1dHRvbixcXG4udGlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMCwgMTMzLCAxODMsIDAuOCk7XFxuICBjb2xvcjogcmdiYSgyMDYsIDE3MSwgMTQ3LCAwLjgpO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMTcxLCAxNDcsIDAuOCk7XFxuICBjb2xvcjogcmdiYSgxMTAsIDEzMywgMTgzLCAwLjgpO1xcbn1cXG5cXG4uc2hpcC1vdmVybGF5LFxcbi5zaGlwLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmRpYWxvZyB7XFxuICBtYXgtd2lkdGg6IDUwY2g7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3gtc2hhZG93OiAwIDJweCAxcmVtIDVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBib3JkZXItbGVmdDogI2NlYWI5MyBzb2xpZCAwLjhyZW07XFxuICBib3JkZXItcmlnaHQ6ICM2ZTg1Yjcgc29saWQgMC44cmVtO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbmRpYWxvZyBoMSB7XFxuICBmb250LXNpemU6IDIuMXJlbTtcXG59XFxuZGlhbG9nID4gZGl2IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTEwLCAxMzMsIDE4MywgMC42KSAzMCUsIHJnYmEoMjA2LCAxNzEsIDE0NywgMC42KSAxMDAlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuZGlhbG9nIC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5kaWFsb2cgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5kaWFsb2cgI3N0YXJ0LWdhbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlYWI5MztcXG4gIGNvbG9yOiAjNmU4NWI3O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcbmRpYWxvZyAjcXVpY2stc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlODViNztcXG4gIGNvbG9yOiAjY2VhYjkzO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcbmRpYWxvZyAjcmVzZXQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWFiOTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU4NWI3O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNzd2l0Y2gtb3JpZW50YXRpb24ge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3RpdHRsZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNmU4NWI3LCAjY2VhYjkzKTtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1zaGFkb3c6IDVweCAtNXB4IDBweCBibGFjaztcXG59XFxuXFxuI2JvYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgNTAwcHgpKTtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZW5lbXktZ3JpZCxcXG4jcGxheWVyLWdyaWQge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAxMiwgMTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkO1xcbiAgYm9yZGVyLWltYWdlLXNvdXJjZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTAwO1xcbiAgYm9yZGVyLWltYWdlLXJlcGVhdDogcmVwZWF0O1xcbiAgYm94LXNoYWRvdzogNnB4IC04cHggMXJlbSA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4jZW5lbXktZ3JpZDo6YWZ0ZXIsXFxuI3BsYXllci1ncmlkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4jcGxheWVyLWdyaWQge1xcbiAgb3V0bGluZTogcmdiYSgxMTAsIDEzMywgMTgzLCAwLjgpIHNvbGlkIDFweDtcXG59XFxuXFxuI2VuZW15LWdyaWQge1xcbiAgb3V0bGluZTogcmdiYSgyMDYsIDE3MSwgMTQ3LCAwLjgpIHNvbGlkIDFweDtcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlYWI5MztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNlbmVteS1ncmlkIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yMjIpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4yMTMpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFVQTs7O0VBR0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FBUkY7O0FBV0E7O0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UseURBQUE7RUFDQSxzQkFBQTtBQVJGOztBQVdBOztFQUVFLGVBQUE7QUFSRjs7QUFXQTtFQUNFLDBDQUFBO0VBQ0EsK0JBQUE7QUFSRjs7QUFVQTtFQUNFLDBDQUFBO0VBQ0EsK0JBQUE7QUFQRjs7QUFVQTs7RUFFRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFQRjtBQVFFO0VBQ0UsaUJBQUE7QUFOSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLCtGQUFBO0VBS0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQVZKO0FBWUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVZKO0FBWUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVZKO0FBWUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVZKO0FBWUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVZKO0FBWUU7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQVlFO0VBQ0UsOEJBQUE7QUFWSjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0FBWEY7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4REFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQVZGOztBQWFBOztFQUVFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQVlBLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0RBQUE7QUFyQkY7QUFNRTs7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFISjs7QUFXQTtFQUNFLDJDQUFBO0FBUkY7O0FBVUE7RUFDRSwyQ0FBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0FBUEY7O0FBVUE7RUFDRSx3Q0FBQTtBQVBGOztBQVNBO0VBQ0Usd0NBQUE7QUFORlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuQHVzZSBcXFwic2hhZGVzXFxcIiBhcyAqO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuQGZ1bmN0aW9uIGNscigkY29sb3IsICRzaGFkZSkge1xcbiAgJG5ld2NvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvcik7XFxuICAkbmV3c2hhZGU6IG1hcC1nZXQoJHNoYWRlcywgJHNoYWRlKTtcXG4gIEByZXR1cm4gcmdiYSgkbmV3Y29sb3IsICRuZXdzaGFkZSk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZWJhcyBOZXVlXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuOnJvb3QsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvd29vZC10ZXh0dXJlLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweDtcXG59XFxuXFxuYnV0dG9uLFxcbi50aWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNscihzZWNvbmRhcnksIDQpO1xcbiAgY29sb3I6IGNscihwcmltYXJ5LCA0KTtcXG59XFxuLmludmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY2xyKHByaW1hcnksIDQpO1xcbiAgY29sb3I6IGNscihzZWNvbmRhcnksIDQpO1xcbn1cXG5cXG4uc2hpcC1vdmVybGF5LFxcbi5zaGlwLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmRpYWxvZyB7XFxuICBtYXgtd2lkdGg6IDUwY2g7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3gtc2hhZG93OiAwIDJweCAxcmVtIDVweCBjbHIoYmxhY2ssIDQpO1xcbiAgYm9yZGVyLWxlZnQ6IGNscihwcmltYXJ5LCA1KSBzb2xpZCAwLjhyZW07XFxuICBib3JkZXItcmlnaHQ6IGNscihzZWNvbmRhcnksIDUpIHNvbGlkIDAuOHJlbTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDIuMXJlbTtcXG4gIH1cXG4gID4gZGl2IHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDQ1ZGVnLFxcbiAgICAgIGNscihzZWNvbmRhcnksIDMpIDMwJSxcXG4gICAgICBjbHIocHJpbWFyeSwgMykgMTAwJVxcbiAgICApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuICAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGdhcDogMC4ycmVtO1xcbiAgfVxcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcbiAgI3N0YXJ0LWdhbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjbHIocHJpbWFyeSwgNSk7XFxuICAgIGNvbG9yOiBjbHIoc2Vjb25kYXJ5LCA1KTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICB9XFxuICAjcXVpY2stc3RhcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjbHIoc2Vjb25kYXJ5LCA1KTtcXG4gICAgY29sb3I6IGNscihwcmltYXJ5LCA1KTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICB9XFxuICAjcmVzZXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2xyKHByaW1hcnksIDUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjbHIoc2Vjb25kYXJ5LCA1KTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICB9XFxuICAmOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jc3dpdGNoLW9yaWVudGF0aW9uIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbiN0aXR0bGUge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY2xyKHNlY29uZGFyeSwgNSksIGNscihwcmltYXJ5LCA1KSk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtc2hhZG93OiA1cHggLTVweCAwcHggYmxhY2s7XFxufVxcbiNib2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDUwMHB4KSk7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2VuZW15LWdyaWQsXFxuI3BsYXllci1ncmlkIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAxMiwgMTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy93YXRlci10ZXh0dXJlLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gIH1cXG4gIGJvcmRlcjogMXJlbSBzb2xpZDtcXG4gIGJvcmRlci1pbWFnZS1zb3VyY2U6IHVybChcXFwiLi4vaW1hZ2VzL3BsYXN0aWMtdGV4dHVyZS5qcGdcXFwiKTtcXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTAwO1xcbiAgYm9yZGVyLWltYWdlLXJlcGVhdDogcmVwZWF0O1xcbiAgYm94LXNoYWRvdzogNnB4IC04cHggMXJlbSA1cHggY2xyKGJsYWNrLCAyKTtcXG59XFxuI3BsYXllci1ncmlkIHtcXG4gIG91dGxpbmU6IGNscihzZWNvbmRhcnksIDQpIHNvbGlkIDFweDtcXG59XFxuI2VuZW15LWdyaWQge1xcbiAgb3V0bGluZTogY2xyKHByaW1hcnksIDQpIHNvbGlkIDFweDtcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgY2xyKHByaW1hcnksIDUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI2VuZW15LWdyaWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIyMik7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIxMyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8vIGltcG9ydCBwdWJzdWIgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgcGF0cm9sIGZyb20gJy4vaW1hZ2VzL3BhdHJvbC5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZSBmcm9tICcuL2ltYWdlcy9zdWJtYXJpbmUuc3ZnJztcbmltcG9ydCBkZXN0cm95ZXIgZnJvbSAnLi9pbWFnZXMvZGVzdHJveWVyLnN2Zyc7XG5pbXBvcnQgY2FycmllciBmcm9tICcuL2ltYWdlcy9jYXJyaWVyLnN2Zyc7XG5pbXBvcnQgcGF0cm9sdiBmcm9tICcuL2ltYWdlcy9wYXRyb2wtdi5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZXYgZnJvbSAnLi9pbWFnZXMvc3VibWFyaW5lLXYuc3ZnJztcbmltcG9ydCBkZXN0cm95ZXJ2IGZyb20gJy4vaW1hZ2VzL2Rlc3Ryb3llci12LnN2Zyc7XG5pbXBvcnQgZGVzdHJveWVyYnYgZnJvbSAnLi9pbWFnZXMvZGVzdHJveWVyMXYuc3ZnJztcbmltcG9ydCBjYXJyaWVydiBmcm9tICcuL2ltYWdlcy9jYXJyaWVyLXYuc3ZnJztcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gJy4vdXRpbHMnO1xuXG5sZXQgSU1HID0gW107XG5jb25zdCBzaGlwcyA9IFtcbiAgeyBsZW5ndGg6IDIsIHVybDogcGF0cm9sLCB2OiBwYXRyb2x2IH0sXG4gIHsgbGVuZ3RoOiAzLCB1cmw6IHN1Ym1hcmluZSwgdjogc3VibWFyaW5ldiB9LFxuICB7IGxlbmd0aDogMy41LCB1cmw6IGRlc3Ryb3llciwgdjogZGVzdHJveWVydiB9LFxuICB7IGxlbmd0aDogNCwgdXJsOiBkZXN0cm95ZXIsIHY6IGRlc3Ryb3llcmJ2IH0sXG4gIHsgbGVuZ3RoOiA1LCB1cmw6IGNhcnJpZXIsIHY6IGNhcnJpZXJ2IH0sXG5dO1xubGV0IHNoaXBJbmRleCA9IDA7XG5sZXQgT1JJRU5UQVRJT04gPSAnaCc7XG5jb25zdCBzd2l0Y2hPcmllbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2gtb3JpZW50YXRpb24nKTtcbnN3aXRjaE9yaWVudGF0aW9uLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG5zd2l0Y2hPcmllbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKE9SSUVOVEFUSU9OID09PSAndicpIHtcbiAgICBPUklFTlRBVElPTiA9ICdoJztcbiAgICBzd2l0Y2hPcmllbnRhdGlvbi5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICAgIHN3aXRjaE9yaWVudGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgfSBlbHNlIHtcbiAgICBPUklFTlRBVElPTiA9ICd2JztcbiAgICBzd2l0Y2hPcmllbnRhdGlvbi5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgc3dpdGNoT3JpZW50YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoc2l6ZSA9IDEwKSB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBpKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIGopO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyaWQoYm9hcmQsIGdyaWQsIHJlc2V0ID0gZmFsc2UpIHtcbiAgYm9hcmQuZm9yRWFjaCgocm93cywgeCkgPT4ge1xuICAgIHJvd3MuZm9yRWFjaCgoY29sdW1ucywgeSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZ3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXNoaXAnLCBjb2x1bW5zKTtcbiAgICAgIGlmIChjb2x1bW5zID09PSAnWCcpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbHVtbnMgPT09ICdPJykge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc2V0KSB7IGRpdi50ZXh0Q29udGVudCA9ICcnOyB9XG4gICAgfSk7XG4gIH0pO1xuICBpZiAocmVzZXQpIHtcbiAgICBJTUcgPSBbXTtcbiAgICBzaGlwSW5kZXggPSAwO1xuICB9XG4gIElNRy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2ltZy54fVwiXVtkYXRhLXk9XCIke2ltZy55fVwiXWApO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChpbWcuaW1hZ2UpO1xuICAgIHRhcmdldC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVFbmVteUdyaWQoYm9hcmQsIGdyaWQsIGV2ZW50Q0IpIHtcbiAgLy8gY29uc29sZS50YWJsZShib2FyZCk7XG4gIGJvYXJkLmZvckVhY2goKHJvd3MsIHgpID0+IHtcbiAgICByb3dzLmZvckVhY2goKGNvbHVtbnMsIHkpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwJywgY29sdW1ucyk7XG4gICAgICBpZiAoY29sdW1ucyA9PT0gJ1gnKSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW5zID09PSAnTycpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH1cbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50Q0IpO1xuICAgICAgaWYgKGNvbHVtbnMgPT09ICcnKSB7IGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50Q0IpOyB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB4eVRvSW5kZXgoeCwgeSkge1xuICByZXR1cm4gTnVtYmVyKHgpICogMTAgKyBOdW1iZXIoeSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNoaXBUb0dyaWQoZSkge1xuICBsZXQgb3JpZW50YXRpb24gPSBPUklFTlRBVElPTjtcbiAgbGV0IHRhcmdldDtcbiAgaWYgKGUub3JpZW50YXRpb24pIHtcbiAgICBvcmllbnRhdGlvbiA9IGUub3JpZW50YXRpb247XG4gICAgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gdGhpcztcbiAgfVxuICBjb25zdCB4ID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoWydkYXRhLXgnXSkpO1xuICBjb25zdCB5ID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoWydkYXRhLXknXSkpO1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmZsb29yKHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoKTtcbiAgY29uc3QgZ3JpZCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2hpcC1vdmVyJyk7XG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7c2hpcHNbc2hpcEluZGV4XS51cmx9XCIpYDtcbiAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9IGAke3RhcmdldC5jbGllbnRXaWR0aCAqIGxlbmd0aH1weGA7XG4gIH0gZWxzZSB7XG4gICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7c2hpcHNbc2hpcEluZGV4XS52fVwiKWA7XG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0LmNsaWVudEhlaWdodCAqIGxlbmd0aH1weGA7XG4gICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBgJHt0YXJnZXQuY2xpZW50V2lkdGh9cHhgO1xuICB9XG4gIElNRy5wdXNoKHsgeCwgeSwgaW1hZ2UgfSk7XG4gIGlmICghZS5vcmllbnRhdGlvbikge1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdwbGF5ZXIxQWRkU2hpcFRvR3JpZCcsIHsgbGVuZ3RoOiBNYXRoLmZsb29yKHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoKSwgY29vcmQ6IHsgeCwgeSwgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OIH0gfSk7XG4gICAgaWYgKHNoaXBJbmRleCA8IHNoaXBzLmxlbmd0aCAtIDEpIHsgc2hpcEluZGV4ICs9IDE7IH0gZWxzZSB7XG4gICAgICBwdWJzdWIucHVibGlzaCgna2lsbEV2ZW50cycsIGdyaWQpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzaGlwSW5kZXggPCBzaGlwcy5sZW5ndGggLSAxKSB7IHNoaXBJbmRleCArPSAxOyB9IGVsc2Uge1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdraWxsRXZlbnRzJywgZ3JpZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQb3NpdGlvblZhbGlkKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9LCBncmlkLCBzaXplID0gMTApIHtcbiAgY29uc3QgbnggPSBOdW1iZXIoeCk7XG4gIGNvbnN0IG55ID0gTnVtYmVyKHkpO1xuICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKSk7XG4gIGNvbnN0IGluZGV4ID0gb3JpZW50YXRpb24gPT09ICd2JyA/IG54IDogbnk7XG4gIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgbGVuZ3RoICYmIGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgaWYgKCEoYXJyYXlbeHlUb0luZGV4KGksIG55KV0uZ2V0QXR0cmlidXRlKFsnZGF0YS1zaGlwJ10pID09PSAnJyB8fCBhcnJheVt4eVRvSW5kZXgoaSwgbnkpXS5nZXRBdHRyaWJ1dGUoWydkYXRhLXNoaXAnXSkgPT09IG51bGwpIHx8IGluZGV4ICsgbGVuZ3RoID4gc2l6ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKGFycmF5W3h5VG9JbmRleChueCwgaSldLmdldEF0dHJpYnV0ZShbJ2RhdGEtc2hpcCddKSA9PT0gJycgfHwgYXJyYXlbeHlUb0luZGV4KGksIG55KV0uZ2V0QXR0cmlidXRlKFsnZGF0YS1zaGlwJ10pID09PSBudWxsKSB8fCBpbmRleCArIGxlbmd0aCA+IHNpemUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYXJyYXlbeHlUb0luZGV4KG54LCBueSldLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG1hbmFnZVZhbGlkQ2xhc3MobGVuZ3RoLCB7IHgsIHksIG9yaWVudGF0aW9uIH0sIGdyaWQsIGNsYXNzVG9BZGQsIHNpemUgPSAxMCkge1xuICBjb25zdCBueCA9IE51bWJlcih4KTtcbiAgY29uc3QgbnkgPSBOdW1iZXIoeSk7XG4gIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpKTtcbiAgaWYgKG9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICBmb3IgKGxldCBqID0gbng7IGogPCBueCArIGxlbmd0aCAmJiBqIDwgc2l6ZTsgaiArPSAxKSB7XG4gICAgICBhcnJheVt4eVRvSW5kZXgoaiwgbnkpXS5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBqID0gbnk7IGogPCBueSArIGxlbmd0aCAmJiBqIDwgc2l6ZTsgaiArPSAxKSB7XG4gICAgICBhcnJheVt4eVRvSW5kZXgobngsIGopXS5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICAgIH1cbiAgfVxuICBhcnJheVt4eVRvSW5kZXgobngsIG55KV0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xufVxuXG5mdW5jdGlvbiBlZGl0TW9kZUV2ZW50KGUpIHtcbiAgLy8gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7IHJldHVybjsgfVxuICBjb25zdCB4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS14J10pO1xuICBjb25zdCB5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS15J10pO1xuICBjb25zdCBncmlkID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKGdyaWQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKSk7XG4gIGFycmF5LmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgaWYgKCFkaXYuaW5uZXJIVE1MKSB7IGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnOyB9XG4gIH0pO1xuICBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4uc2hpcC1vdmVybGF5JykuZm9yRWFjaCgoc3BhbikgPT4gc3Bhbi5yZW1vdmUoKSk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguZmxvb3Ioc2hpcHNbc2hpcEluZGV4XS5sZW5ndGgpO1xuICBjb25zdCBwb3NpdGlvbklzVmFsaWQgPSBpc1Bvc2l0aW9uVmFsaWQoXG4gICAgbGVuZ3RoLFxuICAgIHsgeCwgeSwgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OIH0sXG4gICAgZ3JpZCxcbiAgKTtcbiAgY29uc3Qgc2hpcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNoaXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3NoaXAtb3ZlcmxheScpO1xuICBpZiAocG9zaXRpb25Jc1ZhbGlkKSB7XG4gICAgc2hpcE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmFsaWQnKTtcbiAgICAvLyBtYW5hZ2VWYWxpZENsYXNzKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbjogT1JJRU5UQVRJT04gfSwgZ3JpZCwgJ3ZhbGlkJyk7XG4gICAgaWYgKE9SSUVOVEFUSU9OID09PSAnaCcpIHtcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3NoaXBzW3NoaXBJbmRleF0udXJsfVwiKWA7XG4gICAgICBzaGlwT3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtlLnRhcmdldC5jbGllbnRIZWlnaHR9cHhgO1xuICAgICAgc2hpcE92ZXJsYXkuc3R5bGUud2lkdGggPSBgJHtlLnRhcmdldC5jbGllbnRXaWR0aCAqIGxlbmd0aH1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3NoaXBzW3NoaXBJbmRleF0udn1cIilgO1xuICAgICAgc2hpcE92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0ICogbGVuZ3RofXB4YDtcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLndpZHRoID0gYCR7ZS50YXJnZXQuY2xpZW50V2lkdGh9cHhgO1xuICAgIH1cbiAgICBhcnJheVt4eVRvSW5kZXgoeCwgeSldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkU2hpcFRvR3JpZCk7XG4gICAgYXJyYXlbeHlUb0luZGV4KHgsIHkpXS5hcHBlbmRDaGlsZChzaGlwT3ZlcmxheSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gc2hpcE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIG1hbmFnZVZhbGlkQ2xhc3Moc2hpcHNbc2hpcEluZGV4XS5sZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OIH0sIGdyaWQsICdpbnZhbGlkJyk7XG4gICAgYXJyYXlbeHlUb0luZGV4KHgsIHkpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFNoaXBUb0dyaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRNb2RlKGdyaWQpIHtcbiAgY29uc3QgZGl2cyA9IGdyaWQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgZGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlZGl0TW9kZUV2ZW50KSk7XG59XG5cbmZ1bmN0aW9uIHdlbGNvbWVTY3JlZW4oZ3JpZCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWxjb21lLW1vZGFsJyk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsICgpID0+IHtcbiAgICBwdWJzdWIucHVibGlzaCgnYWRkU2hpcHNBdFJhbmRvbScsIHNoaXBzKTtcbiAgfSk7XG4gIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1nYW1lJyk7XG4gIHN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlZGl0TW9kZShncmlkKTtcbiAgICBtb2RhbC5jbG9zZSgpO1xuICB9KTtcbiAgY29uc3QgcXVpY2tTdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWljay1zdGFydCcpO1xuICBxdWlja1N0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdhZGRTaGlwc0F0UmFuZG9tJywgc2hpcHMpO1xuICAgIG1vZGFsLmNsb3NlKCk7XG4gIH0pO1xuICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgcmV0dXJuIHtcbiAgICBzaG93TW9kYWw6ICgpID0+IG1vZGFsLnNob3dNb2RhbCgpLFxuICAgIGNsb3NlOiAoKSA9PiBtb2RhbC5jbG9zZSgpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBlbmRTY3JlZW4oY2IpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLW1vZGFsJyk7XG4gIC8vIG1vZGFsLnNob3dNb2RhbCgpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCAoKSA9PiB7XG4gICAgY2IoKTtcbiAgfSk7XG4gIGNvbnN0IGgxID0gbW9kYWwucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgLy8gaDEudGV4dENvbnRlbnQgPSBtc2c7XG4gIGNvbnN0IGJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idXR0b24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgY2IoKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgc2hvd01vZGFsOiAoKSA9PiBtb2RhbC5zaG93TW9kYWwoKSxcbiAgICB0aXRsZTogaDEsXG4gIH07XG59XG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ2tpbGxFdmVudHMnLCAoZ3JpZCkgPT4ge1xuICBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlZGl0TW9kZUV2ZW50KTtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgIGlmICghZGl2LmlubmVySFRNTCkgeyBkaXYuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJzsgfVxuICAgIGdyaWQucXVlcnlTZWxlY3RvckFsbCgnc3Bhbi5zaGlwLW92ZXJsYXknKS5mb3JFYWNoKChzcGFuKSA9PiBzcGFuLnJlbW92ZSgpKTtcbiAgfSk7XG4gIHB1YnN1Yi5wdWJsaXNoKCdyZWFkeScpO1xufSk7XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUdyaWQsXG4gIHVwZGF0ZUdyaWQsXG4gIHVwZGF0ZUVuZW15R3JpZCxcbiAgZWRpdE1vZGUsXG4gIGVkaXRNb2RlRXZlbnQsXG4gIGFkZFNoaXBUb0dyaWQsXG4gIHdlbGNvbWVTY3JlZW4sXG4gIGVuZFNjcmVlbixcbn07XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmZ1bmN0aW9uIEdhbWVib2FyZChzaXplID0gMTApIHtcbiAgbGV0IHBCb2FyZCA9IHV0aWxzLmdldEVtcHR5Qm9hcmQoc2l6ZSk7XG5cbiAgbGV0IHNoaXBzID0gW107XG5cbiAgZnVuY3Rpb24gYWRkVG9Cb2FyZCh7IHBvc2l0aW9uIH0pIHtcbiAgICBwQm9hcmQgPSBwQm9hcmQubWFwKChhLCBpKSA9PiAoYS5tYXAoKGIsIGopID0+IHtcbiAgICAgIGlmIChwb3NpdGlvbltpXVtqXS5pbmNsdWRlcygnTycpKSB7XG4gICAgICAgIHJldHVybiAnTyc7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25baV1bal0uaW5jbHVkZXMoJ1gnKSkge1xuICAgICAgICByZXR1cm4gJ1gnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGIgKyBwb3NpdGlvbltpXVtqXTtcbiAgICB9KSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQm9hcmQoKSB7XG4gICAgcEJvYXJkID0gdXRpbHMuZ2V0RW1wdHlCb2FyZChzaXplKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBhZGRUb0JvYXJkKHNoaXApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQm9hcmQoKSB7XG4gICAgcEJvYXJkLmZvckVhY2goKHZlY3RvcikgPT4gdmVjdG9yLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgc2hpcHMucG9wKCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgYW5vdGhlciBzaGlwIGluIHRoYXQgcGxhY2UnKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTaGlwKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9KSB7XG4gICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoLCB7IHgsIHksIG9yaWVudGF0aW9uIH0pO1xuICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgdXBkYXRlQm9hcmQoKTtcbiAgICBjaGVja0JvYXJkKCk7XG4gICAgcmV0dXJuICdTVUNDRVNTJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXBzW2ldLmhpdCh4LCB5KTtcbiAgICAgIHVwZGF0ZUJvYXJkKCk7XG4gICAgICBpZiAoaGl0ID09PSAnSElUJykge1xuICAgICAgICBjb25zdCBzaGlwSGl0ID0gc2hpcHNbaV07XG4gICAgICAgIHJldHVybiB7IHNoaXBIaXQsIGJvYXJkOiBwQm9hcmQgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgYm9hcmQ6IHBCb2FyZCB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcbiAgICBsZXQgYWxsU2hpcFN1bmsgPSB0cnVlO1xuICAgIGlmIChzaGlwcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGFsbFNoaXBTdW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbFNoaXBTdW5rO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRCb2FyZCgpIHtcbiAgICBwQm9hcmQgPSB1dGlscy5nZXRFbXB0eUJvYXJkKHNpemUpO1xuICAgIHNoaXBzID0gW107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZFNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBpc0dhbWVPdmVyLFxuICAgIGdldCBib2FyZCgpIHsgcmV0dXJuIHBCb2FyZDsgfSxcbiAgICByZXNldEJvYXJkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBQbGF5ZXIobnVtKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBwRW5lbXlCb2FyZCA9IHV0aWxzLmdldEVtcHR5Qm9hcmQoKTtcbiAgZnVuY3Rpb24gZmlyZSh4LCB5KSB7XG4gICAgaWYgKHBFbmVteUJvYXJkW3hdW3ldID09PSAnWCcgfHwgcEVuZW15Qm9hcmRbeF1beV0gPT09ICdPJykgeyB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBjYW4gbm90IGZpcmUgd2hlcmUgeW91IGFscmVhZHkgZGlkJyk7IH1cbiAgICB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19UGxheWVkYCwgW3gsIHldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRha2VGaXJlKFt4LCB5XSkge1xuICAgIGNvbnN0IHsgc2hpcEhpdCwgYm9hcmQgfSA9IHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfUJvYXJkQ2hhbmdlZGAsIGJvYXJkKTtcbiAgICBpZiAoc2hpcEhpdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19SGl0YCwgW3gsIHksIHRydWUsIGJvYXJkXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBwbGF5ZXIke251bX1IaXRgLCBbeCwgeSwgZmFsc2UsIGJvYXJkXSk7XG4gICAgfVxuICB9XG4gIHV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoYHBsYXllciR7bnVtID09PSAyID8gMSA6IDJ9UGxheWVkYCwgdGFrZUZpcmUpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUVuZW15Qm9hcmQoW3gsIHksIGhpdF0pIHtcbiAgICBpZiAoaGl0KSB7IHBFbmVteUJvYXJkW3hdW3ldID0gJ1gnOyB9IGVsc2UgeyBwRW5lbXlCb2FyZFt4XVt5XSA9ICdPJzsgfVxuICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBlbmVteSR7bnVtfUJvYXJkQ2hhbmdlZGAsIHBFbmVteUJvYXJkKTtcbiAgfVxuICB1dGlscy5wdWJzdWIuc3Vic2NyaWJlKGBwbGF5ZXIke251bSA9PT0gMiA/IDEgOiAyfUhpdGAsIHVwZGF0ZUVuZW15Qm9hcmQpO1xuXG4gIGZ1bmN0aW9uIHJhbmRvbUNvb3JkKHNpemUgPSAxMCwgc2l6ZTIgPSAxMCkge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZTIpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlckZpcmUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gcmFuZG9tQ29vcmQoKTtcbiAgICAgICAgZmlyZSh4LCB5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2hpcCguLi5wYXJhbXMpIHtcbiAgICBwbGF5ZXJCb2FyZC5hZGRTaGlwKHBhcmFtc1swXSwgcGFyYW1zWzFdKTtcbiAgICB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19Qm9hcmRDaGFuZ2VkYCwgcGxheWVyQm9hcmQuYm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ29tcHV0ZXJTaGlwKGxlbmdodCwgc2l6ZSA9IDEwKSB7XG4gICAgbGV0IHg7IGxldCB5OyBsZXQgb3JpZW50YXRpb247XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICB0cnkge1xuICAgICAgICBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID8gJ3YnIDogJ2gnO1xuICAgICAgICBjb25zdCBzaXplMSA9IG9yaWVudGF0aW9uID09PSAndicgPyAoc2l6ZSAtIE1hdGguZmxvb3IobGVuZ2h0KSkgOiBzaXplO1xuICAgICAgICBjb25zdCBzaXplMiA9IG9yaWVudGF0aW9uID09PSAnaCcgPyAoc2l6ZSAtIE1hdGguZmxvb3IobGVuZ2h0KSkgOiBzaXplO1xuICAgICAgICBbeCwgeV0gPSByYW5kb21Db29yZChzaXplMSwgc2l6ZTIpO1xuICAgICAgICBhZGRTaGlwKGxlbmdodCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9KTtcbiAgICAgICAgY291bnQgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICBpZiAoY291bnQgPiAxMDApIHsgYnJlYWs7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt4LCB5LCBvcmllbnRhdGlvbl07XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBwRW5lbXlCb2FyZCA9IHV0aWxzLmdldEVtcHR5Qm9hcmQoKTtcbiAgICBwbGF5ZXJCb2FyZC5yZXNldEJvYXJkKCk7XG4gICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfUJvYXJkQ2hhbmdlZGAsIHBsYXllckJvYXJkLmJvYXJkKTtcbiAgICAvLyB1dGlscy5wdWJzdWIucHVibGlzaChgZW5lbXkke251bX1Cb2FyZENoYW5nZWRgLCBwRW5lbXlCb2FyZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBlbmVteUJvYXJkKCkgeyByZXR1cm4gcEVuZW15Qm9hcmQ7IH0sXG4gICAgcGxheWVyQm9hcmQsXG4gICAgYWRkU2hpcCxcbiAgICBmaXJlLFxuICAgIGNvbXB1dGVyRmlyZSxcbiAgICBhZGRDb21wdXRlclNoaXAsXG4gICAgcmVzZXQsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBTaGlwKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9KSB7XG4gIGxldCBuYW1lO1xuICBzd2l0Y2ggKGxlbmd0aCkgeyAvLyBTZWxlY3QgTmFtZSBhbmQgRXJyb3IgY2hlY2tcbiAgICBjYXNlIDI6XG4gICAgICBuYW1lID0gJ1BhdHJvbCBCb2F0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG5hbWUgPSAnU3VibWFyaW5lJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMy41OlxuICAgICAgbmFtZSA9ICdCYXR0bGVzaGlwJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIG5hbWUgPSAnRGVzdHJveWVyJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIG5hbWUgPSAnQ2Fycmllcic7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbmFtZSA9ICdFUlJPUic7XG4gICAgICBicmVhaztcbiAgfVxuICBjb25zdCBsZW5ndGhGbG9vciA9IE1hdGguZmxvb3IobGVuZ3RoKTtcbiAgY29uc3QgcG9zaXRpb24gPSAoKCkgPT4geyAvLyBwdXQgdGhlIHNoaXAgaW4gYW4gZW1wdHkgYm9hcmRcbiAgICBpZiAoKG9yaWVudGF0aW9uID09PSAndicgJiYgeCArIGxlbmd0aEZsb29yID4gMTApIHx8IChvcmllbnRhdGlvbiA9PT0gJ2gnICYmIHkgKyBsZW5ndGhGbG9vciA+IDEwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFUlJPUjogVGhlIHNoaXAgaXMgb3V0IG9mIGJvdW5kcycpO1xuICAgIH1cbiAgICBjb25zdCBuZXdBcnJheSA9IHV0aWxzLmdldEVtcHR5Qm9hcmQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aEZsb29yOyBpICs9IDEpIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgIG5ld0FycmF5W3ggKyBpXVt5XSA9IG5hbWUuYXQoMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdBcnJheVt4XVt5ICsgaV0gPSBuYW1lLmF0KDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgaWYgKHBvc2l0aW9uW2ldLmluY2x1ZGVzKG5hbWUuYXQoMCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoaHgsIGh5KSB7XG4gICAgaWYgKGh4ID4gOSB8fCBoeSA+IDkpIHsgcmV0dXJuICdFUlJPUic7IH1cbiAgICBpZiAocG9zaXRpb25baHhdW2h5XSAhPT0gJycpIHtcbiAgICAgIHBvc2l0aW9uW2h4XVtoeV0gPSAnWCc7XG4gICAgICByZXR1cm4gJ0hJVCc7XG4gICAgfVxuICAgIHBvc2l0aW9uW2h4XVtoeV0gPSAnTyc7XG4gICAgcmV0dXJuICdNSVNTJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoOiBsZW5ndGhGbG9vcixcbiAgICBuYW1lLFxuICAgIHBvc2l0aW9uLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJjb25zdCBwdWJzdWIgPSB7XG4gIGV2ZW50czoge30sXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfSxcbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoKGYpID0+IGYgIT09IGZuKTtcbiAgICB9XG4gIH0sXG4gIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZikgPT4gZihkYXRhKSk7XG4gICAgfVxuICB9LFxufTtcblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZm4pIHtcbiAgcmV0dXJuICguLi5wYXJhbXMpID0+IGZuKC4uLnBhcmFtcykuY2F0Y2goKGVyKSA9PiB7XG4gICAgcHVic3ViLnB1Ymxpc2goJ2Vycm9yJywgZXIpO1xuICB9KTtcbn1cblxuY29uc3QgYXN5bmNQaXBlID0gKC4uLmZucykgPT4gKHgpID0+IChcbiAgZm5zLnJlZHVjZShhc3luYyAoeSwgZikgPT4gZihhd2FpdCB5KSwgeClcbik7XG5cbmZ1bmN0aW9uIGdldEVtcHR5Qm9hcmQoc2l6ZSA9IDEwKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgYXJyYXlbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgYXJyYXlbaV1bal0gPSAnJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQge1xuICBwdWJzdWIsIGhhbmRsZUVycm9yLCBhc3luY1BpcGUsIGdldEVtcHR5Qm9hcmQsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5zY3NzJztcbi8vIGltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbi8vIGltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00nO1xuXG4vLyAtLS0gaW5pdCAtLS1cbmxldCByZWFkeSA9IGZhbHNlO1xudXRpbHMucHVic3ViLnN1YnNjcmliZSgncmVhZHknLCAoKSA9PiB7IHJlYWR5ID0gdHJ1ZTsgfSk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkcycpO1xuXG5jb25zdCBwbGF5ZXJHcmlkID0gRE9NLmNyZWF0ZUdyaWQoKTtcbnBsYXllckdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXItZ3JpZCcpO1xubWFpbi5hcHBlbmRDaGlsZChwbGF5ZXJHcmlkKTtcblxuY29uc3QgZW5lbXlHcmlkID0gRE9NLmNyZWF0ZUdyaWQoKTtcbmVuZW15R3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VuZW15LWdyaWQnKTtcbm1haW4uYXBwZW5kQ2hpbGQoZW5lbXlHcmlkKTtcblxuY29uc3QgcGxheWVyMSA9IFBsYXllcigxKTtcbmNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoMik7XG5cbmNvbnN0IHdlbGNvbWVNb2RhbCA9IERPTS53ZWxjb21lU2NyZWVuKHBsYXllckdyaWQpO1xuY29uc3QgZW5kU2NyZWVuID0gRE9NLmVuZFNjcmVlbih3ZWxjb21lTW9kYWwuc2hvd01vZGFsKTtcblxudXRpbHMucHVic3ViLnN1YnNjcmliZSgncGxheWVyMUJvYXJkQ2hhbmdlZCcsIChib2FyZCkgPT4ge1xuICBET00udXBkYXRlR3JpZChib2FyZCwgcGxheWVyR3JpZCk7XG4gIGlmIChwbGF5ZXIxLnBsYXllckJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKCdHYW1lT3ZlcicsICdDb21wdXRlciBXaW5zJyk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBlbmVteUJvYXJkRXZlbnQoZSkge1xuICBpZiAoIXJlYWR5KSB7IHJldHVybjsgfVxuICBjb25zdCB4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS14J10pO1xuICBjb25zdCB5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS15J10pO1xuICBwbGF5ZXIxLmZpcmUoeCwgeSk7XG4gIHBsYXllcjIuY29tcHV0ZXJGaXJlKCk7XG59XG5lbmVteUdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykuZm9yRWFjaCgoZGl2KSA9PiBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmVteUJvYXJkRXZlbnQpKTtcblxudXRpbHMucHVic3ViLnN1YnNjcmliZSgnZW5lbXkxQm9hcmRDaGFuZ2VkJywgKGJvYXJkKSA9PiB7XG4gIERPTS51cGRhdGVFbmVteUdyaWQoYm9hcmQsIGVuZW15R3JpZCwgZW5lbXlCb2FyZEV2ZW50KTtcbiAgaWYgKHBsYXllcjIucGxheWVyQm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyMi5wbGF5ZXJCb2FyZC5pc0dhbWVPdmVyKCkpO1xuICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKCdHYW1lT3ZlcicsICdQbGF5ZXIgV2lucycpO1xuICB9XG59KTtcblxudXRpbHMucHVic3ViLnN1YnNjcmliZSgncGxheWVyMUFkZFNoaXBUb0dyaWQnLCAoeyBsZW5ndGgsIGNvb3JkIH0pID0+IHtcbiAgcGxheWVyMS5hZGRTaGlwKGxlbmd0aCwgY29vcmQpO1xuICBwbGF5ZXIyLmFkZENvbXB1dGVyU2hpcChsZW5ndGgpO1xufSk7XG5cbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ2FkZFNoaXBzQXRSYW5kb20nLCAoc2hpcHMpID0+IHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IFt4LCB5LCBvcmllbnRhdGlvbl0gPSBwbGF5ZXIxLmFkZENvbXB1dGVyU2hpcChzaGlwLmxlbmd0aCk7XG4gICAgY29uc3QgZGl2ID0gcGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICBET00uYWRkU2hpcFRvR3JpZCh7IHRhcmdldDogZGl2LCBvcmllbnRhdGlvbiB9KTtcbiAgICBwbGF5ZXIyLmFkZENvbXB1dGVyU2hpcChzaGlwLmxlbmd0aCk7XG4gIH0pO1xuICB1dGlscy5wdWJzdWIucHVibGlzaCgncGxheWVyMUJvYXJkQ2hhbmdlZCcsIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQpO1xufSk7XG5cbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ0dhbWVPdmVyJywgKHN0cikgPT4ge1xuICBwbGF5ZXIxLnJlc2V0KCk7XG4gIERPTS51cGRhdGVHcmlkKHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmQsIHBsYXllckdyaWQsIHRydWUpO1xuICBwbGF5ZXIyLnJlc2V0KCk7XG4gIERPTS51cGRhdGVFbmVteUdyaWQocGxheWVyMS5lbmVteUJvYXJkLCBlbmVteUdyaWQpO1xuICBlbmRTY3JlZW4udGl0bGUudGV4dENvbnRlbnQgPSBzdHI7XG4gIGVuZFNjcmVlbi5zaG93TW9kYWwoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
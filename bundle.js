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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital@1&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Bebas Neue\", cursive;\n}\n\n:root,\nbody {\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100px;\n  display: grid;\n  grid-template-rows: auto auto;\n}\n\nbutton,\n.tile {\n  cursor: pointer;\n}\n\n.valid {\n  background-color: rgba(110, 133, 183, 0.8);\n  color: rgba(206, 171, 147, 0.8);\n}\n\n.invalid {\n  background-color: rgba(206, 171, 147, 0.8);\n  color: rgba(110, 133, 183, 0.8);\n}\n\n.ship-overlay,\n.ship-over {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border: none;\n}\n\ndialog {\n  max-width: 50ch;\n  margin: auto;\n  box-shadow: 0 2px 1rem 5px rgba(0, 0, 0, 0.8);\n  border-left: #ceab93 solid 0.8rem;\n  border-right: #6e85b7 solid 0.8rem;\n  border-top: none;\n  border-bottom: none;\n  border-radius: 0.5rem;\n}\ndialog h1 {\n  font-size: 2.1rem;\n}\ndialog > div {\n  padding: 2rem;\n  background: linear-gradient(45deg, rgba(110, 133, 183, 0.6) 30%, rgba(206, 171, 147, 0.6) 100%);\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-rows: repeat(2, 1fr);\n}\ndialog .buttons {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 1rem;\n  gap: 0.2rem;\n}\ndialog button {\n  font-size: 1.2rem;\n  padding: 1rem;\n  border: 1px solid white;\n}\ndialog #start-game {\n  background-color: #ceab93;\n  color: #6e85b7;\n  aspect-ratio: 1/1;\n}\ndialog #quick-start {\n  background-color: #6e85b7;\n  color: #ceab93;\n  aspect-ratio: 1/1;\n}\ndialog #reset-button {\n  background-color: #ceab93;\n  background-color: #6e85b7;\n  aspect-ratio: 1/1;\n}\ndialog::backdrop {\n  background: rgba(0, 0, 0, 0.3);\n}\n\nmain {\n  display: grid;\n  padding: 1rem;\n  gap: 0.5rem;\n}\n\n#switch-orientation {\n  justify-self: center;\n  width: min-content;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid white;\n  height: min-content;\n}\n\n#title {\n  padding: 1rem;\n  justify-self: center;\n  font-size: 5rem;\n  background: -webkit-linear-gradient(#6e85b7, #ceab93);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 5px -5px 0px black;\n}\n\n#boards {\n  display: grid;\n  height: 100%;\n  width: 100%;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));\n  gap: 1rem;\n  justify-content: center;\n}\n\n#enemy-grid,\n#player-grid {\n  justify-self: center;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 100%;\n  width: 100%;\n  aspect-ratio: 1/1;\n  background-color: rgb(154, 12, 12);\n  position: relative;\n  border: 1rem solid;\n  border-image-source: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  border-image-slice: 100;\n  border-image-repeat: repeat;\n  box-shadow: 6px -8px 1rem 5px rgba(0, 0, 0, 0.4);\n}\n#enemy-grid::after,\n#player-grid::after {\n  content: \"\";\n  position: absolute;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: repeat;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.75;\n}\n\n#player-grid {\n  outline: rgba(110, 133, 183, 0.8) solid 1px;\n}\n\n#enemy-grid {\n  outline: rgba(206, 171, 147, 0.8) solid 1px;\n}\n\n.tile {\n  border: 1px solid #ceab93;\n  z-index: 1;\n}\n\n#enemy-grid {\n  color: black;\n}\n\n.hit {\n  background-color: rgba(255, 0, 0, 0.222);\n}\n\n.miss {\n  background-color: rgba(0, 0, 255, 0.213);\n}\n\nfooter {\n  align-self: flex-end;\n  margin: 0.5rem;\n}\nfooter a {\n  text-decoration: none;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  font-size: 0.8rem;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AAUA;;;EAGE,sBAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;AARF;;AAWA;;EAEE,iBAAA;EACA,gBAAA;AARF;;AAWA;EACE,yDAAA;EACA,sBAAA;EACA,aAAA;EACA,6BAAA;AARF;;AAWA;;EAEE,eAAA;AARF;;AAWA;EACE,0CAAA;EACA,+BAAA;AARF;;AAUA;EACE,0CAAA;EACA,+BAAA;AAPF;;AAUA;;EAEE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;EACA,YAAA;AAPF;;AAUA;EACE,eAAA;EACA,YAAA;EACA,6CAAA;EACA,iCAAA;EACA,kCAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;AAPF;AAQE;EACE,iBAAA;AANJ;AAQE;EACE,aAAA;EACA,+FAAA;EAKA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,kCAAA;AAVJ;AAYE;EACE,aAAA;EACA,qCAAA;EACA,aAAA;EACA,WAAA;AAVJ;AAYE;EACE,iBAAA;EACA,aAAA;EACA,uBAAA;AAVJ;AAYE;EACE,yBAAA;EACA,cAAA;EACA,iBAAA;AAVJ;AAYE;EACE,yBAAA;EACA,cAAA;EACA,iBAAA;AAVJ;AAYE;EACE,yBAAA;EACA,yBAAA;EACA,iBAAA;AAVJ;AAYE;EACE,8BAAA;AAVJ;;AAcA;EACE,aAAA;EACA,aAAA;EACA,WAAA;AAXF;;AAcA;EACE,oBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AAXF;;AAcA;EACE,aAAA;EACA,oBAAA;EACA,eAAA;EACA,qDAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;EACA,+BAAA;AAXF;;AAaA;EACE,aAAA;EACA,YAAA;EACA,WAAA;EACA,6DAAA;EACA,SAAA;EACA,uBAAA;AAVF;;AAaA;;EAEE,oBAAA;EACA,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,kCAAA;EACA,kBAAA;EAYA,kBAAA;EACA,4DAAA;EACA,uBAAA;EACA,2BAAA;EACA,gDAAA;AArBF;AAME;;EACE,WAAA;EACA,kBAAA;EACA,yDAAA;EACA,yBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,SAAA;EACA,aAAA;AAHJ;;AAWA;EACE,2CAAA;AARF;;AAUA;EACE,2CAAA;AAPF;;AAUA;EACE,yBAAA;EACA,UAAA;AAPF;;AAUA;EACE,YAAA;AAPF;;AAUA;EACE,wCAAA;AAPF;;AASA;EACE,wCAAA;AANF;;AASA;EAIE,oBAAA;EACA,cAAA;AATF;AAUE;EACE,qBAAA;EACA,qCAAA;EACA,YAAA;EACA,iBAAA;AARJ","sourcesContent":["@use \"colors\" as *;\n@use \"shades\" as *;\n@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital@1&display=swap\");\n\n@function clr($color, $shade) {\n  $newcolor: map-get($colors, $color);\n  $newshade: map-get($shades, $shade);\n  @return rgba($newcolor, $newshade);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Bebas Neue\", cursive;\n}\n\n:root,\nbody {\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\nbody {\n  background-image: url(\"../images/wood-texture.jpg\");\n  background-size: 100px;\n  display: grid;\n  grid-template-rows: auto auto;\n}\n\nbutton,\n.tile {\n  cursor: pointer;\n}\n\n.valid {\n  background-color: clr(secondary, 4);\n  color: clr(primary, 4);\n}\n.invalid {\n  background-color: clr(primary, 4);\n  color: clr(secondary, 4);\n}\n\n.ship-overlay,\n.ship-over {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border: none;\n}\n\ndialog {\n  max-width: 50ch;\n  margin: auto;\n  box-shadow: 0 2px 1rem 5px clr(black, 4);\n  border-left: clr(primary, 5) solid 0.8rem;\n  border-right: clr(secondary, 5) solid 0.8rem;\n  border-top: none;\n  border-bottom: none;\n  border-radius: 0.5rem;\n  h1 {\n    font-size: 2.1rem;\n  }\n  > div {\n    padding: 2rem;\n    background: linear-gradient(\n      45deg,\n      clr(secondary, 3) 30%,\n      clr(primary, 3) 100%\n    );\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-rows: repeat(2, 1fr);\n  }\n  .buttons {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 1rem;\n    gap: 0.2rem;\n  }\n  button {\n    font-size: 1.2rem;\n    padding: 1rem;\n    border: 1px solid white;\n  }\n  #start-game {\n    background-color: clr(primary, 5);\n    color: clr(secondary, 5);\n    aspect-ratio: 1/1;\n  }\n  #quick-start {\n    background-color: clr(secondary, 5);\n    color: clr(primary, 5);\n    aspect-ratio: 1/1;\n  }\n  #reset-button {\n    background-color: clr(primary, 5);\n    background-color: clr(secondary, 5);\n    aspect-ratio: 1/1;\n  }\n  &::backdrop {\n    background: rgba(0, 0, 0, 0.3);\n  }\n}\n\nmain {\n  display: grid;\n  padding: 1rem;\n  gap: 0.5rem;\n}\n\n#switch-orientation {\n  justify-self: center;\n  width: min-content;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid white;\n  height: min-content;\n}\n\n#title {\n  padding: 1rem;\n  justify-self: center;\n  font-size: 5rem;\n  background: -webkit-linear-gradient(clr(secondary, 5), clr(primary, 5));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 5px -5px 0px black;\n}\n#boards {\n  display: grid;\n  height: 100%;\n  width: 100%;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));\n  gap: 1rem;\n  justify-content: center;\n}\n\n#enemy-grid,\n#player-grid {\n  justify-self: center;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 100%;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  background-color: rgb(154, 12, 12);\n  position: relative;\n  &::after {\n    content: \"\";\n    position: absolute;\n    background-image: url(\"../images/water-texture.jpg\");\n    background-repeat: repeat;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.75;\n  }\n  border: 1rem solid;\n  border-image-source: url(\"../images/plastic-texture.jpg\");\n  border-image-slice: 100;\n  border-image-repeat: repeat;\n  box-shadow: 6px -8px 1rem 5px clr(black, 2);\n}\n#player-grid {\n  outline: clr(secondary, 4) solid 1px;\n}\n#enemy-grid {\n  outline: clr(primary, 4) solid 1px;\n}\n\n.tile {\n  border: 1px solid clr(primary, 5);\n  z-index: 1;\n}\n\n#enemy-grid {\n  color: black;\n}\n\n.hit {\n  background-color: rgba(255, 0, 0, 0.222);\n}\n.miss {\n  background-color: rgba(0, 0, 255, 0.213);\n}\n\nfooter {\n  // position: absolute;\n  // bottom: 0;\n  // right: 0;\n  align-self: flex-end;\n  margin: 0.5rem;\n  a {\n    text-decoration: none;\n    font-family: \"Montserrat\", sans-serif;\n    color: white;\n    font-size: 0.8rem;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUM1QjtBQUNpQztBQUNqQztBQUM4QjtBQUNEOztBQUU3QjtBQUNBO0FBQ0Esb0RBQXNCLGtCQUFrQixlQUFlO0FBQ3ZEOztBQUVBLG1CQUFtQiw0Q0FBYztBQUNqQztBQUNBOztBQUVBLGtCQUFrQiw0Q0FBYztBQUNoQztBQUNBOztBQUVBLGdCQUFnQixtREFBTTtBQUN0QixnQkFBZ0IsbURBQU07O0FBRXRCLHFCQUFxQiwrQ0FBaUI7QUFDdEMsa0JBQWtCLDJDQUFhOztBQUUvQixvREFBc0I7QUFDdEIsRUFBRSw0Q0FBYztBQUNoQjtBQUNBLElBQUksa0RBQW9CO0FBQ3hCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQXNCO0FBQ3RCLEVBQUUsaURBQW1CO0FBQ3JCO0FBQ0E7QUFDQSxJQUFJLGtEQUFvQjtBQUN4QjtBQUNBLENBQUM7O0FBRUQsb0RBQXNCLDRCQUE0QixlQUFlO0FBQ2pFO0FBQ0E7QUFDQSxDQUFDOztBQUVELG9EQUFzQjtBQUN0QjtBQUNBO0FBQ0EscURBQXFELEVBQUUsYUFBYSxFQUFFO0FBQ3RFO0FBQ0EsSUFBSSwrQ0FBaUIsR0FBRywwQkFBMEI7QUFDbEQ7QUFDQSxHQUFHO0FBQ0gsRUFBRSxrREFBb0I7QUFDdEIsQ0FBQzs7QUFFRCxvREFBc0I7QUFDdEI7QUFDQSxFQUFFLDRDQUFjO0FBQ2hCO0FBQ0EsRUFBRSxpREFBbUI7QUFDckI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz83NDdlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd29vZC10ZXh0dXJlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wbGFzdGljLXRleHR1cmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3dhdGVyLXRleHR1cmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmZhbWlseT1Nb250c2VycmF0Oml0YWxAMSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbjpyb290LFxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbn1cXG5cXG5idXR0b24sXFxuLnRpbGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTAsIDEzMywgMTgzLCAwLjgpO1xcbiAgY29sb3I6IHJnYmEoMjA2LCAxNzEsIDE0NywgMC44KTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDE3MSwgMTQ3LCAwLjgpO1xcbiAgY29sb3I6IHJnYmEoMTEwLCAxMzMsIDE4MywgMC44KTtcXG59XFxuXFxuLnNoaXAtb3ZlcmxheSxcXG4uc2hpcC1vdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgbWF4LXdpZHRoOiA1MGNoO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCAycHggMXJlbSA1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLWxlZnQ6ICNjZWFiOTMgc29saWQgMC44cmVtO1xcbiAgYm9yZGVyLXJpZ2h0OiAjNmU4NWI3IHNvbGlkIDAuOHJlbTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5kaWFsb2cgaDEge1xcbiAgZm9udC1zaXplOiAyLjFyZW07XFxufVxcbmRpYWxvZyA+IGRpdiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDExMCwgMTMzLCAxODMsIDAuNikgMzAlLCByZ2JhKDIwNiwgMTcxLCAxNDcsIDAuNikgMTAwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxufVxcbmRpYWxvZyAuYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuZGlhbG9nIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuZGlhbG9nICNzdGFydC1nYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWFiOTM7XFxuICBjb2xvcjogIzZlODViNztcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5kaWFsb2cgI3F1aWNrLXN0YXJ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTg1Yjc7XFxuICBjb2xvcjogI2NlYWI5MztcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5kaWFsb2cgI3Jlc2V0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VhYjkzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlODViNztcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jc3dpdGNoLW9yaWVudGF0aW9uIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzZlODViNywgI2NlYWI5Myk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtc2hhZG93OiA1cHggLTVweCAwcHggYmxhY2s7XFxufVxcblxcbiNib2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgNTAwcHgpKTtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZW5lbXktZ3JpZCxcXG4jcGxheWVyLWdyaWQge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAxMiwgMTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkO1xcbiAgYm9yZGVyLWltYWdlLXNvdXJjZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTAwO1xcbiAgYm9yZGVyLWltYWdlLXJlcGVhdDogcmVwZWF0O1xcbiAgYm94LXNoYWRvdzogNnB4IC04cHggMXJlbSA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4jZW5lbXktZ3JpZDo6YWZ0ZXIsXFxuI3BsYXllci1ncmlkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4jcGxheWVyLWdyaWQge1xcbiAgb3V0bGluZTogcmdiYSgxMTAsIDEzMywgMTgzLCAwLjgpIHNvbGlkIDFweDtcXG59XFxuXFxuI2VuZW15LWdyaWQge1xcbiAgb3V0bGluZTogcmdiYSgyMDYsIDE3MSwgMTQ3LCAwLjgpIHNvbGlkIDFweDtcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlYWI5MztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNlbmVteS1ncmlkIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yMjIpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4yMTMpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFVQTs7O0VBR0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FBUkY7O0FBV0E7O0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UseURBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQVJGOztBQVdBOztFQUVFLGVBQUE7QUFSRjs7QUFXQTtFQUNFLDBDQUFBO0VBQ0EsK0JBQUE7QUFSRjs7QUFVQTtFQUNFLDBDQUFBO0VBQ0EsK0JBQUE7QUFQRjs7QUFVQTs7RUFFRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFQRjtBQVFFO0VBQ0UsaUJBQUE7QUFOSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLCtGQUFBO0VBS0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQVZKO0FBWUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVZKO0FBWUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVZKO0FBWUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVZKO0FBWUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVZKO0FBWUU7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQVlFO0VBQ0UsOEJBQUE7QUFWSjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7QUFYRjs7QUFhQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBVkY7O0FBYUE7O0VBRUUsb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBWUEsa0JBQUE7RUFDQSw0REFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnREFBQTtBQXJCRjtBQU1FOztFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUhKOztBQVdBO0VBQ0UsMkNBQUE7QUFSRjs7QUFVQTtFQUNFLDJDQUFBO0FBUEY7O0FBVUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7QUFQRjs7QUFVQTtFQUNFLHdDQUFBO0FBUEY7O0FBU0E7RUFDRSx3Q0FBQTtBQU5GOztBQVNBO0VBSUUsb0JBQUE7RUFDQSxjQUFBO0FBVEY7QUFVRTtFQUNFLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFSSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuQHVzZSBcXFwic2hhZGVzXFxcIiBhcyAqO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbEAxJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbkBmdW5jdGlvbiBjbHIoJGNvbG9yLCAkc2hhZGUpIHtcXG4gICRuZXdjb2xvcjogbWFwLWdldCgkY29sb3JzLCAkY29sb3IpO1xcbiAgJG5ld3NoYWRlOiBtYXAtZ2V0KCRzaGFkZXMsICRzaGFkZSk7XFxuICBAcmV0dXJuIHJnYmEoJG5ld2NvbG9yLCAkbmV3c2hhZGUpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbjpyb290LFxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL3dvb2QtdGV4dHVyZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxufVxcblxcbmJ1dHRvbixcXG4udGlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjbHIoc2Vjb25kYXJ5LCA0KTtcXG4gIGNvbG9yOiBjbHIocHJpbWFyeSwgNCk7XFxufVxcbi5pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNscihwcmltYXJ5LCA0KTtcXG4gIGNvbG9yOiBjbHIoc2Vjb25kYXJ5LCA0KTtcXG59XFxuXFxuLnNoaXAtb3ZlcmxheSxcXG4uc2hpcC1vdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgbWF4LXdpZHRoOiA1MGNoO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCAycHggMXJlbSA1cHggY2xyKGJsYWNrLCA0KTtcXG4gIGJvcmRlci1sZWZ0OiBjbHIocHJpbWFyeSwgNSkgc29saWQgMC44cmVtO1xcbiAgYm9yZGVyLXJpZ2h0OiBjbHIoc2Vjb25kYXJ5LCA1KSBzb2xpZCAwLjhyZW07XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjFyZW07XFxuICB9XFxuICA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICA0NWRlZyxcXG4gICAgICBjbHIoc2Vjb25kYXJ5LCAzKSAzMCUsXFxuICAgICAgY2xyKHByaW1hcnksIDMpIDEwMCVcXG4gICAgKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbiAgLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IDAuMnJlbTtcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG4gICNzdGFydC1nYW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2xyKHByaW1hcnksIDUpO1xcbiAgICBjb2xvcjogY2xyKHNlY29uZGFyeSwgNSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgfVxcbiAgI3F1aWNrLXN0YXJ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2xyKHNlY29uZGFyeSwgNSk7XFxuICAgIGNvbG9yOiBjbHIocHJpbWFyeSwgNSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgfVxcbiAgI3Jlc2V0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNscihwcmltYXJ5LCA1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2xyKHNlY29uZGFyeSwgNSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgfVxcbiAgJjo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI3N3aXRjaC1vcmllbnRhdGlvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGNscihzZWNvbmRhcnksIDUpLCBjbHIocHJpbWFyeSwgNSkpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LXNoYWRvdzogNXB4IC01cHggMHB4IGJsYWNrO1xcbn1cXG4jYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDUwMHB4KSk7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2VuZW15LWdyaWQsXFxuI3BsYXllci1ncmlkIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAxMiwgMTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy93YXRlci10ZXh0dXJlLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gIH1cXG4gIGJvcmRlcjogMXJlbSBzb2xpZDtcXG4gIGJvcmRlci1pbWFnZS1zb3VyY2U6IHVybChcXFwiLi4vaW1hZ2VzL3BsYXN0aWMtdGV4dHVyZS5qcGdcXFwiKTtcXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTAwO1xcbiAgYm9yZGVyLWltYWdlLXJlcGVhdDogcmVwZWF0O1xcbiAgYm94LXNoYWRvdzogNnB4IC04cHggMXJlbSA1cHggY2xyKGJsYWNrLCAyKTtcXG59XFxuI3BsYXllci1ncmlkIHtcXG4gIG91dGxpbmU6IGNscihzZWNvbmRhcnksIDQpIHNvbGlkIDFweDtcXG59XFxuI2VuZW15LWdyaWQge1xcbiAgb3V0bGluZTogY2xyKHByaW1hcnksIDQpIHNvbGlkIDFweDtcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgY2xyKHByaW1hcnksIDUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI2VuZW15LWdyaWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIyMik7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIxMyk7XFxufVxcblxcbmZvb3RlciB7XFxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvLyBib3R0b206IDA7XFxuICAvLyByaWdodDogMDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vLyBpbXBvcnQgcHVic3ViIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHBhdHJvbCBmcm9tICcuL2ltYWdlcy9wYXRyb2wuc3ZnJztcbmltcG9ydCBzdWJtYXJpbmUgZnJvbSAnLi9pbWFnZXMvc3VibWFyaW5lLnN2Zyc7XG5pbXBvcnQgZGVzdHJveWVyIGZyb20gJy4vaW1hZ2VzL2Rlc3Ryb3llci5zdmcnO1xuaW1wb3J0IGNhcnJpZXIgZnJvbSAnLi9pbWFnZXMvY2Fycmllci5zdmcnO1xuaW1wb3J0IHBhdHJvbHYgZnJvbSAnLi9pbWFnZXMvcGF0cm9sLXYuc3ZnJztcbmltcG9ydCBzdWJtYXJpbmV2IGZyb20gJy4vaW1hZ2VzL3N1Ym1hcmluZS12LnN2Zyc7XG5pbXBvcnQgZGVzdHJveWVydiBmcm9tICcuL2ltYWdlcy9kZXN0cm95ZXItdi5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llcmJ2IGZyb20gJy4vaW1hZ2VzL2Rlc3Ryb3llcjF2LnN2Zyc7XG5pbXBvcnQgY2FycmllcnYgZnJvbSAnLi9pbWFnZXMvY2Fycmllci12LnN2Zyc7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tICcuL3V0aWxzJztcblxubGV0IElNRyA9IFtdO1xuY29uc3Qgc2hpcHMgPSBbXG4gIHsgbGVuZ3RoOiAyLCB1cmw6IHBhdHJvbCwgdjogcGF0cm9sdiB9LFxuICB7IGxlbmd0aDogMywgdXJsOiBzdWJtYXJpbmUsIHY6IHN1Ym1hcmluZXYgfSxcbiAgeyBsZW5ndGg6IDMuNSwgdXJsOiBkZXN0cm95ZXIsIHY6IGRlc3Ryb3llcnYgfSxcbiAgeyBsZW5ndGg6IDQsIHVybDogZGVzdHJveWVyLCB2OiBkZXN0cm95ZXJidiB9LFxuICB7IGxlbmd0aDogNSwgdXJsOiBjYXJyaWVyLCB2OiBjYXJyaWVydiB9LFxuXTtcbmxldCBzaGlwSW5kZXggPSAwO1xubGV0IE9SSUVOVEFUSU9OID0gJ2gnO1xuY29uc3Qgc3dpdGNoT3JpZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoLW9yaWVudGF0aW9uJyk7XG5zd2l0Y2hPcmllbnRhdGlvbi5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuc3dpdGNoT3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChPUklFTlRBVElPTiA9PT0gJ3YnKSB7XG4gICAgT1JJRU5UQVRJT04gPSAnaCc7XG4gICAgc3dpdGNoT3JpZW50YXRpb24uY2xhc3NMaXN0LmFkZCgndmFsaWQnKTtcbiAgICBzd2l0Y2hPcmllbnRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gIH0gZWxzZSB7XG4gICAgT1JJRU5UQVRJT04gPSAndic7XG4gICAgc3dpdGNoT3JpZW50YXRpb24uY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIHN3aXRjaE9yaWVudGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKHNpemUgPSAxMCkge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS14JywgaSk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBqKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG4gIHJldHVybiBncmlkO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVHcmlkKGJvYXJkLCBncmlkLCByZXNldCA9IGZhbHNlKSB7XG4gIGJvYXJkLmZvckVhY2goKHJvd3MsIHgpID0+IHtcbiAgICByb3dzLmZvckVhY2goKGNvbHVtbnMsIHkpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwJywgY29sdW1ucyk7XG4gICAgICBpZiAoY29sdW1ucyA9PT0gJ1gnKSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW5zID09PSAnTycpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNldCkgeyBkaXYudGV4dENvbnRlbnQgPSAnJzsgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKHJlc2V0KSB7XG4gICAgSU1HID0gW107XG4gICAgc2hpcEluZGV4ID0gMDtcbiAgfVxuICBJTUcuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtpbWcueH1cIl1bZGF0YS15PVwiJHtpbWcueX1cIl1gKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoaW1nLmltYWdlKTtcbiAgICB0YXJnZXQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRW5lbXlHcmlkKGJvYXJkLCBncmlkLCBldmVudENCKSB7XG4gIC8vIGNvbnNvbGUudGFibGUoYm9hcmQpO1xuICBib2FyZC5mb3JFYWNoKChyb3dzLCB4KSA9PiB7XG4gICAgcm93cy5mb3JFYWNoKChjb2x1bW5zLCB5KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcCcsIGNvbHVtbnMpO1xuICAgICAgaWYgKGNvbHVtbnMgPT09ICdYJykge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoY29sdW1ucyA9PT0gJ08nKSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9XG4gICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudENCKTtcbiAgICAgIGlmIChjb2x1bW5zID09PSAnJykgeyBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudENCKTsgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24geHlUb0luZGV4KHgsIHkpIHtcbiAgcmV0dXJuIE51bWJlcih4KSAqIDEwICsgTnVtYmVyKHkpO1xufVxuXG5mdW5jdGlvbiBhZGRTaGlwVG9HcmlkKGUpIHtcbiAgbGV0IG9yaWVudGF0aW9uID0gT1JJRU5UQVRJT047XG4gIGxldCB0YXJnZXQ7XG4gIGlmIChlLm9yaWVudGF0aW9uKSB7XG4gICAgb3JpZW50YXRpb24gPSBlLm9yaWVudGF0aW9uO1xuICAgIHRhcmdldCA9IGUudGFyZ2V0O1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IHRoaXM7XG4gIH1cbiAgY29uc3QgeCA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS14J10pKTtcbiAgY29uc3QgeSA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFsnZGF0YS15J10pKTtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5mbG9vcihzaGlwc1tzaGlwSW5kZXhdLmxlbmd0aCk7XG4gIGNvbnN0IGdyaWQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtb3ZlcicpO1xuICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3NoaXBzW3NoaXBJbmRleF0udXJsfVwiKWA7XG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0LmNsaWVudEhlaWdodH1weGA7XG4gICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBgJHt0YXJnZXQuY2xpZW50V2lkdGggKiBsZW5ndGh9cHhgO1xuICB9IGVsc2Uge1xuICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3NoaXBzW3NoaXBJbmRleF0udn1cIilgO1xuICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5jbGllbnRIZWlnaHQgKiBsZW5ndGh9cHhgO1xuICAgIGltYWdlLnN0eWxlLndpZHRoID0gYCR7dGFyZ2V0LmNsaWVudFdpZHRofXB4YDtcbiAgfVxuICBJTUcucHVzaCh7IHgsIHksIGltYWdlIH0pO1xuICBpZiAoIWUub3JpZW50YXRpb24pIHtcbiAgICBwdWJzdWIucHVibGlzaCgncGxheWVyMUFkZFNoaXBUb0dyaWQnLCB7IGxlbmd0aDogTWF0aC5mbG9vcihzaGlwc1tzaGlwSW5kZXhdLmxlbmd0aCksIGNvb3JkOiB7IHgsIHksIG9yaWVudGF0aW9uOiBPUklFTlRBVElPTiB9IH0pO1xuICAgIGlmIChzaGlwSW5kZXggPCBzaGlwcy5sZW5ndGggLSAxKSB7IHNoaXBJbmRleCArPSAxOyB9IGVsc2Uge1xuICAgICAgcHVic3ViLnB1Ymxpc2goJ2tpbGxFdmVudHMnLCBncmlkKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc2hpcEluZGV4IDwgc2hpcHMubGVuZ3RoIC0gMSkgeyBzaGlwSW5kZXggKz0gMTsgfSBlbHNlIHtcbiAgICBwdWJzdWIucHVibGlzaCgna2lsbEV2ZW50cycsIGdyaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUG9zaXRpb25WYWxpZChsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb24gfSwgZ3JpZCwgc2l6ZSA9IDEwKSB7XG4gIGNvbnN0IG54ID0gTnVtYmVyKHgpO1xuICBjb25zdCBueSA9IE51bWJlcih5KTtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKGdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykpO1xuICBjb25zdCBpbmRleCA9IG9yaWVudGF0aW9uID09PSAndicgPyBueCA6IG55O1xuICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIGxlbmd0aCAmJiBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgIGlmICghKGFycmF5W3h5VG9JbmRleChpLCBueSldLmdldEF0dHJpYnV0ZShbJ2RhdGEtc2hpcCddKSA9PT0gJycgfHwgYXJyYXlbeHlUb0luZGV4KGksIG55KV0uZ2V0QXR0cmlidXRlKFsnZGF0YS1zaGlwJ10pID09PSBudWxsKSB8fCBpbmRleCArIGxlbmd0aCA+IHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShhcnJheVt4eVRvSW5kZXgobngsIGkpXS5nZXRBdHRyaWJ1dGUoWydkYXRhLXNoaXAnXSkgPT09ICcnIHx8IGFycmF5W3h5VG9JbmRleChpLCBueSldLmdldEF0dHJpYnV0ZShbJ2RhdGEtc2hpcCddKSA9PT0gbnVsbCkgfHwgaW5kZXggKyBsZW5ndGggPiBzaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGFycmF5W3h5VG9JbmRleChueCwgbnkpXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtYW5hZ2VWYWxpZENsYXNzKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9LCBncmlkLCBjbGFzc1RvQWRkLCBzaXplID0gMTApIHtcbiAgY29uc3QgbnggPSBOdW1iZXIoeCk7XG4gIGNvbnN0IG55ID0gTnVtYmVyKHkpO1xuICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKSk7XG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgZm9yIChsZXQgaiA9IG54OyBqIDwgbnggKyBsZW5ndGggJiYgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgYXJyYXlbeHlUb0luZGV4KGosIG55KV0uY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaiA9IG55OyBqIDwgbnkgKyBsZW5ndGggJiYgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgYXJyYXlbeHlUb0luZGV4KG54LCBqKV0uY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcbiAgICB9XG4gIH1cbiAgYXJyYXlbeHlUb0luZGV4KG54LCBueSldLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbn1cblxuZnVuY3Rpb24gZWRpdE1vZGVFdmVudChlKSB7XG4gIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGlmIChlLnRhcmdldCAhPT0gdGhpcykgeyByZXR1cm47IH1cbiAgY29uc3QgeCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShbJ2RhdGEteCddKTtcbiAgY29uc3QgeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShbJ2RhdGEteSddKTtcbiAgY29uc3QgZ3JpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJykpO1xuICBhcnJheS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZCcpO1xuICAgIGlmICghZGl2LmlubmVySFRNTCkgeyBkaXYuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJzsgfVxuICB9KTtcbiAgZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuLnNoaXAtb3ZlcmxheScpLmZvckVhY2goKHNwYW4pID0+IHNwYW4ucmVtb3ZlKCkpO1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmZsb29yKHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoKTtcbiAgY29uc3QgcG9zaXRpb25Jc1ZhbGlkID0gaXNQb3NpdGlvblZhbGlkKFxuICAgIGxlbmd0aCxcbiAgICB7IHgsIHksIG9yaWVudGF0aW9uOiBPUklFTlRBVElPTiB9LFxuICAgIGdyaWQsXG4gICk7XG4gIGNvbnN0IHNoaXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzaGlwT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaGlwLW92ZXJsYXknKTtcbiAgaWYgKHBvc2l0aW9uSXNWYWxpZCkge1xuICAgIHNoaXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgLy8gbWFuYWdlVmFsaWRDbGFzcyhsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OIH0sIGdyaWQsICd2YWxpZCcpO1xuICAgIGlmIChPUklFTlRBVElPTiA9PT0gJ2gnKSB7XG4gICAgICBzaGlwT3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtzaGlwc1tzaGlwSW5kZXhdLnVybH1cIilgO1xuICAgICAgc2hpcE92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7ZS50YXJnZXQuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLndpZHRoID0gYCR7ZS50YXJnZXQuY2xpZW50V2lkdGggKiBsZW5ndGh9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwT3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtzaGlwc1tzaGlwSW5kZXhdLnZ9XCIpYDtcbiAgICAgIHNoaXBPdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2UudGFyZ2V0LmNsaWVudEhlaWdodCAqIGxlbmd0aH1weGA7XG4gICAgICBzaGlwT3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2UudGFyZ2V0LmNsaWVudFdpZHRofXB4YDtcbiAgICB9XG4gICAgYXJyYXlbeHlUb0luZGV4KHgsIHkpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFNoaXBUb0dyaWQpO1xuICAgIGFycmF5W3h5VG9JbmRleCh4LCB5KV0uYXBwZW5kQ2hpbGQoc2hpcE92ZXJsYXkpO1xuICB9IGVsc2Uge1xuICAgIC8vIHNoaXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICBtYW5hZ2VWYWxpZENsYXNzKHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoLCB7IHgsIHksIG9yaWVudGF0aW9uOiBPUklFTlRBVElPTiB9LCBncmlkLCAnaW52YWxpZCcpO1xuICAgIGFycmF5W3h5VG9JbmRleCh4LCB5KV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRTaGlwVG9HcmlkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0TW9kZShncmlkKSB7XG4gIGNvbnN0IGRpdnMgPSBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZWRpdE1vZGVFdmVudCkpO1xufVxuXG5mdW5jdGlvbiB3ZWxjb21lU2NyZWVuKGdyaWQpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VsY29tZS1tb2RhbCcpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCAoKSA9PiB7XG4gICAgcHVic3ViLnB1Ymxpc2goJ2FkZFNoaXBzQXRSYW5kb20nLCBzaGlwcyk7XG4gIH0pO1xuICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtZ2FtZScpO1xuICBzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZWRpdE1vZGUoZ3JpZCk7XG4gICAgbW9kYWwuY2xvc2UoKTtcbiAgfSk7XG4gIGNvbnN0IHF1aWNrU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2stc3RhcnQnKTtcbiAgcXVpY2tTdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwdWJzdWIucHVibGlzaCgnYWRkU2hpcHNBdFJhbmRvbScsIHNoaXBzKTtcbiAgICBtb2RhbC5jbG9zZSgpO1xuICB9KTtcbiAgbW9kYWwuc2hvd01vZGFsKCk7XG4gIHJldHVybiB7XG4gICAgc2hvd01vZGFsOiAoKSA9PiBtb2RhbC5zaG93TW9kYWwoKSxcbiAgICBjbG9zZTogKCkgPT4gbW9kYWwuY2xvc2UoKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZW5kU2NyZWVuKGNiKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1tb2RhbCcpO1xuICAvLyBtb2RhbC5zaG93TW9kYWwoKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgKCkgPT4ge1xuICAgIGNiKCk7XG4gIH0pO1xuICBjb25zdCBoMSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIC8vIGgxLnRleHRDb250ZW50ID0gbXNnO1xuICBjb25zdCBidXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnV0dG9uJyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5jbG9zZSgpO1xuICAgIGNiKCk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHNob3dNb2RhbDogKCkgPT4gbW9kYWwuc2hvd01vZGFsKCksXG4gICAgdGl0bGU6IGgxLFxuICB9O1xufVxuXG5wdWJzdWIuc3Vic2NyaWJlKCdraWxsRXZlbnRzJywgKGdyaWQpID0+IHtcbiAgZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZWRpdE1vZGVFdmVudCk7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICBpZiAoIWRpdi5pbm5lckhUTUwpIHsgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7IH1cbiAgICBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4uc2hpcC1vdmVybGF5JykuZm9yRWFjaCgoc3BhbikgPT4gc3Bhbi5yZW1vdmUoKSk7XG4gIH0pO1xuICBwdWJzdWIucHVibGlzaCgncmVhZHknKTtcbn0pO1xuXG5leHBvcnQge1xuICBjcmVhdGVHcmlkLFxuICB1cGRhdGVHcmlkLFxuICB1cGRhdGVFbmVteUdyaWQsXG4gIGVkaXRNb2RlLFxuICBlZGl0TW9kZUV2ZW50LFxuICBhZGRTaGlwVG9HcmlkLFxuICB3ZWxjb21lU2NyZWVuLFxuICBlbmRTY3JlZW4sXG59O1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQoc2l6ZSA9IDEwKSB7XG4gIGxldCBwQm9hcmQgPSB1dGlscy5nZXRFbXB0eUJvYXJkKHNpemUpO1xuXG4gIGxldCBzaGlwcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZFRvQm9hcmQoeyBwb3NpdGlvbiB9KSB7XG4gICAgcEJvYXJkID0gcEJvYXJkLm1hcCgoYSwgaSkgPT4gKGEubWFwKChiLCBqKSA9PiB7XG4gICAgICBpZiAocG9zaXRpb25baV1bal0uaW5jbHVkZXMoJ08nKSkge1xuICAgICAgICByZXR1cm4gJ08nO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uW2ldW2pdLmluY2x1ZGVzKCdYJykpIHtcbiAgICAgICAgcmV0dXJuICdYJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBiICsgcG9zaXRpb25baV1bal07XG4gICAgfSkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkKCkge1xuICAgIHBCb2FyZCA9IHV0aWxzLmdldEVtcHR5Qm9hcmQoc2l6ZSk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gYWRkVG9Cb2FyZChzaGlwKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0JvYXJkKCkge1xuICAgIHBCb2FyZC5mb3JFYWNoKCh2ZWN0b3IpID0+IHZlY3Rvci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHNoaXBzLnBvcCgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFub3RoZXIgc2hpcCBpbiB0aGF0IHBsYWNlJyk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2hpcChsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb24gfSkge1xuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCwgeyB4LCB5LCBvcmllbnRhdGlvbiB9KTtcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIHVwZGF0ZUJvYXJkKCk7XG4gICAgY2hlY2tCb2FyZCgpO1xuICAgIHJldHVybiAnU1VDQ0VTUyc7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwc1tpXS5oaXQoeCwgeSk7XG4gICAgICB1cGRhdGVCb2FyZCgpO1xuICAgICAgaWYgKGhpdCA9PT0gJ0hJVCcpIHtcbiAgICAgICAgY29uc3Qgc2hpcEhpdCA9IHNoaXBzW2ldO1xuICAgICAgICByZXR1cm4geyBzaGlwSGl0LCBib2FyZDogcEJvYXJkIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGJvYXJkOiBwQm9hcmQgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzR2FtZU92ZXIoKSB7XG4gICAgbGV0IGFsbFNoaXBTdW5rID0gdHJ1ZTtcbiAgICBpZiAoc2hpcHMubGVuZ3RoID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBhbGxTaGlwU3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxTaGlwU3VuaztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gICAgcEJvYXJkID0gdXRpbHMuZ2V0RW1wdHlCb2FyZChzaXplKTtcbiAgICBzaGlwcyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNHYW1lT3ZlcixcbiAgICBnZXQgYm9hcmQoKSB7IHJldHVybiBwQm9hcmQ7IH0sXG4gICAgcmVzZXRCb2FyZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gUGxheWVyKG51bSkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgcEVuZW15Qm9hcmQgPSB1dGlscy5nZXRFbXB0eUJvYXJkKCk7XG4gIGZ1bmN0aW9uIGZpcmUoeCwgeSkge1xuICAgIGlmIChwRW5lbXlCb2FyZFt4XVt5XSA9PT0gJ1gnIHx8IHBFbmVteUJvYXJkW3hdW3ldID09PSAnTycpIHsgdGhyb3cgbmV3IEVycm9yKCd5b3UgY2FuIG5vdCBmaXJlIHdoZXJlIHlvdSBhbHJlYWR5IGRpZCcpOyB9XG4gICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfVBsYXllZGAsIFt4LCB5XSk7XG4gIH1cblxuICBmdW5jdGlvbiB0YWtlRmlyZShbeCwgeV0pIHtcbiAgICBjb25zdCB7IHNoaXBIaXQsIGJvYXJkIH0gPSBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBwbGF5ZXIke251bX1Cb2FyZENoYW5nZWRgLCBib2FyZCk7XG4gICAgaWYgKHNoaXBIaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfUhpdGAsIFt4LCB5LCB0cnVlLCBib2FyZF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1dGlscy5wdWJzdWIucHVibGlzaChgcGxheWVyJHtudW19SGl0YCwgW3gsIHksIGZhbHNlLCBib2FyZF0pO1xuICAgIH1cbiAgfVxuICB1dGlscy5wdWJzdWIuc3Vic2NyaWJlKGBwbGF5ZXIke251bSA9PT0gMiA/IDEgOiAyfVBsYXllZGAsIHRha2VGaXJlKTtcblxuICBmdW5jdGlvbiB1cGRhdGVFbmVteUJvYXJkKFt4LCB5LCBoaXRdKSB7XG4gICAgaWYgKGhpdCkgeyBwRW5lbXlCb2FyZFt4XVt5XSA9ICdYJzsgfSBlbHNlIHsgcEVuZW15Qm9hcmRbeF1beV0gPSAnTyc7IH1cbiAgICB1dGlscy5wdWJzdWIucHVibGlzaChgZW5lbXkke251bX1Cb2FyZENoYW5nZWRgLCBwRW5lbXlCb2FyZCk7XG4gIH1cbiAgdXRpbHMucHVic3ViLnN1YnNjcmliZShgcGxheWVyJHtudW0gPT09IDIgPyAxIDogMn1IaXRgLCB1cGRhdGVFbmVteUJvYXJkKTtcblxuICBmdW5jdGlvbiByYW5kb21Db29yZChzaXplID0gMTAsIHNpemUyID0gMTApIHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUyKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZXJGaXJlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHJhbmRvbUNvb3JkKCk7XG4gICAgICAgIGZpcmUoeCwgeSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNoaXAoLi4ucGFyYW1zKSB7XG4gICAgcGxheWVyQm9hcmQuYWRkU2hpcChwYXJhbXNbMF0sIHBhcmFtc1sxXSk7XG4gICAgdXRpbHMucHVic3ViLnB1Ymxpc2goYHBsYXllciR7bnVtfUJvYXJkQ2hhbmdlZGAsIHBsYXllckJvYXJkLmJvYXJkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvbXB1dGVyU2hpcChsZW5naHQsIHNpemUgPSAxMCkge1xuICAgIGxldCB4OyBsZXQgeTsgbGV0IG9yaWVudGF0aW9uO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA/ICd2JyA6ICdoJztcbiAgICAgICAgY29uc3Qgc2l6ZTEgPSBvcmllbnRhdGlvbiA9PT0gJ3YnID8gKHNpemUgLSBNYXRoLmZsb29yKGxlbmdodCkpIDogc2l6ZTtcbiAgICAgICAgY29uc3Qgc2l6ZTIgPSBvcmllbnRhdGlvbiA9PT0gJ2gnID8gKHNpemUgLSBNYXRoLmZsb29yKGxlbmdodCkpIDogc2l6ZTtcbiAgICAgICAgW3gsIHldID0gcmFuZG9tQ29vcmQoc2l6ZTEsIHNpemUyKTtcbiAgICAgICAgYWRkU2hpcChsZW5naHQsIHsgeCwgeSwgb3JpZW50YXRpb24gfSk7XG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgaWYgKGNvdW50ID4gMTAwKSB7IGJyZWFrOyB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbeCwgeSwgb3JpZW50YXRpb25dO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgcEVuZW15Qm9hcmQgPSB1dGlscy5nZXRFbXB0eUJvYXJkKCk7XG4gICAgcGxheWVyQm9hcmQucmVzZXRCb2FyZCgpO1xuICAgIHV0aWxzLnB1YnN1Yi5wdWJsaXNoKGBwbGF5ZXIke251bX1Cb2FyZENoYW5nZWRgLCBwbGF5ZXJCb2FyZC5ib2FyZCk7XG4gICAgLy8gdXRpbHMucHVic3ViLnB1Ymxpc2goYGVuZW15JHtudW19Qm9hcmRDaGFuZ2VkYCwgcEVuZW15Qm9hcmQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgZW5lbXlCb2FyZCgpIHsgcmV0dXJuIHBFbmVteUJvYXJkOyB9LFxuICAgIHBsYXllckJvYXJkLFxuICAgIGFkZFNoaXAsXG4gICAgZmlyZSxcbiAgICBjb21wdXRlckZpcmUsXG4gICAgYWRkQ29tcHV0ZXJTaGlwLFxuICAgIHJlc2V0LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gU2hpcChsZW5ndGgsIHsgeCwgeSwgb3JpZW50YXRpb24gfSkge1xuICBsZXQgbmFtZTtcbiAgc3dpdGNoIChsZW5ndGgpIHsgLy8gU2VsZWN0IE5hbWUgYW5kIEVycm9yIGNoZWNrXG4gICAgY2FzZSAyOlxuICAgICAgbmFtZSA9ICdQYXRyb2wgQm9hdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBuYW1lID0gJ1N1Ym1hcmluZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMuNTpcbiAgICAgIG5hbWUgPSAnQmF0dGxlc2hpcCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBuYW1lID0gJ0Rlc3Ryb3llcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBuYW1lID0gJ0NhcnJpZXInO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG5hbWUgPSAnRVJST1InO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc3QgbGVuZ3RoRmxvb3IgPSBNYXRoLmZsb29yKGxlbmd0aCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gKCgpID0+IHsgLy8gcHV0IHRoZSBzaGlwIGluIGFuIGVtcHR5IGJvYXJkXG4gICAgaWYgKChvcmllbnRhdGlvbiA9PT0gJ3YnICYmIHggKyBsZW5ndGhGbG9vciA+IDEwKSB8fCAob3JpZW50YXRpb24gPT09ICdoJyAmJiB5ICsgbGVuZ3RoRmxvb3IgPiAxMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRVJST1I6IFRoZSBzaGlwIGlzIG91dCBvZiBib3VuZHMnKTtcbiAgICB9XG4gICAgY29uc3QgbmV3QXJyYXkgPSB1dGlscy5nZXRFbXB0eUJvYXJkKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhGbG9vcjsgaSArPSAxKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICBuZXdBcnJheVt4ICsgaV1beV0gPSBuYW1lLmF0KDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3QXJyYXlbeF1beSArIGldID0gbmFtZS5hdCgwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGlmIChwb3NpdGlvbltpXS5pbmNsdWRlcyhuYW1lLmF0KDApKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0KGh4LCBoeSkge1xuICAgIGlmIChoeCA+IDkgfHwgaHkgPiA5KSB7IHJldHVybiAnRVJST1InOyB9XG4gICAgaWYgKHBvc2l0aW9uW2h4XVtoeV0gIT09ICcnKSB7XG4gICAgICBwb3NpdGlvbltoeF1baHldID0gJ1gnO1xuICAgICAgcmV0dXJuICdISVQnO1xuICAgIH1cbiAgICBwb3NpdGlvbltoeF1baHldID0gJ08nO1xuICAgIHJldHVybiAnTUlTUyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlbmd0aDogbGVuZ3RoRmxvb3IsXG4gICAgbmFtZSxcbiAgICBwb3NpdGlvbixcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY29uc3QgcHVic3ViID0ge1xuICBldmVudHM6IHt9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH0sXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKChmKSA9PiBmICE9PSBmbik7XG4gICAgfVxuICB9LFxuICBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGYpID0+IGYoZGF0YSkpO1xuICAgIH1cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGZuKSB7XG4gIHJldHVybiAoLi4ucGFyYW1zKSA9PiBmbiguLi5wYXJhbXMpLmNhdGNoKChlcikgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdlcnJvcicsIGVyKTtcbiAgfSk7XG59XG5cbmNvbnN0IGFzeW5jUGlwZSA9ICguLi5mbnMpID0+ICh4KSA9PiAoXG4gIGZucy5yZWR1Y2UoYXN5bmMgKHksIGYpID0+IGYoYXdhaXQgeSksIHgpXG4pO1xuXG5mdW5jdGlvbiBnZXRFbXB0eUJvYXJkKHNpemUgPSAxMCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGFycmF5W2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcbiAgICAgIGFycmF5W2ldW2pdID0gJyc7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IHtcbiAgcHVic3ViLCBoYW5kbGVFcnJvciwgYXN5bmNQaXBlLCBnZXRFbXB0eUJvYXJkLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuc2Nzcyc7XG4vLyBpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG4vLyBpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJztcblxuLy8gLS0tIGluaXQgLS0tXG5sZXQgcmVhZHkgPSBmYWxzZTtcbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ3JlYWR5JywgKCkgPT4geyByZWFkeSA9IHRydWU7IH0pO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZHMnKTtcblxuY29uc3QgcGxheWVyR3JpZCA9IERPTS5jcmVhdGVHcmlkKCk7XG5wbGF5ZXJHcmlkLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLWdyaWQnKTtcbm1haW4uYXBwZW5kQ2hpbGQocGxheWVyR3JpZCk7XG5cbmNvbnN0IGVuZW15R3JpZCA9IERPTS5jcmVhdGVHcmlkKCk7XG5lbmVteUdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdlbmVteS1ncmlkJyk7XG5tYWluLmFwcGVuZENoaWxkKGVuZW15R3JpZCk7XG5cbmNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoMSk7XG5jb25zdCBwbGF5ZXIyID0gUGxheWVyKDIpO1xuXG5jb25zdCB3ZWxjb21lTW9kYWwgPSBET00ud2VsY29tZVNjcmVlbihwbGF5ZXJHcmlkKTtcbmNvbnN0IGVuZFNjcmVlbiA9IERPTS5lbmRTY3JlZW4od2VsY29tZU1vZGFsLnNob3dNb2RhbCk7XG5cbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ3BsYXllcjFCb2FyZENoYW5nZWQnLCAoYm9hcmQpID0+IHtcbiAgRE9NLnVwZGF0ZUdyaWQoYm9hcmQsIHBsYXllckdyaWQpO1xuICBpZiAocGxheWVyMS5wbGF5ZXJCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICB1dGlscy5wdWJzdWIucHVibGlzaCgnR2FtZU92ZXInLCAnQ29tcHV0ZXIgV2lucycpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZW5lbXlCb2FyZEV2ZW50KGUpIHtcbiAgaWYgKCFyZWFkeSkgeyByZXR1cm47IH1cbiAgY29uc3QgeCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShbJ2RhdGEteCddKTtcbiAgY29uc3QgeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShbJ2RhdGEteSddKTtcbiAgcGxheWVyMS5maXJlKHgsIHkpO1xuICBwbGF5ZXIyLmNvbXB1dGVyRmlyZSgpO1xufVxuZW5lbXlHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpLmZvckVhY2goKGRpdikgPT4gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5lbXlCb2FyZEV2ZW50KSk7XG5cbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ2VuZW15MUJvYXJkQ2hhbmdlZCcsIChib2FyZCkgPT4ge1xuICBET00udXBkYXRlRW5lbXlHcmlkKGJvYXJkLCBlbmVteUdyaWQsIGVuZW15Qm9hcmRFdmVudCk7XG4gIGlmIChwbGF5ZXIyLnBsYXllckJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjIucGxheWVyQm9hcmQuaXNHYW1lT3ZlcigpKTtcbiAgICB1dGlscy5wdWJzdWIucHVibGlzaCgnR2FtZU92ZXInLCAnUGxheWVyIFdpbnMnKTtcbiAgfVxufSk7XG5cbnV0aWxzLnB1YnN1Yi5zdWJzY3JpYmUoJ3BsYXllcjFBZGRTaGlwVG9HcmlkJywgKHsgbGVuZ3RoLCBjb29yZCB9KSA9PiB7XG4gIHBsYXllcjEuYWRkU2hpcChsZW5ndGgsIGNvb3JkKTtcbiAgcGxheWVyMi5hZGRDb21wdXRlclNoaXAobGVuZ3RoKTtcbn0pO1xuXG51dGlscy5wdWJzdWIuc3Vic2NyaWJlKCdhZGRTaGlwc0F0UmFuZG9tJywgKHNoaXBzKSA9PiB7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBbeCwgeSwgb3JpZW50YXRpb25dID0gcGxheWVyMS5hZGRDb21wdXRlclNoaXAoc2hpcC5sZW5ndGgpO1xuICAgIGNvbnN0IGRpdiA9IHBsYXllckdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgRE9NLmFkZFNoaXBUb0dyaWQoeyB0YXJnZXQ6IGRpdiwgb3JpZW50YXRpb24gfSk7XG4gICAgcGxheWVyMi5hZGRDb21wdXRlclNoaXAoc2hpcC5sZW5ndGgpO1xuICB9KTtcbiAgdXRpbHMucHVic3ViLnB1Ymxpc2goJ3BsYXllcjFCb2FyZENoYW5nZWQnLCBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkKTtcbn0pO1xuXG51dGlscy5wdWJzdWIuc3Vic2NyaWJlKCdHYW1lT3ZlcicsIChzdHIpID0+IHtcbiAgcGxheWVyMS5yZXNldCgpO1xuICBET00udXBkYXRlR3JpZChwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkLCBwbGF5ZXJHcmlkLCB0cnVlKTtcbiAgcGxheWVyMi5yZXNldCgpO1xuICBET00udXBkYXRlRW5lbXlHcmlkKHBsYXllcjEuZW5lbXlCb2FyZCwgZW5lbXlHcmlkKTtcbiAgZW5kU2NyZWVuLnRpdGxlLnRleHRDb250ZW50ID0gc3RyO1xuICBlbmRTY3JlZW4uc2hvd01vZGFsKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/night.jpg */ "./src/assets/night.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/day.svg */ "./src/assets/icons/day.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 14px;\n  /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n  font-family: var(--main-font);\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nhtml {\n  height: -webkit-fill-available;\n}\n\nbody {\n  height: 100vh;\n  height: -webkit-fill-available;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\nbody {\n  display: flex;\n  padding: 16px;\n}\n\n.wrapper {\n  flex: 1;\n  animation: fade-in 1s;\n}\n\n.wrapper {\n  color: white;\n  padding: 2px;\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n  display: flex;\n  flex-direction: column;\n}\n.wrapper header {\n  flex: 1;\n}\n.wrapper main {\n  flex: 5;\n}\n.wrapper .forecast {\n  flex: 5;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader h1 {\n  letter-spacing: 2px;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  position: relative;\n  margin-right: 30px;\n}\n.weather h2 {\n  font-size: 10rem;\n}\n.weather .text {\n  font-size: 2rem;\n  position: absolute;\n  top: 170px;\n  left: 60px;\n  font-family: sans-serif;\n  letter-spacing: 2px;\n}\n.weather .degree {\n  position: absolute;\n  font-size: 3rem;\n  bottom: 100px;\n  left: 170px;\n}\n\nbutton {\n  width: 10%;\n  border: 0;\n  color: white;\n  background-color: rgba(0, 0, 0, 0);\n  max-width: 30px;\n}\n\n.forecast {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  max-width: 400px;\n}\n\n.sun {\n  background-color: #fce570;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n\n.row {\n  max-height: 30px;\n  font-size: 18px;\n  display: grid;\n  grid-template-columns: auto auto 1fr;\n  align-items: center;\n}\n.row .svg {\n  background-size: cover;\n  background-position: center;\n  width: 60px;\n  height: 60px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  margin-left: -20px;\n}\n\n.temp {\n  text-align: end;\n}\n\n.refresh {\n  position: absolute;\n  left: 48%;\n  top: 80px;\n}\n.refresh svg {\n  width: 30px;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css","webpack://./src/styles/home.scss","webpack://./src/styles/base.scss","webpack://./src/styles/animations.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,eAAA;EACA,wBAAA;ACEJ;;ADCA;;;EAGI,mBAAA;EACA,SAAA;EACA,UAAA;ACEJ;;ADCA;;;;;;;;;;EAUI,SAAA;EACA,UAAA;EACA,mBAAA;EACA,6BAAA;ACEJ;;ADCA;;EAEI,gBAAA;ACEJ;;ADCA;EACI,eAAA;EACA,YAAA;ACEJ;;AC5BA;EACI,8BAAA;AD+BJ;;AC5BA;EACI,aAAA;EACA,8BAAA;EACA,yDAAA;EACA,sBAAA;AD+BJ;;AElDA;EACI;IACI,uBAAA;EFqDN;EElDE;IACI,yBAAA;EFoDN;AACF;AEjDA;EACI;IACI,UAAA;EFmDN;EEjDE;IACI,UAAA;EFmDN;AACF;AEhDA;EACI;IACI,UAAA;EFkDN;EE/CE;IACI,UAAA;EFiDN;AACF;AAxEA;EACI,aAAA;EACA,aAAA;AA0EJ;;AAvEA;EACI,OAAA;EACA,qBAAA;AA0EJ;;AAvEA;EACI,YAAA;EACA,YAAA;EACA,iCCPW;EDQX,eAAA;EACA,aAAA;EACA,sBAAA;AA0EJ;AAvEI;EACI,OAAA;AAyER;AArEI;EACI,OAAA;AAuER;AAnEI;EACI,OAAA;AAqER;;AAhEA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AAmEJ;AAjEI;EACI,mBAAA;AAmER;;AA/DA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAkEJ;;AA/DA;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;AAkEJ;AAhEI;EACI,gBAAA;AAkER;AAhEI;EACI,eAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;AAkER;AA/DI;EACI,kBAAA;EACA,eAAA;EACA,aAAA;EACA,WAAA;AAiER;;AA7DA;EACI,UAAA;EACA,SAAA;EACA,YAAA;EACA,kCAAA;EACA,eAAA;AAgEJ;;AA7DA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;EACA,gBAAA;AAgEJ;;AA7DA;EACI,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAgEJ;;AA7DA;EACI,gBAAA;EACA,eAAA;EACA,aAAA;EACA,oCAAA;EACA,mBAAA;AAgEJ;AA9DI;EACI,sBAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,yDAAA;EACA,kBAAA;AAgER;;AA5DA;EACI,eAAA;AA+DJ;;AA5DA;EAII,kBAAA;EACA,SAAA;EACA,SAAA;AA4DJ;AAjEI;EACI,WAAA;AAmER","sourcesContent":["html {\n    box-sizing: border-box;\n    font-size: 14px;\n    /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n    font-family: var(--main-font);\n}\n\nol,\nul {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n","@use './base.scss' as *;\n@use './animations.scss';\n\nbody {\n    display: flex;\n    padding: 16px;\n}\n\n.wrapper {\n    flex: 1;\n    animation: fade-in 1s;\n}\n\n.wrapper {\n    color: white;\n    padding: 2px;\n    font-family: $primary-font;\n    font-size: 16px;\n    display: flex;\n    flex-direction: column;\n    // align-items: center;\n\n    header {\n        flex: 1;\n        // border: $layout-border;\n    }\n\n    main {\n        flex: 5;\n        // border: $layout-border;\n    }\n\n    .forecast {\n        flex: 5;\n        // border: $layout-border;\n    }\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    h1 {\n        letter-spacing: 2px;\n    }\n}\n\nmain {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.weather {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    position: relative;\n    margin-right: 30px;\n\n    h2 {\n        font-size: 10rem;\n    }\n    .text {\n        font-size: 2rem;\n        position: absolute;\n        top: 170px;\n        left: 60px;\n        font-family: sans-serif;\n        letter-spacing: 2px;\n    }\n\n    .degree {\n        position: absolute;\n        font-size: 3rem;\n        bottom: 100px;\n        left: 170px;\n    }\n}\n\nbutton {\n    width: 10%;\n    border: 0;\n    color: white;\n    background-color: rgba(0, 0, 0, 0);\n    max-width: 30px;\n}\n\n.forecast {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 16px;\n    max-width: 400px;\n}\n\n.sun {\n    background-color: #fce570;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n}\n\n.row {\n    max-height: 30px;\n    font-size: 18px;\n    display: grid;\n    grid-template-columns: auto auto 1fr;\n    align-items: center;\n\n    .svg {\n        background-size: cover;\n        background-position: center;\n        width: 60px;\n        height: 60px;\n        background-image: url('../assets/icons/day.svg');\n        margin-left: -20px;\n    }\n}\n\n.temp {\n    text-align: end;\n}\n\n.refresh {\n    svg {\n        width: 30px;\n    }\n    position: absolute;\n    left: 48%;\n    top: 80px;\n}\n","@use 'reset.css';\n\n@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,900&display=swap');\n\n$primary-dark: #181a1b;\n$secondary-dark: #2b2f31;\n$dark-blue: #004daa;\n$text-white: #d8d4cf;\n$caption-white: #e8e6e3;\n$primary-font: 'Nunito', sans-serif;\n\nhtml {\n    height: -webkit-fill-available;\n}\n\nbody {\n    height: 100vh;\n    height: -webkit-fill-available;\n    background-image: url('../assets/night.jpg');\n    background-size: cover;\n}\n","@keyframes rotate {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/home.scss":
/*!******************************!*\
  !*** ./src/styles/home.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getForecastDataClean": () => (/* binding */ getForecastDataClean),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
const apiKey = '4b1d3b381d9370cb1209f53b25b46f83'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=${apiKey}`
const forecastApiURl = `https://api.openweathermap.org/data/2.5/forecast?q=cityName&appid=${apiKey}`

async function getWeatherData(cityName) {
    let requestUrl = apiURL.replace('cityName', cityName)
    requestUrl += '&units=metric'

    return await (await fetch(requestUrl)).json()
}

async function getForecastData(cityName) {
    let requestUrl = forecastApiURl.replace('cityName', cityName)
    requestUrl += '&units=metric'
    return await (await fetch(requestUrl)).json()
}

async function getForecastDataClean(cityName) {
    const forecastData = new Map()
    const tempData = await getForecastData(cityName)
    for (const day of tempData.list) {
        // convert from seconds to milliseconds
        let date = new Date(day.dt * 1000)
        let dayNum = date.getDate()
        if (!forecastData.get(dayNum)) {
            forecastData.set(dayNum, {
                minTemp: day.main.temp_min,
                maxTemp: day.main.temp_max,
            })
        } else {
            // get the minimum temp and max temp among the response list
            if (forecastData.get(dayNum).minTemp > day.main.temp_min) {
                forecastData.get(dayNum).minTemp = day.main.temp_min
            }

            if (forecastData.get(dayNum).maxTemp < day.main.temp_max) {
                forecastData.get(dayNum).maxTemp = day.main.temp_max
            }
        }
    }

    return forecastData
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/home */ "./src/views/home.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");



async function switchPage(pageName, ...args) {
    document.body.innerHTML = ''
    let component

    if (pageName === 'homepage') {
        const cityName = args[0]
        const weatherData = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(cityName)
        const forecastData = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getForecastDataClean)(cityName)

        // const data = new Map()
        // data.set(28, { minTemp: 10, maxTemp: 20 })
        // data.set(29, { minTemp: 20, maxTemp: 30 })
        // data.set(30, { minTemp: 30, maxTemp: 40 })

        const todayDayNum = new Date().getDate()

        const todayMinMax = {}
        const tomorrowMinMax = {}
        const dayAfterTomorrowMinMax = {}

        forecastData.forEach((value, dayNum) => {
            let diff = dayNum - todayDayNum
            if (diff === 0) {
                todayMinMax.minTemp = Math.round(value.minTemp)
                todayMinMax.maxTemp = Math.round(value.maxTemp)
            } else if (diff === 1) {
                tomorrowMinMax.minTemp = Math.round(value.minTemp)
                tomorrowMinMax.maxTemp = Math.round(value.maxTemp)
            } else if (diff === 2) {
                dayAfterTomorrowMinMax.minTemp = Math.round(value.minTemp)
                dayAfterTomorrowMinMax.maxTemp = Math.round(value.maxTemp)
            }
        })

        component = (0,_views_home__WEBPACK_IMPORTED_MODULE_0__["default"])(
            cityName,
            Math.round(weatherData.main.temp),
            weatherData.weather[0].main,
            [todayMinMax, tomorrowMinMax, dayAfterTomorrowMinMax],
        )
    }

    document.body.append(component)
}

switchPage('homepage', 'Cairo')

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchPage);


/***/ }),

/***/ "./src/views/home.js":
/*!***************************!*\
  !*** ./src/views/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgs */ "./src/views/svgs.js");
/* harmony import */ var _styles_home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.scss */ "./src/styles/home.scss");




function getDayAfterTomorrowName() {
    const afterTomorrowDayName = new Date()
    afterTomorrowDayName.setDate(afterTomorrowDayName.getDate() + 2)
    return afterTomorrowDayName.toLocaleDateString('en-us', {
        weekday: 'long',
    })
}

function Header(cityName) {
    const header = document.createElement('header')

    const addCityButton = document.createElement('button')
    addCityButton.innerHTML = _svgs__WEBPACK_IMPORTED_MODULE_1__["default"].plus
    addCityButton.addEventListener('click', () => {
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__["default"])('addCityPage')
    })

    const cityNameHeading = document.createElement('h1')
    cityNameHeading.textContent = cityName

    const refreshButton = document.createElement('button')
    refreshButton.className = 'refresh'
    refreshButton.innerHTML = _svgs__WEBPACK_IMPORTED_MODULE_1__["default"].refresh

    const settingsButton = document.createElement('button')
    settingsButton.innerHTML = _svgs__WEBPACK_IMPORTED_MODULE_1__["default"].settings
    settingsButton.addEventListener('click', () => {
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__["default"])('settingsPage')
    })

    header.append(addCityButton, cityNameHeading, refreshButton, settingsButton)

    return header
}

function Main(temp, weatherText) {
    const main = document.createElement('main')

    function weatherDiv() {
        const weatherDiv = document.createElement('div')
        weatherDiv.className = 'weather'

        const h2Temp = document.createElement('h2')
        h2Temp.textContent = temp

        const degreeSuffix = document.createElement('p')
        degreeSuffix.className = 'degree'
        degreeSuffix.textContent = '°C'

        const weatherStatusText = document.createElement('p')
        weatherStatusText.className = 'text'
        weatherStatusText.textContent = weatherText

        weatherDiv.append(h2Temp, degreeSuffix, weatherStatusText)
        return weatherDiv
    }

    main.append(weatherDiv())
    return main
}

function ForecastDiv(todayMinMax, tomorrowMinMax, dayAfterTomorrowMinMax) {
    const forecastDiv = document.createElement('div')
    forecastDiv.className = 'forecast'

    function Row(dayName, minTemp, maxTemp) {
        const row = document.createElement('div')
        row.className = 'row'

        const svgDiv = document.createElement('div')
        svgDiv.className = 'svg'

        const day = document.createElement('p')
        day.className = 'day'
        day.textContent = dayName

        const temp = document.createElement('p')
        temp.className = 'temp'
        temp.textContent = `${minTemp}° / ${maxTemp}°`

        row.append(svgDiv, day, temp)
        return row
    }

    forecastDiv.append(
        Row('Today', todayMinMax.minTemp, todayMinMax.maxTemp),
        Row('Tomorrow', tomorrowMinMax.minTemp, tomorrowMinMax.maxTemp),
        Row(
            getDayAfterTomorrowName(),
            dayAfterTomorrowMinMax.minTemp,
            dayAfterTomorrowMinMax.maxTemp,
        ),
    )
    return forecastDiv
}

function Home(cityName, currentTemp, weatherText, forecastData) {
    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    wrapper.append(
        Header(cityName),
        Main(currentTemp, weatherText),
        ForecastDiv(forecastData[0], forecastData[1], forecastData[2]),
    )
    return wrapper
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/views/svgs.js":
/*!***************************!*\
  !*** ./src/views/svgs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const svgs = {
    plus: `
    <svg viewBox="0 0 24 24">
    <path
        fill="currentColor"
        d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
    />
    </svg>`,

    refresh: `
    <svg viewBox="0 0 24 24">
    <path
        fill="currentColor"
    d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
    />
    </svg>`,

    settings: `
    <svg viewBox="0 0 24 24">
    <path
        fill="currentColor"
        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
    />
    </svg>`,
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (svgs);


/***/ }),

/***/ "./src/assets/icons/day.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c33ef66438b2725bead5.svg";

/***/ }),

/***/ "./src/assets/night.jpg":
/*!******************************!*\
  !*** ./src/assets/night.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98a55a7ddf04bf9e039c.jpg";

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// no jsonp function
/******/ })();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__webpack_require__.nc = undefined;
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOzs7OztVQ05BOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTs7VUFFQTs7VUFFQTs7VUFFQTs7VUFFQTs7VUFFQTs7VUFFQTs7Ozs7VUNyQkE7Ozs7O1NFQUE7U0FDQTtTQUNBO1NBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC8uL3NyYy9zdHlsZXMvaG9tZS5zY3NzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC8uL3NyYy9zdHlsZXMvaG9tZS5zY3NzP2EyMmQiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vc3JjL3ZpZXdzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvLi9zcmMvdmlld3Mvc3Zncy5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9uaWdodC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvZGF5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOml0YWwsd2dodEAxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIC8qIGNvbG9yLXNjaGVtZTogZGFyazsgKi9cXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZmxleDogMTtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi53cmFwcGVyIGhlYWRlciB7XFxuICBmbGV4OiAxO1xcbn1cXG4ud3JhcHBlciBtYWluIHtcXG4gIGZsZXg6IDU7XFxufVxcbi53cmFwcGVyIC5mb3JlY2FzdCB7XFxuICBmbGV4OiA1O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmhlYWRlciBoMSB7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG4ud2VhdGhlciBoMiB7XFxuICBmb250LXNpemU6IDEwcmVtO1xcbn1cXG4ud2VhdGhlciAudGV4dCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE3MHB4O1xcbiAgbGVmdDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuLndlYXRoZXIgLmRlZ3JlZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3R0b206IDEwMHB4O1xcbiAgbGVmdDogMTcwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIG1heC13aWR0aDogMzBweDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uc3VuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2U1NzA7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnJvdyB7XFxuICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yb3cgLnN2ZyB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbn1cXG5cXG4udGVtcCB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5yZWZyZXNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDQ4JTtcXG4gIHRvcDogODBweDtcXG59XFxuLnJlZnJlc2ggc3ZnIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDRUo7O0FEQ0E7OztFQUdJLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFSjs7QURDQTs7Ozs7Ozs7OztFQVVJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENBOztFQUVJLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0VKOztBQzVCQTtFQUNJLDhCQUFBO0FEK0JKOztBQzVCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7QUQrQko7O0FFbERBO0VBQ0k7SUFDSSx1QkFBQTtFRnFETjtFRWxERTtJQUNJLHlCQUFBO0VGb0ROO0FBQ0Y7QUVqREE7RUFDSTtJQUNJLFVBQUE7RUZtRE47RUVqREU7SUFDSSxVQUFBO0VGbUROO0FBQ0Y7QUVoREE7RUFDSTtJQUNJLFVBQUE7RUZrRE47RUUvQ0U7SUFDSSxVQUFBO0VGaUROO0FBQ0Y7QUF4RUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQTBFSjs7QUF2RUE7RUFDSSxPQUFBO0VBQ0EscUJBQUE7QUEwRUo7O0FBdkVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0NQVztFRFFYLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUEwRUo7QUF2RUk7RUFDSSxPQUFBO0FBeUVSO0FBckVJO0VBQ0ksT0FBQTtBQXVFUjtBQW5FSTtFQUNJLE9BQUE7QUFxRVI7O0FBaEVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFtRUo7QUFqRUk7RUFDSSxtQkFBQTtBQW1FUjs7QUEvREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWtFSjs7QUEvREE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFrRUo7QUFoRUk7RUFDSSxnQkFBQTtBQWtFUjtBQWhFSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWtFUjtBQS9ESTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBaUVSOztBQTdEQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQWdFSjs7QUE3REE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWdFSjs7QUE3REE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFnRUo7O0FBN0RBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUFnRUo7QUE5REk7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5REFBQTtFQUNBLGtCQUFBO0FBZ0VSOztBQTVEQTtFQUNJLGVBQUE7QUErREo7O0FBNURBO0VBSUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQTRESjtBQWpFSTtFQUNJLFdBQUE7QUFtRVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgLyogY29sb3Itc2NoZW1lOiBkYXJrOyAqL1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLFwiQHVzZSAnLi9iYXNlLnNjc3MnIGFzICo7XFxuQHVzZSAnLi9hbmltYXRpb25zLnNjc3MnO1xcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAxcztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAvLyBib3JkZXI6ICRsYXlvdXQtYm9yZGVyO1xcbiAgICB9XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZmxleDogNTtcXG4gICAgICAgIC8vIGJvcmRlcjogJGxheW91dC1ib3JkZXI7XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0IHtcXG4gICAgICAgIGZsZXg6IDU7XFxuICAgICAgICAvLyBib3JkZXI6ICRsYXlvdXQtYm9yZGVyO1xcbiAgICB9XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaDEge1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgfVxcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG5cXG4gICAgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxMHJlbTtcXG4gICAgfVxcbiAgICAudGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDE3MHB4O1xcbiAgICAgICAgbGVmdDogNjBweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgfVxcblxcbiAgICAuZGVncmVlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIGJvdHRvbTogMTAwcHg7XFxuICAgICAgICBsZWZ0OiAxNzBweDtcXG4gICAgfVxcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgbWF4LXdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uc3VuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZTU3MDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgbWF4LWhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5zdmcge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaWNvbnMvZGF5LnN2ZycpO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbiAgICB9XFxufVxcblxcbi50ZW1wIHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4ucmVmcmVzaCB7XFxuICAgIHN2ZyB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgfVxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQ4JTtcXG4gICAgdG9wOiA4MHB4O1xcbn1cXG5cIixcIkB1c2UgJ3Jlc2V0LmNzcyc7XFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOml0YWwsd2dodEAxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4kcHJpbWFyeS1kYXJrOiAjMTgxYTFiO1xcbiRzZWNvbmRhcnktZGFyazogIzJiMmYzMTtcXG4kZGFyay1ibHVlOiAjMDA0ZGFhO1xcbiR0ZXh0LXdoaXRlOiAjZDhkNGNmO1xcbiRjYXB0aW9uLXdoaXRlOiAjZThlNmUzO1xcbiRwcmltYXJ5LWZvbnQ6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL25pZ2h0LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cIixcIkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhcGlLZXkgPSAnNGIxZDNiMzgxZDkzNzBjYjEyMDlmNTNiMjViNDZmODMnXG5jb25zdCBhcGlVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1jaXR5TmFtZSZhcHBpZD0ke2FwaUtleX1gXG5jb25zdCBmb3JlY2FzdEFwaVVSbCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT1jaXR5TmFtZSZhcHBpZD0ke2FwaUtleX1gXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHlOYW1lKSB7XG4gICAgbGV0IHJlcXVlc3RVcmwgPSBhcGlVUkwucmVwbGFjZSgnY2l0eU5hbWUnLCBjaXR5TmFtZSlcbiAgICByZXF1ZXN0VXJsICs9ICcmdW5pdHM9bWV0cmljJ1xuXG4gICAgcmV0dXJuIGF3YWl0IChhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKSkuanNvbigpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShjaXR5TmFtZSkge1xuICAgIGxldCByZXF1ZXN0VXJsID0gZm9yZWNhc3RBcGlVUmwucmVwbGFjZSgnY2l0eU5hbWUnLCBjaXR5TmFtZSlcbiAgICByZXF1ZXN0VXJsICs9ICcmdW5pdHM9bWV0cmljJ1xuICAgIHJldHVybiBhd2FpdCAoYXdhaXQgZmV0Y2gocmVxdWVzdFVybCkpLmpzb24oKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdERhdGFDbGVhbihjaXR5TmFtZSkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IG5ldyBNYXAoKVxuICAgIGNvbnN0IHRlbXBEYXRhID0gYXdhaXQgZ2V0Rm9yZWNhc3REYXRhKGNpdHlOYW1lKVxuICAgIGZvciAoY29uc3QgZGF5IG9mIHRlbXBEYXRhLmxpc3QpIHtcbiAgICAgICAgLy8gY29udmVydCBmcm9tIHNlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZGF5LmR0ICogMTAwMClcbiAgICAgICAgbGV0IGRheU51bSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgICAgIGlmICghZm9yZWNhc3REYXRhLmdldChkYXlOdW0pKSB7XG4gICAgICAgICAgICBmb3JlY2FzdERhdGEuc2V0KGRheU51bSwge1xuICAgICAgICAgICAgICAgIG1pblRlbXA6IGRheS5tYWluLnRlbXBfbWluLFxuICAgICAgICAgICAgICAgIG1heFRlbXA6IGRheS5tYWluLnRlbXBfbWF4LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgbWluaW11bSB0ZW1wIGFuZCBtYXggdGVtcCBhbW9uZyB0aGUgcmVzcG9uc2UgbGlzdFxuICAgICAgICAgICAgaWYgKGZvcmVjYXN0RGF0YS5nZXQoZGF5TnVtKS5taW5UZW1wID4gZGF5Lm1haW4udGVtcF9taW4pIHtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERhdGEuZ2V0KGRheU51bSkubWluVGVtcCA9IGRheS5tYWluLnRlbXBfbWluXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3JlY2FzdERhdGEuZ2V0KGRheU51bSkubWF4VGVtcCA8IGRheS5tYWluLnRlbXBfbWF4KSB7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXRhLmdldChkYXlOdW0pLm1heFRlbXAgPSBkYXkubWFpbi50ZW1wX21heFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcmVjYXN0RGF0YVxufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0Rm9yZWNhc3REYXRhQ2xlYW4gfVxuIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3cy9ob21lJ1xuaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEsIGdldEZvcmVjYXN0RGF0YUNsZWFuIH0gZnJvbSAnLi9kYXRhJ1xuXG5hc3luYyBmdW5jdGlvbiBzd2l0Y2hQYWdlKHBhZ2VOYW1lLCAuLi5hcmdzKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJ1xuICAgIGxldCBjb21wb25lbnRcblxuICAgIGlmIChwYWdlTmFtZSA9PT0gJ2hvbWVwYWdlJykge1xuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGFyZ3NbMF1cbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShjaXR5TmFtZSlcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgZ2V0Rm9yZWNhc3REYXRhQ2xlYW4oY2l0eU5hbWUpXG5cbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IG5ldyBNYXAoKVxuICAgICAgICAvLyBkYXRhLnNldCgyOCwgeyBtaW5UZW1wOiAxMCwgbWF4VGVtcDogMjAgfSlcbiAgICAgICAgLy8gZGF0YS5zZXQoMjksIHsgbWluVGVtcDogMjAsIG1heFRlbXA6IDMwIH0pXG4gICAgICAgIC8vIGRhdGEuc2V0KDMwLCB7IG1pblRlbXA6IDMwLCBtYXhUZW1wOiA0MCB9KVxuXG4gICAgICAgIGNvbnN0IHRvZGF5RGF5TnVtID0gbmV3IERhdGUoKS5nZXREYXRlKClcblxuICAgICAgICBjb25zdCB0b2RheU1pbk1heCA9IHt9XG4gICAgICAgIGNvbnN0IHRvbW9ycm93TWluTWF4ID0ge31cbiAgICAgICAgY29uc3QgZGF5QWZ0ZXJUb21vcnJvd01pbk1heCA9IHt9XG5cbiAgICAgICAgZm9yZWNhc3REYXRhLmZvckVhY2goKHZhbHVlLCBkYXlOdW0pID0+IHtcbiAgICAgICAgICAgIGxldCBkaWZmID0gZGF5TnVtIC0gdG9kYXlEYXlOdW1cbiAgICAgICAgICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9kYXlNaW5NYXgubWluVGVtcCA9IE1hdGgucm91bmQodmFsdWUubWluVGVtcClcbiAgICAgICAgICAgICAgICB0b2RheU1pbk1heC5tYXhUZW1wID0gTWF0aC5yb3VuZCh2YWx1ZS5tYXhUZW1wKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdG9tb3Jyb3dNaW5NYXgubWluVGVtcCA9IE1hdGgucm91bmQodmFsdWUubWluVGVtcClcbiAgICAgICAgICAgICAgICB0b21vcnJvd01pbk1heC5tYXhUZW1wID0gTWF0aC5yb3VuZCh2YWx1ZS5tYXhUZW1wKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmID09PSAyKSB7XG4gICAgICAgICAgICAgICAgZGF5QWZ0ZXJUb21vcnJvd01pbk1heC5taW5UZW1wID0gTWF0aC5yb3VuZCh2YWx1ZS5taW5UZW1wKVxuICAgICAgICAgICAgICAgIGRheUFmdGVyVG9tb3Jyb3dNaW5NYXgubWF4VGVtcCA9IE1hdGgucm91bmQodmFsdWUubWF4VGVtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb21wb25lbnQgPSBIb21lKFxuICAgICAgICAgICAgY2l0eU5hbWUsXG4gICAgICAgICAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCksXG4gICAgICAgICAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICAgICAgICBbdG9kYXlNaW5NYXgsIHRvbW9ycm93TWluTWF4LCBkYXlBZnRlclRvbW9ycm93TWluTWF4XSxcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbXBvbmVudClcbn1cblxuc3dpdGNoUGFnZSgnaG9tZXBhZ2UnLCAnQ2Fpcm8nKVxuXG5leHBvcnQgZGVmYXVsdCBzd2l0Y2hQYWdlXG4iLCJpbXBvcnQgc3dpdGNoUGFnZSBmcm9tICcuLi9pbmRleCdcbmltcG9ydCBzdmdzIGZyb20gJy4vc3ZncydcbmltcG9ydCAnLi4vc3R5bGVzL2hvbWUuc2NzcydcblxuZnVuY3Rpb24gZ2V0RGF5QWZ0ZXJUb21vcnJvd05hbWUoKSB7XG4gICAgY29uc3QgYWZ0ZXJUb21vcnJvd0RheU5hbWUgPSBuZXcgRGF0ZSgpXG4gICAgYWZ0ZXJUb21vcnJvd0RheU5hbWUuc2V0RGF0ZShhZnRlclRvbW9ycm93RGF5TmFtZS5nZXREYXRlKCkgKyAyKVxuICAgIHJldHVybiBhZnRlclRvbW9ycm93RGF5TmFtZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLXVzJywge1xuICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gSGVhZGVyKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcblxuICAgIGNvbnN0IGFkZENpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZENpdHlCdXR0b24uaW5uZXJIVE1MID0gc3Zncy5wbHVzXG4gICAgYWRkQ2l0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3dpdGNoUGFnZSgnYWRkQ2l0eVBhZ2UnKVxuICAgIH0pXG5cbiAgICBjb25zdCBjaXR5TmFtZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY2l0eU5hbWVIZWFkaW5nLnRleHRDb250ZW50ID0gY2l0eU5hbWVcblxuICAgIGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlZnJlc2hCdXR0b24uY2xhc3NOYW1lID0gJ3JlZnJlc2gnXG4gICAgcmVmcmVzaEJ1dHRvbi5pbm5lckhUTUwgPSBzdmdzLnJlZnJlc2hcblxuICAgIGNvbnN0IHNldHRpbmdzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzZXR0aW5nc0J1dHRvbi5pbm5lckhUTUwgPSBzdmdzLnNldHRpbmdzXG4gICAgc2V0dGluZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN3aXRjaFBhZ2UoJ3NldHRpbmdzUGFnZScpXG4gICAgfSlcblxuICAgIGhlYWRlci5hcHBlbmQoYWRkQ2l0eUJ1dHRvbiwgY2l0eU5hbWVIZWFkaW5nLCByZWZyZXNoQnV0dG9uLCBzZXR0aW5nc0J1dHRvbilcblxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuZnVuY3Rpb24gTWFpbih0ZW1wLCB3ZWF0aGVyVGV4dCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcblxuICAgIGZ1bmN0aW9uIHdlYXRoZXJEaXYoKSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB3ZWF0aGVyRGl2LmNsYXNzTmFtZSA9ICd3ZWF0aGVyJ1xuXG4gICAgICAgIGNvbnN0IGgyVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgaDJUZW1wLnRleHRDb250ZW50ID0gdGVtcFxuXG4gICAgICAgIGNvbnN0IGRlZ3JlZVN1ZmZpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBkZWdyZWVTdWZmaXguY2xhc3NOYW1lID0gJ2RlZ3JlZSdcbiAgICAgICAgZGVncmVlU3VmZml4LnRleHRDb250ZW50ID0gJ8KwQydcblxuICAgICAgICBjb25zdCB3ZWF0aGVyU3RhdHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB3ZWF0aGVyU3RhdHVzVGV4dC5jbGFzc05hbWUgPSAndGV4dCdcbiAgICAgICAgd2VhdGhlclN0YXR1c1RleHQudGV4dENvbnRlbnQgPSB3ZWF0aGVyVGV4dFxuXG4gICAgICAgIHdlYXRoZXJEaXYuYXBwZW5kKGgyVGVtcCwgZGVncmVlU3VmZml4LCB3ZWF0aGVyU3RhdHVzVGV4dClcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEaXZcbiAgICB9XG5cbiAgICBtYWluLmFwcGVuZCh3ZWF0aGVyRGl2KCkpXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gRm9yZWNhc3REaXYodG9kYXlNaW5NYXgsIHRvbW9ycm93TWluTWF4LCBkYXlBZnRlclRvbW9ycm93TWluTWF4KSB7XG4gICAgY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcmVjYXN0RGl2LmNsYXNzTmFtZSA9ICdmb3JlY2FzdCdcblxuICAgIGZ1bmN0aW9uIFJvdyhkYXlOYW1lLCBtaW5UZW1wLCBtYXhUZW1wKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSAncm93J1xuXG4gICAgICAgIGNvbnN0IHN2Z0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHN2Z0Rpdi5jbGFzc05hbWUgPSAnc3ZnJ1xuXG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBkYXkuY2xhc3NOYW1lID0gJ2RheSdcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gZGF5TmFtZVxuXG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGVtcC5jbGFzc05hbWUgPSAndGVtcCdcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke21pblRlbXB9wrAgLyAke21heFRlbXB9wrBgXG5cbiAgICAgICAgcm93LmFwcGVuZChzdmdEaXYsIGRheSwgdGVtcClcbiAgICAgICAgcmV0dXJuIHJvd1xuICAgIH1cblxuICAgIGZvcmVjYXN0RGl2LmFwcGVuZChcbiAgICAgICAgUm93KCdUb2RheScsIHRvZGF5TWluTWF4Lm1pblRlbXAsIHRvZGF5TWluTWF4Lm1heFRlbXApLFxuICAgICAgICBSb3coJ1RvbW9ycm93JywgdG9tb3Jyb3dNaW5NYXgubWluVGVtcCwgdG9tb3Jyb3dNaW5NYXgubWF4VGVtcCksXG4gICAgICAgIFJvdyhcbiAgICAgICAgICAgIGdldERheUFmdGVyVG9tb3Jyb3dOYW1lKCksXG4gICAgICAgICAgICBkYXlBZnRlclRvbW9ycm93TWluTWF4Lm1pblRlbXAsXG4gICAgICAgICAgICBkYXlBZnRlclRvbW9ycm93TWluTWF4Lm1heFRlbXAsXG4gICAgICAgICksXG4gICAgKVxuICAgIHJldHVybiBmb3JlY2FzdERpdlxufVxuXG5mdW5jdGlvbiBIb21lKGNpdHlOYW1lLCBjdXJyZW50VGVtcCwgd2VhdGhlclRleHQsIGZvcmVjYXN0RGF0YSkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3dyYXBwZXInXG5cbiAgICB3cmFwcGVyLmFwcGVuZChcbiAgICAgICAgSGVhZGVyKGNpdHlOYW1lKSxcbiAgICAgICAgTWFpbihjdXJyZW50VGVtcCwgd2VhdGhlclRleHQpLFxuICAgICAgICBGb3JlY2FzdERpdihmb3JlY2FzdERhdGFbMF0sIGZvcmVjYXN0RGF0YVsxXSwgZm9yZWNhc3REYXRhWzJdKSxcbiAgICApXG4gICAgcmV0dXJuIHdyYXBwZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwiY29uc3Qgc3ZncyA9IHtcbiAgICBwbHVzOiBgXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiXG4gICAgLz5cbiAgICA8L3N2Zz5gLFxuXG4gICAgcmVmcmVzaDogYFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIGQ9XCJNMTcuNjUsNi4zNUMxNi4yLDQuOSAxNC4yMSw0IDEyLDRBOCw4IDAgMCwwIDQsMTJBOCw4IDAgMCwwIDEyLDIwQzE1LjczLDIwIDE4Ljg0LDE3LjQ1IDE5LjczLDE0SDE3LjY1QzE2LjgzLDE2LjMzIDE0LjYxLDE4IDEyLDE4QTYsNiAwIDAsMSA2LDEyQTYsNiAwIDAsMSAxMiw2QzEzLjY2LDYgMTUuMTQsNi42OSAxNi4yMiw3Ljc4TDEzLDExSDIwVjRMMTcuNjUsNi4zNVpcIlxuICAgIC8+XG4gICAgPC9zdmc+YCxcblxuICAgIHNldHRpbmdzOiBgXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGQ9XCJNMTIsMTZBMiwyIDAgMCwxIDE0LDE4QTIsMiAwIDAsMSAxMiwyMEEyLDIgMCAwLDEgMTAsMThBMiwyIDAgMCwxIDEyLDE2TTEyLDEwQTIsMiAwIDAsMSAxNCwxMkEyLDIgMCAwLDEgMTIsMTRBMiwyIDAgMCwxIDEwLDEyQTIsMiAwIDAsMSAxMiwxME0xMiw0QTIsMiAwIDAsMSAxNCw2QTIsMiAwIDAsMSAxMiw4QTIsMiAwIDAsMSAxMCw2QTIsMiAwIDAsMSAxMiw0WlwiXG4gICAgLz5cbiAgICA8L3N2Zz5gLFxufVxuXG5leHBvcnQgZGVmYXVsdCBzdmdzXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAodHlwZW9mIGltcG9ydC5tZXRhLnVybCA9PT0gXCJzdHJpbmdcIikgc2NyaXB0VXJsID0gaW1wb3J0Lm1ldGEudXJsXG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
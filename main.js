/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 14px;\n  /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n  font-family: var(--main-font);\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\nbody {\n  height: 100vh;\n  height: -webkit-fill-available;\n  animation: fade-in 5s;\n}\n\nhtml {\n  height: -webkit-fill-available;\n  padding: 16px;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\nbody {\n  color: white;\n  padding: 2px;\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n  display: flex;\n  flex-direction: column;\n}\nbody header {\n  flex: 1;\n  border: 1px solid rgba(0, 0, 0, 0);\n}\nbody main {\n  flex: 5;\n  border: 1px solid rgba(0, 0, 0, 0);\n}\nbody .forecast {\n  flex: 5;\n  border: 1px solid rgba(0, 0, 0, 0);\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader h1 {\n  letter-spacing: 2px;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  position: relative;\n  margin-right: 30px;\n}\n.weather h2 {\n  font-size: 10rem;\n}\n.weather .text {\n  font-size: 2rem;\n  position: absolute;\n  top: 170px;\n  left: 60px;\n  font-family: sans-serif;\n  letter-spacing: 2px;\n}\n.weather .degree {\n  position: absolute;\n  font-size: 3rem;\n  bottom: 100px;\n  left: 170px;\n}\n\nbutton {\n  width: 10%;\n  border: 0;\n  color: white;\n  background-color: rgba(0, 0, 0, 0);\n  max-width: 30px;\n}\n\n.forecast {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  max-width: 400px;\n}\n\n.sun {\n  background-color: #fce570;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n\n.row {\n  max-height: 30px;\n  font-size: 18px;\n  display: grid;\n  grid-template-columns: auto auto 1fr;\n  align-items: center;\n}\n.row .svg {\n  background-size: cover;\n  background-position: center;\n  width: 60px;\n  height: 60px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  margin-left: -20px;\n}\n.row .temp {\n  animation: fade-in 5s;\n}\n\n.temp {\n  text-align: end;\n}\n\n.refresh {\n  position: absolute;\n  left: 48%;\n  top: 80px;\n}\n.refresh svg {\n  width: 30px;\n}\n\nform .head {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n}\nform .head input {\n  flex: 1;\n  padding: 16px;\n  padding-left: 60px;\n  border-radius: 24px;\n  font-size: 1.3rem;\n  color-scheme: dark;\n}\nform .head #search-icon {\n  position: absolute;\n  z-index: 2;\n  left: 20px;\n}\nform svg {\n  width: 30px;\n}\n\n.add-page {\n  animation: fade-in 1s;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.add-page h1 {\n  margin-left: 10px;\n}\n.add-page .cities {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.add-page .cities .city {\n  padding: 16px;\n  background-color: rgba(21, 21, 138, 0.507);\n  border-radius: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 3rem;\n}\n\n.error-div {\n  padding: 16px;\n  position: absolute;\n  border-radius: 24px;\n  color: white;\n  position: absolute;\n  background-color: red;\n  left: 60%;\n  animation: fade-out 5s;\n}\n\n.rotate {\n  animation: rotate 1s;\n}\n\n.fade-in {\n  animation: fade-in 1s;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css","webpack://./src/styles/index.scss"],"names":[],"mappings":"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","sourcesContent":["html {\n    box-sizing: border-box;\n    font-size: 14px;\n    /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n    font-family: var(--main-font);\n}\n\nol,\nul {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n","@use 'reset.css';\n\n@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,900&display=swap');\n\n$primary-dark: #181a1b;\n$secondary-dark: #2b2f31;\n$dark-blue: #004daa;\n$text-white: #d8d4cf;\n$caption-white: #e8e6e3;\n$primary-font: 'Nunito', sans-serif;\n$layout-border: 1px solid white;\n$layout-border: 1px solid rgba(0, 0, 0, 0);\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\n// Fix for andriod devices\nbody {\n    height: 100vh;\n    height: -webkit-fill-available;\n    animation: fade-in 5s;\n}\nhtml {\n    height: -webkit-fill-available;\n    padding: 16px;\n}\n\nbody {\n    background-image: url('../assets/night.jpg');\n    background-size: cover;\n}\n\nbody {\n    color: white;\n    padding: 2px;\n    font-family: $primary-font;\n    font-size: 16px;\n    display: flex;\n    flex-direction: column;\n    // align-items: center;\n\n    header {\n        flex: 1;\n        border: $layout-border;\n    }\n\n    main {\n        flex: 5;\n        border: $layout-border;\n    }\n\n    .forecast {\n        flex: 5;\n        border: $layout-border;\n    }\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    h1 {\n        letter-spacing: 2px;\n    }\n}\n\nmain {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.weather {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    position: relative;\n    margin-right: 30px;\n\n    h2 {\n        font-size: 10rem;\n    }\n    .text {\n        font-size: 2rem;\n        position: absolute;\n        top: 170px;\n        left: 60px;\n        font-family: sans-serif;\n        letter-spacing: 2px;\n    }\n\n    .degree {\n        position: absolute;\n        font-size: 3rem;\n        bottom: 100px;\n        left: 170px;\n    }\n}\n\nbutton {\n    width: 10%;\n    border: 0;\n    color: white;\n    background-color: rgba(0, 0, 0, 0);\n    max-width: 30px;\n}\n\n.forecast {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 16px;\n    max-width: 400px;\n}\n\n.sun {\n    background-color: #fce570;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n}\n\n.row {\n    max-height: 30px;\n    font-size: 18px;\n    display: grid;\n    grid-template-columns: auto auto 1fr;\n    align-items: center;\n\n    .svg {\n        background-size: cover;\n        background-position: center;\n        width: 60px;\n        height: 60px;\n        background-image: url('../assets/icons/day.svg');\n        margin-left: -20px;\n    }\n\n    .temp {\n        animation: fade-in 5s;\n    }\n}\n\n.temp {\n    text-align: end;\n}\n\n.refresh {\n    svg {\n        width: 30px;\n    }\n    position: absolute;\n    left: 48%;\n    top: 80px;\n}\n\nform {\n    .head {\n        display: flex;\n        align-items: center;\n        gap: 20px;\n        position: relative;\n\n        input {\n            flex: 1;\n            padding: 16px;\n            padding-left: 60px;\n            border-radius: 24px;\n            font-size: 1.3rem;\n            // background-color: grey;\n            // color: white;\n            color-scheme: dark;\n        }\n\n        #search-icon {\n            position: absolute;\n            z-index: 2;\n            left: 20px;\n            // color: black;\n        }\n    }\n\n    svg {\n        width: 30px;\n    }\n}\n\n.add-page {\n    animation: fade-in 1s;\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n\n    h1 {\n        margin-left: 10px;\n    }\n\n    .cities {\n        flex: 1;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n\n        .city {\n            padding: 16px;\n            background-color: rgba(21, 21, 138, 0.507);\n            border-radius: 24px;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            font-size: 3rem;\n        }\n    }\n}\n\n.error-div {\n    padding: 16px;\n    position: absolute;\n    border-radius: 24px;\n    color: white;\n    position: absolute;\n    background-color: red;\n    left: 60%;\n    animation: fade-out 5s;\n}\n\n.rotate {\n    animation: rotate 1s;\n}\n\n.fade-in {\n    animation: fade-in 1s;\n}\n\n@keyframes rotate {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");


const apiKey = '4b1d3b381d9370cb1209f53b25b46f83'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=${apiKey}`
const forecastApiURl = `https://api.openweathermap.org/data/2.5/forecast?q=cityName&appid=${apiKey}`

const refreshButton = document.querySelector('body > header > button.refresh')
const mainWeatherDisplay = document.querySelector('h2')
const mainWeatherText = document.querySelector('.text')
const forecastArea = document.querySelector('.forecast')
const mainArea = document.querySelector('main')
const addCityButton = document.querySelector(
    'body > header > button:nth-child(1)',
)

const cityList = JSON.parse(localStorage.getItem('cityList')) || ['Cairo']
localStorage.setItem('cityList', JSON.stringify(cityList))

const addPageHTML = `
<div class="add-page">
<button id="back-button" type="button">
    <svg viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
        />
    </svg>
</button>
<h1>Add a City</h1>
<form action="">
    <div class="head">
        <input type="search" />
        <svg id="search-icon" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
        </svg>
    </div>
</form>
<div class="cities">
</div>
</div>
`

async function getWeatherData(cityName) {
    let requestUrl = apiURL.replace('cityName', cityName)
    requestUrl += '&units=metric'

    return await (await fetch(requestUrl)).json()
}

async function setTodayWeatherUI(cityName) {
    const tempData = await getWeatherData(cityName)
    const todayMinMaxElement = document.querySelector(
        'body > div > div:nth-child(1) > p.temp',
    )
    const todayMinMax = `${Math.round(tempData.main.temp_max)}° / ${
        Math.round(tempData.main.temp_min) + 3
    }°`
    const mainTemperatureElement = document.querySelector('h2')
    const mainTemperatureTextElement = document.querySelector(
        'body > main > div > p.text',
    )
    const cityNameElement = document.querySelector('h1')
    mainTemperatureElement.textContent = Math.round(tempData.main.temp)
    mainTemperatureTextElement.textContent = tempData.weather[0].main
    cityNameElement.textContent = cityName[0].toUpperCase() + cityName.slice(1)
    todayMinMaxElement.textContent = todayMinMax
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

async function setForecastDataUI(cityName) {
    const todayMinMaxElement = document.querySelector(
        'body > div > div:nth-child(1) > p.temp',
    )
    const tomorrowMinMaxElement = document.querySelector(
        'body > div > div:nth-child(2) > p.temp',
    )
    const afterTomorrowMinMaxElement = document.querySelector(
        'body > div > div:nth-child(3) > p.temp',
    )

    const afterTomorrowNameElement = document.querySelector(
        'body > div > div:nth-child(3) > p.day',
    )

    const forecastData = await getForecastDataClean(cityName)
    const today = new Date()
    let afterTomorrowDateName = new Date()
    afterTomorrowDateName.setDate(afterTomorrowDateName.getDate() + 2)
    afterTomorrowDateName = afterTomorrowDateName.toLocaleDateString('en-us', {
        weekday: 'long',
    })

    afterTomorrowNameElement.textContent = afterTomorrowDateName

    forecastData.forEach((value, day) => {
        let minMaxWeather = `${Math.round(value.maxTemp)}° / ${Math.round(
            value.minTemp,
        )}°`
        switch (day - today.getDate()) {
            case 0:
                todayMinMaxElement.textContent = minMaxWeather
                break
            case 1:
                tomorrowMinMaxElement.textContent = minMaxWeather
                break
            case 2:
                afterTomorrowMinMaxElement.textContent = minMaxWeather
                break
        }
    })
}

refreshButton.addEventListener('click', () => {
    setTodayWeatherUI('Cairo')
    setForecastDataUI('Cairo')
    refreshButton.classList.remove('rotate')
    // mainWeatherDisplay.classList.remove('fade-in')
    // mainWeatherText.classList.remove('fade-in')
    mainArea.classList.remove('fade-in')
    forecastArea.classList.remove('fade-in')
    setTimeout(() => {
        refreshButton.classList.add('rotate')
        // mainWeatherDisplay.classList.add('fade-in')
        // mainWeatherText.classList.add('fade-in')
        mainArea.classList.add('fade-in')
        forecastArea.classList.add('fade-in')
    }, 100)
})

function switchPage(page) {
    document.body.innerHTML = localStorage.getItem(page)
    if (page === 'addpage') {
        document.querySelector('#back-button').addEventListener('click', () => {
            switchPage('homepage')
        })
        const citiesArea = document.querySelector('.cities')

        for (const city of JSON.parse(localStorage.getItem('cityList'))) {
            citiesArea.innerHTML += `
            <div class="city">
            <div class="name">${city[0].toUpperCase() + city.slice(1)}</div>
        </div>`
        }

        const citiesDivs = document.querySelectorAll('.city')
        citiesDivs.forEach((element) => {
            element.addEventListener('click', (e) => {
                let cityName
                if (e.target.classList.contains('name')) {
                    cityName = e.target.textContent
                } else {
                    cityName = e.target.querySelector('.name').textContent
                }
                switchPage('homepage')
                setTodayWeatherUI(cityName).catch((error) => displayError())
                setForecastDataUI(cityName).catch((error) => displayError())
            })
        })
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
            const cityName = document.querySelector('input').value
            if (!cityList.includes(cityName)) {
                cityList.push(cityName)
                localStorage.setItem('cityList', JSON.stringify(cityList))
            }
            switchPage('homepage')
            setTodayWeatherUI(cityName).catch((error) => displayError())
            setForecastDataUI(cityName).catch((error) => displayError())
        })
    } else if (page === 'homepage') {
        document
            .querySelector('body > header > button:nth-child(1)')
            .addEventListener('click', () => {
                switchPage('addpage')
            })
    }
}
function displayError(error) {
    const errorDiv = document.createElement('div')
    errorDiv.classList.add('error-div')
    errorDiv.textContent = 'Not a valid city name!'
    document.body.append(errorDiv)

    setTimeout(() => {
        errorDiv.style.display = 'none'
    }, 5000)
}

await setTodayWeatherUI('Cairo')
await setForecastDataUI('Cairo')
localStorage.setItem('homepage', document.body.innerHTML)
localStorage.setItem('addpage', addPageHTML)

addCityButton.addEventListener('click', () => {
    switchPage('addpage')
})

// switchPage('addpage')

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = (queue) => {
/******/ 		if(queue && !queue.d) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, (e) => {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = (fn) => (fn(queue));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = x => {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}));
/******/ 	__webpack_require__.a = (module, body, hasAwait) => {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = 1);
/******/ 		if(queue) queue.moduleId = module.id;
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 		promise.moduleId = module.id;
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = () => (currentDeps.map((d) => {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}))
/******/ 			var promise = new Promise((resolve) => {
/******/ 				fn = () => (resolve(getResult));
/******/ 				fn.r = 0;
/******/ 				var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 				currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 		queue && (queue.d = 0);
/******/ 	};
/******/ })();
/******/ 
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
/******/ // This entry module used 'module' so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ __webpack_exports__ = await __webpack_exports__;
/******/ 

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFFBQVEsTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFB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ZXMiOlsid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvV2VhdGhlciBBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BlbGJhc2VsNjE5L1dlYXRoZXIgQXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9XZWF0aGVyIEFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9uaWdodC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvZGF5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOml0YWwsd2dodEAxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIC8qIGNvbG9yLXNjaGVtZTogZGFyazsgKi9cXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogPT09PT09PT09PSBFTkQgRGFyayBNb2RlIENvbG9ycyA9PT09PT09PT09ICovXFxuLyogVG8gdXNlIGJhY2tncm91bmQgaW1hZ2VzIHRob3VyZ2ggIHVybCwgdXNlIGl0IGluIEphdmFzY2lwcnQgdXNpbmcgXFxuaW1wb3J0IGFzc2V0IHN0YXRtZW50IGFuZCBlLnN0eWxlLmJhY2tncm91bmQgPSBgJHtpbXBvcnRlZEltYWdlfWAgKi9cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBhbmltYXRpb246IGZhZGUtaW4gNXM7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycHg7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuYm9keSBoZWFkZXIge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbmJvZHkgbWFpbiB7XFxuICBmbGV4OiA1O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuYm9keSAuZm9yZWNhc3Qge1xcbiAgZmxleDogNTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyIGgxIHtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcbi53ZWF0aGVyIGgyIHtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxufVxcbi53ZWF0aGVyIC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTcwcHg7XFxuICBsZWZ0OiA2MHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG4ud2VhdGhlciAuZGVncmVlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvdHRvbTogMTAwcHg7XFxuICBsZWZ0OiAxNzBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMCU7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgbWF4LXdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi5zdW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZTU3MDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucm93IHtcXG4gIG1heC1oZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJvdyAuc3ZnIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxufVxcbi5yb3cgLnRlbXAge1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDVzO1xcbn1cXG5cXG4udGVtcCB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5yZWZyZXNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDQ4JTtcXG4gIHRvcDogODBweDtcXG59XFxuLnJlZnJlc2ggc3ZnIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG5mb3JtIC5oZWFkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5mb3JtIC5oZWFkIGlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbn1cXG5mb3JtIC5oZWFkICNzZWFyY2gtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgbGVmdDogMjBweDtcXG59XFxuZm9ybSBzdmcge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5hZGQtcGFnZSB7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG4uYWRkLXBhZ2UgaDEge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5hZGQtcGFnZSAuY2l0aWVzIHtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG59XFxuLmFkZC1wYWdlIC5jaXRpZXMgLmNpdHkge1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDIxLCAxMzgsIDAuNTA3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmVycm9yLWRpdiB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGxlZnQ6IDYwJTtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgNXM7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxufVxcblxcbi5mYWRlLWluIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcztcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0VKOztBRENBOzs7RUFHSSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQ0E7Ozs7Ozs7Ozs7RUFVSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDQTs7RUFFSSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNFSjs7QUExQkEsK0NBQUE7QUFDQTttRUFBQTtBQUdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0FBNkJKOztBQTFCQTtFQUNJLHlEQUFBO0VBQ0Esc0JBQUE7QUE2Qko7O0FBMUJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0ExQlc7RUEyQlgsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQTZCSjtBQTFCSTtFQUNJLE9BQUE7RUFDQSxrQ0FoQ1E7QUE0RGhCO0FBekJJO0VBQ0ksT0FBQTtFQUNBLGtDQXJDUTtBQWdFaEI7QUF4Qkk7RUFDSSxPQUFBO0VBQ0Esa0NBMUNRO0FBb0VoQjs7QUF0QkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQXlCSjtBQXZCSTtFQUNJLG1CQUFBO0FBeUJSOztBQXJCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBd0JKOztBQXJCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXdCSjtBQXRCSTtFQUNJLGdCQUFBO0FBd0JSO0FBdEJJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBd0JSO0FBckJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUF1QlI7O0FBbkJBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FBc0JKOztBQW5CQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBc0JKOztBQW5CQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXNCSjs7QUFuQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQXNCSjtBQXBCSTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlEQUFBO0VBQ0Esa0JBQUE7QUFzQlI7QUFuQkk7RUFDSSxxQkFBQTtBQXFCUjs7QUFqQkE7RUFDSSxlQUFBO0FBb0JKOztBQWpCQTtFQUlJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFpQko7QUF0Qkk7RUFDSSxXQUFBO0FBd0JSOztBQWhCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQW1CUjtBQWpCUTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBR0Esa0JBQUE7QUFpQlo7QUFkUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFnQlo7QUFYSTtFQUNJLFdBQUE7QUFhUjs7QUFUQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBV0o7QUFUSTtFQUNJLGlCQUFBO0FBV1I7QUFSSTtFQUNJLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVVSO0FBUlE7RUFDSSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVVaOztBQUxBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQVFKOztBQUxBO0VBQ0ksb0JBQUE7QUFRSjs7QUFMQTtFQUNJLHFCQUFBO0FBUUo7O0FBTEE7RUFDSTtJQUNJLHVCQUFBO0VBUU47RUFMRTtJQUNJLHlCQUFBO0VBT047QUFDRjtBQUpBO0VBQ0k7SUFDSSxVQUFBO0VBTU47RUFKRTtJQUNJLFVBQUE7RUFNTjtBQUNGO0FBSEE7RUFDSTtJQUNJLFVBQUE7RUFLTjtFQUZFO0lBQ0ksVUFBQTtFQUlOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgLyogY29sb3Itc2NoZW1lOiBkYXJrOyAqL1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLFwiQHVzZSAncmVzZXQuY3NzJztcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRwcmltYXJ5LWRhcms6ICMxODFhMWI7XFxuJHNlY29uZGFyeS1kYXJrOiAjMmIyZjMxO1xcbiRkYXJrLWJsdWU6ICMwMDRkYWE7XFxuJHRleHQtd2hpdGU6ICNkOGQ0Y2Y7XFxuJGNhcHRpb24td2hpdGU6ICNlOGU2ZTM7XFxuJHByaW1hcnktZm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XFxuJGxheW91dC1ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4kbGF5b3V0LWJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuXFxuLyogPT09PT09PT09PSBFTkQgRGFyayBNb2RlIENvbG9ycyA9PT09PT09PT09ICovXFxuLyogVG8gdXNlIGJhY2tncm91bmQgaW1hZ2VzIHRob3VyZ2ggIHVybCwgdXNlIGl0IGluIEphdmFzY2lwcnQgdXNpbmcgXFxuaW1wb3J0IGFzc2V0IHN0YXRtZW50IGFuZCBlLnN0eWxlLmJhY2tncm91bmQgPSBgJHtpbXBvcnRlZEltYWdlfWAgKi9cXG4vLyBGaXggZm9yIGFuZHJpb2QgZGV2aWNlc1xcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiA1cztcXG59XFxuaHRtbCB7XFxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL25pZ2h0LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgYm9yZGVyOiAkbGF5b3V0LWJvcmRlcjtcXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGZsZXg6IDU7XFxuICAgICAgICBib3JkZXI6ICRsYXlvdXQtYm9yZGVyO1xcbiAgICB9XFxuXFxuICAgIC5mb3JlY2FzdCB7XFxuICAgICAgICBmbGV4OiA1O1xcbiAgICAgICAgYm9yZGVyOiAkbGF5b3V0LWJvcmRlcjtcXG4gICAgfVxcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIH1cXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuXFxuICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTByZW07XFxuICAgIH1cXG4gICAgLnRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxNzBweDtcXG4gICAgICAgIGxlZnQ6IDYwcHg7XFxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIH1cXG5cXG4gICAgLmRlZ3JlZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBib3R0b206IDEwMHB4O1xcbiAgICAgICAgbGVmdDogMTcwcHg7XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIG1heC13aWR0aDogMzBweDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnN1biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2U1NzA7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnJvdyB7XFxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAuc3ZnIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ljb25zL2RheS5zdmcnKTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gICAgfVxcblxcbiAgICAudGVtcCB7XFxuICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gNXM7XFxuICAgIH1cXG59XFxuXFxuLnRlbXAge1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5yZWZyZXNoIHtcXG4gICAgc3ZnIHtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICB9XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDglO1xcbiAgICB0b3A6IDgwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICAuaGVhZCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgICAgICAgICAvLyBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3NlYXJjaC1pY29uIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xcbiAgICAgICAgICAgIC8vIGNvbG9yOiBibGFjaztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBzdmcge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgIH1cXG59XFxuXFxuLmFkZC1wYWdlIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5jaXRpZXMge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcblxcbiAgICAgICAgLmNpdHkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjEsIDEzOCwgMC41MDcpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmVycm9yLWRpdiB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgbGVmdDogNjAlO1xcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDVzO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxufVxcblxcbi5mYWRlLWluIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnXG5cbmNvbnN0IGFwaUtleSA9ICc0YjFkM2IzODFkOTM3MGNiMTIwOWY1M2IyNWI0NmY4MydcbmNvbnN0IGFwaVVSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPWNpdHlOYW1lJmFwcGlkPSR7YXBpS2V5fWBcbmNvbnN0IGZvcmVjYXN0QXBpVVJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPWNpdHlOYW1lJmFwcGlkPSR7YXBpS2V5fWBcblxuY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBoZWFkZXIgPiBidXR0b24ucmVmcmVzaCcpXG5jb25zdCBtYWluV2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpXG5jb25zdCBtYWluV2VhdGhlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpXG5jb25zdCBmb3JlY2FzdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKVxuY29uc3QgbWFpbkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbmNvbnN0IGFkZENpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdib2R5ID4gaGVhZGVyID4gYnV0dG9uOm50aC1jaGlsZCgxKScsXG4pXG5cbmNvbnN0IGNpdHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0eUxpc3QnKSkgfHwgWydDYWlybyddXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0eUxpc3QnLCBKU09OLnN0cmluZ2lmeShjaXR5TGlzdCkpXG5cbmNvbnN0IGFkZFBhZ2VIVE1MID0gYFxuPGRpdiBjbGFzcz1cImFkZC1wYWdlXCI+XG48YnV0dG9uIGlkPVwiYmFjay1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIGQ9XCJNMjAsMTFWMTNIOEwxMy41LDE4LjVMMTIuMDgsMTkuOTJMNC4xNiwxMkwxMi4wOCw0LjA4TDEzLjUsNS41TDgsMTFIMjBaXCJcbiAgICAgICAgLz5cbiAgICA8L3N2Zz5cbjwvYnV0dG9uPlxuPGgxPkFkZCBhIENpdHk8L2gxPlxuPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiAvPlxuICAgICAgICA8c3ZnIGlkPVwic2VhcmNoLWljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOS41LDNBNi41LDYuNSAwIDAsMSAxNiw5LjVDMTYsMTEuMTEgMTUuNDEsMTIuNTkgMTQuNDQsMTMuNzNMMTQuNzEsMTRIMTUuNUwyMC41LDE5TDE5LDIwLjVMMTQsMTUuNVYxNC43MUwxMy43MywxNC40NEMxMi41OSwxNS40MSAxMS4xMSwxNiA5LjUsMTZBNi41LDYuNSAwIDAsMSAzLDkuNUE2LjUsNi41IDAgMCwxIDkuNSwzTTkuNSw1QzcsNSA1LDcgNSw5LjVDNSwxMiA3LDE0IDkuNSwxNEMxMiwxNCAxNCwxMiAxNCw5LjVDMTQsNyAxMiw1IDkuNSw1WlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbjwvZm9ybT5cbjxkaXYgY2xhc3M9XCJjaXRpZXNcIj5cbjwvZGl2PlxuPC9kaXY+XG5gXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHlOYW1lKSB7XG4gICAgbGV0IHJlcXVlc3RVcmwgPSBhcGlVUkwucmVwbGFjZSgnY2l0eU5hbWUnLCBjaXR5TmFtZSlcbiAgICByZXF1ZXN0VXJsICs9ICcmdW5pdHM9bWV0cmljJ1xuXG4gICAgcmV0dXJuIGF3YWl0IChhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKSkuanNvbigpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldFRvZGF5V2VhdGhlclVJKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgdGVtcERhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShjaXR5TmFtZSlcbiAgICBjb25zdCB0b2RheU1pbk1heEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnYm9keSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSkgPiBwLnRlbXAnLFxuICAgIClcbiAgICBjb25zdCB0b2RheU1pbk1heCA9IGAke01hdGgucm91bmQodGVtcERhdGEubWFpbi50ZW1wX21heCl9wrAgLyAke1xuICAgICAgICBNYXRoLnJvdW5kKHRlbXBEYXRhLm1haW4udGVtcF9taW4pICsgM1xuICAgIH3CsGBcbiAgICBjb25zdCBtYWluVGVtcGVyYXR1cmVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDInKVxuICAgIGNvbnN0IG1haW5UZW1wZXJhdHVyZVRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ2JvZHkgPiBtYWluID4gZGl2ID4gcC50ZXh0JyxcbiAgICApXG4gICAgY29uc3QgY2l0eU5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKVxuICAgIG1haW5UZW1wZXJhdHVyZUVsZW1lbnQudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHRlbXBEYXRhLm1haW4udGVtcClcbiAgICBtYWluVGVtcGVyYXR1cmVUZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRlbXBEYXRhLndlYXRoZXJbMF0ubWFpblxuICAgIGNpdHlOYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGNpdHlOYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBjaXR5TmFtZS5zbGljZSgxKVxuICAgIHRvZGF5TWluTWF4RWxlbWVudC50ZXh0Q29udGVudCA9IHRvZGF5TWluTWF4XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShjaXR5TmFtZSkge1xuICAgIGxldCByZXF1ZXN0VXJsID0gZm9yZWNhc3RBcGlVUmwucmVwbGFjZSgnY2l0eU5hbWUnLCBjaXR5TmFtZSlcbiAgICByZXF1ZXN0VXJsICs9ICcmdW5pdHM9bWV0cmljJ1xuICAgIHJldHVybiBhd2FpdCAoYXdhaXQgZmV0Y2gocmVxdWVzdFVybCkpLmpzb24oKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdERhdGFDbGVhbihjaXR5TmFtZSkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IG5ldyBNYXAoKVxuICAgIGNvbnN0IHRlbXBEYXRhID0gYXdhaXQgZ2V0Rm9yZWNhc3REYXRhKGNpdHlOYW1lKVxuICAgIGZvciAoY29uc3QgZGF5IG9mIHRlbXBEYXRhLmxpc3QpIHtcbiAgICAgICAgLy8gY29udmVydCBmcm9tIHNlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZGF5LmR0ICogMTAwMClcbiAgICAgICAgbGV0IGRheU51bSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgICAgIGlmICghZm9yZWNhc3REYXRhLmdldChkYXlOdW0pKSB7XG4gICAgICAgICAgICBmb3JlY2FzdERhdGEuc2V0KGRheU51bSwge1xuICAgICAgICAgICAgICAgIG1pblRlbXA6IGRheS5tYWluLnRlbXBfbWluLFxuICAgICAgICAgICAgICAgIG1heFRlbXA6IGRheS5tYWluLnRlbXBfbWF4LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgbWluaW11bSB0ZW1wIGFuZCBtYXggdGVtcCBhbW9uZyB0aGUgcmVzcG9uc2UgbGlzdFxuICAgICAgICAgICAgaWYgKGZvcmVjYXN0RGF0YS5nZXQoZGF5TnVtKS5taW5UZW1wID4gZGF5Lm1haW4udGVtcF9taW4pIHtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERhdGEuZ2V0KGRheU51bSkubWluVGVtcCA9IGRheS5tYWluLnRlbXBfbWluXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3JlY2FzdERhdGEuZ2V0KGRheU51bSkubWF4VGVtcCA8IGRheS5tYWluLnRlbXBfbWF4KSB7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXRhLmdldChkYXlOdW0pLm1heFRlbXAgPSBkYXkubWFpbi50ZW1wX21heFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcmVjYXN0RGF0YVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRGb3JlY2FzdERhdGFVSShjaXR5TmFtZSkge1xuICAgIGNvbnN0IHRvZGF5TWluTWF4RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdib2R5ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKSA+IHAudGVtcCcsXG4gICAgKVxuICAgIGNvbnN0IHRvbW9ycm93TWluTWF4RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdib2R5ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSA+IHAudGVtcCcsXG4gICAgKVxuICAgIGNvbnN0IGFmdGVyVG9tb3Jyb3dNaW5NYXhFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ2JvZHkgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDMpID4gcC50ZW1wJyxcbiAgICApXG5cbiAgICBjb25zdCBhZnRlclRvbW9ycm93TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnYm9keSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMykgPiBwLmRheScsXG4gICAgKVxuXG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgZ2V0Rm9yZWNhc3REYXRhQ2xlYW4oY2l0eU5hbWUpXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgbGV0IGFmdGVyVG9tb3Jyb3dEYXRlTmFtZSA9IG5ldyBEYXRlKClcbiAgICBhZnRlclRvbW9ycm93RGF0ZU5hbWUuc2V0RGF0ZShhZnRlclRvbW9ycm93RGF0ZU5hbWUuZ2V0RGF0ZSgpICsgMilcbiAgICBhZnRlclRvbW9ycm93RGF0ZU5hbWUgPSBhZnRlclRvbW9ycm93RGF0ZU5hbWUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi11cycsIHtcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIH0pXG5cbiAgICBhZnRlclRvbW9ycm93TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBhZnRlclRvbW9ycm93RGF0ZU5hbWVcblxuICAgIGZvcmVjYXN0RGF0YS5mb3JFYWNoKCh2YWx1ZSwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBtaW5NYXhXZWF0aGVyID0gYCR7TWF0aC5yb3VuZCh2YWx1ZS5tYXhUZW1wKX3CsCAvICR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIHZhbHVlLm1pblRlbXAsXG4gICAgICAgICl9wrBgXG4gICAgICAgIHN3aXRjaCAoZGF5IC0gdG9kYXkuZ2V0RGF0ZSgpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdG9kYXlNaW5NYXhFbGVtZW50LnRleHRDb250ZW50ID0gbWluTWF4V2VhdGhlclxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdG9tb3Jyb3dNaW5NYXhFbGVtZW50LnRleHRDb250ZW50ID0gbWluTWF4V2VhdGhlclxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgYWZ0ZXJUb21vcnJvd01pbk1heEVsZW1lbnQudGV4dENvbnRlbnQgPSBtaW5NYXhXZWF0aGVyXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbnJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0VG9kYXlXZWF0aGVyVUkoJ0NhaXJvJylcbiAgICBzZXRGb3JlY2FzdERhdGFVSSgnQ2Fpcm8nKVxuICAgIHJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJylcbiAgICAvLyBtYWluV2VhdGhlckRpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicpXG4gICAgLy8gbWFpbldlYXRoZXJUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKVxuICAgIG1haW5BcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKVxuICAgIGZvcmVjYXN0QXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmcmVzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKVxuICAgICAgICAvLyBtYWluV2VhdGhlckRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpXG4gICAgICAgIC8vIG1haW5XZWF0aGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJylcbiAgICAgICAgbWFpbkFyZWEuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpXG4gICAgICAgIGZvcmVjYXN0QXJlYS5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJylcbiAgICB9LCAxMDApXG59KVxuXG5mdW5jdGlvbiBzd2l0Y2hQYWdlKHBhZ2UpIHtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhZ2UpXG4gICAgaWYgKHBhZ2UgPT09ICdhZGRwYWdlJykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFjay1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaFBhZ2UoJ2hvbWVwYWdlJylcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgY2l0aWVzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXRpZXMnKVxuXG4gICAgICAgIGZvciAoY29uc3QgY2l0eSBvZiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5TGlzdCcpKSkge1xuICAgICAgICAgICAgY2l0aWVzQXJlYS5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpdHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHtjaXR5WzBdLnRvVXBwZXJDYXNlKCkgKyBjaXR5LnNsaWNlKDEpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaXRpZXNEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpdHknKVxuICAgICAgICBjaXRpZXNEaXZzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjaXR5TmFtZVxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjaXR5TmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eU5hbWUgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaFBhZ2UoJ2hvbWVwYWdlJylcbiAgICAgICAgICAgICAgICBzZXRUb2RheVdlYXRoZXJVSShjaXR5TmFtZSkuY2F0Y2goKGVycm9yKSA9PiBkaXNwbGF5RXJyb3IoKSlcbiAgICAgICAgICAgICAgICBzZXRGb3JlY2FzdERhdGFVSShjaXR5TmFtZSkuY2F0Y2goKGVycm9yKSA9PiBkaXNwbGF5RXJyb3IoKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICAgICAgICAgIGlmICghY2l0eUxpc3QuaW5jbHVkZXMoY2l0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY2l0eUxpc3QucHVzaChjaXR5TmFtZSlcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0eUxpc3QnLCBKU09OLnN0cmluZ2lmeShjaXR5TGlzdCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2hQYWdlKCdob21lcGFnZScpXG4gICAgICAgICAgICBzZXRUb2RheVdlYXRoZXJVSShjaXR5TmFtZSkuY2F0Y2goKGVycm9yKSA9PiBkaXNwbGF5RXJyb3IoKSlcbiAgICAgICAgICAgIHNldEZvcmVjYXN0RGF0YVVJKGNpdHlOYW1lKS5jYXRjaCgoZXJyb3IpID0+IGRpc3BsYXlFcnJvcigpKVxuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ2hvbWVwYWdlJykge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBoZWFkZXIgPiBidXR0b246bnRoLWNoaWxkKDEpJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2hQYWdlKCdhZGRwYWdlJylcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2Vycm9yLWRpdicpXG4gICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSAnTm90IGEgdmFsaWQgY2l0eSBuYW1lISdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlcnJvckRpdilcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlcnJvckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfSwgNTAwMClcbn1cblxuYXdhaXQgc2V0VG9kYXlXZWF0aGVyVUkoJ0NhaXJvJylcbmF3YWl0IHNldEZvcmVjYXN0RGF0YVVJKCdDYWlybycpXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9tZXBhZ2UnLCBkb2N1bWVudC5ib2R5LmlubmVySFRNTClcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZGRwYWdlJywgYWRkUGFnZUhUTUwpXG5cbmFkZENpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3dpdGNoUGFnZSgnYWRkcGFnZScpXG59KVxuXG4vLyBzd2l0Y2hQYWdlKCdhZGRwYWdlJylcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiAhcXVldWUuZCkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAxKTtcblx0aWYocXVldWUpIHF1ZXVlLm1vZHVsZUlkID0gbW9kdWxlLmlkO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdHByb21pc2UubW9kdWxlSWQgPSBtb2R1bGUuaWQ7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmICh0eXBlb2YgaW1wb3J0Lm1ldGEudXJsID09PSBcInN0cmluZ1wiKSBzY3JpcHRVcmwgPSBpbXBvcnQubWV0YS51cmxcbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
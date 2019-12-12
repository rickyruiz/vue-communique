module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06f0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueNotificationListItem_vue_vue_type_style_index_0_id_51cf36ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("208d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueNotificationListItem_vue_vue_type_style_index_0_id_51cf36ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueNotificationListItem_vue_vue_type_style_index_0_id_51cf36ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueNotificationListItem_vue_vue_type_style_index_0_id_51cf36ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "208d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8c96");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("27974874", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8c96":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".CommuniqueNotificationListItem[data-v-51cf36ad]{pointer-events:auto;-webkit-transition-property:all;transition-property:all}", ""]);


/***/ }),

/***/ "ae7f":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".CommuniqueNotificationList[data-v-70f41ae1]{position:relative;display:grid;grid-auto-flow:row;grid-gap:1rem;list-style-type:none;padding:0;margin:0}.CommuniqueNotificationList--top-center[data-v-70f41ae1],.CommuniqueNotificationList--top-left[data-v-70f41ae1],.CommuniqueNotificationList--top-right[data-v-70f41ae1]{-ms-flex-line-pack:start;align-content:start}.CommuniqueNotificationList--center[data-v-70f41ae1],.CommuniqueNotificationList--center-left[data-v-70f41ae1],.CommuniqueNotificationList--center-right[data-v-70f41ae1]{-ms-flex-line-pack:center;align-content:center}.CommuniqueNotificationList--bottom-center[data-v-70f41ae1],.CommuniqueNotificationList--bottom-left[data-v-70f41ae1],.CommuniqueNotificationList--bottom-right[data-v-70f41ae1]{-ms-flex-line-pack:end;align-content:end}", ""]);


/***/ }),

/***/ "ba52":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ae7f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3e3b5e02", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c992":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueNotificationList_vue_vue_type_style_index_0_id_70f41ae1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ba52");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueNotificationList_vue_vue_type_style_index_0_id_70f41ae1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueNotificationList_vue_vue_type_style_index_0_id_70f41ae1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueNotificationList_vue_vue_type_style_index_0_id_70f41ae1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d643":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".CommuniqueContainer[data-v-5d7555c4]{pointer-events:none;position:fixed;top:0;left:0;width:100%;height:100%;display:grid;grid-template:repeat(3,33.33333%)/repeat(3,1fr)}", ""]);


/***/ }),

/***/ "d876":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueContainer_vue_vue_type_style_index_0_id_5d7555c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ff69");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueContainer_vue_vue_type_style_index_0_id_5d7555c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueContainer_vue_vue_type_style_index_0_id_5d7555c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommuniqueContainer_vue_vue_type_style_index_0_id_5d7555c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/plugin/context.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *  @summary A function that creates a `Communique` context for Vue components.
 *
 * @param {Vue} vm - A Vue component instance
 * @param {boolean|undefined} inject - A flag that indicates if the plugin should inject a `Communique` instance
 * to every descendant component or not.
 */
/* harmony default export */ var context = (function (vm, inject) {
  var componentOptions = vm.$options;
  var Communique = componentOptions.communique;
  var contextKey = '$communique'; // If a Communique instance is present in the root component,
  // serve as a dependency injector for all its descendants.

  if (Communique) {
    // Provider
    componentOptions.provide = _objectSpread(_defineProperty({}, contextKey, Communique), componentOptions.provide);
  } else if (componentOptions.parent && inject) {
    // Consumer
    if (Array.isArray(componentOptions.inject)) {
      // Inject Communique instance
      componentOptions.inject.push(contextKey);
    } else {
      componentOptions.inject = _objectSpread(_defineProperty({}, contextKey, {
        from: contextKey
      }), componentOptions.inject);
    }
  }
});
// CONCATENATED MODULE: ./src/plugin/mixin.ts

/* harmony default export */ var mixin = (function (pluginOptions) {
  return {
    beforeCreate: function beforeCreate() {
      context(this, pluginOptions.inject);
    }
  };
});
// CONCATENATED MODULE: ./src/plugin/install.ts


var VueWithPlugin;
function install(_Vue, options) {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a && _Vue === VueWithPlugin) {
    if (false) {}

    return;
  }

  options = options || {
    // Default `CommuniquePluginOptions`
    inject: true
  };
  VueWithPlugin = _Vue;
  VueWithPlugin.mixin(mixin(options));
}
// CONCATENATED MODULE: ./src/plugin/utils/dom.ts
var inBrowser = typeof window !== 'undefined';
// CONCATENATED MODULE: ./src/plugin/utils/warn.ts
function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-communique] ".concat(message));
  }
}
function warn(condition, message) {
  if (false) {}
}
// CONCATENATED MODULE: ./src/plugin/communique.ts
function communique_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function communique_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { communique_ownKeys(Object(source), true).forEach(function (key) { communique_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { communique_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function communique_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var CommuniquePosition;

(function (CommuniquePosition) {
  CommuniquePosition["TopLeft"] = "top-left";
  CommuniquePosition["TopCenter"] = "top-center";
  CommuniquePosition["TopRight"] = "top-right";
  CommuniquePosition["CenterLeft"] = "center-left";
  CommuniquePosition["Center"] = "center";
  CommuniquePosition["CenterRight"] = "center-right";
  CommuniquePosition["BottomLeft"] = "bottom-left";
  CommuniquePosition["BottomCenter"] = "bottom-center";
  CommuniquePosition["BottomRight"] = "bottom-right";
})(CommuniquePosition || (CommuniquePosition = {}));

var communique_CommuniqueNotification =
/*#__PURE__*/
function () {
  function CommuniqueNotification(options) {
    _classCallCheck(this, CommuniqueNotification);

    this.$attrs = options.$attrs;
    this.delay = options.delay && options.delay > 0 ? options.delay : 0;
    this.transition = options.transition;
    this.position = options.position || CommuniquePosition.BottomLeft;
    this.title = options.title;
    this.message = options.message;
    this.icon = options.icon;
    this.duration = options.duration && options.duration > 0 ? options.duration : undefined;
    this.variant = options.variant;
    this.styles = options.styles;
    this.component = options.component;
    warn(options.component, "notification component is undefined.\n\nThere are three ways to render a notification component.\n\nOption 1, using the notification 'component' option:\n\n// @/components/SomeComponent.vue\nconst notification = await this.$communique.dispatch({\n  title: 'Some notification',\n  message: 'Some notification message',\n  component: () =>\n    import(\n      /* webpackChunkName: 'BaseNotification.vue' */\n      '@/notification/components/BaseNotification.vue'\n    ),\n})\n\nOption 2, using the variant 'component' option:\n\n// @/src/notification/variants.(js|ts)\nexport default {\n  success: {\n    component: () =>\n      import(\n        /* webpackChunkName: 'BaseNotification.vue' */\n        '@/notification/components/BaseNotification.vue'\n      ),\n  },\n}\n\nOption 3, using the Communique instance defaults 'component' option:\n\n// @/src/notification/index.(js|ts)\nconst communique = new Communique({\n  defaults: {\n    component: () =>\n      import(\n        /* webpackChunkName: 'BaseNotification.vue' */\n        '@/notification/components/BaseNotification.vue'\n      ),\n  },\n})\n      ");
  }

  _createClass(CommuniqueNotification, [{
    key: "assignUniqueId",
    value: function assignUniqueId(id) {
      this.id = id;
    }
  }, {
    key: "assignTimeoutId",
    value: function assignTimeoutId(timeoutId) {
      this.timeoutId = timeoutId;
    }
  }]);

  return CommuniqueNotification;
}();

var communique_Communique =
/*#__PURE__*/
function () {
  function Communique() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Communique);

    // Auto install if it is not done yet and `window` has `Vue`.
    // To allow users to avoid auto-installation in some cases,
    // this code should be placed here.
    if (!VueWithPlugin && inBrowser && window.Vue) {
      Communique.install(window.Vue);
    }

    if (false) {}

    this.components = options.components || [];
    this.defaults = options.defaults;
    this.variants = options.variants;
    this.store = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.observable({
      queue: []
    });
  }

  _createClass(Communique, [{
    key: "getNormalizedNotificationOptions",
    value: function getNormalizedNotificationOptions(notificationOptions) {
      var normalizedOptions = communique_objectSpread({}, this.defaults, {}, notificationOptions);

      var _normalizedOptions = normalizedOptions,
          component = _normalizedOptions.component,
          variant = _normalizedOptions.variant; // If the component notification option is a string,
      // look for the component in the components config

      if (component && typeof component === 'string') {
        var componentConfig = this.components.find(function (_ref) {
          var name = _ref.name;
          return name === component;
        });
        warn(Boolean(componentConfig), "invalid component: ".concat(component, ".\nPlease use one of the following components: ").concat(this.components.map(function (_ref2) {
          var name = _ref2.name;
          return name;
        }), "."));
        normalizedOptions.component = componentConfig && componentConfig.component;
      } // If there is a variant config,
      // and the notification has a variant,
      // copy the variant options to the notification options


      if (this.variants && variant) {
        var variantOptions = this.variants[variant];

        if (variantOptions) {
          normalizedOptions = communique_objectSpread({}, variantOptions, {}, normalizedOptions);
        }
      }

      return normalizedOptions;
    }
  }, {
    key: "dispatch",
    value: function dispatch(notification) {
      return this.notifier(notification);
    }
  }, {
    key: "notifier",
    value: function notifier(notificationOptions) {
      var _this = this;

      var communiqueNotification = new communique_CommuniqueNotification(this.getNormalizedNotificationOptions(notificationOptions));
      return new Promise(function (resolve) {
        window.setTimeout(function () {
          _this.addToQueue(_this.setTimeoutIfDefined(communiqueNotification));

          resolve(communiqueNotification);
        }, communiqueNotification.delay);
      });
    }
  }, {
    key: "setTimeoutIfDefined",
    value: function setTimeoutIfDefined(notification) {
      var _this2 = this;

      if (notification.duration) {
        notification.assignTimeoutId(window.setTimeout(function () {
          window.clearTimeout(notification.timeoutId);

          _this2.removeFromQueue(notification);
        }, notification.duration));
      }

      return notification;
    }
  }, {
    key: "assignNotificationUniqueId",
    value: function assignNotificationUniqueId(notification) {
      notification.assignUniqueId(Communique.id += 1);
      return notification;
    }
  }, {
    key: "addToQueue",
    value: function addToQueue(notification) {
      this.queue.push(this.assignNotificationUniqueId(notification));
      return Promise.resolve(notification);
    }
  }, {
    key: "removeFromQueue",
    value: function removeFromQueue(notification) {
      var index = this.queue.findIndex(function (_ref3) {
        var id = _ref3.id;
        return id === notification.id;
      });

      if (index !== -1) {
        this.queue.splice(index, 1);

        if (notification.timeoutId) {
          window.clearTimeout(notification.timeoutId);
        }
      }

      return Promise.resolve(notification);
    }
  }, {
    key: "queue",
    get: function get() {
      return this.store.queue;
    }
  }, {
    key: "componentNames",
    get: function get() {
      return this.components ? this.components.map(function (_ref4) {
        var name = _ref4.name;
        return name;
      }) : [];
    }
  }, {
    key: "variantNames",
    get: function get() {
      return Object.keys(this.variants || {});
    }
  }, {
    key: "positionNames",
    get: function get() {
      return Object.values(CommuniquePosition);
    }
  }]);

  return Communique;
}();


communique_Communique.id = 0;
communique_Communique.install = install;
communique_Communique.version = "0.0.14";
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61e57f2a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/plugin/components/CommuniqueContainer.vue?vue&type=template&id=5d7555c4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"Component",staticClass:"CommuniqueContainer"},_vm._l((_vm.lists),function(list,position){return _c('CommuniqueNotificationList',{key:position,attrs:{"notifications":list,"position":position}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/plugin/components/CommuniqueContainer.vue?vue&type=template&id=5d7555c4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61e57f2a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/plugin/components/CommuniqueNotificationList.vue?vue&type=template&id=70f41ae1&scoped=true&
var CommuniqueNotificationListvue_type_template_id_70f41ae1_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('TransitionGroup',{class:_vm.computedClass,attrs:{"tag":_vm.tag,"data-position":_vm.position,"name":"CommuniqueNotificationList"}},_vm._l((_vm.notifications),function(notification,index){return _c('CommuniqueNotificationListItem',{key:notification.id,style:(_vm.notificationStyle(index)),attrs:{"notification":notification}})}),1)}
var CommuniqueNotificationListvue_type_template_id_70f41ae1_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/plugin/components/CommuniqueNotificationList.vue?vue&type=template&id=70f41ae1&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61e57f2a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/plugin/components/CommuniqueNotificationListItem.vue?vue&type=template&id=51cf36ad&scoped=true&
var CommuniqueNotificationListItemvue_type_template_id_51cf36ad_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"Component",staticClass:"CommuniqueNotificationListItem",attrs:{"data-variant":_vm.notification.variant,"role":"status","aria-live":"polite","aria-atomic":"false"}},[(_vm.isNotificationVisible)?_c(_vm.notification.component,_vm._b({tag:"Component",attrs:{"notification":_vm.notification},on:{"close":_vm.close,"hook:destroyed":_vm.remove}},'Component',_vm.notification.$attrs,false)):_vm._e()],1)}
var CommuniqueNotificationListItemvue_type_template_id_51cf36ad_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/plugin/components/CommuniqueNotificationListItem.vue?vue&type=template&id=51cf36ad&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/plugin/components/CommuniqueNotificationListItem.vue?vue&type=script&lang=ts&

/* harmony default export */ var CommuniqueNotificationListItemvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: 'CommuniqueNotificationListItem',
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    notification: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      isNotificationVisible: true
    };
  },
  methods: {
    close: function close() {
      this.isNotificationVisible = false;
    },
    remove: function remove() {
      this.$communique.removeFromQueue(this.notification);
    }
  }
}));
// CONCATENATED MODULE: ./src/plugin/components/CommuniqueNotificationListItem.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CommuniqueNotificationListItemvue_type_script_lang_ts_ = (CommuniqueNotificationListItemvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/plugin/components/CommuniqueNotificationListItem.vue?vue&type=style&index=0&id=51cf36ad&scoped=true&lang=css&
var CommuniqueNotificationListItemvue_type_style_index_0_id_51cf36ad_scoped_true_lang_css_ = __webpack_require__("06f0");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/plugin/components/CommuniqueNotificationListItem.vue






/* normalize component */

var CommuniqueNotificationListItem_component = normalizeComponent(
  components_CommuniqueNotificationListItemvue_type_script_lang_ts_,
  CommuniqueNotificationListItemvue_type_template_id_51cf36ad_scoped_true_render,
  CommuniqueNotificationListItemvue_type_template_id_51cf36ad_scoped_true_staticRenderFns,
  false,
  null,
  "51cf36ad",
  null
  
)

/* harmony default export */ var CommuniqueNotificationListItem = (CommuniqueNotificationListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/plugin/components/CommuniqueNotificationList.vue?vue&type=script&lang=ts&
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ var CommuniqueNotificationListvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: 'CommuniqueNotificationList',
  components: {
    CommuniqueNotificationListItem: CommuniqueNotificationListItem
  },
  props: {
    tag: {
      type: String,
      default: 'ul'
    },
    notifications: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    order: function order() {
      var _this$position$split = this.position.split('-'),
          _this$position$split2 = _slicedToArray(_this$position$split, 1),
          row = _this$position$split2[0];

      var orders = {
        top: -1,
        center: -1,
        bottom: 1
      };
      return orders[row];
    },
    computedClass: function computedClass() {
      return ['CommuniqueNotificationList', "CommuniqueNotificationList--".concat(this.position)];
    },
    notificationStyle: function notificationStyle() {
      var _this = this;

      return function (index) {
        return {
          order: "".concat(index * _this.order)
        };
      };
    }
  }
}));
// CONCATENATED MODULE: ./src/plugin/components/CommuniqueNotificationList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CommuniqueNotificationListvue_type_script_lang_ts_ = (CommuniqueNotificationListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/plugin/components/CommuniqueNotificationList.vue?vue&type=style&index=0&id=70f41ae1&scoped=true&lang=css&
var CommuniqueNotificationListvue_type_style_index_0_id_70f41ae1_scoped_true_lang_css_ = __webpack_require__("c992");

// CONCATENATED MODULE: ./src/plugin/components/CommuniqueNotificationList.vue






/* normalize component */

var CommuniqueNotificationList_component = normalizeComponent(
  components_CommuniqueNotificationListvue_type_script_lang_ts_,
  CommuniqueNotificationListvue_type_template_id_70f41ae1_scoped_true_render,
  CommuniqueNotificationListvue_type_template_id_70f41ae1_scoped_true_staticRenderFns,
  false,
  null,
  "70f41ae1",
  null
  
)

/* harmony default export */ var CommuniqueNotificationList = (CommuniqueNotificationList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/plugin/components/CommuniqueContainer.vue?vue&type=script&lang=ts&



/* harmony default export */ var CommuniqueContainervue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: 'CommuniqueContainer',
  components: {
    CommuniqueNotificationList: CommuniqueNotificationList
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    lists: function lists() {
      var result = {}; // Create a list for each position

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.$communique.positionNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var position = _step.value;
          result[position] = [];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.$communique.queue[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var notification = _step2.value;
          var _position = notification.position;
          if (!_position) continue;
          var list = result[_position];
          warn(list, "invalid CommuniqueNotification position: ".concat(notification.position, ".\nValid positions: ").concat(this.$communique.positionNames, "."));
          if (!list) continue;
          list.push(notification);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return result;
    }
  }
}));
// CONCATENATED MODULE: ./src/plugin/components/CommuniqueContainer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CommuniqueContainervue_type_script_lang_ts_ = (CommuniqueContainervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/plugin/components/CommuniqueContainer.vue?vue&type=style&index=0&id=5d7555c4&scoped=true&lang=css&
var CommuniqueContainervue_type_style_index_0_id_5d7555c4_scoped_true_lang_css_ = __webpack_require__("d876");

// CONCATENATED MODULE: ./src/plugin/components/CommuniqueContainer.vue






/* normalize component */

var CommuniqueContainer_component = normalizeComponent(
  components_CommuniqueContainervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "5d7555c4",
  null
  
)

/* harmony default export */ var CommuniqueContainer = (CommuniqueContainer_component.exports);
// CONCATENATED MODULE: ./src/plugin/index.ts
 //===
// Components
//===



/* harmony default export */ var src_plugin = (communique_Communique);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport CommuniqueContainer */__webpack_require__.d(__webpack_exports__, "CommuniqueContainer", function() { return CommuniqueContainer; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_plugin);



/***/ }),

/***/ "ff69":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d643");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("653b6f36", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ });
//# sourceMappingURL=vue-communique.common.js.map
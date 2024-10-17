"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkuntitled"] = self["webpackChunkuntitled"] || []).push([["src_js_helpers_pagesWidget_js"],{

/***/ "./src/js/helpers/pagesWidget.js":
/*!***************************************!*\
  !*** ./src/js/helpers/pagesWidget.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pagesWidget = (pages = []) => {\n    const widgetTail = document.createElement('div')\n    const widgetList = document.createElement('div')\n    const widgetItems = pages.map((page) => {\n        const link = document.createElement('a')\n\n        return Object.assign(link, {\n            href: `/${page}.html`,\n            textContent: page\n        })\n    })\n\n    Object.assign(widgetTail.style, {\n        position: 'absolute',\n        right: '0',\n        left: '100%',\n        top: '0',\n        width: '30px',\n        height: '30px',\n        background: 'rgba(0, 0, 0, .8)',\n        backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC')`,\n        backgroundRepeat: 'no-repeat',\n        backgroundPosition: 'center',\n        borderRadius: '0 0 8px 0'\n\n    })\n\n    widgetList.classList.add('pages-widget')\n    widgetList.appendChild(widgetTail)\n\n    widgetList.append(Object.assign(document.createElement('a'), {\n        href: '/ui-kit.html',\n        textContent: 'UI Kit'\n    }))\n\n    widgetList.append(document.createElement('hr'))\n\n    widgetItems.forEach((a) => widgetList.append(a))\n\n    widgetList.querySelectorAll('a, hr').forEach((item) => {\n        Object.assign(item.style, {\n            color: '#fff',\n            textDecoration: 'none',\n            margin: '0'\n        })\n    })\n\n    Object.assign(widgetList.style, {\n        position: 'fixed',\n        top: 0,\n        left: 0,\n        zIndex: '100',\n        display: 'flex',\n        flexDirection: 'column',\n        gap: '15px',\n        background: 'rgba(0, 0, 0, .8)',\n        padding: '20px',\n        borderRadius: '0 0 8px 0',\n        transform: 'translateX(-100%)',\n        transition: 'transform .3s ease'\n    })\n\n    widgetList.onmouseover = () => widgetList.style.transform = 'translateX(0)'\n    widgetList.onmouseout = () => widgetList.style.transform = 'translateX(-100%)'\n\n    document.body.append(widgetList)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pagesWidget);\n\n\n//# sourceURL=webpack://untitled/./src/js/helpers/pagesWidget.js?");

/***/ })

}]);
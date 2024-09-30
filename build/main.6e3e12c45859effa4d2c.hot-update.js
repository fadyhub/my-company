"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecompany"]("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _laylazi_bootstrap_rtl_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @laylazi/bootstrap-rtl/dist/js/bootstrap.min.js */ \"./node_modules/@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js\");\n/* harmony import */ var _laylazi_bootstrap_rtl_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laylazi_bootstrap_rtl_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _laylazi_bootstrap_rtl_dist_css_bootstrap_rtl_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css */ \"./node_modules/@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css\");\n/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery/dist/jquery.min.js */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ \"./node_modules/@fortawesome/fontawesome-free/js/all.min.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(function(){\r\n    $('.thumbnail2').hover(function(){\r\n        $(this).find('.project-category').hide();\r\n        $(this).find('.caption2').slideDown(250);\r\n    },\r\n    function(){\r\n        $(this).find('.caption2').slideUp(250);\r\n        $(this).find('.project-category').show();\r\n    }\r\n    );\r\n    let modalId = $('#image-gallery');\r\n\r\n    loadGallery(true, 'a.thumbnail');\r\n\r\n    //This function disables buttons when needed\r\n    function disableButtons(counter_max, counter_current) {\r\n      $('#show-previous-image, #show-next-image')\r\n        .show();\r\n      if (counter_max === counter_current) {\r\n        $('#show-next-image')\r\n          .hide();\r\n      } else if (counter_current === 1) {\r\n        $('#show-previous-image')\r\n          .hide();\r\n      }\r\n    }\r\n\r\n    function loadGallery(setIDs, setClickAttr) {\r\n      let current_image,\r\n        selector,\r\n        counter = 0;\r\n\r\n      $('#show-next-image, #show-previous-image')\r\n        .click(function () {\r\n          if ($(this)\r\n            .attr('id') === 'show-previous-image') {\r\n            current_image--;\r\n          } else {\r\n            current_image++;\r\n          }\r\n\r\n          selector = $('[data-image-id=\"' + current_image + '\"]');\r\n          updateGallery(selector);\r\n        });\r\n\r\n      function updateGallery(selector) {\r\n        let $sel = selector;\r\n        current_image = $sel.data('image-id');\r\n        $('#image-gallery-title')\r\n          .text($sel.data('title'));\r\n        $('#image-gallery-image')\r\n          .attr('src', $sel.data('image'));\r\n        disableButtons(counter, $sel.data('image-id'));\r\n      }\r\n\r\n      if (setIDs == true) {\r\n        $('[data-image-id]')\r\n          .each(function () {\r\n            counter++;\r\n            $(this)\r\n              .attr('data-image-id', counter);\r\n          });\r\n      }\r\n      $(setClickAttr)\r\n        .on('click', function () {\r\n          updateGallery($(this));\r\n        });\r\n    }\r\n});\r\n\r\nvar date = new Date();\r\nvar year = date.getFullYear();\r\ndocument.getElementById(\"date\").innerHTML = year;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://company/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("af1ef49bb03f0d125b7e")
/******/ })();
/******/ 
/******/ }
);
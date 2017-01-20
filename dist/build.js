/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import _default5 from 'element-ui/lib/theme-default/select.css';
	import _default4 from 'element-ui/lib/select';
	import _default3 from 'element-ui/lib/theme-default/button.css';
	import _default2 from 'element-ui/lib/theme-default/base.css';
	import _default from 'element-ui/lib/button';
	/* 
	 * To change this license header, choose License Headers in Project Properties.
	 * To change this template file, choose Tools | Templates
	 * and open the template in the editor.
	 */
	import Vue from 'vue';

	import 'element-ui/lib/theme-default/index.css';
	import App from './App.vue';

	Vue.component(_default.name, _default);
	Vue.component(_default4.name, _default4);
	/* 或写为
	 * Vue.use(Button)
	 * Vue.use(Select)
	 */

	new Vue({
	  el: '#app',
	  render: function render(h) {
	    return h(App);
	  }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map
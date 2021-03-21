/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (() => {

jQuery(function($) {
    var $bodyEl = $('body'),
        $sidedrawerEl = $('#sidedrawer');
  
  
    function showSidedrawer() {
      // show overlay
      var options = {
        onclose: function() {
          $sidedrawerEl
            .removeClass('active')
            .appendTo(document.body);
        }
      };
  
      var $overlayEl = $(mui.overlay('on', options));
  
      // show element
      $sidedrawerEl.appendTo($overlayEl);
      setTimeout(function() {
        $sidedrawerEl.addClass('active');
      }, 20);
    }
  
  
    function hideSidedrawer() {
      $bodyEl.toggleClass('hide-sidedrawer');
    }
  
  
    $('.js-show-sidedrawer').on('click', showSidedrawer);
    $('.js-hide-sidedrawer').on('click', hideSidedrawer);



    var $titleEls = $('strong', $sidedrawerEl);

$titleEls
  .next()
  .hide();

$titleEls.on('click', function() {
  $(this).next().slideToggle(200);
});
  });


  

/***/ }),
/* 2 */
/***/ ((module) => {

const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
let lang = 'ru'
xhr.open("GET", `https://bing-news-search1.p.rapidapi.com/news?cc=${lang}&safeSearch=Off&textFormat=Raw`);
xhr.setRequestHeader(`accept-language`, `${lang}`);
xhr.setRequestHeader("x-bingapis-sdk", "true");
xhr.setRequestHeader("x-rapidapi-key", "d93da7b6ccmsh0c32a0d2dee493ep1a6521jsn64bd487ac230");
xhr.setRequestHeader("x-rapidapi-host", "bing-news-search1.p.rapidapi.com");
xhr.send(data);

 class Api{
    constructor(xhr){
        this.xhr = xhr
    }
    eventAdd(){
        this.xhr.addEventListener("load",  ()=> {
            let response = JSON.parse(this.xhr.responseText)
            let getsAPi = new GetsApi(response)
            getsAPi.take()
 
        });
    }
   
   
}
let content = document.querySelector('.content__news')

class GetsApi{
    constructor(response){
        this.response = response
    }
    take(){
        let arrObj = this.response.value
        console.log(arrObj[0])
        arrObj.forEach(item=>{
            let div = document.createElement('div')
            div.classList.add('mui-panel')
            div.style.margin = '10px 20px'
            div.innerHTML = `
            <h1>${item.name}</h1>
            <div class="data__public">${item.datePublished}</div>
            <description>${item.description}... <a href="${item.url}">Продолжение по ссылке</a></description>
            `
            content.appendChild(div)
        })
    }
}

let api = new Api(xhr)
api.eventAdd()
module.exports={api}

/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _app2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app2__WEBPACK_IMPORTED_MODULE_1__);




})();

/******/ })()
;
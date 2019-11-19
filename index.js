"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var FlipDown=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flipdown",o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(_classCallCheck(this,n),"number"!=typeof t)throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(_typeof(t)," instead."));"object"===_typeof(e)&&(o=e,e="flipdown"),this.version="0.2.2",this.initialised=!1,this.now=this._getTime(),this.epoch=t,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(e),this._addFlipdownClass(),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(o),this._setOptions()}return _createClass(n,[{key:"start",value:function(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}},{key:"ifEnded",value:function(t){return this.hasEndedCallback=function(){t(),this.hasEndedCallback=null},this}},{key:"_addFlipdownClass",value:function(){this.element.classList.contains("flipdown")||this.element.classList.add("flipdown")}},{key:"_getTime",value:function(){return(new Date).getTime()/1e3}},{key:"_hasCountdownEnded",value:function(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):this.countdownEnded=!1}},{key:"_parseOptions",value:function(t){return{theme:t.hasOwnProperty("theme")?t.theme:"dark"}}},{key:"_setOptions",value:function(){this.element.classList.add("flipdown__theme-".concat(this.opts.theme))}},{key:"_init",value:function(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var t=this.daysremaining<=2?2:this.daysremaining,e=0;e<t+6;e++)this.rotors.push(this._createRotor(0));var o=[];for(e=0;e<t;e++)o.push(this.rotors[e]);this.element.appendChild(this._createRotorGroup(o));var n=t;for(e=0;e<3;e++){for(var s=[],i=0;i<2;i++)s.push(this.rotors[n]),n++;this.element.appendChild(this._createRotorGroup(s))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}},{key:"_createRotorGroup",value:function(t){var e=document.createElement("div");e.className="rotor-group";var o=document.createElement("div");return o.className="rotor-group-heading",e.appendChild(o),appendChildren(e,t),e}},{key:"_createRotor",value:function(t){var e=0<arguments.length&&void 0!==t?t:0,o=document.createElement("div"),n=document.createElement("div"),s=document.createElement("figure"),i=document.createElement("figure"),r=document.createElement("div"),a=document.createElement("div");return o.className="rotor",n.className="rotor-leaf",s.className="rotor-leaf-rear",i.className="rotor-leaf-front",r.className="rotor-top",a.className="rotor-bottom",s.textContent=e,r.textContent=e,a.textContent=e,appendChildren(o,[n,r,a]),appendChildren(n,[s,i]),o}},{key:"_tick",value:function(){this.now=this._getTime();var t=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(t/86400),t-=86400*this.clockValues.d,this.clockValues.h=Math.floor(t/3600),t-=3600*this.clockValues.h,this.clockValues.m=Math.floor(t/60),t-=60*this.clockValues.m,this.clockValues.s=Math.floor(t),this._updateClockValues(),this._hasCountdownEnded()}},{key:"_updateClockValues",value:function(t){var o=this,e=0<arguments.length&&void 0!==t&&t;function n(){var o=this;this.rotorTop.forEach(function(t,e){t.textContent!=o.clockValuesAsString[e]&&(t.textContent=o.clockValuesAsString[e])})}function s(){var n=this;this.rotorLeafRear.forEach(function(t,e){if(t.textContent!=n.clockValuesAsString[e]){t.textContent=n.clockValuesAsString[e],t.parentElement.classList.add("flipped");var o=setInterval(function(){t.parentElement.classList.remove("flipped"),clearInterval(o)}.bind(n),500)}})}this.clockStrings.d=pad(this.clockValues.d,2),this.clockStrings.h=pad(this.clockValues.h,2),this.clockStrings.m=pad(this.clockValues.m,2),this.clockStrings.s=pad(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach(function(t,e){t.textContent=o.prevClockValuesAsString[e]}),this.rotorBottom.forEach(function(t,e){t.textContent=o.prevClockValuesAsString[e]}),e?(n.call(this),s.call(this)):(setTimeout(n.bind(this),500),setTimeout(s.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}]),n}();function pad(t,e){return(t=t.toString()).length<e?pad("0"+t,e):t}function appendChildren(e,t){t.forEach(function(t){e.appendChild(t)})}var _default=FlipDown;exports.default=_default;
!function(){var a=".flipdown.flipdown__theme-dark{font-family:sans-serif;font-weight:bold}.flipdown.flipdown__theme-dark .rotor-group-heading:before{color:#000}.flipdown.flipdown__theme-dark .rotor-group:nth-child(n+2):nth-child(-n+3):before,.flipdown.flipdown__theme-dark .rotor-group:nth-child(n+2):nth-child(-n+3):after{background-color:#151515}.flipdown.flipdown__theme-dark .rotor,.flipdown.flipdown__theme-dark .rotor-top,.flipdown.flipdown__theme-dark .rotor-leaf-front{color:#fff;background-color:#151515}.flipdown.flipdown__theme-dark .rotor-bottom,.flipdown.flipdown__theme-dark .rotor-leaf-rear{color:#efefef;background-color:#202020}.flipdown.flipdown__theme-dark .rotor:after{border-top:solid 1px #151515}.flipdown.flipdown__theme-light{font-family:sans-serif;font-weight:bold}.flipdown.flipdown__theme-light .rotor-group-heading:before{color:#eee}.flipdown.flipdown__theme-light .rotor-group:nth-child(n+2):nth-child(-n+3):before,.flipdown.flipdown__theme-light .rotor-group:nth-child(n+2):nth-child(-n+3):after{background-color:#ddd}.flipdown.flipdown__theme-light .rotor,.flipdown.flipdown__theme-light .rotor-top,.flipdown.flipdown__theme-light .rotor-leaf-front{color:#222;background-color:#ddd}.flipdown.flipdown__theme-light .rotor-bottom,.flipdown.flipdown__theme-light .rotor-leaf-rear{color:#333;background-color:#eee}.flipdown.flipdown__theme-light .rotor:after{border-top:solid 1px #222}.flipdown{overflow:visible;width:510px;height:110px}.flipdown .rotor-group{position:relative;float:left;padding-right:30px}.flipdown .rotor-group:last-child{padding-right:0}.flipdown .rotor-group-heading:before{display:block;height:30px;line-height:30px;text-align:center}.flipdown .rotor-group .rotor-group-heading:before{font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif}.flipdown .rotor-group:nth-child(1) .rotor-group-heading:before{content:\'Days\'}.flipdown .rotor-group:nth-child(2) .rotor-group-heading:before{content:\'Hours\'}.flipdown .rotor-group:nth-child(3) .rotor-group-heading:before{content:\'Minutes\'}.flipdown .rotor-group:nth-child(4) .rotor-group-heading:before{content:\'Seconds\'}:lang(pl) .flipdown .rotor-group:nth-child(1) .rotor-group-heading:before{content:\'Dni\'}:lang(pl) .flipdown .rotor-group:nth-child(2) .rotor-group-heading:before{content:\'Godziny\'}:lang(pl) .flipdown .rotor-group:nth-child(3) .rotor-group-heading:before{content:\'Minuty\'}:lang(pl) .flipdown .rotor-group:nth-child(4) .rotor-group-heading:before{content:\'Sekundy\'}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):before{content:\'\';position:absolute;bottom:20px;left:115px;width:10px;height:10px;border-radius:50%}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):after{content:\'\';position:absolute;bottom:50px;left:115px;width:10px;height:10px;border-radius:50%}.flipdown .rotor{position:relative;float:left;width:50px;height:80px;margin:0 5px 0 0;border-radius:4px;font-size:4rem;text-align:center;perspective:200px}.flipdown .rotor:last-child{margin-right:0}.flipdown .rotor-top,.flipdown .rotor-bottom{overflow:hidden;position:absolute;width:50px;height:40px}.flipdown .rotor-leaf{z-index:1;position:absolute;width:50px;height:80px;transform-style:preserve-3d;transition:transform 0s}.flipdown .rotor-leaf.flipped{transform:rotateX(-180deg);transition:all .5s ease-in-out}.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear{overflow:hidden;position:absolute;width:50px;height:40px;margin:0;transform:rotateX(0);backface-visibility:hidden;-webkit-backface-visibility:hidden}.flipdown .rotor-leaf-front{line-height:80px;border-radius:4px 4px 0 0}.flipdown .rotor-leaf-rear{line-height:0;border-radius:0 0 4px 4px;transform:rotateX(-180deg)}.flipdown .rotor-top{line-height:80px;border-radius:4px 4px 0 0}.flipdown .rotor-bottom{bottom:0;line-height:0;border-radius:0 0 4px 4px}.flipdown .rotor:after{content:\'\';z-index:2;position:absolute;bottom:0;left:0;width:50px;height:40px;border-radius:0 0 4px 4px}@media(max-width:550px){.flipdown{width:312px;height:70px}.flipdown .rotor{font-size:2.2rem;margin-right:3px}.flipdown .rotor,.flipdown .rotor-leaf,.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear,.flipdown .rotor-top,.flipdown .rotor-bottom,.flipdown .rotor:after{width:30px}.flipdown .rotor-group{padding-right:20px}.flipdown .rotor-group:last-child{padding-right:0}.flipdown .rotor-group-heading:before{font-size:.8rem;height:20px;line-height:20px}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):before,.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):after{left:69px}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):before{bottom:13px;height:8px;width:8px}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):after{bottom:29px;height:8px;width:8px}.flipdown .rotor-leaf-front,.flipdown .rotor-top{line-height:50px}.flipdown .rotor-leaf,.flipdown .rotor{height:50px}.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear,.flipdown .rotor-top,.flipdown .rotor-bottom,.flipdown .rotor:after{height:25px}}",b=document.createElement("style");b.type="text/css",b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a)),(document.head||document.getElementsByTagName("head")[0]).appendChild(b)}();

/*! For license information please see main-27545368.9c98f03b.js.LICENSE.txt */
"use strict";(self.webpackChunkgithub_devops_frontend=self.webpackChunkgithub_devops_frontend||[]).push([[8001],{35820:(t,n,e)=>{e.d(n,{A:()=>T});var r=function(){if("undefined"!==typeof Map)return Map;function t(t,n){var e=-1;return t.some((function(t,r){return t[0]===n&&(e=r,!0)})),e}return function(){function n(){this.__entries__=[]}return Object.defineProperty(n.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),n.prototype.get=function(n){var e=t(this.__entries__,n),r=this.__entries__[e];return r&&r[1]},n.prototype.set=function(n,e){var r=t(this.__entries__,n);~r?this.__entries__[r][1]=e:this.__entries__.push([n,e])},n.prototype.delete=function(n){var e=this.__entries__,r=t(e,n);~r&&e.splice(r,1)},n.prototype.has=function(n){return!!~t(this.__entries__,n)},n.prototype.clear=function(){this.__entries__.splice(0)},n.prototype.forEach=function(t,n){void 0===n&&(n=null);for(var e=0,r=this.__entries__;e<r.length;e++){var o=r[e];t.call(n,o[1],o[0])}},n}()}(),o="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,i="undefined"!==typeof e.g&&e.g.Math===Math?e.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),u="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],s="undefined"!==typeof MutationObserver,c=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,n){var e=!1,r=!1,o=0;function i(){e&&(e=!1,t()),r&&s()}function a(){u(i)}function s(){var t=Date.now();if(e){if(t-o<2)return;r=!0}else e=!0,r=!1,setTimeout(a,n);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var n=this.observers_,e=n.indexOf(t);~e&&n.splice(e,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var n=t.propertyName,e=void 0===n?"":n;a.some((function(t){return!!~e.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,n){for(var e=0,r=Object.keys(n);e<r.length;e++){var o=r[e];Object.defineProperty(t,o,{value:n[o],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},h=g(0,0,0,0);function p(t){return parseFloat(t)||0}function d(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return n.reduce((function(n,e){return n+p(t["border-"+e+"-width"])}),0)}function v(t){var n=t.clientWidth,e=t.clientHeight;if(!n&&!e)return h;var r=l(t).getComputedStyle(t),o=function(t){for(var n={},e=0,r=["top","right","bottom","left"];e<r.length;e++){var o=r[e],i=t["padding-"+o];n[o]=p(i)}return n}(r),i=o.left+o.right,u=o.top+o.bottom,a=p(r.width),s=p(r.height);if("border-box"===r.boxSizing&&(Math.round(a+i)!==n&&(a-=d(r,"left","right")+i),Math.round(s+u)!==e&&(s-=d(r,"top","bottom")+u)),!function(t){return t===l(t).document.documentElement}(t)){var c=Math.round(a+i)-n,f=Math.round(s+u)-e;1!==Math.abs(c)&&(a-=c),1!==Math.abs(f)&&(s-=f)}return g(o.left,o.top,a,s)}var m="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"===typeof t.getBBox};function w(t){return o?m(t)?function(t){var n=t.getBBox();return g(0,0,n.width,n.height)}(t):v(t):h}function g(t,n,e,r){return{x:t,y:n,width:e,height:r}}var b=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=g(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=w(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(t,n){var e=function(t){var n=t.x,e=t.y,r=t.width,o=t.height,i="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(i.prototype);return f(u,{x:n,y:e,width:r,height:o,top:e,right:n+r,bottom:o+e,left:n}),u}(n);f(this,{target:t,contentRect:e})},_=function(){function t(t,n,e){if(this.activeObservations_=[],this.observations_=new r,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=e}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new b(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(n){n.isActive()&&t.activeObservations_.push(n)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map((function(t){return new y(t.target,t.broadcastRect())}));this.callback_.call(t,n,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!==typeof WeakMap?new WeakMap:new r,O=function t(n){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=c.getInstance(),r=new _(n,e,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var n;return(n=E.get(this))[t].apply(n,arguments)}}));const T="undefined"!==typeof i.ResizeObserver?i.ResizeObserver:O},27234:(t,n)=>{function e(t,n){var e=t.length;t.push(n);t:for(;0<e;){var r=e-1>>>1,o=t[r];if(!(0<i(o,n)))break t;t[r]=n,t[e]=o,e=r}}function r(t){return 0===t.length?null:t[0]}function o(t){if(0===t.length)return null;var n=t[0],e=t.pop();if(e!==n){t[0]=e;t:for(var r=0,o=t.length,u=o>>>1;r<u;){var a=2*(r+1)-1,s=t[a],c=a+1,f=t[c];if(0>i(s,e))c<o&&0>i(f,s)?(t[r]=f,t[c]=e,r=c):(t[r]=s,t[a]=e,r=a);else{if(!(c<o&&0>i(f,e)))break t;t[r]=f,t[c]=e,r=c}}}return n}function i(t,n){var e=t.sortIndex-n.sortIndex;return 0!==e?e:t.id-n.id}if("object"===typeof performance&&"function"===typeof performance.now){var u=performance;n.unstable_now=function(){return u.now()}}else{var a=Date,s=a.now();n.unstable_now=function(){return a.now()-s}}var c=[],f=[],l=1,h=null,p=3,d=!1,v=!1,m=!1,w="function"===typeof setTimeout?setTimeout:null,g="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function y(t){for(var n=r(f);null!==n;){if(null===n.callback)o(f);else{if(!(n.startTime<=t))break;o(f),n.sortIndex=n.expirationTime,e(c,n)}n=r(f)}}function _(t){if(m=!1,y(t),!v)if(null!==r(c))v=!0,j(E);else{var n=r(f);null!==n&&L(_,n.startTime-t)}}function E(t,e){v=!1,m&&(m=!1,g(A),A=-1),d=!0;var i=p;try{for(y(e),h=r(c);null!==h&&(!(h.expirationTime>e)||t&&!N());){var u=h.callback;if("function"===typeof u){h.callback=null,p=h.priorityLevel;var a=u(h.expirationTime<=e);e=n.unstable_now(),"function"===typeof a?h.callback=a:h===r(c)&&o(c),y(e)}else o(c);h=r(c)}if(null!==h)var s=!0;else{var l=r(f);null!==l&&L(_,l.startTime-e),s=!1}return s}finally{h=null,p=i,d=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var O,T=!1,P=null,A=-1,M=5,S=-1;function N(){return!(n.unstable_now()-S<M)}function x(){if(null!==P){var t=n.unstable_now();S=t;var e=!0;try{e=P(!0,t)}finally{e?O():(T=!1,P=null)}}else T=!1}if("function"===typeof b)O=function(){b(x)};else if("undefined"!==typeof MessageChannel){var k=new MessageChannel,D=k.port2;k.port1.onmessage=x,O=function(){D.postMessage(null)}}else O=function(){w(x,0)};function j(t){P=t,T||(T=!0,O())}function L(t,e){A=w((function(){t(n.unstable_now())}),e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(t){t.callback=null},n.unstable_continueExecution=function(){v||d||(v=!0,j(E))},n.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<t?Math.floor(1e3/t):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return r(c)},n.unstable_next=function(t){switch(p){case 1:case 2:case 3:var n=3;break;default:n=p}var e=p;p=n;try{return t()}finally{p=e}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(t,n){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var e=p;p=t;try{return n()}finally{p=e}},n.unstable_scheduleCallback=function(t,o,i){var u=n.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?u+i:u:i=u,t){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return t={id:l++,callback:o,priorityLevel:t,startTime:i,expirationTime:a=i+a,sortIndex:-1},i>u?(t.sortIndex=i,e(f,t),null===r(c)&&t===r(f)&&(m?(g(A),A=-1):m=!0,L(_,i-u))):(t.sortIndex=a,e(c,t),v||d||(v=!0,j(E))),t},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(t){var n=p;return function(){var e=p;p=n;try{return t.apply(this,arguments)}finally{p=e}}}},78853:(t,n,e)=>{t.exports=e(27234)},75082:(t,n,e)=>{e.d(n,{EM:()=>d,MT:()=>Tt,ni:()=>Wt});var r=Object.freeze({__proto__:null,get start(){return Wt},get ensureJQuerySupport(){return pt},get setBootstrapMaxTime(){return K},get setMountMaxTime(){return J},get setUnmountMaxTime(){return Q},get setUnloadMaxTime(){return Y},get registerApplication(){return Pt},get unregisterApplication(){return Mt},get getMountedApps(){return Et},get getAppStatus(){return Tt},get unloadApplication(){return St},get checkActivityFunctions(){return At},get getAppNames(){return Ot},get pathToActiveWhen(){return kt},get navigateToUrl(){return it},get triggerAppChange(){return Rt},get addErrorHandler(){return f},get removeErrorHandler(){return l},get mountRootParcel(){return z},get NOT_LOADED(){return d},get LOADING_SOURCE_CODE(){return v},get NOT_BOOTSTRAPPED(){return m},get BOOTSTRAPPING(){return w},get NOT_MOUNTED(){return g},get MOUNTING(){return b},get UPDATING(){return _},get LOAD_ERROR(){return T},get MOUNTED(){return y},get UNLOADING(){return O},get UNMOUNTING(){return E},get SKIP_BECAUSE_BROKEN(){return P}});function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof e.g?e.g:"undefined"!=typeof self?self:{}).CustomEvent,a=function(){try{var t=new u("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?u:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},s=[];function c(t,n,e){var r=p(t,n,e);s.length?s.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function f(t){if("function"!=typeof t)throw Error(h(28,!1));s.push(t)}function l(t){if("function"!=typeof t)throw Error(h(29,!1));var n=!1;return s=s.filter((function(e){var r=e===t;return n=n||r,!r})),n}function h(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(n?n+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function p(t,n,e){var r,o="".concat(x(n)," '").concat(S(n),"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(h(30,!1,n.status,S(n)));try{r=Error(o+JSON.stringify(t))}catch(n){r=t}}return r.appOrParcelName=S(n),n.status=e,r}var d="NOT_LOADED",v="LOADING_SOURCE_CODE",m="NOT_BOOTSTRAPPED",w="BOOTSTRAPPING",g="NOT_MOUNTED",b="MOUNTING",y="MOUNTED",_="UPDATING",E="UNMOUNTING",O="UNLOADING",T="LOAD_ERROR",P="SKIP_BECAUSE_BROKEN";function A(t){return t.status===y}function M(t){try{return t.activeWhen(window.location)}catch(o){return c(o,t,P),!1}}function S(t){return t.name}function N(t){return Boolean(t.unmountThisParcel)}function x(t){return N(t)?"parcel":"application"}function k(){for(var t=arguments.length-1;t>0;t--)for(var n in arguments[t])"__proto__"!==n&&(arguments[t-1][n]=arguments[t][n]);return arguments[0]}function D(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function j(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!D(n,(function(t){return"function"!=typeof t}))));var n}function L(t,n){var e=t[n]||[];0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);var r=x(t),o=S(t);return function(t){return e.reduce((function(e,i,u){return e.then((function(){var e=i(t);return R(e)?e:Promise.reject(h(15,!1,r,o,n,u))}))}),Promise.resolve())}}function R(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function I(t,n){return Promise.resolve().then((function(){return t.status!==m?t:(t.status=w,t.bootstrap?X(t,"bootstrap").then(e).catch((function(e){if(n)throw p(e,t,P);return c(e,t,P),t})):Promise.resolve().then(e))}));function e(){return t.status=g,t}}function U(t,n){return Promise.resolve().then((function(){if(t.status!==y)return t;t.status=E;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n)throw p(r,t,P);c(r,t,P)}))})).then((function(){return t}));function r(){return X(t,"unmount").then((function(){t.status=g})).catch((function(e){if(n)throw p(e,t,P);c(e,t,P)}))}}))}var C=!1,W=!1;function B(t,n){return Promise.resolve().then((function(){return t.status!==g?t:(C||(window.dispatchEvent(new a("single-spa:before-first-mount")),C=!0),X(t,"mount").then((function(){return t.status=y,W||(window.dispatchEvent(new a("single-spa:first-mount")),W=!0),t})).catch((function(e){return t.status=y,U(t,!0).then(r,r);function r(){if(n)throw p(e,t,P);return c(e,t,P),t}})))}))}var G=0,F={parcels:{}};function z(){return $.apply(F,arguments)}function $(t,n){var e=this;if(!t||"object"!==o(t)&&"function"!=typeof t)throw Error(h(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(h(3,!1,o(t.name)));if("object"!==o(n))throw Error(h(4,!1,name,o(n)));if(!n.domElement)throw Error(h(5,!1,name));var r,i=G++,u="function"==typeof t,a=u?t:function(){return Promise.resolve(t)},s={id:i,parcels:{},status:u?v:m,customProps:n,parentName:S(e),unmountThisParcel:function(){return w.then((function(){if(s.status!==y)throw Error(h(6,!1,name,s.status));return U(s,!0)})).then((function(t){return s.parentName&&delete e.parcels[s.id],t})).then((function(t){return f(t),t})).catch((function(t){throw s.status=P,l(t),t}))}};e.parcels[i]=s;var c=a();if(!c||"function"!=typeof c.then)throw Error(h(7,!1));var f,l,d=(c=c.then((function(t){if(!t)throw Error(h(8,!1));var n=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!j(t.bootstrap))throw Error(h(9,!1,n));if(!j(t.mount))throw Error(h(10,!1,n));if(!j(t.unmount))throw Error(h(11,!1,n));if(t.update&&!j(t.update))throw Error(h(12,!1,n));var e=L(t,"bootstrap"),o=L(t,"mount"),u=L(t,"unmount");s.status=m,s.name=n,s.bootstrap=e,s.mount=o,s.unmount=u,s.timeouts=Z(t.timeouts),t.update&&(s.update=L(t,"update"),r.update=function(t){return s.customProps=t,q(function(t){return Promise.resolve().then((function(){if(t.status!==y)throw Error(h(32,!1,S(t)));return t.status=_,X(t,"update").then((function(){return t.status=y,t})).catch((function(n){throw p(n,t,P)}))}))}(s))})}))).then((function(){return I(s,!0)})),w=d.then((function(){return B(s,!0)})),b=new Promise((function(t,n){f=t,l=n}));return r={mount:function(){return q(Promise.resolve().then((function(){if(s.status!==g)throw Error(h(13,!1,name,s.status));return e.parcels[i]=s,B(s)})))},unmount:function(){return q(s.unmountThisParcel())},getStatus:function(){return s.status},loadPromise:q(c),bootstrapPromise:q(d),mountPromise:q(w),unmountPromise:q(b)}}function q(t){return t.then((function(){return null}))}function H(t){var n=S(t),e="function"==typeof t.customProps?t.customProps(n,window.location):t.customProps;("object"!==o(e)||null===e||Array.isArray(e))&&(e={},console.warn(h(40,!1),n,e));var i=k({},e,{name:n,mountParcel:$.bind(t),singleSpa:r});return N(t)&&(i.unmountSelf=t.unmountThisParcel),i}var V={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function K(t,n,e){if("number"!=typeof t||t<=0)throw Error(h(16,!1));V.bootstrap={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function J(t,n,e){if("number"!=typeof t||t<=0)throw Error(h(17,!1));V.mount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function Q(t,n,e){if("number"!=typeof t||t<=0)throw Error(h(18,!1));V.unmount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function Y(t,n,e){if("number"!=typeof t||t<=0)throw Error(h(19,!1));V.unload={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function X(t,n){var e=t.timeouts[n],r=e.warningMillis,o=x(t);return new Promise((function(i,u){var a=!1,s=!1;t[n](H(t)).then((function(t){a=!0,i(t)})).catch((function(t){a=!0,u(t)})),setTimeout((function(){return f(1)}),r),setTimeout((function(){return f(!0)}),e.millis);var c=h(31,!1,n,o,S(t),e.millis);function f(t){if(!a)if(!0===t)s=!0,e.dieOnTimeout?u(Error(c)):console.error(c);else if(!s){var n=t,o=n*r;console.warn(c),o+r<e.millis&&setTimeout((function(){return f(n+1)}),r)}}}))}function Z(t){var n={};for(var e in V)n[e]=k({},V[e],t&&t[e]||{});return n}function tt(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==d&&t.status!==T?t:(t.status=v,t.loadPromise=Promise.resolve().then((function(){var r=t.loadApp(H(t));if(!R(r))throw e=!0,Error(h(33,!1,S(t)));return r.then((function(e){var r;t.loadErrorTime=null,"object"!==o(n=e)&&(r=34),Object.prototype.hasOwnProperty.call(n,"bootstrap")&&!j(n.bootstrap)&&(r=35),j(n.mount)||(r=36),j(n.unmount)||(r=37);var i=x(n);if(r){var u;try{u=JSON.stringify(n)}catch(t){}return console.error(h(r,!1,i,S(t),u),n),c(void 0,t,P),t}return n.devtools&&n.devtools.overlays&&(t.devtools.overlays=k({},t.devtools.overlays,n.devtools.overlays)),t.status=m,t.bootstrap=L(n,"bootstrap"),t.mount=L(n,"mount"),t.unmount=L(n,"unmount"),t.unload=L(n,"unload"),t.timeouts=Z(n.timeouts),delete t.loadPromise,t}))})).catch((function(n){var r;return delete t.loadPromise,e?r=P:(r=T,t.loadErrorTime=(new Date).getTime()),c(n,t,r),t})));var n,e}))}var nt,et="undefined"!=typeof window,rt={hashchange:[],popstate:[]},ot=["hashchange","popstate"];function it(t){var n;if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(h(14,!1));n=t.currentTarget.href,t.preventDefault()}var e=lt(window.location.href),r=lt(n);0===n.indexOf("#")?window.location.hash=r.hash:e.host!==r.host&&r.host?window.location.href=n:r.pathname===e.pathname&&r.search===e.search?window.location.hash=r.hash:window.history.pushState(null,null,n)}function ut(t){var n=this;if(t){var e=t[0].type;ot.indexOf(e)>=0&&rt[e].forEach((function(e){try{e.apply(n,t)}catch(t){setTimeout((function(){throw t}))}}))}}function at(){It([],arguments)}function st(t,n){return function(){var e=window.location.href,r=t.apply(this,arguments),o=window.location.href;return nt&&e===o||(Bt()?window.dispatchEvent(function(t,n){var e;try{e=new PopStateEvent("popstate",{state:t})}catch(n){(e=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return e.singleSpa=!0,e.singleSpaTrigger=n,e}(window.history.state,n)):It([])),r}}if(et){window.addEventListener("hashchange",at),window.addEventListener("popstate",at);var ct=window.addEventListener,ft=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&ot.indexOf(t)>=0)||D(rt[t],(function(t){return t===n})))return ct.apply(this,arguments);rt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&ot.indexOf(t)>=0))return ft.apply(this,arguments);rt[t]=rt[t].filter((function(t){return t!==n}))},window.history.pushState=st(window.history.pushState,"pushState"),window.history.replaceState=st(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(h(41,!1)):window.singleSpaNavigate=it}function lt(t){var n=document.createElement("a");return n.href=t,n}var ht=!1;function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!ht){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return dt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return dt.call(this,e,window.removeEventListener,t,n,arguments)},ht=!0}}function dt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){ot.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))})),""===e.trim()?this:t.apply(this,o))}var vt={};function mt(t){return Promise.resolve().then((function(){var n=vt[S(t)];if(!n)return t;if(t.status===d)return wt(t,n),t;if(t.status===O)return n.promise.then((function(){return t}));if(t.status!==g&&t.status!==T)return t;var e=t.status===T?Promise.resolve():X(t,"unload");return t.status=O,e.then((function(){return wt(t,n),t})).catch((function(e){return function(t,n,e){delete vt[S(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,c(e,t,P),n.reject(e)}(t,n,e),t}))}))}function wt(t,n){delete vt[S(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=d,n.resolve()}function gt(t,n,e,r){vt[S(t)]={app:t,resolve:e,reject:r},Object.defineProperty(vt[S(t)],"promise",{get:n})}function bt(t){return vt[t]}var yt=[];function _t(){var t=[],n=[],e=[],r=[],o=(new Date).getTime();return yt.forEach((function(i){var u=i.status!==P&&M(i);switch(i.status){case T:u&&o-i.loadErrorTime>=200&&e.push(i);break;case d:case v:u&&e.push(i);break;case m:case g:!u&&bt(S(i))?t.push(i):u&&r.push(i);break;case y:u||n.push(i)}})),{appsToUnload:t,appsToUnmount:n,appsToLoad:e,appsToMount:r}}function Et(){return yt.filter(A).map(S)}function Ot(){return yt.map(S)}function Tt(t){var n=D(yt,(function(n){return S(n)===t}));return n?n.status:null}function Pt(t,n,e,r){var i=function(t,n,e,r){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===o(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(h(39,!1));var n=["name","app","activeWhen","customProps"],e=Object.keys(t).reduce((function(t,e){return n.indexOf(e)>=0?t:t.concat(e)}),[]);if(0!==e.length)throw Error(h(38,!1,n.join(", "),e.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(h(20,!1));if("object"!==o(t.app)&&"function"!=typeof t.app)throw Error(h(20,!1));var r=function(t){return"string"==typeof t||"function"==typeof t};if(!(r(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(r)))throw Error(h(24,!1));if(!xt(t.customProps))throw Error(h(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,n,e,r){if("string"!=typeof t||0===t.length)throw Error(h(20,!1));if(!n)throw Error(h(23,!1));if("function"!=typeof e)throw Error(h(24,!1));if(!xt(r))throw Error(h(22,!1))}(t,n,e,r),u.name=t,u.loadApp=n,u.activeWhen=e,u.customProps=r),u.loadApp="function"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var n=Array.isArray(t)?t:[t];return n=n.map((function(t){return"function"==typeof t?t:kt(t)})),function(t){return n.some((function(n){return n(t)}))}}(u.activeWhen),u}(t,n,e,r);if(-1!==Ot().indexOf(i.name))throw Error(h(21,!1,i.name));yt.push(k({loadErrorTime:null,status:d,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),et&&(pt(),It())}function At(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return yt.filter((function(n){return n.activeWhen(t)})).map(S)}function Mt(t){if(0===yt.filter((function(n){return S(n)===t})).length)throw Error(h(25,!1,t));return St(t).then((function(){var n=yt.map(S).indexOf(t);yt.splice(n,1)}))}function St(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(h(26,!1));var e=D(yt,(function(n){return S(n)===t}));if(!e)throw Error(h(27,!1,t));var r,o=bt(S(e));if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){gt(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,Nt(e,o.resolve,o.reject)):r=new Promise((function(t,n){gt(e,(function(){return r}),t,n),Nt(e,t,n)})),r}function Nt(t,n,e){U(t).then(mt).then((function(){n(),setTimeout((function(){It()}))})).catch(e)}function xt(t){return!t||"function"==typeof t||"object"===o(t)&&null!==t&&!Array.isArray(t)}function kt(t,n){var e=function(t,n){var e=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var u=t[i];(!r&&":"===u||r&&"/"===u)&&a(i)}return a(t.length),new RegExp(o,"i");function a(i){var u=t.slice(e,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":u,i===t.length)if(r)n&&(o+="$");else{var a=n?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(a,"$"):"".concat(o,"(/").concat(a,")?(#.*)?$")}r=!r,e=i}}(t,n);return function(t){var n=t.origin;n||(n="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(n,"").replace(t.search,"").split("?")[0];return e.test(r)}}var Dt=!1,jt=[],Lt=et&&window.location.href;function Rt(){return It()}function It(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Dt)return new Promise((function(t,e){jt.push({resolve:t,reject:e,eventArguments:n})}));var e,r=_t(),o=r.appsToUnload,u=r.appsToUnmount,s=r.appsToLoad,c=r.appsToMount,f=!1,l=Lt,h=Lt=window.location.href;return Bt()?(Dt=!0,e=o.concat(s,u,c),Promise.resolve().then((function(){if(window.dispatchEvent(new a(0===e.length?"single-spa:before-no-app-change":"single-spa:before-app-change",w(!0))),window.dispatchEvent(new a("single-spa:before-routing-event",w(!0,{cancelNavigation:p}))),f)return window.dispatchEvent(new a("single-spa:before-mount-routing-event",w(!0))),v(),void it(l);var n=o.map(mt),r=u.map(U).map((function(t){return t.then(mt)})).concat(n),i=Promise.all(r);i.then((function(){window.dispatchEvent(new a("single-spa:before-mount-routing-event",w(!0)))}));var h=s.map((function(t){return tt(t).then((function(t){return Ut(t,i)}))})),d=c.filter((function(t){return s.indexOf(t)<0})).map((function(t){return Ut(t,i)}));return i.catch((function(t){throw m(),t})).then((function(){return m(),Promise.all(h.concat(d)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then(v)}))}))):(e=s,Promise.resolve().then((function(){var t=s.map(tt);return Promise.all(t).then(m).then((function(){return[]})).catch((function(t){throw m(),t}))})));function p(){f=!0}function v(){var n=Et();t.forEach((function(t){return t.resolve(n)}));try{var r=0===e.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new a(r,w())),window.dispatchEvent(new a("single-spa:routing-event",w()))}catch(t){setTimeout((function(){throw t}))}if(Dt=!1,jt.length>0){var o=jt;jt=[],It(o)}return n}function m(){t.forEach((function(t){ut(t.eventArguments)})),ut(n)}function w(){var t,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,p={},v=(i(t={},y,[]),i(t,g,[]),i(t,d,[]),i(t,P,[]),t);r?(s.concat(c).forEach((function(t,n){w(t,y)})),o.forEach((function(t){w(t,d)})),u.forEach((function(t){w(t,g)}))):e.forEach((function(t){w(t)}));var m={detail:{newAppStatuses:p,appsByNewStatus:v,totalAppChanges:e.length,originalEvent:null==n?void 0:n[0],oldUrl:l,newUrl:h,navigationIsCanceled:f}};return a&&k(m.detail,a),m;function w(t,n){var e=S(t);n=n||Tt(e),p[e]=n,(v[n]=v[n]||[]).push(e)}}}function Ut(t,n){return M(t)?I(t).then((function(t){return n.then((function(){return M(t)?B(t):t}))})):n.then((function(){return t}))}var Ct=!1;function Wt(t){var n;Ct=!0,t&&t.urlRerouteOnly&&(n=t.urlRerouteOnly,nt=n),et&&It()}function Bt(){return Ct}et&&setTimeout((function(){Ct||console.warn(h(1,!1))}),5e3);var Gt={getRawAppData:function(){return[].concat(yt)},reroute:It,NOT_LOADED:d,toLoadPromise:tt,toBootstrapPromise:I,unregisterApplication:Mt};et&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Gt)}}]);
//# sourceMappingURL=main-27545368.9c98f03b.js.map
/*! For license information please see 7689.7907eeab.js.LICENSE.txt */
"use strict";(self.webpackChunkgithub_devops_frontend=self.webpackChunkgithub_devops_frontend||[]).push([[7689],{4906:(e,t,r)=>{r.d(t,{SQ:()=>s,YH:()=>l,a:()=>d,cY:()=>f,fT:()=>a,ge:()=>c,l:()=>o});var n=r(3404),o=function(e){var t=e.top,r=e.right,n=e.bottom,o=e.left;return{top:t,right:r,bottom:n,left:o,width:r-o,height:n-t,x:o,y:t,center:{x:(r+o)/2,y:(n+t)/2}}},a=function(e,t){return{top:e.top-t.top,left:e.left-t.left,bottom:e.bottom+t.bottom,right:e.right+t.right}},u=function(e,t){return{top:e.top+t.top,left:e.left+t.left,bottom:e.bottom-t.bottom,right:e.right-t.right}},i={top:0,right:0,bottom:0,left:0},c=function(e){var t=e.borderBox,r=e.margin,n=void 0===r?i:r,c=e.border,p=void 0===c?i:c,f=e.padding,s=void 0===f?i:f,d=o(a(t,n)),l=o(u(t,p)),m=o(u(l,s));return{marginBox:d,borderBox:o(t),paddingBox:l,contentBox:m,margin:n,border:p,padding:s}},p=function(e){var t=e.slice(0,-2);if("px"!==e.slice(-2))return 0;var r=Number(t);return isNaN(r)&&(0,n.A)(!1),r},f=function(e,t){var r,n,o=e.borderBox,a=e.border,u=e.margin,i=e.padding,p=(n=t,{top:(r=o).top+n.y,left:r.left+n.x,bottom:r.bottom+n.y,right:r.right+n.x});return c({borderBox:p,border:a,margin:u,padding:i})},s=function(e,t){return void 0===t&&(t={x:window.pageXOffset,y:window.pageYOffset}),f(e,t)},d=function(e,t){var r={top:p(t.marginTop),right:p(t.marginRight),bottom:p(t.marginBottom),left:p(t.marginLeft)},n={top:p(t.paddingTop),right:p(t.paddingRight),bottom:p(t.paddingBottom),left:p(t.paddingLeft)},o={top:p(t.borderTopWidth),right:p(t.borderRightWidth),bottom:p(t.borderBottomWidth),left:p(t.borderLeftWidth)};return c({borderBox:e,margin:r,padding:n,border:o})},l=function(e){var t=e.getBoundingClientRect(),r=window.getComputedStyle(e);return d(t,r)}},219:(e,t,r)=>{var n=r(3763),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(e){return n.isMemo(e)?u:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=u;var p=Object.defineProperty,f=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var o=l(r);o&&o!==m&&e(t,o,n)}var u=f(r);s&&(u=u.concat(s(r)));for(var i=c(t),y=c(r),v=0;v<u.length;++v){var g=u[v];if(!a[g]&&(!n||!n[g])&&(!y||!y[g])&&(!i||!i[g])){var b=d(r,g);try{p(t,g,b)}catch(h){}}}}return t}},4983:(e,t)=>{var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,s=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,P=r?Symbol.for("react.scope"):60119;function S(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case s:case a:case i:case u:case l:return e;default:switch(e=e&&e.$$typeof){case p:case d:case v:case y:case c:return e;default:return t}}case o:return t}}}function w(e){return S(e)===s}t.AsyncMode=f,t.ConcurrentMode=s,t.ContextConsumer=p,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=v,t.Memo=y,t.Portal=o,t.Profiler=i,t.StrictMode=u,t.Suspense=l,t.isAsyncMode=function(e){return w(e)||S(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return S(e)===p},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===a},t.isLazy=function(e){return S(e)===v},t.isMemo=function(e){return S(e)===y},t.isPortal=function(e){return S(e)===o},t.isProfiler=function(e){return S(e)===i},t.isStrictMode=function(e){return S(e)===u},t.isSuspense=function(e){return S(e)===l},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===s||e===i||e===u||e===l||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===c||e.$$typeof===p||e.$$typeof===d||e.$$typeof===b||e.$$typeof===h||e.$$typeof===P||e.$$typeof===g)},t.typeOf=S},3763:(e,t,r)=>{e.exports=r(4983)},2906:(e,t,r)=>{r.d(t,{A:()=>a});var n=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function o(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(o=e[r],a=t[r],!(o===a||n(o)&&n(a)))return!1;var o,a;return!0}const a=function(e,t){var r;void 0===t&&(t=o);var n,a=[],u=!1;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return u&&r===this&&t(o,a)||(n=e.apply(this,o),u=!0,r=this,a=o),n}}},5356:(e,t,r)=>{r.d(t,{A:()=>n});const n=function(e){var t=[],r=null,n=function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];t=o,r||(r=requestAnimationFrame((function(){r=null,e.apply(void 0,t)})))};return n.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},n}},6397:(e,t,r)=>{r.d(t,{t:()=>n});var n=r(5043).createContext(null)},7745:(e,t,r)=>{r.d(t,{Kq:()=>i,Ng:()=>H});var n=r(5043),o=r(6397),a=r(4002),u=r(7454);const i=function(e){var t=e.store,r=e.context,i=e.children,c=(0,n.useMemo)((function(){var e=(0,a.K)(t);return{store:t,subscription:e}}),[t]),p=(0,n.useMemo)((function(){return t.getState()}),[t]);(0,u.E)((function(){var e=c.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),p!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[c,p]);var f=r||o.t;return n.createElement(f.Provider,{value:c},i)};var c=r(8168),p=r(8587),f=r(219),s=r.n(f),d=r(2706),l=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],m=["reactReduxForwardedRef"],y=[],v=[null,null];function g(e,t){var r=e[1];return[t.payload,r+1]}function b(e,t,r){(0,u.E)((function(){return e.apply(void 0,t)}),r)}function h(e,t,r,n,o,a,u){e.current=n,t.current=o,r.current=!1,a.current&&(a.current=null,u())}function P(e,t,r,n,o,a,u,i,c,p){if(e){var f=!1,s=null,d=function(){if(!f){var e,r,d=t.getState();try{e=n(d,o.current)}catch(l){r=l,s=l}r||(s=null),e===a.current?u.current||c():(a.current=e,i.current=e,u.current=!0,p({type:"STORE_UPDATED",payload:{error:r}}))}};r.onStateChange=d,r.trySubscribe(),d();return function(){if(f=!0,r.tryUnsubscribe(),r.onStateChange=null,s)throw s}}}var S=function(){return[null,0]};function w(e,t){void 0===t&&(t={});var r=t,u=r.getDisplayName,i=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,f=r.methodName,w=void 0===f?"connectAdvanced":f,O=r.renderCountProp,C=void 0===O?void 0:O,x=r.shouldHandleStateChanges,M=void 0===x||x,N=r.storeKey,E=void 0===N?"store":N,$=(r.withRef,r.forwardRef),T=void 0!==$&&$,A=r.context,R=void 0===A?o.t:A,B=(0,p.A)(r,l),q=R;return function(t){var r=t.displayName||t.name||"Component",o=i(r),u=(0,c.A)({},B,{getDisplayName:i,methodName:w,renderCountProp:C,shouldHandleStateChanges:M,storeKey:E,displayName:o,wrappedComponentName:r,WrappedComponent:t}),f=B.pure;var l=f?n.useMemo:function(e){return e()};function O(r){var o=(0,n.useMemo)((function(){var e=r.reactReduxForwardedRef,t=(0,p.A)(r,m);return[r.context,e,t]}),[r]),i=o[0],f=o[1],s=o[2],w=(0,n.useMemo)((function(){return i&&i.Consumer&&(0,d.isContextConsumer)(n.createElement(i.Consumer,null))?i:q}),[i,q]),O=(0,n.useContext)(w),C=Boolean(r.store)&&Boolean(r.store.getState)&&Boolean(r.store.dispatch);Boolean(O)&&Boolean(O.store);var x=C?r.store:O.store,N=(0,n.useMemo)((function(){return function(t){return e(t.dispatch,u)}(x)}),[x]),E=(0,n.useMemo)((function(){if(!M)return v;var e=(0,a.K)(x,C?null:O.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[x,C,O]),$=E[0],T=E[1],A=(0,n.useMemo)((function(){return C?O:(0,c.A)({},O,{subscription:$})}),[C,O,$]),R=(0,n.useReducer)(g,y,S),B=R[0][0],F=R[1];if(B&&B.error)throw B.error;var D=(0,n.useRef)(),j=(0,n.useRef)(s),_=(0,n.useRef)(),W=(0,n.useRef)(!1),H=l((function(){return _.current&&s===j.current?_.current:N(x.getState(),s)}),[x,B,s]);b(h,[j,D,W,s,H,_,T]),b(P,[M,x,$,N,j,D,W,_,T,F],[x,$,N]);var K=(0,n.useMemo)((function(){return n.createElement(t,(0,c.A)({},H,{ref:f}))}),[f,t,H]);return(0,n.useMemo)((function(){return M?n.createElement(w.Provider,{value:A},K):K}),[w,K,A])}var x=f?n.memo(O):O;if(x.WrappedComponent=t,x.displayName=O.displayName=o,T){var N=n.forwardRef((function(e,t){return n.createElement(x,(0,c.A)({},e,{reactReduxForwardedRef:t}))}));return N.displayName=o,N.WrappedComponent=t,s()(N,t)}return s()(x,t)}}var O=r(4139),C=r(5419);function x(e){return function(t,r){var n=e(t,r);function o(){return n}return o.dependsOnOwnProps=!1,o}}function M(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function N(e,t){return function(t,r){r.displayName;var n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=M(e);var o=n(t,r);return"function"===typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=M(o),o=n(t,r)),o},n}}const E=[function(e){return"function"===typeof e?N(e):void 0},function(e){return e?void 0:x((function(e){return{dispatch:e}}))},function(e){return e&&"object"===typeof e?x((function(t){return(0,C.A)(e,t)})):void 0}];const $=[function(e){return"function"===typeof e?N(e):void 0},function(e){return e?void 0:x((function(){return{}}))}];function T(e,t,r){return(0,c.A)({},r,e,t)}const A=[function(e){return"function"===typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,a=r.areMergedPropsEqual,u=!1;return function(t,r,i){var c=e(t,r,i);return u?o&&a(c,n)||(n=c):(u=!0,n=c),n}}}(e):void 0},function(e){return e?void 0:function(){return T}}];var R=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function B(e,t,r,n){return function(o,a){return r(e(o,a),t(n,a),a)}}function q(e,t,r,n,o){var a,u,i,c,p,f=o.areStatesEqual,s=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1;function m(o,l){var m=!s(l,u),y=!f(o,a,l,u);return a=o,u=l,m&&y?(i=e(a,u),t.dependsOnOwnProps&&(c=t(n,u)),p=r(i,c,u)):m?(e.dependsOnOwnProps&&(i=e(a,u)),t.dependsOnOwnProps&&(c=t(n,u)),p=r(i,c,u)):y?function(){var t=e(a,u),n=!d(t,i);return i=t,n&&(p=r(i,c,u)),p}():p}return function(o,f){return l?m(o,f):(i=e(a=o,u=f),c=t(n,u),p=r(i,c,u),l=!0,p)}}function F(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,a=(0,p.A)(t,R),u=r(e,a),i=n(e,a),c=o(e,a);return(a.pure?q:B)(u,i,c,e,a)}var D=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function j(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function _(e,t){return e===t}function W(e){var t=void 0===e?{}:e,r=t.connectHOC,n=void 0===r?w:r,o=t.mapStateToPropsFactories,a=void 0===o?$:o,u=t.mapDispatchToPropsFactories,i=void 0===u?E:u,f=t.mergePropsFactories,s=void 0===f?A:f,d=t.selectorFactory,l=void 0===d?F:d;return function(e,t,r,o){void 0===o&&(o={});var u=o,f=u.pure,d=void 0===f||f,m=u.areStatesEqual,y=void 0===m?_:m,v=u.areOwnPropsEqual,g=void 0===v?O.A:v,b=u.areStatePropsEqual,h=void 0===b?O.A:b,P=u.areMergedPropsEqual,S=void 0===P?O.A:P,w=(0,p.A)(u,D),C=j(e,a,"mapStateToProps"),x=j(t,i,"mapDispatchToProps"),M=j(r,s,"mergeProps");return n(l,(0,c.A)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:C,initMapDispatchToProps:x,initMergeProps:M,pure:d,areStatesEqual:y,areOwnPropsEqual:g,areStatePropsEqual:h,areMergedPropsEqual:S},w))}}const H=W();r(3316);r(9280)},9880:(e,t,r)=>{r(5043),r(6397)}}]);
//# sourceMappingURL=7689.7907eeab.js.map
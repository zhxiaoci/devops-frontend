"use strict";(self.webpackChunkgithub_devops_frontend=self.webpackChunkgithub_devops_frontend||[]).push([[511],{1066:(e,n,r)=>{r.d(n,{A:()=>z});var t=r(9379),i=r(436),a=r(2284),u=r(3029),o=r(2901),s=r(4467);function c(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var f=c(),l=r(9417),d=r(5501),p=r(9640),h=r(3437),v=/%[sdj%]/g;function y(e){if(!e||!e.length)return null;var n={};return e.forEach((function(e){var r=e.field;n[r]=n[r]||[],n[r].push(e)})),n}function g(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var i=0,a=r.length;return"function"===typeof e?e.apply(null,r):"string"===typeof e?e.replace(v,(function(e){if("%%"===e)return"%";if(i>=a)return e;switch(e){case"%s":return String(r[i++]);case"%d":return Number(r[i++]);case"%j":try{return JSON.stringify(r[i++])}catch(n){return"[Circular]"}break;default:return e}})):e}function m(e,n){return void 0===e||null===e||(!("array"!==n||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(n)||"string"!==typeof e||e))}function A(e,n,r){var t=0,i=e.length;!function a(u){if(u&&u.length)r(u);else{var o=t;t+=1,o<i?n(e[o],a):r([])}}([])}var b=function(e){(0,d.A)(r,e);var n=(0,p.A)(r);function r(e,t){var i;return(0,u.A)(this,r),i=n.call(this,"Async Validation Error"),(0,s.A)((0,l.A)(i),"errors",void 0),(0,s.A)((0,l.A)(i),"fields",void 0),i.errors=e,i.fields=t,i}return(0,o.A)(r)}((0,h.A)(Error));function q(e,n,r,t,a){if(n.first){var u=new Promise((function(n,u){var o=function(e){var n=[];return Object.keys(e).forEach((function(r){n.push.apply(n,(0,i.A)(e[r]||[]))})),n}(e);A(o,r,(function(e){return t(e),e.length?u(new b(e,y(e))):n(a)}))}));return u.catch((function(e){return e})),u}var o=!0===n.firstFields?Object.keys(e):n.firstFields||[],s=Object.keys(e),c=s.length,f=0,l=[],d=new Promise((function(n,u){var d=function(e){if(l.push.apply(l,e),++f===c)return t(l),l.length?u(new b(l,y(l))):n(a)};s.length||(t(l),n(a)),s.forEach((function(n){var t=e[n];-1!==o.indexOf(n)?A(t,r,d):function(e,n,r){var t=[],a=0,u=e.length;function o(e){t.push.apply(t,(0,i.A)(e||[])),++a===u&&r(t)}e.forEach((function(e){n(e,o)}))}(t,r,d)}))}));return d.catch((function(e){return e})),d}function w(e,n){return function(r){var t,i;return t=e.fullFields?function(e,n){for(var r=e,t=0;t<n.length;t++){if(void 0==r)return r;r=r[n[t]]}return r}(n,e.fullFields):n[r.field||e.fullField],(i=r)&&void 0!==i.message?(r.field=r.field||e.fullField,r.fieldValue=t,r):{message:"function"===typeof r?r():r,fieldValue:t,field:r.field||e.fullField}}}function F(e,n){if(n)for(var r in n)if(n.hasOwnProperty(r)){var i=n[r];"object"===(0,a.A)(i)&&"object"===(0,a.A)(e[r])?e[r]=(0,t.A)((0,t.A)({},e[r]),i):e[r]=i}return e}var x="enum";const E=function(e,n,r,t,i,a){!e.required||r.hasOwnProperty(e.field)&&!m(n,a||e.type)||t.push(g(i.messages.required,e.fullField))};var O;var j=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,k=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,P={integer:function(e){return P.number(e)&&parseInt(e,10)===e},float:function(e){return P.number(e)&&!P.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(n){return!1}},date:function(e){return"function"===typeof e.getTime&&"function"===typeof e.getMonth&&"function"===typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"===typeof e},object:function(e){return"object"===(0,a.A)(e)&&!P.array(e)},method:function(e){return"function"===typeof e},email:function(e){return"string"===typeof e&&e.length<=320&&!!e.match(j)},url:function(e){return"string"===typeof e&&e.length<=2048&&!!e.match(function(){if(O)return O;var e="[a-fA-F\\d:]",n=function(n){return n&&n.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(e,")|(?<=").concat(e,")(?=\\s|$))"):""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",t="[a-fA-F\\d]{1,4}",i=["(?:".concat(t,":){7}(?:").concat(t,"|:)"),"(?:".concat(t,":){6}(?:").concat(r,"|:").concat(t,"|:)"),"(?:".concat(t,":){5}(?::").concat(r,"|(?::").concat(t,"){1,2}|:)"),"(?:".concat(t,":){4}(?:(?::").concat(t,"){0,1}:").concat(r,"|(?::").concat(t,"){1,3}|:)"),"(?:".concat(t,":){3}(?:(?::").concat(t,"){0,2}:").concat(r,"|(?::").concat(t,"){1,4}|:)"),"(?:".concat(t,":){2}(?:(?::").concat(t,"){0,3}:").concat(r,"|(?::").concat(t,"){1,5}|:)"),"(?:".concat(t,":){1}(?:(?::").concat(t,"){0,4}:").concat(r,"|(?::").concat(t,"){1,6}|:)"),"(?::(?:(?::".concat(t,"){0,5}:").concat(r,"|(?::").concat(t,"){1,7}|:))")],a="(?:".concat(i.join("|"),")").concat("(?:%[0-9a-zA-Z]{1,})?"),u=new RegExp("(?:^".concat(r,"$)|(?:^").concat(a,"$)")),o=new RegExp("^".concat(r,"$")),s=new RegExp("^".concat(a,"$")),c=function(e){return e&&e.exact?u:new RegExp("(?:".concat(n(e)).concat(r).concat(n(e),")|(?:").concat(n(e)).concat(a).concat(n(e),")"),"g")};c.v4=function(e){return e&&e.exact?o:new RegExp("".concat(n(e)).concat(r).concat(n(e)),"g")},c.v6=function(e){return e&&e.exact?s:new RegExp("".concat(n(e)).concat(a).concat(n(e)),"g")};var f=c.v4().source,l=c.v6().source,d="(?:".concat("(?:(?:[a-z]+:)?//)","|www\\.)").concat("(?:\\S+(?::\\S*)?@)?","(?:localhost|").concat(f,"|").concat(l,"|").concat("(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)").concat("(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*").concat("(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?');return O=new RegExp("(?:^".concat(d,"$)"),"i")}())},hex:function(e){return"string"===typeof e&&!!e.match(k)}};const D=function(e,n,r,t,i){if(e.required&&void 0===n)E(e,n,r,t,i);else{var u=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(u)>-1?P[u](n)||t.push(g(i.messages.types[u],e.fullField,e.type)):u&&(0,a.A)(n)!==e.type&&t.push(g(i.messages.types[u],e.fullField,e.type))}};const R={required:E,whitespace:function(e,n,r,t,i){(/^\s+$/.test(n)||""===n)&&t.push(g(i.messages.whitespace,e.fullField))},type:D,range:function(e,n,r,t,i){var a="number"===typeof e.len,u="number"===typeof e.min,o="number"===typeof e.max,s=n,c=null,f="number"===typeof n,l="string"===typeof n,d=Array.isArray(n);if(f?c="number":l?c="string":d&&(c="array"),!c)return!1;d&&(s=n.length),l&&(s=n.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?s!==e.len&&t.push(g(i.messages[c].len,e.fullField,e.len)):u&&!o&&s<e.min?t.push(g(i.messages[c].min,e.fullField,e.min)):o&&!u&&s>e.max?t.push(g(i.messages[c].max,e.fullField,e.max)):u&&o&&(s<e.min||s>e.max)&&t.push(g(i.messages[c].range,e.fullField,e.min,e.max))},enum:function(e,n,r,t,i){e[x]=Array.isArray(e[x])?e[x]:[],-1===e[x].indexOf(n)&&t.push(g(i.messages[x],e.fullField,e[x].join(", ")))},pattern:function(e,n,r,t,i){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(n)||t.push(g(i.messages.pattern.mismatch,e.fullField,n,e.pattern));else if("string"===typeof e.pattern){new RegExp(e.pattern).test(n)||t.push(g(i.messages.pattern.mismatch,e.fullField,n,e.pattern))}}};const C=function(e,n,r,t,i){var u=[],o=Array.isArray(n)?"array":(0,a.A)(n);R.required(e,n,t,u,i,o),r(u)};const S=function(e,n,r,t,i){var a=e.type,u=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n,a)&&!e.required)return r();R.required(e,n,t,u,i,a),m(n,a)||R.type(e,n,t,u,i)}r(u)},V={string:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n,"string")&&!e.required)return r();R.required(e,n,t,a,i,"string"),m(n,"string")||(R.type(e,n,t,a,i),R.range(e,n,t,a,i),R.pattern(e,n,t,a,i),!0===e.whitespace&&R.whitespace(e,n,t,a,i))}r(a)},method:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n)&&!e.required)return r();R.required(e,n,t,a,i),void 0!==n&&R.type(e,n,t,a,i)}r(a)},number:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(""===n&&(n=void 0),m(n)&&!e.required)return r();R.required(e,n,t,a,i),void 0!==n&&(R.type(e,n,t,a,i),R.range(e,n,t,a,i))}r(a)},boolean:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n)&&!e.required)return r();R.required(e,n,t,a,i),void 0!==n&&R.type(e,n,t,a,i)}r(a)},regexp:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n)&&!e.required)return r();R.required(e,n,t,a,i),m(n)||R.type(e,n,t,a,i)}r(a)},integer:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n)&&!e.required)return r();R.required(e,n,t,a,i),void 0!==n&&(R.type(e,n,t,a,i),R.range(e,n,t,a,i))}r(a)},float:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n)&&!e.required)return r();R.required(e,n,t,a,i),void 0!==n&&(R.type(e,n,t,a,i),R.range(e,n,t,a,i))}r(a)},array:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if((void 0===n||null===n)&&!e.required)return r();R.required(e,n,t,a,i,"array"),void 0!==n&&null!==n&&(R.type(e,n,t,a,i),R.range(e,n,t,a,i))}r(a)},object:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n)&&!e.required)return r();R.required(e,n,t,a,i),void 0!==n&&R.type(e,n,t,a,i)}r(a)},enum:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n)&&!e.required)return r();R.required(e,n,t,a,i),void 0!==n&&R.enum(e,n,t,a,i)}r(a)},pattern:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n,"string")&&!e.required)return r();R.required(e,n,t,a,i),m(n,"string")||R.pattern(e,n,t,a,i)}r(a)},date:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n,"date")&&!e.required)return r();var u;if(R.required(e,n,t,a,i),!m(n,"date"))u=n instanceof Date?n:new Date(n),R.type(e,u,t,a,i),u&&R.range(e,u.getTime(),t,a,i)}r(a)},url:S,hex:S,email:S,required:C,any:function(e,n,r,t,i){var a=[];if(e.required||!e.required&&t.hasOwnProperty(e.field)){if(m(n)&&!e.required)return r();R.required(e,n,t,a,i)}r(a)}};var _=function(){function e(n){(0,u.A)(this,e),(0,s.A)(this,"rules",null),(0,s.A)(this,"_messages",f),this.define(n)}return(0,o.A)(e,[{key:"define",value:function(e){var n=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!==(0,a.A)(e)||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(r){var t=e[r];n.rules[r]=Array.isArray(t)?t:[t]}))}},{key:"messages",value:function(e){return e&&(this._messages=F(c(),e)),this._messages}},{key:"validate",value:function(n){var r=this,u=n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};if("function"===typeof o&&(s=o,o={}),!this.rules||0===Object.keys(this.rules).length)return s&&s(null,u),Promise.resolve(u);if(o.messages){var l=this.messages();l===f&&(l=c()),F(l,o.messages),o.messages=l}else o.messages=this.messages();var d={};(o.keys||Object.keys(this.rules)).forEach((function(e){var i=r.rules[e],o=u[e];i.forEach((function(i){var s=i;"function"===typeof s.transform&&(u===n&&(u=(0,t.A)({},u)),void 0!==(o=u[e]=s.transform(o))&&null!==o&&(s.type=s.type||(Array.isArray(o)?"array":(0,a.A)(o)))),(s="function"===typeof s?{validator:s}:(0,t.A)({},s)).validator=r.getValidationMethod(s),s.validator&&(s.field=e,s.fullField=s.fullField||e,s.type=r.getType(s),d[e]=d[e]||[],d[e].push({rule:s,value:o,source:u,field:e}))}))}));var p={};return q(d,o,(function(n,r){var s,c=n.rule,f=("object"===c.type||"array"===c.type)&&("object"===(0,a.A)(c.fields)||"object"===(0,a.A)(c.defaultField));function l(e,n){return(0,t.A)((0,t.A)({},n),{},{fullField:"".concat(c.fullField,".").concat(e),fullFields:c.fullFields?[].concat((0,i.A)(c.fullFields),[e]):[e]})}function d(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=Array.isArray(a)?a:[a];!o.suppressWarning&&s.length&&e.warning("async-validator:",s),s.length&&void 0!==c.message&&(s=[].concat(c.message));var d=s.map(w(c,u));if(o.first&&d.length)return p[c.field]=1,r(d);if(f){if(c.required&&!n.value)return void 0!==c.message?d=[].concat(c.message).map(w(c,u)):o.error&&(d=[o.error(c,g(o.messages.required,c.field))]),r(d);var h={};c.defaultField&&Object.keys(n.value).map((function(e){h[e]=c.defaultField})),h=(0,t.A)((0,t.A)({},h),n.rule.fields);var v={};Object.keys(h).forEach((function(e){var n=h[e],r=Array.isArray(n)?n:[n];v[e]=r.map(l.bind(null,e))}));var y=new e(v);y.messages(o.messages),n.rule.options&&(n.rule.options.messages=o.messages,n.rule.options.error=o.error),y.validate(n.value,n.rule.options||o,(function(e){var n=[];d&&d.length&&n.push.apply(n,(0,i.A)(d)),e&&e.length&&n.push.apply(n,(0,i.A)(e)),r(n.length?n:null)}))}else r(d)}if(f=f&&(c.required||!c.required&&n.value),c.field=n.field,c.asyncValidator)s=c.asyncValidator(c,n.value,d,n.source,o);else if(c.validator){try{s=c.validator(c,n.value,d,n.source,o)}catch(y){var h,v;null===(h=(v=console).error)||void 0===h||h.call(v,y),o.suppressValidatorError||setTimeout((function(){throw y}),0),d(y.message)}!0===s?d():!1===s?d("function"===typeof c.message?c.message(c.fullField||c.field):c.message||"".concat(c.fullField||c.field," fails")):s instanceof Array?d(s):s instanceof Error&&d(s.message)}s&&s.then&&s.then((function(){return d()}),(function(e){return d(e)}))}),(function(e){!function(e){var n=[],r={};function t(e){var r;Array.isArray(e)?n=(r=n).concat.apply(r,(0,i.A)(e)):n.push(e)}for(var a=0;a<e.length;a++)t(e[a]);n.length?(r=y(n),s(n,r)):s(null,u)}(e)}),u)}},{key:"getType",value:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!==typeof e.validator&&e.type&&!V.hasOwnProperty(e.type))throw new Error(g("Unknown rule type %s",e.type));return e.type||"string"}},{key:"getValidationMethod",value:function(e){if("function"===typeof e.validator)return e.validator;var n=Object.keys(e),r=n.indexOf("message");return-1!==r&&n.splice(r,1),1===n.length&&"required"===n[0]?V.required:V[this.getType(e)]||void 0}}]),e}();(0,s.A)(_,"register",(function(e,n){if("function"!==typeof n)throw new Error("Cannot register a validator by type, validator is not a function");V[e]=n})),(0,s.A)(_,"warning",(function(){})),(0,s.A)(_,"messages",f),(0,s.A)(_,"validators",V);const z=_},2019:(e,n,r)=>{r.d(n,{Q1:()=>h});r(5043);var t=r(3029),i=r(2901),a=r(5501),u=r(9640),o=r(9379),s=r(45),c=r(2284),f=r(1857),l=["b"],d=["v"],p=function(e){return Math.round(Number(e||0))},h=function(e){(0,a.A)(r,e);var n=(0,u.A)(r);function r(e){return(0,t.A)(this,r),n.call(this,function(e){if(e instanceof f.Y)return e;if(e&&"object"===(0,c.A)(e)&&"h"in e&&"b"in e){var n=e,r=n.b,t=(0,s.A)(n,l);return(0,o.A)((0,o.A)({},t),{},{v:r})}return"string"===typeof e&&/hsb/.test(e)?e.replace(/hsb/,"hsv"):e}(e))}return(0,i.A)(r,[{key:"toHsbString",value:function(){var e=this.toHsb(),n=p(100*e.s),r=p(100*e.b),t=p(e.h),i=e.a,a="hsb(".concat(t,", ").concat(n,"%, ").concat(r,"%)"),u="hsba(".concat(t,", ").concat(n,"%, ").concat(r,"%, ").concat(i.toFixed(0===i?0:2),")");return 1===i?a:u}},{key:"toHsb",value:function(){var e=this.toHsv(),n=e.v,r=(0,s.A)(e,d);return(0,o.A)((0,o.A)({},r),{},{b:n,a:this.a})}}]),r}(f.Y),v=function(e){return e instanceof h?e:new h(e)};v("#1677ff"),r(8139);r(7483)},4347:(e,n,r)=>{r.d(n,{A:()=>A});var t=r(5544),i=r(5043),a=r(7950),u=r(2931),o=(r(7907),r(3758));const s=i.createContext(null);var c=r(436),f=r(2664),l=[];var d=r(930),p=r(8200);var h="rc-util-locker-".concat(Date.now()),v=0;function y(e){var n=!!e,r=i.useState((function(){return v+=1,"".concat(h,"_").concat(v)})),a=(0,t.A)(r,1)[0];(0,f.A)((function(){if(n){var e=(0,p.V)(document.body).width,r=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,d.BD)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(r?"width: calc(100% - ".concat(e,"px);"):"","\n}"),a)}else(0,d.m6)(a);return function(){(0,d.m6)(a)}}),[n,a])}var g=!1;var m=function(e){return!1!==e&&((0,u.A)()&&e?"string"===typeof e?document.querySelector(e):"function"===typeof e?e():e:null)};const A=i.forwardRef((function(e,n){var r=e.open,d=e.autoLock,p=e.getContainer,h=(e.debug,e.autoDestroy),v=void 0===h||h,A=e.children,b=i.useState(r),q=(0,t.A)(b,2),w=q[0],F=q[1],x=w||r;i.useEffect((function(){(v||r)&&F(r)}),[r,v]);var E=i.useState((function(){return m(p)})),O=(0,t.A)(E,2),j=O[0],k=O[1];i.useEffect((function(){var e=m(p);k(null!==e&&void 0!==e?e:null)}));var P=function(e){var n=i.useState((function(){return(0,u.A)()?document.createElement("div"):null})),r=(0,t.A)(n,1)[0],a=i.useRef(!1),o=i.useContext(s),d=i.useState(l),p=(0,t.A)(d,2),h=p[0],v=p[1],y=o||(a.current?void 0:function(e){v((function(n){return[e].concat((0,c.A)(n))}))});function g(){r.parentElement||document.body.appendChild(r),a.current=!0}function m(){var e;null===(e=r.parentElement)||void 0===e||e.removeChild(r),a.current=!1}return(0,f.A)((function(){return e?o?o(g):g():m(),m}),[e]),(0,f.A)((function(){h.length&&(h.forEach((function(e){return e()})),v(l))}),[h]),[r,y]}(x&&!j),D=(0,t.A)(P,2),R=D[0],C=D[1],S=null!==j&&void 0!==j?j:R;y(d&&r&&(0,u.A)()&&(S===R||S===document.body));var V=null;A&&(0,o.f3)(A)&&n&&(V=A.ref);var _=(0,o.xK)(V,n);if(!x||!(0,u.A)()||void 0===j)return null;var z,N=!1===S||("boolean"===typeof z&&(g=z),g),$=A;return n&&($=i.cloneElement(A,{ref:_})),i.createElement(s.Provider,{value:C},N?$:(0,a.createPortal)($,S))}))}}]);
//# sourceMappingURL=main-1db9aec9.js.map
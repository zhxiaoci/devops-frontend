"use strict";(self.webpackChunkgithub_devops_frontend=self.webpackChunkgithub_devops_frontend||[]).push([[512],{43996:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(65043).createContext(null)},85335:(e,n,t)=>{t.d(n,{A:()=>p});var o=t(58168),r=t(64467),a=t(89379),i=t(80045),u=t(54017),l=t(98139),c=t.n(l),s=t(65043),d=["prefixCls","disabled","visible","children","popupElement","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],f=function(e,n){var t=e.prefixCls,l=(e.disabled,e.visible),f=e.children,p=e.popupElement,v=e.animation,m=e.transitionName,A=e.dropdownStyle,h=e.dropdownClassName,b=e.direction,g=void 0===b?"ltr":b,y=e.placement,w=e.builtinPlacements,C=e.dropdownMatchSelectWidth,E=e.dropdownRender,S=e.dropdownAlign,x=e.getPopupContainer,I=e.empty,M=e.getTriggerDOMNode,N=e.onPopupVisibleChange,D=e.onPopupMouseEnter,R=(0,i.A)(e,d),P="".concat(t,"-dropdown"),k=p;E&&(k=E(p));var O=s.useMemo((function(){return w||function(e){var n=!0===e?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:n,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:n,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:n,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:n,adjustY:1},htmlRegion:"scroll"}}}(C)}),[w,C]),T=v?"".concat(P,"-").concat(v):m,V="number"===typeof C,L=s.useMemo((function(){return V?null:!1===C?"minWidth":"width"}),[C,V]),F=A;V&&(F=(0,a.A)((0,a.A)({},F),{},{width:C}));var _=s.useRef(null);return s.useImperativeHandle(n,(function(){return{getPopupElement:function(){var e;return null===(e=_.current)||void 0===e?void 0:e.popupElement}}})),s.createElement(u.A,(0,o.A)({},R,{showAction:N?["click"]:[],hideAction:N?["click"]:[],popupPlacement:y||("rtl"===g?"bottomRight":"bottomLeft"),builtinPlacements:O,prefixCls:P,popupTransitionName:T,popup:s.createElement("div",{onMouseEnter:D},k),ref:_,stretch:L,popupAlign:S,popupVisible:l,getPopupContainer:x,popupClassName:c()(h,(0,r.A)({},"".concat(P,"-empty"),I)),popupStyle:F,getTriggerDOMNode:M,onPopupVisibleChange:N}),f)};const p=s.forwardRef(f)},92205:(e,n,t)=>{t.d(n,{A:()=>x});var o=t(58168),r=t(5544),a=t(25001),i=t(65043),u=t(63160);var l=t(64467),c=t(98139),s=t.n(c),d=t(48060),f=t(69944),p=t(78437),v=t(89379),m=t(13758),A=t(97907),h=function(e,n){var t,o=e.prefixCls,r=e.id,a=e.inputElement,u=e.disabled,l=e.tabIndex,c=e.autoFocus,d=e.autoComplete,f=e.editable,p=e.activeDescendantId,h=e.value,b=e.maxLength,g=e.onKeyDown,y=e.onMouseDown,w=e.onChange,C=e.onPaste,E=e.onCompositionStart,S=e.onCompositionEnd,x=e.open,I=e.attrs,M=a||i.createElement("input",null),N=M,D=N.ref,R=N.props,P=R.onKeyDown,k=R.onChange,O=R.onMouseDown,T=R.onCompositionStart,V=R.onCompositionEnd,L=R.style;return(0,A.$e)(!("maxLength"in M.props),"Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."),M=i.cloneElement(M,(0,v.A)((0,v.A)((0,v.A)({type:"search"},R),{},{id:r,ref:(0,m.K4)(n,D),disabled:u,tabIndex:l,autoComplete:d||"off",autoFocus:c,className:s()("".concat(o,"-selection-search-input"),null===(t=M)||void 0===t||null===(t=t.props)||void 0===t?void 0:t.className),role:"combobox","aria-expanded":x||!1,"aria-haspopup":"listbox","aria-owns":"".concat(r,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(r,"_list"),"aria-activedescendant":x?p:void 0},I),{},{value:f?h:"",maxLength:b,readOnly:!f,unselectable:f?null:"on",style:(0,v.A)((0,v.A)({},L),{},{opacity:f?null:0}),onKeyDown:function(e){g(e),P&&P(e)},onMouseDown:function(e){y(e),O&&O(e)},onChange:function(e){w(e),k&&k(e)},onCompositionStart:function(e){E(e),T&&T(e)},onCompositionEnd:function(e){S(e),V&&V(e)},onPaste:C}))};const b=i.forwardRef(h);var g=t(97412);function y(e){var n;return null!==(n=e.key)&&void 0!==n?n:e.value}var w=function(e){e.preventDefault(),e.stopPropagation()};const C=function(e){var n,t,o=e.id,a=e.prefixCls,u=e.values,c=e.open,v=e.searchValue,m=e.autoClearSearchValue,A=e.inputRef,h=e.placeholder,C=e.disabled,E=e.mode,S=e.showSearch,x=e.autoFocus,I=e.autoComplete,M=e.activeDescendantId,N=e.tabIndex,D=e.removeIcon,R=e.maxTagCount,P=e.maxTagTextLength,k=e.maxTagPlaceholder,O=void 0===k?function(e){return"+ ".concat(e.length," ...")}:k,T=e.tagRender,V=e.onToggleOpen,L=e.onRemove,F=e.onInputChange,_=e.onInputPaste,K=e.onInputKeyDown,z=e.onInputMouseDown,H=e.onInputCompositionStart,W=e.onInputCompositionEnd,j=i.useRef(null),B=(0,i.useState)(0),U=(0,r.A)(B,2),$=U[0],X=U[1],G=(0,i.useState)(!1),Y=(0,r.A)(G,2),J=Y[0],Z=Y[1],Q="".concat(a,"-selection"),q=c||"multiple"===E&&!1===m||"tags"===E?v:"",ee="tags"===E||"multiple"===E&&!1===m||S&&(c||J);n=function(){X(j.current.scrollWidth)},t=[q],g.Cg?i.useLayoutEffect(n,t):i.useEffect(n,t);var ne=function(e,n,t,o,r){return i.createElement("span",{title:(0,g.LK)(e),className:s()("".concat(Q,"-item"),(0,l.A)({},"".concat(Q,"-item-disabled"),t))},i.createElement("span",{className:"".concat(Q,"-item-content")},n),o&&i.createElement(p.A,{className:"".concat(Q,"-item-remove"),onMouseDown:w,onClick:r,customizeIcon:D},"\xd7"))},te=function(e,n,t,o,r,a){return i.createElement("span",{onMouseDown:function(e){w(e),V(!c)}},T({label:n,value:e,disabled:t,closable:o,onClose:r,isMaxTag:!!a}))},oe=i.createElement("div",{className:"".concat(Q,"-search"),style:{width:$},onFocus:function(){Z(!0)},onBlur:function(){Z(!1)}},i.createElement(b,{ref:A,open:c,prefixCls:a,id:o,inputElement:null,disabled:C,autoFocus:x,autoComplete:I,editable:ee,activeDescendantId:M,value:q,onKeyDown:K,onMouseDown:z,onChange:F,onPaste:_,onCompositionStart:H,onCompositionEnd:W,tabIndex:N,attrs:(0,d.A)(e,!0)}),i.createElement("span",{ref:j,className:"".concat(Q,"-search-mirror"),"aria-hidden":!0},q,"\xa0")),re=i.createElement(f.A,{prefixCls:"".concat(Q,"-overflow"),data:u,renderItem:function(e){var n=e.disabled,t=e.label,o=e.value,r=!C&&!n,a=t;if("number"===typeof P&&("string"===typeof t||"number"===typeof t)){var i=String(a);i.length>P&&(a="".concat(i.slice(0,P),"..."))}var u=function(n){n&&n.stopPropagation(),L(e)};return"function"===typeof T?te(o,a,n,r,u):ne(e,a,n,r,u)},renderRest:function(e){var n="function"===typeof O?O(e):O;return"function"===typeof T?te(void 0,n,!1,!1,void 0,!0):ne({title:n},n,!1)},suffix:oe,itemKey:y,maxCount:R});return i.createElement("span",{className:"".concat(Q,"-wrap")},re,!u.length&&!q&&i.createElement("span",{className:"".concat(Q,"-placeholder")},h))};const E=function(e){var n=e.inputElement,t=e.prefixCls,o=e.id,a=e.inputRef,u=e.disabled,l=e.autoFocus,c=e.autoComplete,s=e.activeDescendantId,f=e.mode,p=e.open,v=e.values,m=e.placeholder,A=e.tabIndex,h=e.showSearch,y=e.searchValue,w=e.activeValue,C=e.maxLength,E=e.onInputKeyDown,S=e.onInputMouseDown,x=e.onInputChange,I=e.onInputPaste,M=e.onInputCompositionStart,N=e.onInputCompositionEnd,D=e.title,R=i.useState(!1),P=(0,r.A)(R,2),k=P[0],O=P[1],T="combobox"===f,V=T||h,L=v[0],F=y||"";T&&w&&!k&&(F=w),i.useEffect((function(){T&&O(!1)}),[T,w]);var _=!("combobox"!==f&&!p&&!h)&&!!F,K=void 0===D?(0,g.LK)(L):D,z=i.useMemo((function(){return L?null:i.createElement("span",{className:"".concat(t,"-selection-placeholder"),style:_?{visibility:"hidden"}:void 0},m)}),[L,_,m,t]);return i.createElement("span",{className:"".concat(t,"-selection-wrap")},i.createElement("span",{className:"".concat(t,"-selection-search")},i.createElement(b,{ref:a,prefixCls:t,id:o,open:p,inputElement:n,disabled:u,autoFocus:l,autoComplete:c,editable:V,activeDescendantId:s,value:F,onKeyDown:E,onMouseDown:S,onChange:function(e){O(!0),x(e)},onPaste:I,onCompositionStart:M,onCompositionEnd:N,tabIndex:A,attrs:(0,d.A)(e,!0),maxLength:T?C:void 0})),!T&&L?i.createElement("span",{className:"".concat(t,"-selection-item"),title:K,style:_?{visibility:"hidden"}:void 0},L.label):null,z)};var S=function(e,n){var t=(0,i.useRef)(null),l=(0,i.useRef)(!1),c=e.prefixCls,s=e.open,d=e.mode,f=e.showSearch,p=e.tokenWithEnter,v=e.disabled,m=e.prefix,A=e.autoClearSearchValue,h=e.onSearch,b=e.onSearchSubmit,g=e.onToggleOpen,y=e.onInputKeyDown,w=e.domRef;i.useImperativeHandle(n,(function(){return{focus:function(e){t.current.focus(e)},blur:function(){t.current.blur()}}}));var S=(0,u.A)(0),x=(0,r.A)(S,2),I=x[0],M=x[1],N=(0,i.useRef)(null),D=function(e){!1!==h(e,!0,l.current)&&g(!0)},R={inputRef:t,onInputKeyDown:function(e){var n,o=e.which,r=t.current instanceof HTMLTextAreaElement;(r||!s||o!==a.A.UP&&o!==a.A.DOWN||e.preventDefault(),y&&y(e),o!==a.A.ENTER||"tags"!==d||l.current||s||null===b||void 0===b||b(e.target.value),r&&!s&&~[a.A.UP,a.A.DOWN,a.A.LEFT,a.A.RIGHT].indexOf(o))||(n=o,[a.A.ESC,a.A.SHIFT,a.A.BACKSPACE,a.A.TAB,a.A.WIN_KEY,a.A.ALT,a.A.META,a.A.WIN_KEY_RIGHT,a.A.CTRL,a.A.SEMICOLON,a.A.EQUALS,a.A.CAPS_LOCK,a.A.CONTEXT_MENU,a.A.F1,a.A.F2,a.A.F3,a.A.F4,a.A.F5,a.A.F6,a.A.F7,a.A.F8,a.A.F9,a.A.F10,a.A.F11,a.A.F12].includes(n)||g(!0))},onInputMouseDown:function(){M(!0)},onInputChange:function(e){var n=e.target.value;if(p&&N.current&&/[\r\n]/.test(N.current)){var t=N.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");n=n.replace(t,N.current)}N.current=null,D(n)},onInputPaste:function(e){var n=e.clipboardData,t=null===n||void 0===n?void 0:n.getData("text");N.current=t||""},onInputCompositionStart:function(){l.current=!0},onInputCompositionEnd:function(e){l.current=!1,"combobox"!==d&&D(e.target.value)}},P="multiple"===d||"tags"===d?i.createElement(C,(0,o.A)({},e,R)):i.createElement(E,(0,o.A)({},e,R));return i.createElement("div",{ref:w,className:"".concat(c,"-selector"),onClick:function(e){e.target!==t.current&&(void 0!==document.body.style.msTouchAction?setTimeout((function(){t.current.focus()})):t.current.focus())},onMouseDown:function(e){var n=I();e.target===t.current||n||"combobox"===d&&v||e.preventDefault(),("combobox"===d||f&&n)&&s||(s&&!1!==A&&h("",!0,!1),g())}},m&&i.createElement("div",{className:"".concat(c,"-prefix")},m),P)};const x=i.forwardRef(S)},78437:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(65043),r=t(98139),a=t.n(r);const i=function(e){var n=e.className,t=e.customizeIcon,r=e.customizeIconProps,i=e.children,u=e.onMouseDown,l=e.onClick,c="function"===typeof t?t(r):t;return o.createElement("span",{className:n,onMouseDown:function(e){e.preventDefault(),null===u||void 0===u||u(e)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:l,"aria-hidden":!0},void 0!==c?c:o.createElement("span",{className:a()(n.split(/\s+/).map((function(e){return"".concat(e,"-icon")})))},i))}},59869:(e,n,t)=>{t.d(n,{O:()=>i});var o=t(82284),r=t(78437),a=t(65043),i=function(e,n,t,i,u){var l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,d=a.useMemo((function(){return"object"===(0,o.A)(i)?i.clearIcon:u||void 0}),[i,u]);return{allowClear:a.useMemo((function(){return!(l||!i||!t.length&&!c||"combobox"===s&&""===c)}),[i,l,t.length,c,s]),clearIcon:a.createElement(r.A,{className:"".concat(e,"-clear"),onMouseDown:n,customizeIcon:d},"\xd7")}}},82062:(e,n,t)=>{t.d(n,{A:()=>a,t:()=>r});var o=t(65043),r=o.createContext(null);function a(){return o.useContext(r)}},49677:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(5544),r=t(65043);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=r.useState(!1),t=(0,o.A)(n,2),a=t[0],i=t[1],u=r.useRef(null),l=function(){window.clearTimeout(u.current)};r.useEffect((function(){return l}),[]);return[a,function(n,t){l(),u.current=window.setTimeout((function(){i(n),t&&t()}),e)},l]}},63160:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(65043);function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,n=o.useRef(null),t=o.useRef(null);return o.useEffect((function(){return function(){window.clearTimeout(t.current)}}),[]),[function(){return n.current},function(o){(o||null===n.current)&&(n.current=o),window.clearTimeout(t.current),t.current=window.setTimeout((function(){n.current=null}),e)}]}},36534:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(65043);function r(e,n,t,r){var a=o.useRef(null);a.current={open:n,triggerOpen:t,customizedTrigger:r},o.useEffect((function(){function n(n){var t;if(null===(t=a.current)||void 0===t||!t.customizedTrigger){var o=n.target;o.shadowRoot&&n.composed&&(o=n.composedPath()[0]||o),a.current.open&&e().filter((function(e){return e})).every((function(e){return!e.contains(o)&&e!==o}))&&a.current.triggerOpen(!1)}}return window.addEventListener("mousedown",n),function(){return window.removeEventListener("mousedown",n)}}),[])}},28143:(e,n,t)=>{t.d(n,{JM:()=>v,c$:()=>A,Ay:()=>X});var o=t(58168),r=t(60436),a=t(64467),i=t(89379),u=t(5544),l=t(80045),c=t(82284),s=t(28678),d=(t(97907),t(65043)),f=t(34719),p=function(){return null};p.isSelectOptGroup=!0;const v=p;var m=function(){return null};m.isSelectOption=!0;const A=m;var h=t(98139),b=t.n(h),g=t(25001),y=t(13709),w=t(18574),C=t(48060),E=t(98424),S=t(43996),x=t(78437),I=t(82062);var M=t(91092),N=["disabled","title","children","style","className"];function D(e){return"string"===typeof e||"number"===typeof e}var R=function(e,n){var t=(0,I.A)(),i=t.prefixCls,c=t.id,s=t.open,f=t.multiple,p=t.mode,v=t.searchValue,m=t.toggleOpen,A=t.notFoundContent,h=t.onPopupScroll,R=d.useContext(S.A),P=R.maxCount,k=R.flattenOptions,O=R.onActiveValue,T=R.defaultActiveFirstOption,V=R.onSelect,L=R.menuItemSelectedIcon,F=R.rawValues,_=R.fieldNames,K=R.virtual,z=R.direction,H=R.listHeight,W=R.listItemHeight,j=R.optionRender,B="".concat(i,"-item"),U=(0,y.A)((function(){return k}),[s,k],(function(e,n){return n[0]&&e[1]!==n[1]})),$=d.useRef(null),X=d.useMemo((function(){return f&&(0,M.W8)(P)&&(null===F||void 0===F?void 0:F.size)>=P}),[f,P,null===F||void 0===F?void 0:F.size]),G=function(e){e.preventDefault()},Y=function(e){var n;null===(n=$.current)||void 0===n||n.scrollTo("number"===typeof e?{index:e}:e)},J=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=U.length,o=0;o<t;o+=1){var r=(e+o*n+t)%t,a=U[r]||{},i=a.group,u=a.data;if(!i&&(null===u||void 0===u||!u.disabled)&&!X)return r}return-1},Z=d.useState((function(){return J(0)})),Q=(0,u.A)(Z,2),q=Q[0],ee=Q[1],ne=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];ee(e);var t={source:n?"keyboard":"mouse"},o=U[e];o?O(o.value,e,t):O(null,-1,t)};(0,d.useEffect)((function(){ne(!1!==T?J(0):-1)}),[U.length,v]);var te=d.useCallback((function(e){return"combobox"!==p&&F.has(e)}),[p,(0,r.A)(F).toString(),F.size]),oe=d.useCallback((function(e){return"combobox"===p?String(e).toLowerCase()===v.toLowerCase():F.has(e)}),[p,v,(0,r.A)(F).toString(),F.size]);(0,d.useEffect)((function(){var e,n=setTimeout((function(){if(!f&&s&&1===F.size){var e=Array.from(F)[0],n=U.findIndex((function(n){return n.data.value===e}));-1!==n&&(ne(n),Y(n))}}));s&&(null===(e=$.current)||void 0===e||e.scrollTo(void 0));return function(){return clearTimeout(n)}}),[s,v]);var re=function(e){void 0!==e&&V(e,{selected:!F.has(e)}),f||m(!1)};if(d.useImperativeHandle(n,(function(){return{onKeyDown:function(e){var n=e.which,t=e.ctrlKey;switch(n){case g.A.N:case g.A.P:case g.A.UP:case g.A.DOWN:var o=0;if(n===g.A.UP?o=-1:n===g.A.DOWN?o=1:/(mac\sos|macintosh)/i.test(navigator.appVersion)&&t&&(n===g.A.N?o=1:n===g.A.P&&(o=-1)),0!==o){var r=J(q+o,o);Y(r),ne(r,!0)}break;case g.A.TAB:case g.A.ENTER:var a,i=U[q];!i||null!==i&&void 0!==i&&null!==(a=i.data)&&void 0!==a&&a.disabled||X?re(void 0):re(i.value),s&&e.preventDefault();break;case g.A.ESC:m(!1),s&&e.stopPropagation()}},onKeyUp:function(){},scrollTo:function(e){Y(e)}}})),0===U.length)return d.createElement("div",{role:"listbox",id:"".concat(c,"_list"),className:"".concat(B,"-empty"),onMouseDown:G},A);var ae=Object.keys(_).map((function(e){return _[e]})),ie=function(e){return e.label};function ue(e,n){return{role:e.group?"presentation":"option",id:"".concat(c,"_list_").concat(n)}}var le=function(e){var n=U[e];if(!n)return null;var t=n.data||{},r=t.value,a=n.group,i=(0,C.A)(t,!0),u=ie(n);return n?d.createElement("div",(0,o.A)({"aria-label":"string"!==typeof u||a?null:u},i,{key:e},ue(n,e),{"aria-selected":oe(r)}),r):null},ce={role:"listbox",id:"".concat(c,"_list")};return d.createElement(d.Fragment,null,K&&d.createElement("div",(0,o.A)({},ce,{style:{height:0,width:0,overflow:"hidden"}}),le(q-1),le(q),le(q+1)),d.createElement(E.A,{itemKey:"key",ref:$,data:U,height:H,itemHeight:W,fullHeight:!1,onMouseDown:G,onScroll:h,virtual:K,direction:z,innerProps:K?null:ce},(function(e,n){var t=e.group,r=e.groupOption,i=e.data,u=e.label,c=e.value,s=i.key;if(t){var f,p=null!==(f=i.title)&&void 0!==f?f:D(u)?u.toString():void 0;return d.createElement("div",{className:b()(B,"".concat(B,"-group"),i.className),title:p},void 0!==u?u:s)}var v=i.disabled,m=i.title,A=(i.children,i.style),h=i.className,g=(0,l.A)(i,N),y=(0,w.A)(g,ae),E=te(c),S=v||!E&&X,I="".concat(B,"-option"),M=b()(B,I,h,(0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(I,"-grouped"),r),"".concat(I,"-active"),q===n&&!S),"".concat(I,"-disabled"),S),"".concat(I,"-selected"),E)),R=ie(e),P=!L||"function"===typeof L||E,k="number"===typeof R?R:R||c,O=D(k)?k.toString():void 0;return void 0!==m&&(O=m),d.createElement("div",(0,o.A)({},(0,C.A)(y),K?{}:ue(e,n),{"aria-selected":oe(c),className:M,title:O,onMouseMove:function(){q===n||S||ne(n)},onClick:function(){S||re(c)},style:A}),d.createElement("div",{className:"".concat(I,"-content")},"function"===typeof j?j(e,{index:n}):k),d.isValidElement(L)||E,P&&d.createElement(x.A,{className:"".concat(B,"-option-state"),customizeIcon:L,customizeIconProps:{value:c,disabled:S,isSelected:E}},E?"\u2713":null))})))};const P=d.forwardRef(R);var k=t(97412);function O(e,n){return(0,k.$r)(e).join("").toUpperCase().includes(n)}var T=t(52931),V=0,L=(0,T.A)();function F(e){var n=d.useState(),t=(0,u.A)(n,2),o=t[0],r=t[1];return d.useEffect((function(){r("rc_select_".concat(function(){var e;return L?(e=V,V+=1):e="TEST_OR_SSR",e}()))}),[]),e||o}var _=t(62149),K=["children","value"],z=["children"];function H(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,_.A)(e).map((function(e,t){if(!d.isValidElement(e)||!e.type)return null;var o=e,r=o.type.isSelectOptGroup,a=o.key,u=o.props,c=u.children,s=(0,l.A)(u,z);return n||!r?function(e){var n=e,t=n.key,o=n.props,r=o.children,a=o.value,u=(0,l.A)(o,K);return(0,i.A)({key:t,value:void 0!==a?a:t,children:r},u)}(e):(0,i.A)((0,i.A)({key:"__RC_SELECT_GRP__".concat(null===a?t:a,"__"),label:a},s),{},{options:H(c)})})).filter((function(e){return e}))}const W=function(e,n,t,o,r){return d.useMemo((function(){var a=e;!e&&(a=H(n));var i=new Map,u=new Map,l=function(e,n,t){t&&"string"===typeof t&&e.set(n[t],n)};return function e(n){for(var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=0;c<n.length;c+=1){var s=n[c];!s[t.options]||a?(i.set(s[t.value],s),l(u,s,t.label),l(u,s,o),l(u,s,r)):e(s[t.options],!0)}}(a),{options:a,valueOptions:i,labelOptions:u}}),[e,n,t,o,r])};function j(e){var n=d.useRef();n.current=e;var t=d.useCallback((function(){return n.current.apply(n,arguments)}),[]);return t}var B=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","optionRender","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","labelRender","value","defaultValue","labelInValue","onChange","maxCount"],U=["inputValue"];var $=d.forwardRef((function(e,n){var t=e.id,p=e.mode,v=e.prefixCls,m=void 0===v?"rc-select":v,A=e.backfill,h=e.fieldNames,b=e.inputValue,g=e.searchValue,y=e.onSearch,w=e.autoClearSearchValue,C=void 0===w||w,E=e.onSelect,x=e.onDeselect,I=e.dropdownMatchSelectWidth,N=void 0===I||I,D=e.filterOption,R=e.filterSort,T=e.optionFilterProp,V=e.optionLabelProp,L=e.options,_=e.optionRender,K=e.children,z=e.defaultActiveFirstOption,H=e.menuItemSelectedIcon,$=e.virtual,X=e.direction,G=e.listHeight,Y=void 0===G?200:G,J=e.listItemHeight,Z=void 0===J?20:J,Q=e.labelRender,q=e.value,ee=e.defaultValue,ne=e.labelInValue,te=e.onChange,oe=e.maxCount,re=(0,l.A)(e,B),ae=F(t),ie=(0,f.F)(p),ue=!(L||!K),le=d.useMemo((function(){return(void 0!==D||"combobox"!==p)&&D}),[D,p]),ce=d.useMemo((function(){return(0,M.AZ)(h,ue)}),[JSON.stringify(h),ue]),se=(0,s.A)("",{value:void 0!==g?g:b,postState:function(e){return e||""}}),de=(0,u.A)(se,2),fe=de[0],pe=de[1],ve=W(L,K,ce,T,V),me=ve.valueOptions,Ae=ve.labelOptions,he=ve.options,be=d.useCallback((function(e){return(0,k.$r)(e).map((function(e){var n,t,o,r,a,i;(function(e){return!e||"object"!==(0,c.A)(e)})(e)?n=e:(o=e.key,t=e.label,n=null!==(i=e.value)&&void 0!==i?i:o);var u,l=me.get(n);l&&(void 0===t&&(t=null===l||void 0===l?void 0:l[V||ce.label]),void 0===o&&(o=null!==(u=null===l||void 0===l?void 0:l.key)&&void 0!==u?u:n),r=null===l||void 0===l?void 0:l.disabled,a=null===l||void 0===l?void 0:l.title);return{label:t,value:n,key:o,disabled:r,title:a}}))}),[ce,V,me]),ge=(0,s.A)(ee,{value:q}),ye=(0,u.A)(ge,2),we=ye[0],Ce=ye[1],Ee=function(e,n){var t=d.useRef({values:new Map,options:new Map});return[d.useMemo((function(){var o=t.current,r=o.values,a=o.options,u=e.map((function(e){var n;return void 0===e.label?(0,i.A)((0,i.A)({},e),{},{label:null===(n=r.get(e.value))||void 0===n?void 0:n.label}):e})),l=new Map,c=new Map;return u.forEach((function(e){l.set(e.value,e),c.set(e.value,n.get(e.value)||a.get(e.value))})),t.current.values=l,t.current.options=c,u}),[e,n]),d.useCallback((function(e){return n.get(e)||t.current.options.get(e)}),[n])]}(d.useMemo((function(){var e,n=be(ie&&null===we?[]:we);return"combobox"===p&&(0,k.l$)(null===(e=n[0])||void 0===e?void 0:e.value)?[]:n}),[we,be,p,ie]),me),Se=(0,u.A)(Ee,2),xe=Se[0],Ie=Se[1],Me=d.useMemo((function(){if(!p&&1===xe.length){var e=xe[0];if(null===e.value&&(null===e.label||void 0===e.label))return[]}return xe.map((function(e){var n;return(0,i.A)((0,i.A)({},e),{},{label:null!==(n="function"===typeof Q?Q(e):e.label)&&void 0!==n?n:e.value})}))}),[p,xe,Q]),Ne=d.useMemo((function(){return new Set(xe.map((function(e){return e.value})))}),[xe]);d.useEffect((function(){if("combobox"===p){var e,n=null===(e=xe[0])||void 0===e?void 0:e.value;pe((0,k.a4)(n)?String(n):"")}}),[xe]);var De=j((function(e,n){var t=null!==n&&void 0!==n?n:e;return(0,a.A)((0,a.A)({},ce.value,e),ce.label,t)})),Re=function(e,n,t,o,r){return d.useMemo((function(){if(!t||!1===o)return e;var u=n.options,l=n.label,c=n.value,s=[],d="function"===typeof o,f=t.toUpperCase(),p=d?o:function(e,n){return r?O(n[r],f):n[u]?O(n["children"!==l?l:"label"],f):O(n[c],f)},v=d?function(e){return(0,M.Bz)(e)}:function(e){return e};return e.forEach((function(e){if(e[u])if(p(t,v(e)))s.push(e);else{var n=e[u].filter((function(e){return p(t,v(e))}));n.length&&s.push((0,i.A)((0,i.A)({},e),{},(0,a.A)({},u,n)))}else p(t,v(e))&&s.push(e)})),s}),[e,o,r,t,n])}(d.useMemo((function(){if("tags"!==p)return he;var e=(0,r.A)(he);return(0,r.A)(xe).sort((function(e,n){return e.value<n.value?-1:1})).forEach((function(n){var t=n.value;(function(e){return me.has(e)})(t)||e.push(De(t,n.label))})),e}),[De,he,me,xe,p]),ce,fe,le,T),Pe=d.useMemo((function(){return"tags"!==p||!fe||Re.some((function(e){return e[T||"value"]===fe}))||Re.some((function(e){return e[ce.value]===fe}))?Re:[De(fe)].concat((0,r.A)(Re))}),[De,T,p,Re,fe,ce]),ke=function e(n){return(0,r.A)(n).sort((function(e,n){return R(e,n,{searchValue:fe})})).map((function(n){return Array.isArray(n.options)?(0,i.A)((0,i.A)({},n),{},{options:n.options.length>0?e(n.options):n.options}):n}))},Oe=d.useMemo((function(){return R?ke(Pe):Pe}),[Pe,R,fe]),Te=d.useMemo((function(){return(0,M.XJ)(Oe,{fieldNames:ce,childrenAsData:ue})}),[Oe,ce,ue]),Ve=function(e){var n=be(e);if(Ce(n),te&&(n.length!==xe.length||n.some((function(e,n){var t;return(null===(t=xe[n])||void 0===t?void 0:t.value)!==(null===e||void 0===e?void 0:e.value)})))){var t=ne?n:n.map((function(e){return e.value})),o=n.map((function(e){return(0,M.Bz)(Ie(e.value))}));te(ie?t:t[0],ie?o:o[0])}},Le=d.useState(null),Fe=(0,u.A)(Le,2),_e=Fe[0],Ke=Fe[1],ze=d.useState(0),He=(0,u.A)(ze,2),We=He[0],je=He[1],Be=void 0!==z?z:"combobox"!==p,Ue=d.useCallback((function(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).source,o=void 0===t?"keyboard":t;je(n),A&&"combobox"===p&&null!==e&&"keyboard"===o&&Ke(String(e))}),[A,p]),$e=function(e,n,t){var o=function(){var n,t=Ie(e);return[ne?{label:null===t||void 0===t?void 0:t[ce.label],value:e,key:null!==(n=null===t||void 0===t?void 0:t.key)&&void 0!==n?n:e}:e,(0,M.Bz)(t)]};if(n&&E){var r=o(),a=(0,u.A)(r,2),i=a[0],l=a[1];E(i,l)}else if(!n&&x&&"clear"!==t){var c=o(),s=(0,u.A)(c,2),d=s[0],f=s[1];x(d,f)}},Xe=j((function(e,n){var t,o=!ie||n.selected;t=o?ie?[].concat((0,r.A)(xe),[e]):[e]:xe.filter((function(n){return n.value!==e})),Ve(t),$e(e,o),"combobox"===p?Ke(""):f.F&&!C||(pe(""),Ke(""))})),Ge=d.useMemo((function(){var e=!1!==$&&!1!==N;return(0,i.A)((0,i.A)({},ve),{},{flattenOptions:Te,onActiveValue:Ue,defaultActiveFirstOption:Be,onSelect:Xe,menuItemSelectedIcon:H,rawValues:Ne,fieldNames:ce,virtual:e,direction:X,listHeight:Y,listItemHeight:Z,childrenAsData:ue,maxCount:oe,optionRender:_})}),[oe,ve,Te,Ue,Be,Xe,H,Ne,ce,$,N,X,Y,Z,ue,_]);return d.createElement(S.A.Provider,{value:Ge},d.createElement(f.A,(0,o.A)({},re,{id:ae,prefixCls:m,ref:n,omitDomProps:U,mode:p,displayValues:Me,onDisplayValuesChange:function(e,n){Ve(e);var t=n.type,o=n.values;"remove"!==t&&"clear"!==t||o.forEach((function(e){$e(e.value,!1,t)}))},direction:X,searchValue:fe,onSearch:function(e,n){if(pe(e),Ke(null),"submit"!==n.source)"blur"!==n.source&&("combobox"===p&&Ve(e),null===y||void 0===y||y(e));else{var t=(e||"").trim();if(t){var o=Array.from(new Set([].concat((0,r.A)(Ne),[t])));Ve(o),$e(t,!0),pe("")}}},autoClearSearchValue:C,onSearchSplit:function(e){var n=e;"tags"!==p&&(n=e.map((function(e){var n=Ae.get(e);return null===n||void 0===n?void 0:n.value})).filter((function(e){return void 0!==e})));var t=Array.from(new Set([].concat((0,r.A)(Ne),(0,r.A)(n))));Ve(t),t.forEach((function(e){$e(e,!0)}))},dropdownMatchSelectWidth:N,OptionList:P,emptyOptions:!Te.length,activeValue:_e,activeDescendantId:"".concat(ae,"_list_").concat(We)})))}));$.Option=A,$.OptGroup=v;const X=$},97412:(e,n,t)=>{t.d(n,{$r:()=>r,Cg:()=>a,LK:()=>c,a4:()=>i,l$:()=>u});var o=t(82284);function r(e){return Array.isArray(e)?e:void 0!==e?[e]:[]}var a="undefined"!==typeof window&&window.document&&window.document.documentElement;function i(e){return void 0!==e&&null!==e}function u(e){return!e&&0!==e}function l(e){return["string","number"].includes((0,o.A)(e))}function c(e){var n=void 0;return e&&(l(e.title)?n=e.title.toString():l(e.label)&&(n=e.label.toString())),n}},91092:(e,n,t)=>{t.d(n,{AZ:()=>c,Bz:()=>d,V7:()=>f,W8:()=>l,XJ:()=>s});var o=t(60436),r=t(87695),a=t(89379),i=t(97907);function u(e,n){var t,o=e.key;return"value"in e&&(t=e.value),null!==o&&void 0!==o?o:void 0!==t?t:"rc-index-key-".concat(n)}function l(e){return"undefined"!==typeof e&&!Number.isNaN(e)}function c(e,n){var t=e||{},o=t.label||(n?"children":"label");return{label:o,value:t.value||"value",options:t.options||"options",groupLabel:t.groupLabel||o}}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.fieldNames,o=n.childrenAsData,r=[],a=c(t,!1),i=a.label,l=a.value,s=a.options,d=a.groupLabel;return function e(n,t){Array.isArray(n)&&n.forEach((function(n){if(t||!(s in n)){var a=n[l];r.push({key:u(n,r.length),groupOption:t,data:n,label:n[i],value:a})}else{var c=n[d];void 0===c&&o&&(c=n.label),r.push({key:u(n,r.length),group:!0,data:n,label:c}),e(n[s],!0)}}))}(e,!1),r}function d(e){var n=(0,a.A)({},e);return"props"in n||Object.defineProperty(n,"props",{get:function(){return(0,i.Ay)(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),n}}),n}var f=function(e,n,t){if(!n||!n.length)return null;var a=!1,i=function e(n,t){var i=(0,r.A)(t),u=i[0],l=i.slice(1);if(!u)return[n];var c=n.split(u);return a=a||c.length>1,c.reduce((function(n,t){return[].concat((0,o.A)(n),(0,o.A)(e(t,l)))}),[]).filter(Boolean)}(e,n);return a?"undefined"!==typeof t?i.slice(0,t):i:null}}}]);
//# sourceMappingURL=vendor-81d96813.e1abe839.chunk.js.map
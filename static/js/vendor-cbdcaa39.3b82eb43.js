"use strict";(self.webpackChunkgithub_devops_frontend=self.webpackChunkgithub_devops_frontend||[]).push([[7600],{7643:(e,n,r)=>{r.d(n,{F:()=>o,k:()=>t});var t={},o="rc-table-internal-hook"},1553:(e,n,r)=>{r.d(n,{A:()=>t});const t=r(5043).createContext({renderWithProps:!1})},1848:(e,n,r)=>{r.d(n,{Ay:()=>a,No:()=>c,R0:()=>i,sU:()=>l});var t=r(5897),o=(0,t.Ho)(),i=o.makeImmutable,l=o.responseImmutable,c=o.useImmutableMark;const a=(0,t.q6)()},6588:(e,n,r)=>{r.d(n,{P:()=>x,A:()=>y});var t=r(5544),o=r(4467),i=r(436),l=r(2284),c=r(9379),a=r(45),u=r(2149),d=(r(7907),r(5043)),f=r(7643),s=r(3562);function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"number"===typeof n?n:n.endsWith("%")?e*parseFloat(n)/100:null}var p=["children"],m=["fixed"];function x(e){return(0,u.A)(e).filter((function(e){return d.isValidElement(e)})).map((function(e){var n=e.key,r=e.props,t=r.children,o=(0,a.A)(r,p),i=(0,c.A)({key:n},o);return t&&(i.children=x(t)),i}))}function h(e){return e.filter((function(e){return e&&"object"===(0,l.A)(e)&&!e.hidden})).map((function(e){var n=e.children;return n&&n.length>0?(0,c.A)((0,c.A)({},e),{},{children:h(n)}):e}))}function A(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key";return e.filter((function(e){return e&&"object"===(0,l.A)(e)})).reduce((function(e,r,t){var o=r.fixed,l=!0===o?"left":o,a="".concat(n,"-").concat(t),u=r.children;return u&&u.length>0?[].concat((0,i.A)(e),(0,i.A)(A(u,a).map((function(e){return(0,c.A)({fixed:l},e)})))):[].concat((0,i.A)(e),[(0,c.A)((0,c.A)({key:a},r),{},{fixed:l})])}),[])}const y=function(e,n){var r=e.prefixCls,i=e.columns,l=e.children,u=e.expandable,p=e.expandedKeys,y=e.columnTitle,w=e.getRowKey,g=e.onTriggerExpand,C=e.expandIcon,E=e.rowExpandable,b=e.expandIconColumnIndex,N=e.direction,k=e.expandRowByClick,R=e.columnWidth,S=e.fixed,I=e.scrollWidth,T=e.clientWidth,H=d.useMemo((function(){return h((i||x(l)||[]).slice())}),[i,l]),M=d.useMemo((function(){if(u){var e=H.slice();if(!e.includes(f.k)){var n=b||0;n>=0&&e.splice(n,0,f.k)}0;var t=e.indexOf(f.k);e=e.filter((function(e,n){return e!==f.k||n===t}));var i,l=H[t];i="left"!==S&&!S||b?"right"!==S&&!S||b!==H.length?l?l.fixed:null:"right":"left";var c=(0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)({},s.P,{className:"".concat(r,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),"title",y),"fixed",i),"className","".concat(r,"-row-expand-icon-cell")),"width",R),"render",(function(e,n,t){var o=w(n,t),i=p.has(o),l=!E||E(n),c=C({prefixCls:r,expanded:i,expandable:l,record:n,onExpand:g});return k?d.createElement("span",{onClick:function(e){return e.stopPropagation()}},c):c}));return e.map((function(e){return e===f.k?c:e}))}return H.filter((function(e){return e!==f.k}))}),[u,H,w,p,C,N]),_=d.useMemo((function(){var e=M;return n&&(e=n(e)),e.length||(e=[{render:function(){return null}}]),e}),[n,M,N]),L=d.useMemo((function(){return"rtl"===N?function(e){return e.map((function(e){var n=e.fixed,r=(0,a.A)(e,m),t=n;return"left"===n?t="right":"right"===n&&(t="left"),(0,c.A)({fixed:t},r)}))}(A(_)):A(_)}),[_,N,I]),P=d.useMemo((function(){for(var e=-1,n=L.length-1;n>=0;n-=1){var r=L[n].fixed;if("left"===r||!0===r){e=n;break}}if(e>=0)for(var t=0;t<=e;t+=1){var o=L[t].fixed;if("left"!==o&&!0!==o)return!0}var i=L.findIndex((function(e){return"right"===e.fixed}));if(i>=0)for(var l=i;l<L.length;l+=1){if("right"!==L[l].fixed)return!0}return!1}),[L]),K=function(e,n,r){return d.useMemo((function(){if(n&&n>0){var t=0,o=0;e.forEach((function(e){var r=v(n,e.width);r?t+=r:o+=1}));var i=Math.max(n,r),l=Math.max(i-t,o),a=o,u=l/o,d=0,f=e.map((function(e){var r=(0,c.A)({},e),t=v(n,r.width);if(t)r.width=t;else{var o=Math.floor(u);r.width=1===a?l:o,l-=o,a-=1}return d+=r.width,r}));if(d<i){var s=i/d;l=i,f.forEach((function(e,n){var r=Math.floor(e.width*s);e.width=n===f.length-1?l:r,l-=r}))}return[f,Math.max(d,i)]}return[e,n]}),[e,n,r])}(L,I,T),B=(0,t.A)(K,2),W=B[0],F=B[1];return[_,W,F,P]}},911:(e,n,r)=>{r.d(n,{A:()=>d});var t=r(436),o=r(5544),i=r(2284),l=(r(7907),r(5043)),c=r(7643),a=r(4329),u=r(3562);function d(e,n,r){var d=(0,u.T)(e),f=d.expandIcon,s=d.expandedRowKeys,v=d.defaultExpandedRowKeys,p=d.defaultExpandAllRows,m=d.expandedRowRender,x=d.onExpand,h=d.onExpandedRowsChange,A=d.childrenColumnName,y=f||a.of,w=A||"children",g=l.useMemo((function(){return m?"row":!!(e.expandable&&e.internalHooks===c.F&&e.expandable.__PARENT_RENDER_ICON__||n.some((function(e){return e&&"object"===(0,i.A)(e)&&e[w]})))&&"nest"}),[!!m,n]),C=l.useState((function(){return v||(p?(0,a.Y_)(n,r,w):[])})),E=(0,o.A)(C,2),b=E[0],N=E[1],k=l.useMemo((function(){return new Set(s||b||[])}),[s,b]),R=l.useCallback((function(e){var o,i=r(e,n.indexOf(e)),l=k.has(i);l?(k.delete(i),o=(0,t.A)(k)):o=[].concat((0,t.A)(k),[i]),N(o),x&&x(!l,e),h&&h(o)}),[r,k,n,x,h]);return[d,g,k,y,w,R]}},8797:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(3709),o=r(2231),i=r(1606);function l(e,n,r){var l=e.map((function(t,o){return(0,i.T)(o,o,e,n,r)}));return(0,t.A)((function(){return l}),[l],(function(e,n){return!(0,o.A)(e,n)}))}},4359:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(5043);function o(e,n,r,t,i,l,c){e.push({record:n,indent:r,index:c});var a=l(n),u=null===i||void 0===i?void 0:i.has(a);if(n&&Array.isArray(n[t])&&u)for(var d=0;d<n[t].length;d+=1)o(e,n[t][d],r+1,t,i,l,d)}function i(e,n,r,i){return t.useMemo((function(){if(null!==r&&void 0!==r&&r.size){for(var t=[],l=0;l<(null===e||void 0===e?void 0:e.length);l+=1){o(t,e[l],0,n,r,i,l)}return t}return null===e||void 0===e?void 0:e.map((function(e,n){return{record:e,indent:0,index:n}}))}),[e,n,r,i])}},785:(e,n,r)=>{r.d(n,{_:()=>l,x:()=>i});var t=r(5544),o=r(5043);function i(e){var n=(0,o.useRef)(e),r=(0,o.useState)({}),i=(0,t.A)(r,2)[1],l=(0,o.useRef)(null),c=(0,o.useRef)([]);return(0,o.useEffect)((function(){return function(){l.current=null}}),[]),[n.current,function(e){c.current.push(e);var r=Promise.resolve();l.current=r,r.then((function(){if(l.current===r){var e=c.current,t=n.current;c.current=[],e.forEach((function(e){n.current=e(n.current)})),l.current=null,t!==n.current&&i({})}}))}]}function l(e){var n=(0,o.useRef)(e||null),r=(0,o.useRef)();function t(){window.clearTimeout(r.current)}return(0,o.useEffect)((function(){return t}),[]),[function(e){n.current=e,t(),r.current=window.setTimeout((function(){n.current=null,r.current=void 0}),100)},function(){return n.current}]}},2725:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(5544),o=r(5043);function i(){var e=o.useState(-1),n=(0,t.A)(e,2),r=n[0],i=n[1],l=o.useState(-1),c=(0,t.A)(l,2),a=c[0],u=c[1];return[r,a,o.useCallback((function(e,n){i(e),u(n)}),[])]}},7369:(e,n,r)=>{r(5043)},7415:(e,n,r)=>{r.d(n,{A:()=>d});var t=r(9379),o=r(5897),i=r(1848),l=r(5776),c=r(7483),a=r(8139),u=r.n(a);function d(e,n,r,a){var d,f=(0,o.NT)(i.Ay,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex","expandedKeys","childrenColumnName","rowExpandable","onRow"]),s=f.flattenColumns,v=f.expandableType,p=f.expandedKeys,m=f.childrenColumnName,x=f.onTriggerExpand,h=f.rowExpandable,A=f.onRow,y=f.expandRowByClick,w=f.rowClassName,g="nest"===v,C="row"===v&&(!h||h(e)),E=C||g,b=p&&p.has(n),N=m&&e&&e[m],k=(0,c._q)(x),R=null===A||void 0===A?void 0:A(e,r),S=null===R||void 0===R?void 0:R.onClick;"string"===typeof w?d=w:"function"===typeof w&&(d=w(e,r,a));var I=(0,l.r$)(s);return(0,t.A)((0,t.A)({},f),{},{columnsKey:I,nestExpandable:g,expanded:b,hasNestChildren:N,record:e,onTriggerExpand:k,rowSupportExpand:C,expandable:E,rowProps:(0,t.A)((0,t.A)({},R),{},{className:u()(d,null===R||void 0===R?void 0:R.className),onClick:function(n){y&&E&&x(e,n);for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];null===S||void 0===S||S.apply(void 0,[n].concat(t))}})})}},3448:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(2284),o=r(5043),i=(0,r(2931).A)()?window:null;function l(e,n){var r="object"===(0,t.A)(e)?e:{},l=r.offsetHeader,c=void 0===l?0:l,a=r.offsetSummary,u=void 0===a?0:a,d=r.offsetScroll,f=void 0===d?0:d,s=r.getContainer,v=(void 0===s?function(){return i}:s)()||i,p=!!e;return o.useMemo((function(){return{isSticky:p,stickyClassName:p?"".concat(n,"-sticky-holder"):"",offsetHeader:c,offsetSummary:u,offsetScroll:f,container:v}}),[p,f,c,u,n,v])}},8098:(e,n,r)=>{r.d(n,{A:()=>o});var t=r(5043);const o=function(e,n,r){return(0,t.useMemo)((function(){var t=n.length,o=function(r,t,o){for(var i=[],l=0,c=r;c!==t;c+=o)i.push(l),n[c].fixed&&(l+=e[c]||0);return i},i=o(0,t,1),l=o(t-1,-1,-1).reverse();return"rtl"===r?{left:l,right:i}:{left:i,right:l}}),[e,n,r])}},3880:(e,n,r)=>{r.d(n,{kD:()=>t.k,PL:()=>l.P,Fh:()=>t.F,BD:()=>o.y,T:()=>i.T,Y9:()=>B});var t=r(7643),o=r(8127),i=r(9228),l=r(3562),c=r(8168),a=r(9379),u=r(8139),d=r.n(u),f=r(7483),s=r(5043),v=r(1848),p=r(2284),m=r(5544),x=r(5897),h=r(8424),A=r(4359),y=r(4467),w=r(45),g=r(6723),C=r(7415),E=r(3476),b=(0,x.q6)(null),N=(0,x.q6)(null);const k=function(e){var n=e.rowInfo,r=e.column,t=e.colIndex,o=e.indent,i=e.index,l=e.component,u=e.renderIndex,f=e.record,v=e.style,p=e.className,m=e.inverse,h=e.getHeight,A=r.render,y=r.dataIndex,w=r.className,C=r.width,b=(0,x.NT)(N,["columnsOffset"]).columnsOffset,k=(0,E.f)(n,r,t,o,i),R=k.key,S=k.fixedInfo,I=k.appendCellNode,T=k.additionalCellProps,H=T.style,M=T.colSpan,_=void 0===M?1:M,L=T.rowSpan,P=void 0===L?1:L,K=function(e,n,r){return r[e+(n||1)]-(r[e]||0)}(t-1,_,b),B=_>1?C-K:0,W=(0,a.A)((0,a.A)((0,a.A)({},H),v),{},{flex:"0 0 ".concat(K,"px"),width:"".concat(K,"px"),marginRight:B,pointerEvents:"auto"}),F=s.useMemo((function(){return m?P<=1:0===_||0===P||P>1}),[P,_,m]);F?W.visibility="hidden":m&&(W.height=null===h||void 0===h?void 0:h(P));var O=F?function(){return null}:A,X={};return 0!==P&&0!==_||(X.rowSpan=1,X.colSpan=1),s.createElement(g.A,(0,c.A)({className:d()(w,p),ellipsis:r.ellipsis,align:r.align,scope:r.rowScope,component:l,prefixCls:n.prefixCls,key:R,record:f,index:i,renderIndex:u,dataIndex:y,render:O,shouldCellUpdate:r.shouldCellUpdate},S,{appendNode:I,additionalProps:(0,a.A)((0,a.A)({},T),{},{style:W},X)}))};var R=r(4329),S=["data","index","className","rowKey","style","extra","getHeight"],I=s.forwardRef((function(e,n){var r,t=e.data,o=e.index,i=e.className,l=e.rowKey,u=e.style,f=e.extra,p=e.getHeight,m=(0,w.A)(e,S),h=t.record,A=t.indent,E=t.index,N=(0,x.NT)(v.Ay,["prefixCls","flattenColumns","fixColumn","componentWidth","scrollX"]),I=N.scrollX,T=N.flattenColumns,H=N.prefixCls,M=N.fixColumn,_=N.componentWidth,L=(0,x.NT)(b,["getComponent"]).getComponent,P=(0,C.A)(h,l,o,A),K=L(["body","row"],"div"),B=L(["body","cell"],"div"),W=P.rowSupportExpand,F=P.expanded,O=P.rowProps,X=P.expandedRowRender,j=P.expandedRowClassName;if(W&&F){var q=X(h,o,A+1,F),z=(0,R.cI)(j,h,o,A),D={};M&&(D={style:(0,y.A)({},"--virtual-width","".concat(_,"px"))});var Y="".concat(H,"-expanded-row-cell");r=s.createElement(K,{className:d()("".concat(H,"-expanded-row"),"".concat(H,"-expanded-row-level-").concat(A+1),z)},s.createElement(g.A,{component:B,prefixCls:H,className:d()(Y,(0,y.A)({},"".concat(Y,"-fixed"),M)),additionalProps:D},q))}var U=(0,a.A)((0,a.A)({},u),{},{width:I});f&&(U.position="absolute",U.pointerEvents="none");var V=s.createElement(K,(0,c.A)({},O,m,{"data-row-key":l,ref:W?null:n,className:d()(i,"".concat(H,"-row"),null===O||void 0===O?void 0:O.className,(0,y.A)({},"".concat(H,"-row-extra"),f)),style:(0,a.A)((0,a.A)({},U),null===O||void 0===O?void 0:O.style)}),T.map((function(e,n){return s.createElement(k,{key:n,component:B,rowInfo:P,column:e,colIndex:n,indent:A,index:o,renderIndex:E,record:h,inverse:f,getHeight:p})})));return W?s.createElement("div",{ref:n},V,r):V}));const T=(0,v.sU)(I);var H=s.forwardRef((function(e,n){var r=e.data,t=e.onScroll,o=(0,x.NT)(v.Ay,["flattenColumns","onColumnResize","getRowKey","prefixCls","expandedKeys","childrenColumnName","scrollX","direction"]),i=o.flattenColumns,l=o.onColumnResize,c=o.getRowKey,a=o.expandedKeys,u=o.prefixCls,d=o.childrenColumnName,f=o.scrollX,y=o.direction,w=(0,x.NT)(b),g=w.sticky,C=w.scrollY,E=w.listItemHeight,k=w.getComponent,R=w.onScroll,S=s.useRef(),I=(0,A.A)(r,d,a,c),H=s.useMemo((function(){var e=0;return i.map((function(n){var r=n.width;return[n.key,r,e+=r]}))}),[i]),M=s.useMemo((function(){return H.map((function(e){return e[2]}))}),[H]);s.useEffect((function(){H.forEach((function(e){var n=(0,m.A)(e,2),r=n[0],t=n[1];l(r,t)}))}),[H]),s.useImperativeHandle(n,(function(){var e,n={scrollTo:function(e){var n;null===(n=S.current)||void 0===n||n.scrollTo(e)},nativeElement:null===(e=S.current)||void 0===e?void 0:e.nativeElement};return Object.defineProperty(n,"scrollLeft",{get:function(){var e;return(null===(e=S.current)||void 0===e?void 0:e.getScrollInfo().x)||0},set:function(e){var n;null===(n=S.current)||void 0===n||n.scrollTo({left:e})}}),n}));var _=function(e,n){var r,t=null===(r=I[n])||void 0===r?void 0:r.record,o=e.onCell;if(o){var i,l=o(t,n);return null!==(i=null===l||void 0===l?void 0:l.rowSpan)&&void 0!==i?i:1}return 1},L=s.useMemo((function(){return{columnsOffset:M}}),[M]),P="".concat(u,"-tbody"),K=k(["body","wrapper"]),B={};return g&&(B.position="sticky",B.bottom=0,"object"===(0,p.A)(g)&&g.offsetScroll&&(B.bottom=g.offsetScroll)),s.createElement(N.Provider,{value:L},s.createElement(h.A,{fullHeight:!1,ref:S,prefixCls:"".concat(P,"-virtual"),styles:{horizontalScrollBar:B},className:P,height:C,itemHeight:E||24,data:I,itemKey:function(e){return c(e.record)},component:K,scrollWidth:f,direction:y,onVirtualScroll:function(e){var n,r=e.x;t({currentTarget:null===(n=S.current)||void 0===n?void 0:n.nativeElement,scrollLeft:r})},onScroll:R,extraRender:function(e){var n=e.start,r=e.end,t=e.getSize,o=e.offsetY;if(r<0)return null;for(var l=i.filter((function(e){return 0===_(e,n)})),a=n,u=function(e){if(!(l=l.filter((function(n){return 0===_(n,e)}))).length)return a=e,1},d=n;d>=0&&!u(d);d-=1);for(var f=i.filter((function(e){return 1!==_(e,r)})),v=r,p=function(e){if(!(f=f.filter((function(n){return 1!==_(n,e)}))).length)return v=Math.max(e-1,r),1},m=r;m<I.length&&!p(m);m+=1);for(var x=[],h=function(e){if(!I[e])return 1;i.some((function(n){return _(n,e)>1}))&&x.push(e)},A=a;A<=v;A+=1)h(A);return x.map((function(e){var n=I[e],r=c(n.record,e),i=t(r);return s.createElement(T,{key:e,data:n,rowKey:r,index:e,style:{top:-o+i.top},extra:!0,getHeight:function(n){var o=e+n-1,i=c(I[o].record,o),l=t(r,i);return l.bottom-l.top}})}))}},(function(e,n,r){var t=c(e.record,n);return s.createElement(T,{data:e,rowKey:t,index:n,style:r.style})})))}));const M=(0,v.sU)(H);var _=r(1725),L=function(e,n){var r=n.ref,t=n.onScroll;return s.createElement(M,{ref:r,data:e,onScroll:t})};function P(e,n){var r=e.data,o=e.columns,l=e.scroll,u=e.sticky,v=e.prefixCls,p=void 0===v?i.Nf:v,m=e.className,x=e.listItemHeight,h=e.components,A=e.onScroll,y=l||{},w=y.x,g=y.y;"number"!==typeof w&&(w=1),"number"!==typeof g&&(g=500);var C=(0,f._q)((function(e,n){return(0,_.A)(h,e)||n})),E=(0,f._q)(A),N=s.useMemo((function(){return{sticky:u,scrollY:g,listItemHeight:x,getComponent:C,onScroll:E}}),[u,g,x,C,E]);return s.createElement(b.Provider,{value:N},s.createElement(i.Ay,(0,c.A)({},e,{className:d()(m,"".concat(p,"-virtual")),scroll:(0,a.A)((0,a.A)({},l),{},{x:w}),components:(0,a.A)((0,a.A)({},h),{},{body:null!==r&&void 0!==r&&r.length?L:void 0}),columns:o,internalHooks:t.F,tailor:!0,ref:n})))}var K=s.forwardRef(P);function B(e){return(0,v.R0)(K,e)}B()},824:(e,n,r)=>{r.d(n,{A:()=>h});var t=r(4467),o=r(9379),i=r(5544),l=r(5897),c=r(8139),a=r.n(c),u=r(4903),d=r(8419),f=r(8200),s=r(5043),v=r(1848),p=r(785),m=r(5818),x=function(e,n){var r,c,x=e.scrollBodyRef,h=e.onScroll,A=e.offsetScroll,y=e.container,w=(0,l.NT)(v.Ay,"prefixCls"),g=(null===(r=x.current)||void 0===r?void 0:r.scrollWidth)||0,C=(null===(c=x.current)||void 0===c?void 0:c.clientWidth)||0,E=g&&C*(C/g),b=s.useRef(),N=(0,p.x)({scrollLeft:0,isHiddenScrollBar:!0}),k=(0,i.A)(N,2),R=k[0],S=k[1],I=s.useRef({delta:0,x:0}),T=s.useState(!1),H=(0,i.A)(T,2),M=H[0],_=H[1],L=s.useRef(null);s.useEffect((function(){return function(){m.A.cancel(L.current)}}),[]);var P=function(){_(!1)},K=function(e){var n,r=(e||(null===(n=window)||void 0===n?void 0:n.event)).buttons;if(M&&0!==r){var t=I.current.x+e.pageX-I.current.x-I.current.delta;t<=0&&(t=0),t+E>=C&&(t=C-E),h({scrollLeft:t/C*(g+2)}),I.current.x=e.pageX}else M&&_(!1)},B=function(){L.current=(0,m.A)((function(){if(x.current){var e=(0,d.A3)(x.current).top,n=e+x.current.offsetHeight,r=y===window?document.documentElement.scrollTop+window.innerHeight:(0,d.A3)(y).top+y.clientHeight;n-(0,f.A)()<=r||e>=r-A?S((function(e){return(0,o.A)((0,o.A)({},e),{},{isHiddenScrollBar:!0})})):S((function(e){return(0,o.A)((0,o.A)({},e),{},{isHiddenScrollBar:!1})}))}}))},W=function(e){S((function(n){return(0,o.A)((0,o.A)({},n),{},{scrollLeft:e/g*C||0})}))};return s.useImperativeHandle(n,(function(){return{setScrollLeft:W,checkScrollBarVisible:B}})),s.useEffect((function(){var e=(0,u.A)(document.body,"mouseup",P,!1),n=(0,u.A)(document.body,"mousemove",K,!1);return B(),function(){e.remove(),n.remove()}}),[E,M]),s.useEffect((function(){var e=(0,u.A)(y,"scroll",B,!1),n=(0,u.A)(window,"resize",B,!1);return function(){e.remove(),n.remove()}}),[y]),s.useEffect((function(){R.isHiddenScrollBar||S((function(e){var n=x.current;return n?(0,o.A)((0,o.A)({},e),{},{scrollLeft:n.scrollLeft/n.scrollWidth*n.clientWidth}):e}))}),[R.isHiddenScrollBar]),g<=C||!E||R.isHiddenScrollBar?null:s.createElement("div",{style:{height:(0,f.A)(),width:C,bottom:A},className:"".concat(w,"-sticky-scroll")},s.createElement("div",{onMouseDown:function(e){e.persist(),I.current.delta=e.pageX-R.scrollLeft,I.current.x=0,_(!0),e.preventDefault()},ref:b,className:a()("".concat(w,"-sticky-scroll-bar"),(0,t.A)({},"".concat(w,"-sticky-scroll-bar-active"),M)),style:{width:"".concat(E,"px"),transform:"translate3d(".concat(R.scrollLeft,"px, 0, 0)")}}))};const h=s.forwardRef(x)},2202:(e,n,r)=>{r.d(n,{A:()=>t});const t=function(e){return null}},4823:(e,n,r)=>{r.d(n,{A:()=>t});const t=function(e){return null}},4329:(e,n,r)=>{r.d(n,{Y_:()=>a,cI:()=>u,of:()=>c});var t=r(4467),o=r(5043),i=r(8139),l=r.n(i);function c(e){var n=e.prefixCls,r=e.record,i=e.onExpand,c=e.expanded,a=e.expandable,u="".concat(n,"-row-expand-icon");if(!a)return o.createElement("span",{className:l()(u,"".concat(n,"-row-spaced"))});return o.createElement("span",{className:l()(u,(0,t.A)((0,t.A)({},"".concat(n,"-row-expanded"),c),"".concat(n,"-row-collapsed"),!c)),onClick:function(e){i(r,e),e.stopPropagation()}})}function a(e,n,r){var t=[];return function e(o){(o||[]).forEach((function(o,i){t.push(n(o,i)),e(o[r])}))}(e),t}function u(e,n,r,t){return"string"===typeof e?e:"function"===typeof e?e(n,r,t):""}},1606:(e,n,r)=>{function t(e,n,r,t,o){var i,l,c=r[e]||{},a=r[n]||{};"left"===c.fixed?i=t.left["rtl"===o?n:e]:"right"===a.fixed&&(l=t.right["rtl"===o?e:n]);var u=!1,d=!1,f=!1,s=!1,v=r[n+1],p=r[e-1],m=v&&!v.fixed||p&&!p.fixed||r.every((function(e){return"left"===e.fixed}));if("rtl"===o){if(void 0!==i)s=!(p&&"left"===p.fixed)&&m;else if(void 0!==l){f=!(v&&"right"===v.fixed)&&m}}else if(void 0!==i){u=!(v&&"left"===v.fixed)&&m}else if(void 0!==l){d=!(p&&"right"===p.fixed)&&m}return{fixLeft:i,fixRight:l,lastFixLeft:u,firstFixRight:d,lastFixRight:f,firstFixLeft:s,isSticky:t.isSticky}}r.d(n,{T:()=>t})},3562:(e,n,r)=>{r.d(n,{P:()=>l,T:()=>c});var t=r(9379),o=r(45),i=(r(7907),["expandable"]),l="RC_TABLE_INTERNAL_COL_DEFINE";function c(e){var n,r=e.expandable,l=(0,o.A)(e,i);return!1===(n="expandable"in e?(0,t.A)((0,t.A)({},l),r):l).showExpandColumn&&(n.expandIconColumnIndex=-1),n}},5776:(e,n,r)=>{r.d(n,{XL:()=>l,q0:()=>i,r$:()=>o});var t="RC_TABLE_KEY";function o(e){var n=[],r={};return e.forEach((function(e){for(var o,i=e||{},l=i.key,c=i.dataIndex,a=l||(o=c,void 0===o||null===o?[]:Array.isArray(o)?o:[o]).join("-")||t;r[a];)a="".concat(a,"_next");r[a]=!0,n.push(a)})),n}function i(e){return null!==e&&void 0!==e}function l(e){return"number"===typeof e&&!Number.isNaN(e)}}}]);
//# sourceMappingURL=vendor-cbdcaa39.3b82eb43.js.map
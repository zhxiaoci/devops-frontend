"use strict";(self.webpackChunkgithub_devops_frontend=self.webpackChunkgithub_devops_frontend||[]).push([[1012],{62705:(e,t,n)=>{n.d(t,{A:()=>Q});var a=n(58168),r=n(64467),o=n(89379),i=n(5544),c=n(82284),l=n(80045),u=n(98139),s=n.n(u),f=n(28678),d=n(16765),v=n(65043);const b=(0,v.createContext)(null);var m=n(60436),p=n(68802),h=n(32375),A=n(13758),y=n(45818);const g=function(e){var t=e.activeTabOffset,n=e.horizontal,a=e.rtl,r=e.indicator,o=void 0===r?{}:r,c=o.size,l=o.align,u=void 0===l?"center":l,s=(0,v.useState)(),f=(0,i.A)(s,2),d=f[0],b=f[1],m=(0,v.useRef)(),p=v.useCallback((function(e){return"function"===typeof c?c(e):"number"===typeof c?c:e}),[c]);function h(){y.A.cancel(m.current)}return(0,v.useEffect)((function(){var e={};if(t)if(n){e.width=p(t.width);var r=a?"right":"left";"start"===u&&(e[r]=t[r]),"center"===u&&(e[r]=t[r]+t.width/2,e.transform=a?"translateX(50%)":"translateX(-50%)"),"end"===u&&(e[r]=t[r]+t.width,e.transform="translateX(-100%)")}else e.height=p(t.height),"start"===u&&(e.top=t.top),"center"===u&&(e.top=t.top+t.height/2,e.transform="translateY(-50%)"),"end"===u&&(e.top=t.top+t.height,e.transform="translateY(-100%)");return h(),m.current=(0,y.A)((function(){b(e)})),h}),[t,n,a,u,p]),{style:d}};var E={width:0,height:0,left:0,top:0};function k(e,t){var n=v.useRef(e),a=v.useState({}),r=(0,i.A)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var C=Math.pow(.995,20);var x=n(52664);function w(e){var t=(0,v.useState)(0),n=(0,i.A)(t,2),a=n[0],r=n[1],o=(0,v.useRef)(0),c=(0,v.useRef)();return c.current=e,(0,x.o)((function(){var e;null===(e=c.current)||void 0===e||e.call(c)}),[a]),function(){o.current===a&&(o.current+=1,r(o.current))}}var N={width:0,height:0,left:0,top:0,right:0};function P(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}function R(e){return String(e).replace(/"/g,"TABS_DQ")}function T(e,t,n,a){return!(!n||a||!1===e||void 0===e&&(!1===t||null===t))}const M=v.forwardRef((function(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?v.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}));const S=v.forwardRef((function(e,t){var n,a=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var i={};return"object"!==(0,c.A)(o)||v.isValidElement(o)?i.right=o:i=o,"right"===a&&(n=i.right),"left"===a&&(n=i.left),n?v.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null}));var I=n(75822),B=n(19942),L=n(25001),D=v.forwardRef((function(e,t){var n=e.prefixCls,o=e.id,c=e.tabs,l=e.locale,u=e.mobile,f=e.more,d=void 0===f?{}:f,b=e.style,m=e.className,p=e.editable,h=e.tabBarGutter,A=e.rtl,y=e.removeAriaLabel,g=e.onTabClick,E=e.getPopupContainer,k=e.popupClassName,C=(0,v.useState)(!1),x=(0,i.A)(C,2),w=x[0],N=x[1],P=(0,v.useState)(null),R=(0,i.A)(P,2),S=R[0],D=R[1],K=d.icon,_=void 0===K?"More":K,W="".concat(o,"-more-popup"),j="".concat(n,"-dropdown"),z=null!==S?"".concat(W,"-").concat(S):null,O=null===l||void 0===l?void 0:l.dropdownAriaLabel;var X=v.createElement(B.Ay,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),N(!1)},prefixCls:"".concat(j,"-menu"),id:W,tabIndex:-1,role:"listbox","aria-activedescendant":z,selectedKeys:[S],"aria-label":void 0!==O?O:"expanded dropdown"},c.map((function(e){var t=e.closable,n=e.disabled,a=e.closeIcon,r=e.key,i=e.label,c=T(t,a,p,n);return v.createElement(B.Dr,{key:r,id:"".concat(W,"-").concat(r),role:"option","aria-controls":o&&"".concat(o,"-panel-").concat(r),disabled:n},v.createElement("span",null,i),c&&v.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(j,"-menu-item-remove"),onClick:function(e){e.stopPropagation(),function(e,t){e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:t,event:e})}(e,r)}},a||p.removeIcon||"\xd7"))})));function G(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===S}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void D(o.key)}}(0,v.useEffect)((function(){var e=document.getElementById(z);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[S]),(0,v.useEffect)((function(){w||D(null)}),[w]);var V=(0,r.A)({},A?"marginRight":"marginLeft",h);c.length||(V.visibility="hidden",V.order=1);var Y=s()((0,r.A)({},"".concat(j,"-rtl"),A)),F=u?null:v.createElement(I.A,(0,a.A)({prefixCls:j,overlay:X,visible:!!c.length&&w,onVisibleChange:N,overlayClassName:s()(Y,k),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E},d),v.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:V,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":W,id:"".concat(o,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case L.A.UP:G(-1),e.preventDefault();break;case L.A.DOWN:G(1),e.preventDefault();break;case L.A.ESC:N(!1);break;case L.A.SPACE:case L.A.ENTER:null!==S&&g(S,e)}else[L.A.DOWN,L.A.SPACE,L.A.ENTER].includes(t)&&(N(!0),e.preventDefault())}},_));return v.createElement("div",{className:s()("".concat(n,"-nav-operations"),m),style:b,ref:t},F,v.createElement(M,{prefixCls:n,locale:l,editable:p}))}));const K=v.memo(D,(function(e,t){return t.tabMoving}));const _=function(e){var t=e.prefixCls,n=e.id,a=e.active,o=e.tab,i=o.key,c=o.label,l=o.disabled,u=o.closeIcon,f=o.icon,d=e.closable,b=e.renderWrapper,m=e.removeAriaLabel,p=e.editable,h=e.onClick,A=e.onFocus,y=e.style,g="".concat(t,"-tab"),E=T(d,u,p,l);function k(e){l||h(e)}var C=v.useMemo((function(){return f&&"string"===typeof c?v.createElement("span",null,c):c}),[c,f]),x=v.createElement("div",{key:i,"data-node-key":R(i),className:s()(g,(0,r.A)((0,r.A)((0,r.A)({},"".concat(g,"-with-remove"),E),"".concat(g,"-active"),a),"".concat(g,"-disabled"),l)),style:y,onClick:k},v.createElement("div",{role:"tab","aria-selected":a,id:n&&"".concat(n,"-tab-").concat(i),className:"".concat(g,"-btn"),"aria-controls":n&&"".concat(n,"-panel-").concat(i),"aria-disabled":l,tabIndex:l?null:0,onClick:function(e){e.stopPropagation(),k(e)},onKeyDown:function(e){[L.A.SPACE,L.A.ENTER].includes(e.which)&&(e.preventDefault(),k(e))},onFocus:A},f&&v.createElement("span",{className:"".concat(g,"-icon")},f),c&&C),E&&v.createElement("button",{type:"button","aria-label":m||"remove",tabIndex:0,className:"".concat(g,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),p.onEdit("remove",{key:i,event:t})}},u||p.removeIcon||"\xd7"));return b?b(x):x};var W=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,r=t.offsetHeight,o=void 0===r?0:r;if(e.current){var i=e.current.getBoundingClientRect(),c=i.width,l=i.height;if(Math.abs(c-a)<1)return[c,l]}return[a,o]},j=function(e,t){return e[t?0:1]};const z=v.forwardRef((function(e,t){var n=e.className,c=e.style,l=e.id,u=e.animated,f=e.activeKey,d=e.rtl,y=e.extra,x=e.editable,T=e.locale,I=e.tabPosition,B=e.tabBarGutter,L=e.children,D=e.onTabClick,z=e.onTabScroll,O=e.indicator,X=v.useContext(b),G=X.prefixCls,V=X.tabs,Y=(0,v.useRef)(null),F=(0,v.useRef)(null),H=(0,v.useRef)(null),q=(0,v.useRef)(null),J=(0,v.useRef)(null),Q=(0,v.useRef)(null),U=(0,v.useRef)(null),Z="top"===I||"bottom"===I,$=k(0,(function(e,t){Z&&z&&z({direction:e>t?"left":"right"})})),ee=(0,i.A)($,2),te=ee[0],ne=ee[1],ae=k(0,(function(e,t){!Z&&z&&z({direction:e>t?"top":"bottom"})})),re=(0,i.A)(ae,2),oe=re[0],ie=re[1],ce=(0,v.useState)([0,0]),le=(0,i.A)(ce,2),ue=le[0],se=le[1],fe=(0,v.useState)([0,0]),de=(0,i.A)(fe,2),ve=de[0],be=de[1],me=(0,v.useState)([0,0]),pe=(0,i.A)(me,2),he=pe[0],Ae=pe[1],ye=(0,v.useState)([0,0]),ge=(0,i.A)(ye,2),Ee=ge[0],ke=ge[1],Ce=function(e){var t=(0,v.useRef)([]),n=(0,v.useState)({}),a=(0,i.A)(n,2)[1],r=(0,v.useRef)("function"===typeof e?e():e),o=w((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),o()}]}(new Map),xe=(0,i.A)(Ce,2),we=xe[0],Ne=xe[1],Pe=function(e,t,n){return(0,v.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||E,i=r.left+r.width,c=0;c<e.length;c+=1){var l,u=e[c].key,s=t.get(u);s||(s=t.get(null===(l=e[c-1])||void 0===l?void 0:l.key)||E);var f=a.get(u)||(0,o.A)({},s);f.right=i-f.left-f.width,a.set(u,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(V,we,ve[0]),Re=j(ue,Z),Te=j(ve,Z),Me=j(he,Z),Se=j(Ee,Z),Ie=Math.floor(Re)<Math.floor(Te+Me),Be=Ie?Re-Se:Re-Me,Le="".concat(G,"-nav-operations-hidden"),De=0,Ke=0;function _e(e){return e<De?De:e>Ke?Ke:e}Z&&d?(De=0,Ke=Math.max(0,Te-Be)):(De=Math.min(0,Be-Te),Ke=0);var We=(0,v.useRef)(null),je=(0,v.useState)(),ze=(0,i.A)(je,2),Oe=ze[0],Xe=ze[1];function Ge(){Xe(Date.now())}function Ve(){We.current&&clearTimeout(We.current)}!function(e,t){var n=(0,v.useState)(),a=(0,i.A)(n,2),r=a[0],o=a[1],c=(0,v.useState)(0),l=(0,i.A)(c,2),u=l[0],s=l[1],f=(0,v.useState)(0),d=(0,i.A)(f,2),b=d[0],m=d[1],p=(0,v.useState)(),h=(0,i.A)(p,2),A=h[0],y=h[1],g=(0,v.useRef)(),E=(0,v.useRef)(),k=(0,v.useRef)(null);k.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){var n=e.touches[0],a=n.screenX,i=n.screenY;o({x:a,y:i});var c=a-r.x,l=i-r.y;t(c,l);var f=Date.now();s(f),m(f-u),y({x:c,y:l})}},onTouchEnd:function(){if(r&&(o(null),y(null),A)){var e=A.x/b,n=A.y/b,a=Math.abs(e),i=Math.abs(n);if(Math.max(a,i)<.1)return;var c=e,l=n;g.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(g.current):t(20*(c*=C),20*(l*=C))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},v.useEffect((function(){function t(e){k.current.onTouchMove(e)}function n(e){k.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!0}),e.current.addEventListener("touchstart",(function(e){k.current.onTouchStart(e)}),{passive:!0}),e.current.addEventListener("wheel",(function(e){k.current.onWheel(e)}),{passive:!1}),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(q,(function(e,t){function n(e,t){e((function(e){return _e(e+t)}))}return!!Ie&&(Z?n(ne,e):n(ie,t),Ve(),Ge(),!0)})),(0,v.useEffect)((function(){return Ve(),Oe&&(We.current=setTimeout((function(){Xe(0)}),100)),Ve}),[Oe]);var Ye=function(e,t,n,a,r,o,i){var c,l,u,s=i.tabs,f=i.tabPosition,d=i.rtl;return["top","bottom"].includes(f)?(c="width",l=d?"right":"left",u=Math.abs(n)):(c="height",l="top",u=-n),(0,v.useMemo)((function(){if(!s.length)return[0,0];for(var n=s.length,a=n,r=0;r<n;r+=1){var o=e.get(s[r].key)||N;if(Math.floor(o[l]+o[c])>Math.floor(u+t)){a=r-1;break}}for(var i=0,f=n-1;f>=0;f-=1)if((e.get(s[f].key)||N)[l]<u){i=f+1;break}return i>=a?[0,0]:[i,a]}),[e,t,a,r,o,u,f,s.map((function(e){return e.key})).join("_"),d])}(Pe,Be,Z?te:oe,Te,Me,Se,(0,o.A)((0,o.A)({},e),{},{tabs:V})),Fe=(0,i.A)(Ye,2),He=Fe[0],qe=Fe[1],Je=(0,h.A)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=Pe.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Z){var n=te;d?t.right<te?n=t.right:t.right+t.width>te+Be&&(n=t.right+t.width-Be):t.left<-te?n=-t.left:t.left+t.width>-te+Be&&(n=-(t.left+t.width-Be)),ie(0),ne(_e(n))}else{var a=oe;t.top<-oe?a=-t.top:t.top+t.height>-oe+Be&&(a=-(t.top+t.height-Be)),ne(0),ie(_e(a))}})),Qe={};"top"===I||"bottom"===I?Qe[d?"marginRight":"marginLeft"]=B:Qe.marginTop=B;var Ue=V.map((function(e,t){var n=e.key;return v.createElement(_,{id:l,prefixCls:G,key:n,tab:e,style:0===t?void 0:Qe,closable:e.closable,editable:x,active:n===f,renderWrapper:L,removeAriaLabel:null===T||void 0===T?void 0:T.removeAriaLabel,onClick:function(e){D(n,e)},onFocus:function(){Je(n),Ge(),q.current&&(d||(q.current.scrollLeft=0),q.current.scrollTop=0)}})})),Ze=function(){return Ne((function(){var e,t=new Map,n=null===(e=J.current)||void 0===e?void 0:e.getBoundingClientRect();return V.forEach((function(e){var a,r=e.key,o=null===(a=J.current)||void 0===a?void 0:a.querySelector('[data-node-key="'.concat(R(r),'"]'));if(o){var c=function(e,t){var n=e.offsetWidth,a=e.offsetHeight,r=e.offsetTop,o=e.offsetLeft,i=e.getBoundingClientRect(),c=i.width,l=i.height,u=i.left,s=i.top;return Math.abs(c-n)<1?[c,l,u-t.left,s-t.top]:[n,a,o,r]}(o,n),l=(0,i.A)(c,4),u=l[0],s=l[1],f=l[2],d=l[3];t.set(r,{width:u,height:s,left:f,top:d})}})),t}))};(0,v.useEffect)((function(){Ze()}),[V.map((function(e){return e.key})).join("_")]);var $e=w((function(){var e=W(Y),t=W(F),n=W(H);se([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=W(U);Ae(a);var r=W(Q);ke(r);var o=W(J);be([o[0]-a[0],o[1]-a[1]]),Ze()})),et=V.slice(0,He),tt=V.slice(qe+1),nt=[].concat((0,m.A)(et),(0,m.A)(tt)),at=Pe.get(f),rt=g({activeTabOffset:at,horizontal:Z,indicator:O,rtl:d}).style;(0,v.useEffect)((function(){Je()}),[f,De,Ke,P(at),P(Pe),Z]),(0,v.useEffect)((function(){$e()}),[d]);var ot,it,ct,lt,ut=!!nt.length,st="".concat(G,"-nav-wrap");return Z?d?(it=te>0,ot=te!==Ke):(ot=te<0,it=te!==De):(ct=oe<0,lt=oe!==De),v.createElement(p.A,{onResize:$e},v.createElement("div",{ref:(0,A.xK)(t,Y),role:"tablist",className:s()("".concat(G,"-nav"),n),style:c,onKeyDown:function(){Ge()}},v.createElement(S,{ref:F,position:"left",extra:y,prefixCls:G}),v.createElement(p.A,{onResize:$e},v.createElement("div",{className:s()(st,(0,r.A)((0,r.A)((0,r.A)((0,r.A)({},"".concat(st,"-ping-left"),ot),"".concat(st,"-ping-right"),it),"".concat(st,"-ping-top"),ct),"".concat(st,"-ping-bottom"),lt)),ref:q},v.createElement(p.A,{onResize:$e},v.createElement("div",{ref:J,className:"".concat(G,"-nav-list"),style:{transform:"translate(".concat(te,"px, ").concat(oe,"px)"),transition:Oe?"none":void 0}},Ue,v.createElement(M,{ref:U,prefixCls:G,locale:T,editable:x,style:(0,o.A)((0,o.A)({},0===Ue.length?void 0:Qe),{},{visibility:ut?"hidden":null})}),v.createElement("div",{className:s()("".concat(G,"-ink-bar"),(0,r.A)({},"".concat(G,"-ink-bar-animated"),u.inkBar)),style:rt}))))),v.createElement(K,(0,a.A)({},e,{removeAriaLabel:null===T||void 0===T?void 0:T.removeAriaLabel,ref:Q,prefixCls:G,tabs:nt,className:!ut&&Le,tabMoving:!!Oe})),v.createElement(S,{ref:H,position:"right",extra:y,prefixCls:G})))}));const O=v.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.style,o=e.id,i=e.active,c=e.tabKey,l=e.children;return v.createElement("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!i,style:r,className:s()(n,i&&"".concat(n,"-active"),a),ref:t},l)}));var X=["renderTabBar"],G=["label","key"];const V=function(e){var t=e.renderTabBar,n=(0,l.A)(e,X),r=v.useContext(b).tabs;return t?t((0,o.A)((0,o.A)({},n),{},{panes:r.map((function(e){var t=e.label,n=e.key,r=(0,l.A)(e,G);return v.createElement(O,(0,a.A)({tab:t,key:n,tabKey:n},r))}))}),z):v.createElement(z,n)};var Y=n(7419),F=["key","forceRender","style","className","destroyInactiveTabPane"];const H=function(e){var t=e.id,n=e.activeKey,i=e.animated,c=e.tabPosition,u=e.destroyInactiveTabPane,f=v.useContext(b),d=f.prefixCls,m=f.tabs,p=i.tabPane,h="".concat(d,"-tabpane");return v.createElement("div",{className:s()("".concat(d,"-content-holder"))},v.createElement("div",{className:s()("".concat(d,"-content"),"".concat(d,"-content-").concat(c),(0,r.A)({},"".concat(d,"-content-animated"),p))},m.map((function(e){var r=e.key,c=e.forceRender,f=e.style,d=e.className,b=e.destroyInactiveTabPane,m=(0,l.A)(e,F),A=r===n;return v.createElement(Y.Ay,(0,a.A)({key:r,visible:A,forceRender:c,removeOnLeave:!(!u&&!b),leavedClassName:"".concat(h,"-hidden")},i.tabPaneMotion),(function(e,n){var i=e.style,c=e.className;return v.createElement(O,(0,a.A)({},m,{prefixCls:h,id:t,tabKey:r,animated:p,active:A,style:(0,o.A)((0,o.A)({},f),i),className:s()(d,c),ref:n}))}))}))))};n(97907);var q=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],J=0;const Q=v.forwardRef((function(e,t){var n=e.id,u=e.prefixCls,m=void 0===u?"rc-tabs":u,p=e.className,h=e.items,A=e.direction,y=e.activeKey,g=e.defaultActiveKey,E=e.editable,k=e.animated,C=e.tabPosition,x=void 0===C?"top":C,w=e.tabBarGutter,N=e.tabBarStyle,P=e.tabBarExtraContent,R=e.locale,T=e.more,M=e.destroyInactiveTabPane,S=e.renderTabBar,I=e.onChange,B=e.onTabClick,L=e.onTabScroll,D=e.getPopupContainer,K=e.popupClassName,_=e.indicator,W=(0,l.A)(e,q),j=v.useMemo((function(){return(h||[]).filter((function(e){return e&&"object"===(0,c.A)(e)&&"key"in e}))}),[h]),z="rtl"===A,O=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,o.A)({inkBar:!0},"object"===(0,c.A)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(k),X=(0,v.useState)(!1),G=(0,i.A)(X,2),Y=G[0],F=G[1];(0,v.useEffect)((function(){F((0,d.A)())}),[]);var Q=(0,f.A)((function(){var e;return null===(e=j[0])||void 0===e?void 0:e.key}),{value:y,defaultValue:g}),U=(0,i.A)(Q,2),Z=U[0],$=U[1],ee=(0,v.useState)((function(){return j.findIndex((function(e){return e.key===Z}))})),te=(0,i.A)(ee,2),ne=te[0],ae=te[1];(0,v.useEffect)((function(){var e,t=j.findIndex((function(e){return e.key===Z}));-1===t&&(t=Math.max(0,Math.min(ne,j.length-1)),$(null===(e=j[t])||void 0===e?void 0:e.key));ae(t)}),[j.map((function(e){return e.key})).join("_"),Z,ne]);var re=(0,f.A)(null,{value:n}),oe=(0,i.A)(re,2),ie=oe[0],ce=oe[1];(0,v.useEffect)((function(){n||(ce("rc-tabs-".concat(J)),J+=1)}),[]);var le={id:ie,activeKey:Z,animated:O,tabPosition:x,rtl:z,mobile:Y},ue=(0,o.A)((0,o.A)({},le),{},{editable:E,locale:R,more:T,tabBarGutter:w,onTabClick:function(e,t){null===B||void 0===B||B(e,t);var n=e!==Z;$(e),n&&(null===I||void 0===I||I(e))},onTabScroll:L,extra:P,style:N,panes:null,getPopupContainer:D,popupClassName:K,indicator:_});return v.createElement(b.Provider,{value:{tabs:j,prefixCls:m}},v.createElement("div",(0,a.A)({ref:t,id:n,className:s()(m,"".concat(m,"-").concat(x),(0,r.A)((0,r.A)((0,r.A)({},"".concat(m,"-mobile"),Y),"".concat(m,"-editable"),E),"".concat(m,"-rtl"),z),p)},W),v.createElement(V,(0,a.A)({},ue,{renderTabBar:S})),v.createElement(H,(0,a.A)({destroyInactiveTabPane:M},le,{animated:O}))))}))}}]);
//# sourceMappingURL=vendor-c77df164.70f191aa.chunk.js.map
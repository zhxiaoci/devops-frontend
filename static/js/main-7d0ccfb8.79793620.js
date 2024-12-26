"use strict";(self.webpackChunkgithub_devops_frontend=self.webpackChunkgithub_devops_frontend||[]).push([[9402],{30910:(e,t,o)=>{o.d(t,{kf:()=>i});var n=o(23029),r=o(92901),a=o(92019);let i=function(){return(0,r.A)((function e(t){var o;if((0,n.A)(this,e),this.cleared=!1,t instanceof e)return this.metaColor=t.metaColor.clone(),this.colors=null===(o=t.colors)||void 0===o?void 0:o.map((t=>({color:new e(t.color),percent:t.percent}))),void(this.cleared=t.cleared);const r=Array.isArray(t);r&&t.length?(this.colors=t.map((t=>{let{color:o,percent:n}=t;return{color:new e(o),percent:n}})),this.metaColor=new a.Q1(this.colors[0].color.metaColor)):this.metaColor=new a.Q1(r?"":t),(!t||r&&!this.colors)&&(this.metaColor=this.metaColor.setA(0),this.cleared=!0)}),[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){return e=this.toHexString(),t=this.metaColor.a<1,e?((e,t)=>(null===e||void 0===e?void 0:e.replace(/[^\w/]/g,"").slice(0,t?8:6))||"")(e,t):"";var e,t}},{key:"toHexString",value:function(){return this.metaColor.toHexString()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}},{key:"isGradient",value:function(){return!!this.colors&&!this.cleared}},{key:"getColors",value:function(){return this.colors||[{color:this,percent:0}]}},{key:"toCssString",value:function(){const{colors:e}=this;if(e){return`linear-gradient(90deg, ${e.map((e=>`${e.color.toRgbString()} ${e.percent}%`)).join(", ")})`}return this.metaColor.toRgbString()}},{key:"equals",value:function(e){return!(!e||this.isGradient()!==e.isGradient())&&(this.isGradient()?this.colors.length===e.colors.length&&this.colors.every(((t,o)=>{const n=e.colors[o];return t.percent===n.percent&&t.color.equals(n.color)})):this.toHexString()===e.toHexString())}}])}()},4097:(e,t,o)=>{o.d(t,{z:()=>r});o(65043);var n=o(92019);o(98139),o(28678);const r=(e,t)=>{const{r:o,g:r,b:a,a:i}=e.toRgb(),l=new n.Q1(e.toRgbString()).onBackground(t).toHsv();return i<=.5?l.v>.5:.299*o+.587*r+.114*a>192}},78440:(e,t,o)=>{o.d(t,{A:()=>i,X:()=>a});var n=o(65043);const r=n.createContext(!1),a=e=>{let{children:t,disabled:o}=e;const a=n.useContext(r);return n.createElement(r.Provider,{value:null!==o&&void 0!==o?o:a},t)},i=r},87063:(e,t,o)=>{o.d(t,{A:()=>i,c:()=>a});var n=o(65043);const r=n.createContext(void 0),a=e=>{let{children:t,size:o}=e;const a=n.useContext(r);return n.createElement(r.Provider,{value:o||a},t)},i=r},35296:(e,t,o)=>{o.d(t,{QO:()=>l,lJ:()=>i,pM:()=>a,yH:()=>r});var n=o(65043);const r="ant",a="anticon",i=["outlined","borderless","filled"],l=n.createContext({getPrefixCls:(e,t)=>t||(e?`${r}-${e}`:r),iconPrefixCls:a}),{Consumer:s}=l},78887:(e,t,o)=>{o.d(t,{A:()=>r});var n=o(75620);const r=e=>{const[,,,,t]=(0,n.Ay)();return t?`${e}-css-var`:""}},89122:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(65043),r=o(87063);const a=e=>{const t=n.useContext(r.A);return n.useMemo((()=>e?"string"===typeof e?null!==e&&void 0!==e?e:t:e instanceof Function?e(t):t:t),[e,t])}},35735:(e,t,o)=>{o.d(t,{Ay:()=>F,cr:()=>X});var n=o(65043),r=o.t(n,2),a=o(26376),i=o(20794),l=o(13709),s=o(56793),c=o(59478),d=o(53130),u=o(86191),p=o(45012),m=o(47451),g=o(33405),v=o(64580),b=o(35296),h=o(8500),f=o(50097),y=o(52931),C=o(80930);const $=`-ant-${Date.now()}-${Math.random()}`;function w(e,t){const o=function(e,t){const o={},n=(e,t)=>{let o=e.clone();return o=(null===t||void 0===t?void 0:t(o))||o,o.toRgbString()},r=(e,t)=>{const r=new f.q(e),a=(0,h.cM)(r.toRgbString());o[`${t}-color`]=n(r),o[`${t}-color-disabled`]=a[1],o[`${t}-color-hover`]=a[4],o[`${t}-color-active`]=a[6],o[`${t}-color-outline`]=r.clone().setAlpha(.2).toRgbString(),o[`${t}-color-deprecated-bg`]=a[0],o[`${t}-color-deprecated-border`]=a[2]};if(t.primaryColor){r(t.primaryColor,"primary");const e=new f.q(t.primaryColor),a=(0,h.cM)(e.toRgbString());a.forEach(((e,t)=>{o[`primary-${t+1}`]=e})),o["primary-color-deprecated-l-35"]=n(e,(e=>e.lighten(35))),o["primary-color-deprecated-l-20"]=n(e,(e=>e.lighten(20))),o["primary-color-deprecated-t-20"]=n(e,(e=>e.tint(20))),o["primary-color-deprecated-t-50"]=n(e,(e=>e.tint(50))),o["primary-color-deprecated-f-12"]=n(e,(e=>e.setAlpha(.12*e.getAlpha())));const i=new f.q(a[0]);o["primary-color-active-deprecated-f-30"]=n(i,(e=>e.setAlpha(.3*e.getAlpha()))),o["primary-color-active-deprecated-d-02"]=n(i,(e=>e.darken(2)))}return t.successColor&&r(t.successColor,"success"),t.warningColor&&r(t.warningColor,"warning"),t.errorColor&&r(t.errorColor,"error"),t.infoColor&&r(t.infoColor,"info"),`\n  :root {\n    ${Object.keys(o).map((t=>`--${e}-${t}: ${o[t]};`)).join("\n")}\n  }\n  `.trim()}(e,t);(0,y.A)()&&(0,C.BD)(o,`${$}-dynamic-theme`)}var x=o(78440),O=o(87063);const A=function(){return{componentDisabled:(0,n.useContext)(x.A),componentSize:(0,n.useContext)(O.A)}};var S=o(2231);const P=Object.assign({},r),{useId:j}=P,k="undefined"===typeof j?()=>"":j;var E=o(7419),R=o(75620);function z(e){const{children:t}=e,[,o]=(0,R.Ay)(),{motion:r}=o,a=n.useRef(!1);return a.current=a.current||!1===r,a.current?n.createElement(E.Kq,{motion:r},t):t}const I=()=>null;var M=o(10439),N=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const D=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];let H,B,L,V;function _(){return H||b.yH}function T(){return B||b.pM}const X=()=>({getPrefixCls:(e,t)=>t||(e?`${_()}-${e}`:_()),getIconPrefixCls:T,getRootPrefixCls:()=>H||_(),getTheme:()=>L,holderRender:V}),q=e=>{const{children:t,csp:o,autoInsertSpaceInButton:r,alert:p,anchor:h,form:f,locale:y,componentSize:C,direction:$,space:w,splitter:A,virtual:P,dropdownMatchSelectWidth:j,popupMatchSelectWidth:E,popupOverflow:R,legacyLocale:H,parentContext:B,iconPrefixCls:L,theme:V,componentDisabled:_,segmented:T,statistic:X,spin:q,calendar:Q,carousel:F,cascader:W,collapse:G,typography:K,checkbox:Y,descriptions:J,divider:U,drawer:Z,skeleton:ee,steps:te,image:oe,layout:ne,list:re,mentions:ae,modal:ie,progress:le,result:se,slider:ce,breadcrumb:de,menu:ue,pagination:pe,input:me,textArea:ge,empty:ve,badge:be,radio:he,rate:fe,switch:ye,transfer:Ce,avatar:$e,message:we,tag:xe,table:Oe,card:Ae,tabs:Se,timeline:Pe,timePicker:je,upload:ke,notification:Ee,tree:Re,colorPicker:ze,datePicker:Ie,rangePicker:Me,flex:Ne,wave:De,dropdown:He,warning:Be,tour:Le,floatButtonGroup:Ve,variant:_e,inputNumber:Te,treeSelect:Xe}=e,qe=n.useCallback(((t,o)=>{const{prefixCls:n}=e;if(o)return o;const r=n||B.getPrefixCls("");return t?`${r}-${t}`:r}),[B.getPrefixCls,e.prefixCls]),Qe=L||B.iconPrefixCls||b.pM,Fe=o||B.csp;(0,M.A)(Qe,Fe);const We=function(e,t,o){var n;(0,c.rJ)("ConfigProvider");const r=e||{},a=!1!==r.inherit&&t?t:Object.assign(Object.assign({},g.sb),{hashed:null!==(n=null===t||void 0===t?void 0:t.hashed)&&void 0!==n?n:g.sb.hashed,cssVar:null===t||void 0===t?void 0:t.cssVar}),i=k();return(0,l.A)((()=>{var n,l;if(!e)return t;const s=Object.assign({},a.components);Object.keys(e.components||{}).forEach((t=>{s[t]=Object.assign(Object.assign({},s[t]),e.components[t])}));const c=`css-var-${i.replace(/:/g,"")}`,d=(null!==(n=r.cssVar)&&void 0!==n?n:a.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:null===o||void 0===o?void 0:o.prefixCls},"object"===typeof a.cssVar?a.cssVar:{}),"object"===typeof r.cssVar?r.cssVar:{}),{key:"object"===typeof r.cssVar&&(null===(l=r.cssVar)||void 0===l?void 0:l.key)||c});return Object.assign(Object.assign(Object.assign({},a),r),{token:Object.assign(Object.assign({},a.token),r.token),components:s,cssVar:d})}),[r,a],((e,t)=>e.some(((e,o)=>{const n=t[o];return!(0,S.A)(e,n,!0)}))))}(V,B.theme,{prefixCls:qe("")});const Ge={csp:Fe,autoInsertSpaceInButton:r,alert:p,anchor:h,locale:y||H,direction:$,space:w,splitter:A,virtual:P,popupMatchSelectWidth:null!==E&&void 0!==E?E:j,popupOverflow:R,getPrefixCls:qe,iconPrefixCls:Qe,theme:We,segmented:T,statistic:X,spin:q,calendar:Q,carousel:F,cascader:W,collapse:G,typography:K,checkbox:Y,descriptions:J,divider:U,drawer:Z,skeleton:ee,steps:te,image:oe,input:me,textArea:ge,layout:ne,list:re,mentions:ae,modal:ie,progress:le,result:se,slider:ce,breadcrumb:de,menu:ue,pagination:pe,empty:ve,badge:be,radio:he,rate:fe,switch:ye,transfer:Ce,avatar:$e,message:we,tag:xe,table:Oe,card:Ae,tabs:Se,timeline:Pe,timePicker:je,upload:ke,notification:Ee,tree:Re,colorPicker:ze,datePicker:Ie,rangePicker:Me,flex:Ne,wave:De,dropdown:He,warning:Be,tour:Le,floatButtonGroup:Ve,variant:_e,inputNumber:Te,treeSelect:Xe};const Ke=Object.assign({},B);Object.keys(Ge).forEach((e=>{void 0!==Ge[e]&&(Ke[e]=Ge[e])})),D.forEach((t=>{const o=e[t];o&&(Ke[t]=o)})),"undefined"!==typeof r&&(Ke.button=Object.assign({autoInsertSpace:r},Ke.button));const Ye=(0,l.A)((()=>Ke),Ke,((e,t)=>{const o=Object.keys(e),n=Object.keys(t);return o.length!==n.length||o.some((o=>e[o]!==t[o]))})),Je=n.useMemo((()=>({prefixCls:Qe,csp:Fe})),[Qe,Fe]);let Ue=n.createElement(n.Fragment,null,n.createElement(I,{dropdownMatchSelectWidth:j}),t);const Ze=n.useMemo((()=>{var e,t,o,n;return(0,s.h)((null===(e=m.A.Form)||void 0===e?void 0:e.defaultValidateMessages)||{},(null===(o=null===(t=Ye.locale)||void 0===t?void 0:t.Form)||void 0===o?void 0:o.defaultValidateMessages)||{},(null===(n=Ye.form)||void 0===n?void 0:n.validateMessages)||{},(null===f||void 0===f?void 0:f.validateMessages)||{})}),[Ye,null===f||void 0===f?void 0:f.validateMessages]);Object.keys(Ze).length>0&&(Ue=n.createElement(d.A.Provider,{value:Ze},Ue)),y&&(Ue=n.createElement(u.Ay,{locale:y,_ANT_MARK__:u.M2},Ue)),(Qe||Fe)&&(Ue=n.createElement(i.A.Provider,{value:Je},Ue)),C&&(Ue=n.createElement(O.c,{size:C},Ue)),Ue=n.createElement(z,null,Ue);const et=n.useMemo((()=>{const e=We||{},{algorithm:t,token:o,components:n,cssVar:r}=e,i=N(e,["algorithm","token","components","cssVar"]),l=t&&(!Array.isArray(t)||t.length>0)?(0,a.an)(t):g.zQ,s={};Object.entries(n||{}).forEach((e=>{let[t,o]=e;const n=Object.assign({},o);"algorithm"in n&&(!0===n.algorithm?n.theme=l:(Array.isArray(n.algorithm)||"function"===typeof n.algorithm)&&(n.theme=(0,a.an)(n.algorithm)),delete n.algorithm),s[t]=n}));const c=Object.assign(Object.assign({},v.A),o);return Object.assign(Object.assign({},i),{theme:l,token:c,components:s,override:Object.assign({override:c},s),cssVar:r})}),[We]);return V&&(Ue=n.createElement(g.vG.Provider,{value:et},Ue)),Ye.warning&&(Ue=n.createElement(c._n.Provider,{value:Ye.warning},Ue)),void 0!==_&&(Ue=n.createElement(x.X,{disabled:_},Ue)),n.createElement(b.QO.Provider,{value:Ye},Ue)},Q=e=>{const t=n.useContext(b.QO),o=n.useContext(p.A);return n.createElement(q,Object.assign({parentContext:t,legacyLocale:o},e))};Q.ConfigContext=b.QO,Q.SizeContext=O.A,Q.config=e=>{const{prefixCls:t,iconPrefixCls:o,theme:n,holderRender:r}=e;void 0!==t&&(H=t),void 0!==o&&(B=o),"holderRender"in e&&(V=r),n&&(!function(e){return Object.keys(e).some((e=>e.endsWith("Color")))}(n)?L=n:w(_(),n))},Q.useConfig=A,Object.defineProperty(Q,"SizeContext",{get:()=>O.A});const F=Q},50949:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(43034),r=o(62452);const a={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},n.A),timePickerLocale:Object.assign({},r.A)}},52536:(e,t,o)=>{o.d(t,{A:()=>Q});var n=o(65043),r=o(99905),a=o(98139),i=o.n(a),l=o(75822),s=o(32375),c=o(28678),d=o(18574),u=o(64980),p=o(45592),m=o(29854),g=o(12701),v=o(59478),b=o(6951),h=o(35296),f=o(78887),y=o(11918),C=o(2405),$=o(75620),w=o(26376),x=o(94414),O=o(24760),A=o(29795),S=o(85814),P=o(16208),j=o(82094),k=o(78855),E=o(78446);const R=e=>{const{componentCls:t,menuCls:o,colorError:n,colorTextLightSolid:r}=e,a=`${o}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${o} ${a}`]:{[`&${a}-danger:not(${a}-disabled)`]:{color:n,"&:hover":{color:r,backgroundColor:n}}}}}},z=e=>{const{componentCls:t,menuCls:o,zIndexPopup:n,dropdownArrowDistance:r,sizePopupArrow:a,antCls:i,iconCls:l,motionDurationMid:s,paddingBlock:c,fontSize:d,dropdownEdgeChildPadding:u,colorTextDisabled:p,fontSizeIcon:m,controlPaddingHorizontal:g,colorBgElevated:v}=e;return[{[t]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:n,display:"block","&::before":{position:"absolute",insetBlock:e.calc(a).div(2).sub(r).equal(),zIndex:-9999,opacity:1e-4,content:'""'},"&-menu-vertical":{maxHeight:"100vh",overflowY:"auto"},[`&-trigger${i}-btn`]:{[`& > ${l}-down, & > ${i}-btn-icon > ${l}-down`]:{fontSize:m}},[`${t}-wrap`]:{position:"relative",[`${i}-btn > ${l}-down`]:{fontSize:m},[`${l}-down::before`]:{transition:`transform ${s}`}},[`${t}-wrap-open`]:{[`${l}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomLeft,\n          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomLeft,\n          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottom,\n          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottom,\n          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomRight,\n          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:O.ox},[`&${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topLeft,\n          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topLeft,\n          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-top,\n          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-top,\n          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topRight,\n          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topRight`]:{animationName:O.nP},[`&${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomLeft,\n          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottom,\n          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:O.vR},[`&${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topLeft,\n          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-top,\n          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topRight`]:{animationName:O.YU}}},(0,P.Ay)(e,v,{arrowPlacement:{top:!0,bottom:!0}}),{[`${t} ${o}`]:{position:"relative",margin:0},[`${o}-submenu-popup`]:{position:"absolute",zIndex:n,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${t}, ${t}-menu-submenu`]:Object.assign(Object.assign({},(0,x.dF)(e)),{[o]:Object.assign(Object.assign({padding:u,listStyleType:"none",backgroundColor:v,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},(0,x.K8)(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${o}-item-group-title`]:{padding:`${(0,w.zA)(c)} ${(0,w.zA)(g)}`,color:e.colorTextDescription,transition:`all ${s}`},[`${o}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${o}-item-icon`]:{minWidth:d,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${o}-title-content`]:{flex:"auto","&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},"> a":{color:"inherit",transition:`all ${s}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}},[`${o}-item-extra`]:{paddingInlineStart:e.padding,marginInlineStart:"auto",fontSize:e.fontSizeSM,color:e.colorTextDescription}},[`${o}-item, ${o}-submenu-title`]:Object.assign(Object.assign({display:"flex",margin:0,padding:`${(0,w.zA)(c)} ${(0,w.zA)(g)}`,color:e.colorText,fontWeight:"normal",fontSize:d,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${s}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},(0,x.K8)(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:p,cursor:"not-allowed","&:hover":{color:p,backgroundColor:v,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${(0,w.zA)(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:m,fontStyle:"normal"}}}),[`${o}-item-group-list`]:{margin:`0 ${(0,w.zA)(e.marginXS)}`,padding:0,listStyle:"none"},[`${o}-submenu-title`]:{paddingInlineEnd:e.calc(g).add(e.fontSizeSM).equal()},[`${o}-submenu-vertical`]:{position:"relative"},[`${o}-submenu${o}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:p,backgroundColor:v,cursor:"not-allowed"}},[`${o}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})})},[(0,O._j)(e,"slide-up"),(0,O._j)(e,"slide-down"),(0,A.Mh)(e,"move-up"),(0,A.Mh)(e,"move-down"),(0,S.aB)(e,"zoom-big")]]},I=(0,k.OF)("Dropdown",(e=>{const{marginXXS:t,sizePopupArrow:o,paddingXXS:n,componentCls:r}=e,a=(0,E.oX)(e,{menuCls:`${r}-menu`,dropdownArrowDistance:e.calc(o).div(2).add(t).equal(),dropdownEdgeChildPadding:n});return[z(a),R(a)]}),(e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},(0,P.Ke)({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),(0,j.n)(e))),{resetStyle:!1}),M=e=>{var t;const{menu:o,arrow:a,prefixCls:m,children:w,trigger:x,disabled:O,dropdownRender:A,getPopupContainer:S,overlayClassName:P,rootClassName:j,overlayStyle:k,open:E,onOpenChange:R,visible:z,onVisibleChange:M,mouseEnterDelay:N=.15,mouseLeaveDelay:D=.1,autoAdjustOverflow:H=!0,placement:B="",overlay:L,transitionName:V}=e,{getPopupContainer:_,getPrefixCls:T,direction:X,dropdown:q}=n.useContext(h.QO);(0,v.rJ)("Dropdown");const Q=n.useMemo((()=>{const e=T();return void 0!==V?V:B.includes("top")?`${e}-slide-down`:`${e}-slide-up`}),[T,B,V]),F=n.useMemo((()=>B?B.includes("Center")?B.slice(0,B.indexOf("Center")):B:"rtl"===X?"bottomRight":"bottomLeft"),[B,X]);const W=T("dropdown",m),G=(0,f.A)(W),[K,Y,J]=I(W,G),[,U]=(0,$.Ay)(),Z=n.Children.only(w),ee=(0,g.Ob)(Z,{className:i()(`${W}-trigger`,{[`${W}-rtl`]:"rtl"===X},Z.props.className),disabled:null!==(t=Z.props.disabled)&&void 0!==t?t:O}),te=O?[]:x,oe=!!(null===te||void 0===te?void 0:te.includes("contextMenu")),[ne,re]=(0,c.A)(!1,{value:null!==E&&void 0!==E?E:z}),ae=(0,s.A)((e=>{null===R||void 0===R||R(e,{source:"trigger"}),null===M||void 0===M||M(e),re(e)})),ie=i()(P,j,Y,J,G,null===q||void 0===q?void 0:q.className,{[`${W}-rtl`]:"rtl"===X}),le=(0,p.A)({arrowPointAtCenter:"object"===typeof a&&a.pointAtCenter,autoAdjustOverflow:H,offset:U.marginXXS,arrowWidth:a?U.sizePopupArrow:0,borderRadius:U.borderRadius}),se=n.useCallback((()=>{(null===o||void 0===o?void 0:o.selectable)&&(null===o||void 0===o?void 0:o.multiple)||(null===R||void 0===R||R(!1,{source:"menu"}),re(!1))}),[null===o||void 0===o?void 0:o.selectable,null===o||void 0===o?void 0:o.multiple]),[ce,de]=(0,u.YK)("Dropdown",null===k||void 0===k?void 0:k.zIndex);let ue=n.createElement(l.A,Object.assign({alignPoint:oe},(0,d.A)(e,["rootClassName"]),{mouseEnterDelay:N,mouseLeaveDelay:D,visible:ne,builtinPlacements:le,arrow:!!a,overlayClassName:ie,prefixCls:W,getPopupContainer:S||_,transitionName:Q,trigger:te,overlay:()=>{let e;return e=(null===o||void 0===o?void 0:o.items)?n.createElement(y.A,Object.assign({},o)):"function"===typeof L?L():L,A&&(e=A(e)),e=n.Children.only("string"===typeof e?n.createElement("span",null,e):e),n.createElement(C.A,{prefixCls:`${W}-menu`,rootClassName:i()(J,G),expandIcon:n.createElement("span",{className:`${W}-menu-submenu-arrow`},n.createElement(r.A,{className:`${W}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:se,validator:e=>{let{mode:t}=e}},e)},placement:F,onVisibleChange:ae,overlayStyle:Object.assign(Object.assign(Object.assign({},null===q||void 0===q?void 0:q.style),k),{zIndex:ce})}),ee);return ce&&(ue=n.createElement(b.A.Provider,{value:de},ue)),K(ue)};const N=(0,m.A)(M,"dropdown",(e=>e),(function(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})}));M._InternalPanelDoNotUseOrYouWillBeFired=e=>n.createElement(N,Object.assign({},e),n.createElement("span",null));const D=M;var H=o(84235),B=o(27732),L=o(10898),V=o(45132),_=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const T=e=>{const{getPopupContainer:t,getPrefixCls:o,direction:r}=n.useContext(h.QO),{prefixCls:a,type:l="default",danger:s,disabled:c,loading:d,onClick:u,htmlType:p,children:m,className:g,menu:v,arrow:b,autoFocus:f,overlay:y,trigger:C,align:$,open:w,onOpenChange:x,placement:O,getPopupContainer:A,href:S,icon:P=n.createElement(H.A,null),title:j,buttonsRender:k=e=>e,mouseEnterDelay:E,mouseLeaveDelay:R,overlayClassName:z,overlayStyle:I,destroyPopupOnHide:M,dropdownRender:N}=e,T=_(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),X=o("dropdown",a),q=`${X}-button`,Q={menu:v,arrow:b,autoFocus:f,align:$,disabled:c,trigger:c?[]:C,onOpenChange:x,getPopupContainer:A||t,mouseEnterDelay:E,mouseLeaveDelay:R,overlayClassName:z,overlayStyle:I,destroyPopupOnHide:M,dropdownRender:N},{compactSize:F,compactItemClassnames:W}=(0,V.RQ)(X,r),G=i()(q,W,g);"overlay"in e&&(Q.overlay=y),"open"in e&&(Q.open=w),Q.placement="placement"in e?O:"rtl"===r?"bottomLeft":"bottomRight";const K=n.createElement(B.Ay,{type:l,danger:s,disabled:c,loading:d,onClick:u,htmlType:p,href:S,title:j},m),Y=n.createElement(B.Ay,{type:l,danger:s,icon:P}),[J,U]=k([K,Y]);return n.createElement(L.A.Compact,Object.assign({className:G,size:F,block:!0},T),J,n.createElement(D,Object.assign({},Q),U))};T.__ANT_BUTTON=!0;const X=T,q=D;q.Button=X;const Q=q},16436:(e,t,o)=>{o.d(t,{$W:()=>d,Op:()=>s,Pp:()=>p,XB:()=>u,cK:()=>i,hb:()=>c,jC:()=>l});var n=o(65043),r=o(10649),a=o(18574);const i=n.createContext({labelAlign:"right",vertical:!1,itemRef:()=>{}}),l=n.createContext(null),s=e=>{const t=(0,a.A)(e,["prefixCls"]);return n.createElement(r.Op,Object.assign({},t))},c=n.createContext({prefixCls:""}),d=n.createContext({});const u=e=>{let{children:t,status:o,override:r}=e;const a=(0,n.useContext)(d),i=(0,n.useMemo)((()=>{const e=Object.assign({},a);return r&&delete e.isFormItemInput,o&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e}),[o,r,a]);return n.createElement(d.Provider,{value:i},t)},p=(0,n.createContext)(void 0)},82805:(e,t,o)=>{o.d(t,{A:()=>i});var n=o(65043),r=o(16436),a=o(35296);const i=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;var i,l;const{variant:s,[e]:c}=(0,n.useContext)(a.QO),d=(0,n.useContext)(r.Pp),u=null===c||void 0===c?void 0:c.variant;let p;p="undefined"!==typeof t?t:!1===o?"borderless":null!==(l=null!==(i=null!==d&&void 0!==d?d:u)&&void 0!==i?i:s)&&void 0!==l?l:"outlined";return[p,a.lJ.includes(p)]}},53130:(e,t,o)=>{o.d(t,{A:()=>n});const n=(0,o(65043).createContext)(void 0)},99598:(e,t,o)=>{o.d(t,{A:()=>l});var n=o(65043),r=o(52664),a=o(44210),i=o(44320);const l=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=(0,n.useRef)({}),o=(0,a.A)(),l=(0,i.Ay)();return(0,r.A)((()=>{const n=l.subscribe((n=>{t.current=n,e&&o()}));return()=>l.unsubscribe(n)}),[]),t.current}}}]);
//# sourceMappingURL=main-7d0ccfb8.79793620.js.map
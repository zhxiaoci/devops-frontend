"use strict";(self.webpackChunkgithub_devops_frontend=self.webpackChunkgithub_devops_frontend||[]).push([[4095],{6651:(e,t,n)=>{n.d(t,{A:()=>N});var o=n(5043),r=n(8139),l=n.n(r),i=n(7659),a=n(8678),s=n(6278),c=n(4980),d=n(3290),u=n(5592),p=n(2701),m=n(9478),g=n(6951),f=n(5296),b=n(5620),v=n(6376),y=n(4414),h=n(5814),O=n(6208),x=n(2094),w=n(8835),S=n(8446),C=n(8855);const j=e=>{const{componentCls:t,tooltipMaxWidth:n,tooltipColor:o,tooltipBg:r,tooltipBorderRadius:l,zIndexPopup:i,controlHeight:a,boxShadowSecondary:s,paddingSM:c,paddingXS:d}=e;return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,y.dF)(e)),{position:"absolute",zIndex:i,display:"block",width:"max-content",maxWidth:n,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"&-hidden":{display:"none"},"--antd-arrow-background-color":r,[`${t}-inner`]:{minWidth:"1em",minHeight:a,padding:`${(0,v.zA)(e.calc(c).div(2).equal())} ${(0,v.zA)(d)}`,color:o,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:r,borderRadius:l,boxShadow:s,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${t}-inner`]:{borderRadius:e.min(l,O.Zs)}},[`${t}-content`]:{position:"relative"}}),(0,w.A)(e,((e,n)=>{let{darkColor:o}=n;return{[`&${t}-${e}`]:{[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{"--antd-arrow-background-color":o}}}}))),{"&-rtl":{direction:"rtl"}})},(0,O.Ay)(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]},E=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+70},(0,O.Ke)({contentRadius:e.borderRadius,limitVerticalRadius:!0})),(0,x.n)((0,S.oX)(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))),k=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(0,C.OF)("Tooltip",(e=>{const{borderRadius:t,colorTextLightSolid:n,colorBgSpotlight:o}=e,r=(0,S.oX)(e,{tooltipMaxWidth:250,tooltipColor:n,tooltipBorderRadius:t,tooltipBg:o});return[j(r),(0,h.aB)(e,"zoom-big-fast")]}),E,{resetStyle:!1,injectStyle:t})(e)};var A=n(1128);function $(e,t){const n=(0,A.nP)(t),o=l()({[`${e}-${t}`]:t&&n}),r={},i={};return t&&!n&&(r.background=t,i["--antd-arrow-background-color"]=t),{className:o,overlayStyle:r,arrowStyle:i}}const P=e=>{const{prefixCls:t,className:n,placement:r="top",title:a,color:s,overlayInnerStyle:c}=e,{getPrefixCls:d}=o.useContext(f.QO),u=d("tooltip",t),[p,m,g]=k(u),b=$(u,s),v=b.arrowStyle,y=Object.assign(Object.assign({},c),b.overlayStyle),h=l()(m,g,u,`${u}-pure`,`${u}-placement-${r}`,n,b.className);return p(o.createElement("div",{className:h,style:v},o.createElement("div",{className:`${u}-arrow`}),o.createElement(i.z,Object.assign({},e,{className:m,prefixCls:u,overlayInnerStyle:y}),a)))};var R=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const I=o.forwardRef(((e,t)=>{var n,r;const{prefixCls:v,openClassName:y,getTooltipContainer:h,overlayClassName:O,color:x,overlayInnerStyle:w,children:S,afterOpenChange:C,afterVisibleChange:j,destroyTooltipOnHide:E,arrow:A=!0,title:P,overlay:I,builtinPlacements:N,arrowPointAtCenter:T=!1,autoAdjustOverflow:z=!0}=e,B=!!A,[,M]=(0,b.Ay)(),{getPopupContainer:W,getPrefixCls:D,direction:H}=o.useContext(f.QO),L=(0,m.rJ)("Tooltip"),F=o.useRef(null),K=()=>{var e;null===(e=F.current)||void 0===e||e.forceAlign()};o.useImperativeHandle(t,(()=>{var e;return{forceAlign:K,forcePopupAlign:()=>{L.deprecated(!1,"forcePopupAlign","forceAlign"),K()},nativeElement:null===(e=F.current)||void 0===e?void 0:e.nativeElement}}));const[V,X]=(0,a.A)(!1,{value:null!==(n=e.open)&&void 0!==n?n:e.visible,defaultValue:null!==(r=e.defaultOpen)&&void 0!==r?r:e.defaultVisible}),q=!P&&!I&&0!==P,_=o.useMemo((()=>{var e,t;let n=T;return"object"===typeof A&&(n=null!==(t=null!==(e=A.pointAtCenter)&&void 0!==e?e:A.arrowPointAtCenter)&&void 0!==t?t:T),N||(0,u.A)({arrowPointAtCenter:n,autoAdjustOverflow:z,arrowWidth:B?M.sizePopupArrow:0,borderRadius:M.borderRadius,offset:M.marginXXS,visibleFirst:!0})}),[T,A,N,M]),Q=o.useMemo((()=>0===P?P:I||P||""),[I,P]),Y=o.createElement(s.A,{space:!0},"function"===typeof Q?Q():Q),{getPopupContainer:U,placement:J="top",mouseEnterDelay:Z=.1,mouseLeaveDelay:G=.1,overlayStyle:ee,rootClassName:te}=e,ne=R(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),oe=D("tooltip",v),re=D(),le=e["data-popover-inject"];let ie=V;"open"in e||"visible"in e||!q||(ie=!1);const ae=o.isValidElement(S)&&!(0,p.zv)(S)?S:o.createElement("span",null,S),se=ae.props,ce=se.className&&"string"!==typeof se.className?se.className:l()(se.className,y||`${oe}-open`),[de,ue,pe]=k(oe,!le),me=$(oe,x),ge=me.arrowStyle,fe=Object.assign(Object.assign({},w),me.overlayStyle),be=l()(O,{[`${oe}-rtl`]:"rtl"===H},me.className,te,ue,pe),[ve,ye]=(0,c.YK)("Tooltip",ne.zIndex),he=o.createElement(i.A,Object.assign({},ne,{zIndex:ve,showArrow:B,placement:J,mouseEnterDelay:Z,mouseLeaveDelay:G,prefixCls:oe,overlayClassName:be,overlayStyle:Object.assign(Object.assign({},ge),ee),getTooltipContainer:U||h||W,ref:F,builtinPlacements:_,overlay:Y,visible:ie,onVisibleChange:t=>{var n,o;X(!q&&t),q||(null===(n=e.onOpenChange)||void 0===n||n.call(e,t),null===(o=e.onVisibleChange)||void 0===o||o.call(e,t))},afterVisibleChange:null!==C&&void 0!==C?C:j,overlayInnerStyle:fe,arrowContent:o.createElement("span",{className:`${oe}-arrow-content`}),motion:{motionName:(0,d.b)(re,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!E}),ie?(0,p.Ob)(ae,{className:ce}):ae);return de(o.createElement(g.A.Provider,{value:ye},he))}));I._InternalPanelDoNotUseOrYouWillBeFired=P;const N=I},6748:(e,t,n)=>{n.d(t,{A:()=>he});var o=n(5043),r=n(7407),l=n(8139),i=n.n(l),a=n(8802),s=n(2149),c=n(2664),d=n(8678),u=n(8574),p=n(3758),m=n(4734),g=n(5296),f=n(370),b=n(6651),v=n(1656),y=n(5001),h=n(2701),O=n(4005),x=n(4414),w=n(8855),S=n(8500),C=n(6376);const j=e=>{const t={};return[1,2,3,4,5].forEach((n=>{t[`\n      h${n}&,\n      div&-h${n},\n      div&-h${n} > textarea,\n      h${n}\n    `]=((e,t,n,o)=>{const{titleMarginBottom:r,fontWeightStrong:l}=o;return{marginBottom:r,color:n,fontWeight:l,fontSize:e,lineHeight:t}})(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)})),t},E=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},(0,x.Y1)(e)),{userSelect:"text",[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},k=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:S.bK[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),A=e=>{const{componentCls:t,paddingSM:n}=e,o=n;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(o).mul(-1).equal(),marginBottom:`calc(1em - ${(0,C.zA)(o)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},$=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),P=e=>{const{componentCls:t,titleMarginTop:n}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},j(e)),{[`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]:{marginTop:n},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:n}}}),k(e)),E(e)),{[`\n        ${t}-expand,\n        ${t}-collapse,\n        ${t}-edit,\n        ${t}-copy\n      `]:Object.assign(Object.assign({},(0,x.Y1)(e)),{marginInlineStart:e.marginXXS})}),A(e)),$(e)),{"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),{"&-rtl":{direction:"rtl"}})}},R=(0,w.OF)("Typography",(e=>[P(e)]),(()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}))),I=e=>{const{prefixCls:t,"aria-label":n,className:r,style:l,direction:a,maxLength:s,autoSize:c=!0,value:d,onSave:u,onCancel:p,onEnd:m,component:g,enterIcon:f=o.createElement(v.A,null)}=e,b=o.useRef(null),x=o.useRef(!1),w=o.useRef(),[S,C]=o.useState(d);o.useEffect((()=>{C(d)}),[d]),o.useEffect((()=>{var e;if(null===(e=b.current)||void 0===e?void 0:e.resizableTextArea){const{textArea:e}=b.current.resizableTextArea;e.focus();const{length:t}=e.value;e.setSelectionRange(t,t)}}),[]);const j=()=>{u(S.trim())},[E,k,A]=R(t),$=i()(t,`${t}-edit-content`,{[`${t}-rtl`]:"rtl"===a,[`${t}-${g}`]:!!g},r,k,A);return E(o.createElement("div",{className:$,style:l},o.createElement(O.A,{ref:b,maxLength:s,value:S,onChange:e=>{let{target:t}=e;C(t.value.replace(/[\n\r]/g,""))},onKeyDown:e=>{let{keyCode:t}=e;x.current||(w.current=t)},onKeyUp:e=>{let{keyCode:t,ctrlKey:n,altKey:o,metaKey:r,shiftKey:l}=e;w.current!==t||x.current||n||o||r||l||(t===y.A.ENTER?(j(),null===m||void 0===m||m()):t===y.A.ESC&&p())},onCompositionStart:()=>{x.current=!0},onCompositionEnd:()=>{x.current=!1},onBlur:()=>{j()},"aria-label":n,rows:1,autoSize:c}),null!==f?(0,h.Ob)(f,{className:`${t}-edit-content-confirm`}):null))};var N=n(5270),T=n.n(N),z=n(2375),B=n(3685),M=function(e,t,n,o){return new(n||(n=Promise))((function(r,l){function i(e){try{s(o.next(e))}catch(t){l(t)}}function a(e){try{s(o.throw(e))}catch(t){l(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((o=o.apply(e,t||[])).next())}))};const W=e=>{let{copyConfig:t,children:n}=e;const[r,l]=o.useState(!1),[i,a]=o.useState(!1),s=o.useRef(null),c=()=>{s.current&&clearTimeout(s.current)},d={};t.format&&(d.format=t.format),o.useEffect((()=>c),[]);return{copied:r,copyLoading:i,onClick:(0,z.A)((e=>M(void 0,void 0,void 0,(function*(){var o;null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),a(!0);try{const r="function"===typeof t.text?yield t.text():t.text;T()(r||(0,B.A)(n,!0).join("")||"",d),a(!1),l(!0),c(),s.current=setTimeout((()=>{l(!1)}),3e3),null===(o=t.onCopy)||void 0===o||o.call(t,e)}catch(r){throw a(!1),r}}))))}};function D(e,t){return o.useMemo((()=>{const n=!!e;return[n,Object.assign(Object.assign({},t),n&&"object"===typeof e?e:null)]}),[e])}const H=e=>{const t=(0,o.useRef)();return(0,o.useEffect)((()=>{t.current=e})),t.current},L=(e,t,n)=>(0,o.useMemo)((()=>!0===e?{title:null!==t&&void 0!==t?t:n}:(0,o.isValidElement)(e)?{title:e}:"object"===typeof e?Object.assign({title:null!==t&&void 0!==t?t:n},e):{title:e}),[e,t,n]);var F=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const K=o.forwardRef(((e,t)=>{const{prefixCls:n,component:r="article",className:l,rootClassName:a,setContentRef:s,children:c,direction:d,style:u}=e,m=F(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:f,direction:b,typography:v}=o.useContext(g.QO),y=null!==d&&void 0!==d?d:b,h=s?(0,p.K4)(t,s):t,O=f("typography",n);const[x,w,S]=R(O),C=i()(O,null===v||void 0===v?void 0:v.className,{[`${O}-rtl`]:"rtl"===y},l,a,w,S),j=Object.assign(Object.assign({},null===v||void 0===v?void 0:v.style),u);return x(o.createElement(r,Object.assign({className:C,style:j,ref:h},m),c))}));const V=K;var X=n(3390),q=n(9025),_=n(164);function Q(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}function Y(e,t,n){return!0===e||void 0===e?t:e||n&&t}const U=e=>["string","number"].includes(typeof e),J=e=>{let{prefixCls:t,copied:n,locale:r,iconOnly:l,tooltips:a,icon:s,tabIndex:c,onCopy:d,loading:u}=e;const p=Q(a),m=Q(s),{copied:g,copy:f}=null!==r&&void 0!==r?r:{},v=n?g:f,y=Y(p[n?1:0],v),h="string"===typeof y?y:v;return o.createElement(b.A,{title:y},o.createElement("button",{type:"button",className:i()(`${t}-copy`,{[`${t}-copy-success`]:n,[`${t}-copy-icon-only`]:l}),onClick:d,"aria-label":h,tabIndex:c},n?Y(m[1],o.createElement(X.A,null),!0):Y(m[0],u?o.createElement(_.A,null):o.createElement(q.A,null),!0)))};var Z=n(436);const G=o.forwardRef(((e,t)=>{let{style:n,children:r}=e;const l=o.useRef(null);return o.useImperativeHandle(t,(()=>({isExceed:()=>{const e=l.current;return e.scrollHeight>e.clientHeight},getHeight:()=>l.current.clientHeight}))),o.createElement("span",{"aria-hidden":!0,ref:l,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},n)},r)}));function ee(e,t){let n=0;const o=[];for(let r=0;r<e.length;r+=1){if(n===t)return o;const l=e[r],i=n+(U(l)?String(l).length:1);if(i>t){const e=t-n;return o.push(String(l).slice(0,e)),o}o.push(l),n=i}return e}const te=0,ne=4,oe={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function re(e){const{enableMeasure:t,width:n,text:r,children:l,rows:i,expanded:a,miscDeps:d,onEllipsis:u}=e,p=o.useMemo((()=>(0,s.A)(r)),[r]),m=o.useMemo((()=>(e=>e.reduce(((e,t)=>e+(U(t)?String(t).length:1)),0))(p)),[r]),g=o.useMemo((()=>l(p,!1)),[r]),[f,b]=o.useState(null),v=o.useRef(null),y=o.useRef(null),h=o.useRef(null),O=o.useRef(null),x=o.useRef(null),[w,S]=o.useState(!1),[C,j]=o.useState(te),[E,k]=o.useState(0),[A,$]=o.useState(null);(0,c.A)((()=>{j(t&&n&&m?1:te)}),[n,r,i,t,p]),(0,c.A)((()=>{var e,t,n,o;if(1===C){j(2);const e=y.current&&getComputedStyle(y.current).whiteSpace;$(e)}else if(2===C){const r=!!(null===(e=h.current)||void 0===e?void 0:e.isExceed());j(r?3:ne),b(r?[0,m]:null),S(r);const l=(null===(t=h.current)||void 0===t?void 0:t.getHeight())||0,a=1===i?0:(null===(n=O.current)||void 0===n?void 0:n.getHeight())||0,s=(null===(o=x.current)||void 0===o?void 0:o.getHeight())||0,c=Math.max(l,a+s);k(c+1),u(r)}}),[C]);const P=f?Math.ceil((f[0]+f[1])/2):0;(0,c.A)((()=>{var e;const[t,n]=f||[0,0];if(t!==n){const o=((null===(e=v.current)||void 0===e?void 0:e.getHeight())||0)>E;let r=P;n-t===1&&(r=o?t:n),b(o?[t,r]:[r,n])}}),[f,P]);const R=o.useMemo((()=>{if(!t)return l(p,!1);if(3!==C||!f||f[0]!==f[1]){const e=l(p,!1);return[ne,te].includes(C)?e:o.createElement("span",{style:Object.assign(Object.assign({},oe),{WebkitLineClamp:i})},e)}return l(a?p:ee(p,f[0]),w)}),[a,C,f,p].concat((0,Z.A)(d))),I={width:n,margin:0,padding:0,whiteSpace:"nowrap"===A?"normal":"inherit"};return o.createElement(o.Fragment,null,R,2===C&&o.createElement(o.Fragment,null,o.createElement(G,{style:Object.assign(Object.assign(Object.assign({},I),oe),{WebkitLineClamp:i}),ref:h},g),o.createElement(G,{style:Object.assign(Object.assign(Object.assign({},I),oe),{WebkitLineClamp:i-1}),ref:O},g),o.createElement(G,{style:Object.assign(Object.assign(Object.assign({},I),oe),{WebkitLineClamp:1}),ref:x},l([],!0))),3===C&&f&&f[0]!==f[1]&&o.createElement(G,{style:Object.assign(Object.assign({},I),{top:400}),ref:v},l(ee(p,P),!0)),1===C&&o.createElement("span",{style:{whiteSpace:"inherit"},ref:y}))}const le=e=>{let{enableEllipsis:t,isEllipsis:n,children:r,tooltipProps:l}=e;return(null===l||void 0===l?void 0:l.title)&&t?o.createElement(b.A,Object.assign({open:!!n&&void 0},l),r):r};var ie=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const ae=o.forwardRef(((e,t)=>{var n;const{prefixCls:l,className:v,style:y,type:h,disabled:O,children:x,ellipsis:w,editable:S,copyable:C,component:j,title:E}=e,k=ie(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:A,direction:$}=o.useContext(g.QO),[P]=(0,f.A)("Text"),R=o.useRef(null),N=o.useRef(null),T=A("typography",l),z=(0,u.A)(k,["mark","code","delete","underline","strong","keyboard","italic"]),[B,M]=D(S),[F,K]=(0,d.A)(!1,{value:M.editing}),{triggerType:X=["icon"]}=M,q=e=>{var t;e&&(null===(t=M.onStart)||void 0===t||t.call(M)),K(e)},_=H(F);(0,c.A)((()=>{var e;!F&&_&&(null===(e=N.current)||void 0===e||e.focus())}),[F]);const Q=e=>{null===e||void 0===e||e.preventDefault(),q(!0)},Y=e=>{var t;null===(t=M.onChange)||void 0===t||t.call(M,e),q(!1)},Z=()=>{var e;null===(e=M.onCancel)||void 0===e||e.call(M),q(!1)},[G,ee]=D(C),{copied:te,copyLoading:ne,onClick:oe}=W({copyConfig:ee,children:x}),[ae,se]=o.useState(!1),[ce,de]=o.useState(!1),[ue,pe]=o.useState(!1),[me,ge]=o.useState(!1),[fe,be]=o.useState(!0),[ve,ye]=D(w,{expandable:!1,symbol:e=>e?null===P||void 0===P?void 0:P.collapse:null===P||void 0===P?void 0:P.expand}),[he,Oe]=(0,d.A)(ye.defaultExpanded||!1,{value:ye.expanded}),xe=ve&&(!he||"collapsible"===ye.expandable),{rows:we=1}=ye,Se=o.useMemo((()=>xe&&(void 0!==ye.suffix||ye.onEllipsis||ye.expandable||B||G)),[xe,ye,B,G]);(0,c.A)((()=>{ve&&!Se&&(se((0,m.F)("webkitLineClamp")),de((0,m.F)("textOverflow")))}),[Se,ve]);const[Ce,je]=o.useState(xe),Ee=o.useMemo((()=>!Se&&(1===we?ce:ae)),[Se,ce,ae]);(0,c.A)((()=>{je(Ee&&xe)}),[Ee,xe]);const ke=xe&&(Ce?me:ue),Ae=xe&&1===we&&Ce,$e=xe&&we>1&&Ce,[Pe,Re]=o.useState(0),Ie=e=>{var t;pe(e),ue!==e&&(null===(t=ye.onEllipsis)||void 0===t||t.call(ye,e))};o.useEffect((()=>{const e=R.current;if(ve&&Ce&&e){const t=function(e){const t=document.createElement("em");e.appendChild(t);const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return e.removeChild(t),n.left>o.left||o.right>n.right||n.top>o.top||o.bottom>n.bottom}(e);me!==t&&ge(t)}}),[ve,Ce,x,$e,fe,Pe]),o.useEffect((()=>{const e=R.current;if("undefined"===typeof IntersectionObserver||!e||!Ce||!xe)return;const t=new IntersectionObserver((()=>{be(!!e.offsetParent)}));return t.observe(e),()=>{t.disconnect()}}),[Ce,xe]);const Ne=L(ye.tooltip,M.text,x),Te=o.useMemo((()=>{if(ve&&!Ce)return[M.text,x,E,Ne.title].find(U)}),[ve,Ce,E,Ne.title,ke]);if(F)return o.createElement(I,{value:null!==(n=M.text)&&void 0!==n?n:"string"===typeof x?x:"",onSave:Y,onCancel:Z,onEnd:M.onEnd,prefixCls:T,className:v,style:y,direction:$,component:j,maxLength:M.maxLength,autoSize:M.autoSize,enterIcon:M.enterIcon});const ze=()=>{const{expandable:e,symbol:t}=ye;return e?o.createElement("button",{type:"button",key:"expand",className:`${T}-${he?"collapse":"expand"}`,onClick:e=>((e,t)=>{var n;Oe(t.expanded),null===(n=ye.onExpand)||void 0===n||n.call(ye,e,t)})(e,{expanded:!he}),"aria-label":he?P.collapse:null===P||void 0===P?void 0:P.expand},"function"===typeof t?t(he):t):null},Be=()=>{if(!B)return;const{icon:e,tooltip:t,tabIndex:n}=M,l=(0,s.A)(t)[0]||(null===P||void 0===P?void 0:P.edit),i="string"===typeof l?l:"";return X.includes("icon")?o.createElement(b.A,{key:"edit",title:!1===t?"":l},o.createElement("button",{type:"button",ref:N,className:`${T}-edit`,onClick:Q,"aria-label":i,tabIndex:n},e||o.createElement(r.A,{role:"button"}))):null},Me=e=>[e&&ze(),Be(),G?o.createElement(J,Object.assign({key:"copy"},ee,{prefixCls:T,copied:te,locale:P,onCopy:oe,loading:ne,iconOnly:null===x||void 0===x})):null];return o.createElement(a.A,{onResize:e=>{let{offsetWidth:t}=e;Re(t)},disabled:!xe},(n=>o.createElement(le,{tooltipProps:Ne,enableEllipsis:xe,isEllipsis:ke},o.createElement(V,Object.assign({className:i()({[`${T}-${h}`]:h,[`${T}-disabled`]:O,[`${T}-ellipsis`]:ve,[`${T}-ellipsis-single-line`]:Ae,[`${T}-ellipsis-multiple-line`]:$e},v),prefixCls:l,style:Object.assign(Object.assign({},y),{WebkitLineClamp:$e?we:void 0}),component:j,ref:(0,p.K4)(n,R,t),direction:$,onClick:X.includes("text")?Q:void 0,"aria-label":null===Te||void 0===Te?void 0:Te.toString(),title:E},z),o.createElement(re,{enableMeasure:xe&&!Ce,text:x,rows:we,width:Pe,onEllipsis:Ie,expanded:he,miscDeps:[te,he,ne,B,G,P]},((t,n)=>function(e,t){let{mark:n,code:r,underline:l,delete:i,strong:a,keyboard:s,italic:c}=e,d=t;function u(e,t){t&&(d=o.createElement(e,{},d))}return u("strong",a),u("u",l),u("del",i),u("code",r),u("mark",n),u("kbd",s),u("i",c),d}(e,o.createElement(o.Fragment,null,t.length>0&&n&&!he&&Te?o.createElement("span",{key:"show-content","aria-hidden":!0},t):t,(e=>[e&&!he&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),ye.suffix,Me(e)])(n)))))))))})),se=ae;var ce=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const de=o.forwardRef(((e,t)=>{var{ellipsis:n,rel:r}=e,l=ce(e,["ellipsis","rel"]);const i=Object.assign(Object.assign({},l),{rel:void 0===r&&"_blank"===l.target?"noopener noreferrer":r});return delete i.navigate,o.createElement(se,Object.assign({},i,{ref:t,ellipsis:!!n,component:"a"}))})),ue=o.forwardRef(((e,t)=>o.createElement(se,Object.assign({ref:t},e,{component:"div"}))));var pe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const me=(e,t)=>{var{ellipsis:n}=e,r=pe(e,["ellipsis"]);const l=o.useMemo((()=>n&&"object"===typeof n?(0,u.A)(n,["expandable","rows"]):n),[n]);return o.createElement(se,Object.assign({ref:t},r,{ellipsis:l,component:"span"}))},ge=o.forwardRef(me);var fe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const be=[1,2,3,4,5],ve=o.forwardRef(((e,t)=>{const{level:n=1}=e,r=fe(e,["level"]);const l=be.includes(n)?`h${n}`:"h1";return o.createElement(se,Object.assign({ref:t},r,{component:l}))})),ye=V;ye.Text=ge,ye.Link=de,ye.Title=ve,ye.Paragraph=ue;const he=ye},6880:(e,t,n)=>{n.d(t,{A:()=>o});const o="5.22.2"}}]);
//# sourceMappingURL=main-30010190.js.map
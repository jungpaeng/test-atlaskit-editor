(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1060:function(e,n,t){"use strict";t.d(n,"a",function(){return E});var o=t(15),r=t.n(o),i=t(16),a=t.n(i),c=t(17),l=t.n(c),s=t(14),u=t.n(s),d=t(9),p=t.n(d),f=t(18),h=t.n(f),m=t(5),v=t.n(m),g=t(50),y=t(0),b=t.n(y),x=Object(y.createContext)({isOpen:!0,onExited:void 0}),k=x.Consumer,w=x.Provider,O=function(e){return b.a.Children.count(e)>0&&b.a.Children.map(e,function(e){return!!e}).filter(Boolean).length>0},C=function(e){function n(){var e,t;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=l()(this,(e=u()(n)).call.apply(e,[this].concat(i))),v()(p()(t),"state",{currentChildren:void 0}),v()(p()(t),"onExited",function(){t.setState({currentChildren:t.props.children})}),t}return h()(n,e),a()(n,[{key:"render",value:function(){return Object(g.c)(w,{value:{onExited:this.onExited,isOpen:O(this.props.children)}},this.state.currentChildren)}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=n.currentChildren;return{currentChildren:O(t)&&!O(e.children)?t:e.children}}}]),n}(b.a.Component),E=k;n.b=C},1061:function(e,n){e.exports=function(e,n,t,o){var r=t?t.call(o,e,n):void 0;if(void 0!==r)return!!r;if(e===n)return!0;if("object"!==typeof e||!e||"object"!==typeof n||!n)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),l=0;l<i.length;l++){var s=i[l];if(!c(s))return!1;var u=e[s],d=n[s];if(!1===(r=t?t.call(o,u,d,s):void 0)||void 0===r&&u!==d)return!1}return!0}},1062:function(e){e.exports={a:"@atlaskit/blanket",b:"9.0.0"}},1063:function(e){e.exports={a:"@atlaskit/modal-dialog",b:"8.0.9"}},1405:function(e,n,t){"use strict";var o={};t.r(o),t.d(o,"FOCUS_GROUP",function(){return Je}),t.d(o,"FOCUS_DISABLED",function(){return Ze}),t.d(o,"FOCUS_ALLOW",function(){return $e}),t.d(o,"FOCUS_AUTO",function(){return Qe});var r,i=t(28),a=t.n(i),c=t(15),l=t.n(c),s=t(16),u=t.n(s),d=t(17),p=t.n(d),f=t(14),h=t.n(f),m=t(9),v=t.n(m),g=t(18),y=t.n(g),b=t(5),x=t.n(b),k=t(50),w=t(0),O=t.n(w),C=t(30),E=t(848),j=t(1060),S=t(81),A=t.n(S),F=[],D=function(e){function n(){var e,t;l()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=p()(this,(e=h()(n)).call.apply(e,[this].concat(r))),x()(v()(t),"state",{stackIndex:0}),x()(v()(t),"update",function(){var e=F.indexOf(t.update);t.state.stackIndex!==e&&t.setState({stackIndex:e})}),t}return y()(n,e),u()(n,[{key:"componentDidMount",value:function(){F.forEach(function(e){return e()})}},{key:"componentWillUnmount",value:function(){var e=this;-1!==F.indexOf(this.update)&&(F=F.filter(function(n){return n!==e.update})).forEach(function(e){return e()})}},{key:"componentDidUpdate",value:function(e){var n=this;e.isOpen&&!this.props.isOpen&&(F=F.filter(function(e){return e!==n.update})).forEach(function(e){return e()})}},{key:"render",value:function(){return-1===F.indexOf(this.update)&&(F=[this.update].concat(A()(F))),this.props.children(this.state.stackIndex)}}]),n}(O.a.Component),P=t(64),_=t.n(P),I=t(153),N=t(846),M=t(847),T=t(780),L=t(1),U=t(1062),H=t(3),B=t(46),R=t(2),K=Object(B.a)({light:R.colors.N100A,dark:R.colors.DN90A}),z=H.default.div(r||(r=L.__makeTemplateObject(["\n  background: ",";\n  bottom: 0;\n  left: 0;\n  opacity: ",";\n  pointer-events: ",";\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 220ms;\n  z-index: ",";\n"],["\n  background: ",";\n  bottom: 0;\n  left: 0;\n  opacity: ",";\n  pointer-events: ",";\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 220ms;\n  z-index: ",";\n"])),K,function(e){return e.isTinted?1:0},function(e){return e.canClickThrough?"none":"initial"},C.m.blanket),V=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return L.__extends(n,e),n.prototype.render=function(){var e=this.props,n=e.canClickThrough,t=e.isTinted,o=e.onBlanketClicked,r={canClickThrough:n,isTinted:t,onClick:n?null:o};return w.createElement(z,L.__assign({},r))},n.defaultProps={canClickThrough:!1,isTinted:!1,onBlanketClicked:function(){}},n}(w.Component),W=Object(N.a)("atlaskit"),q=Object(M.a)({componentName:"blanket",packageName:U.a,packageVersion:U.b})(Object(T.a)({onBlanketClicked:W({action:"clicked",actionSubject:"blanket",attributes:{componentName:"blanket",packageName:U.a,packageVersion:U.b}})})(V)),G=t(1063),Y={values:["small","medium","large","x-large"],widths:{small:400,medium:600,large:800,"x-large":968},defaultValue:"medium"};var X=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,J=function(e){var n={};return function(t){return void 0===n[t]&&(n[t]=e(t)),n[t]}}(function(e){return X.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),Z=t(383),$=t.n(Z),Q=t(193),ee=t(163),ne=J,te=function(e){return"theme"!==e&&"innerRef"!==e},oe=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?ne:te},re=function e(n,t){var o,r,i;void 0!==t&&(o=t.label,i=t.target,r=n.__emotion_forwardProp&&t.shouldForwardProp?function(e){return n.__emotion_forwardProp(e)&&t.shouldForwardProp(e)}:t.shouldForwardProp);var a=n.__emotion_real===n,c=a&&n.__emotion_base||n;"function"!==typeof r&&a&&(r=n.__emotion_forwardProp);var l=r||oe(c),s=!l("as");return function(){var u=arguments,d=a&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==o&&d.push("label:"+o+";"),null==u[0]||void 0===u[0].raw)d.push.apply(d,u);else{d.push(u[0][0]);for(var p=u.length,f=1;f<p;f++)d.push(u[f],u[0][f])}var h=Object(k.d)(function(e,n,t){return Object(w.createElement)(k.a.Consumer,null,function(o){var a=s&&e.as||c,u="",p=[],f=e;if(null==e.theme){for(var h in f={},e)f[h]=e[h];f.theme=o}"string"===typeof e.className&&(u+=Object(Q.a)(n.registered,p,e.className));var m=Object(ee.a)(d.concat(p),n.registered,f);Object(Q.b)(n,m,"string"===typeof a),u+=n.key+"-"+m.name,void 0!==i&&(u+=" "+i);var v=s&&void 0===r?oe(a):l,g={};for(var y in e)s&&"as"===y||v(y)&&(g[y]=e[y]);return g.className=u,g.ref=t||e.innerRef,Object(w.createElement)(a,g)})});return h.displayName=void 0!==o?o:"Styled("+("string"===typeof c?c:c.displayName||c.name||"Component")+")",h.defaultProps=n.defaultProps,h.__emotion_real=h,h.__emotion_base=c,h.__emotion_styles=d,h.__emotion_forwardProp=r,Object.defineProperty(h,"toString",{value:function(){return"."+i}}),h.withComponent=function(n,o){return e(n,void 0!==o?$()({},t||{},o):t).apply(void 0,d)},h}},ie="\n  max-height: 100%;\n  @media only screen and (-ms-high-contrast:active), (-ms-high-contrast:none) {\n    max-height: calc(100% - ".concat(1,"px);\n  }\n"),ae="calc(100% - ".concat(120,"px)"),ce="calc(100% - ".concat(119,"px)"),le=function(e){var n=e.widthName,t=e.widthValue;return"number"===typeof t?"".concat(t,"px"):n?"".concat(Y.widths[n],"px"):t||"auto"},se=re("div",{target:"ez8cmp60"})("height:100vh;left:0;overflow-y:auto;position:absolute;top:",function(e){return e.scrollDistance},"px;width:100%;z-index:",C.m.modal,";-webkit-overflow-scrolling:touch;"),ue=re("div",{target:"ez8cmp61"})("display:flex;flex-direction:column;height:",ce,";left:0;margin-left:auto;margin-right:auto;max-width:",ae,";position:absolute;right:0;top:",60,"px;width:",le,";z-index:",C.m.modal,";pointer-events:none;@media (min-width:320px) and (max-width:480px){height:100%;left:0;position:fixed;top:0;max-width:100%;width:100%;}"),de=re("div",{target:"ez8cmp62"})("margin:",60,"px auto;position:relative;width:",le,";z-index:",C.m.modal,";pointer-events:none;@media (min-width:320px) and (max-width:480px){height:100%;left:0;position:fixed;top:0;margin:0;max-width:100%;width:100%;}"),pe=re("div",{target:"ez8cmp63"})(function(e){return e.isChromeless?null:"\n          background-color: ".concat((n=e,n.isChromeless?"transparent":Object(B.a)({light:R.colors.N0,dark:R.colors.DN50})()),";\n          border-radius: ").concat(Object(C.f)(),"px;\n          box-shadow: ").concat(e.isChromeless?"none":"\n      0 0 0 1px ".concat(R.colors.N30A,", 0 2px 1px ").concat(R.colors.N30A,",\n      0 0 20px -6px ").concat(R.colors.N60A,"\n    "),";\n        ");var n}," color:",R.colors.text,";display:flex;flex-direction:column;height:",function(e){var n=e.heightValue;return"number"===typeof n?"".concat(n,"px"):n||"auto"},";",ie,";outline:0;pointer-events:auto;@media (min-width:320px) and (max-width:480px){height:100%;max-height:100%;border-radius:0;}");ue.displayName="PositionerAbsolute",pe.displayName="Dialog",se.displayName="FillScreen",de.displayName="PositionerRelative";var fe=t(34),he=t.n(fe),me=t(232),ve=function(e){var n=e.in,t=e.stackIndex,o=void 0===t?0:t,r=e.onExited,i=e.onEntered,a=e.children;return Object(k.c)(me.Transition,{in:n,timeout:{enter:0,exit:500},onExited:r,onEntered:i,appear:!0},function(e){var t=n&&"exited"===e?"entering":e,r={transition:"opacity ".concat(250,"ms"),opacity:1},i={transition:"transform ".concat(500,"ms ").concat("cubic-bezier(0.23, 1, 0.32, 1)"),transform:"translate3d(0, ".concat(32,"px, 0)")},c={entering:{},entered:{transform:o>0?"translate3d(0, ".concat(8*o,"px, 0)"):null},exiting:{transform:"translate3d(0, -".concat(32,"px, 0)")}};return a({fade:he()({},r,{entering:{opacity:0},exiting:{opacity:0}}[t]),slide:he()({},i,c[t])})})},ge=t(65),ye=t(439),be=t.n(ye),xe=t(784),ke=Object(B.a)({light:R.colors.N30,dark:R.colors.DN30}),we=2,Oe=Object(k.b)("display:flex;flex-direction:column;flex:1 1 auto;",ie,";"),Ce=re("header",{target:"eilovpv0"})("align-items:center;display:flex;flex:0 0 auto;justify-content:space-between;transition:box-shadow 200ms;z-index:1;padding:",20,"px ",20,"px ",16-we,"px;box-shadow:",function(e){return e.showKeyline?"0 ".concat(we,"px 0 0 ").concat(ke(e)):"none"},";"),Ee=re("h4",{target:"eilovpv1"})({name:"1n6zx0p",styles:"align-items:center;display:flex;font-size:20px;font-style:inherit;font-weight:500;letter-spacing:-0.008em;line-height:1;margin:0;min-width:0;"}),je=re("span",{target:"eilovpv2"})("flex:1 1 auto;min-width:0;word-wrap:break-word;width:100%;",function(e){return!e.isHeadingMultiline&&"\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "},";"),Se={danger:R.colors.R400,warning:R.colors.Y400},Ae=function(e){return Object(k.b)("color:",Se[e],";margin-right:",Object(C.l)(),"px;flex:0 0 auto;")},Fe=function(e){return Object(k.b)("flex:1 1 auto;",e?"\n        overflow-y: auto;\n        overflow-x: hidden;\n        padding: ".concat(we,"px ").concat(20,"px;\n      "):"\n        padding: 0 ".concat(20,"px;\n      ")," @media (min-width:320px) and (max-width:480px){overflow-y:auto;height:100%;}")},De=re("div",{target:"eilovpv3"})(function(e){return Fe(e.shouldScroll)},""),Pe=re("footer",{target:"eilovpv4"})("align-items:center;display:flex;flex:0 0 auto;justify-content:space-between;transition:box-shadow 200ms;z-index:1;padding:",16-we,"px ",20,"px ",20,"px;box-shadow:",function(e){return e.showKeyline?"0 -".concat(we,"px 0 0 ").concat(ke(e)):"none"},";"),_e=re("div",{target:"eilovpv5"})("display:inline-flex;margin:0 -",R.math.divide(C.l,2),"px;"),Ie=re("div",{target:"eilovpv6"})("flex:1 0 auto;margin:0 ",R.math.divide(C.l,2),"px;"),Ne=function(e){return Object(k.c)("span",e)},Me=function(e){function n(){var e,t;l()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=p()(this,(e=h()(n)).call.apply(e,[this].concat(r))),x()(v()(t),"props",void 0),t}return y()(n,e),u()(n,[{key:"render",value:function(){var e=this.props,n=e.actions,t=e.appearance,o=e.component,r=e.onClose,i=e.showKeyline;return o||n?o&&n?console.warn("You can provide `component` OR `actions`, not both."):o?Object(w.createElement)(o,{appearance:t,onClose:r,showKeyline:i}):Object(k.c)(Pe,{showKeyline:i},Object(k.c)(Ne,null),Object(k.c)(_e,null,n?n.map(function(e,n){var o=e.text,r=_()(e,["text"]),i=n?"subtle":t||"primary";return Object(k.c)(Ie,{key:o||n},Object(k.c)(xe.a,a()({appearance:i},r),o))}):null)):null}}]),n}(w.Component),Te=t(887),Le=t.n(Te),Ue=t(246),He=t.n(Ue),Be=function(e){var n=e.appearance;if(!n)return null;var t="danger"===n?Le.a:He.a;return Object(k.c)("span",{css:Ae(n),appearance:n},Object(k.c)(t,{label:"".concat(n," icon")}))},Re=function(e){function n(){var e,t;l()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=p()(this,(e=h()(n)).call.apply(e,[this].concat(r))),x()(v()(t),"props",void 0),t}return y()(n,e),u()(n,[{key:"render",value:function(){var e=this.props,n=e.appearance,t=e.component,o=e.heading,r=e.onClose,i=e.showKeyline,a=e.isHeadingMultiline;return t||o?t&&o?console.warn("You can provide `component` OR `heading`, not both."):t?Object(w.createElement)(t,{appearance:n,onClose:r,showKeyline:i,isHeadingMultiline:a}):Object(k.c)(Ce,{showKeyline:i},Object(k.c)(Ee,null,Object(k.c)(Be,{appearance:n}),Object(k.c)(je,{isHeadingMultiline:a},o))):null}}]),n}(w.Component);x()(Re,"defaultProps",{isHeadingMultiline:!0});var Ke=function(e){function n(){var e,t;l()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=p()(this,(e=h()(n)).call.apply(e,[this].concat(r))),x()(v()(t),"escapeIsHeldDown",!1),x()(v()(t),"_isMounted",!1),x()(v()(t),"scrollContainer",void 0),x()(v()(t),"state",{showFooterKeyline:!1,showHeaderKeyline:!1,tabbableElements:[]}),x()(v()(t),"determineKeylines",Object(ge.a)(function(){if(t.scrollContainer){var e=t.scrollContainer,n=e.scrollTop,o=e.scrollHeight,r=e.clientHeight,i=n>we,a=n<=o-r-we;t.setState({showHeaderKeyline:i,showFooterKeyline:a})}})),x()(v()(t),"getScrollContainer",function(e){e&&(t.scrollContainer=e)}),x()(v()(t),"handleKeyUp",function(){t.escapeIsHeldDown=!1}),x()(v()(t),"handleKeyDown",function(e){var n=t.props,o=n.onClose,r=n.shouldCloseOnEscapePress,i=n.stackIndex,a=void 0===i?0:i;if(!t.escapeIsHeldDown&&("Escape"===e.key&&(t.escapeIsHeldDown=!0),t._isMounted&&!(a>0)))switch(e.key){case"Escape":r&&o(e)}}),x()(v()(t),"handleStackChange",function(e){var n=t.props.onStackChange;n&&n(e)}),t}return y()(n,e),u()(n,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.addEventListener("keydown",this.handleKeyDown,!1),document.addEventListener("keyup",this.handleKeyUp,!1),this.scrollContainer){var e=this.scrollContainer;window.addEventListener("resize",this.determineKeylines,!1),e.addEventListener("scroll",this.determineKeylines,!1),this.determineKeylines()}this.props.header&&console.warn("@atlaskit/modal-dialog: Deprecation warning - Use of the header prop in ModalDialog is deprecated. Please compose your ModalDialog using the 'components' prop instead"),this.props.footer&&console.warn("@atlaskit/modal-dialog: Deprecation warning - Use of the footer prop in ModalDialog is deprecated. Please compose your ModalDialog using the 'components' prop instead"),this.props.body&&console.warn("@atlaskit/modal-dialog: Deprecation warning - Use of the body prop in ModalDialog is deprecated. Please compose your ModalDialog using the 'components' prop instead"),this.props.components.Body&&(this.scrollContainer instanceof HTMLElement||console.warn("@atlaskit/modal-dialog: Warning - Ref must attach to a DOM element; check you are using forwardRef and attaching the ref to an appropriate element. Check the examples for more details."))}},{key:"componentWillReceiveProps",value:function(e){var n=this.props.stackIndex;e.stackIndex&&e.stackIndex!==n&&this.handleStackChange(e.stackIndex)}},{key:"componentWillUnmount",value:function(){if(this._isMounted=!1,document.removeEventListener("keydown",this.handleKeyDown,!1),document.removeEventListener("keyup",this.handleKeyUp,!1),this.scrollContainer){var e=this.scrollContainer;window.removeEventListener("resize",this.determineKeylines,!1),e.removeEventListener("scroll",this.determineKeylines,!1)}}},{key:"render",value:function(){var e=this.props,n=e.actions,t=e.appearance,o=e.body,r=e.children,i=e.components,a=e.footer,c=e.header,l=e.heading,s=e.isChromeless,u=e.isHeadingMultiline,d=e.onClose,p=e.shouldScroll,f=this.state,h=f.showFooterKeyline,m=f.showHeaderKeyline,v=i.Container,g=void 0===v?"div":v,y=i.Body||o||De;return Object(k.c)(g,{css:Oe},s?r:Object(k.c)(O.a.Fragment,null,Object(k.c)(Re,{appearance:t,component:i.Header?i.Header:c,heading:l,onClose:d,isHeadingMultiline:u,showKeyline:m}),y.styledComponentId?Object(k.c)(y,{css:Fe(p),innerRef:this.getScrollContainer},r):Object(k.c)(y,{css:Fe(p),ref:this.getScrollContainer},r),Object(k.c)(Me,{actions:n,appearance:t,component:i.Footer?i.Footer:a,onClose:d,showKeyline:h})),Object(k.c)(be.a,null))}}]),n}(w.Component);x()(Ke,"defaultProps",{autoFocus:!1,components:{},isChromeless:!1,stackIndex:0,isHeadingMultiline:!0});var ze=t(960),Ve=t.n(ze),We=(t(22),function(e){for(var n=Array(e.length),t=0;t<e.length;++t)n[t]=e[t];return n}),qe=function(e){return Array.isArray(e)?e:[e]},Ge=function(e,n){var t=e.tabIndex-n.tabIndex,o=e.index-n.index;if(t){if(!e.tabIndex)return 1;if(!n.tabIndex)return-1}return t||o},Ye=function(e,n,t){return We(e).map(function(e,n){return{node:e,index:n,tabIndex:t&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}}).filter(function(e){return!n||e.tabIndex>=0}).sort(Ge)},Xe=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"],Je="data-focus-lock",Ze="data-focus-lock-disabled",$e="data-no-focus-lock",Qe="data-autofocus-inside",en=Xe.join(","),nn=en+", [data-focus-guard]",tn=function(e,n){return e.reduce(function(e,t){return e.concat(We(t.querySelectorAll(n?nn:en)),t.parentNode?We(t.parentNode.querySelectorAll(Xe.join(","))).filter(function(e){return e===t}):[])},[])},on=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.push(n),n.parentNode&&e(n.parentNode,t),t},rn=function(e,n){for(var t=on(e),o=on(n),r=0;r<t.length;r+=1){var i=t[r];if(o.indexOf(i)>=0)return i}return!1},an=function(e){return We(e).filter(function(e){return function e(n){return!n||n===document||!((t=window.getComputedStyle(n,null))&&t.getPropertyValue&&("none"===t.getPropertyValue("display")||"hidden"===t.getPropertyValue("visibility")))&&e(n.parentNode);var t}(e)}).filter(function(e){return function(e){return!(("INPUT"===e.tagName||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))}(e)})},cn=function(e,n){return Ye(an(tn(e,n)),!0,n)},ln=function(e){return an(function(e){var n=e.querySelectorAll("["+Qe+"]");return We(n).map(function(e){return tn([e])}).reduce(function(e,n){return e.concat(n)},[])}(e))},sn=function(e){return"INPUT"===e.tagName&&"radio"===e.type},un=function(e){return e[0]&&e.length>1&&sn(e[0])&&e[0].name?function(e,n){return n.filter(sn).filter(function(n){return n.name===e.name}).filter(function(e){return e.checked})[0]||e}(e[0],e):e[0]},dn="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pn=function(e){return qe(e).filter(Boolean).reduce(function(e,n){var t=n.getAttribute(Je);return e.push.apply(e,t?function e(n){for(var t=n.length,o=0;o<t;o+=1)for(var r=function(t){if(o!==t&&n[o].contains(n[t]))return{v:e(n.filter(function(e){return e!==n[t]}))}},i=0;i<t;i+=1){var a=r(i);if("object"===("undefined"===typeof a?"undefined":dn(a)))return a.v}return n}(We(function e(n){return n.parentNode?e(n.parentNode):n}(n).querySelectorAll("["+Je+'="'+t+'"]:not(['+Ze+'="disabled"])'))):[n]),e},[])},fn=function(e){return e.dataset&&e.dataset.focusGuard},hn=function(e){return!fn(e)},mn=function(e,n,t){var o=qe(e),r=qe(n),i=o[0],a=null;return r.filter(Boolean).forEach(function(e){a=rn(a||e,e)||a,t.filter(Boolean).forEach(function(e){var n=rn(i,e);n&&(a=!a||n.contains(a)?n:rn(n,a))})}),a},vn=function(e,n){var t=document&&document.activeElement,o=pn(e).filter(hn),r=mn(t||e,e,o),i=cn(o).filter(function(e){var n=e.node;return hn(n)});if(i[0]||(i=(a=o,Ye(an(tn(a)),!1)).filter(function(e){var n=e.node;return hn(n)}))[0]){var a,c,l,s=cn([r]).map(function(e){return e.node}),u=(c=i,s.map(function(e){return c.find(function(n){var t=n.node;return e===t})}).filter(Boolean)),d=u.map(function(e){return e.node}),p=function(e,n,t,o,r){var i=e.length,a=e[0],c=e[i-1];if(!(e.indexOf(t)>=0)){var l=n.indexOf(t),s=n.indexOf(o||l),u=e.indexOf(o),d=l-s,p=n.indexOf(a),f=n.indexOf(c);return-1===l||-1===u?e.indexOf(r.length?un(r):un(e)):!d&&u>=0?u:l<=p&&fn(t)&&Math.abs(d)>1?0:d&&Math.abs(d)>1?u:l<=p?i-1:l>f?0:d?Math.abs(d)>1?u:(i+u+d)%i:void 0}}(d,s,t,n,d.filter((l=function(e){return e.reduce(function(e,n){return e.concat(ln(n))},[])}(o),function(e){return!!e.autofocus||e.dataset&&!!e.dataset.autofocus||l.indexOf(e)>=0})));return void 0===p?p:u[p]}},gn=function(e){return e===document.activeElement},yn=function(e){var n=document&&document.activeElement;return!(!n||n.dataset&&n.dataset.focusGuard)&&pn(e).reduce(function(e,t){return e||t.contains(n)||function(e){return n=We(e.querySelectorAll("iframe")),t=gn,!!n.filter(function(e){return e===t})[0];var n,t}(t)},!1)},bn=function(){return document&&We(document.querySelectorAll("["+$e+"]")).some(function(e){return e.contains(document.activeElement)})},xn=0,kn=!1,wn=function(e,n){var t,o=vn(e,n);if(!kn&&o){if(xn>2)return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),kn=!0,void setTimeout(function(){kn=!1},1);xn++,(t=o.node).focus(),t.contentWindow&&t.contentWindow.focus(),xn--}},On=t(1061),Cn=t.n(On);function En(e){var n=window.setImmediate;"undefined"!==typeof n?n(e):setTimeout(e,1)}var jn=function(){return document&&document.activeElement===document.body||bn()},Sn=null,An=null,Fn=null,Dn=!1;function Pn(e,n,t,o){var r=null,i=e;do{var a=o[i];if(a.guard)a.node.dataset.focusAutoGuard&&(r=a);else{if(!a.lockItem)break;if(i!==e)return;r=null}}while((i+=t)!==n);r&&(r.node.tabIndex=0)}var _n=function(e){return e&&"current"in e?e.current:e},In=function(){var e,n=!1;if(Sn){var t=Sn,o=t.observed,r=t.persistentFocus,i=t.autoFocus,a=t.shards,c=o||Fn&&Fn.portaledElement,l=document&&document.activeElement;if(c){var s=[c].concat(a.map(_n).filter(Boolean));if(l&&!function(e){return(Sn.whiteList||function(){return!0})(e)}(l)||(r||Dn||!jn()||!An&&i)&&(!c||yn(s)||(e=l,Fn&&Fn.portaledElement===e)||(document&&!An&&l&&!i?(l.blur(),document.body.focus()):(n=wn(s,An),Fn={})),Dn=!1,An=document&&document.activeElement),document){var u=document&&document.activeElement,d=function(e){var n=pn(e).filter(hn),t=mn(e,e,n),o=cn([t],!0),r=cn(n).filter(function(e){var n=e.node;return hn(n)}).map(function(e){return e.node});return o.map(function(e){var n=e.node;return{node:n,index:e.index,lockItem:r.indexOf(n)>=0,guard:fn(n)}})}(s),p=d.find(function(e){return e.node===u});if(p){d.filter(function(e){var n=e.guard,t=e.node;return n&&t.dataset.focusAutoGuard}).forEach(function(e){return e.node.removeAttribute("tabIndex")});var f=d.indexOf(p);Pn(f,d.length,1,d),Pn(f,-1,-1,d)}}}}return n},Nn=function(e){In()&&e&&(e.stopPropagation(),e.preventDefault())},Mn=function(){return En(In)},Tn=function(e){var n=e.target,t=e.currentTarget;t.contains(n)||(Fn={observerNode:t,portaledElement:n})},Ln=function(){Dn=!0},Un=function(){document.addEventListener("focusin",Nn,!0),document.addEventListener("focusout",Mn),window.addEventListener("blur",Ln)},Hn=function(){document.removeEventListener("focusin",Nn,!0),document.removeEventListener("focusout",Mn),window.removeEventListener("blur",Ln)};var Bn=function(e,n){return function(t){var o,r=[];function i(){o=e(r.map(function(e){return e.props})),n(o)}var a=function(e){function n(){return e.apply(this,arguments)||this}Ve()(n,e),n.peek=function(){return o};var a=n.prototype;return a.shouldComponentUpdate=function(e){return!Cn()(e,this.props)},a.componentDidMount=function(){r.push(this),i()},a.componentDidUpdate=function(){i()},a.componentWillUnmount=function(){var e=r.indexOf(this);r.splice(e,1),i()},a.render=function(){return O.a.createElement(t,this.props)},n}(w.Component);return x()(a,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(t)+")"),a}}(function(e){return e.filter(function(e){return!e.disabled}).slice(-1)[0]},function(e){e&&!Sn&&Un();var n=Sn,t=n&&e&&e.onActivation===n.onActivation;Sn=e,n&&!t&&n.onDeactivation(),e?(An=null,t&&n.observed===e.observed||e.onActivation(),In(!0),En(In)):(Hn(),An=null)})(function(){return null}),Rn={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},Kn=function(e){var n=e.children;return O.a.createElement(O.a.Fragment,null,O.a.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:Rn}),n,n&&O.a.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:Rn}))};Kn.propTypes={},Kn.defaultProps={children:null};var zn=function(e){var n=e.children;return O.a.createElement("div",null,n)};zn.propTypes={};var Vn=O.a.Fragment?O.a.Fragment:zn,Wn=[],qn=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return n=e.call.apply(e,[this].concat(o))||this,x()(v()(v()(n)),"state",{observed:void 0}),x()(v()(v()(n)),"onActivation",function(){n.originalFocusedElement=n.originalFocusedElement||document&&document.activeElement,n.state.observed&&n.props.onActivation&&n.props.onActivation(n.state.observed),n.isActive=!0}),x()(v()(v()(n)),"onDeactivation",function(){n.isActive=!1,n.props.returnFocus&&n.originalFocusedElement&&n.originalFocusedElement.focus&&(n.originalFocusedElement.focus(),n.originalFocusedElement=null),n.props.onDeactivation&&n.props.onDeactivation(n.state.observed)}),x()(v()(v()(n)),"onFocus",function(e){n.isActive&&Tn(e)}),x()(v()(v()(n)),"onBlur",Mn),x()(v()(v()(n)),"setObserveNode",function(e){n.state.observed!==e&&n.setState({observed:e})}),x()(v()(v()(n)),"isActive",!1),x()(v()(v()(n)),"originalFocusedElement",null),n}return Ve()(n,e),n.prototype.render=function(){var e,n=this.props,t=n.children,r=n.disabled,i=n.noFocusGuards,c=n.persistentFocus,l=n.autoFocus,s=(n.allowTextSelection,n.group),u=n.className,d=n.whiteList,p=n.shards,f=void 0===p?Wn:p,h=n.as,m=void 0===h?"div":h,v=n.lockProps,g=void 0===v?{}:v,y=this.state.observed;var b=a()(((e={})[o.FOCUS_DISABLED]=r&&"disabled",e[o.FOCUS_GROUP]=s,e),g),x=!0!==i,k=x&&"tail"!==i;return O.a.createElement(Vn,null,x&&[O.a.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:r?-1:0,style:Rn}),O.a.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:r?-1:1,style:Rn})],O.a.createElement(m,a()({ref:this.setObserveNode},b,{className:u,onBlur:this.onBlur,onFocus:this.onFocus}),O.a.createElement(Bn,{observed:y,disabled:r,persistentFocus:c,autoFocus:l,whiteList:d,shards:f,onActivation:this.onActivation,onDeactivation:this.onDeactivation}),t),k&&O.a.createElement("div",{"data-focus-guard":!0,tabIndex:r?-1:0,style:Rn}))},n}(w.Component);qn.propTypes={},qn.defaultProps={disabled:!1,returnFocus:!1,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var Gn=qn,Yn=function(e){function n(){return l()(this,n),p()(this,h()(n).apply(this,arguments))}return y()(n,e),u()(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.isEnabled,t=e.autoFocus;if("function"===typeof t&&n){var o=t();o&&o.focus&&o.focus()}}},{key:"render",value:function(){var e=this.props,n=e.isEnabled,t=e.autoFocus,o=e.shouldReturnFocus;return Object(k.c)(Gn,{disabled:!n,autoFocus:!!t,returnFocus:o},this.props.children)}}]),n}(w.Component);x()(Yn,"defaultProps",{autoFocus:!0,isEnabled:!0,shouldReturnFocus:!0});var Xn=function(e){var n=e.scrollBehavior,t=_()(e,["scrollBehavior"]),o="inside"===n?ue:de;return Object(k.c)(o,t)};function Jn(){return window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0}var Zn=function(e){function n(){var e,t;l()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=p()(this,(e=h()(n)).call.apply(e,[this].concat(r))),x()(v()(t),"state",{dialogNode:null,scrollDistance:I.canUseDOM?Jn():0,isExiting:!1}),x()(v()(t),"handleWindowScroll",function(){Jn()!==t.state.scrollDistance&&window.scrollTo(window.pageXOffset,t.state.scrollDistance)}),x()(v()(t),"handleOverlayClick",function(e){t.props.shouldCloseOnOverlayClick&&t.props.onClose(e)}),t}return y()(n,e),u()(n,[{key:"componentDidMount",value:function(){var e=Jn();Jn()!==this.state.scrollDistance&&this.setState({scrollDistance:e}),window.addEventListener("scroll",this.handleWindowScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleWindowScroll)}},{key:"render",value:function(){var e=this,n=this.props,t=n.actions,o=n.appearance,r=n.autoFocus,i=n.body,a=n.children,c=n.components,l=n.footer,s=n.header,u=n.height,d=n.isChromeless,p=n.isHeadingMultiline,f=n.isOpen,h=n.onClose,m=n.onCloseComplete,v=n.onOpenComplete,g=n.onStackChange,y=n.shouldCloseOnEscapePress,b=n.stackIndex,x=n.heading,w=n.width,O=n.scrollBehavior,C=this.state.scrollDistance,E=null!=b&&b>0,j=Y.values.includes(w)?w:null,S=j?null:w;return Object(k.c)(ve,{in:f,onExited:m,onEntered:v,stackIndex:b},function(n){var m=n.fade,v=n.slide;return Object(k.c)(se,{style:m,"aria-hidden":E,scrollDistance:C},Object(k.c)(Yn,{isEnabled:0===b&&f,autoFocus:r},Object(k.c)(q,{isTinted:!0,onBlanketClicked:e.handleOverlayClick}),Object(k.c)(Xn,{style:v,scrollBehavior:O,widthName:j,widthValue:S},Object(k.c)(pe,{heightValue:u,isChromeless:d,role:"dialog",tabIndex:"-1"},Object(k.c)(Ke,{actions:t,appearance:o,components:c,footer:l,heading:x,isHeadingMultiline:p,header:s,onClose:h,shouldScroll:"inside"===O,shouldCloseOnEscapePress:y,onStackChange:g,isChromeless:d,stackIndex:b,body:i},a)))))})}}]),n}(w.Component);x()(Zn,"defaultProps",{autoFocus:!0,scrollBehavior:"inside",shouldCloseOnEscapePress:!0,shouldCloseOnOverlayClick:!0,isChromeless:!1,isOpen:!0,stackIndex:0,width:"medium",isHeadingMultiline:!0});var $n=Object(N.a)("atlaskit"),Qn=Object(M.a)({componentName:"modalDialog",packageName:G.a,packageVersion:G.b})(Object(T.a)({onClose:$n({action:"closed",actionSubject:"modalDialog",attributes:{componentName:"modalDialog",packageName:G.a,packageVersion:G.b}})})(Zn)),et=function(e){function n(){var e,t;l()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=p()(this,(e=h()(n)).call.apply(e,[this].concat(r))),x()(v()(t),"onModalClosed",function(e){return function(n){e&&e(),t.props.onCloseComplete&&t.props.onCloseComplete(n)}}),t}return y()(n,e),u()(n,[{key:"render",value:function(){var e=this;return Object(k.c)(j.a,null,function(n){var t=n.isOpen,o=n.onExited;return Object(k.c)(E.a,{zIndex:C.m.modal()},Object(k.c)(D,{isOpen:t},function(n){return Object(k.c)(Qn,a()({},e.props,{isOpen:t,stackIndex:e.props.stackIndex||n,onCloseComplete:e.onModalClosed(o)}))}))})}}]),n}(w.Component);x()(et,"defaultProps",{autoFocus:!0,scrollBehavior:"inside",shouldCloseOnEscapePress:!0,shouldCloseOnOverlayClick:!0,isChromeless:!1,width:"medium",isHeadingMultiline:!0,onClose:function(){}});n.a=et},887:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t(0)),r=i(t(24));function i(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var c=function(e){return o.default.createElement(r.default,a({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><path d="M13.416 4.417a2.002 2.002 0 0 0-2.832 0l-6.168 6.167a2.002 2.002 0 0 0 0 2.833l6.168 6.167a2.002 2.002 0 0 0 2.832 0l6.168-6.167a2.002 2.002 0 0 0 0-2.833l-6.168-6.167z" fill="currentColor"/><path d="M12 14a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2" fill="inherit"/></g></svg>'},e))};c.displayName="ErrorIcon";var l=c;n.default=l},960:function(e,n){e.exports=function(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}}}]);
//# sourceMappingURL=6.dd3b475d.chunk.js.map
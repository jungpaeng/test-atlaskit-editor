(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(870));function i(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){return r.default.createElement(o.default,a({dangerouslySetGlyph:'<svg width="16" height="16" viewBox="0 0 16 16" focusable="false" role="presentation"><path fill="#FFAB00" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm4.75 11.75l-.543-.543a1 1 0 0 0-1.414 0L3 13h10v-2.25l-1.795-1.974a1 1 0 0 0-1.447-.034L6.75 11.75zM4.667 6.333a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333z"/></svg>'},e,{size:"small"}))};l.displayName="Image16Icon";var u=l;t.default=u},870:function(e,t,n){"use strict";var r=n(548),o=n(373);Object.defineProperty(t,"__esModule",{value:!0}),t.size=t.default=t.IconWrapper=void 0;var i=o(n(5)),a=o(n(15)),l=o(n(16)),u=o(n(17)),c=o(n(14)),s=o(n(18)),d=r(n(0)),h=o(n(3)),p=n(2),f={small:{height:"16px",width:"16px"},medium:{height:"24px",width:"24px"},xlarge:{height:"64px",width:"48px"}},v=function(e){return e.size?"height: ".concat(f[e.size].height,"; width: ").concat(f[e.size].width,";"):null},g=h.default.span.withConfig({displayName:"Icon__IconWrapper",componentId:"sc-1wxtf9c-0"})(["\n  "," color: ",";\n  display: inline-block;\n  fill: ",";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    "," max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n"],v,function(e){return e.primaryColor||"currentColor"},function(e){return e.secondaryColor||p.colors.background},v);t.IconWrapper=g;var y=function(e){function t(){return(0,a.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.dangerouslySetGlyph,n=e.size;return d.default.createElement(g,{size:n,"aria-label":this.props.label,dangerouslySetInnerHTML:{__html:t}})}}]),t}(d.Component);t.default=y;var w=Object.keys(f).reduce(function(e,t){return Object.assign(e,(0,i.default)({},t,t))},{});t.size=w}}]);
//# sourceMappingURL=4.112324cd.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1419:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),u=n(458),o=n.n(u),d=n(320),i=n.n(d),s=function(e){return e<10?"0"+e:e},c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=function(e,t){var n=new Date(Number(e));switch(t){case"ddd, DD MMM":return p[n.getUTCDay()]+", "+s(n.getUTCDate())+" "+c[n.getUTCMonth()];case"YYYY-MM-DD":return n.getUTCFullYear()+"-"+s(n.getUTCMonth()+1)+"-"+n.getUTCDate();default:return s(n.getUTCDate())+" "+c[n.getUTCMonth()]+" "+n.getUTCFullYear()}},D=function(e){return l(e,"YYYY-MM-DD")},M=function(e){return o()(D(Number(e)),D((new Date).valueOf()))},Y=function(e){var t=new Date,n=new Date(Number(e)),a=i()(n,t),r=n.getUTCFullYear()===t.getUTCFullYear();return 0===a?"Today":1===a?"Tomorrow":l(e,-1===a?"Yesterday":r?"ddd, DD MMM":"DD MMM YYYY")},T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.timestamp,n=e.parentIsIncompleteTask,a=n&&M(t)?"date-node date-node-highlighted":"date-node";return r.createElement("span",{className:a,"data-node-type":"date","data-timestamp":t},n?Y(t):l(t))},t}(r.PureComponent);t.default=T}}]);
//# sourceMappingURL=@atlaskit-internal-renderer-node_Date.bb347d7e.chunk.js.map
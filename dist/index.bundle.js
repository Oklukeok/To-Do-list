"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[826],{426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"body {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.placeHolder {\r\n  width: 50%;\r\n  height: 50%;\r\n  box-shadow: 2px 4px 15px 0 #000;\r\n}\r\n\r\n.taskToDo {\r\n  display: flex;\r\n}\r\n\r\n.forminput {\r\n  border: 0;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n}\r\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var p=0;p<e.length;p++){var d=[].concat(e[p]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],p=r.base?s[0]+r.base:s[0],d=a[p]||0,l="".concat(p," ").concat(d);a[p]=d+1;var u=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:h,references:1})}c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),p=0;p<a.length;p++){var d=n(a[p]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},987:(e,t,n)=>{var r=n(379),o=n.n(r),a=n(795),c=n.n(a),i=n(569),s=n.n(i),p=n(565),d=n.n(p),l=n(216),u=n.n(l),f=n(589),h=n.n(f),m=n(426),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=u(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const y=document.querySelector(".placeHolder");[{description:"Wash the dishes",completed:!1,index:1},{description:"Complete To Do list project",completed:!1,index:2},{description:"Read the newspapper",completed:!1,index:3}].forEach((e=>{const t=document.createElement("div");t.classList.add("taskToDo"),y.appendChild(t);const n=document.createElement("input");n.setAttribute("type","checkbox"),t.appendChild(n);const r=document.createElement("p");r.innerText=e.description,t.appendChild(r);const o=document.createElement("p");o.innerText="⁞",t.appendChild(o)}));const b=document.createElement("button");b.innerText="Clear all completed",y.appendChild(b)}},e=>{e(e.s=987)}]);
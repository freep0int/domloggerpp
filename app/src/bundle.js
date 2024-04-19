(()=>{var o={54:(o,t,e)=>{const{log:n,getConfig:i,getTargets:r,getOwnPropertyDescriptor:s,checkRegexs:c}=e(191);o.exports=(o,t,e)=>{const g=i(o,t,e),a=e.split(":");e=a.pop();const[l,u]=r(e.split("."));if(!l||!(u in l))return void console.log(`[DOMLogger++] ${e} (attribute) does not exist!`);try{if("function"==typeof l[u])return void console.log(`[DOMLogger++] ${e} can't be a function or a class!`)}catch{}const f=s(l,u);if(f.configurable){var p;if(!f.set||!f.get)try{p=l[u]}catch{if(f.set||!f.get)return void console.log(`[DOMLogger++] ${e} can't be hook for now!`);if(a.includes("set"))return void console.log(`[DOMLogger++] Only the getter can be hooked for ${e}, remove set!`)}Object.defineProperty(l,u,{get:function(){return f.get?output=f.get.call(this):output=p,a.includes("get")&&(g.hookFunction&&(output=Function("output",g.hookFunction)(output)),n(o,t,`${this.nodeName?`get:${this.nodeName.toLowerCase()}.${u}`:e}`,JSON.stringify(output),g)),output},set:function(i){if(a.includes("set")&&i){const r=c(g.match,i,!0),s=c(g["!match"],i,!1);g.hookFunction&&(i=Function("args",g.hookFunction)(i)),!s&&r&&n(o,t,`${this.nodeName?`set:${this.nodeName.toLowerCase()}.${u}`:e}`,JSON.stringify(i),g)}return f.set?f.set.call(this,i):void(p=i)}})}else console.log(`[DOMLogger++] ${e} is not configurable, can't hook it!`)}},825:(o,t,e)=>{const{log:n,getConfig:i,getTargets:r,checkRegexs:s}=e(191);o.exports=(o,t,e)=>{const c=i(o,t,e),[g,a]=r(e.split("."));value=JSON.stringify(g[a]);const l=s(c.match,value,!1),u=s(c["!match"],value,!1);l&&!u&&n(o,t,e,value,c)}},746:(o,t,e)=>{const{log:n,getConfig:i,getTargets:r,getOwnPropertyDescriptor:s,checkRegexs:c}=e(191);o.exports=(o,t,e)=>{const g=i(o,t,e);var[a,l]=r(e.split("."));a&&l in a?"function"==typeof a[l]?s(a,l).configurable?a[l]=new Proxy(a[l],{construct:function(i,r){const s=c(g.match,r,!0),a=c(g["!match"],r,!1);return g.hookFunction&&(r=Function("args",g.hookFunction)(r)),!a&&s&&n(o,t,e,JSON.stringify(r),g),new i(...r)}}):console.log(`[DOMLogger++] ${e} is not configurable, can't hook it!`):console.log(`[DOMLogger++] ${e} is not a class!`):console.log(`[DOMLogger++] ${e} (class) does not exist!`)}},3:(o,t,e)=>{const{log:n,getConfig:i,getTargets:r}=e(191),s={function:e(4),class:e(746),attribute:e(54)};o.exports=(o,t,e)=>{const c=e.split(":"),g=c.pop(),a=i(o,t,c.slice(1).join(":")),l=c.slice(1).pop(),u=setInterval((()=>{var[e,i]=r(l.split("."));e&&i in e&&(clearInterval(u),"attribute"!==c[0]||"set"!==c[1]&&"set"!==c[2]||n(o,t,c.slice(1).join(":"),JSON.stringify(e[i]),a),s[c[0]](t,c.slice(1).join(":")))}),g)}},454:(o,t,e)=>{const n=e(54),{log:i,getConfig:r,checkRegexs:s}=e(191);o.exports=(o,t,e)=>{const c=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(n,g,a){if(e.includes(n)){const e=r(o,t,n),c=s(e.match,`${g}${a?`;options=${JSON.stringify(a)}`:""}`,!0),l=s(e["!match"],`${g}${a?`;options=${JSON.stringify(a)}`:""}`,!1);e.hookFunction&&(args=Function("args",e.hookFunction)(g)),!l&&c&&i(o,t,`on${n}`,`${g}${a?`;options=${JSON.stringify(a)}`:""}`,e)}return c.call(this,n,g,a)};for(const i of e)`on${i}`in window?n(o,t,`set:on${i}`):console.log(`[DOMLogger++] on${i} (event) does not exist!`)}},4:(o,t,e)=>{const{log:n,getConfig:i,getTargets:r,getOwnPropertyDescriptor:s,checkRegexs:c}=e(191);o.exports=(o,t,e)=>{const g=i(o,t,e);var[a,l]=r(e.split("."));if(!a||!(l in a))return void console.log(`[DOMLogger++] ${e} (function) does not exist!`);if("function"!=typeof a[l])return void console.log(`[DOMLogger++] ${e} is not a function!`);if(!s(a,l).configurable)return void console.log(`[DOMLogger++] ${e} is not configurable, can't hook it!`);const u=a[l];a[l]=new Proxy(a[l],{apply:function(i,r,s){const a=c(g.match,s,!0),l=c(g["!match"],s,!1);return g.hookFunction&&(s=Function("args",g.hookFunction)(s)),!l&&a&&n(o,t,e,JSON.stringify(s),g),Reflect.apply(u,r,s)}})}},191:o=>{const t=(o,t,e)=>{if(!o)return e;void 0===t&&(t="undefined"),"function"==typeof t&&(t=t.toString());for(let e of o){try{new RegExp(e)}catch{console.log(`[DOMLogger++] ${e} (regex) is invalid!`);continue}if(JSON.stringify(t).match(e))return!0}return!1};o.exports={log:async(o,e,n,i,r)=>{var s=(()=>{let o=(new Error).stack;return o=o.split("\n"),o.filter((o=>!o.includes("/src/bundle.js")))})();"Error"===s[0]&&s.shift();var c=s[0];if(c=await(async o=>{const t=(new TextEncoder).encode(o),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map((o=>o.toString(16).padStart(2,"0"))).join("")})(c),window?.domlogger_debug_canary===c)debugger;var g=!1,a=!1;if(r.alert){const o=t(r.alert.match,i,!0);!t(r.alert["!match"],i,!1)&&o&&(g=!0,r.alert.notification&&(a=!0))}let l={ext:"domlogger",date:Date.now(),href:location.href,type:e,hook:o,frame:top===self?"top":"subframe",sink:n,data:i,trace:s,debug:c,badge:g,notification:a};window.originalPostMessage?window.originalPostMessage(l,"*"):window.postMessage(l,"*")},getConfig:(o,t,e)=>{var n=window.hooksConfig["*"]?window.hooksConfig["*"]:{},i=window.hooksConfig[o]?window.hooksConfig[o]:{},r=window.hooksConfig[t]?window.hooksConfig[t]:{},s=window.hooksConfig[e]?window.hooksConfig[e]:{};return Object.assign({},n,i,r,s)},getTargets:o=>{var t=o.pop(),e=window;"window"===o[0]&&o.shift();for(const t of o){if(!(t in e))return[null,null];e=e[t]}return[e,t]},getOwnPropertyDescriptor:(o,t)=>{for(;o;){const e=Object.getOwnPropertyDescriptor(o,t);if(e)return e;o=Object.getPrototypeOf(o)}},checkRegexs:t}}},t={};function e(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return o[n](r,r.exports,e),r.exports}(()=>{const o={function:e(4),class:e(746),attribute:e(54),event:e(454),checkContent:e(825),custom:e(3)},t=new URL(document.currentScript.src),n=new URLSearchParams(t.search),i=JSON.parse(atob(n.get("hookSettings")));window.hooksTargets=i.hooks,window.hooksConfig=i.config,window.domlogger_debug_canary=n.get("debugCanary");for(const[t,e]of Object.entries(window.hooksTargets))for(const[n,i]of Object.entries(e))if("event"!==n)for(const e of i)"postMessage"===e.split(".").pop()&&(window.originalPostMessage=window.postMessage),o[n](n,t,e);else o[n](n,t,i)})()})();
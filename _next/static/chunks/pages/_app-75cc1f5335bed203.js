(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8344)}])},8344:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return S}});var e=n(5893),o=(n(8754),n(6774),n(50),n(8750),n(1933),n(451),n(2790),n(7294));function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(i.push(e.value),!r||i.length!==r);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return i(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=o.createContext(void 0);var c=function(t){var r=t.children,n=t.theme,i=u(o.useState(!1),2),c=i[0];i[1];return(0,e.jsx)(a.Provider,{value:{theme:n},children:c?(0,e.jsx)("div",{className:"flex-row items-center justify-center",children:"Loading"}):r})},l=n(9008),f=n.n(l);function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function y(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function b(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),e.forEach((function(r){y(t,r,n[r])}))}return t}function m(t,r){if(null==t)return{};var n,e,o=function(t,r){if(null==t)return{};var n,e,o={},i=Object.keys(t);for(e=0;e<i.length;e++)n=i[e],r.indexOf(n)>=0||(o[n]=t[n]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(e=0;e<i.length;e++)n=i[e],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function p(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(i.push(e.value),!r||i.length!==r);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return s(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t){var r=function(t,r){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,r||"default");if("object"!==d(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===d(r)?r:String(r)}var d=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var h=o.createContext(null),g={},w=function(t){var r=p(o.useState(g),2),n=r[0],i=r[1];o.useEffect((function(){0!==Object.keys(n).length&&window.localStorage.setItem("shopCartList",JSON.stringify(n))}),[n]),o.useEffect((function(){var t=window.localStorage.getItem("shopCartList");t&&i(JSON.parse(t))}),[]);var u={cart:{products:n,add:o.useCallback((function(t,r){return function(t,r,n){n((function(n){var e=b({},n);return e[t]=t in n?n[t]+(r||1):r||1,e}))}(t,r,i)}),[]),remove:o.useCallback((function(t){return r=t,void i((function(t){return t[r],m(t,[r].map(v))}));var r}),[]),setQty:o.useCallback((function(t,r){return function(t,r,n){n((function(n){var e=b({},n);return e[t]=r,e}))}(t,r,i)}),[]),clear:function(){i({})}}};return(0,e.jsx)(h.Provider,{value:u,children:t.children})};function j(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function O(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),e.forEach((function(r){j(t,r,n[r])}))}return t}var S=function(t){var r=t.Component,n=t.pageProps;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(f(),{children:[(0,e.jsx)("title",{children:"Blog with shop"}),(0,e.jsx)("meta",{name:"description",content:"Blog and shop"}),(0,e.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.95em%22 font-size=%2280%22>\ud83d\udc31</text></svg>"})]}),(0,e.jsx)(c,{theme:{col:{primary:"lightblue",secondary:"gray"},text:{fontfamily:"Roboto"}},children:(0,e.jsx)(w,{children:(0,e.jsx)(r,O({},n))})})]})}},1933:function(){},451:function(){},8750:function(){},2790:function(){},6774:function(){},50:function(){},8754:function(){},9008:function(t,r,n){t.exports=n(3121)}},function(t){var r=function(r){return t(t.s=r)};t.O(0,[774,179],(function(){return r(6840),r(880)}));var n=t.O();_N_E=n}]);
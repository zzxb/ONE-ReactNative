__d(function(t,r,e,o){"use strict";var n=r(703);e.exports=n.isStandardBrowserEnv()?function(){function t(t){var r=t;return e&&(o.setAttribute("href",r),r=o.href),o.setAttribute("href",r),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var r,e=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return r=t(window.location.href),function(e){var o=n.isString(e)?t(e):e;return o.protocol===r.protocol&&o.host===r.host}}():function(){return function(){return!0}}()},715);
__d(function(n,o,t,e){"use strict";function r(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(n){o=n});var t=this;n(function(n){t.reason||(t.reason=new i(n),o(t.reason))})}var i=o(724);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var n,o=new r(function(o){n=o});return{token:o,cancel:n}},t.exports=r},725);
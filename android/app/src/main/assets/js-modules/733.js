__d(function(r,e,t,n){"use strict";function o(r){return r&&r.__esModule?r:{default:r}}function a(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i({},d.default,r),t=e.logger,n=e.transformer,o=e.stateTransformer,a=e.errorTransformer,s=e.predicate,c=e.logErrors,l=e.diffPredicate;if("undefined"==typeof t)return function(){return function(r){return function(e){return r(e)}}};if(n&&console.error("Option 'transformer' is deprecated, use 'stateTransformer' instead!"),r.getState&&r.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n\n\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\n\nconst logger = createLogger({\n  // ...options\n});\n\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(r){return function(e){return r(e)}}};var g=[];return function(r){var t=r.getState;return function(r){return function(n){if("function"==typeof s&&!s(t,n))return r(n);var d={};g.push(d),d.started=f.timer.now(),d.startedTime=new Date,d.prevState=o(t()),d.action=n;var p=void 0;if(c)try{p=r(n)}catch(r){d.error=a(r)}else p=r(n);d.took=f.timer.now()-d.started,d.nextState=o(t());var v=e.diff&&"function"==typeof l?l(t,n):e.diff;if((0,u.printBuffer)(g,i({},e,{diff:v})),g.length=0,d.error)throw d.error;return p}}}}Object.defineProperty(n,"__esModule",{value:!0}),n.logger=n.defaults=void 0;var i=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},u=e(734),f=e(735),s=e(738),d=o(s),c=a();n.defaults=d.default,n.logger=c,n.default=a,t.exports=n.default},733);
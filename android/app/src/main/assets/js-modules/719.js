__d(function(e,r,a,t){"use strict";function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var n=r(703),o=r(720),d=r(721),c=r(707);a.exports=function(e){s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(r){delete e.headers[r]});var r=e.adapter||c.adapter;return r(e).then(function(r){return s(e),r.data=o(r.data,r.headers,e.transformResponse),r},function(r){return d(r)||(s(e),r&&r.response&&(r.response.data=o(r.response.data,r.response.headers,e.transformResponse))),Promise.reject(r)})}},719);
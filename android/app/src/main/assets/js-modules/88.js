__d(function(e,n,t,r){"use strict";function o(e,n,t){return"\n    in "+(e||"Unknown")+(n?" (at "+n.fileName.replace(/^.*[\\\/]/,"")+":"+n.lineNumber+")":t?" (created by "+t+")":"")}function a(e){switch(e.tag){case i:case s:case d:case m:var n=e._debugOwner,t=e._debugSource,r=l(e),a=null;return n&&(a=l(n)),o(r,t,a);default:return""}}function u(e){var n="",t=e;do n+=a(t),t=t.return;while(t);return n}var c=n(83),i=c.IndeterminateComponent,s=c.FunctionalComponent,d=c.ClassComponent,m=c.HostComponent,l=n(80);t.exports={getStackAddendumByWorkInProgressFiber:u,describeComponentFrame:o}},88);
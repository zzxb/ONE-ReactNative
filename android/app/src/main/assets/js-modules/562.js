__d(function(e,r,t,c){var n=r(563),o=r(499),a=r(564),s=r(565),u=r(566),b=r(388),i=r(506),j="[object Map]",w="[object Object]",f="[object Promise]",v="[object Set]",p="[object WeakMap]",d="[object DataView]",M=i(n),_=i(o),h=i(a),k=i(s),l=i(u),m=b;(n&&m(new n(new ArrayBuffer(1)))!=d||o&&m(new o)!=j||a&&m(a.resolve())!=f||s&&m(new s)!=v||u&&m(new u)!=p)&&(m=function(e){var r=b(e),t=r==w?e.constructor:void 0,c=t?i(t):"";if(c)switch(c){case M:return d;case _:return j;case h:return f;case k:return v;case l:return p}return r}),t.exports=m},562);
"use strict";var y=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=y(function(C,x){
function g(r,a,u,v,q){var c,i,f,t,o,d,n,e,s,l;if(i=u.data,f=u.accessors[0],r===1||v===0)return e=f(i,q),e===e&&r-a>0?0:NaN;for(d=q,o=0,t=0,s=0,l=0;l<r;l++)e=f(i,d),e===e&&(c=e-t,s+=1,t+=c/s,o+=c*(e-t)),d+=v;return n=s-a,n<=0?NaN:o/n}x.exports=g
});var p=y(function(D,w){
var j=require('@stdlib/array-base-arraylike2object/dist'),k=m();function O(r,a,u,v,q){var c,i,f,t,o,d,n,e,s;if(r<=0)return NaN;if(d=j(u),d.accessorProtocol)return k(r,a,d,v,q);if(r===1||v===0)return n=u[q],n===n&&r-a>0?0:NaN;for(t=q,f=0,i=0,e=0,s=0;s<r;s++)n=u[t],n===n&&(c=n-i,e+=1,i+=c/e,f+=c*(n-i)),t+=v;return o=e-a,o<=0?NaN:f/o}w.exports=O
});var b=y(function(E,N){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=p();function h(r,a,u,v){return R(r,a,u,v,P(r,v))}N.exports=h
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=b(),A=p();z(M,"ndarray",A);module.exports=M;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

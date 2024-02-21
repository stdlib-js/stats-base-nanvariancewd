"use strict";var l=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var q=l(function(j,p){
function M(a,e,N,f){var c,v,i,u,s,n,r,t;if(a<=0)return NaN;if(a===1||f===0)return n=N[0],n===n&&a-e>0?0:NaN;for(f<0?u=(1-a)*f:u=0,i=0,v=0,r=0,t=0;t<a;t++)n=N[u],n===n&&(c=n-v,r+=1,v+=c/r,i+=c*(n-v)),u+=f;return s=r-e,s<=0?NaN:i/s}p.exports=M
});var m=l(function(k,x){
function O(a,e,N,f,c){var v,i,u,s,n,r,t,d;if(a<=0)return NaN;if(a===1||f===0)return r=N[c],r===r&&a-e>0?0:NaN;for(s=c,u=0,i=0,t=0,d=0;d<a;d++)r=N[s],r===r&&(v=r-i,t+=1,i+=v/t,u+=v*(r-i)),s+=f;return n=t-e,n<=0?NaN:u/n}x.exports=O
});var y=l(function(z,w){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),b=m();R(o,"ndarray",b);w.exports=o
});var g=y();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

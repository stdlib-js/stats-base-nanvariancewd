// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t){var a,i,N,f,u,o,d,s;if(r<=0)return NaN;if(1===r||0===t)return(o=n[0])==o&&r-e>0?0:NaN;for(f=t<0?(1-r)*t:0,N=0,i=0,d=0,s=0;s<r;s++)(o=n[f])==o&&(N+=(a=o-i)*(o-(i+=a/(d+=1)))),f+=t;return(u=d-e)<=0?NaN:N/u};r(e,"ndarray",(function(r,e,n,t,a){var i,N,f,u,o,d,s,l;if(r<=0)return NaN;if(1===r||0===t)return(d=n[a])==d&&r-e>0?0:NaN;for(u=a,f=0,N=0,s=0,l=0;l<r;l++)(d=n[u])==d&&(f+=(i=d-N)*(d-(N+=i/(s+=1)))),u+=t;return(o=s-e)<=0?NaN:f/o}));var n=e;export{n as default};
//# sourceMappingURL=index.mjs.map

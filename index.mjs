// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e,a){var t,i,N,f,u,o,d,s;if(r<=0)return NaN;if(1===r||0===a)return(o=e[0])==o&&r-n>0?0:NaN;for(f=a<0?(1-r)*a:0,N=0,i=0,d=0,s=0;s<r;s++)(o=e[f])==o&&(N+=(t=o-i)*(o-(i+=t/(d+=1)))),f+=a;return(u=d-n)<=0?NaN:N/u}function e(r,n,e,a,t){var i,N,f,u,o,d,s,l;if(r<=0)return NaN;if(1===r||0===a)return(d=e[t])==d&&r-n>0?0:NaN;for(u=t,f=0,N=0,s=0,l=0;l<r;l++)(d=e[u])==d&&(f+=(i=d-N)*(d-(N+=i/(s+=1)))),u+=a;return(o=s-n)<=0?NaN:f/o}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map

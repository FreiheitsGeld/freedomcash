import{s as y,n as w,e as C}from"./scheduler.63274e7e.js";import{S as F,i as S,g as u,C as v,h as i,f as r,k as e,y as s}from"./index.9e07f724.js";import{p as H}from"./stores.a195663d.js";function k(a){let c,o,l,d,g,p,h,n,_,E,M,T,b,A;return document.title=c=a[0]+" - "+f,{c(){o=u("meta"),l=u("meta"),d=u("meta"),p=u("meta"),h=u("meta"),n=u("meta"),_=u("meta"),E=u("meta"),M=u("meta"),T=u("meta"),A=u("meta"),this.h()},l(m){const t=v("svelte-4p68w3",document.head);o=i(t,"META",{name:!0,content:!0}),l=i(t,"META",{property:!0,content:!0}),d=i(t,"META",{property:!0,content:!0}),p=i(t,"META",{property:!0,content:!0}),h=i(t,"META",{property:!0,content:!0}),n=i(t,"META",{property:!0,name:!0,content:!0}),_=i(t,"META",{name:!0,content:!0}),E=i(t,"META",{name:!0,content:!0}),M=i(t,"META",{name:!0,content:!0}),T=i(t,"META",{name:!0,content:!0}),A=i(t,"META",{name:!0,content:!0}),t.forEach(r),this.h()},h(){e(o,"name","description"),e(o,"content",a[1]),e(l,"property","og:type"),e(l,"content","website"),e(d,"property","og:title"),e(d,"content",g=`${a[0]} - ${f}`),e(p,"property","og:site_name"),e(p,"content",f),e(h,"property","og:description"),e(h,"content",a[1]),e(n,"property","og:image"),e(n,"name","og:image"),e(n,"content",a[2]),e(_,"name","og:url"),e(_,"content",a[3]),e(E,"name","twitter:image"),e(E,"content",a[2]),e(M,"name","twitter:card"),e(M,"content","summary_large_image"),e(T,"name","twitter:title"),e(T,"content",b=`${a[0]} - ${f}`),e(A,"name","twitter:description"),e(A,"content",a[1])},m(m,t){s(document.head,o),s(document.head,l),s(document.head,d),s(document.head,p),s(document.head,h),s(document.head,n),s(document.head,_),s(document.head,E),s(document.head,M),s(document.head,T),s(document.head,A)},p(m,[t]){t&1&&c!==(c=m[0]+" - "+f)&&(document.title=c),t&2&&e(o,"content",m[1]),t&1&&g!==(g=`${m[0]} - ${f}`)&&e(d,"content",g),t&2&&e(h,"content",m[1]),t&4&&e(n,"content",m[2]),t&8&&e(_,"content",m[3]),t&4&&e(E,"content",m[2]),t&1&&b!==(b=`${m[0]} - ${f}`)&&e(T,"content",b),t&2&&e(A,"content",m[1])},i:w,o:w,d(m){r(o),r(l),r(d),r(p),r(h),r(n),r(_),r(E),r(M),r(T),r(A)}}}const f="Freedom Cash";function q(a,c,o){let l;C(a,H,n=>o(4,l=n));let{title:d=f}=c,{description:g="FreedomCash Helps Those Who Help Each Other Into Freedom, Fairness, Love and Peace."}=c,{image:p="https://github.com/user-attachments/assets/d0f5d5f2-1895-4991-84c7-37d90dbf07cc"}=c,{url:h=`https://${l.url.host}${l.url.pathname}`}=c;return a.$$set=n=>{"title"in n&&o(0,d=n.title),"description"in n&&o(1,g=n.description),"image"in n&&o(2,p=n.image),"url"in n&&o(3,h=n.url)},[d,g,p,h]}class P extends F{constructor(c){super(),S(this,c,q,k,y,{title:0,description:1,image:2,url:3})}}export{P as S};
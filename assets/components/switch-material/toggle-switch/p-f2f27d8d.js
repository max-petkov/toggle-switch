let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),i=new WeakMap,u=e=>"sc-"+e.o,a={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1;const r=[],c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?d(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=d(e,null);return i.u=t,r.length>0&&(i.$=r),i},d=(e,t)=>({t:0,h:e,i:t,m:null,$:null,u:null}),h={},y=(e,t,n,s,r,c)=>{if(n!==s){let i=z(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,l=p(n),o=p(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if("ref"===t)s&&s(e);else if(i||"o"!==t[0]||"n"!==t[1]){const l=f(s);if((i||l&&null!==s)&&!r)try{if(e.tagName.includes("-"))e[t]=s;else{const l=null==s?"":s;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&c||r)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):z(l,u)?u.slice(2):u[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},m=/\s/,p=e=>e?e.split(m):[],b=(e,t,n,l)=>{const s=11===t.m.nodeType&&t.m.host?t.m.host:t.m,o=e&&e.u||a,r=t.u||a;for(l in o)l in r||y(s,l,o[l],void 0,n,t.t);for(l in r)y(s,l,o[l],r[l],n,t.t)},w=(t,n,l)=>{const o=n.$[l];let r,c,i=0;if(r=o.m=s.createElement(o.h),b(null,o,!1),null!=e&&r["s-si"]!==e&&r.classList.add(r["s-si"]=e),o.$)for(i=0;i<o.$.length;++i)c=w(t,o,i),c&&r.appendChild(c);return r},g=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=w(null,l,o),c&&(s[o].m=c,i.insertBefore(c,n)))},S=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.m,M(l),s.remove())},j=(e,t)=>e.h===t.h,v=(e,t)=>{const n=t.m=e.m,l=e.$,s=t.$;b(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],u=t[c],a=l.length-1,f=l[0],$=l[a];for(;o<=c&&r<=a;)null==i?i=t[++o]:null==u?u=t[--c]:null==f?f=l[++r]:null==$?$=l[--a]:j(i,f)?(v(i,f),i=t[++o],f=l[++r]):j(u,$)?(v(u,$),u=t[--c],$=l[--a]):j(i,$)?(v(i,$),e.insertBefore(i.m,u.m.nextSibling),i=t[++o],$=l[--a]):j(u,f)?(v(u,f),e.insertBefore(u.m,i.m),u=t[--c],f=l[++r]):(s=w(t&&t[r],n,r),f=l[++r],s&&i.m.parentNode.insertBefore(s,i.m));o>c?g(e,null==l[a+1]?null:l[a+1].m,n,l,r,a):r>a&&S(t,o,c)})(n,l,t,s):null!==s?g(n,null,t,s,0,s.length-1):null!==l&&S(l,0,l.length-1)},M=e=>{e.u&&e.u.ref&&e.u.ref(null),e.$&&e.$.map(M)},k=e=>H(e).p,C=(e,t,n)=>{const l=k(e);return{emit:e=>O(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},O=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},P=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},x=(e,t)=>{if(e.t|=16,!(4&e.t))return P(e,e.S),te((()=>E(e,t)));e.t|=512},E=(e,t)=>{const n=e.j;return U(void 0,(()=>L(e,n,t)))},L=async(e,t,n)=>{const l=e.p,o=l["s-rc"];n&&(e=>{const t=e.v,n=e.p,l=t.t,o=((e,t)=>{let n=u(t);const l=J.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);N(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>T(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},N=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.p,o=n.v,r=n.M||d(null,null),c=(e=>e&&e.h===h)(l)?l:$(null,null,l);t=s.tagName,o.k&&(c.u=c.u||{},o.k.map((([e,t])=>c.u[t]=s[e]))),c.h=null,c.t|=4,n.M=c,c.m=r.m=s.shadowRoot||s,e=s["s-sc"],v(r,c)})(n,l)}catch(e){B(e,n.p)}return null},T=e=>{const t=e.p,n=e.j,l=e.S;64&e.t||(e.t|=64,W(t),R(n,"componentDidLoad"),e.C(t),l||A()),e.g&&(e.g(),e.g=void 0),512&e.t&&ee((()=>x(e,!1))),e.t&=-517},A=()=>{W(s.documentElement),ee((()=>O(l,"appload",{detail:{namespace:"toggle-switch"}})))},R=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){B(e)}},U=(e,t)=>e&&e.then?e.then(t):t(),W=e=>e.classList.add("hydrated"),q=(e,t,n)=>{if(t.O){const l=Object.entries(t.O),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>H(this).P.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=H(e),o=s.P.get(t),r=s.t,c=s.j;n=((e,t)=>null==e||f(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.O[t][0]),8&r&&void 0!==o||n===o||Number.isNaN(o)&&Number.isNaN(n)||(s.P.set(t,n),c&&2==(18&r)&&x(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){o.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.k.push([e,s]),s}))}}return e},D=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let h,y=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],o:t[1],O:t[2],L:t[3]};l.O=t[2],l.k=[];const s=l.o,a=class extends HTMLElement{constructor(e){super(e),_(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),y?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=H(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){P(t,t.S=n);break}}n.O&&Object.entries(n.O).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=I(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(q(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){B(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!J.has(t)){const l=()=>{};((e,t,n)=>{let l=J.get(e);c&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,J.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.S,r=()=>x(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return H(this).N}};l.T=e[0],r.includes(s)||i.get(s)||(n.push(s),i.define(s,q(a,l,1)))}))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),y=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>h=setTimeout(A,30)))},F=new WeakMap,H=e=>F.get(e),V=(e,t)=>F.set(t.j=e,t),_=(e,t)=>{const n={t:0,p:e,v:t,P:new Map};return n.N=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],F.set(e,n)},z=(e,t)=>t in e,B=(e,t)=>(0,console.error)(e,t),G=new Map,I=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=G.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(G.set(n,e),e[t])),B)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},J=new Map,K=[],Q=[],X=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?ee(Z):o.raf(Z))},Y=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){B(e)}e.length=0},Z=()=>{Y(K),Y(Q),(n=K.length>0)&&o.raf(Z)},ee=e=>r().then(e),te=X(Q,!0);export{D as b,C as c,k as g,$ as h,r as p,V as r}
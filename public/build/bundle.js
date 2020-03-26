var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(t,e,n=e){return t.set(n),e}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function m(){return p("")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.data!==e&&(t.data=e)}let b;function k(t){b=t}function x(){if(!b)throw new Error("Function called outside component initialization");return b}const y=[],w=[],C=[],_=[],z=Promise.resolve();let P=!1;function E(t){C.push(t)}let M=!1;const j=new Set;function q(){if(!M){M=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];k(e),A(e.$$)}for(y.length=0;w.length;)w.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];j.has(e)||(j.add(e),e())}C.length=0}while(y.length);for(;_.length;)_.pop()();P=!1,M=!1,j.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const N=new Set;let L;function O(){L={r:0,c:[],p:L}}function T(){L.r||o(L.c),L=L.p}function S(t,e){t&&t.i&&(N.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),L.c.push(()=>{N.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function B(t,e){const n=e.token={};function o(t,o,c,r){if(e.token!==n)return;e.resolved=r;let s=e.ctx;void 0!==c&&(s=s.slice(),s[c]=r);const l=t&&(e.current=t)(s);let i=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==o&&t&&(O(),I(t,1,1,()=>{e.blocks[n]=null}),T())}):e.block.d(1),l.c(),S(l,1),l.m(e.mount(),e.anchor),i=!0),e.block=l,e.blocks&&(e.blocks[o]=l),i&&q()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const n=x();if(t.then(t=>{k(n),o(e.then,1,e.value,t),k(null)},t=>{k(n),o(e.catch,2,e.error,t),k(null)}),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var c}function D(t,e){I(t,1,1,()=>{e.delete(t.key)})}function F(t,e,n,o,c,r,s,l,i,u,a,f){let d=t.length,p=r.length,h=d;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,v=new Map;for(h=p;h--;){const t=f(c,r,h),l=n(t);let i=s.get(l);i?o&&i.p(t,e):(i=u(l,t),i.c()),$.set(l,g[h]=i),l in m&&v.set(l,Math.abs(h-m[l]))}const b=new Set,k=new Set;function x(t){S(t,1),t.m(l,a,s.has(t.key)),s.set(t.key,t),a=t.first,p--}for(;d&&p;){const e=g[p-1],n=t[d-1],o=e.key,c=n.key;e===n?(a=e.first,d--,p--):$.has(c)?!s.has(o)||b.has(o)?x(e):k.has(c)?d--:v.get(o)>v.get(c)?(k.add(o),x(e)):(b.add(c),d--):(i(n,s),d--)}for(;d--;){const e=t[d];$.has(e.key)||i(e,s)}for(;p;)x(g[p-1]);return g}function H(t){t&&t.c()}function U(t,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,r),E(()=>{const n=l.map(e).filter(c);i?i.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(E)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(y.push(t),P||(P=!0,z.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,c,r,s,l,i,u=[-1]){const a=b;k(e);const d=c.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:u};let h=!1;if(p.ctx=r?r(e,d,(t,n,...o)=>{const c=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=c)&&(p.bound[t]&&p.bound[t](c),h&&J(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();c.intro&&S(e.$$.fragment),U(e,c.target,c.anchor),q()}k(a)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const R=[];function V(e,n=t){let o;const c=[];function s(t){if(r(e,t)&&(e=t,o)){const t=!R.length;for(let t=0;t<c.length;t+=1){const n=c[t];n[1](),R.push(n,e)}if(t){for(let t=0;t<R.length;t+=2)R[t][0](R[t+1]);R.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(r,l=t){const i=[r,l];return c.push(i),1===c.length&&(o=n(s)||t),r(e),()=>{const t=c.indexOf(i);-1!==t&&c.splice(t,1),0===c.length&&(o(),o=null)}}}}const W=V("/"),X=V(null),Y=V(1);const Z=function(){const{subscribe:t,update:e}=V({});return{subscribe:t,addAll:(t,n)=>e(e=>({...e,[t]:n})),add:(t,n)=>e(e=>({...e,[t]:[...e[t],{userId:t,id:Math.floor(1e5*Math.random()),title:n,completed:!1}]})),toggleCompleted:(t,n,o)=>e(e=>({...e,[t]:e[t].map(t=>t.id===n?{...t,completed:o}:t)})),delete:(t,n)=>e(e=>({...e,[t]:e[t].filter(t=>t.id!==n)}))}}();function tt(e){let n,o,c,r,s,l,i,m,b,k,x=e[0].name+"",y=e[0].email+"",w=e[0].phone+"";return{c(){n=d("div"),o=d("div"),c=p(x),r=h(),s=d("div"),l=p(y),i=h(),m=d("div"),b=p(w),$(o,"class","name svelte-1a6qxg1"),$(s,"class","email svelte-1a6qxg1"),$(m,"class","phone svelte-1a6qxg1"),$(n,"class","user-row svelte-1a6qxg1")},m(t,f,d){a(t,n,f),u(n,o),u(o,c),u(n,r),u(n,s),u(s,l),u(n,i),u(n,m),u(m,b),d&&k(),k=g(n,"click",e[1])},p(t,[e]){1&e&&x!==(x=t[0].name+"")&&v(c,x),1&e&&y!==(y=t[0].email+"")&&v(l,y),1&e&&w!==(w=t[0].phone+"")&&v(b,w)},i:t,o:t,d(t){t&&f(n),k()}}}function et(t,e,n){let o,c;l(t,X,t=>n(2,o=t)),l(t,W,t=>n(3,c=t));let{user:r}=e;return t.$set=t=>{"user"in t&&n(0,r=t.user)},[r,function(){i(X,o=r),i(W,c="todos")}]}class nt extends Q{constructor(t){super(),K(this,t,et,tt,r,{user:0})}}function ot(e){let n,c,r,s,l,i,m,b,k,x,y,w,C,_,z,P,E;return{c(){n=d("div"),c=d("div"),r=p(e[1]),s=p(" - "),l=p(e[2]),i=p(" / "),m=p(e[0]),b=h(),k=d("div"),x=d("div"),x.textContent="«",y=h(),w=d("div"),w.textContent="<",C=h(),_=d("div"),_.textContent=">",z=h(),P=d("div"),P.textContent="»",$(x,"title","First page"),$(x,"class","svelte-zf35nf"),$(w,"title","Previous page"),$(w,"class","svelte-zf35nf"),$(_,"title","Next page"),$(_,"class","svelte-zf35nf"),$(P,"title","Last page"),$(P,"class","svelte-zf35nf"),$(k,"class","pagination-buttons svelte-zf35nf"),$(n,"class","pagination svelte-zf35nf")},m(t,f,d){a(t,n,f),u(n,c),u(c,r),u(c,s),u(c,l),u(c,i),u(c,m),u(n,b),u(n,k),u(k,x),u(k,y),u(k,w),u(k,C),u(k,_),u(k,z),u(k,P),d&&o(E),E=[g(x,"click",e[5]),g(w,"click",e[3]),g(_,"click",e[4]),g(P,"click",e[6])]},p(t,[e]){2&e&&v(r,t[1]),4&e&&v(l,t[2]),1&e&&v(m,t[0])},i:t,o:t,d(t){t&&f(n),o(E)}}}function ct(t,e,n){let o;l(t,Y,t=>n(8,o=t));let c,r,{total:s}=e,{userPerPage:u}=e;return t.$set=t=>{"total"in t&&n(0,s=t.total),"userPerPage"in t&&n(7,u=t.userPerPage)},t.$$.update=()=>{384&t.$$.dirty&&n(1,c=(o-1)*u+1),385&t.$$.dirty&&n(2,r=Math.min(o*u,s))},[s,c,r,function(){o>1&&i(Y,o-=1)},function(){o<s/u&&i(Y,o+=1)},function(){i(Y,o=1)},function(){i(Y,o=Math.ceil(s/u))},u]}class rt extends Q{constructor(t){super(),K(this,t,ct,ot,r,{total:0,userPerPage:7})}}function st(t,e,n){const o=t.slice();return o[6]=e[n],o}function lt(e){let n;return{c(){n=d("div"),n.textContent="Ooops, something went wrong..."},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}function it(t){let e,n,o;[t[2],t[3]]=t[4];let c,r,s=[],l=new Map,i=t[2];const p=t=>t[6].id;for(let e=0;e<i.length;e+=1){let n=st(t,i,e),o=p(n);l.set(o,s[e]=ut(o,n))}const m=new rt({props:{total:t[3],userPerPage:dt}});return{c(){e=d("div"),n=d("div"),n.innerHTML='<div class="header-name svelte-1cncuih">Name</div> \n      <div class="header-email svelte-1cncuih">Email</div> \n      <div class="header-phone svelte-1cncuih">Phone</div>',o=h();for(let t=0;t<s.length;t+=1)s[t].c();c=h(),H(m.$$.fragment),$(n,"class","header-row svelte-1cncuih"),$(e,"class","container")},m(t,l){a(t,e,l),u(e,n),u(e,o);for(let t=0;t<s.length;t+=1)s[t].m(e,null);a(t,c,l),U(m,t,l),r=!0},p(t,n){if(1&n){const o=t[2];O(),s=F(s,n,p,1,t,o,l,e,D,ut,null,st),T()}const o={};1&n&&(o.total=t[3]),m.$set(o),[t[2],t[3]]=t[4]},i(t){if(!r){for(let t=0;t<i.length;t+=1)S(s[t]);S(m.$$.fragment,t),r=!0}},o(t){for(let t=0;t<s.length;t+=1)I(s[t]);I(m.$$.fragment,t),r=!1},d(t){t&&f(e);for(let t=0;t<s.length;t+=1)s[t].d();t&&f(c),G(m,t)}}}function ut(t,e){let n,o;const c=new nt({props:{user:e[6]}});return{key:t,first:null,c(){n=m(),H(c.$$.fragment),this.first=n},m(t,e){a(t,n,e),U(c,t,e),o=!0},p(t,e){const n={};1&e&&(n.user=t[6]),c.$set(n)},i(t){o||(S(c.$$.fragment,t),o=!0)},o(t){I(c.$$.fragment,t),o=!1},d(t){t&&f(n),G(c,t)}}}function at(e){let n;return{c(){n=d("div"),n.textContent="Loading..."},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}function ft(t){let e,n,o,c,r,s={ctx:t,current:null,token:null,pending:at,then:it,catch:lt,value:4,error:5,blocks:[,,,]};return B(c=t[0],s),{c(){e=d("h1"),e.textContent="Users",n=h(),o=m(),s.block.c(),$(e,"class","svelte-1cncuih")},m(t,c){a(t,e,c),a(t,n,c),a(t,o,c),s.block.m(t,s.anchor=c),s.mount=()=>o.parentNode,s.anchor=o,r=!0},p(e,[n]){if(t=e,s.ctx=t,1&n&&c!==(c=t[0])&&B(c,s));else{const e=t.slice();e[4]=s.resolved,s.block.p(e,n)}},i(t){r||(S(s.block),r=!0)},o(t){for(let t=0;t<3;t+=1){I(s.blocks[t])}r=!1},d(t){t&&f(e),t&&f(n),t&&f(o),s.block.d(t),s.token=null,s=null}}}const dt=5;function pt(t,e,n){let o,c;return l(t,Y,t=>n(1,o=t)),t.$$.update=()=>{2&t.$$.dirty&&n(0,c=async function(t,e){const n=await fetch(`https://jsonplaceholder.typicode.com/users?_page=${t}&_limit=${e}`);if(!n.ok)throw new Error(n.status);return[await n.json(),parseInt(n.headers.get("x-total-count"))]}(o,dt))},[c]}class ht extends Q{constructor(t){super(),K(this,t,pt,ft,r,{})}}function mt(e){let n,c,r,s,l,i,m,b,k,x=e[0].title+"";return{c(){n=d("div"),c=d("input"),s=h(),l=d("div"),i=p(x),m=h(),b=d("div"),b.textContent="×",$(c,"class","todo-completed svelte-jzmzav"),$(c,"type","checkbox"),c.checked=r=e[0].completed,$(l,"class","todo-title svelte-jzmzav"),$(b,"class","todo-delete svelte-jzmzav"),$(b,"title","Delete Todo"),$(n,"class","todo-row svelte-jzmzav")},m(t,r,f){a(t,n,r),u(n,c),u(n,s),u(n,l),u(l,i),u(n,m),u(n,b),f&&o(k),k=[g(c,"click",e[4]),g(b,"click",e[5])]},p(t,[e]){1&e&&r!==(r=t[0].completed)&&(c.checked=r),1&e&&x!==(x=t[0].title+"")&&v(i,x)},i:t,o:t,d(t){t&&f(n),o(k)}}}function gt(t,e,n){let o;l(t,X,t=>n(3,o=t));let{todo:c}=e;function r(t,e){Z.toggleCompleted(o.id,e,t.target.checked)}function s(t){Z.delete(o.id,t)}return t.$set=t=>{"todo"in t&&n(0,c=t.todo)},[c,r,s,o,t=>r(t,c.id),()=>s(c.id)]}class $t extends Q{constructor(t){super(),K(this,t,gt,mt,s,{todo:0})}}function vt(t,e,n){const o=t.slice();return o[7]=e[n],o}function bt(e){let n;return{c(){n=d("div"),n.textContent="Loading..."},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}function kt(e){let n;return{c(){n=d("div"),n.textContent="Ooops, something went wrong..."},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}function xt(t){let e,n,o,c,r=[],s=new Map,l=t[0];const i=t=>t[7].id;for(let e=0;e<l.length;e+=1){let n=vt(t,l,e),o=i(n);s.set(o,r[e]=yt(o,n))}return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=h(),n=d("form"),n.innerHTML='<input type="text" name="new-todo" placeholder="Add new todo..." required=""> \n      <input type="submit" value="Add">',$(n,"class","add-todo-row svelte-g2fsqn")},m(s,l,i){for(let t=0;t<r.length;t+=1)r[t].m(s,l);a(s,e,l),a(s,n,l),o=!0,i&&c(),c=g(n,"submit",t[4])},p(t,n){if(1&n){const o=t[0];O(),r=F(r,n,i,1,t,o,s,e.parentNode,D,yt,e,vt),T()}},i(t){if(!o){for(let t=0;t<l.length;t+=1)S(r[t]);o=!0}},o(t){for(let t=0;t<r.length;t+=1)I(r[t]);o=!1},d(t){for(let e=0;e<r.length;e+=1)r[e].d(t);t&&f(e),t&&f(n),c()}}}function yt(t,e){let n,o;const c=new $t({props:{todo:e[7]}});return{key:t,first:null,c(){n=m(),H(c.$$.fragment),this.first=n},m(t,e){a(t,n,e),U(c,t,e),o=!0},p(t,e){const n={};1&e&&(n.todo=t[7]),c.$set(n)},i(t){o||(S(c.$$.fragment,t),o=!0)},o(t){I(c.$$.fragment,t),o=!1},d(t){t&&f(n),G(c,t)}}}function wt(t){let e,n,o,c,r,s,l,i,m,b,k,x,y=t[2].name+"";const w=[xt,kt,bt],C=[];function _(t,e){return t[0]?0:t[1]?1:2}return l=_(t),i=C[l]=w[l](t),{c(){e=d("div"),n=d("h1"),n.textContent="Todos",o=h(),c=d("h3"),r=p(y),s=h(),i.c(),m=h(),b=d("div"),b.textContent="Back",$(n,"class","svelte-g2fsqn"),$(b,"class","back-button svelte-g2fsqn")},m(i,f,d){a(i,e,f),u(e,n),u(e,o),u(e,c),u(c,r),u(e,s),C[l].m(e,null),u(e,m),u(e,b),k=!0,d&&x(),x=g(b,"click",t[3])},p(t,[n]){(!k||4&n)&&y!==(y=t[2].name+"")&&v(r,y);let o=l;l=_(t),l===o?C[l].p(t,n):(O(),I(C[o],1,1,()=>{C[o]=null}),T(),i=C[l],i||(i=C[l]=w[l](t),i.c()),S(i,1),i.m(e,m))},i(t){k||(S(i),k=!0)},o(t){I(i),k=!1},d(t){t&&f(e),C[l].d(),x()}}}function Ct(t,e,n){let o,c,r,s,u;return l(t,Z,t=>n(5,o=t)),l(t,X,t=>n(2,c=t)),l(t,W,t=>n(6,r=t)),t.$$.update=()=>{37&t.$$.dirty&&(n(0,s=o[c.id]),s||async function(t){const e=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${t}`);if(!e.ok)throw new Error(e.status);const n=await e.json();Z.addAll(t,n)}(c.id).catch(t=>n(1,u=t)))},[s,u,c,function(){i(W,r="/")},function(t){t.preventDefault(),Z.add(c.id,t.target["new-todo"].value),t.target.reset()}]}class _t extends Q{constructor(t){super(),K(this,t,Ct,wt,r,{})}}function zt(e){let n;return{c(){n=d("div"),n.textContent="404 - Not found"},m(t,e){a(t,n,e)},i:t,o:t,d(t){t&&f(n)}}}function Pt(t){let e;const n=new _t({});return{c(){H(n.$$.fragment)},m(t,o){U(n,t,o),e=!0},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){I(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function Et(t){let e;const n=new ht({});return{c(){H(n.$$.fragment)},m(t,o){U(n,t,o),e=!0},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){I(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function Mt(t){let e,n,o,c;const r=[Et,Pt,zt],s=[];function l(t,e){return"/"===t[0]?0:"todos"===t[0]?1:2}return n=l(t),o=s[n]=r[n](t),{c(){e=d("main"),o.c(),$(e,"class","svelte-11dk13s")},m(t,o){a(t,e,o),s[n].m(e,null),c=!0},p(t,[c]){let i=n;n=l(t),n!==i&&(O(),I(s[i],1,1,()=>{s[i]=null}),T(),o=s[n],o||(o=s[n]=r[n](t),o.c()),S(o,1),o.m(e,null))},i(t){c||(S(o),c=!0)},o(t){I(o),c=!1},d(t){t&&f(e),s[n].d()}}}function jt(t,e,n){let o;return l(t,W,t=>n(0,o=t)),[o]}return new class extends Q{constructor(t){super(),K(this,t,jt,Mt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

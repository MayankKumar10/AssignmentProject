var D=Object.defineProperty;var H=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var L=(n,t,r)=>t in n?D(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,N=(n,t)=>{for(var r in t||(t={}))I.call(t,r)&&L(n,r,t[r]);if(H)for(var r of H(t))w.call(t,r)&&L(n,r,t[r]);return n};import{r as v,p as c,q as e,y as M,bd as P,T as j,X as O,ag as S,$ as R,O as _,w as T,as as k,Y as q,k as $,l as F}from"./index.61feb879.js";const W=function({labelNode:t,children:r,open:a}){const[d,o]=v.exports.useState(a||!1);return c("div",{className:`${B} toggle-item`,children:[c("div",{className:"toggle-nav",onClick:()=>o(!d),children:[t,e(M,{className:"open-icon "+(d?"open":""),name:"Arrow"})]}),e(P,{visible:d,children:r})]})},B="tcj4aj0";const C=j(function({br:n,en:t,id:r,kr:a,vi:d,ru:o,isCoinlimit:u=!1,isSuport:h=!1}){const l=v.exports.useRef(null),i=O(),f=s=>s==="pt-BR"?n:s==="id-ID"?r:s==="ko-KR"?a:s==="vi-VN"?d:s==="ru-RU"?o:t,p=new DOMParser().parseFromString(f(S.lng),"text/html").querySelectorAll("section"),g=()=>{let s="";for(let m=0;m<p.length;m++)s+=p[m].innerHTML;return s};return v.exports.useEffect(()=>{l.current&&l.current.addEventListener("click",s=>{const b=s.target.getAttribute("href")||"";/^\//.test(b)&&(s.preventDefault(),i(b))})},[]),R.isMobile?e("div",{ref:l,children:e(V,{br:n,en:t,id:r,kr:a,vi:d,ru:o,isCoinlimit:u,isSuport:h})}):c("div",{className:_("doc-page",U),children:[h&&e(A,{}),e("div",{className:"item",ref:l,dangerouslySetInnerHTML:{__html:g()}}),u&&e("div",{className:"item",children:e(x,{})})]})}),x=()=>{const n=N({},T.dict),t=r=>new q(10).pow(-r.precision).toFixed(r.precision);return c(k,{stripe:!0,hover:!1,children:[e("thead",{children:c("tr",{children:[e("th",{children:e("span",{children:"Currency"})}),e("th",{children:e("span",{children:"Accuracy Limit"})})]})}),e("tbody",{children:Object.keys(n).map((r,a)=>c("tr",{children:[e("td",{children:e("span",{children:T.getAlias(n[r].currencyName)})}),e("td",{children:e("span",{children:t(n[r]).toString()})})]},a))})]})},A=()=>e("p",{className:`${E} icon-p`,children:e("a",{href:"https://help.bc.game/en/",target:"_blank",rel:"noopener noreferrer",children:e(M,{name:"Support"})})}),E="sbu3o0g",V=function({br:n,en:t,isCoinlimit:r=!1,isSuport:a=!1}){const o=new DOMParser().parseFromString(S.lng==="pt-BR"?n:t,"text/html").querySelectorAll("section"),u=()=>{let l="";for(let i=0;i<o.length;i++)l+=o[i].innerHTML;return l},h=()=>a?null:Array.from(o).map((l,i)=>{var p;const f=((p=l.querySelector("h2"))==null?void 0:p.innerHTML)||"",y=l.querySelectorAll("p, .content");return c(W,{labelNode:e("h2",{dangerouslySetInnerHTML:{__html:f}}),open:i===0,children:[Array.from(y).map((g,s)=>e("div",{className:"content",dangerouslySetInnerHTML:{__html:g.innerHTML}},s)),r&&e(x,{})]},"section-"+i)});return c("div",{className:_("doc-page",K),children:[h(),a&&c("div",{className:"support-info",children:[e(A,{}),e("div",{dangerouslySetInnerHTML:{__html:u()}})]})]})};var z=C;const K="mx9n9ro";$({cl1:["#dfe2e6","#31373d"],cl2:[F("#24262b",.6),"#f5f6fa"]});const U="sav515t";export{z as H};

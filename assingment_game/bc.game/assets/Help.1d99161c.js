var A=Object.defineProperty,I=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var f=(e,a,t)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))v.call(a,t)&&f(e,t,a[t]);if(m)for(var t of m(a))L.call(a,t)&&f(e,t,a[t]);return e},P=(e,a)=>I(e,T(a));var E=(e,a)=>{var t={};for(var l in e)v.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&m)for(var l of m(e))a.indexOf(l)<0&&L.call(e,l)&&(t[l]=e[l]);return t};import{bk as s,E as n,c1 as O,z as V,r,c2 as b,u as D,c3 as x,p,q as o,a6 as w,R as d,X as R,K as C,F as G,B as N,k as S,l as F,O as B,c4 as z,c5 as q,y as j,aV as M}from"./index.61feb879.js";const W=s(()=>n(()=>import("./index.b597acd1.js"),["assets/index.b597acd1.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),H=s(()=>n(()=>import("./index.d0da9d4b.js"),["assets/index.d0da9d4b.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),K=s(()=>n(()=>import("./index.e07c741c.js"),["assets/index.e07c741c.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),U=s(()=>n(()=>import("./index.1558b0bd.js"),["assets/index.1558b0bd.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),X=s(()=>n(()=>import("./index.126007ee.js"),["assets/index.126007ee.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),k=s(()=>n(()=>import("./index.d0aca0a9.js"),["assets/index.d0aca0a9.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),J=s(()=>n(()=>import("./index.86cb8bf9.js"),["assets/index.86cb8bf9.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),Q=s(()=>n(()=>import("./index.605efd19.js"),["assets/index.605efd19.js","assets/index.61feb879.js","assets/index.c006919b.css","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css"])),Y=s(()=>n(()=>import("./index.bae0ddfb.js"),["assets/index.bae0ddfb.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),Z=s(()=>n(()=>import("./index.735e968d.js"),["assets/index.735e968d.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),$=s(()=>n(()=>import("./index.10191e78.js"),["assets/index.10191e78.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),ee=s(()=>n(()=>import("./index.c2bb5bba.js"),["assets/index.c2bb5bba.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),te=s(()=>n(()=>import("./index.b2b1cdba.js"),["assets/index.b2b1cdba.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),ae=s(()=>n(()=>import("./index.2559521f.js"),["assets/index.2559521f.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"])),oe=s(()=>n(()=>import("./index.9dae8e0c.js"),["assets/index.9dae8e0c.js","assets/HelpPage.64e3ebb8.js","assets/HelpPage.c5d03e05.css","assets/index.61feb879.js","assets/index.c006919b.css"]));function le(e){const a=O(),[t,l]=V({loading:!0,fairLinkDom:null,validateLink:""});return r.exports.useEffect(()=>{l({loading:!0});try{const i=b(a.routes,{pathname:e});if(i&&i.length>0){const _=i.length;i[_-1].route.element.props.children.props.game().then(c=>{const h=b(a.routes,{pathname:c.config.fairLink});if(h&&h.length>0){const y=h[0].route.element.props.children;l({loading:!1,fairLinkDom:y,validateLink:c.config.validateLink})}})}else l({loading:!1,fairLinkDom:null,validateLink:""})}catch(i){l({loading:!1,fairLinkDom:null,validateLink:""})}},[e]),t}const se=/^http.*/;function ne(){const e=D(),{gameList:a}=x(),[t,l]=r.exports.useState(""),[i,_]=r.exports.useState([]);return r.exports.useEffect(()=>{if(a.length>0){const u=a.map(c=>({label:c.fullName,value:c.gameUrl}));_(u),l(u[0].value)}},[a]),a.length===0||!t?null:p("div",{className:re,children:[o("p",{className:"title",children:e("page.share.game_label")}),o(w,{value:t,onChange:l,options:i}),o("p",{className:"title",children:e("common.fairness")}),o(ie,{path:t})]})}const ie=d.memo(function({path:e}){const a=R(),t=le(e);if(t.loading)return null;const l=i=>{se.test(i)?window.open(i):a(i)};return!t.fairLinkDom||!t.validateLink?o(C,{}):p(G,{children:[d.cloneElement(t.fairLinkDom,P(g({},t.fairLinkDom.props),{bodyLock:!1})),o(N,{type:"conic2",onClick:()=>l(t.validateLink),children:"Validate"})]})});S({cl1:["#dfe3e6","#31373d"],cl2:[F("#24262b",.5),"#f5f6fa"]});const re="s8vbee2";const ce=d.forwardRef((l,t)=>{var i=l,{className:e}=i,a=E(i,["className"]);return o("div",g({ref:t,className:B(pe,e)},a))}),pe="g10v6xhz";function ue(){const e=D(),a=R(),t=z();r.exports.useEffect(()=>{t.pathname==="/help"&&a("/help/provably-fair",{replace:!0})},[t.pathname]);const l=r.exports.useMemo(()=>o(q,{prex:"/help/",routes:[{label:e("common.faq_fairness"),path:"provably-fair",element:o(ne,{})},{label:e("title.help_terms"),path:"terms-service",element:o(oe,{})},{label:e("title.terms_sports"),path:"terms-sports",element:o(ae,{})},{label:e("title.deposit_bonus_terms"),path:"bonus",element:o(H,{})},{label:"Coin Accuracy Limit",path:"coinlimit",element:o(K,{})},{label:e("title.help_contactus"),path:"contactus",element:o(U,{})},{label:e("title.help_fee"),path:"fee",element:o(X,{})},{label:e("title.help_googlecheck"),path:"googlecheck",element:o(J,{})},{label:e("title.help_normalpro"),path:"faq",element:o(Q,{})},{label:e("title.help_passcurrency"),path:"passcurrency",element:o(Y,{})},{label:e("title.help_reglog"),path:"reglog",element:o($,{})},{label:e("title.help_swappolicy"),path:"swappolicy",element:o(te,{})},{label:e("title.help_gamebleaware"),path:"gameble-aware",element:o(k,{})},{label:e("title.help_protectminors"),path:"protect-minors",element:o(k,{})},{label:e("title.providers"),path:"providers",element:o(Z,{})},{label:e("title.help_aml"),path:"aml",element:o(W,{})},{label:e("title.help_selfexclusion"),path:"self-exclusion",element:o(ee,{})}]}),[]);return p("div",{id:"helpcenter",children:[p(ce,{children:[p("p",{className:"title",children:[o(j,{name:"Fairness"}),o("span",{className:"ttc",children:e("title.user_agreement").toLowerCase()})]}),o(M,{onClick:()=>a(-1)})]}),l]})}export{ue as default};

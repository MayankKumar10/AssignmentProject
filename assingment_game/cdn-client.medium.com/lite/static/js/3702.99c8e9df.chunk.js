(self.webpackChunklite=self.webpackChunklite||[]).push([[3702],{75374:(e,t,n)=>{"use strict";n.d(t,{f:()=>Z,N:()=>X});var i=n(63038),a=n.n(i),r=n(67294),o=n(5977),l=n(38352),c=n(77355),u=n(8431),s=function(e){var t=e.title;return r.createElement(c.x,{width:"100%",padding:"0 20px"},r.createElement(c.x,{display:"flex",justifyContent:"space-between",marginBottom:"8px"},r.createElement(u.Lh,null,t)),r.createElement(l.oK,{paddingTopBottom:"0"}))},d=n(35473),m=n(14818),p=n(93310),f=n(87691),v=n(18627),g=n(14646),y=n(78249),h=n(87498),b=n(26679),k={display:"block",textAlign:"left",width:"252px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},x={fill:"rgba(0, 0, 0, 0.54)",display:"block",marginLeft:"5px",marginRight:"6px"},I=function(e){var t=e.type,n=e.name,i=e.url,a=e.imageId,o=e.query,l=e.queryId,u=e.index,s=e.itemId,I=e.algoliaIndexName,w=e.isFocus,E=e.isLastItem,C=e.description,N=(0,v.Av)(),O=(0,g.I)(),S=(0,b.Ir)({queryId:l,indexName:I}),P=r.useRef(null),T=r.useCallback((function(e){N.event("search.predictiveResultClicked",{type:t.toLowerCase(),query:o,path:e.currentTarget.href,rank:0,total:0}),S(s,u)}),[o,t,S,s,u]),F=r.useMemo((function(){return"TAG"===t?r.createElement("div",{className:O(x)},r.createElement(y.Z,null)):"COLLECTION"===t?r.createElement(m.z,{miroId:a||"",freezeGifs:!1,alt:n||"Publication avatar",diameter:24}):"USER"===t?r.createElement(m.z,{miroId:a||h.gG,alt:n||"",diameter:24,freezeGifs:!1}):r.createElement(r.Fragment,null)}),[n,a]),D=r.useMemo((function(){return r.createElement(f.F,{color:"DARKER",scale:"M"},r.createElement("span",{className:O(k)},n))}),[n]);return r.useEffect((function(){w&&P.current&&P.current.focus()}),[w,P.current]),r.createElement(c.x,{display:"flex",tag:"li",paddingLeft:"20px",paddingRight:"12px",marginBottom:E?void 0:"12px"},r.createElement(p.r,{ref:P,tabIndex:-1,linkStyle:"SUBTLE",href:i,onClick:T},r.createElement(d.Y,{avatar:F,title:D,description:C&&r.createElement(c.x,{tag:"span",textAlign:"left"},C),clampDescription:1})))},w=n(60671),E=n(75221),C=n(50458),N=n(63459),O={width:"252px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},S=function(e){var t=e.post,n=e.queryId,i=e.index,a=e.isEntityRouter,o=e.isFocus,l=(0,g.I)(),u=r.useRef(null),s=(0,C.jVf)({id:t.postId},a),d=(0,b.Ir)({queryId:n,indexName:E.uw.POST}),m=r.useCallback((function(){d(t.objectID,i)}),[d,i,t.objectID]);return r.useEffect((function(){o&&u.current&&u.current.focus()}),[o,u.current]),r.createElement(c.x,{display:"flex",tag:"li",paddingLeft:"20px",paddingRight:"12px"},r.createElement(c.x,{marginBottom:"16px"},r.createElement(p.r,{ref:u,onClick:m,tabIndex:-1,linkStyle:"SUBTLE",href:s},r.createElement(f.F,{scale:"S",color:"DARKER"},r.createElement("div",{className:l(O)},t.title)),r.createElement(f.F,{scale:"S"},r.createElement(N.E,{timestamp:t.latestPublishedAt})))))};function P(e){var t=e.data,n=e.refIndex,i=e.isLastPopover,a=e.query,o=t.collections;return r.createElement(r.Fragment,null,r.createElement(s,{title:"Publications"}),r.createElement(c.x,{marginTop:"12px",marginBottom:i?void 0:"15px"},o.hits.map((function(e,t){var i=e.collectionId,l=e.objectID,c=e.imageId,u=e.name;return r.createElement(I,{isFocus:n===t,key:i,algoliaIndexName:E.uw.COLLECTION,index:t,itemId:l,queryId:o.queryId,type:"COLLECTION",name:u,imageId:c,url:(0,C.RHb)(i),query:a,isLastItem:o.hits.length-1===t})}))))}function T(e){var t=e.data,n=e.authDomain,i=e.entityType,a=e.refIndex,o=e.isLastPopover,l=e.query,u=t.tags;return r.createElement(r.Fragment,null,r.createElement(s,{title:"Tags"}),r.createElement(c.x,{marginTop:"12px",marginBottom:o?void 0:"15px"},u.hits.map((function(e,t){var o=e.displayText,c=e.objectID,s=e.tagSlug;return r.createElement(I,{isFocus:a===t,key:s,type:"TAG",algoliaIndexName:E.uw.TAG,index:t,itemId:c,queryId:u.queryId,name:o,url:(0,C.HYG)(s,n,i),query:l,isLastItem:u.hits.length-1===t})}))))}function F(e){var t=e.data,n=e.authDomain,i=e.refIndex,a=e.isLastPopover,o=e.query,l=t.users;return r.createElement(r.Fragment,null,r.createElement(s,{title:"People"}),r.createElement(c.x,{marginTop:"12px",marginBottom:a?void 0:"15px"},l.hits.map((function(e,t){var a=e.imageId,c=e.objectID,u=e.name,s=e.userId,d=e.username,m=(0,C.Qyn)(d,n);return r.createElement(I,{isFocus:i===t,key:s,type:"USER",algoliaIndexName:E.uw.USER,index:t,queryId:l.queryId,itemId:c,imageId:a,name:u,url:m,query:o,isLastItem:l.hits.length-1===t})}))))}function D(e){var t=e.data,n=e.isCollection,i=e.refIndex,a=e.entityType,o=e.isLastPopover,l=e.isCatalog,u=t.posts,d="Profile";l?d="List":n&&(d="Publication");var m="From this ".concat(d);return r.createElement(r.Fragment,null,r.createElement(s,{title:m}),r.createElement(c.x,{marginTop:"12px",marginBottom:o?void 0:"15px"},u.hits.map((function(e,t){return r.createElement(S,{key:"story-item-".concat(t),post:e,index:t,queryId:u.queryId,isEntityRouter:a!==w.Cr.DEFAULT,isFocus:i===t})}))))}function q(e){var t=e.data,n=e.authDomain,i=e.query,a=e.entityType,o=e.focusIndex,u=e.isCollection,s=e.isCatalog;if(!i)return null;var d=t.collections,m=t.tags,p=t.users,f=t.posts,v=p.hits.length>0,g=d.hits.length>0,y=m.hits.length>0,h=f.hits.length>0;return v||g||y||h?r.createElement(c.x,{width:"316px"},r.createElement(l.mX,{padding:"30px"},h&&r.createElement(D,{data:t,isCollection:u,isCatalog:s,isLastPopover:!g&&!y&&!v,refIndex:o,query:i,entityType:a}),v&&r.createElement(F,{data:t,authDomain:n,refIndex:o,isLastPopover:!g&&!y,query:i}),g&&r.createElement(P,{data:t,refIndex:null!==o?o-p.hits.length:null,isLastPopover:!y,query:i}),y&&r.createElement(T,{data:t,authDomain:n,entityType:a,refIndex:null!==o?o-p.hits.length-d.hits.length:null,isLastPopover:!0,query:i}))):null}var _=n(25735),L=n(73917),R=n(31889),j=n(43487),A=n(21638),U=n(13241),B=n(27460),V=n(71341),H=n(68894),Q=n(42140),M=function(e){return function(t){return{display:"flex",border:"1px solid ".concat(t.baseColor.border.lighter),borderRadius:"20px",width:e?"100%":"inherit"}}},G=function(e){return{boxShadow:"0px 2px 10px 0px #00000026",border:"1px solid ".concat(e.baseColor.background.normal)}},K=function(e){return{":after":{boxShadow:"-1px -1px 1px -1px #00000026",border:"1px solid ".concat(e.baseColor.background.normal)}}},z=function(e){return{border:"none",outline:"none",fontFamily:A.k2,fontSize:"14px",lineHeight:"20px",marginRight:"20px",width:"100%",padding:"8px 0 11px",backgroundColor:"transparent",color:e.baseColor.text.normal,"::placeholder":{color:e.baseColor.text.lighter}}},Y="searchResults";function X(e){var t=e.searchPlaceholder,n=e.isPopoverVisible,i=e.onQueryChange,l=e.entityType,u=e.authDomain,s=e.children,d=e.onKeyDown,m=e.watchQueryUrl,p=e.fullWidth,f=e.collectionSlug,v=e.mainSearchCategory,y=(0,g.I)(),h=(0,R.F)(),k=(0,o.TH)(),x=(0,Q.dD)(k.search).q,I=r.useRef(null),w=r.useState(m?x:null),E=a()(w,2),N=E[0],O=E[1],S=(0,j.v9)((function(e){return e.navigation.hostname})),P=(0,C.gxh)({category:v,collectionSlug:f}),T=(0,V.h)({queryParams:{q:null!=N?N:""}}),F=r.useCallback((function(e){O(e.target.value),i(e.target.value)}),[i]),D=r.useCallback((function(e){"Enter"===e.key&&N&&(0,b._)(N),d?d(e):"Enter"===e.key?S===u?T(P):window.location.assign("https://".concat(u).concat(P,"?q=").concat(N)):"ArrowDown"===e.key&&I.current&&I.current.blur()}),[I.current,N,l,u,S,P,T,d]);return r.useEffect((function(){x&&m&&(O(x),i(x))}),[x,i,m]),r.createElement("div",{className:y(M(!!p))},s,r.createElement(c.x,{tag:"span",padding:"7px 7px 6px 8px"},r.createElement(U.Z,{fill:h.baseColor.fill.darker})),r.createElement("input",{role:"combobox","aria-controls":Y,"aria-expanded":n?"true":"false","aria-label":"search",tabIndex:0,className:y(z),placeholder:t,ref:I,value:null!=N?N:"",onChange:F,onKeyDown:D}))}function Z(e){var t=e.algoliaIndexes,n=e.algoliaQueryContext,i=e.mainSearchCategory,o=e.publisher,l=e.catalogId,c=e.hitsPerPagePerIndex,u=(0,v.Av)(),s=(0,H.O)(!1),d=a()(s,3),m=d[0],p=d[1],f=d[2],g=(0,j.v9)((function(e){return e.config.productName})),y=(0,j.v9)((function(e){return e.config.algolia})),h=(0,j.v9)((function(e){return e.config.authDomain})),b=(0,j.v9)((function(e){return e.client.routingEntity.type})),k=r.useState(null),x=a()(k,2),I=x[0],w=x[1],E=r.useState(""),C=a()(E,2),N=C[0],O=C[1],S="Collection"===(null==o?void 0:o.__typename),P="Collection"===(null==o?void 0:o.__typename)?o.slug:void 0,T=!!(0,_.VB)({name:"can_view_unfiltered_search",placeholder:!1}),F=!T,D=(0,B.xY)(n,N,t,{filterForHighQuality:F,publisher:o,catalogId:l,hitsPerPagePerIndex:c}),R=a()(D,2),A=R[0],U=R[1],V=r.useCallback((function(e){O(e),e||f(),w(null),m||(p(),u.event("search.predictiveOpened",{})),u.event("search.predictiveQueried",{query:e})}),[T,f,p,y,N]),Q=r.useCallback((function(){return r.createElement(q,{productName:g,entityType:b,authDomain:h,query:N,data:A,focusIndex:I,isCollection:S,isCatalog:!!l})}),[g,b,h,N,A,I,S]);return r.useEffect((function(){if(m){var e=function(e){var t="ArrowUp"===e.key,n="ArrowDown"===e.key;if(t||n){e.preventDefault();var i=U-1;if(null===I&&n)w(0);else if(null!==I){var a=(I+(n?1:-1))%U;w(a<0?i:a)}}};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}}),[I,m,U]),r.createElement(X,{authDomain:h,entityType:b,isPopoverVisible:U>0&&m,searchPlaceholder:"Search",onQueryChange:V,collectionSlug:P,mainSearchCategory:i},r.createElement(L.J,{ariaId:Y,isVisible:U>0&&m,hide:f,arrowPadding:{left:32},popoverRenderFn:Q,setMaxHeight:!0,popoverRules:G,arrowRules:K,placement:"bottom-start"},r.createElement(r.Fragment,null)))}},19308:(e,t,n)=>{"use strict";n.d(t,{b:()=>l,I:()=>c});var i=n(319),a=n.n(i),r=n(68216),o=n(98007),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_collection"}}]}}].concat(a()(r.nf.definitions),a()(o.Os.definitions))}},82405:(e,t,n)=>{"use strict";n.d(t,{b3:()=>T,Iq:()=>F,Fp:()=>D});var i=n(63038),a=n.n(i),r=n(28655),o=n.n(r),l=n(92471),c=n(21919),u=n(67294),s=n(5977),d=n(77520),m=n(74928),p=n(25550),f=n(25267),v=n(67701),g=n(26350),y=n(98007),h=n(50563),b=n(93310),k=n(77355),x=n(47230),I=n(18627),w=n(66411),E=n(92661),C=n(43487),N=n(50458),O=n(68216);function S(){var e=o()(["\n  fragment CollectionFollowButton_collection on Collection {\n    __typename\n    id\n    name\n    slug\n    ...collectionUrl_collection\n    ...SusiClickable_collection\n  }\n  ","\n  ","\n"]);return S=function(){return e},e}function P(){var e=o()(["\n  fragment CollectionFollowButton_post on Post {\n    __typename\n    id\n  }\n"]);return P=function(){return e},e}var T=(0,l.Ps)(P()),F=(0,l.Ps)(S(),O.nf,y.Os),D=function(e){var t,n=e.buttonSize,i=e.buttonStyleFn,r=e.collection,o=e.post,l=e.simpleLink,y=e.susiEntry,N=void 0===y?"follow_card":y,O=e.preventParentClick,S=(0,C.v9)((function(e){return e.config.authDomain})),P=(0,p.r)().viewerId,T=(0,I.Av)(),F=(0,w.pK)(),D=(0,s.TH)(),_=(0,E.$B)(D.pathname),L=null==_||null===(t=_.route)||void 0===t?void 0:t.name,R=(0,v.gY)(r),j=R.viewerEdge,A=R.loading,U=function(e,t){var n=(0,c.D)(m.e),i=a()(n,1)[0];return u.useCallback((function(){return i({variables:{id:e},optimisticResponse:{followCollection:{__typename:"Collection",id:e,name:"",viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(t),isFollowing:!0}}},update:function(n){n.modify({id:"User:".concat(t),fields:{missionControl:(0,h.im)("followedCollections",!0),followingCollectionConnection:(0,h.Hc)(e)}})}})}),[e])}(r.id,P),B=function(e,t){var n=(0,c.D)(m.X),i=a()(n,1)[0];return u.useCallback((function(){return i({variables:{id:e},optimisticResponse:{unfollowCollection:{__typename:"Collection",id:e,name:"",viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(t),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(t),fields:{missionControl:(0,h.im)("followedCollections",!1)}})}})}),[e])}(r.id,P),V=u.useCallback((function(e){O&&e.preventDefault(),null!=j&&j.isFollowing||(T.event("collection.followed",{collectionId:r.id,followSource:F}),U())}),[r,j,O,F]),H=u.useCallback((function(e){O&&e.preventDefault(),T.event("collection.unfollowed",{collectionId:r.id,followSource:F}),B()}),[O,F]),Q=!(null==j||!j.isFollowing),M=i?i(!!Q):Q?"OBVIOUS":"STRONG";return l?u.createElement(b.r,{onClick:Q?H:V},u.createElement(k.x,{display:"flex",flexDirection:"row"},Q?"Unfollow publication":"Follow publication")):u.createElement(f.I,null,(function(e){return e?u.createElement(x.z,{size:n,onClick:Q?B:U,buttonStyle:M,loading:A},Q?"Following":"Follow"):u.createElement(g.R,{collection:r,buttonStyle:Q?"OBVIOUS":"STRONG",isButton:!0,buttonSize:"REGULAR",operation:"register",actionUrl:q(S,r,o)||"",susiEntry:N,pageSource:(0,d.x)(L,"register")},Q?"Following":"Follow")}))},q=function(e,t,n){return t.slug&&(n&&n.id?(0,N.TAb)(e,t.slug,n.id):(0,N.LlO)(e,t.slug))}},27460:(e,t,n)=>{"use strict";n.d(t,{tp:()=>h,xY:()=>O});var i,a=n(59713),r=n.n(a),o=n(12297),l=n.n(o),c=n(94301),u=n.n(c),s=n(67294),d=n(27517),m=n(6443),p=n(86994),f=n(3184),v=n(43487);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e[e.User=1]="User",e[e.Author=2]="Author"}(i||(i={}));var h={numericFilters:"peopleType!=".concat(i.Author)},b={collection:"collections",post:"posts",user:"users",tag:"tags"},k="/1/indexes/*/queries",x="user",I="collection",w="post",E="numericFilters";function C(e,t){return"".concat(e,"-").concat(t)}var N={collections:{hits:[]},posts:{hits:[]},users:{hits:[]},tags:{hits:[]}};function O(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=s.useRef(""),r=i.filterForHighQuality,o=i.filters,c=i.publisher,g=i.catalogId,O=i.hitsPerPagePerIndex,S=(null==c?void 0:c.id)||null,P=(0,m.H)(),T=P.value,F=P.loading,D=(0,p.c)(),q=D.loading,_=D.isBot,L=F||q,R=(0,d.I0)(),j=(0,v.v9)((function(e){return e.config.algolia})),A=(0,v.v9)((function(e){var n;return null===(n=e.algolia.queries[t])||void 0===n?void 0:n.status})),U="https://".concat(j.appId).concat(j.host).concat(k),B=C(e,t),V=C(e,a.current),H=(0,v.b$)((function(e){var t;return null===(t=e.algolia.queries[V])||void 0===t?void 0:t.data})),Q=(0,v.b$)((function(e){var t;return null===(t=e.algolia.queries[B])||void 0===t?void 0:t.data})),M=Q||H||N;s.useEffect((function(){Q&&(a.current=t)}),[t,Q,a.current]);var G=s.useMemo((function(){return l()(Object.values(M).map((function(e){return e.hits.length})))}),[M]),K=["web","inline"],z=s.useMemo((function(){var e=n.map((function(e){var n=e===w&&g,i=y({query:t,hitsPerPage:O&&O[e]||3,numericFilters:"",clickAnalytics:!L&&!_,analyticsTags:n?K.concat(["list"]):K},o);return e===w&&(g?i.filters="_tags:'list_".concat(g,"'"):S&&(i.facetFilters="Collection"===(null==c?void 0:c.__typename)?"collectionId:".concat(S):"authorId:".concat(S))),"tag"===e?i[E]="postCount>=1":e===x&&r?i.filters="highQualityUser:true":e===I&&r?i.filters="isHighQualityCollection:true":e===w&&(i.attributesToRetrieve="title,postId,latestPublishedAt"),e===x&&(i[E]=h.numericFilters),{indexName:j.indexPrefix+e,params:Object.keys(i).map((function(e){return e+"="+i[e]})).join("&")}}));return JSON.stringify({requests:e})}),[j,L,_,t,T,r,o]),Y=s.useCallback((function(e){var t=e.results,i={users:{hits:[]},collections:{hits:[]},tags:{hits:[]},posts:{hits:[]}};return n.forEach((function(e,n){var a,r;i[b[e]]={hits:(null===(a=t[n])||void 0===a?void 0:a.hits)||[],queryId:null===(r=t[n])||void 0===r?void 0:r.queryID}})),i}),[n]);return s.useEffect((function(){if(t&&!L&&"loading"!==A&&"error"!==A&&"success"!==A){var e={"X-Algolia-API-Key":j.apiKeySearch,"X-Algolia-Application-Id":j.appId};T&&(e["X-Algolia-UserToken"]=T.id),R((0,f.Zl)(B)),u()(U,{method:"POST",headers:e,body:z}).then((function(e){return e.json()})).then((function(e){e.status>=400?R((0,f.TT)(B)):R((0,f.Yy)(B,Y(e)))})).catch((function(){R((0,f.TT)(B))}))}}),[U,j,z,T,L,t,A,Y,B]),[M,G]}},71341:(e,t,n)=>{"use strict";n.d(t,{h:()=>o});var i=n(67294),a=n(5977),r=n(66411);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.k6)(),n=(0,r.pK)(),o=i.useCallback((function(i){var a=new URLSearchParams;if(n&&a.set("source",n),e.queryParams)for(var r in e.queryParams)a.set(r,e.queryParams[r]);var o={pathname:i,search:a.toString()?"?".concat(a.toString()):"",hash:e.hash,state:e.state};e.replace?t.replace(o):t.push(o)}),[t,n,e.queryParams,e.hash,e.state]);return o}},26679:(e,t,n)=>{"use strict";n.d(t,{_:()=>O,KM:()=>N,DL:()=>S,Bm:()=>T,IB:()=>b,_u:()=>P,Ir:()=>C,VR:()=>E});var i=n(319),a=n.n(i),r=n(63038),o=n.n(r),l=n(59713),c=n.n(l),u=n(21919),s=n(67294),d=n(36405),m=n(75221),p=n(78285),f=n(28959),v=n(27460),g={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"SearchClickEventMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"queryId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"indexName"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AlgoliaIndexName"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectIds"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"positions"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"searchClickEvent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"queryId"},value:{kind:"Variable",name:{kind:"Name",value:"queryId"}}},{kind:"Argument",name:{kind:"Name",value:"indexName"},value:{kind:"Variable",name:{kind:"Name",value:"indexName"}}},{kind:"Argument",name:{kind:"Name",value:"objectIds"},value:{kind:"Variable",name:{kind:"Name",value:"objectIds"}}},{kind:"Argument",name:{kind:"Name",value:"positions"},value:{kind:"Variable",name:{kind:"Name",value:"positions"}}}]}]}}]};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={users:"search_user",posts:"search_post",tags:"search_tag",publications:"search_publication",none:"search_post"},k={filters:"highQualityUser:true OR writtenByHighQulityUser:true"},x={filters:"writtenByHighQualityUser:true"},I=new f.Z("recent_searches"),w="queries";function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isRecommendations,n=e.canViewUnfiltered,i=void 0!==n&&n,a=!!(0,d.P5)("can_view_unfiltered_search"),r=!i&&!a,o=s.useMemo((function(){var e=["web"];return t&&e.push("recommendations"),{clickAnalytics:!0,analyticsTags:e}}),[t]),l=s.useMemo((function(){return h(h({},r?k:{}),v.tp)}),[r]),u=s.useMemo((function(){return r?x:{}}),[r]);return s.useMemo((function(){var e;return e={},c()(e,m.uw.COLLECTION,o),c()(e,m.uw.POST,h(h({},u),o)),c()(e,m.uw.USER,h(h({},l),o)),c()(e,m.uw.TAG,h({numericFilters:"postCount>=1"},o)),c()(e,m.uw.BOOK_EDITION,{}),e}),[o,u,l])}function C(e){var t=e.queryId,n=e.indexName,i=(0,u.D)(g),a=o()(i,1)[0];return s.useCallback((function(e,i){t&&e&&a({variables:{queryId:t,indexName:n,positions:[i+1],objectIds:[e]}})}),[a,t,n])}function N(){return I.get(w)||[]}function O(e){var t=N();if(e){var n=[e].concat(a()(t.filter((function(t){return t!==e}))));I.set(w,n.slice(0,10))}}function S(e){var t=N();I.set(w,t.filter((function(t){return e!==t})))}function P(e,t,n){var i=new URLSearchParams(t.location.search);e?i.set("q",e):i.delete("q");var a=i.toString();n((0,p.kO)(a)),t.push({search:a})}function T(e){var t=e.split("/"),n=t.indexOf("search"),i=n>-1?t[n+1]:null;return i?["users","tags","posts","publications"].includes(i)?i:null:"none"}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3702.99c8e9df.chunk.js.map
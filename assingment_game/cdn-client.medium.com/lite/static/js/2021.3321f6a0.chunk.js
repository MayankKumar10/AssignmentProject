(self.webpackChunklite=self.webpackChunklite||[]).push([[2021],{41987:(e,n,i)=>{"use strict";i.d(n,{e:()=>y,t:()=>b});var a=i(63038),t=i.n(a),l=i(67294),o=i(6479),r=i.n(o),d=i(64718),m=i(19262),s=i(319),u=i.n(s),c=i(69387),k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowersDialog_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"followersUserConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"DialogUserEntity_user"}}]}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"next"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"to"}},{kind:"Field",name:{kind:"Name",value:"from"}},{kind:"Field",name:{kind:"Name",value:"limit"}}]}}]}}]}}]}}].concat(u()(c.U.definitions))},v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowersDialogUserQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersDialog_publisher"}}]}}]}}].concat(u()(k.definitions))},f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowersDialogPublicationQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersDialog_publisher"}}]}}]}}].concat(u()(k.definitions))},p=function(e){var n,i,a,t,o,s=e.publisher,u=e.followerCount,c=e.isVisible,k=e.hide,p=(0,d.a)("User"===s.__typename?v:f,{variables:{id:s.id,pagingInfo:{limit:10}},ssr:!1}),g=p.data,N=p.error,S=p.fetchMore,b="User"===s.__typename?"user":"collection",y=null==g||null===(n=g[b])||void 0===n||null===(i=n.followersUserConnection)||void 0===i?void 0:i.users,F=null==g||null===(a=g[b])||void 0===a||null===(t=a.followersUserConnection)||void 0===t||null===(o=t.pagingInfo)||void 0===o?void 0:o.next;return N||0===u?null:l.createElement(m.L,{hide:k,isVisible:c,heading:"".concat(u," Followers"),entities:y,pagingInfoNext:F,handleFetchMore:function(){if(F){F.__typename;var e=r()(F,["__typename"]);S({variables:{pagingInfo:e}})}}})},g=i(93310),N=i(87691),S=i(21372),b=function(e){var n,i,a=null!==(n="Collection"===e.__typename?e.subscriberCount:null===(i=e.socialStats)||void 0===i?void 0:i.followerCount)&&void 0!==n?n:0;return{followerCount:a,isFollowerCountVisible:a>0}},y=function(e){var n=e.disableLink,i=void 0!==n&&n,a=e.scale,o=void 0===a?"L":a,r=e.publisher,d=e.linkStyle,m=void 0===d?"SUBTLE":d,s=b(r),u=s.followerCount,c=s.isFollowerCountVisible,k=l.useState(!1),v=t()(k,2),f=v[0],y=v[1],F=!i;if(!c)return null;var h="".concat((0,S.pY)(u)," Follower").concat(1===u?"":"s");return F?l.createElement(l.Fragment,null,l.createElement(N.F,{playwrightClassName:"pw-follower-count",tag:"span",scale:o},l.createElement(g.r,{onClick:function(){return y(!0)},linkStyle:m},h)),l.createElement(p,{hide:function(){return y(!1)},publisher:r,followerCount:u,isVisible:f})):l.createElement(N.F,{tag:"span",scale:o,color:"DARKER"},h)}},69387:(e,n,i)=>{"use strict";i.d(n,{U:()=>r});var a=i(319),t=i.n(a),l=i(78693),o=i(27048),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DialogUserEntity_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat(t()(l.s.definitions),t()(o.W.definitions))}},19262:(e,n,i)=>{"use strict";i.d(n,{L:()=>S});var a=i(67294),t=i(97521),l=i(77355),o=i(47230),r=i(20113),d=i(68427),m=i(71652),s=i(82405),u=i(93310),c=i(87691),k=function(e){var n=e.avatar,i=e.href,t=e.name,o=e.followButton,d=e.bio;return a.createElement(l.x,{padding:"12px 0"},a.createElement(l.x,{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},a.createElement(l.x,{display:"flex",alignItems:"flex-start"},a.createElement(l.x,{marginRight:"20px"},n),a.createElement(l.x,{display:"flex",flexDirection:"column",alignItems:"flex-start"},a.createElement(u.r,{href:i},a.createElement(r.X6,{scale:"XS"},t)),d&&a.createElement(c.F,{scale:"S"},d))),a.createElement(l.x,{marginLeft:"48px"},o)))},v=function(e){var n=e.follower,i=n.name,t=(0,d.R)(n);return a.createElement(k,{avatar:a.createElement(m.v,{collection:n,circular:!0,size:40}),href:t,name:i,followButton:a.createElement(s.Fp,{buttonSize:"SMALL",collection:n,susiEntry:"follow_list"})})},f=i(84739),p=i(17193),g=i(32317),N=function(e){var n=e.follower,i=n.name,t=n.bio,l=void 0===t?"":t,o=(0,f.B)(n);return a.createElement(k,{avatar:a.createElement(p.Yt,{user:n,scale:"S"}),href:o,name:i,bio:l,followButton:a.createElement(g.Bv,{buttonSize:"SMALL",user:n,susiEntry:"follow_list"})})},S=function(e){var n=e.hide,i=e.isVisible,d=e.heading,m=e.entities,s=e.pagingInfoNext,u=e.handleFetchMore;return a.createElement(t.V,{isVisible:i,hide:n,withAnimation:!0},a.createElement(l.x,{maxWidth:"550px"},a.createElement(l.x,{display:"flex",flexDirection:"column",textAlign:"center",marginBottom:"24px"},a.createElement(r.X6,{scale:"S"},d)),null==m?void 0:m.map((function(e){return"User"===e.__typename?a.createElement(N,{follower:e,key:e.id}):a.createElement(v,{follower:e,key:e.id})})),s&&a.createElement(l.x,{display:"flex",flexDirection:"column",margin:"24px",alignItems:"center"},a.createElement(o.z,{buttonStyle:"SOCIAL",size:"SMALL",onClick:u},"Show more"))))}},78757:(e,n,i)=>{"use strict";i.d(n,{P:()=>l});var a=i(68427),t=i(84739),l=function(e){var n=(0,a.B)(),i=(0,t.I)();return"Collection"===e.__typename?n(e):"User"===e.__typename?i(e):""}},14337:(e,n,i)=>{"use strict";i.d(n,{v:()=>r});var a=i(319),t=i.n(a),l=i(84683),o=i(27048),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherAvatar_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}]}}].concat(t()(l.d.definitions),t()(o.W.definitions))}},30826:(e,n,i)=>{"use strict";i.d(n,{G:()=>o});var a=i(67294),t=i(71652),l=i(17193),o=function(e){var n=e.link,i=void 0!==n&&n,o=e.scale,r=void 0===o?"M":o,d=e.publisher;switch(d.__typename){case"User":return a.createElement(l.Yt,{link:i,scale:r,user:d});case"Collection":return a.createElement(t.v,{link:i,size:l.wC[r],collection:d});default:return null}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2021.3321f6a0.chunk.js.map
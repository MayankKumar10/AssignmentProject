(self.webpackChunklite=self.webpackChunklite||[]).push([[2791],{75412:(e,n,i)=>{"use strict";i.d(n,{A:()=>l});var a=i(23564),t=i(45697),r=i(64718);function l(e){var n=e.children,i=e.query,t=(0,a._T)(e,["children","query"]),l=(0,r.a)(i,t);return l?n(l):null}l.propTypes={client:t.object,children:t.func.isRequired,fetchPolicy:t.string,notifyOnNetworkStatusChange:t.bool,onCompleted:t.func,onError:t.func,pollInterval:t.number,query:t.object.isRequired,variables:t.object,ssr:t.bool,partialRefetch:t.bool,returnPartialData:t.bool}},69100:(e,n,i)=>{var a=i(99489),t=i(57067);function r(n,i,l){return t()?e.exports=r=Reflect.construct:e.exports=r=function(e,n,i){var t=[null];t.push.apply(t,n);var r=new(Function.bind.apply(e,t));return i&&a(r,i.prototype),r},r.apply(null,arguments)}e.exports=r},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,n,i)=>{var a=i(29754),t=i(99489),r=i(70430),l=i(69100);function d(n){var i="function"==typeof Map?new Map:void 0;return e.exports=d=function(e){if(null===e||!r(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(e))return i.get(e);i.set(e,n)}function n(){return l(e,arguments,a(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t(n,e)},d(n)}e.exports=d},38125:(e,n,i)=>{var a=i(14259);e.exports=function(e){return null!=e&&e.length?a(e,0,-1):[]}},50308:e=>{e.exports=function(){}},18029:(e,n,i)=>{var a=i(35393),t=i(11700),r=a((function(e,n,i){return e+(i?" ":"")+t(n)}));e.exports=r},43741:(e,n,i)=>{"use strict";i.r(n),i.d(n,{MainContent:()=>A,useLoader:()=>j});var a=i(64718),t=i(67294),r=i(33517),l=i(94931),d=i(66999),o=i(66018),u=i(79568),m=i(4212),s=i(77355),k=i(67786),c=function(e){var n=e.user,i=e.fetchMoreHomepagePosts;return(0,d.z)(n),t.createElement(t.Fragment,null,t.createElement(o.Lv,{user:n}),t.createElement(k.S,{tab:u.m.Overview,user:n}),t.createElement(s.x,{backgroundColor:"BACKGROUND",display:"flex",flexDirection:"column",minHeight:"100vh"},t.createElement(r.U,{publisher:n}),t.createElement(s.x,{flexGrow:"1"},t.createElement(l.I,{publisher:n,fetchMore:i}))),t.createElement(m.h,{user:n,redirectOnComplete:!0}))},v=i(14650),p=i(8458),f=i(81390),N=i(8922),S=i(98222),g=i(66411),b=i(2808),h=i(95989),y=i(62837),F=i(319),P=i.n(F),D=i(73622),_=i(49304),E=i(2316),C=i(62166),w=i(81284),x=i(55193),V=i(37595),R={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserProfileScreen_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerIsUser"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherHeader_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherHomepagePosts_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserSubdomainFlow_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserProfileMetadata_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SuspendedBannerLoader_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useAnalytics_user"}}]}}].concat(P()(_.L.definitions),P()(E.Yz.definitions),P()(C.k.definitions),P()(w.k.definitions),P()(x.v.definitions),P()(V.E.definitions))},M=i(66862),U=i(44015),L=i(98237),T=i(68216),H={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"EntityDrivenSubscriptionLandingPageScreen_writer"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"isPartnerProgramEnrolled"}},{kind:"Field",name:{kind:"Name",value:"referredMembershipCustomHeadline"}},{kind:"Field",name:{kind:"Name",value:"referredMembershipCustomBody"}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CustomThemeProvider_customStyleSheet"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CustomBackgroundWrapper_customStyleSheet"}},{kind:"FragmentSpread",name:{kind:"Name",value:"MetaHeader_customStyleSheet"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"MetaHeader_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(P()(M.K.definitions),P()(U.w.definitions),P()(L.aU.definitions),P()(L.Mv.definitions),P()(T.$m.definitions))},I=i(31289),O={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserProfileQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"homepagePostsLimit"}},type:{kind:"NamedType",name:{kind:"Name",value:"PaginationLimit"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"homepagePostsFrom"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},defaultValue:{kind:"NullValue"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"includeDistributedResponses"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},defaultValue:{kind:"BooleanValue",value:!0}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"viewerIsUser"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}}]}},{kind:"Field",alias:{kind:"Name",value:"homePostsPublished"},name:{kind:"Name",value:"homepagePostsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"posts"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserCanonicalizer_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserProfileScreen_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"EntityDrivenSubscriptionLandingPageScreen_writer"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useShouldShowEntityDrivenSubscription_creator"}}]}}]}}]}}].concat(P()(D.r.definitions),P()(R.definitions),P()(H.definitions),P()(I.G.definitions))},j=function(e){var n=(0,p.t)(e),i=n.id,t=n.username,r=(0,a.a)(O,{variables:{id:i,username:t,homepagePostsLimit:10},skip:!i&&!t}),l=(0,S.Z)({id:i,username:t});return{loading:r.loading,userProfileQueryResult:r,userHasListData:l}},A=function(e){var n,i,a,r,l=e.params,d=e.loading,o=e.userProfileQueryResult,u=e.userHasListData,m=(0,p.t)(l),s=m.id,k=m.username;if(!s&&!k)return t.createElement(y.$,{showMetabar:!1});var S=o.data,F=(S=void 0===S?{userResult:void 0}:S).userResult,P=o.error,D=o.fetchMore;if(P)return t.createElement(b.C,{error:P,showMetabar:!1});if(d)return t.createElement(h.h,null);if((0,f.b)(F))return t.createElement(f.j,{userResult:F,showMetabar:!1});var _,E=(null===(n=F.homePostsPublished)||void 0===n?void 0:n.posts)&&F.homePostsPublished.posts.length>0,C="User"===(null==u||null===(i=u.userResult)||void 0===i?void 0:i.__typename)&&u.userResult.viewerEdge.hasList;if(!E&&C&&function(e){return!!e.username}(l))return t.createElement(v.W,{params:l,sourceName:"user_profile"});var w=null==F||null===(a=F.homepagePostsConnection)||void 0===a||null===(r=a.pagingInfo)||void 0===r?void 0:r.next;if(w){var x=w.limit,V=w.from;_=function(){return D({variables:{homepagePostsFrom:V,homepagePostsLimit:x}})}}return t.createElement(N.C,{user:F},t.createElement(g.cW,{source:{name:"user_profile"}},t.createElement(c,{user:F,fetchMoreHomepagePosts:_})))}},29519:(e,n,i)=>{"use strict";i.d(n,{h:()=>a});var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionNavigationContextProvider_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}}]}}]}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/UserProfilePage.MainContent.57b90dc9.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[906],{906:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(689),u=n(390),s="Cast_list__gNQg+",i="Cast_item__Km-n9",o="Cast_item_title__YX0n2",p=n(184),f=function(){var t=(0,c.UO)().movieId,e=(0,a.useState)([]),n=(0,r.Z)(e,2),f=n[0],h=n[1];return(0,a.useEffect)((function(){(0,u.zv)(t).then(h).catch((function(t){return console.log(t)}))}),[t]),(0,p.jsx)(p.Fragment,{children:f&&f.length?(0,p.jsx)("ul",{className:s,children:f.map((function(t){var e=t.character,n=t.profile_path,r=t.name,a=t.id;return(0,p.jsxs)("li",{children:[n?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:r,width:"140",height:"175"}):(0,p.jsx)("img",{src:"https://restorixhealth.com/wp-content/uploads/2018/08/No-Image-684x1024.png",alt:r,width:"140",height:"175"}),(0,p.jsxs)("div",{className:i,children:[(0,p.jsx)("h2",{className:o,children:r}),(0,p.jsx)("h2",{className:o,children:"Character: "}),(0,p.jsx)("p",{className:o,children:e})]})]},a)}))}):(0,p.jsx)("h3",{children:"We don't have any casts for this movie"})})}},390:function(t,e,n){n.d(e,{Hg:function(){return o},TP:function(){return p},qF:function(){return i},tx:function(){return h},zv:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="89161555af7f1a35b84e8b27681fa7a6",i=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=906.99f53036.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{956:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(439),a=n(791),c=n(390),u=n(596),i=(n(462),n(689)),o=n(87),s="ListFilms_list__kWv3n",f="ListFilms_link__aZAq6",p=n(184);var l=function(t){var e=t.filter,n=void 0===e?"":e,l=(0,a.useState)([]),d=(0,r.Z)(l,2),v=d[0],h=d[1],m=(0,i.TH)();return(0,a.useEffect)((function(){(n?(0,c.cu)(n):(0,c.cu)()).then((function(t){return h(t)})).catch((function(){return u.Am.error("We can't find any film about your reguest")}))}),[n]),(0,p.jsx)("ul",{className:s,children:v.map((function(t){return(0,p.jsx)("li",{className:f,children:(0,p.jsx)(o.rU,{to:"/movies/".concat(t.id),state:m,children:t.title})},t.id)}))})}},881:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(956),u=n(87),i="Movies_input__KrUqs",o="Movies_button__GcIka",s=n(184);var f=function(){var t=(0,a.useState)(""),e=(0,r.Z)(t,2),n=e[0],f=e[1],p=(0,u.lr)(),l=(0,r.Z)(p,2),d=l[0],v=l[1],h=d.get("query");return(0,a.useEffect)((function(){f(h)}),[h]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target.elements.search.value.trim();e&&(f(e),v({query:e}))},children:[(0,s.jsx)("input",{type:"text",name:"search",placeholder:"Enter name of film ",className:i}),(0,s.jsx)("button",{type:"submit",className:o,children:"Search"})]}),n&&(0,s.jsx)(c.Z,{filter:n})]})}},390:function(t,e,n){n.d(e,{VQ:function(){return f},WZ:function(){return p},cu:function(){return s},tS:function(){return l}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="7d142b3bdc4d1fae6fc3c3157fc8a204",o="https://api.themoviedb.org/3",s=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,s,f=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:1,r=e?"".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=").concat(n):"".concat(o,"/trending/all/day?api_key=").concat(i,"&page=").concat(n),t.next=4,u.Z.get(r);case 4:return a=t.sent,s=function(t){return t.filter((function(t){var e=t.poster_path,n=t.genre_ids,r=t.title,a=t.original_title;return e&&n&&(r||a)})).map((function(t){var e=t.id,n=t.title,r=t.original_title;return{id:e,title:n||r}}))},t.abrupt("return",s(a.data.results));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,s,f,p,l,d,v,h;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,a=r.genres,s=r.id,f=r.poster_path,p=r.release_date,l=void 0===p?"":p,d=r.title,v=r.vote_average,h=r.overview,t.abrupt("return",{id:s,poster_path:"".concat("https://image.tmdb.org/t/p/w500").concat(f),title:"".concat(d," (").concat(l.slice(0,4),")"),userScore:"".concat(Math.round(10*v),"%"),overview:h,genres:a.map((function(t){return t.name})).join(" ")});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data.cast,t.abrupt("return",r.map((function(t){var e=t.id,n=t.name,r=t.profile_path;return{id:e,name:n,character:t.character,photo:r?"".concat("https://image.tmdb.org/t/p/w200").concat(r):null}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(n));case 3:return r=t.sent,a=r.data.results,t.abrupt("return",a.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},462:function(){}}]);
//# sourceMappingURL=881.a43834d3.chunk.js.map
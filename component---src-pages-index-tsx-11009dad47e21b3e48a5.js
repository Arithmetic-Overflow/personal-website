"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{1046:function(e,t,l){l.d(t,{w_:function(){return u}});var n=l(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(r),o=function(){return o=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++)for(var r in t=arguments[l])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},i=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]])}return l};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),s(e.child))}))}function u(e){return function(t){return n.createElement(c,o({attr:o({},e.attr)},t),s(e.child))}}function c(e){var t=function(t){var l,r=e.attr,a=e.size,s=e.title,u=i(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:l,style:o(o({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(r)}},4268:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(7294),r=function(e){var t=e.Logo,l=e.name,r=e.size;return n.createElement("li",null,n.createElement(t,{size:r})," ",n.createElement("span",{dangerouslySetInnerHTML:{__html:l}})," ")},a=function(e){var t=e.stack;return n.createElement("ul",null,t.map((function(e){return n.createElement(r,{Logo:e.logo,name:e.name,size:e.size||56})})))}},3022:function(e,t,l){l.d(t,{Z:function(){return b}});var n={};l.r(n),l.d(n,{_0:function(){return i},_1:function(){return s},_10:function(){return E},_2:function(){return u},_3:function(){return c},_4:function(){return m},_5:function(){return d},_6:function(){return f},_7:function(){return h},_8:function(){return v},_9:function(){return p},flipped:function(){return o},slideBar:function(){return a}});var r=l(7294),a="slidebar-module--slideBar--JV2om",o="slidebar-module--flipped--hp2Cc",i="slidebar-module--_0--MuxI7",s="slidebar-module--_1--uiiG3",u="slidebar-module--_2--HnUpu",c="slidebar-module--_3--+yuhV",m="slidebar-module--_4--Ghjpo",d="slidebar-module--_5--0v+jq",f="slidebar-module--_6--AASU7",h="slidebar-module--_7--eVzAP",v="slidebar-module--_8--4V5MR",p="slidebar-module--_9--ViC91",E="slidebar-module--_10--IvrAx",g=l(6801),b=function(e){var t,l=e.value,i=e.flipped;return r.createElement("div",{className:(0,g.Z)((t={},t[a]=!0,t[o]=i,t))},r.createElement("div",{className:n["_"+l]}))}},5981:function(e,t,l){l.r(t),l.d(t,{default:function(){return _}});var n=l(7294),r=l(5444),a=l(7608),o=l(3201),i=function(e){var t=e.href,l=e.title,r=e.description,a=e.timeToRead;return n.createElement("a",{href:t,className:"post-module--postEntry--DgPK6"},n.createElement("h4",null," ",l," "),n.createElement("p",null,r),n.createElement("div",{className:"post-module--timeToRead--cXbrx"},n.createElement(o.qyc,{size:14}),a," minute",1!==a&&"s"))},s=function(e){var t=e.posts;return n.createElement("ul",{className:"post-module--recentPosts--A3vg9"},t.map((function(e){return n.createElement("li",null,n.createElement(i,{href:e.slug,title:e.title,description:e.overview,timeToRead:e.timeToRead}))})))},u=l(4268),c=l(3022),m=function(e){var t=e.logos,l=e.skillLevel;return n.createElement("ul",null,n.createElement("li",null,t.map((function(e){return n.createElement(e,{size:32})}))),n.createElement("li",null,n.createElement(c.Z,{value:l,flipped:!0})))},d=function(e){var t=e.skillList;return n.createElement("ul",null,t.map((function(e){return n.createElement("li",null,n.createElement(m,{logos:e.logos,skillLevel:e.skillLevel}))})))},f=l(6801),h="index-module--contentBlock--dCMLg",v=l(9845),p="/technologies",E=[{logo:o.huN,name:"<a href="+p+"#react> ReactJS </a>"},{logo:v.Ldc,name:"<a href="+p+"#gatsby> GatsbyJS </a>"},{logo:o.hBm,name:"<a href="+p+"#sass> Sass </a>"},{logo:v.r0E,name:"<a href="+p+"#graphql> GraphQL </a>"},{logo:o.hJX,name:"<a href="+p+"#gh-pages> Github Pages </a>"}],g=l(9463),b=l(4641),k=[{logos:[o._Aq,g.CEe],skillLevel:9},{logos:[o.gtO,o.FGx,o.zPb],skillLevel:8},{logos:[o.huN],skillLevel:8},{logos:[o.osz],skillLevel:8},{logos:[v.TS5,g.u4B,b.qtU],skillLevel:7},{logos:[g.edn,g.Ces],skillLevel:6},{logos:[o.zEo],skillLevel:5}],_=function(){var e=(0,r.useStaticQuery)("2443485872").allMarkdownRemark.nodes.map((function(e){return{title:e.frontmatter.title,overview:e.frontmatter.overview,date:e.frontmatter.date,slug:e.frontmatter.slug,timeToRead:e.timeToRead}}));return n.createElement(a.Z,null,n.createElement("h1",{className:"segmentedHeader"},n.createElement("p",null,"cookies"),n.createElement("p",null,"xor"),n.createElement("p",null,"cream")),n.createElement("div",{className:"index-module--contentMatrix--pZ-Ij"},n.createElement("div",{className:(0,f.Z)([h,"index-module--introBlock--A1UOs"])},n.createElement("h2",null," Welcome to my site! "),n.createElement("p",null,"Welcome! This is somewhere for me to publish projects I'd like to share, if you're interested in them head over to ",n.createElement("a",{href:"/projects"},"Projects")," and check them out!"),n.createElement("p",null,"A lot of them have a very math heavy approach but even without the maths a novice programmer should still be able to follow them, just with less depth of understanding.")),n.createElement("div",{className:(0,f.Z)([h,"index-module--skillsBlock--Rg6Up"])},n.createElement("h2",null," Skills "),n.createElement(d,{skillList:k})),n.createElement("div",{className:(0,f.Z)([h,"index-module--techBlock--I0mjD"])},n.createElement("h2",null," Tech Stack "),n.createElement(u.Z,{stack:E})),n.createElement("div",{className:(0,f.Z)([h,"index-module--recentPosts--ivDL3"])},n.createElement("h2",null," Recent Posts "),n.createElement(s,{posts:e}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-11009dad47e21b3e48a5.js.map
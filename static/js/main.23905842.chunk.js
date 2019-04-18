(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,a,t){e.exports=t(281)},126:function(e,a,t){},280:function(e,a,t){},281:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(16),c=t.n(i),l=(t(126),t(46)),o=t(24),s=t(31),m=t.n(s),u=t(45),p=t(47),d=t(21),f=t(111),E=t.n(f),g=t(106),w=t.n(g),v=t(108),h=t.n(v),b=t(110),y=t.n(b),L=t(37),k=t.n(L),O=t(109),j=t.n(O);function x(e){var a=e.classes,t=e.title;return r.a.createElement(w.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(k.a,{className:a.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(j.a,null)),r.a.createElement(y.a,{variant:"h6",color:"inherit",className:a.title},t)))}x.defaultProps={title:"Logistics Risks Calculator"};var N=Object(d.withStyles)(function(e){return{title:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},buttonIconLeft:{marginRight:e.spacing.unit}}})(x);var C=Object(d.withStyles)({root:{display:"flex",flexFlow:"column nowrap",flexGrow:1,height:"100%"}})(function(e){var a=e.classes,t=e.children;return r.a.createElement("div",{className:a.root},t)});function R(e){var a=e.appBar,t=e.classes,n=e.children,i=e.isLoading;return r.a.createElement(C,null,a,r.a.createElement("div",{className:t.gridContainer},i?r.a.createElement(E.a,{className:t.progress}):n))}R.defaultProps={appBar:r.a.createElement(N,null),isLoading:!1};var S=Object(d.withStyles)({gridContainer:{display:"flex",flexGrow:1,maxHeight:"100%",overflow:"auto"},progress:{alignSelf:"center",margin:"auto"}})(R),B=t(112),U=t.n(B),D=t(114),P=t.n(D),G=t(22),W=t.n(G),q=t(113),z=t.n(q),F=t(63),I=t.n(F),J=t(64),T=t.n(J),A=t(118),H=t.n(A),M=t(44),V=t.n(M),X=t(117),$=t.n(X),K=t(119),Q=t.n(K),Y=t(116),Z=t.n(Y),_=t(2),ee=t.n(_);ee.a.shape({id:ee.a.number.isRequired,name:ee.a.string.isRequired,lastUpdated:ee.a.instanceOf(Date)});function ae(e){var a=e.classes,t=e.companies;return r.a.createElement(V.a,{className:a.root},r.a.createElement(U.a,{className:a.table},r.a.createElement(z.a,null,r.a.createElement(I.a,null,r.a.createElement(W.a,null,"Company name"),r.a.createElement(W.a,{align:"center"},"Risk"),r.a.createElement(W.a,{align:"center"},"Last updated"),r.a.createElement(W.a,null))),r.a.createElement(P.a,null,t.map(function(e){return r.a.createElement(I.a,{key:e.id},r.a.createElement(W.a,{component:"th",scope:"row"},e.name),r.a.createElement(W.a,{align:"center"},e.risk,"%"),r.a.createElement(W.a,{align:"center"},e.lastUpdated.toLocaleString()),r.a.createElement(W.a,{align:"right"},r.a.createElement(T.a,{title:"Recalculate"},r.a.createElement(l.b,{to:"/details/".concat(e.id)},r.a.createElement(k.a,{"aria-label":"Recalculate"},r.a.createElement(Z.a,{fontSize:"small"})))),r.a.createElement(T.a,{title:"Recalculate"},r.a.createElement(k.a,{"aria-label":"Recalculate"},r.a.createElement($.a,{fontSize:"small"})))))}))),r.a.createElement(H.a,{className:a.fab,color:"primary"},r.a.createElement(Q.a,null)))}ae.defaultProps={companies:[]};var te=Object(d.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto"},table:{minWidth:700},fab:{position:"absolute",bottom:4*e.spacing.unit,right:4*e.spacing.unit}}})(ae),ne=[{id:1,name:"Company #1",risk:98,lastUpdated:new Date},{id:2,name:"Company #2",risk:45,lastUpdated:new Date},{id:3,name:"Company #3",risk:9,lastUpdated:new Date},{id:4,name:"Company #4",risk:12,lastUpdated:new Date},{id:5,name:"Company #5",risk:69,lastUpdated:new Date}];var re=function(){var e=Object(n.useState)({companies:[],isLoading:!1,risks:[]}),a=Object(p.a)(e,2),t=a[0],i=a[1],c=function(){var e=Object(u.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i({isLoading:!0}),e.next=3,new Promise(function(e){setTimeout(function(){e(ne)},3e3)});case 3:a=e.sent,i({companies:a,isLoading:!1});case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){c()},[]),r.a.createElement(S,{isLoading:t.isLoading},r.a.createElement(te,{companies:t.companies}))},ie=t(48);function ce(e){return new Promise(function(a,t){setTimeout(function(){var n=ne.find(function(a){return a.id===e});n?a(n):t(new Error("Company with id (".concat(e,") is not found")))},3e3)})}var le=t(66),oe=t.n(le),se=t(120),me=t.n(se);var ue=function(e){var a=e.company;return r.a.createElement(oe.a,{container:!0,spacing:40},r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(me.a,{autoFocus:!0,id:"name",label:"Name",defaultValue:a.name})))};var pe=function(e){var a=e.match,t=Object(n.useState)({company:null,isLoading:!0}),i=Object(p.a)(t,2),c=i[0],l=i[1],o=Number(a.params.id),s=c.company,d=c.isLoading,f=function(){var e=Object(u.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(function(e){return Object(ie.a)({},e,{isLoading:!0})}),e.prev=1,e.next=4,ce(o);case 4:a=e.sent,l(function(e){return Object(ie.a)({},e,{company:a})});case 6:return e.prev=6,l(function(e){return Object(ie.a)({},e,{isLoading:!1})}),e.finish(6);case 9:case"end":return e.stop()}},e,null,[[1,,6,9]])}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){f()},[]);var E=r.a.createElement(N,{title:d?"Please wait...":s.name||void 0});return r.a.createElement(S,{appBar:E,isLoading:c.isLoading},!d&&s?r.a.createElement(ue,{company:s}):null)};t(280);var de=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:re}),r.a.createElement(o.a,{path:"/details/:id",component:pe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,1,2]]]);
//# sourceMappingURL=main.23905842.chunk.js.map
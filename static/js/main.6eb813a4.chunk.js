(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){e.exports=a(323)},151:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),o=(a(151),a(42)),u=a(33),s=a(21),l=a(9),m=a.n(l),p=a(17),f=a(45),d=a(29),v=a(136),h=a.n(v),b=a(133),g=a.n(b),E=a(134),y=a.n(E),w=a(26),x=a.n(w),O=a(50),j=a.n(O),C=a(135),k=a.n(C),L=a(86),S=a.n(L),D=a(131),I=a.n(D),N=a(129),B=a.n(N),R=a(5),P=a.n(R);var M=function(){localStorage.removeItem("isAuthenticated")},W=Object(n.createContext)({openMenu:null});function Y(e){var t=e.classes,a=e.children,c=e.history,i=Object(n.useState)(!1),o=Object(f.a)(i,2),u=o[0],s=o[1];return r.a.createElement(W.Provider,{value:{openMenu:function(){s(!0)}}},r.a.createElement(B.a,{open:u,onClose:function(){return s(!1)}},r.a.createElement(S.a,{className:t.list},r.a.createElement(I.a,{button:!0,onClick:function(){M(),c.replace({pathname:"/login"})}},"Logout"))),a)}Y.defaultProps={open:!1};var T=Object(u.f)(P()({list:{width:"250px"}})(Y));function A(e){var t=e.classes,a=e.title,c=Object(n.useContext)(W).openMenu;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{position:"static"},r.a.createElement(y.a,null,r.a.createElement(j.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:c},r.a.createElement(k.a,null)),r.a.createElement(x.a,{variant:"h6",color:"inherit",className:t.title},a))),r.a.createElement(T,null))}A.defaultProps={title:"Logistics Risks Calculator"};var F=Object(d.withStyles)(function(e){return{title:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},buttonIconLeft:{marginRight:e.spacing.unit}}})(A),J=a(7),U=a.n(J);var q=Object(d.withStyles)({root:{display:"flex",flexFlow:"column nowrap",flexGrow:1,height:"100%"}})(function(e){var t=e.className,a=e.classes,n=e.children;return r.a.createElement("div",{className:U()(a.root,t)},n)});function G(e){var t=e.appBar,a=e.className,n=e.classes,c=e.children,i=e.isLoading;return r.a.createElement(q,{className:a},t,r.a.createElement("div",{className:n.gridContainer},i?r.a.createElement(h.a,{className:n.progress}):c))}G.defaultProps={appBar:r.a.createElement(F,null),isLoading:!1};var z=Object(d.withStyles)({gridContainer:{display:"flex",flexGrow:1,maxHeight:"100%",overflow:"auto"},progress:{alignSelf:"center",margin:"auto"}})(G),V=a(140),H=a.n(V),X=a(142),$=a.n(X),K=a(27),Q=a.n(K),Z=a(141),_=a.n(Z),ee=a(66),te=a.n(ee),ae=a(143),ne=a.n(ae),re=a(49),ce=a.n(re),ie=a(144),oe=a.n(ie),ue=a(2),se=a.n(ue),le=(se.a.shape({charterCapital:se.a.number.isRequired,id:se.a.string.isRequired,name:se.a.string.isRequired,lastUpdated:se.a.instanceOf(Date),foundationDate:se.a.string.isRequired}),a(65)),me=a.n(le);function pe(e){return e.toISOString()}var fe=function(e){return e.id},de=function(e){return e.name},ve=function(e){return e.foundationDate},he=a(89),be=a.n(he),ge=a(139),Ee=a.n(ge),ye=a(138),we=a.n(ye),xe=a(137),Oe=a.n(xe);function je(e){return Oe()(e,"MM/DD/YYYY")}function Ce(e){var t=e.company,a=e.onRecalculate,n=e.risk,c=fe(t);return r.a.createElement(te.a,null,r.a.createElement(Q.a,{component:"th",scope:"row"},de(t)),r.a.createElement(Q.a,{align:"center"},n?"".concat(n.value,"%"):"-"),r.a.createElement(Q.a,{align:"center"},je(ve(t))),r.a.createElement(Q.a,{align:"right"},r.a.createElement(be.a,{title:"Edit"},r.a.createElement(o.b,{to:"/company/".concat(fe(t))},r.a.createElement(j.a,{"aria-label":"Recalculate"},r.a.createElement(we.a,{fontSize:"small"})))),r.a.createElement(be.a,{title:"Recalculate"},r.a.createElement(j.a,{"aria-label":"Recalculate",onClick:function(){return a(c)}},r.a.createElement(Ee.a,{fontSize:"small"})))))}var ke=function(e){var t=e.companyId,a=e.value;return{id:me()(),value:a,companyId:t,createdDate:pe(new Date),lastUpdatedDate:null}},Le=function(e,t){var a=e.value;return Object(s.a)({},t,{value:a,lastUpdatedDate:pe(new Date)})},Se=function(e){return e.id},De=function(e,t){return t.find(function(t){return t.companyId===e})};function Ie(e){var t=e.classes,a=e.companies,n=e.onAddButtonClick,c=e.onRecalculate,i=e.risks;return r.a.createElement(ce.a,{className:t.root},r.a.createElement(H.a,{className:t.table},r.a.createElement(_.a,null,r.a.createElement(te.a,null,r.a.createElement(Q.a,null,"Company name"),r.a.createElement(Q.a,{align:"center"},"Risk"),r.a.createElement(Q.a,{align:"center"},"Foundation date"),r.a.createElement(Q.a,null))),r.a.createElement($.a,null,a.map(function(e){var t=fe(e);return r.a.createElement(Ce,{company:e,key:t,onRecalculate:c,risk:De(t,i)})}))),r.a.createElement(ne.a,{className:t.fab,color:"primary",onClick:n},r.a.createElement(oe.a,null)))}Ie.defaultProps={companies:[],risks:[]};var Ne=Object(d.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto"},table:{minWidth:700},fab:{position:"absolute",bottom:4*e.spacing.unit,right:4*e.spacing.unit}}})(Ie),Be=Object(n.createContext)({services:{}});var Re=function(e){var t=e.history,a=Object(n.useState)({companies:[],isLoading:!1,risks:[]}),c=Object(f.a)(a,2),i=c[0],o=c[1],u=Object(n.useContext)(Be).services,l=u.companies,d=u.risks,v=function(){var e=Object(p.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o({isLoading:!0}),e.next=3,l.getCompanies();case 3:t=e.sent,o({companies:t,isLoading:!1});case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getList();case 2:t=e.sent,o(function(e){return Object(s.a)({},e,{risks:t})});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){return v(),d.subscribe(function(){h()}),h(),function(){d.unsubscribe()}},[]),r.a.createElement(T,null,r.a.createElement(z,{isLoading:i.isLoading},r.a.createElement(Ne,{companies:i.companies,onAddButtonClick:function(){t.push({pathname:"/company/"})},onRecalculate:function(e){d.calculate(e)},risks:i.risks})))},Pe=a(145),Me=a(18),We=a.n(Me);var Ye=P()(function(e){return{gridContainer:{justifyContent:"center",paddingTop:4*e.spacing.unit},formContainer:{flex:1,maxWidth:"360px"}}})(function(e){var t=e.children,a=e.classes,n=e.isLoading,c=e.title,i=Object(Pe.a)(e,["children","classes","isLoading","title"]);return r.a.createElement(z,Object.assign({},i,{classes:{gridContainer:a.gridContainer},isLoading:n}),r.a.createElement(We.a,{className:a.formContainer,container:!0,direction:"column",spacing:40},r.a.createElement(We.a,{component:x.a,item:!0,variant:"title"},c),r.a.createElement(We.a,{item:!0},n?null:t)))}),Te=a(34),Ae=a.n(Te),Fe=a(51),Je=a.n(Fe),Ue=a(30),qe=a(87),Ge=a.n(qe),ze=function(e){return Boolean(e)?void 0:"Value is required"},Ve=function(e){return Ge()(new Date(e))?void 0:"Date should be in format MM/DD/YYYY"};function He(e){var t=e.company,a=e.onReset,c=e.onSubmit,i=Object(n.useMemo)(function(){return t?Object(s.a)({},t,{foundationDate:je(ve(t))}):t},[t]);return r.a.createElement(Ue.b,{initialValues:i,onSubmit:function(e){c(Object(s.a)({},e,{foundationDate:new Date(e.foundationDate),charterCapital:Number(e.charterCapital)}))}},function(e){var t=e.handleSubmit,n=e.submitting;return r.a.createElement(We.a,{component:"form",container:!0,direction:"column",onReset:a,onSubmit:t,spacing:40},r.a.createElement(We.a,{item:!0},r.a.createElement(Ue.a,{name:"name",validate:ze},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched;return r.a.createElement(Ae.a,Object.assign({},t,{autoFocus:!0,error:c&&Boolean(n),fullWidth:!0,helperText:c&&n,label:"Name"}))})),r.a.createElement(We.a,{item:!0},r.a.createElement(Ue.a,{name:"foundationDate",validate:function(e){return ze(e)||Ve(e)}},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched;return r.a.createElement(Ae.a,Object.assign({},t,{error:c&&Boolean(n),fullWidth:!0,helperText:c&&n,label:"Foundation date",placeholder:"2/25/2012"}))})),r.a.createElement(We.a,{item:!0},r.a.createElement(Ue.a,{name:"charterCapital",validate:ze},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched;return r.a.createElement(Ae.a,Object.assign({},t,{error:c&&Boolean(n),fullWidth:!0,helperText:c&&n,label:"Charter capital",type:"number"}))})),r.a.createElement(We.a,{item:!0},r.a.createElement(We.a,{container:!0,justify:"flex-end",spacing:16},r.a.createElement(We.a,{item:!0},r.a.createElement(Je.a,{type:"reset"},"Cancel")),r.a.createElement(We.a,{item:!0},r.a.createElement(Je.a,{color:"primary",disabled:n,type:"submit",variant:"contained"},"Submit")))))})}var Xe=function(e){var t=e.match,a=e.history,c=Object(n.useState)({company:null,isLoading:!0}),i=Object(f.a)(c,2),o=i[0],u=i[1],l=Object(n.useContext)(Be).services.companies,d=t.params.id,v=o.company,h=o.isLoading,b=h?"":v.name,g=function(){var e=Object(p.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u(function(e){return Object(s.a)({},e,{isLoading:!0})}),e.prev=1,e.next=4,l.getCompanyById(d);case 4:t=e.sent,u(function(e){return Object(s.a)({},e,{company:t})});case 6:return e.prev=6,u(function(e){return Object(s.a)({},e,{isLoading:!1})}),e.finish(6);case 9:case"end":return e.stop()}},e,null,[[1,,6,9]])}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){g()},[]);var E=r.a.createElement(F,{title:h?"Please wait...":b}),y=function(){var e=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.editCompany(v,t);case 2:a.replace({pathname:"/"});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(T,null,r.a.createElement(Ye,{appBar:E,isLoading:o.isLoading,title:"Edit ".concat(b)},r.a.createElement(He,{company:v,onReset:function(e){e.preventDefault(),a.replace({pathname:"/"})},onSubmit:y})))};var $e=function(e){var t=e.history,a=Object(n.useContext)(Be).services.companies,c=r.a.createElement(F,{title:"Create new company"}),i=function(){var e=Object(p.a)(m.a.mark(function e(n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.createCompany(n);case 2:t.replace("/");case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(T,null,r.a.createElement(Ye,{appBar:c,title:"Create new company"},r.a.createElement(He,{onReset:function(e){e.preventDefault(),e.stopPropagation(),t.replace("/")},onSubmit:i})))},Ke=a(69),Qe=function(e){var t=e.localStorage,a=e.parseList,n=void 0===a?JSON.parse:a,r=e.formatList,c=void 0===r?JSON.stringify:r;return{getList:function(){return Promise.resolve(n(t.getItem("companies"))||[])},getById:function(){var e=Object(p.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getList();case 2:return a=e.sent,e.abrupt("return",Promise.resolve(a.find(function(e){return fe(e)===t})));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),saveItem:function(){var e=Object(p.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getList();case 2:return a=e.sent,n=[].concat(Object(Ke.a)(a),[t]),e.abrupt("return",this.saveList(n));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateItem:function(){var e=Object(p.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getList();case 2:return a=e.sent,n=a.map(function(e){return fe(e)!==fe(t)?e:t}),e.abrupt("return",this.saveList(n));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),saveList:function(e){return t.setItem("companies",c(e)),Promise.resolve()}}},Ze=function(e){var t=e.companiesStore;return{createCompany:function(e){var a=function(e){var t=e.name,a=e.foundationDate,n=e.charterCapital;return{id:me()(),charterCapital:n,foundationDate:a,lastUpdatedDate:null,name:t,createdDate:pe(new Date)}}(e);return t.saveItem(a)},editCompany:function(e,a){var n=function(e,t){var a=e.name,n=e.foundationDate,r=e.charterCapital;return Object(s.a)({},t,{charterCapital:r,foundationDate:n,lastUpdatedDate:pe(new Date),name:a})}(a,e);return t.updateItem(n)},getCompanies:function(){return t.getList()},getCompanyById:function(e){return t.getById(e)}}},_e=a(64),et=a(28),tt=a(67),at=a(71),nt=a(43),rt=a(68),ct=a(70),it=function(e){function t(e){return Object(tt.a)(this,t),Object(at.a)(this,Object(nt.a)(t).call(this,'User "'.concat(e,"\" doesn't exist")))}return Object(rt.a)(t,e),t}(Object(ct.a)(Error)),ot=function(e){function t(){return Object(tt.a)(this,t),Object(at.a)(this,Object(nt.a)(t).call(this,"Invalid password"))}return Object(rt.a)(t,e),t}(Object(ct.a)(Error));var ut=function(e){return new Promise(function(t,a){var n=e.login,r=e.password;"admin"===n?"admin"===r?(localStorage.setItem("isAuthenticated","true"),t()):a(new ot):a(new it(n))})};function st(e){var t=e.className,a=e.onSubmit;return r.a.createElement(Ue.b,{onSubmit:a},function(e){var a=e.handleSubmit,n=e.submitError,c=e.submitting;return r.a.createElement(We.a,{alignContent:"center",className:t,component:"form",container:!0,onSubmit:a,spacing:40},n?r.a.createElement(We.a,{color:"error",component:x.a,item:!0,xs:12},n):null,r.a.createElement(We.a,{item:!0,xs:12},r.a.createElement(Ue.a,{name:"login",validate:ze},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched,i=a.submitError;return r.a.createElement(Ae.a,Object.assign({},t,{autoFocus:!0,error:c&&Boolean(n||i),fullWidth:!0,helperText:c&&(n||i),placeholder:"Login"}))})),r.a.createElement(We.a,{item:!0,xs:12},r.a.createElement(Ue.a,{name:"password",validate:ze},function(e){var t=e.input,a=e.meta,n=a.error,c=a.touched;return r.a.createElement(Ae.a,Object.assign({},t,{error:c&&Boolean(n),fullWidth:!0,helperText:c&&n,placeholder:"Password",type:"password"}))})),r.a.createElement(We.a,{item:!0,xs:12},r.a.createElement(Je.a,{color:"primary",disabled:c,fullWidth:!0,type:"submit",variant:"contained"},"Submit")))})}st.defaultProps={className:""};var lt=st;var mt=P()(function(e){return{root:{paddingTop:8*e.spacing.unit},form:{margin:"".concat(8*e.spacing.unit,"px auto"),maxWidth:"360px"}}})(function(e){var t=e.classes,a=e.history,n=function(){var e=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ut(t);case 3:a.replace({pathname:"/"}),e.next=15;break;case 6:if(e.prev=6,e.t0=e.catch(0),!(e.t0 instanceof it)){e.next=12;break}return e.abrupt("return",{login:e.t0.message});case 12:if(!(e.t0 instanceof ot)){e.next=14;break}return e.abrupt("return",Object(_e.a)({},et.a,"Incorrect credentials"));case 14:throw e.t0;case 15:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(q,{classes:{root:t.root}},r.a.createElement(x.a,{align:"center",paragraph:!1,variant:"title"},"Welcome"),r.a.createElement(x.a,{align:"center",color:"textSecondary"},"to"),r.a.createElement(x.a,{align:"center",color:"primary",variant:"headline"},"Logistics Risks Calculator"),r.a.createElement(lt,{className:t.form,onSubmit:n}))});var pt=function(){return"true"===localStorage.getItem("isAuthenticated")};var ft=function(e){var t=e.children;return pt()?t:r.a.createElement(u.a,{to:{pathname:"/login"}})},dt=function(e){var t=e.localStorage,a=e.parseList,n=void 0===a?JSON.parse:a,r=e.formatList,c=void 0===r?JSON.stringify:r;return{getList:function(){return Promise.resolve(n(t.getItem("risks"))||[])},getByCompanyId:function(){var e=Object(p.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getList();case 2:return a=e.sent,e.abrupt("return",Promise.resolve(De(t,a)));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),saveItem:function(){var e=Object(p.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getList();case 2:return a=e.sent,n=[].concat(Object(Ke.a)(a),[t]),e.abrupt("return",this.saveList(n));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateItem:function(){var e=Object(p.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getList();case 2:return a=e.sent,n=a.map(function(e){return Se(e)!==Se(t)?e:t}),e.abrupt("return",this.saveList(n));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),saveList:function(e){return t.setItem("risks",c(e)),Promise.resolve()}}},vt=function(e){var t,a=e.risksStore;return{calculate:function(){var e=Object(p.a)(m.a.mark(function e(n){var r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getByCompanyId(n);case 2:if(r=e.sent,i=10,o=100,i=Math.ceil(i),o=Math.floor(o),c=Math.floor(Math.random()*(o-i+1))+i,!r){e.next=9;break}return e.next=7,a.updateItem(Le({value:c},r));case 7:e.next=11;break;case 9:return e.next=11,a.saveItem(ke({value:c,companyId:n}));case 11:t&&t();case 12:case"end":return e.stop()}var i,o},e)}));return function(t){return e.apply(this,arguments)}}(),getList:function(){return a.getList()},subscribe:function(e){t=e},unsubscribe:function(){t=null}}},ht=(a(322),Ze({companiesStore:Qe({localStorage:localStorage})})),bt=vt({risksStore:dt({localStorage:localStorage})});var gt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Be.Provider,{value:{services:{companies:ht,risks:bt}}},r.a.createElement(o.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/login",component:mt}),r.a.createElement(ft,null,r.a.createElement(u.b,{exact:!0,path:"/",component:Re}),r.a.createElement(u.b,{exact:!0,path:"/company/",component:$e}),r.a.createElement(u.b,{path:"/company/:id",component:Xe}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(gt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,1,2]]]);
//# sourceMappingURL=main.6eb813a4.chunk.js.map
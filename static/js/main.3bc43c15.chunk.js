(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{58:function(e,a,t){e.exports=t(75)},63:function(e,a,t){},64:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),s=(t(63),t(64),t(16)),i=t(32),o=t.n(i),m=t(43),u=t(44),p=t.n(u),d=(t(66),p.a.initializeApp({apiKey:"IzaSyBAho_QP2ZhE_QrkIUfFPQjMhYr0hZ1wM8",authDomain:"shop-3e8e4.firebaseapp.com",databaseURL:"https://shop-3e8e4.firebaseio.com",projectId:"shop-3e8e4",storageBucket:"shop-3e8e4.appspot.com",messagingSenderId:"794284308515",appId:"1:794284308515:web:22ee6efc9ec9e2ec419996"}));function h(e){var a=Object(n.useState)(null),t=Object(s.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)(null),i=Object(s.a)(l,2),u=i[0],p=i[1],h=Object(n.useState)(!0),E=Object(s.a)(h,2),f=E[0],g=E[1];return Object(n.useEffect)((function(){function a(){return(a=Object(m.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d.firestore().collection(e).get().then((function(e){return e.docs.map((function(e){return e.data()}))}));case 3:t=a.sent,c(t),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),p(a.t0);case 10:return a.prev=10,g(!1),a.finish(10);case 13:case"end":return a.stop()}}),a,null,[[0,7,10,13]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e]),{data:r,error:u,loading:f}}var E=t(92),f=t(95),g=t(3),_=t(90);var v=function(e){return r.a.createElement(_.a,{variant:"h2",className:"title"},e.title)},b=t(12);var N=function(){var e=Object(g.e)().category,a=h(e),t=a.data,c=a.error,l=a.loading,i=Object(n.useState)(null),o=Object(s.a)(i,2),m=o[0],u=o[1],p=m?t.filter((function(e){return e.size===parseInt(m)})):t;if(c)throw c;return l?r.a.createElement(f.a,null):0===t.length?r.a.createElement(v,{title:"Products not found"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"products"},r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:12,md:2,justify:"center",className:"products__filters"},r.a.createElement("aside",null,r.a.createElement("label",{htmlFor:"size"},"Fitler by size"),r.a.createElement("select",{id:"size",className:"products__filtr",value:m,onChange:function(e){return u(e.target.value)}},r.a.createElement("option",{value:"",selected:!0},"All sizes"),r.a.createElement("option",{value:"36"},"36"),r.a.createElement("option",{value:"38"},"38")))),r.a.createElement(E.a,{item:!0,xs:12,md:10},r.a.createElement(E.a,{container:!0},p.map((function(a){return r.a.createElement(E.a,{item:!0,xs:12,sm:6,md:4,key:a.id,justify:"center",className:"product__single"},r.a.createElement("div",null,r.a.createElement("img",{className:"product__single--img",src:a.img,alt:a.img}),r.a.createElement("p",{className:"product__single--info"},r.a.createElement("span",{className:"product__single--name"},a.name),r.a.createElement("span",{className:"product__single--price"},a.price," \u20ac")),r.a.createElement(b.b,{className:"link",to:"/".concat(e,"/").concat(a.id)},"See details")))})))))))};var k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"categories__item ".concat(e.categoryClassName),xs:12,md:5,item:!0},r.a.createElement(_.a,{variant:"h3",className:"home-page__title"},e.title),r.a.createElement(b.b,{to:e.link,className:"link"},e.linkName)))};var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"home-page"},r.a.createElement(_.a,{variant:"h1",className:"home-page__title"},e.title),r.a.createElement(_.a,{variant:"h2",className:"subtitle"},e.subtitle)),r.a.createElement("section",null,r.a.createElement(E.a,{container:!0,className:"categories"},r.a.createElement(k,{title:"Jackets",link:"/jackets",linkName:"See jackets",categoryClassName:"categories__item--jackets"}),r.a.createElement(k,{title:"Coats",link:"/coats",linkName:"See coats",categoryClassName:"categories__item--coats"}))))};var j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"header__menu--left"},r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"header__shop-name"},e.shopName))),r.a.createElement("ul",{className:"header__menu--right"},r.a.createElement("li",null,r.a.createElement("a",{href:"/jackets",className:"header__links"},"jackets")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/coats"}),r.a.createElement("a",{href:"/coats",className:"header__links"},"coats"))))))},w=t(94),O=t(49),x=t.n(O),S=t(48),z=t.n(S);var F=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,e.info),r.a.createElement("div",null,r.a.createElement(w.a,{href:"https://facebook.com",target:"_blank",rel:"noopener",variant:"body2"},r.a.createElement(z.a,null)),r.a.createElement(w.a,{href:"https://instagram.com",target:"_blank",rel:"noopener",variant:"body2"},r.a.createElement(x.a,null))))};var I=function(){var e=Object(g.e)(),a=e.category,t=e.id,n=h(a),c=n.data,l=n.error,s=n.loading;if(l)throw l;if(s)return r.a.createElement(f.a,null);var i=c.filter((function(e){return e.id===parseInt(t)}))[0];return void 0===i?r.a.createElement(v,{title:"Product not found"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{container:!0,className:"product"},r.a.createElement(E.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement("img",{className:"product__img",src:i.img,alt:i.img})),r.a.createElement(E.a,{item:!0,xs:12,sm:6,md:8},r.a.createElement("div",{className:"product__details"},r.a.createElement(_.a,{variant:"h1",className:"product__details--title"},i.name),r.a.createElement("p",{className:"product__details--description"},i.description),r.a.createElement("p",{className:"product__details--price"},"Price: ",i.price," \u20ac"),r.a.createElement("p",{className:"product__details--size"},"Size: ",i.size),r.a.createElement("p",{className:"product__details--availability"},"In stock: ",i.availability)))))},C=t(52),P=t(93),B=Object(C.a)({palette:{primary:{main:"#000"}},typography:{h2:{fontSize:22}}});var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{theme:B},r.a.createElement(b.a,{basename:"/shop"},r.a.createElement(j,{shopName:"online shop"}),r.a.createElement("main",null,r.a.createElement(g.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(y,Object.assign({},e,{title:"Choose the perfect outfit.",subtitle:"Find the most fashionable clothes and accessories in online shop! New products every day. Choose a style and buy without leaving home!"}))}}),r.a.createElement(g.a,{path:"/:category",exact:!0,component:N}),r.a.createElement(g.a,{path:"/:category/:id",exact:!0,component:I})),r.a.createElement(F,{info:"This page doesn't offer any real products."}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(50),Q=t(51),D=t(54),M=t(53),U=function(e){Object(D.a)(t,e);var a=Object(M.a)(t);function t(e){var n;return Object(J.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(Q.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component);l.a.render(r.a.createElement(U,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.3bc43c15.chunk.js.map
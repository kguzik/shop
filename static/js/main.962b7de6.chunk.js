(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{65:function(e,t,a){e.exports=a(82)},70:function(e,t,a){},71:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(70),a(61)),s=a(41),i=a(10),u=(a(71),a(38)),m=a.n(u),d=a(49),p=a(50),h=a.n(p),E=(a(73),h.a.initializeApp({apiKey:"IzaSyBAho_QP2ZhE_QrkIUfFPQjMhYr0hZ1wM8",authDomain:"shop-3e8e4.firebaseapp.com",databaseURL:"https://shop-3e8e4.firebaseio.com",projectId:"shop-3e8e4",storageBucket:"shop-3e8e4.appspot.com",messagingSenderId:"794284308515",appId:"1:794284308515:web:22ee6efc9ec9e2ec419996"}));function f(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),s=o[0],u=o[1],p=Object(n.useState)(!0),h=Object(i.a)(p,2),f=h[0],g=h[1];return Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.firestore().collection(e).get().then((function(e){return e.docs.map((function(e){return e.data()}))}));case 3:a=t.sent,c(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),u(t.t0);case 10:return t.prev=10,g(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:r,error:s,loading:f}}var g=a(102),b=a(106),v=a(4),_=a(84);var j=function(e){return r.a.createElement(_.a,{variant:"h2",className:"title"},e.title)},N=a(12);var k=function(){var e=Object(v.f)().category,t=f(e),a=t.data,c=t.error,l=t.loading,o=Object(n.useState)(null),s=Object(i.a)(o,2),u=s[0],m=s[1],d=u?a.filter((function(e){return e.sizes.find((function(e){return e.size===parseInt(u)}))})):a;if(c)throw c;return l?r.a.createElement(b.a,null):0===a.length?r.a.createElement(j,{title:"Products not found"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"products"},r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:12,md:2,className:"products__filters"},r.a.createElement("aside",null,r.a.createElement("label",{htmlFor:"size"},"Fitler by size"),r.a.createElement("select",{id:"size",className:"products__filtr",value:u,onChange:function(e){return m(e.target.value)}},r.a.createElement("option",{value:"",defaultValue:!0},"All sizes"),r.a.createElement("option",{value:"36"},"36"),r.a.createElement("option",{value:"38"},"38")))),r.a.createElement(g.a,{item:!0,xs:12,md:10},r.a.createElement(g.a,{container:!0},d.map((function(t){return r.a.createElement(g.a,{item:!0,xs:12,sm:6,md:4,key:t.id,className:"product__single"},r.a.createElement("div",null,r.a.createElement("img",{className:"product__single--img",src:t.img,alt:t.img}),r.a.createElement("p",{className:"product__single--info"},r.a.createElement("span",{className:"product__single--name"},t.name),r.a.createElement("span",{className:"product__single--price"},t.price," \u20ac")),r.a.createElement(N.b,{className:"link",to:"/products/".concat(e,"/").concat(t.id)},"See details")))})))))))};var O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:"categories__item ".concat(e.categoryClassName),xs:12,md:5,item:!0},r.a.createElement(_.a,{variant:"h3",className:"home-page__title"},e.title),r.a.createElement(N.b,{to:e.link,className:"link"},e.linkName)))};var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"home-page"},r.a.createElement(_.a,{variant:"h1",className:"home-page__title"},e.title),r.a.createElement(_.a,{variant:"h2",className:"subtitle"},e.subtitle)),r.a.createElement("section",null,r.a.createElement(g.a,{container:!0,className:"categories"},r.a.createElement(O,{title:"Jackets",link:"products/jackets",linkName:"See jackets",categoryClassName:"categories__item--jackets"}),r.a.createElement(O,{title:"Coats",link:"products/coats",linkName:"See coats",categoryClassName:"categories__item--coats"}))))},w=a(54),S=a.n(w);var x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"header__menu--left"},r.a.createElement("li",null,r.a.createElement(N.b,{to:"/",className:"header__shop-name"},e.shopName))),r.a.createElement("ul",{className:"header__menu--right"},r.a.createElement("li",null,r.a.createElement(N.b,{to:"/products/jackets",className:"header__links"},"jackets")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/products/coats",className:"header__links"},"coats")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/shopping-cart",className:"header__links"},r.a.createElement(S.a,null)))))))},C=a(103),z=a(56),F=a.n(z),I=a(55),P=a.n(I);var A=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,e.info),r.a.createElement("div",null,r.a.createElement(C.a,{href:"https://facebook.com",target:"_blank",rel:"noopener",variant:"body2"},r.a.createElement(P.a,null)),r.a.createElement(C.a,{href:"https://instagram.com",target:"_blank",rel:"noopener",variant:"body2"},r.a.createElement(F.a,null))))},B=a(105);var T=function(e){var t=Object(v.f)(),a=t.category,c=t.id,l=Object(v.e)(),o=f(a),s=o.data,u=o.error,m=o.loading,d=Object(n.useState)(null),p=Object(i.a)(d,2),h=p[0],E=p[1];if(u)throw u;if(m)return r.a.createElement(b.a,null);var N=s.filter((function(e){return e.id===parseInt(c)}))[0];return N?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0,className:"product"},r.a.createElement(g.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement("img",{className:"product__img",src:N.img,alt:N.img})),r.a.createElement(g.a,{item:!0,xs:12,sm:6,md:8},r.a.createElement("div",{className:"product__details"},r.a.createElement(_.a,{variant:"h1",className:"product__details--title"},N.name),r.a.createElement("p",{className:"product__details--description"},N.description),r.a.createElement("p",{className:"product__details--price"},"Price: ",N.price," \u20ac"),r.a.createElement("select",{id:"size",className:"product__details--size",value:h,onChange:function(e){return E(e.target.value)}},r.a.createElement("option",{value:"",defaultValue:!0},"Select size"),N.sizes.map((function(e){return r.a.createElement("option",{value:e.sku,key:e.sku},e.size," ")}))),r.a.createElement(B.a,{disabled:!h,className:"btn",onClick:function(){e.addToCart(a,c,h),l.push("/shopping-cart")}},"Add to cart"))))):r.a.createElement(j,{title:"Product not found"})};var q=function(e){var t=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),s=o[0],u=o[1],m=Object(n.useState)(!0),d=Object(i.a)(m,2),p=d[0],h=d[1];return Object(n.useEffect)((function(){var t=e.map((function(e){return E.firestore().collection(e).get().then((function(e){return e.docs.map((function(e){return e.data()}))}))}));Promise.all(t).then((function(e){return c(e)})).catch((function(e){throw u(e),e})).finally((function(){return h(!1)}))}),[]),{data:r,error:s,loading:p}}(["jackets","coats"]),a=t.data;return t.loading,t.error,console.log(a),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Shopping Cart"))},J=a(59),M=a(104),Q=Object(J.a)({palette:{primary:{main:"#000"}},typography:{h2:{fontSize:22}},overrides:{MuiButton:{padding:0,text:{background:"linear-gradient(to right, #2C5364, #203A43, #0F2027)",borderRadius:4,border:0,color:"white",height:48,padding:"0 30px"}}}});var D=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=(t[0],t[1]);function c(e,t,n){a((function(a){return a.find((function(e){return n===e.sku}))?a.map((function(e){return e.sku===n?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(o.a)(a),[{category:e,id:t,sku:n,quantity:1}])}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{theme:Q},r.a.createElement(N.a,{basename:"/shop"},r.a.createElement(x,{shopName:"online shop"}),r.a.createElement("main",null,r.a.createElement(v.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(y,Object.assign({},e,{title:"Choose the perfect outfit.",subtitle:"Find the most fashionable clothes and accessories in online shop! New products every day. Choose a style and buy without leaving home!"}))}}),r.a.createElement(v.a,{path:"/products/:category",exact:!0,component:k}),r.a.createElement(v.a,{path:"/products/:category/:id",exact:!0,render:function(e){return r.a.createElement(T,Object.assign({},e,{addToCart:c}))}}),r.a.createElement(v.a,{path:"/shopping-cart",exact:!0,render:function(e){return r.a.createElement(q,Object.assign({},e,{addToCart:c}))}})),r.a.createElement(A,{info:"This page doesn't offer any real products."}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(57),U=a(58),V=a(62),W=a(60),Z=function(e){Object(V.a)(a,e);var t=Object(W.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(U.a)(a,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(r.a.Component);l.a.render(r.a.createElement(Z,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.962b7de6.chunk.js.map
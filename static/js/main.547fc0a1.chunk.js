(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{65:function(e,t,a){e.exports=a(82)},70:function(e,t,a){},71:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=(a(70),a(61)),s=a(41),o=a(10),m=(a(71),a(38)),u=a.n(m),d=a(49),p=a(50),E=a.n(p),h=(a(73),E.a.initializeApp({apiKey:"IzaSyBAho_QP2ZhE_QrkIUfFPQjMhYr0hZ1wM8",authDomain:"shop-3e8e4.firebaseapp.com",databaseURL:"https://shop-3e8e4.firebaseio.com",projectId:"shop-3e8e4",storageBucket:"shop-3e8e4.appspot.com",messagingSenderId:"794284308515",appId:"1:794284308515:web:22ee6efc9ec9e2ec419996"}));function f(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),i=Object(o.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)(!0),E=Object(o.a)(p,2),f=E[0],g=E[1];return Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.firestore().collection(e).get().then((function(e){return e.docs.map((function(e){return e.data()}))}));case 3:a=t.sent,c(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),m(t.t0);case 10:return t.prev=10,g(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:r,error:s,loading:f}}var g=a(102),b=a(106),_=a(4),v=a(84);var N=function(e){return r.a.createElement(v.a,{variant:"h2",className:"title"},e.title)},j=a(12);var k=function(){var e=Object(_.f)().category,t=f(e),a=t.data,c=t.error,l=t.loading,i=Object(n.useState)(null),s=Object(o.a)(i,2),m=s[0],u=s[1],d=m?a.filter((function(e){return e.sizes.find((function(e){return e.size===parseInt(m)}))})):a;if(c)throw c;return l?r.a.createElement(b.a,null):0===a.length?r.a.createElement(N,{title:"Products not found"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"products"},r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:12,md:2,className:"products__filters"},r.a.createElement("aside",null,r.a.createElement("label",{htmlFor:"size"},"Fitler by size"),r.a.createElement("select",{id:"size",className:"products__filtr",value:m||"",onChange:function(e){return u(e.target.value)}},r.a.createElement("option",{value:"",defaultValue:!0},"All sizes"),r.a.createElement("option",{value:"36"},"36"),r.a.createElement("option",{value:"38"},"38")))),r.a.createElement(g.a,{item:!0,xs:12,md:10},r.a.createElement(g.a,{container:!0},d.map((function(t){return r.a.createElement(g.a,{item:!0,xs:12,sm:6,md:4,key:t.id,className:"product__single"},r.a.createElement("div",null,r.a.createElement("img",{className:"product__single--img",src:t.img,alt:t.img}),r.a.createElement("p",{className:"product__single--info"},r.a.createElement("span",{className:"product__single--name"},t.name),r.a.createElement("span",{className:"product__single--price"},t.price," \u20ac")),r.a.createElement(j.b,{className:"link",to:"/products/".concat(e,"/").concat(t.id)},"See details")))})))))))};var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:"categories__item ".concat(e.categoryClassName),xs:12,md:5,item:!0},r.a.createElement(v.a,{variant:"h3",className:"home-page__title"},e.title),r.a.createElement(j.b,{to:e.link,className:"link"},e.linkName)))};var O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"home-page"},r.a.createElement(v.a,{variant:"h1",className:"home-page__title"},e.title),r.a.createElement(v.a,{variant:"h2",className:"subtitle"},e.subtitle)),r.a.createElement("section",null,r.a.createElement(g.a,{container:!0,className:"categories"},r.a.createElement(y,{title:"Jackets",link:"products/jackets",linkName:"See jackets",categoryClassName:"categories__item--jackets"}),r.a.createElement(y,{title:"Coats",link:"products/coats",linkName:"See coats",categoryClassName:"categories__item--coats"}))))},x=a(54),w=a.n(x);var S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"header__menu--left"},r.a.createElement("li",null,r.a.createElement(j.b,{to:"/",className:"header__shop-name"},e.shopName))),r.a.createElement("ul",{className:"header__menu--right"},r.a.createElement("li",null,r.a.createElement(j.b,{to:"/products/jackets",className:"header__links"},"jackets")),r.a.createElement("li",null,r.a.createElement(j.b,{to:"/products/coats",className:"header__links"},"coats")),r.a.createElement("li",null,r.a.createElement(j.b,{to:"/shopping-cart",className:"header__links"},r.a.createElement(w.a,null)))))))},z=a(103),C=a(56),F=a.n(C),I=a(55),A=a.n(I);var P=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,e.info),r.a.createElement("div",null,r.a.createElement(z.a,{href:"https://facebook.com",target:"_blank",rel:"noopener",variant:"body2"},r.a.createElement(A.a,null)),r.a.createElement(z.a,{href:"https://instagram.com",target:"_blank",rel:"noopener",variant:"body2"},r.a.createElement(F.a,null))))},q=a(105);var B=function(e){var t=Object(_.f)(),a=t.category,c=t.id,l=Object(_.e)(),i=f(a),s=i.data,m=i.error,u=i.loading,d=Object(n.useState)(null),p=Object(o.a)(d,2),E=p[0],h=p[1];if(m)throw m;if(u)return r.a.createElement(b.a,null);var j=s.filter((function(e){return e.id===parseInt(c)}))[0];return j?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0,className:"product"},r.a.createElement(g.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement("img",{className:"product__img",src:j.img,alt:j.img})),r.a.createElement(g.a,{item:!0,xs:12,sm:6,md:8},r.a.createElement("div",{className:"product__details"},r.a.createElement(v.a,{variant:"h1",className:"product__details--title"},j.name),r.a.createElement("p",{className:"product__details--description"},j.description),r.a.createElement("p",{className:"product__details--price"},"Price: ",j.price," \u20ac"),r.a.createElement("select",{id:"size",className:"product__details--size",value:E||"",onChange:function(e){return h(e.target.value)}},r.a.createElement("option",{value:"",defaultValue:!0},"Select size"),j.sizes.map((function(e){return r.a.createElement("option",{value:e.sku,key:e.sku},e.size," ")}))),r.a.createElement(q.a,{disabled:!E,className:"btn",onClick:function(){e.addToCart(a,c,E),l.push("/shopping-cart")}},"Add to cart"))))):r.a.createElement(N,{title:"Product not found"})};var Q=function(e){var t=e.cart,a=(e.updateQuantity,function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),i=Object(o.a)(l,2),s=i[0],m=i[1],u=Object(n.useState)(!0),d=Object(o.a)(u,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){var t=e.map((function(e){return h.firestore().collection(e).get().then((function(e){return e.docs.map((function(e){return e.data()}))}))}));Promise.all(t).then((function(e){return c(e)})).catch((function(e){throw m(e),e})).finally((function(){return E(!1)}))}),[]),{data:r,error:s,loading:p}}(["jackets","coats"])),c=a.data,l=a.loading,i=a.error;if(i)throw i;return l?r.a.createElement(b.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h1",textAlign:"center"},"Shopping Cart"),r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.sku,n=e.quantity,l=c[0].concat(c[1]).find((function(e){return e.id===parseInt(t)})),i=l.price,s=l.name,o=l.sizes,m=l.img,u=o.find((function(e){return e.sku===parseInt(a)})).size;return r.a.createElement(g.a,{container:!0,key:a,className:"cart-item"},r.a.createElement(g.a,{item:!0,xs:12,md:4,lg:2},r.a.createElement("img",{src:m,alt:s,className:"cart-item__img"})),r.a.createElement(g.a,{item:!0,xs:12,md:4,lg:2},r.a.createElement(v.a,{variant:"h2",className:"cart-item__name"},s)),r.a.createElement(g.a,{item:!0,xs:12,md:4,lg:2},r.a.createElement("p",{className:"cart-item__price"},i," \u20ac")),r.a.createElement(g.a,{item:!0,xs:12,md:4,lg:2},r.a.createElement("p",{className:"cart-item__size"},"Size: ",u)),r.a.createElement(g.a,{item:!0,xs:12,md:4,lg:2},r.a.createElement("p",{className:"cart-item__quantity"},"Quantity: ",n)))}))))},J=a(59),M=a(104),T=Object(J.a)({palette:{primary:{main:"#000"}},typography:{h2:{fontSize:22}},overrides:{MuiButton:{text:{background:"linear-gradient(to right, #2C5364, #203A43, #0F2027)",borderRadius:4,border:0,color:"white",height:48,padding:"0 30px"}}}});var D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];function l(e,t,a){c((function(n){return n.find((function(e){return a===e.sku}))?n.map((function(e){return e.sku===a?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(i.a)(n),[{category:e,id:t,sku:a,quantity:1}])}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{theme:T},r.a.createElement(j.a,{basename:"/shop"},r.a.createElement(S,{shopName:"online shop"}),r.a.createElement("main",null,r.a.createElement(_.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(O,Object.assign({},e,{title:"Choose the perfect outfit.",subtitle:"Find the most fashionable clothes and accessories in online shop! New products every day. Choose a style and buy without leaving home!"}))}}),r.a.createElement(_.a,{path:"/products/:category",exact:!0,component:k}),r.a.createElement(_.a,{path:"/products/:category/:id",exact:!0,render:function(e){return r.a.createElement(B,Object.assign({},e,{addToCart:l}))}}),r.a.createElement(_.a,{path:"/shopping-cart",exact:!0,render:function(e){return r.a.createElement(Q,Object.assign({},e,{cart:a}))}})),r.a.createElement(P,{info:"This page doesn't offer any real products."}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(57),U=a(58),V=a(62),W=a(60),Z=function(e){Object(V.a)(a,e);var t=Object(W.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(U.a)(a,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(r.a.Component);l.a.render(r.a.createElement(Z,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.547fc0a1.chunk.js.map
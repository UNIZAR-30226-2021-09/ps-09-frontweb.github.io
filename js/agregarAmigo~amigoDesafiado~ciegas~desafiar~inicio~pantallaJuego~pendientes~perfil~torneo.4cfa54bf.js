(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["agregarAmigo~amigoDesafiado~ciegas~desafiar~inicio~pantallaJuego~pendientes~perfil~torneo"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),a=r("9112");for(var c in i){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=o("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),o=r("a691"),a=r("50c4"),c=r("7b0b"),s=r("65f0"),u=r("8418"),f=r("1dde"),l=f("splice"),b=Math.max,d=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var r,n,f,l,m,v,y=c(this),h=a(y.length),w=i(t,h),O=arguments.length;if(0===O?r=n=0:1===O?(r=0,n=h-w):(r=O-2,n=d(b(o(e),0),h-w)),h+r-n>p)throw TypeError(g);for(f=s(y,n),l=0;l<n;l++)m=w+l,m in y&&u(f,l,y[m]);if(f.length=n,r<n){for(l=w;l<h-n;l++)m=l+n,v=l+r,m in y?y[v]=y[m]:delete y[v];for(l=h;l>h-n+r;l--)delete y[l-1]}else if(r>n)for(l=h-n;l>w;l--)m=l+n-1,v=l+r-1,m in y?y[v]=y[m]:delete y[v];for(l=0;l<r;l++)y[l+w]=arguments[l+2];return y.length=h-n+r,f}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),p=r("825a"),g=r("7b0b"),m=r("fc6a"),v=r("c04e"),y=r("5c6c"),h=r("7c73"),w=r("df75"),O=r("241c"),j=r("057f"),_=r("7418"),C=r("06cf"),P=r("9bf2"),S=r("d1e7"),A=r("9112"),E=r("6eeb"),x=r("5692"),k=r("f772"),D=r("d012"),N=r("90e3"),F=r("b622"),R=r("e538"),J=r("746f"),M=r("d44e"),z=r("69f3"),T=r("b727").forEach,I=k("hidden"),B="Symbol",L="prototype",Q=F("toPrimitive"),U=z.set,W=z.getterFor(B),$=Object[L],q=i.Symbol,G=o("JSON","stringify"),H=C.f,K=P.f,V=j.f,X=S.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=i.QObject,it=!nt||!nt[L]||!nt[L].findChild,ot=c&&f((function(){return 7!=h(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H($,e);n&&delete $[e],K(t,e,r),n&&t!==$&&K($,e,n)}:K,at=function(t,e){var r=Y[t]=h(q[L]);return U(r,{type:B,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,r){t===$&&st(Z,e,r),p(t);var n=v(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,I)&&t[I][n]&&(t[I][n]=!1),r=h(r,{enumerable:y(0,!1)})):(l(t,I)||K(t,I,y(1,{})),t[I][n]=!0),ot(t,n,r)):K(t,n,r)},ut=function(t,e){p(t);var r=m(e),n=w(r).concat(pt(r));return T(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?h(t):ut(h(t),e)},lt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===$&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,I)&&this[I][e])||r)},bt=function(t,e){var r=m(t),n=v(e,!0);if(r!==$||!l(Y,n)||l(Z,n)){var i=H(r,n);return!i||!l(Y,n)||l(r,I)&&r[I][n]||(i.enumerable=!0),i}},dt=function(t){var e=V(m(t)),r=[];return T(e,(function(t){l(Y,t)||l(D,t)||r.push(t)})),r},pt=function(t){var e=t===$,r=V(e?Z:m(t)),n=[];return T(r,(function(t){!l(Y,t)||e&&!l($,t)||n.push(Y[t])})),n};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===$&&r.call(Z,t),l(this,I)&&l(this[I],e)&&(this[I][e]=!1),ot(this,e,y(1,t))};return c&&it&&ot($,e,{configurable:!0,set:r}),at(e,t)},E(q[L],"toString",(function(){return W(this).tag})),E(q,"withoutSetter",(function(t){return at(N(t),t)})),S.f=lt,P.f=st,C.f=bt,O.f=j.f=dt,_.f=pt,R.f=function(t){return at(F(t),t)},c&&(K(q[L],"description",{configurable:!0,get:function(){return W(this).description}}),a||E($,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),T(w(rt),(function(t){J(t)})),n({target:B,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(g(t))}}),G){var gt=!s||f((function(){var t=q();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!ct(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,G.apply(null,i)}})}q[L][Q]||A(q[L],Q,q[L].valueOf),M(q,B),D[I]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),c=a((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,b=7==t,d=5==t||l;return function(p,g,m,v){for(var y,h,w=o(p),O=i(w),j=n(g,m,3),_=a(O.length),C=0,P=v||c,S=e?P(p,_):r||b?P(p,0):void 0;_>C;C++)if((d||C in O)&&(y=O[C],h=j(y,C,w),t))if(e)S[C]=h;else if(h)switch(t){case 3:return!0;case 5:return y;case 6:return C;case 2:s.call(S,y)}else switch(t){case 4:return!1;case 7:s.call(S,y)}return l?-1:u||f?f:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},b7a5:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-3"},[r("h4",{staticClass:"text-sm-left"},[t._v(t._s(t.perfil.nombreUsuario)+" "),r("router-link",{staticClass:"btn btn-primary btn-sm mb-1",attrs:{to:"perfil",type:"button"}},[t._v("Mi Perfil")])],1),r("div",{staticClass:"mt-3"},[r("h5",{staticClass:"btn dropdown-toggle",staticStyle:{display:"inline"},attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("Peticiones enviadas ")]),r("ul",{staticClass:"dropdown-menu"},t._l(t.peticionesEnviadasF,(function(e,n){return r("li",{key:e.nombre,staticClass:"list-group-item bg-secundary",attrs:{bg:""}},[r("a",{staticClass:"dropdown-item"},[t._v(" "+t._s(e.nombre)+" "),r("button",{staticClass:"btn btn-outline-danger btn-sm mb-1",attrs:{type:"button"},on:{click:function(e){return t.cancelarPeticion(n)}}},[t._v("Cancelar")])])])})),0)]),r("div",{staticClass:"mt-3"},[r("h5",{staticClass:"btn dropdown-toggle",staticStyle:{display:"inline"},attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("Peticiones recibidas ")]),r("ul",{staticClass:"dropdown-menu"},t._l(t.peticionesRecibidasF,(function(e,n){return r("li",{key:e.nombre,staticClass:"list-group-item bg-secundary",attrs:{bg:""}},[r("a",{staticClass:"dropdown-item"},[t._v(" "+t._s(e.nombre)+" "),r("button",{staticClass:"btn btn-outline-success btn-sm mb-1",attrs:{type:"button"},on:{click:function(r){return t.aceptarAmigo(e.nombre,n)}}},[t._v("Aceptar")]),r("button",{staticClass:"btn btn-outline-danger btn-sm mb-1",attrs:{type:"button"},on:{click:function(e){return t.rechazarAmigo(n)}}},[t._v("Rechazar")])])])})),0)]),r("br"),r("div",[r("h5",{staticStyle:{display:"inline"}},[t._v("Amigos ")]),t._v(" "),r("router-link",{staticClass:"btn btn-outline-success btn-sm mb-1",attrs:{to:"agregarAmigo",type:"button"}},[t._v("+")])],1),r("ul",{staticClass:"list-group list-group-flush mt-2"},t._l(t.amigosConectados,(function(e){return r("li",{key:e.nombre,staticClass:"list-group-item bg-primary",attrs:{bg:""}},[t._v(t._s(e.nombre)+" - "+t._s(e.estado))])})),0),r("br"),r("ul",{staticClass:"list-group list-group-flush"},t._l(t.amigosDesconectados,(function(e){return r("li",{key:e.nombre,staticClass:"list-group-item bg-secondary",attrs:{bg:""}},[t._v(t._s(e.nombre)+" - "+t._s(e.estado))])})),0),r("br")])},i=[],o=r("5530"),a=(r("4de4"),r("a434"),r("2f62")),c={name:"ListaAmigos",computed:Object(o["a"])(Object(o["a"])({},Object(a["c"])(["perfil"])),{},{amigosConectados:function(){return this.perfil.listaAmigos.filter((function(t){return"Conectado"==t.estado}))},amigosDesconectados:function(){return this.perfil.listaAmigos.filter((function(t){return"No conectado"===t.estado}))},peticionesEnviadasF:function(){return this.perfil.peticionesEnviadas},peticionesRecibidasF:function(){return this.perfil.peticionesRecibidas}}),methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])(["anyadirAmigo"])),{},{recuperarNombre:function(){},aceptarAmigo:function(t,e){this.perfil.peticionesRecibidas.splice(e,1),this.anyadirAmigo(t)},rechazarAmigo:function(t){this.perfil.peticionesRecibidas.splice(t,1)},cancelarPeticion:function(t,e){this.perfil.peticionesEnviadas.splice(e,1)}})},s=c,u=r("2877"),f=Object(u["a"])(s,n,i,!1,null,null,null);e["a"]=f.exports},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=c.f,u=o(n),f={},l=0;while(u.length>l)r=i(n,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=i((function(){a(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=agregarAmigo~amigoDesafiado~ciegas~desafiar~inicio~pantallaJuego~pendientes~perfil~torneo.4cfa54bf.js.map
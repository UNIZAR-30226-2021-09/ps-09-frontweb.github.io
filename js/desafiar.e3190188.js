(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["desafiar"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),a=r("9112");for(var s in i){var c=n[s],f=c&&c.prototype;if(f&&f.forEach!==o)try{a(f,"forEach",o)}catch(u){f.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=o("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},"8abc":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5",attrs:{align:"center",id:"app"}},[r("p"),r("div",{staticClass:"mt-5"},[r("div",{staticClass:"row g-3"},[r("div",{staticClass:"col-sm-9"},[r("h2",[t._v(t._s(t.nombrePag))]),r("h4",{staticClass:"mt-5"},[t._v(" "+t._s(t.perfil.nombreUsuario)+": Listo ")]),r("p"),r("h6",{staticClass:"mt-4"},[t._v("Invita a un jugador...")]),r("p"),r("div",{staticClass:"d-grid gap-2 col-6 mx-auto mt-4"},t._l(t.perfil.listaAmigos,(function(e){return r("button",{key:e.nombre,staticClass:"btn btn-outline-info",attrs:{to:"amigoDesafiado",type:"button"},on:{click:function(r){return t.modificarDesafiado(e.nombre)}}},[t._v(t._s(e.nombre))])})),0),r("p"),r("h6",[t._v(" "+t._s(t.msg)+" ")]),r("p"),r("router-link",{staticClass:"btn btn-success disabled",attrs:{id:"btnSend",to:"amigoDesafiado",type:"button"}},[t._v("Enviar invitación")])],1),r("ListaAmigos")],1)])])},i=[],o=r("5530"),a=r("b7a5"),s=r("2f62"),c={name:"Desafiar",components:{ListaAmigos:a["a"]},data:function(){return{nombrePag:"Desafiar a un amigo",msg:"Selecciona un amigo al que desafiar"}},computed:Object(s["c"])(["perfil","amigoDesafiado"]),methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["setDesafiado"])),{},{modificarDesafiado:function(t){this.setDesafiado(t),this.msg="Vas a invitar a "+t;var e=document.getElementById("btnSend");e.classList.remove("disabled")}})},f=c,u=r("2877"),l=Object(u["a"])(f,n,i,!1,null,null,null);e["default"]=l.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),p=r("825a"),m=r("7b0b"),v=r("fc6a"),g=r("c04e"),y=r("5c6c"),h=r("7c73"),O=r("df75"),w=r("241c"),j=r("057f"),_=r("7418"),P=r("06cf"),S=r("9bf2"),C=r("d1e7"),D=r("9112"),E=r("6eeb"),x=r("5692"),A=r("f772"),k=r("d012"),N=r("90e3"),L=r("b622"),I=r("e538"),J=r("746f"),B=r("d44e"),F=r("69f3"),T=r("b727").forEach,U=A("hidden"),$="Symbol",q="prototype",M=L("toPrimitive"),Q=F.set,V=F.getterFor($),W=Object[q],z=i.Symbol,G=o("JSON","stringify"),H=P.f,K=S.f,R=j.f,X=C.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=i.QObject,it=!nt||!nt[q]||!nt[q].findChild,ot=s&&u((function(){return 7!=h(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(W,e);n&&delete W[e],K(t,e,r),n&&t!==W&&K(W,e,n)}:K,at=function(t,e){var r=Y[t]=h(z[q]);return Q(r,{type:$,tag:t,description:e}),s||(r.description=e),r},st=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,r){t===W&&ct(Z,e,r),p(t);var n=g(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,U)&&t[U][n]&&(t[U][n]=!1),r=h(r,{enumerable:y(0,!1)})):(l(t,U)||K(t,U,y(1,{})),t[U][n]=!0),ot(t,n,r)):K(t,n,r)},ft=function(t,e){p(t);var r=v(e),n=O(r).concat(pt(r));return T(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?h(t):ft(h(t),e)},lt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===W&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,U)&&this[U][e])||r)},bt=function(t,e){var r=v(t),n=g(e,!0);if(r!==W||!l(Y,n)||l(Z,n)){var i=H(r,n);return!i||!l(Y,n)||l(r,U)&&r[U][n]||(i.enumerable=!0),i}},dt=function(t){var e=R(v(t)),r=[];return T(e,(function(t){l(Y,t)||l(k,t)||r.push(t)})),r},pt=function(t){var e=t===W,r=R(e?Z:v(t)),n=[];return T(r,(function(t){!l(Y,t)||e&&!l(W,t)||n.push(Y[t])})),n};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===W&&r.call(Z,t),l(this,U)&&l(this[U],e)&&(this[U][e]=!1),ot(this,e,y(1,t))};return s&&it&&ot(W,e,{configurable:!0,set:r}),at(e,t)},E(z[q],"toString",(function(){return V(this).tag})),E(z,"withoutSetter",(function(t){return at(N(t),t)})),C.f=lt,S.f=ct,P.f=bt,w.f=j.f=dt,_.f=pt,I.f=function(t){return at(L(t),t)},s&&(K(z[q],"description",{configurable:!0,get:function(){return V(this).description}}),a||E(W,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),T(O(rt),(function(t){J(t)})),n({target:$,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:u((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(m(t))}}),G){var mt=!c||u((function(){var t=z();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!st(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,G.apply(null,i)}})}z[q][M]||D(z[q],M,z[q].valueOf),B(z,$),k[U]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),s=a((function(){o(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return o(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),s=r("65f0"),c=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,u=4==t,l=6==t,b=7==t,d=5==t||l;return function(p,m,v,g){for(var y,h,O=o(p),w=i(O),j=n(m,v,3),_=a(w.length),P=0,S=g||s,C=e?S(p,_):r||b?S(p,0):void 0;_>P;P++)if((d||P in w)&&(y=w[P],h=j(y,P,O),t))if(e)C[P]=h;else if(h)switch(t){case 3:return!0;case 5:return y;case 6:return P;case 2:c.call(C,y)}else switch(t){case 4:return!1;case 7:c.call(C,y)}return l?-1:f||u?u:C}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},b7a5:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-3"},[r("h4",{staticClass:"text-sm-left"},[t._v(t._s(t.perfil.nombreUsuario)+" "),r("router-link",{staticClass:"btn btn-primary btn-sm mb-1",attrs:{to:"perfil",type:"button"}},[t._v("Mi Perfil")])],1),r("p"),r("div",[r("h5",{staticStyle:{display:"inline"}},[t._v("Amigos ")]),r("router-link",{staticClass:"btn btn-outline-success btn-sm mb-1",attrs:{to:"agregarAmigo",type:"button"}},[t._v("+")])],1),r("ul",{staticClass:"list-group list-group-flush mt-2"},t._l(t.amigosConectados,(function(e){return r("li",{key:e.nombre,staticClass:"list-group-item bg-primary",attrs:{bg:""}},[t._v(t._s(e.nombre)+" - "+t._s(e.estado))])})),0),r("br"),r("ul",{staticClass:"list-group list-group-flush"},t._l(t.amigosDesconectados,(function(e){return r("li",{key:e.nombre,staticClass:"list-group-item bg-secondary",attrs:{bg:""}},[t._v(t._s(e.nombre)+" - "+t._s(e.estado))])})),0),r("br")])},i=[],o=r("5530"),a=(r("4de4"),r("2f62")),s={name:"ListaAmigos",computed:Object(o["a"])(Object(o["a"])({},Object(a["c"])(["perfil"])),{},{amigosConectados:function(){return this.perfil.listaAmigos.filter((function(t){return"Conectado"==t.estado}))},amigosDesconectados:function(){return this.perfil.listaAmigos.filter((function(t){return"No conectado"===t.estado}))}}),methods:{recuperarNombre:function(){}}},c=s,f=r("2877"),u=Object(f["a"])(c,n,i,!1,null,null,null);e["a"]=u.exports},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),a=r("fc6a"),s=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=s.f,f=o(n),u={},l=0;while(f.length>l)r=i(n,e=f[l++]),void 0!==r&&c(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),a=r("06cf").f,s=r("83ab"),c=i((function(){a(1)})),f=!s||c;n({target:"Object",stat:!0,forced:f,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=desafiar.e3190188.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["agregarAmigo"],{"057f":function(t,r,e){var n=e("fc6a"),i=e("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(r){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"159b":function(t,r,e){var n=e("da84"),i=e("fdbc"),o=e("17c2"),a=e("9112");for(var s in i){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,r,e){"use strict";var n=e("b727").forEach,i=e("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,r,e){var n=e("d039"),i=e("b622"),o=e("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var r=[],e=r.constructor={};return e[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"4de4":function(t,r,e){"use strict";var n=e("23e7"),i=e("b727").filter,o=e("1dde"),a=o("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));e("b64b"),e("a4d3"),e("4de4"),e("e439"),e("159b"),e("dbb4");function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function i(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){n(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}},"65f0":function(t,r,e){var n=e("861d"),i=e("e8b5"),o=e("b622"),a=o("species");t.exports=function(t,r){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?n(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},"746f":function(t,r,e){var n=e("428f"),i=e("5135"),o=e("e538"),a=e("9bf2").f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});i(r,t)||a(r,t,{value:o.f(t)})}},8418:function(t,r,e){"use strict";var n=e("c04e"),i=e("9bf2"),o=e("5c6c");t.exports=function(t,r,e){var a=n(r);a in t?i.f(t,a,o(0,e)):t[a]=e}},"857a":function(t,r,e){var n=e("1d80"),i=/"/g;t.exports=function(t,r,e,o){var a=String(n(t)),s="<"+r;return""!==e&&(s+=" "+e+'="'+String(o).replace(i,"&quot;")+'"'),s+">"+a+"</"+r+">"}},9911:function(t,r,e){"use strict";var n=e("23e7"),i=e("857a"),o=e("af03");n({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},a4d3:function(t,r,e){"use strict";var n=e("23e7"),i=e("da84"),o=e("d066"),a=e("c430"),s=e("83ab"),c=e("4930"),u=e("fdbf"),f=e("d039"),l=e("5135"),d=e("e8b5"),b=e("861d"),p=e("825a"),v=e("7b0b"),m=e("fc6a"),g=e("c04e"),y=e("5c6c"),h=e("7c73"),O=e("df75"),w=e("241c"),j=e("057f"),k=e("7418"),C=e("06cf"),_=e("9bf2"),P=e("d1e7"),E=e("9112"),x=e("6eeb"),S=e("5692"),A=e("f772"),N=e("d012"),D=e("90e3"),I=e("b622"),J=e("e538"),L=e("746f"),U=e("d44e"),F=e("69f3"),T=e("b727").forEach,$=A("hidden"),q="Symbol",B="prototype",M=I("toPrimitive"),Q=F.set,W=F.getterFor(q),z=Object[B],G=i.Symbol,H=o("JSON","stringify"),K=C.f,R=_.f,V=j.f,X=P.f,Y=S("symbols"),Z=S("op-symbols"),tt=S("string-to-symbol-registry"),rt=S("symbol-to-string-registry"),et=S("wks"),nt=i.QObject,it=!nt||!nt[B]||!nt[B].findChild,ot=s&&f((function(){return 7!=h(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=K(z,r);n&&delete z[r],R(t,r,e),n&&t!==z&&R(z,r,n)}:R,at=function(t,r){var e=Y[t]=h(G[B]);return Q(e,{type:q,tag:t,description:r}),s||(e.description=r),e},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,r,e){t===z&&ct(Z,r,e),p(t);var n=g(r,!0);return p(e),l(Y,n)?(e.enumerable?(l(t,$)&&t[$][n]&&(t[$][n]=!1),e=h(e,{enumerable:y(0,!1)})):(l(t,$)||R(t,$,y(1,{})),t[$][n]=!0),ot(t,n,e)):R(t,n,e)},ut=function(t,r){p(t);var e=m(r),n=O(e).concat(pt(e));return T(n,(function(r){s&&!lt.call(e,r)||ct(t,r,e[r])})),t},ft=function(t,r){return void 0===r?h(t):ut(h(t),r)},lt=function(t){var r=g(t,!0),e=X.call(this,r);return!(this===z&&l(Y,r)&&!l(Z,r))&&(!(e||!l(this,r)||!l(Y,r)||l(this,$)&&this[$][r])||e)},dt=function(t,r){var e=m(t),n=g(r,!0);if(e!==z||!l(Y,n)||l(Z,n)){var i=K(e,n);return!i||!l(Y,n)||l(e,$)&&e[$][n]||(i.enumerable=!0),i}},bt=function(t){var r=V(m(t)),e=[];return T(r,(function(t){l(Y,t)||l(N,t)||e.push(t)})),e},pt=function(t){var r=t===z,e=V(r?Z:m(t)),n=[];return T(e,(function(t){!l(Y,t)||r&&!l(z,t)||n.push(Y[t])})),n};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=D(t),e=function(t){this===z&&e.call(Z,t),l(this,$)&&l(this[$],r)&&(this[$][r]=!1),ot(this,r,y(1,t))};return s&&it&&ot(z,r,{configurable:!0,set:e}),at(r,t)},x(G[B],"toString",(function(){return W(this).tag})),x(G,"withoutSetter",(function(t){return at(D(t),t)})),P.f=lt,_.f=ct,C.f=dt,w.f=j.f=bt,k.f=pt,J.f=function(t){return at(I(t),t)},s&&(R(G[B],"description",{configurable:!0,get:function(){return W(this).description}}),a||x(z,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),T(O(et),(function(t){L(t)})),n({target:q,stat:!0,forced:!c},{for:function(t){var r=String(t);if(l(tt,r))return tt[r];var e=G(r);return tt[r]=e,rt[e]=r,e},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(v(t))}}),H){var vt=!c||f((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,r,e){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=r,(b(r)||void 0!==t)&&!st(t))return d(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!st(r))return r}),i[1]=r,H.apply(null,i)}})}G[B][M]||E(G[B],M,G[B].valueOf),U(G,q),N[$]=!0},a640:function(t,r,e){"use strict";var n=e("d039");t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},af03:function(t,r,e){var n=e("d039");t.exports=function(t){return n((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},b14d:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container mt-5",attrs:{align:"center",id:"app"}},[e("p"),e("div",{staticClass:"mt-5"},[e("div",{staticClass:"row g-3"},[e("div",{staticClass:"col-sm-9"},[e("h2",[t._v(t._s(t.titulo))]),e("div",{staticClass:"input-group mb-3 mt-5"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v(">")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nombre de usuario"},domProps:{value:t.nombre},on:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.enviarPeticion(r)},input:function(r){r.target.composing||(t.nombre=r.target.value)}}})]),e("div",{staticClass:"input-group mb-3"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("@")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enlace de invitación"},domProps:{value:t.link},on:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.enviarPeticion(r)},input:function(r){r.target.composing||(t.link=r.target.value)}}})]),e("button",{staticClass:"btn btn-primary mt-3",on:{click:t.enviarPeticion}},[t._v("Enviar invitación")]),e("button",{staticClass:"btn btn-warning mt-3",on:{click:t.emularError}},[t._v("~Usuario desconocido~")]),e("div",{staticClass:"mt-3"},[t.esEnviado?e("div",{class:["alert","alert-success"],attrs:{role:"alert"}},[t._v(" ¡Invitación enviada! ")]):t._e()]),e("div",{staticClass:"mt-3"},[t.datosInvalidos?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" Usuario desconocido ")]):t._e()])]),e("ListaAmigos")],1)])])},i=[],o=(e("9911"),e("b7a5")),a={name:"AgregarAmigo",components:{ListaAmigos:o["a"]},data:function(){return{titulo:"Agregar a un amigo",nombre:"",link:"",esEnviado:!1,datosInvalidos:!1}},methods:{enviarPeticion:function(){this.nombre="",this.link="",this.esEnviado=!0,this.datosInvalidos=!1},emularError:function(){this.datosInvalidos=!0,this.esEnviado=!1}}},s=a,c=e("2877"),u=Object(c["a"])(s,n,i,!1,null,null,null);r["default"]=u.exports},b64b:function(t,r,e){var n=e("23e7"),i=e("7b0b"),o=e("df75"),a=e("d039"),s=a((function(){o(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return o(i(t))}})},b727:function(t,r,e){var n=e("0366"),i=e("44ad"),o=e("7b0b"),a=e("50c4"),s=e("65f0"),c=[].push,u=function(t){var r=1==t,e=2==t,u=3==t,f=4==t,l=6==t,d=7==t,b=5==t||l;return function(p,v,m,g){for(var y,h,O=o(p),w=i(O),j=n(v,m,3),k=a(w.length),C=0,_=g||s,P=r?_(p,k):e||d?_(p,0):void 0;k>C;C++)if((b||C in w)&&(y=w[C],h=j(y,C,O),t))if(r)P[C]=h;else if(h)switch(t){case 3:return!0;case 5:return y;case 6:return C;case 2:c.call(P,y)}else switch(t){case 4:return!1;case 7:c.call(P,y)}return l?-1:u||f?f:P}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},b7a5:function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"col-sm-3"},[e("h4",{staticClass:"text-sm-left"},[t._v(t._s(t.perfil.nombreUsuario)+" "),e("router-link",{staticClass:"btn btn-primary btn-sm mb-1",attrs:{to:"perfil",type:"button"}},[t._v("Mi Perfil")])],1),e("p"),e("div",[e("h5",{staticStyle:{display:"inline"}},[t._v("Amigos ")]),e("router-link",{staticClass:"btn btn-outline-success btn-sm mb-1",attrs:{to:"agregarAmigo",type:"button"}},[t._v("+")])],1),e("ul",{staticClass:"list-group list-group-flush mt-2"},t._l(t.amigosConectados,(function(r){return e("li",{key:r.nombre,staticClass:"list-group-item bg-primary",attrs:{bg:""}},[t._v(t._s(r.nombre)+" - "+t._s(r.estado))])})),0),e("br"),e("ul",{staticClass:"list-group list-group-flush"},t._l(t.amigosDesconectados,(function(r){return e("li",{key:r.nombre,staticClass:"list-group-item bg-secondary",attrs:{bg:""}},[t._v(t._s(r.nombre)+" - "+t._s(r.estado))])})),0),e("br")])},i=[],o=e("5530"),a=(e("4de4"),e("2f62")),s={name:"ListaAmigos",computed:Object(o["a"])(Object(o["a"])({},Object(a["c"])(["perfil"])),{},{amigosConectados:function(){return this.perfil.listaAmigos.filter((function(t){return"Conectado"==t.estado}))},amigosDesconectados:function(){return this.perfil.listaAmigos.filter((function(t){return"No conectado"===t.estado}))}}),methods:{recuperarNombre:function(){}}},c=s,u=e("2877"),f=Object(u["a"])(c,n,i,!1,null,null,null);r["a"]=f.exports},dbb4:function(t,r,e){var n=e("23e7"),i=e("83ab"),o=e("56ef"),a=e("fc6a"),s=e("06cf"),c=e("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var r,e,n=a(t),i=s.f,u=o(n),f={},l=0;while(u.length>l)e=i(n,r=u[l++]),void 0!==e&&c(f,r,e);return f}})},e439:function(t,r,e){var n=e("23e7"),i=e("d039"),o=e("fc6a"),a=e("06cf").f,s=e("83ab"),c=i((function(){a(1)})),u=!s||c;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,r){return a(o(t),r)}})},e538:function(t,r,e){var n=e("b622");r.f=n},e8b5:function(t,r,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=agregarAmigo.3114d9d3.js.map
(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/InteractionClients-Vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("router-view")],1)},n=[],o={name:"App",components:{},data:function(){return{}}},i=o,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),m=Object(c["a"])(i,r,n,!1,null,null,null),v=m.exports;u()(m,{VApp:d["a"]});var p=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"5",sm:"2"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400",outlined:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"4",sm:"3"}},[a("h1",[e._v(e._s(e.title))])])],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-text-field",{attrs:{rules:[e.emailRules,e.rules.required],label:"Email",required:"",outlined:"",clearable:"",dense:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{"append-icon":e.show4?"visibility":"visibility_off",rules:[e.rules.required],type:e.show4?"text":"password",label:"Contraseña",outlined:"",clearable:"",dense:""},on:{"click:append":function(t){e.show4=!e.show4}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:e.loginEvent}},[e._v("Iniciar sesión")]),a("v-btn",{attrs:{to:"/register",text:""}},[e._v("Registrarse")])],1)],1)],1)],1)],1)],1)},h=[],b=a("7d1d"),w={name:"Login",data:function(){return{title:"Inicio",show1:!1,show2:!0,show3:!1,show4:!1,password:"",email:"",rules:{required:function(e){return!!e||"Este campo es obligatorio."}},emailRules:[function(e){return!!e||"El correo es requerido"},function(e){return/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/}]}},methods:{loginEvent:function(){var e=this;b.auth.signInWithEmailAndPassword(this.email,this.password).then((function(t){e.$store.commit("setCurrentUser",t.user),e.$store.dispatch("fetchUserProfile"),e.$router.push("/options")})).catch((function(e){console.log(e)}))}}},j=w,g=a("8336"),x=a("b0af"),y=a("99d9"),k=a("62ad"),_=a("a523"),C=a("da13"),V=a("5d23"),D=a("0fd9"),U=a("8654"),R=Object(c["a"])(j,f,h,!1,null,null,null),E=R.exports;u()(R,{VBtn:g["a"],VCard:x["a"],VCardActions:y["a"],VCol:k["a"],VContainer:_["a"],VListItem:C["a"],VListItemContent:V["a"],VRow:D["a"],VTextField:U["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"principal"},[a("div",{staticClass:"form"},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",outlined:""}},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"4",sm:"3"}},[a("h1",[e._v(e._s(e.title))])])],1),a("div",{staticClass:"registerContent"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"5",sm:"2"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Nombres",required:""},model:{value:e.names,callback:function(t){e.names=t},expression:"names"}})],1),a("v-col",{attrs:{cols:"1",md:"5",sm:"2"}},[a("v-text-field",{attrs:{rules:e.lastnamesRules,label:"Apellidos",required:""},model:{value:e.lastnames,callback:function(t){e.lastnames=t},expression:"lastnames"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("v-text-field",{attrs:{rules:e.emailRules,label:"Correo",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e.exist?a("v-label",{attrs:{color:"red"}},[e._v("El email ya está registrado")]):e._e(),a("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":e.show3?"visibility":"visibility_off",rules:[e.rules.required,e.rules.emailMatch],type:e.show3?"text":"password",name:"input-10-2",label:"Contraseña",hint:"Mínimo 8 caracteres",value:"",required:""},on:{"click:append":function(t){e.show3=!e.show3}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":e.show4?"visibility":"visibility_off",rules:[e.rules.required,e.rules.emailMatch,e.rules.samePassword],type:e.show4?"text":"password",name:"input-10-2",label:"Confirmar contraseña",hint:"Mínimo 8 caracteres",value:"",required:""},on:{"click:append":function(t){e.show4=!e.show4}},model:{value:e.conPassword,callback:function(t){e.conPassword=t},expression:"conPassword"}})],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-text-field",e._g({attrs:{value:e.computedDateFormattedMomentjs,clearable:"",label:"Seleccionar",readonly:"",hint:"Valido hasta","persistent-hint":""}},s))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[a("v-date-picker",{on:{change:function(t){e.menu1=!1}},model:{value:e.validoHasta,callback:function(t){e.validoHasta=t},expression:"validoHasta"}})],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("v-select",{attrs:{items:e.dependencies,"item-text":"name","menu-props":{maxHeight:"400"},label:"Seleccionar",multiple:"",hint:"Dependencias","persistent-hint":""},model:{value:e.selectedDependencies,callback:function(t){e.selectedDependencies=t},expression:"selectedDependencies"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"3",sm:"1"}},[a("p",[a("v-checkbox",{attrs:{label:"Activo",color:"primary",value:"true",id:"enabled","hide-details":""},model:{value:e.activo,callback:function(t){e.activo=t},expression:"activo"}})],1)])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"3",sm:"1"}},[a("v-btn",{staticStyle:{margin:"5px",background:"#08799C"},attrs:{disabled:e.disabledButtonRegister},on:{click:e.registerEvent}},[e._v("Aceptar")])],1),a("v-col",{attrs:{cols:"2",md:"3",sm:"1"}},[a("v-btn",{staticStyle:{margin:"5px",background:"#08799C"},attrs:{disabled:e.disabledButtonRegister,to:"/"}},[e._v("Cancelar")])],1)],1)],1),a("input",e._g({attrs:{type:"button"}},e.signup))],1)],1)],1)])},A=[],q=(a("6b54"),a("ac6a"),a("96cf"),a("3b8d")),P=(a("4be7"),a("c1df")),S=a.n(P),z=a("7d1d"),O={name:"Register",created:function(){window.console.log("sdadada");var e=[],t=[];z.dependenciesCollection.get().then(function(){var a=Object(q["a"])(regeneratorRuntime.mark((function a(s){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,s.forEach((function(t){e.push(t.data())}));case 2:return a.next=4,e.map((function(e){t.push(e.nombre)}));case 4:t=a.sent;case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()),window.console.log(t),this.dependencies=t},data:function(){var e=this;return{title:"Registro",names:"",lastnames:"",email:"",password:"",conPassword:"",validoHasta:(new Date).toISOString().substr(0,10),menu1:!1,menu2:!1,dependencies:[],selectedDependencies:[],exist:!1,activo:"false",show1:!1,show2:!0,show3:!1,show4:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},samePassword:function(t){return t===e.password||"Las contraseñas no coinciden"}},nameRules:[function(e){return!!e||"El nombre es requerido"},function(e){return e.length>3||"El nombre debe ser más largo a 3 caracteres"}],lastnameRules:[function(e){return!!e||"El apellido es requerido"},function(e){return e.length>3||"El apellido debe ser más largo a 3 caracteres"}],emailRules:[function(e){return!!e||"El correo es requerido"},function(e){return/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/}]}},computed:{computedDateFormattedMomentjs:function(){return this.validoHasta?S()(this.validoHasta).format("dddd, MMMM Do YYYY"):""},computedDateFormattedDatefns:function(){return this.validoHasta?format(this.validoHasta,"dddd, MMMM Do YYYY"):""}},methods:{registerEvent:function(){var e=this,t={names:this.names,lastnames:this.lastnames,email:this.email,password:this.password,validoHasta:this.validoHasta.toString(),dependencies:this.selectedDependencies,activo:this.activo};z.auth.createUserWithEmailAndPassword(this.email,this.password).then((function(a){z.usersCollection.doc(a.user.uid).set(t).then((function(t){e.$router.push("/login")}))}))}}},I=O,$=a("ac7c"),H=a("2e4b"),N=a("4bd4"),B=a("24c9"),L=a("e449"),T=a("b974"),F=Object(c["a"])(I,M,A,!1,null,null,null),Y=F.exports;u()(F,{VBtn:g["a"],VCard:x["a"],VCheckbox:$["a"],VCol:k["a"],VContainer:_["a"],VDatePicker:H["a"],VForm:N["a"],VLabel:B["a"],VMenu:L["a"],VRow:D["a"],VSelect:T["a"],VTextField:U["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[!0===e.eliminado?a("v-alert",{attrs:{type:"success"}},[e._v("Se eliminó el usuario.")]):e._e(),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"4",sm:"3"}},[a("h1",[e._v(e._s(e.title))])])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"3"}},[a("v-card",{attrs:{"max-width":"444"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-row",{attrs:{"pl-5":"","ml-5":""}},[a("v-col",[a("p",[e._v("Nombre:")])]),a("v-col",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.names,expression:"names"}],attrs:{justify:"start",rules:e.nameRules,required:""},domProps:{value:e.names},on:{input:function(t){t.target.composing||(e.names=t.target.value)}}})])],1),a("v-row",{attrs:{"pl-5":"","ml-5":""}},[a("v-col",[a("p",[e._v("Apellido:")])]),a("v-col",{attrs:{justify:"left"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastNames,expression:"lastNames"}],attrs:{rules:e.lastnamesRules,required:""},domProps:{value:e.lastNames},on:{input:function(t){t.target.composing||(e.lastNames=t.target.value)}}})])],1),a("v-row",{attrs:{"pl-5":"","ml-5":""}},[a("v-col",[a("p",[e._v("Contraseña:")])]),a("v-col",{attrs:{justify:"left"}},["checkbox"===(e.show3?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-group--focused",attrs:{"append-icon":e.show3?"visibility":"visibility_off",rules:[e.rules.required,e.rules.emailMatch],name:"input-10-2",label:"Contraseña",hint:"Mínimo 8 caracteres",value:"",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,"")>-1:e.password},on:{"click:append":function(t){e.show3=!e.show3},change:function(t){var a=e.password,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n="",o=e._i(a,n);s.checked?o<0&&(e.password=a.concat([n])):o>-1&&(e.password=a.slice(0,o).concat(a.slice(o+1)))}else e.password=r}}}):"radio"===(e.show3?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-group--focused",attrs:{"append-icon":e.show3?"visibility":"visibility_off",rules:[e.rules.required,e.rules.emailMatch],name:"input-10-2",label:"Contraseña",hint:"Mínimo 8 caracteres",value:"",required:"",type:"radio"},domProps:{checked:e._q(e.password,"")},on:{"click:append":function(t){e.show3=!e.show3},change:function(t){e.password=""}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-group--focused",attrs:{"append-icon":e.show3?"visibility":"visibility_off",rules:[e.rules.required,e.rules.emailMatch],name:"input-10-2",label:"Contraseña",hint:"Mínimo 8 caracteres",value:"",required:"",type:e.show3?"text":"password"},domProps:{value:e.password},on:{"click:append":function(t){e.show3=!e.show3},input:function(t){t.target.composing||(e.password=t.target.value)}}})])],1),a("v-row",{attrs:{"pl-5":"","ml-5":""}},[a("v-col",[a("p",[e._v("Correo:")])]),a("v-col",{attrs:{justify:"left"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{rules:e.emailRules,required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("p",[e._v("Valido hasta:")])]),a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-text-field",e._g({attrs:{value:e.computedDateFormattedMomentjs,clearable:"",label:"Seleccionar",readonly:"",hint:"Valido hasta","persistent-hint":""}},s))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[a("v-date-picker",{on:{change:function(t){e.menu1=!1}},model:{value:e.validoHasta,callback:function(t){e.validoHasta=t},expression:"validoHasta"}})],1)],1)],1),a("v-row",{attrs:{"pl-5":"","ml-5":""}},[a("v-col",[a("p",[e._v("Dependencias:")])]),a("v-col",{attrs:{justify:"left"}},[a("v-select",{attrs:{items:e.dependencies,"item-text":"name","menu-props":{maxHeight:"400"},label:"Seleccionar",multiple:"",hint:"Dependencias","persistent-hint":""},model:{value:e.selectedDependencies,callback:function(t){e.selectedDependencies=t},expression:"selectedDependencies"}})],1)],1),a("v-row",{attrs:{"pl-5":"","ml-5":""}},[a("v-col",{attrs:{justify:"center"}},[a("p",[a("v-checkbox",{attrs:{label:"Activo",color:"primary",value:"true",id:"enabled","hide-details":""},model:{value:e.activo,callback:function(t){e.activo=t},expression:"activo"}})],1)])],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:e.editUser}},[e._v("Aceptar")]),a("v-btn",{attrs:{text:"",to:"/options"}},[e._v("Atrás")]),this.$store.state.actualUser.uid===this.$store.state.userProfile.uid?a("v-btn",{attrs:{text:"",color:"red"},on:{click:e.deleteUser}},[e._v("Eliminar")]):e._e()],1)],1)],1)],1)],1)},G=[],J=a("2f62"),W=a("7d1d"),K={created:function(){window.console.log("sdadada");var e=[],t=[];W.dependenciesCollection.get().then(function(){var a=Object(q["a"])(regeneratorRuntime.mark((function a(s){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,s.forEach((function(t){e.push(t.data())}));case 2:return a.next=4,e.map((function(e){t.push(e.nombre)}));case 4:t=a.sent;case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()),window.console.log(t),this.dependencies=t},data:function(){var e=this;return{eliminado:!1,title:"Edición de usuario",validoHasta:(new Date).toISOString().substr(0,10),menu1:!1,menu2:!1,dependencies:[],selectedDependencies:[],actualUS:Object,show3:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},samePassword:function(t){return t===e.password||"Las contraseñas no coinciden"}},nameRules:[function(e){return!!e||"El nombre es requerido"},function(e){return e.length>3||"El nombre debe ser más largo a 3 caracteres"}],lastnameRules:[function(e){return!!e||"El apellido es requerido"},function(e){return e.length>3||"El apellido debe ser más largo a 3 caracteres"}],emailRules:[function(e){return!!e||"El correo es requerido"},function(e){return/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/}]}},methods:{deleteUser:function(){var e=this;W.usersCollection.doc(W.auth.currentUser.uid).delete().then((function(){W.auth.currentUser.delete().then((function(){e.eliminado=!0,setTimeout((function(){e.$router.push("/login")}),2e3)}))}))},editUser:function(){}},computed:Object(J["b"])({names:function(e){return e.actualUser.names},lastNames:function(e){return e.actualUser.lastnames},password:function(e){return e.actualUser.password},email:function(e){return e.actualUser.email},valido:function(e){return e.actualUser.validoHasta},dependencies:function(e){return e.actualUser.dependencies},activo:function(e){return e.actualUser.activo},computedDateFormattedMomentjs:function(){return this.validoHasta?S()(this.validoHasta).format("dddd, MMMM Do YYYY"):""},computedDateFormattedDatefns:function(){return this.validoHasta?format(this.validoHasta,"dddd, MMMM Do YYYY"):""}})},Q=K,X=a("0798"),ee=Object(c["a"])(Q,Z,G,!1,null,null,null),te=ee.exports;u()(ee,{VAlert:X["a"],VBtn:g["a"],VCard:x["a"],VCardActions:y["a"],VCheckbox:$["a"],VCol:k["a"],VContainer:_["a"],VDatePicker:H["a"],VListItem:C["a"],VListItemContent:V["a"],VMenu:L["a"],VRow:D["a"],VSelect:T["a"],VTextField:U["a"]});var ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"grey lighten-5"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"4",sm:"3"}},[a("h1",[e._v(e._s(e.title))])])],1),a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),a("v-card-title",[e._v(" Editar mi usuario")]),a("v-card-actions",[a("v-btn",{attrs:{color:"purple",text:"",to:"manageUser"}},[e._v("Ir")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),a("v-card-title",[e._v(" Gestionar dependencias")]),a("v-card-actions",[a("v-btn",{attrs:{color:"purple",text:"",to:"/manageDependencies"}},[e._v("Ir")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),a("v-card-title",[e._v("Buscar usuarios")]),a("v-card-actions",[a("v-btn",{attrs:{color:"purple",text:"",to:"/listUsers"}},[e._v("Ir")])],1)],1)],1)],1)],1)},se=[],re={data:function(){return{title:"Opciones de usuario",show:!1}}},ne=re,oe=a("adda"),ie=Object(c["a"])(ne,ae,se,!1,null,null,null),ce=ie.exports;u()(ie,{VBtn:g["a"],VCard:x["a"],VCardActions:y["a"],VCardTitle:y["b"],VCol:k["a"],VContainer:_["a"],VImg:oe["a"],VRow:D["a"]});var le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[!0===e.eliminado?a("v-alert",{attrs:{type:"success"}},[e._v("Se eliminó la dependencia.")]):e._e(),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"4",sm:"3"}},[a("h1",[e._v(e._s(e.title))])])],1),a("v-row",[a("v-col",[a("v-card",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"400px"},attrs:{"max-width":"800",id:"scroll-target"}},[a("v-list",{attrs:{subheader:""}},[a("v-subheader",[e._v("Dependecias")]),e._l(this.items,(function(t){return a("v-list-item",{key:t.nombre,attrs:{elevation:"",item:t},on:{click:function(a){return e.showUsers(t)}}},[a("v-list-item-content",[a("v-list-item-title",{attrs:{item:t},domProps:{textContent:e._s(t.data.nombre)}}),a("v-row",[a("v-col",{attrs:{cols:"4",md:"12",sm:"12"}},[a("v-list-item-subtitle",{domProps:{textContent:e._s(" Coordinador: "+t.data.coordinador+" - Maximo de Usuarios: "+t.data.numeroMaximoUsuarios)}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4",md:"12",sm:"12"}},[a("v-list-item-subtitle",{domProps:{textContent:e._s("Ubicación: "+t.data.ubicacion+" - Activa: "+t.data.activa)}})],1)],1)],1),a("v-list-item-action",[a("v-btn",{attrs:{text:""},on:{click:function(a){return e.goToEditDependency(t)}}},[e._v(" Editar ")]),a("v-btn",{attrs:{text:""},on:{click:function(a){return a.stopPropagation(),e.deleteDependency(t)}}},[e._v(" Eliminar ")])],1)],1)})),a("v-divider")],2)],1),a("v-btn",{on:{click:function(t){return e.goToRegisterD()}}},[e._v(" Agregar dependencia")])],1),a("v-col",[a("v-card",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"400px"},attrs:{"max-width":"800",id:"scroll-target"}},[a("v-list",{attrs:{subheader:""}},[a("v-subheader",[e._v("Usuarios de la dependencia seleccionada")]),e._l(this.itemsUsers,(function(t){return a("v-list-item",{key:t.names,attrs:{elevation:""}},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.names+t.lastnames)}})],1)],1)})),a("v-divider")],2)],1)],1)],1),this.activoEdit?e._e():a("div",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-subheader",[e._v("Editar")]),a("div",{staticClass:"registerContent"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.actualDep.data.nombre,expression:"actualDep.data.nombre"}],attrs:{type:"text",rules:e.nameRules,required:""},domProps:{value:e.actualDep.data.nombre},on:{input:function(t){t.target.composing||e.$set(e.actualDep.data,"nombre",t.target.value)}}})])],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.actualDep.data.coordinador,expression:"actualDep.data.coordinador"}],attrs:{rules:e.nameRules,required:""},domProps:{value:e.actualDep.data.coordinador},on:{input:function(t){t.target.composing||e.$set(e.actualDep.data,"coordinador",t.target.value)}}})])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.actualDep.data.numeroMaximoUsuarios,expression:"actualDep.data.numeroMaximoUsuarios"}],attrs:{required:"",type:"number",min:"1"},domProps:{value:e.actualDep.data.numeroMaximoUsuarios},on:{input:function(t){t.target.composing||e.$set(e.actualDep.data,"numeroMaximoUsuarios",t.target.value)}}})])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.actualDep.data.ubicacion,expression:"actualDep.data.ubicacion"}],attrs:{rules:e.nameRules,required:""},domProps:{value:e.actualDep.data.ubicacion},on:{input:function(t){t.target.composing||e.$set(e.actualDep.data,"ubicacion",t.target.value)}}})])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"3",sm:"1"}},[a("p",[a("v-checkbox",{attrs:{label:"Activo",color:"primary",value:"true",id:"enabled","hide-details":""},model:{value:e.actualDep.data.activa,callback:function(t){e.$set(e.actualDep.data,"activa",t)},expression:"actualDep.data.activa"}})],1)])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"3",sm:"1"}},[a("v-btn",{staticStyle:{margin:"5px",background:"#08799C"},attrs:{disabled:e.disabledButtonRegister},on:{click:function(t){return e.editEvent(e.actualDep)}}},[e._v("Aceptar")])],1),a("v-col",{attrs:{cols:"2",md:"3",sm:"1"}},[a("v-btn",{staticStyle:{margin:"5px",background:"#08799C"},attrs:{disabled:e.disabledButtonRegister},on:{click:function(t){return e.cancelEdit()}}},[e._v("Cancelar")])],1)],1)],1)],1)],1)],1)},ue=[],de=a("7d1d"),me={data:function(){return{title:"Gestión de dependencias",eliminado:!1,items:[],itemsUsers:[],depenItems:[],useritems:[],activoEdit:!0,actualDep:Object}},created:function(){this.datosDependencia()},methods:{cancelEdit:function(){this.activoEdit=!0},editEvent:function(e){de.dependenciesCollection.doc(e.id).set({nombre:e.data.nombre,coordinador:e.data.coordinador,activa:e.data.activa,numeroMaximoUsuarios:e.data.numeroMaximoUsuarios,ubicacion:e.data.ubicacion}),this.activoEdit=!0},goToRegisterD:function(){this.$router.push("/registerD")},goToEditDependency:function(e){this.activoEdit=!1,this.actualDep=e},deleteDependency:function(e){var t=this;de.dependenciesCollection.doc(e.id).delete().then((function(){t.eliminado=!0,t.datosDependencia(),setTimeout((function(){t.eliminado=!1}),2500)}))},showUsers:function(e){var t=this,a=[],s=[];de.usersCollection.where("dependencies","array-contains",e.data.nombre).get().then(function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.forEach((function(e){t.itemsUsers.push(e.data())})),e.next=3,a.map((function(e){s.push(e.names)}));case 3:s=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.itemsUsers=s},datosDependencia:function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(){var t,a,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[],a=[],de.dependenciesCollection.get().then(function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.forEach((function(e){var t=e.data(),a=e.id,r={data:t,id:a};s.items.push(r)})),e.next=3,t.map((function(e){a.push(e.nombre)}));case 3:a=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.items=a;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},ve=me,pe=a("ce7e"),fe=a("8860"),he=a("1800"),be=a("e0c7"),we=Object(c["a"])(ve,le,ue,!1,null,null,null),je=we.exports;u()(we,{VAlert:X["a"],VBtn:g["a"],VCard:x["a"],VCheckbox:$["a"],VCol:k["a"],VContainer:_["a"],VDivider:pe["a"],VForm:N["a"],VList:fe["a"],VListItem:C["a"],VListItemAction:he["a"],VListItemContent:V["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VRow:D["a"],VSubheader:be["a"]});var ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"7",sm:"4"}},[a("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"search",label:"Buscar"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-col",[a("v-btn",[e._v("Buscar")]),a("v-btn",{attrs:{to:"/register"}},[e._v("Añadir")])],1)],1)],1)},xe=[],ye={},ke=ye,_e=Object(c["a"])(ke,ge,xe,!1,null,null,null),Ce=_e.exports;u()(_e,{VBtn:g["a"],VCol:k["a"],VContainer:_["a"],VRow:D["a"],VTextField:U["a"]});var Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"principal"},[a("div",{staticClass:"form"},[!0===e.agregado?a("v-alert",{attrs:{type:"success"}},[e._v("Se agregó la nueva dependencia.")]):e._e(),a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",outlined:""}},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"4",sm:"3"}},[a("h1",[e._v(e._s(e.title))])])],1),a("div",{staticClass:"registerContent"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Nombre",required:""},model:{value:e.names,callback:function(t){e.names=t},expression:"names"}})],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Coordinador",required:""},model:{value:e.coordinador,callback:function(t){e.coordinador=t},expression:"coordinador"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Maximos de usuarios",required:"",type:"number",min:"1"},model:{value:e.mxmUsers,callback:function(t){e.mxmUsers=t},expression:"mxmUsers"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"6",sm:"2"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Ubicación",required:""},model:{value:e.ubication,callback:function(t){e.ubication=t},expression:"ubication"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"3",sm:"1"}},[a("p",[a("v-checkbox",{attrs:{label:"Activo",color:"primary",value:"true",id:"enabled","hide-details":""},model:{value:e.activo,callback:function(t){e.activo=t},expression:"activo"}})],1)])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1",md:"3",sm:"1"}},[a("v-btn",{staticStyle:{margin:"5px",background:"#08799C"},attrs:{disabled:e.disabledButtonRegister},on:{click:e.registerEvent}},[e._v("Aceptar")])],1),a("v-col",{attrs:{cols:"2",md:"3",sm:"1"}},[a("v-btn",{staticStyle:{margin:"5px",background:"#08799C"},attrs:{disabled:e.disabledButtonRegister,to:"/"}},[e._v("Cancelar")])],1)],1)],1),a("input",e._g({attrs:{type:"button"}},e.signup))],1)],1)],1)])},De=[],Ue=a("7d1d"),Re={data:function(){return{title:"Registro dependencias",names:"",coordinador:"",mxmUsers:"",ubication:"",activo:"false",agregado:!1}},methods:{registerEvent:function(){var e=this,t={nombre:this.names,coordinador:this.coordinador,numeroMaximoUsuarios:this.mxmUsers,ubicacion:this.ubication,activa:this.activo};Ue.dependenciesCollection.doc().set(t).then((function(t){e.agregado=!0,setTimeout((function(){e.$router.push("/options")}),2e3)}))}}},Ee=Re,Me=Object(c["a"])(Ee,Ve,De,!1,null,null,null),Ae=Me.exports;u()(Me,{VAlert:X["a"],VBtn:g["a"],VCard:x["a"],VCheckbox:$["a"],VCol:k["a"],VContainer:_["a"],VForm:N["a"],VRow:D["a"],VTextField:U["a"]});var qe=a("8aa5"),Pe=a.n(qe);s["a"].use(p["a"]);var Se=new p["a"]({routes:[{path:"/",component:E},{path:"/login",component:E},{path:"/register",component:Y},{path:"/manageUser",component:te,meta:{requiresAuth:!0}},{path:"/options",component:ce,meta:{requiresAuth:!0}},{path:"/manageDependencies",component:je,meta:{requiresAuth:!0}},{path:"/listUsers",component:Ce,meta:{requiresAuth:!0}},{path:"/registerD",component:Ae,meta:{requiresAuth:!0}}]});Se.beforeEach((function(e,t,a){var s=e.matched.some((function(e){return e.meta.requiresAuth})),r=Pe.a.auth().currentUser;s&&!r?a("/login"):a()}));var ze=Se,Oe=a("f309");s["a"].use(Oe["a"]);var Ie=new Oe["a"]({icons:{iconfont:"mdi"}}),$e=a("7d1d");s["a"].use(J["a"]);var He,Ne=new J["a"].Store({state:{currentUser:null,userProfile:{},actualUser:{names:"",lastnames:"",email:"",password:"",conPassword:"",valido:(new Date).toISOString().substr(0,10),dependencies:[],activo:"false"}},mutations:{setCurrentUser:function(e,t){e.currentUser=t},setUserProfile:function(e,t){e.userProfile=t},setActualUser:function(e,t){e.actualUser=t}},actions:{fetchUserProfile:function(e){var t=e.commit,a=e.state;$e.usersCollection.doc(a.currentUser.uid).get().then((function(e){t("setUserProfile",e.data()),t("setActualUser",e.data()),console.log(e.data())})).catch((function(e){console.log(e)}))}}}),Be=a("7d1d");s["a"].config.productionTip=!1,Be.auth.onAuthStateChanged((function(e){He||(He=new s["a"]({el:"#app",router:ze,vuetify:Ie,store:Ne,render:function(e){return e(v)}}).$mount("#app"))}))},"7d1d":function(e,t,a){"use strict";a.r(t),a.d(t,"db",(function(){return o})),a.d(t,"auth",(function(){return i})),a.d(t,"currentUser",(function(){return c})),a.d(t,"usersCollection",(function(){return u})),a.d(t,"dependenciesCollection",(function(){return d}));var s=a("8aa5"),r=a.n(s),n=(a("e71f"),a("ea7b"),{apiKey:"AIzaSyAHdlRstqLJuwtSYX3GlBQPLOf3FNlBG1w",authDomain:"tallerframeworkjs.firebaseapp.com",databaseURL:"https://tallerframeworkjs.firebaseio.com",projectId:"tallerframeworkjs",storageBucket:"tallerframeworkjs.appspot.com",messagingSenderId:"227883648235",appId:"1:227883648235:web:aaced749f3ddea433eaaae",measurementId:"G-RMMZWZF62Z"});r.a.initializeApp(n);var o=r.a.firestore(),i=r.a.auth(),c=i.currentUser,l={timestampsInSnapshots:!0};o.settings(l);var u=o.collection("users"),d=o.collection("dependencies")}});
//# sourceMappingURL=app.f1468816.js.map
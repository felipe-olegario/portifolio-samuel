(function(t){function e(e){for(var r,o,c=e[0],i=e[1],l=e[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;s.push([1,"chunk-vendors"]),n()})({0:function(t,e){},"075c":function(t,e,n){},1:function(t,e,n){t.exports=n("56d7")},"384c":function(t,e,n){"use strict";n("075c")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=n("7496"),s=n("40dc"),o=n("8336"),c=n("5e66"),i=n("3e35"),l=n("62ad"),u=n("553a"),f=n("adda"),p=n("8860"),d=n("da13"),y=n("5d23"),g=n("f6c4"),h=n("e449"),v=n("490a"),b=n("0fd9"),m=n("2a7f"),_=function(){var t=this,e=t._self._c;return e(a["a"],[e(s["a"],{attrs:{fixed:"",color:"black",dark:"","fade-img-on-scroll":""}},[e("div",{staticClass:"container1"},[e("div",{staticClass:"justify-space-between"},[e(m["a"],{staticClass:"font"},[t._v("MY FAMILY")]),e("div",[e(h["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:r}){return[e(o["a"],t._g(t._b({staticClass:"font",attrs:{dark:""}},"v-btn",r,!1),n),[t._v(" MOUNTH ")])]}}])},[e(p["a"],t._l(t.mounths,(function(n,r){return e(d["a"],{key:r},[e(y["a"],[t._v(t._s(n)+"º")])],1)})),1)],1)],1)],1)])]),e(g["a"],[e(c["a"],{staticClass:"mb-5",attrs:{height:"980",vertical:""}},t._l(t.imgs.slice(15,19),(function(t,n){return e(i["a"],{key:n,attrs:{src:t,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1),e(b["a"],t._l(t.imgs,(function(n){return e(l["a"],{key:n,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[e(f["a"],{staticClass:"grey lighten-2",attrs:{src:n,"lazy-src":n,"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(b["a"],{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e(v["a"],{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1),e(u["a"],{staticClass:"mt-5",attrs:{color:"black",dark:""}},[e(l["a"],{staticClass:"text-center",attrs:{cols:"12 font"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("For us")])])],1)],1)},w=[],j=n("4a9d"),k=n.n(j),O={name:"App",components:{},data:()=>({imgs:[],mounths:[1,2,3,4,5,6,7,8,9,10,11,12]}),beforeMount(){this.listImages()},methods:{async listImages(){try{k.a.config.setPromisesDependency(),k.a.config.update({accessKeyId:"AKIAUETKRB4OKX7H2JVQ",secretAccessKey:"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"});const t=new k.a.S3({region:"us-east-1"}),e=await t.listObjectsV2({Bucket:"fotos-samuel"}).promise();for(let n of e.Contents){console.log(n.Key);const t="https://d2o8igylk90jyh.cloudfront.net/"+n.Key;this.imgs.push(t)}}catch(t){console.log("Error",t)}}}},x=O,C=(n("384c"),n("2877")),M=Object(C["a"])(x,_,w,!1,null,"2e069599",null),K=M.exports,P=n("f309");r["a"].use(P["a"]);var S=new P["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:S,render:t=>t(K)}).$mount("#app")}});
//# sourceMappingURL=app.15400e52.js.map
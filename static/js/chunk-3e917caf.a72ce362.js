(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e917caf"],{2423:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return r}));var a=n("b775");function l(t){return Object(a["a"])({url:"/vue-element-admin/article/list",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/vue-element-admin/article/detail",method:"get",params:{id:t}})}function o(t){return Object(a["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function u(t){return Object(a["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}},"5fb3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",[n("FilenameOption",{model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),t._v(" "),n("AutoWidthOption",{model:{value:t.autoWidth,callback:function(e){t.autoWidth=e},expression:"autoWidth"}}),t._v(" "),n("BookTypeOption",{model:{value:t.bookType,callback:function(e){t.bookType=e},expression:"bookType"}}),t._v(" "),n("el-button",{staticStyle:{margin:"0 0 20px 20px"},attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-document"},on:{click:t.handleDownload}},[t._v("\n      "+t._s(t.$t("excel.export"))+" Excel\n    ")]),t._v(" "),n("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html",target:"_blank"}},[n("el-tag",{attrs:{type:"info"}},[t._v("Documentation")])],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"Date",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)},l=[],i=n("2423"),o=n("ed08"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[t._v("Filename: ")]),t._v(" "),n("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:t.$t("excel.placeholder"),"prefix-icon":"el-icon-document"},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}})],1)},r=[],c={props:{value:{type:String,default:""}},computed:{filename:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},s=c,d=n("2877"),p=Object(d["a"])(s,u,r,!1,null,null,null),f=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[t._v("Cell Auto-Width: ")]),t._v(" "),n("el-radio-group",{model:{value:t.autoWidth,callback:function(e){t.autoWidth=e},expression:"autoWidth"}},[n("el-radio",{attrs:{label:!0,border:""}},[t._v("\n      True\n    ")]),t._v(" "),n("el-radio",{attrs:{label:!1,border:""}},[t._v("\n      False\n    ")])],1)],1)},h=[],v={props:{value:{type:Boolean,default:!0}},computed:{autoWidth:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},b=v,_=Object(d["a"])(b,m,h,!1,null,null,null),g=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[t._v("Book Type: ")]),t._v(" "),n("el-select",{staticStyle:{width:"120px"},model:{value:t.bookType,callback:function(e){t.bookType=e},expression:"bookType"}},t._l(t.options,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)},k=[],x={props:{value:{type:String,default:"xlsx"}},data:function(){return{options:["xlsx","csv","txt"]}},computed:{bookType:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},w=x,O=Object(d["a"])(w,y,k,!1,null,null,null),T=O.exports,S={name:"ExportExcel",components:{FilenameOption:f,AutoWidthOption:g,BookTypeOption:T},data:function(){return{list:null,listLoading:!0,downloadLoading:!1,filename:"",autoWidth:!0,bookType:"xlsx"}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(i["c"])().then((function(e){t.list=e.data.items,t.listLoading=!1}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([n.e("chunk-6e83591c"),n.e("chunk-5164a781"),n.e("chunk-5bdd67a2"),n.e("chunk-54b312fe")]).then(n.bind(null,"4bf8d")).then((function(e){var n=["Id","Title","Author","Readings","Date"],a=["id","title","author","pageviews","display_time"],l=t.list,i=t.formatJson(a,l);e.export_json_to_excel({header:n,data:i,filename:t.filename,autoWidth:t.autoWidth,bookType:t.bookType}),t.downloadLoading=!1}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return"timestamp"===t?Object(o["f"])(e[t]):e[t]}))}))}}},j=S,W=(n("c1d9"),Object(d["a"])(j,a,l,!1,null,null,null));e["default"]=W.exports},c1d9:function(t,e,n){"use strict";var a=n("f8f1"),l=n.n(a);l.a},f8f1:function(t,e,n){}}]);
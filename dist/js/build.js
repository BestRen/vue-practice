webpackJsonp([0],{101:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.exampleApiCtrl=t.sliderMenuCtrl=void 0;var s=n(13),i=a(s),r=n(104),l=a(r),o=n(379),u=a(o),c=n(378),d=a(c);i.default.use(l.default);var m=new l.default.Store(u.default),f=new l.default.Store(d.default);t.sliderMenuCtrl=m,t.exampleApiCtrl=f},141:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(13),i=a(s),r=n(103),l=a(r),o=n(388),u=a(o),c=n(387),d=a(c),m=n(386),f=a(m),p=n(382),h=a(p),v=n(384),_=a(v),g=n(383),x=a(g),y=n(385),b=a(y),w=n(389),C=a(w),A=n(381),k=a(A);i.default.component("appHeader",_.default),i.default.component("appFooter",x.default),i.default.component("sliderMenu",b.default),i.default.component("example",{template:'<button v-on:click="updateMessage($event)">{{ message }}</button><span>HHHH</span><button>aaa</button>',data:function(){return{message:"not updated"}},methods:{updateMessage:function(e){this.message="updated"}}}),i.default.use(l.default);var M={routes:[{path:"/",redirect:"/index"},{path:"/",component:u.default,children:[{path:"index",component:d.default,name:"首頁"},{path:"fileReader",component:f.default,name:"fileReader"},{path:"alert",component:h.default,name:"alert"},{path:"slideshow",component:C.default,name:"slideshow"},{path:"ajax",component:k.default,name:"ajax"}]}]},F=new l.default(M);t.default=F},143:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(13),i=a(s),r=n(141),l=a(r),o=n(102),u=a(o),c=n(357),d=a(c),m=n(380),f=a(m);i.default.use(u.default,{locale:d.default}),new i.default({el:"#app",router:l.default,render:function(e){return e(f.default)}})},145:function(e,t){},27:function(e,t){e.exports=function(e,t,n,a,s){var i,r=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(i=e,r=e.default);var o="function"==typeof r?r.options:r;t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),a&&(o._scopeId=a);var u;if(s?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},o._ssrRegister=u):n&&(u=n),u){var c=o.functional,d=c?o.render:o.beforeCreate;c?o.render=function(e,t){return u.call(t),d(e,t)}:o.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:r,options:o}}},357:function(e,t,n){"use strict";t.__esModule=!0,t.default={el:{colorpicker:{confirm:"確認",clear:"清空"},datepicker:{now:"現在",today:"今天",cancel:"取消",clear:"清空",confirm:"確認",selectDate:"選擇日期",selectTime:"選擇時間",startDate:"開始日期",startTime:"開始時間",endDate:"結束日期",endTime:"結束時間",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加載中",noMatch:"無匹配資料",noData:"無資料",placeholder:"請選擇"},cascader:{noMatch:"無匹配資料",loading:"加載中",placeholder:"請選擇"},pagination:{goto:"前往",pagesize:"項/頁",total:"共 {total} 項",pageClassifier:"頁"},messagebox:{title:"提示",confirm:"確定",cancel:"取消",error:"輸入的資料不符規定!"},upload:{delete:"刪除",preview:"查看圖片",continue:"繼續上傳"},table:{emptyText:"暫無資料",confirmFilter:"篩選",resetFilter:"重置",clearFilter:"全部",sumText:"Sum"},tree:{emptyText:"暫無資料"},transfer:{noMatch:"無匹配資料",noData:"無資料",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"}}}},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(101);t.default={data:function(){return{textarea:""}},mounted:function(){a.exampleApiCtrl.dispatch("callApi")},computed:{msg:function(){return"Ajax!!"},data:function(){return a.exampleApiCtrl.state.data}},methods:{callApi:function(){a.exampleApiCtrl.dispatch("callApi")}}}},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{msg:function(){return"Alert!!"}}}},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(101);t.default={data:function(){return{pageName:"測試"}},computed:{status:function(){return a.sliderMenuCtrl.state.status}},methods:{menuControl:function(){this.status?a.sliderMenuCtrl.dispatch("Hide"):a.sliderMenuCtrl.dispatch("Show")}}}},372:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(101),s=n(141),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={computed:{status:function(){return a.sliderMenuCtrl.state.status}},methods:{handle:function(e){e.length>0&&(i.default.push({name:e}),a.sliderMenuCtrl.dispatch("Hide"))}}}},373:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=function(){function e(){a(this,e)}return s(e,[{key:"updata",value:function(e){var t=this,n=void 0,a=new FileReader,s=e.target.files[0],i=document.createElement("img");a.onload=function(){i.onload=function(){(n=function(e,n){var a=document.createElement("canvas"),s=a.getContext("2d");i.height>n?(a.width=n,a.height=i.width/i.height*n):(a.width=i.height,a.height=i.width),s.drawImage(e,0,0,i.width,e.height,0,0,a.height,a.width),t.img=a.toDataURL("image/png",.8)})(i,500)},i.src=a.result},a.readAsDataURL(s)}}]),e}(),r=new i;t.default={data:function(){return{img:""}},methods:{updata:r.updata},computed:{msg:function(){return"FileReader!!"}}}},374:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=function(){function e(){a(this,e)}return s(e,[{key:"edit",value:function(e){this.index=e,this.show=!1,this.firstName=this.items[e].Firstname,this.lastName=this.items[e].Lastname,this.age=this.items[e].Age}},{key:"save",value:function(){this.firstName&&this.lastName&&this.age&&(this.items[this.index].Firstname=this.firstName,this.items[this.index].Lastname=this.lastName,this.items[this.index].Age=this.age,this.firstName="",this.lastName="",this.age="",this.show=!0)}}]),e}(),r=new i;t.default={data:function(){return{items:[],firstName:"",lastName:"",age:"",show:!0,loading:!1}},computed:{msg:function(){return"Hello Vue!!"}},methods:{getData:function(){var e=this;this.loading=!0,setTimeout(function(){e.loading=!1,e.items=[{Firstname:"Jill",Lastname:"Smith",Age:"50"},{Firstname:"Eve",Lastname:"Jackson",Age:"94"}]},300)},add:function(){this.firstName&&this.lastName&&this.age&&this.items.push({Firstname:this.firstName,Lastname:this.lastName,Age:this.age})},removeData:function(e){this.items.splice(e,1)},edit:r.edit,save:r.save}}},375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{slideIndex:0,imgArray:[{index:1,class:"mySlides active",src:"http://fakeimg.pl/100/?text=01"},{index:2,class:"mySlides",src:"http://fakeimg.pl/100/?text=02"},{index:3,class:"mySlides",src:"http://fakeimg.pl/100/?text=03"},{index:4,class:"mySlides",src:"http://fakeimg.pl/100/?text=04"}]}},created:function(){},mounted:function(){},computed:{msg:function(){return"Slideshow!!"}},methods:{arrowLeft:function(e){0===this.slideIndex?(this.slideIndex=3,this.imgArray[0].class="mySlides",this.imgArray[this.slideIndex].class="mySlides active"):(this.imgArray[this.slideIndex].class="mySlides",this.slideIndex-=1,this.imgArray[this.slideIndex].class="mySlides active")},arrowRight:function(e){this.slideIndex===this.imgArray.length-1?(this.slideIndex=0,this.imgArray[this.imgArray.length-1].class="mySlides",this.imgArray[this.slideIndex].class="mySlides active"):(this.imgArray[this.slideIndex].class="mySlides",this.slideIndex+=1,this.imgArray[this.slideIndex].class="mySlides active")}}}},377:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return new Promise(function(t,n){var a=new XMLHttpRequest;a.onload=function(e){t(200===e.target.status?JSON.parse(e.target.response):JSON.parse(e.target.response))},a.onerror=function(e){n(JSON.parse(e.target.response))},a.open("GET",e),a.send(null)})};t.callAjax=a},378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(377),s={data:null},i={getData:function(e,t){e.data=t}},r={callApi:function(e){var t=e.commit;(0,a.callAjax)("http://128.199.162.67:8080/tmp_note/get").then(function(e){t("getData",e)})}},l={};t.default={state:s,getters:l,actions:r,mutations:i}},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={status:!1},s={show:function(e){e.status=!0},hide:function(e){e.status=!1}},i={Show:function(e){return(0,e.commit)("show")},Hide:function(e){return(0,e.commit)("hide")}},r={};t.default={state:a,getters:r,actions:i,mutations:s}},380:function(e,t,n){var a=n(27)(null,n(396),null,null,null);e.exports=a.exports},381:function(e,t,n){var a=n(27)(n(369),n(392),null,null,null);e.exports=a.exports},382:function(e,t,n){var a=n(27)(n(370),n(398),null,null,null);e.exports=a.exports},383:function(e,t,n){var a=n(27)(null,n(391),null,null,null);e.exports=a.exports},384:function(e,t,n){var a=n(27)(n(371),n(397),null,null,null);e.exports=a.exports},385:function(e,t,n){var a=n(27)(n(372),n(399),null,null,null);e.exports=a.exports},386:function(e,t,n){var a=n(27)(n(373),n(393),null,null,null);e.exports=a.exports},387:function(e,t,n){var a=n(27)(n(374),n(395),null,null,null);e.exports=a.exports},388:function(e,t,n){var a=n(27)(null,n(394),null,null,null);e.exports=a.exports},389:function(e,t,n){var a=n(27)(n(375),n(390),null,null,null);e.exports=a.exports},390:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{domProps:{textContent:e._s(e.msg)}}),e._v(" "),n("div",{staticClass:"slide-show"},[e._l(e.imgArray,function(e){return n("img",{class:e.class,attrs:{src:e.src}})}),e._v(" "),n("button",{staticClass:"arrow-left",on:{click:function(t){e.arrowLeft(-1)}}},[e._v("❮")]),e._v(" "),n("button",{staticClass:"arrow-right",on:{click:function(t){e.arrowRight(1)}}},[e._v("❯")])],2)])},staticRenderFns:[]}},391:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app-footer"},[n("span",[e._v("Footer")])])}]}},392:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{domProps:{textContent:e._s(e.msg)}}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.callApi}},[e._v("Call Ajax")]),e._v(" "),n("div",{domProps:{textContent:e._s(e.data)}}),e._v(" "),n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}}),e._v(" "),n("el-button",{attrs:{type:"primary",size:"large"}},[e._v("送出")])],1)},staticRenderFns:[]}},393:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{domProps:{textContent:e._s(e.msg)}}),e._v(" "),n("img",{attrs:{src:e.img}}),e._v(" "),n("input",{attrs:{id:"demo_input",type:"file",name:"pic",accept:"image/*"},on:{change:e.updata}})])},staticRenderFns:[]}},394:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("appHeader"),e._v(" "),n("sliderMenu"),e._v(" "),n("router-view"),e._v(" "),n("appFooter")],1)},staticRenderFns:[]}},395:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{domProps:{textContent:e._s(e.msg)}}),e._v(" "),n("button",{on:{click:e.getData}},[e._v("Get Data!!")]),e._v(" "),n("el-row",{attrs:{gutter:24}},[n("el-col",{attrs:{xs:8,sm:6,md:4,lg:6}},[n("div",{staticClass:"grid-content bg-purple"},[e._v("\n                Firstname\n                "),n("el-input",{attrs:{placeholder:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1)]),e._v(" "),n("el-col",{attrs:{xs:8,sm:6,md:4,lg:3}},[n("div",{staticClass:"grid-content bg-purple"},[e._v("Lastname\n                "),n("el-input",{attrs:{placeholder:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1)]),e._v(" "),n("el-col",{attrs:{xs:8,sm:6,md:4,lg:3}},[n("div",{staticClass:"grid-content bg-purple"},[e._v("Age\n\n                "),n("el-input",{attrs:{placeholder:""},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1)]),e._v(" "),n("el-col",{attrs:{xs:8,sm:6,md:4,lg:3}},[n("div",{staticClass:"grid-content bg-purple"},[e.show?n("button",{on:{click:e.add}},[e._v("Push!")]):e._e(),e._v(" "),e.show?e._e():n("button",{on:{click:e.save}},[e._v("Save!")])])])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"Firstname",label:"Firstname"}}),e._v(" "),n("el-table-column",{attrs:{prop:"Lastname",label:"Lastname"}}),e._v(" "),n("el-table-column",{attrs:{prop:"Age",label:"Age"}}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.removeData(t.$index)}}},[e._v("Remove")]),e._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(n){e.edit(t.$index)}}},[e._v("Edit")])]}}])})],1)],1)},staticRenderFns:[]}},396:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("router-view")},staticRenderFns:[]}},397:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app-header"},[n("i",{staticClass:"fa fa-bars",on:{click:e.menuControl}}),e._v(" "),n("span",{staticClass:"page-title"},[e._v(e._s(e.pageName))])])},staticRenderFns:[]}},398:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{domProps:{textContent:e._s(e.msg)}}),e._v(" "),n("el-alert",{attrs:{title:"success",type:"success"}}),e._v(" "),n("el-alert",{attrs:{title:"info",type:"info"}}),e._v(" "),n("el-alert",{attrs:{title:"warning",type:"warning"}}),e._v(" "),n("el-alert",{attrs:{title:"error",type:"error"}})],1)},staticRenderFns:[]}},399:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"status"}],staticClass:"left-menu animated bounceInLeft"},[n("el-menu",{attrs:{theme:"dark"},on:{select:e.handle}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[e._v("頁面")]),e._v(" "),n("el-menu-item",{attrs:{index:"首頁"}},[e._v("Home")]),e._v(" "),n("el-menu-item",{attrs:{index:"fileReader"}},[e._v("FileReader")]),e._v(" "),n("el-menu-item",{attrs:{index:"alert"}},[e._v("Alert")]),e._v(" "),n("el-menu-item",{attrs:{index:"slideshow"}},[e._v("Slideshow")]),e._v(" "),n("el-menu-item",{attrs:{index:"ajax"}},[e._v("Ajax")])],2)],1)],1)},staticRenderFns:[]}},400:function(e,t,n){n(143),e.exports=n(145)}},[400]);
//# sourceMappingURL=build.js.map
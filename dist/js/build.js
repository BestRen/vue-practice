webpackJsonp([0],{140:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.sliderMenuCtrl=void 0;var a=n(13),s=r(a),o=n(103),u=r(o),i=n(375),l=r(i);s.default.use(u.default);var c=new u.default.Store(l.default);t.sliderMenuCtrl=c},141:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),s=r(a),o=n(102),u=r(o),i=n(381),l=r(i),c=n(380),d=r(c),f=n(382),m=r(f),p=n(383),v=r(p),_=n(378),h=r(_),x=n(377),g=r(x),C=n(379),b=r(C);s.default.component("appHeader",h.default),s.default.component("appFooter",g.default),s.default.component("sliderMenu",b.default),s.default.use(u.default);var M={routes:[{path:"/",redirect:"/index"},{path:"/",component:l.default,children:[{path:"index",component:d.default,name:"首頁"},{path:"test1",component:m.default,name:"test1"},{path:"test2",component:v.default,name:"test2"}]}]},F=new u.default(M);t.default=F},143:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(13),s=r(a),o=n(141),u=r(o),i=n(101),l=r(i),c=n(357),d=r(c),f=n(376),m=r(f);s.default.use(l.default,{locale:d.default}),new s.default({el:"#app",router:u.default,render:function(e){return e(m.default)}})},145:function(e,t){},34:function(e,t){e.exports=function(e,t,n,r,a){var s,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,o=e.default);var i="function"==typeof o?o.options:o;t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),r&&(i._scopeId=r);var l;if(a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},i._ssrRegister=l):n&&(l=n),l){var c=i.functional,d=c?i.render:i.beforeCreate;c?i.render=function(e,t){return l.call(t),d(e,t)}:i.beforeCreate=d?[].concat(d,l):[l]}return{esModule:s,exports:o,options:i}}},357:function(e,t,n){"use strict";t.__esModule=!0,t.default={el:{colorpicker:{confirm:"確認",clear:"清空"},datepicker:{now:"現在",today:"今天",cancel:"取消",clear:"清空",confirm:"確認",selectDate:"選擇日期",selectTime:"選擇時間",startDate:"開始日期",startTime:"開始時間",endDate:"結束日期",endTime:"結束時間",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加載中",noMatch:"無匹配資料",noData:"無資料",placeholder:"請選擇"},cascader:{noMatch:"無匹配資料",loading:"加載中",placeholder:"請選擇"},pagination:{goto:"前往",pagesize:"項/頁",total:"共 {total} 項",pageClassifier:"頁"},messagebox:{title:"提示",confirm:"確定",cancel:"取消",error:"輸入的資料不符規定!"},upload:{delete:"刪除",preview:"查看圖片",continue:"繼續上傳"},table:{emptyText:"暫無資料",confirmFilter:"篩選",resetFilter:"重置",clearFilter:"全部",sumText:"Sum"},tree:{emptyText:"暫無資料"},transfer:{noMatch:"無匹配資料",noData:"無資料",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"}}}},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(140);t.default={data:function(){return{pageName:"測試"}},computed:{status:function(){return r.sliderMenuCtrl.state.status}},methods:{menuControl:function(){this.status?r.sliderMenuCtrl.dispatch("Hide"):r.sliderMenuCtrl.dispatch("Show")}}}},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(140),a=n(141),s=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={computed:{status:function(){return r.sliderMenuCtrl.state.status}},methods:{handle:function(e){e.length>0&&s.default.push({name:e})}}}},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{items:[],firstName:"",lastName:"",age:""}},computed:{msg:function(){return"Hello Vue!!"}},methods:{getData:function(){this.items.push({Firstname:"Jill",Lastname:"Smith",Age:"50"},{Firstname:"Eve",Lastname:"Jackson",Age:"94"})},add:function(){this.firstName&&this.lastName&&this.age&&this.items.push({Firstname:this.firstName,Lastname:this.lastName,Age:this.age})},removeData:function(e){this.items.splice(e,1)}}}},372:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{msg:function(){return"Hello Vue test1!!"}}}},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{msg:function(){return"Hello Vue test2!!"}}}},375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={status:!1},a={show:function(e){e.status=!0},hide:function(e){e.status=!1}},s={Show:function(e){return(0,e.commit)("show")},Hide:function(e){return(0,e.commit)("hide")}},o={};t.default={state:r,getters:o,actions:s,mutations:a}},376:function(e,t,n){var r=n(34)(null,n(387),null,null,null);e.exports=r.exports},377:function(e,t,n){var r=n(34)(null,n(384),null,null,null);e.exports=r.exports},378:function(e,t,n){var r=n(34)(n(369),n(390),null,null,null);e.exports=r.exports},379:function(e,t,n){var r=n(34)(n(370),n(391),null,null,null);e.exports=r.exports},380:function(e,t,n){var r=n(34)(n(371),n(386),null,null,null);e.exports=r.exports},381:function(e,t,n){var r=n(34)(null,n(385),null,null,null);e.exports=r.exports},382:function(e,t,n){var r=n(34)(n(372),n(389),null,null,null);e.exports=r.exports},383:function(e,t,n){var r=n(34)(n(373),n(388),null,null,null);e.exports=r.exports},384:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app-footer"},[n("span",[e._v("Footer")])])}]}},385:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("appHeader"),e._v(" "),n("sliderMenu"),e._v(" "),n("router-view"),e._v(" "),n("appFooter")],1)},staticRenderFns:[]}},386:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{domProps:{textContent:e._s(e.msg)}}),e._v(" "),n("button",{on:{click:e.getData}},[e._v("Get Data!!")]),e._v(" "),n("br"),e._v(" Firstname\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),e._v(" Lastname\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),e._v(" Age\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"text"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.add}},[e._v("Push!")]),e._v(" "),0!==e.items.length?n("table",{staticStyle:{width:"100%"},attrs:{border:"1"}},[e._m(0),e._v(" "),e._l(e.items,function(t,r){return n("tr",[n("td",{domProps:{textContent:e._s(t.Firstname)}}),e._v(" "),n("td",{domProps:{textContent:e._s(t.Lastname)}}),e._v(" "),n("td",{domProps:{textContent:e._s(t.Age)}}),e._v(" "),n("td",[n("button",{on:{click:function(t){e.removeData(r)}}},[e._v("Remove!")])]),e._v(" "),n("td",[n("button",{on:{click:function(t){e.removeData(r)}}},[e._v("Edit!")])])])})],2):e._e()])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Firstname")]),e._v(" "),n("th",[e._v("Lastname")]),e._v(" "),n("th",[e._v("Age")]),e._v(" "),n("th"),e._v(" "),n("th")])}]}},387:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("router-view")},staticRenderFns:[]}},388:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{domProps:{textContent:e._s(e.msg)}})])},staticRenderFns:[]}},389:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{domProps:{textContent:e._s(e.msg)}})])},staticRenderFns:[]}},390:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app-header"},[n("i",{staticClass:"fa fa-bars",on:{click:e.menuControl}}),e._v(" "),n("span",{staticClass:"page-title"},[e._v(e._s(e.pageName))])])},staticRenderFns:[]}},391:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"status"}],staticClass:"left-menu animated bounceInLeft"},[n("el-menu",{attrs:{theme:"dark"},on:{select:e.handle}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[e._v("頁面")]),e._v(" "),n("el-menu-item",{attrs:{index:"首頁"}},[e._v("首頁")]),e._v(" "),n("el-menu-item",{attrs:{index:"test1"}},[e._v("test1")]),e._v(" "),n("el-menu-item",{attrs:{index:"test2"}},[e._v("test2")])],2)],1)],1)},staticRenderFns:[]}},392:function(e,t,n){n(143),e.exports=n(145)}},[392]);
//# sourceMappingURL=build.js.map
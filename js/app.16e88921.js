(function(){"use strict";var t={8761:function(t,s,e){var a=e(7195),n=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("Header"),s("div",{staticClass:"main"},[s("router-view",{attrs:{name:"slidebar"}}),s("router-view",{attrs:{name:"main"}})],1)],1)},i=[],r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"header"},[s("router-link",{attrs:{to:{name:"root"}}},[s("img",{attrs:{src:e(3956),alt:""}})]),t._m(0)],1)},o=[function(){var t=this,s=t._self._c;return s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("首页")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("新手入门")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("API")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("关于")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("注册")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("登陆")])])])}],l={name:"Header"},c=l,u=e(1001),p=(0,u.Z)(c,r,o,!1,null,"7944f088",null),_=p.exports,f=function(){var t=this,s=t._self._c;return s("div",{staticClass:"PostList"},[t.isLoading?s("div",{staticClass:"loading"},[s("img",{attrs:{src:e(6053),alt:""}})]):s("div",{staticClass:"posts"},[s("ul",[t._m(0),t._l(t.posts,(function(e,a){return s("li",{key:a},[s("img",{attrs:{src:e.author.avatar_url,alt:""}}),s("span",{staticClass:"allcount"},[s("span",{staticClass:"reply_count"},[t._v(t._s(e.reply_count))]),t._v(" /"+t._s(e.visit_count)+" ")]),s("span",{class:[{put_good:1==e.good,put_top:1==e.top,"topiclist-tab":1!=e.good&&1!=e.top}]},[s("span",[t._v(" "+t._s(t._f("tabFormatter")(e))+" ")])]),s("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[s("span",[t._v(" "+t._s(e.title)+" ")])]),s("span",{staticClass:"last_reply"},[t._v(" "+t._s(t._f("formatDate")(e.last_reply_at))+" ")])],1)})),s("li",[s("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},d=[function(){var t=this,s=t._self._c;return s("li",[s("div",{staticClass:"toobar"},[s("span",[t._v("全部")]),s("span",[t._v("精华")]),s("span",[t._v("分享")]),s("span",[t._v("问答")]),s("span",[t._v("招聘")])])])}],h=function(){var t=this,s=t._self._c;return s("div",{staticClass:"pagination"},[s("button",{on:{click:t.changeBtn}},[t._v("首页")]),s("button",{on:{click:t.changeBtn}},[t._v("上一页")]),t.judge?s("button",{staticClass:"pagebtn"},[t._v("......")]):t._e(),t._l(t.pagebtns,(function(e,a){return s("button",{key:a,class:[{currentPage:e==t.currentPage},"pagebtn"],on:{click:function(s){return t.changeBtn(e)}}},[t._v(" "+t._s(e)+" ")])})),s("button",{on:{click:t.changeBtn}},[t._v("下一页")])],2)},v=[],g=(e(541),e(998)),m=e.n(g),b={name:"Pagination",data(){return{pagebtns:[1,2,3,4,5,"......"],currentPage:1,judge:!1}},methods:{changeBtn(t){if("number"==typeof t)this.currentPage=t,this.judge=t>4,t==this.pagebtns[4]?(this.pagebtns.shift(),this.pagebtns.splice(4,0,this.pagebtns[3]+1)):t==this.pagebtns[0]&&1!=t&&(this.pagebtns.unshift(this.pagebtns[0]-1),this.pagebtns.splice(5,1)),this.$emit("handleList",this.currentPage);else switch(t.target.innerText){case"上一页":m()("button.currentPage").prev().click();break;case"下一页":m()("button.currentPage").next().click();break;case"首页":this.pagebtns=[1,2,3,4,5,"......"],this.changeBtn(1);break;default:break}}}},C=b,k=(0,u.Z)(C,h,v,!1,null,"79b38ff5",null),y=k.exports,P={name:"PostList",data(){return{isLoading:!1,posts:[],postPage:1}},components:{Pagination:y},methods:{getData(){this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postPage,limit:20}}).then((t=>{this.isLoading=!1,this.posts=t.data.data})).catch((t=>{console.log(t)}))},renderList(t){this.postPage=t,this.getData()}},beforeMount(){this.isLoading=!0,this.getData()}},L=P,w=(0,u.Z)(L,f,d,!1,null,"70ab4a50",null),x=w.exports,Z={name:"App",components:{Header:_,PostList:x}},D=Z,j=(0,u.Z)(D,n,i,!1,null,null,null),$=j.exports,O=e(2241),I=function(){var t=this,s=t._self._c;return s("div",{staticClass:"article"},[t.isLoading?s("div",{staticClass:"loading"},[s("img",{attrs:{src:e(6053),alt:""}})]):s("div",[s("div",{staticClass:"topic_header"},[s("div",{staticClass:"topic_title"},[t._v(t._s(t.post.title))]),s("ul",[s("li",[t._v("· 发布于 "+t._s(t._f("formatDate")(t.post.create_at)))]),s("li",[t._v("· 作者 "+t._s(t.post.author.loginname))]),s("li",[t._v("· "+t._s(t.post.visit_count)+" 次浏览")]),s("li",[t._v("· 来自 "+t._s(t._f("tabFormatter")(t.post)))])]),s("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.post.content)}})]),s("div",{attrs:{id:"reply"}},[s("div",{staticClass:"topbar"},[t._v(t._s(t.post.replies.length)+" 回复")]),t._l(t.post.replies,(function(e,a){return s("div",{key:a,staticClass:"replySec"},[s("div",{staticClass:"replyUp"},[s("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),s("span",[t._v("   "+t._s(e.author.loginname))]),s("span",[t._v("   "+t._s(a+1)+"楼 ")]),e.ups.length>0?s("span",{staticClass:"thumbups"},[t._v(" ☝ "+t._s(e.ups.length)+" ")]):s("span")],1),s("p",{domProps:{innerHTML:t._s(e.content)}})])}))],2)])])},T=[],B={name:"Article",data(){return{isLoading:!1,post:{}}},watch:{$route(t,s){this.getArticleData()}},methods:{getArticleData(){this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`).then((t=>{1==t.data.success&&(this.post=t.data.data,this.isLoading=!1)})).catch((t=>{console.log(t)}))}},beforeMount(){this.isLoading=!0,this.getArticleData()}},M=B,A=(0,u.Z)(M,I,T,!1,null,null,null),U=A.exports,H=function(){var t=this,s=t._self._c;return s("div",{staticClass:"userinfo"},[t.isLoading?s("div",{staticClass:"loading"},[s("img",{attrs:{src:e(6053),alt:""}})]):s("div",{staticClass:"userInfomation"},[s("section",[s("img",{attrs:{src:t.userinfo.avatar_url,alt:""}}),s("span",[t._v("  "+t._s(t.userinfo.loginname))]),s("p",[t._v(t._s(t.userinfo.score)+"积分")])]),s("div",{staticClass:"replies"},[s("p",[t._v("回复的主题")]),s("ul",t._l(t.userinfo.recent_replies,(function(e,a){return s("li",{key:a},[s("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),s("div",{staticClass:"topics"},[s("p",[t._v("创建的主题")]),s("ul",t._l(t.userinfo.recent_topics,(function(e,a){return s("li",{key:a},[s("router-link",{attrs:{to:{name:t.post_content,params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])])},F=[],S={name:"UserInfo",data(){return{isLoading:!0,userinfo:{}}},methods:{getUserData(){this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then((t=>{this.isLoading=!1,this.userinfo=t.data.data})).catch((t=>{console.log(t)}))}},beforeMount(){this.isLoading=!0,this.getUserData()}},E=S,q=(0,u.Z)(E,H,F,!1,null,"112b9ca9",null),z=q.exports,G=function(){var t=this,s=t._self._c;return s("div",{staticClass:"autherinfo"},[s("div",{staticClass:"authersummary"},[s("div",{staticClass:"topbar"},[t._v("作者")]),s("div",{staticClass:"user"},[s("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[s("img",{attrs:{src:t.userinfo.avatar_url,alt:""}})]),s("span",[t._v(t._s(t.userinfo.loginname))])],1),s("div",{staticClass:"score"},[t._v("积分："+t._s(t.userinfo.score))])]),s("div",{staticClass:"recent_topics"},[s("div",{staticClass:"topbar"},[t._v("作者最近主题")]),s("ul",t._l(t.topcilimitby5,(function(e,a){return s("li",{key:a},[s("router-link",{attrs:{to:{name:t.post_content,params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),s("div",{staticClass:"recent_replies"},[s("div",{staticClass:"topbar"},[t._v("作者最近回复")]),s("ul",t._l(t.replylimitby5,(function(e,a){return s("li",{key:a},[s("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])},J=[],K={name:"SlideBar",data(){return{userinfo:{}}},computed:{topcilimitby5(){if(this.userinfo.recent_topics)return this.userinfo.recent_topics.slice(0,5)},replylimitby5(){if(this.userinfo.recent_replies)return this.userinfo.recent_replies.slice(0,5)}},methods:{getUserData(){this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then((t=>{this.userinfo=t.data.data})).catch((t=>{console.log(t)}))}},beforeMount(){this.getUserData()}},N=K,Q=(0,u.Z)(N,G,J,!1,null,"2556d15a",null),R=Q.exports;a.ZP.use(O.ZP);var V=new O.ZP({routes:[{name:"root",path:"/",components:{main:x}},{name:"post_content",path:"/topic/:id&author=:name",components:{main:U,slidebar:R}},{name:"user_info",path:"/userinfo/:name",components:{main:z}}]}),W=e(306);a.ZP.prototype.$http=W.Z,a.ZP.config.productionTip=!1,new a.ZP({router:V,render:t=>t($)}).$mount("#app"),a.ZP.filter("formatDate",(function(t){if(!t)return"";var s=new Date(t),e=(new Date).getTime()-s.getTime();return e<0?"":e/1e3<30?"刚刚":e/1e3<60?parseInt(e/1e3)+"秒前":e/6e4<60?parseInt(e/6e4)+"分钟前":e/36e5<24?parseInt(e/36e5)+"小时前":e/864e5<31?parseInt(e/864e5)+"天前":e/2592e6<12?parseInt(e/2592e6)+"月前":parseInt(e/31536e6)+"年前"})),a.ZP.filter("tabFormatter",(function(t){return 1==t.good?"精华":1==t.top?"置顶":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"}))},3956:function(t,s,e){t.exports=e.p+"img/cnodejs_light.0acdf610.svg"},6053:function(t,s,e){t.exports=e.p+"img/loading.3c55c629.gif"}},s={};function e(a){var n=s[a];if(void 0!==n)return n.exports;var i=s[a]={exports:{}};return t[a].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(s,a,n,i){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var c=n();void 0!==c&&(s=c)}}return s}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,n,i]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.p="/cnode-vue-app/"}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var n,i,r=a[0],o=a[1],l=a[2],c=0;if(r.some((function(s){return 0!==t[s]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(l)var u=l(e)}for(s&&s(a);c<r.length;c++)i=r[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},a=self["webpackChunkcnode"]=self["webpackChunkcnode"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(8761)}));a=e.O(a)})();
//# sourceMappingURL=app.16e88921.js.map
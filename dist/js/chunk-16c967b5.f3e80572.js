(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16c967b5"],{1148:function(t,e,s){"use strict";var n=s("a691"),i=s("1d80");t.exports="".repeat||function(t){var e=String(i(this)),s="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(s+=e);return s}},"25f0":function(t,e,s){"use strict";var n=s("6eeb"),i=s("825a"),o=s("d039"),r=s("ad6d"),a="toString",c=RegExp.prototype,l=c[a],f=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=a;(f||u)&&n(RegExp.prototype,a,(function(){var t=i(this),e=String(t.source),s=t.flags,n=String(void 0===s&&t instanceof RegExp&&!("flags"in c)?r.call(t):s);return"/"+e+"/"+n}),{unsafe:!0})},2626:function(t,e,s){"use strict";var n=s("d066"),i=s("9bf2"),o=s("b622"),r=s("83ab"),a=o("species");t.exports=function(t){var e=n(t),s=i.f;r&&e&&!e[a]&&s(e,a,{configurable:!0,get:function(){return this}})}},"32a7":function(t,e,s){"use strict";var n=s("5d88"),i=s.n(n);i.a},3732:function(t,e,s){"use strict";var n=s("773b"),i=s.n(n);i.a},"3c8d":function(t,e,s){},"408a":function(t,e,s){var n=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,s){var n=s("861d"),i=s("c6b6"),o=s("b622"),r=o("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},4954:function(t,e,s){},"4b12":function(t,e,s){"use strict";var n=s("d86b"),i=s.n(n);i.a},"4d63":function(t,e,s){var n=s("83ab"),i=s("da84"),o=s("94ca"),r=s("7156"),a=s("9bf2").f,c=s("241c").f,l=s("44e7"),f=s("ad6d"),u=s("9f7f"),d=s("6eeb"),h=s("d039"),v=s("69f3").set,m=s("2626"),p=s("b622"),b=p("match"),g=i.RegExp,A=g.prototype,C=/a/g,I=/a/g,_=new g(C)!==C,w=u.UNSUPPORTED_Y,x=n&&o("RegExp",!_||w||h((function(){return I[b]=!1,g(C)!=C||g(I)==I||"/a/i"!=g(C,"i")})));if(x){var y=function(t,e){var s,n=this instanceof y,i=l(t),o=void 0===e;if(!n&&i&&t.constructor===y&&o)return t;_?i&&!o&&(t=t.source):t instanceof y&&(o&&(e=f.call(t)),t=t.source),w&&(s=!!e&&e.indexOf("y")>-1,s&&(e=e.replace(/y/g,"")));var a=r(_?new g(t,e):g(t,e),n?this:A,y);return w&&s&&v(a,{sticky:s}),a},E=function(t){t in y||a(y,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},T=c(g),k=0;while(T.length>k)E(T[k++]);A.constructor=y,y.prototype=A,d(i,"RegExp",y)}m("RegExp")},"50cf":function(t,e,s){"use strict";var n=s("9e3f"),i=s.n(n);i.a},"55f7":function(t,e,s){},"5d88":function(t,e,s){},"684a":function(t,e){t.exports="data:image/png;base64,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"},"6ab7":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav-bar",on:{tabClick:t.tabClick}}),s("scroller",{ref:"scroller",staticClass:"content",attrs:{probeType:3},on:{scroll:t.getPosition}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-base-info",{attrs:{"goods-info":t.goodsInfo}}),s("detail-shop-info",{attrs:{"shop-info":t.shopInfo}}),s("detail-image-info",{attrs:{"details-info":t.detailsInfo},on:{detailImageLoad:t.detailImageLoad}}),s("detail-params-info",{ref:"params",attrs:{"params-info":t.paramsInfo}}),s("detail-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),s("good-list",{ref:"recomment",attrs:{goods:t.recommendList}})],1),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.topClick(e)}}}),s("detail-bottom-nav",{on:{addCart:t.addCart}})],1)},i=[],o=(s("a9e3"),s("3b6c")),r=s("74bd"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav-bar",[n("div",{staticClass:"left",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[n("img",{attrs:{src:s("7a74"),alt:""}})]),n("div",{staticClass:"nav-bar",attrs:{slot:"center"},slot:"center"},t._l(t.title,(function(e,s){return n("div",{key:e,staticClass:"nav-bar-item",class:{active:s===t.currentIndex},on:{click:function(e){return t.btnClick(s)}}},[t._v(t._s(e))])})),0)])},c=[],l=s("a7ac"),f={data:function(){return{title:["商品","参数","评价","推荐"],currentIndex:0}},components:{NavBar:l["a"]},methods:{btnClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)},backClick:function(){this.$router.back()}}},u=f,d=(s("ff01"),s("2877")),h=Object(d["a"])(u,a,c,!1,null,"adc83c7e",null),v=h.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(t){return s("swiper-item",{key:t},[s("img",{attrs:{src:t}})])})),1)},p=[],b=s("dc2c"),g={data:function(){return{}},props:{topImages:{type:Array,default:function(){return[]}}},components:{Swiper:b["a"],SwiperItem:b["b"]}},A=g,C=(s("cf1f"),Object(d["a"])(A,m,p,!1,null,"3a1d8e6d",null)),I=C.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goodsInfo).length?s("div",{staticClass:"detail-base"},[s("div",{staticClass:"title"},[t._v(t._s(t.goodsInfo.title))]),s("div",{staticClass:"price-info"},[s("span",[t._v(t._s(t.goodsInfo.newPrice))]),s("span",[t._v(t._s(t.goodsInfo.oldPrice))]),s("span",[t._v(t._s(t.goodsInfo.discount))])]),s("div",{staticClass:"column-info"},t._l(t.goodsInfo.columns,(function(e,n){return s("span",{key:n,staticClass:"column-info-item"},[t._v(t._s(e))])})),0),s("div",{staticClass:"service-info"},t._l(t.goodsInfo.services,(function(e,n){return s("div",{key:n,staticClass:"service-info-item"},[s("img",{attrs:{src:e.icon,alt:""}}),t._v(" "+t._s(e.name)+" ")])})),0)]):t._e()},w=[],x={props:{goodsInfo:{type:Object,default:function(){}}}},y=x,E=(s("f5e5"),Object(d["a"])(y,_,w,!1,null,"9ba44b38",null)),T=E.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.shopInfo).length?s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-logo"},[s("img",{attrs:{src:t.shopInfo.logo,alt:""}}),t._v(" "+t._s(t.shopInfo.name)+" ")]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"sale"},[s("div",{staticClass:"strong"},[t._v(t._s(t._f("formatCount")(t.shopInfo.sells))+"万")]),s("p",[t._v("总销量")])]),s("div",{staticClass:"goods"},[s("div",{staticClass:"strong"},[t._v(t._s(t.shopInfo.goodsCount))]),s("p",[t._v("全部宝贝")])])]),s("span"),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shopInfo.score,(function(e){return s("tr",{key:e.name},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)]):t._e()},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("span",{staticClass:"shop-enter"},[t._v("进店逛逛")])])}],P=(s("b680"),{props:{shopInfo:{type:Object,default:function(){}}},filters:{formatCount:function(t){return t<1e4?t:(t/1e4).toFixed(1)}}}),j=P,O=(s("b2cd"),Object(d["a"])(j,k,D,!1,null,"34004f07",null)),z=O.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailsInfo).length?s("div",{staticClass:"detail-image-info"},[s("div",{staticClass:"desc"},[s("div",{staticClass:"desc-start"}),s("div",{staticClass:"desc-info"},[t._v(t._s(t.detailsInfo.desc))]),s("div",{staticClass:"desc-end"})]),t._l(t.detailsInfo.detailImage,(function(e,n){return s("div",{key:n},[s("p",{staticClass:"info-key"},[t._v(t._s(e.key))]),t._l(e.list,(function(e,n){return s("img",{key:n,attrs:{src:e},on:{load:t.detailImageLoad}})}))],2)}))],2):t._e()},L=[],W={props:{detailsInfo:{type:Object,default:function(){}}},methods:{detailImageLoad:function(){this.$emit("detailImageLoad")}}},H=W,q=(s("daba"),Object(d["a"])(H,R,L,!1,null,"060a1204",null)),N=q.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"params-info"},[s("p",[t._v("参数信息")]),s("div",{staticClass:"size"},t._l(t.paramsInfo.sizes,(function(e,n){return s("table",{key:n},t._l(e,(function(e,n){return s("tr",{key:n},t._l(e,(function(e,n){return s("td",{key:n},[t._v(t._s(e))])})),0)})),0)})),0),s("div",{staticClass:"info"},[s("table",t._l(t.paramsInfo.infos,(function(e,n){return s("tr",{key:n},t._l(e,(function(e,n){return s("td",{key:n},[t._v(" "+t._s(e)+" ")])})),0)})),0)])])},B=[],F={props:{paramsInfo:{type:Object,default:function(){}}}},Y=F,X=(s("32a7"),Object(d["a"])(Y,S,B,!1,null,"7b7c78a6",null)),M=X.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t,alt:""}})})),0)])]):s("div",{staticClass:"comment-info",staticStyle:{color:"red"}},[t._v("暂无用户评论")])])},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"})])])}],V=s("90b9"),Z={name:"DetailCommentInfo",props:{commentInfo:{type:Object}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(V["b"])(e,"yyyy-MM-dd hh:mm")}}},J=Z,$=(s("3732"),Object(d["a"])(J,U,G,!1,null,"1ff7326a",null)),K=$.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-nav"},[t._m(0),t._m(1),t._m(2),s("div",{staticClass:"cart-enter",on:{click:t.addCart}},[t._v(" 加入购物车 ")]),s("div",{staticClass:"buy",on:{click:function(e){return t.$router.push("/cart")}}},[t._v(" 立即购买 ")])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"server"},[s("div",{staticClass:"server-icon"}),s("span",[t._v("客服")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop"},[s("div",{staticClass:"shop-icon"}),s("span",[t._v("店铺")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collect"},[s("div",{staticClass:"collect-icon"}),s("span",[t._v("已收藏")])])}],et={methods:{addCart:function(){this.$emit("addCart")}}},st=et,nt=(s("78b8"),Object(d["a"])(st,Q,tt,!1,null,"501a726a",null)),it=nt.exports,ot=s("eecb");s("b0c0");function rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var at=s("1bab");function ct(t){return Object(at["a"])({url:"/detail",params:{iid:t}})}function lt(){return Object(at["a"])({url:"/recommend"}).catch((function(t){return t}))}var ft=function t(e,s,n){rt(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.lowNowPrice=e.lowNowPrice,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.discountBgColor=e.discountBgColor,this.columns=s,this.services=n,this.nowPrice=e.highNowPrice},ut=function t(e){rt(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},dt=function t(e,s){rt(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},ht={name:"detail",data:function(){return{iid:null,topImages:[],goodsInfo:{},shopInfo:{},goodsParams:{},detailsInfo:{},paramsInfo:{},commentInfo:{},recommendList:[],themesTopY:[],getThemesTop:null,currentIndex:0}},components:{Scroller:o["a"],GoodList:r["a"],DetailNavBar:v,DetailSwiper:I,DetailBaseInfo:T,DetailShopInfo:z,DetailImageInfo:N,DetailParamsInfo:M,DetailCommentInfo:K,DetailBottomNav:it},created:function(){var t=this;this.iid=this.$route.query.iid,ct(this.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goodsInfo=new ft(s.itemInfo,s.columns,s.shopInfo.services),t.shopInfo=new ut(s.shopInfo),t.detailsInfo=s.detailInfo,t.paramsInfo=new dt(s.itemParams.info,s.itemParams.rule||{}),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0]||{}),lt().then((function(e){t.recommendList=e.data.list})),t.getThemesTop=Object(V["a"])((function(){t.themesTopY=[],t.themesTopY.push(0),t.themesTopY.push(t.$refs.params.$el.offsetTop),t.themesTopY.push(t.$refs.comment.$el.offsetTop),t.themesTopY.push(t.$refs.recomment.$el.offsetTop),t.themesTopY.push(Number.MAX_VALUE)}))}))},mixins:[ot["b"],ot["a"]],destroyed:function(){this.$bus.$off("detailImageLoad",this.itemListener)},methods:{tabClick:function(t){this.$refs.scroller.scrollTo(0,-this.themesTopY[t],100)},detailImageLoad:function(){this.newRefresh(),this.getThemesTop()},getPosition:function(t){for(var e=this.themesTopY.length,s=0;s<e;s++)this.currentIndex!==s&&-t.y>this.themesTopY[s]&&-t.y<this.themesTopY[s+1]&&(this.currentIndex=s,this.$refs.nav.currentIndex=this.currentIndex);this.listenerShowBackTop(t)},addCart:function(){var t=this,e={title:this.goodsInfo.title,desc:this.goodsInfo.desc,image:this.topImages[0],price:this.goodsInfo.lowNowPrice,iid:this.iid};this.$store.dispatch("addCart",e).then((function(e){t.$toast.toastMsg(e)}))}}},vt=ht,mt=(s("6b71"),Object(d["a"])(vt,n,i,!1,null,"2320e7e7",null));e["default"]=mt.exports},"6b71":function(t,e,s){"use strict";var n=s("a183"),i=s.n(n);i.a},"773b":function(t,e,s){},"78b8":function(t,e,s){"use strict";var n=s("a05a"),i=s.n(n);i.a},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"90b9":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return i}));s("4d63"),s("ac1f"),s("25f0"),s("5319");function n(t,e){var s=null;return function(){for(var n=this,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];s&&clearTimeout(s),s=setTimeout((function(){t.apply(n,o)}),e)}}function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var n in s)if(new RegExp("(".concat(n,")")).test(e)){var i=s[n]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:o(i))}return e}function o(t){return("00"+t).substr(t.length)}},"9e3f":function(t,e,s){},a05a:function(t,e,s){},a183:function(t,e,s){},b0c0:function(t,e,s){var n=s("83ab"),i=s("9bf2").f,o=Function.prototype,r=o.toString,a=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return r.call(this).match(a)[1]}catch(t){return""}}})},b2cd:function(t,e,s){"use strict";var n=s("e373"),i=s.n(n);i.a},b680:function(t,e,s){"use strict";var n=s("23e7"),i=s("a691"),o=s("408a"),r=s("1148"),a=s("d039"),c=1..toFixed,l=Math.floor,f=function(t,e,s){return 0===e?s:e%2===1?f(t,e-1,s*t):f(t*t,e/2,s)},u=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}));n({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,s,n,a,c=o(this),d=i(t),h=[0,0,0,0,0,0],v="",m="0",p=function(t,e){var s=-1,n=e;while(++s<6)n+=t*h[s],h[s]=n%1e7,n=l(n/1e7)},b=function(t){var e=6,s=0;while(--e>=0)s+=h[e],h[e]=l(s/t),s=s%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var s=String(h[t]);e=""===e?s:e+r.call("0",7-s.length)+s}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=u(c*f(2,69,1))-69,s=e<0?c*f(2,-e,1):c/f(2,e,1),s*=4503599627370496,e=52-e,e>0){p(0,s),n=d;while(n>=7)p(1e7,0),n-=7;p(f(10,n,1),0),n=e-1;while(n>=23)b(1<<23),n-=23;b(1<<n),p(1,1),b(2),m=g()}else p(0,s),p(1<<-e,0),m=g()+r.call("0",d);return d>0?(a=m.length,m=v+(a<=d?"0."+r.call("0",d-a)+m:m.slice(0,a-d)+"."+m.slice(a-d))):m=v+m,m}})},cbbf:function(t,e,s){},cf1f:function(t,e,s){"use strict";var n=s("4954"),i=s.n(n);i.a},d7f1:function(t,e,s){"use strict";var n=s("3c8d"),i=s.n(n);i.a},d86b:function(t,e,s){},daba:function(t,e,s){"use strict";var n=s("cbbf"),i=s.n(n);i.a},dc2c:function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return m}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"swiper-bar"}},[s("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t.showIndication&&t.slideCount>1?s("div",{attrs:{id:"indicator"}},t._l(t.slideCount,(function(e,n){return s("div",{key:n,staticClass:"indicator-item",class:{active:n==t.currentIndex-1}})})),0):t._e()])},i=[],o=(s("a9e3"),{props:{showIndication:{type:Boolean,default:!0},moveRatio:{type:Number,default:.25},intervalTime:{type:Number,default:3e3}},data:function(){return{slideCount:0,sliderWidth:0,currentIndex:1,playTimer:null,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),500)},methods:{handleDom:function(){if(this.sliderEl=document.querySelector(".swiper"),this.sliderEls=this.sliderEl.querySelectorAll(".swiper-item"),this.slideCount=this.sliderEls.length,this.slideCount>1){var t=this.sliderEls[0].cloneNode(!0),e=this.sliderEls[this.slideCount-1].cloneNode(!0);this.sliderEl.insertBefore(e,this.sliderEls[0]),this.sliderEl.appendChild(t),this.sliderWidth=this.sliderEls[0].offsetWidth,this.setTransform(-this.currentIndex*this.sliderWidth)}},startTimer:function(){var t=this;this.playTimer=setInterval((function(){t.currentIndex++,t.scrollContent()}),this.intervalTime)},stopTimer:function(){clearInterval(this.playTimer)},scrollContent:function(){var t=this;this.scrolling=!0,window.setTimeout((function(){t.sliderEl.style.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.sliderWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.this.sliderWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),30),this.sliderEl.style.transition="0.3s all",this.setTransform(-this.currentIndex*this.sliderWidth),this.scrolling=!1},setTransform:function(t){console.log(t),this.sliderEl.style.transform="translateX(".concat(t,"px)")},touchStart:function(t){this.scrolling||(this.stopTimer(),this.stateX=t.touches[0].pageX)},touchMove:function(t){this.moveX=t.touches[0].pageX,this.distance=this.moveX-this.stateX;var e=-this.currentIndex*this.sliderWidth+this.distance;this.setTransform(e)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.moveRatio*this.sliderWidth?this.currentIndex--:this.distance<0&&e>this.moveRatio*this.sliderWidth&&this.currentIndex++,console.log(-this.currentIndex*this.sliderWidth),this.scrollContent(-this.currentIndex*this.sliderWidth),this.startTimer())}}}),r=o,a=(s("d7f1"),s("2877")),c=Object(a["a"])(r,n,i,!1,null,"dbfae942",null),l=c.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-item"},[t._t("default")],2)},u=[],d={},h=d,v=(s("4b12"),Object(a["a"])(h,f,u,!1,null,"08f1f0fd",null)),m=v.exports},e373:function(t,e,s){},eecb:function(t,e,s){"use strict";s.d(e,"b",(function(){return u})),s.d(e,"a",(function(){return d}));var n=s("90b9"),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-top"},[n("img",{attrs:{src:s("684a")}})])}],r={},a=r,c=(s("50cf"),s("2877")),l=Object(c["a"])(a,i,o,!1,null,"72a98f48",null),f=l.exports,u={data:function(){return{itemListener:null,newRefresh:null}},mounted:function(){var t=this;this.newRefresh=Object(n["a"])(this.$refs.scroller.refresh,100),this.itemListener=function(){t.newRefresh()},this.$bus.$on("detailImageLoad",this.itemListener)}},d={data:function(){return{isShowBackTop:!1}},components:{BackTop:f},methods:{topClick:function(){this.$refs.scroller.scrollTo(0,0,30)},listenerShowBackTop:function(t){this.isShowBackTop=-t.y>1e3}}}},f5e5:function(t,e,s){"use strict";var n=s("55f7"),i=s.n(n);i.a},fe99:function(t,e,s){},ff01:function(t,e,s){"use strict";var n=s("fe99"),i=s.n(n);i.a}}]);
//# sourceMappingURL=chunk-16c967b5.f3e80572.js.map
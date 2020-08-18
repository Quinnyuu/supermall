<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" 
                 @tabClick="tabControl"
                 v-show="isTabShow"
                 class="tab-control"
                 ref="tabControl1"/>
    <scroller class="content" 
              :probe-type="3"
              :pullUpLoad="true"
              ref="scroller"
              @scroll="getPosition"
              @pullingUp="pullingUp">

        <home-swiper :banner="banner"/>
        <home-recommend :recommend="recommend" />
        <home-feature-views />
        <tab-control :titles="['流行', '新款', '精选']" 
                     @tabClick="tabControl"
                     ref="tabControl2"/>
        <good-list :goods="showGoods"/>
    </scroller>
    <back-top @click.native="topClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroller from 'components/common/scroller/Scroller'

import TabControl from 'components/content/tabcontrol/TabControl'
import GoodList from 'components/content/goods/GoodList'

import HomeSwiper from './childComponents/HomeSwiper'
import HomeRecommend from "./childComponents/HomeRecommd"
import HomeFeatureViews from './childComponents/HomeFeatureViews'

import {getHomeMultidata, getHomeGoodsData} from 'network/home'
import {debounce} from 'common/utils'
import {RefreshMixin, BackTopMixin} from 'common/mixin'
    export default {
        components: {
            NavBar,
            Scroller,
            TabControl,
            GoodList,
            HomeSwiper,
            HomeRecommend,
            HomeFeatureViews
        },
        data() {
            return {
                banner: [],
                recommend: [],
                goods: {
                    pop: {page: 0,list: []},
                    new: {page: 0,list: []},
                    sell: {page: 0,list: []},
                },
                currentType: 'pop',
                isShowBackTop: false,
                isTabShow: false,
                TabOffsetTop: 0,
                scaleY: 0,
            }
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            }
        },
        created() {
            this.getHomeMultidata();
            //获取商品信息
            this.getHomeGoodsData('pop');
            this.getHomeGoodsData('new');
            this.getHomeGoodsData('sell');
        },
        activated() {
            this.$refs.scroller.scrollTo(0, this.scaleY, 0);
        },
        deactivated() {
            this.scaleY = this.$refs.scroller.getScaleY();
            //缓存（keep-alive）情况下页面离开后取消全局事件的监听
            this.$bus.$off('itemImageLoad', this.itemListener);
        },
        mixins: [RefreshMixin, BackTopMixin],
        methods: {
            //事件绑定相关方法
            //tab的切换
            tabControl(index){
                switch(index) {
                    case 0: this.currentType = 'pop';break;
                    case 1: this.currentType = 'new';break;
                    case 2: this.currentType = 'sell';break;
                }
                this.$refs.tabControl2.currentIndex = index;
                this.$refs.tabControl1.currentIndex = index;
            },
            //返回顶部功能的实现
            // topClick() {
            //     this.$refs.scroller.scrollTo(0,0,30)
            // },
            //获得滚动的距离实现功能
            getPosition(position) {
                //back-top的显示
                // this.isShowBackTop = -position.y > 700;
                this.listenerShowBackTop(position);
                //tabcontrol的显示
                this.isTabShow = -position.y > this.$refs.tabControl2.$el.offsetTop;
            },
            //下拉刷新的功能
            pullingUp() {
                this.getHomeGoodsData(this.currentType);
            },
            // //轮播图加载完后获取tabcontrol的offsetTop
            // swiperImageLoad() {
            //     console.log(this.$refs.tabControl.$el.offsetTop);
            //     this.TabOffsetTop = this.$refs.tabControl.$el.offsetTop;
            // },


            // 网络请求相关方法
            getHomeMultidata(){
                getHomeMultidata().then(res => {
                    this.banner = res.data.banner.list;
                    this.recommend = res.data.recommend.list;
                })
            },
            getHomeGoodsData(type) {
                const page = this.goods[type].page + 1;
                getHomeGoodsData(type, 1).then(res => {
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;

                    //完成下拉加载更多，由于下拉执行只能一次
                    this.$refs.scroller.finishPull();
                })
            }
        }
    }
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.content {
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
}
.tab-control {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 999;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
</style>
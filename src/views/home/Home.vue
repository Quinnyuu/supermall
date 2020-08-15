<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner" />
    <home-recommend :recommend="recommend" />
    <home-feature-views />
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabControl"/>
    <good-list :goods="showGoods"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import TabControl from 'components/content/tabcontrol/TabControl'
import GoodList from 'components/content/goods/GoodList'

import HomeSwiper from './childComponents/HomeSwiper'
import HomeRecommend from "./childComponents/HomeRecommd"
import HomeFeatureViews from './childComponents/HomeFeatureViews'

import {getHomeMultidata, getHomeGoodsData} from 'network/home'

    export default {
        components: {
            NavBar,
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
                currentType: 'pop'
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
        methods: {
            tabControl(index){
                switch(index) {
                    case 0: this.currentType = 'pop';break;
                    case 1: this.currentType = 'new';break;
                    case 2: this.currentType = 'sell';break;
                }
            },

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
                })
            }
        }
    }
</script>

<style scoped>
#home {
  padding-top: 44px;
  padding-bottom: 100px;
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
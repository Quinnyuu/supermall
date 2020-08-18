<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" @tabClick="tabClick" ref="nav"/>
    <scroller class="content" ref="scroller" :probeType="3" @scroll="getPosition">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods-info="goodsInfo" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-image-info :details-info="detailsInfo" @detailImageLoad="detailImageLoad" />
      <detail-params-info :params-info="paramsInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <good-list :goods="recommendList" ref="recomment" />
    </scroller>
    <back-top  @click.native="topClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import Scroller from "components/common/scroller/Scroller";
import GoodList from "components/content/goods/GoodList";
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailImageInfo from "./childComponents/DetailImageInfo";
import DetailParamsInfo from "./childComponents/DetailParamsInfo";
import DetailCommentInfo from "./childComponents/DetailCommentInfo";
import { debounce } from "common/utils";
import { RefreshMixin, BackTopMixin} from "common/mixin";
import {
  getDetailInfo,
  getRecommend,
  Goods,
  Shop,
  GoodsParams,
} from "network/detail";

export default {
  name: "detail",
  data() {
    return {
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      goodsParams: {},
      detailsInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendList: [],
      themesTopY: [],
      getThemesTop: null,
      currentIndex: 0
    };
  },
  components: {
    Scroller,
    GoodList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
  },
  created() {
    getDetailInfo(this.$route.query.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages; //轮播图数据
      //获取商品数据
      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取商店信息
      this.shopInfo = new Shop(data.shopInfo);
      // 获取下面的图片展示数据
      this.detailsInfo = data.detailInfo;
      //获取参数信息
      this.paramsInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule || {}
      );
      //获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0] || {};
      }
      //获取推荐的信息
      getRecommend().then((res) => {
        this.recommendList = res.data.list;
      });

      //下一帧
      //   this.$nextTick(() => {
      //     //dom已被渲染完，但图片还未被加载完,会造成失误
      //     this.themesTopY = [];
      //     this.themesTopY.push(0);
      //     this.themesTopY.push(this.$refs.params.$el.offsetTop);
      //     this.themesTopY.push(this.$refs.comment.$el.offsetTop);
      //     this.themesTopY.push(this.$refs.recomment.$el.offsetTop);
      //     console.log(this.themesTopY);
      //   });

      this.getThemesTop = debounce(() => {
        this.themesTopY = [];
        this.themesTopY.push(0);
        this.themesTopY.push(this.$refs.params.$el.offsetTop);
        this.themesTopY.push(this.$refs.comment.$el.offsetTop);
        this.themesTopY.push(this.$refs.recomment.$el.offsetTop);
        this.themesTopY.push(Number.MAX_VALUE)
      });
    });
  },
  //组件间的共享代码
  mixins: [RefreshMixin, BackTopMixin],
  destroyed() {
    //未缓存情况下取消全局事件的监听
    this.$bus.$off("detailImageLoad", this.itemListener);
  },
  methods: {
    tabClick(index) {
      this.$refs.scroller.scrollTo(0, -this.themesTopY[index], 100);
    },
    detailImageLoad() {
      this.newRefresh();
      //在每个图片加载完后获取位置信息
      this.getThemesTop();
    },
    getPosition(position) {
      const length = this.themesTopY.length;
      for (let i = 0; i < length; i++) {
        if ((this.currentIndex !== i) &&
          -position.y > this.themesTopY[i] &&
          -position.y < this.themesTopY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      //backtop实现
      this.listenerShowBackTop(position);
    },
  },
};
</script>

<style scoped>
.detail {
  height: 100vh;
  overflow: hidden;
}
.detail-nav-bar {
  position: relative;
  background: #fff;
  z-index: 2;
}
.content {
  position: relative;
  height: calc(100% - 44px);
  background-color: #fff;
  z-index: 1;
}
</style>
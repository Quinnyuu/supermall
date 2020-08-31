<template>
  <div>
    <nav-bar class="category-nav-bar">
      <div slot="center">分类</div>
    </nav-bar>
    <side-bar :categoryList="categoryList" @slideBarItemClick="slideBarItemClick" />
    <scroller class="scroll-height">
      <sub-category :subCategoryList="subCategoryList" />
    </scroller>
  </div>
</template>

<script>
import SideBar from "./childComponents/SideBar";
import SubCategory from "./childComponents/SubCatagory";
import NavBar from "components/common/navbar/NavBar";
import Scroller from "components/common/scroller/Scroller";
import GoodList from 'components/content/goods/GoodList'
import TabControl from "components/content/tabcontrol/TabControl";
import {
  getCategory,
  getCategoryDetail,
  getSubcategory,
} from "network/category";
export default {
  components: {
    SideBar,
    SubCategory,
    NavBar,
    Scroller,
    TabControl,
    GoodList
  },
  data() {
    return {
      categoryList: [],
      subCategoryList: [],
      categoryDetailList: [],
      currentIndex: 0,
    };
  },
  methods: {
    getCategory() {
      getCategory().then((res) => {
        this.categoryList = res.data.category.list;
        this.$nextTick(() => {
          this.getSubcategory(this.categoryList[0].maitKey);
          this.getCategoryDetail(this.categoryList[0].miniWallkey, "pop");
        });
      });
    },
    getSubcategory(key) {
      getSubcategory(key).then((res) => {
        this.subCategoryList = res.data.list;
      });
    },
    getCategoryDetail(key, type) {
        getCategoryDetail(key, type).then(res => {
        this.categoryDetailList = res;
      });
    },
    slideBarItemClick(obj) {
      // 当当前请求无变化时退出
      if (this.currentIndex === obj.index) return;
      this.currentIndex = obj.index;
      // 请求对应的推荐列表
      this.getCategoryDetail(
        this.categoryList[this.currentIndex].miniWallkey,
        "pop"
      );
      this.getSubcategory(obj.maitKey);
    },
  },
  created() {
    this.getCategory();
  },
};
</script>

<style scoped>
.category-nav-bar {
  background: var(--color-tint);
  color: #fff;
}
.scroll-height {
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 100px;
  overflow: hidden;
}
</style>
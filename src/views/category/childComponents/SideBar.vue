<template>
  <scroller class="content">
    <div
      v-for="(item,index) in categoryList"
      :key="index"
      class="side-bar-item"
      @click="sideBarItemClick(item, index)"
      :class="currentIndex === index ? 'active' : ''"
    >{{item.title}}</div>
  </scroller>
</template>

<script>
import Scroller from "components/common/scroller/Scroller";
export default {
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Scroller,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    sideBarItemClick(item, index) {
      const obj = {
        maitKey: item.maitKey,
        index,
      };
      this.currentIndex = index;
      this.$emit("slideBarItemClick", obj);
    },
  },
};
</script>

<style scoped>
.content {
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 49px;
  left: 0;
  overflow: hidden;
  width: 100px;
  background-color: #f6f6f6;
}
.side-bar-item {
  font-size: 14px;
  line-height: 45px;
  width: 100px;
  height: 45px;
  user-select: none;
  text-align: center;
  color: #666666;
  border: 0;
  outline: none;
  background: none;
}

.active {
  font-weight: 700;
  color: #ff5777;
  border-left: 3px solid #ff5777;
  background-color: #ffffff;
}
</style>
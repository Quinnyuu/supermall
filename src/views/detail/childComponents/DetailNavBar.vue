<template>
  <nav-bar>
    <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="nav-bar">
      <div
        v-for="(item, index) in title"
        class="nav-bar-item"
        :class="{active: index === currentIndex}"
        :key="item"
        @click="btnClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      title: ["商品", "参数", "评价", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    },
    backClick() {
      this.$router.back();
    }
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  font-size: 14px;
}
.nav-bar-item {
  flex: 1;
}
.left img {
    margin-top: 10px;
}
.active {
  color: var(--color-tint);
}
</style>
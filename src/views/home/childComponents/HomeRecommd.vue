<template>
  <div id="recommend-bar">
    <div v-for="item in recommend" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <h2>{{item.title}}</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
#recommend-bar {
  display: flex;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  margin: 10px 10px;
}
.recommend-item img {
  width: 70px;
  height: 70px;
}
.recommend-item h2 {
  font-size: 14px;
  font-weight: 400;
}
</style>
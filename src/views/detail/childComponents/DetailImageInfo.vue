<template>
  <div class="detail-image-info"  v-if="Object.keys(detailsInfo).length !== 0">
      <div class="desc">
        <div class="desc-start"></div>
        <div class="desc-info">{{detailsInfo.desc}}</div>
        <div class="desc-end"></div>
      </div>
      <div v-for="(items, index) in detailsInfo.detailImage" 
           :key="index">
        <p class="info-key">{{items.key}}</p>
        <img :src="item" v-for="(item, indey) in items.list" 
             :key="indey"
             @load="detailImageLoad">
      </div>
  </div>
</template>

<script>
export default {
  props: {
    detailsInfo: {
      type: Object,
      default: () => {},
    }
  },
  methods: {
    detailImageLoad() {
      this.$emit('detailImageLoad');
    }
  }
};
</script>

<style scoped>
.detail-image-info {
  width: 100vw;
  color: #333;
}
.desc {
  padding: 15px;
}
.desc .desc-start,
.desc .desc-end {
  position: relative;
  width: 90px;
  height: 1px;
  background: #a3a3a5;
}
.desc .desc-start {
  float: left;
}
.desc .desc-end {
  float: right;
}
.desc .desc-start::before,
.desc .desc-end::after {
  position: absolute;
  top: -5px;
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #333;
}
.desc .desc-end::after  {
  right: 0;
}
.desc .desc-info {
  padding: 20px 0;
  font-size: 13px;
}
.detail-image-info .info-key {
  margin-left: 10px;
}
.detail-image-info img {
  width: 100%;
}
</style>
<template>
  <div class="detail-base" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="title">{{goodsInfo.title}}</div>
    <div class="price-info">
        <span>{{goodsInfo.newPrice}}</span>
        <span>{{goodsInfo.oldPrice}}</span>
        <span>{{goodsInfo.discount}}</span>
    </div>
    <div class="column-info">
      <span class="column-info-item"  v-for="(item,index) in goodsInfo.columns" :key="index">{{item}}</span>
    </div>
    <div class="service-info">
      <div v-for="(item,index) in goodsInfo.services" 
                  :key="index" 
                  class="service-info-item">
        <img :src="item.icon" alt />
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default: () => {},
    }
  },
  
};
</script>

<style scoped>
.detail-base {
  padding: 5px;
  padding-bottom: 20px;
  border-bottom: 4px solid #f6f6f6;
}

.title {
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    color: #222222;
}

.price-info {
    height: 50px;
    
}
.price-info span:first-child {
    font-size: 24px;
    color: #ff5777;
}
.price-info span:nth-child(2) {
    margin-left: 5px;
    text-decoration: line-through;
    font-size: 14px;
    color: rgb(160, 160, 160);
}
.price-info span:last-child {
    padding: 2px 4px;
    margin-left: 3px;
    border-radius: 8px;
    background: #ff5777;
    vertical-align: top;
    font-size: 14px;
    color: #fff;
}
.column-info {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    color: rgb(160, 160, 160);
}

.service-info {
  display: flex;
  padding-top: 20px;
  font-size: 14px;
  color: #333;
}
.service-info-item {
  flex: 1;
}
.service-info-item img {
  width: 14px;
}
</style>
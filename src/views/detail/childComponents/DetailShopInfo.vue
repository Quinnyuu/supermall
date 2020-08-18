<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt />
      {{shopInfo.name}}
    </div>
    <div class="shop-middle">
        <div class="shop-middle-item shop-middle-left">
            <div class="sale">
                <div class="strong">{{shopInfo.sells | formatCount}}万</div>
                <p>总销量</p>
            </div>
            <div class="goods">
                <div class="strong">{{shopInfo.goodsCount}}</div>
                <p>全部宝贝</p>
            </div>
        </div>
        <span></span>
        <div class="shop-middle-item shop-middle-right">
            <table>
                <tr v-for="item in shopInfo.score" :key="item.name">
                    <td>{{item.name}}</td>
                    <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                    <td class="better" :class="{ 'better-more': item.isBetter }">
                        <span>{{item.isBetter ? '高' : '低'}}</span>
                    </td>
                </tr>
            </table>
            
        </div>
    </div>
    <div class="shop-bottom">
        <span class="shop-enter">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default: () => {},
    }
  },
  filters: {
      formatCount(count) {
          if (count < 10000) return count;
          return (count / 10000).toFixed(1);
      }
  }
};
</script>

<style scoped>
.shop-info {
  padding: 10px;
}
.shop-logo {
    margin: 20px 0;
}
.shop-logo img {
  height: 50px;
  vertical-align: middle;
  margin-right: 5px;
}
.shop-middle {
    display: flex;
    height: 100px;
    padding-top: 20px;
}
.shop-middle-item {
    flex: 1;
    font-size: 14px;
}
.shop-middle-left {
    display: flex;
    justify-content: space-around;
    color: #333;
    text-align: center;
}
.strong {
    font-size: 18px;
    font-weight: 600;
}
.shop-middle-right table {
    margin-left: 10px;
}
.shop-middle-right table td {
    padding: 0 6px 7px;
}

.shop-middle-right .score {
  color: #5ea732;
}

.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better span {
  padding: 3px;
  text-align: center;
  color: #ffffff;
  background-color: #5ea732;
}

.shop-middle-right .better-more span {
  background-color: #f13e3a;
}

.shop-middle span {
    width: 1px;
    height: 50px;
    margin-top: 10px;
    background: #b1aeae;
}
.shop-bottom {
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 5px solid #f6f6f6;
}
.shop-enter {
  padding: 5px 70px;
  border-radius: 7px;
  background: rgb(240, 239, 239);
}
</style>
<template>
  <div class="cart-list">
    <scroller class="scroll-height" ref="scroller">
      <!-- 循环部分 -->
      <div class="shop-item" :key="index" v-for="(item, index) in cartList">
        <div class="item-selector">
          <check-buttom @click.native="checkClick(item)" :isChecked="item.checked" />
        </div>
        <div class="item-img">
          <img :src="item.image" alt="商品图片" />
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">商品描述: {{ item.desc }}</div>
          <div class="info-bottom">
            <div class="item-price left">¥{{ item.price }}</div>
            <div class="item-count right">x{{ item.count }}</div>
          </div>
        </div>
      </div>
    </scroller>

    <!-- 底部订单栏 -->
    <div class="cart-bottom-bar">
      <div class="cart-bottom-check">
        <check-buttom :isChecked="isCheckdeAll" @click.native="checkAll"/>
        <span>全选</span>
      </div>
      <div class="cart-bottom-price">
        合计：
        <span>¥ {{ totalPrice }}</span>
        元
      </div>
      <div class="cart-bottom-btn">
        <button @click="submitOrder">提交订单({{ checkedLength }})</button>
      </div>
    </div>
  </div>
</template>

<script>
import Scroller from "components/common/scroller/Scroller";
import CheckButtom from "components/content/checkButtom/CheckButtom";
export default {
  data() {
    return {
      cartList: []
    };
  },
  created() {
    this.cartList = this.$store.state.cartList;
  },
  activated() {
    this.$refs.scroller.refresh();
  },
  components: {
    Scroller,
    CheckButtom,
  },
  methods: {
    checkClick(item) {
      item.checked = !item.checked;
    },
    checkAll() {
      if(this.isCheckdeAll) {
        this.cartList.forEach(item => item.checked = false)
      }else{
        this.cartList.forEach(item => item.checked = true)
      }
    },
    submitOrder() {
      if(this.checkedLength === 0) {  
        this.$toast.toastMsg('请选择要提交的订单');
      }
    }
  },
  computed: {
    totalPrice() {
      return this.cartList
        .filter(item => item.checked)
        .reduce((prev, item) => {
          return prev + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    checkedLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isCheckdeAll() {
      return this.cartList.length !== 0 && !this.cartList.find(item => !item.checked);
    }
  },
};
</script>

<style scoped>
.cart-list {
  width: 100%;
  height: 100%;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 99px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: #ffffff;
}

.shop-item {
  font-size: 0;
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}

.shop-item:last-child {
  border-bottom: 0;
}

.item-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 88%;
  padding: 5px 10px;
  color: #333333;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666666;
}

.info-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin-top: 10px;
}

.info-bottom .item-price {
  color: #ff4500;
}

.cart-bottom-bar {
  font-size: 15px;
  position: fixed;
  right: 0;
  bottom: 50px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #cccccc;
}
.cart-bottom-check {
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.cart-bottom-check span {
  margin-left: 5px;
  margin-top: 4px;
}
.cart-bottom-price {
  margin-left: 50px;
}

.cart-bottom-price span {
  color: red;
}

.cart-bottom-btn button {
  line-height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  height: 50px;
  padding: 0 30px;
  color: white;
  border: 0;
  outline: none;
  background: linear-gradient(to right, #fcbf3c, #f51c6f);
}

.cart-bottom-btn button:active {
  opacity: 0.8;
}
</style>
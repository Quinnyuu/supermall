<template>
  <div>
      <cart-nav-bar class="cart-nav-bar">
          <div slot="center">购物街({{cartLength}})</div>
      </cart-nav-bar>
      <cart-list />
      <toast></toast>
  </div>
</template>

<script>
import CartNavBar from "components/common/navbar/NavBar";
import CartList from './childComponents/CartList';
import Toast from 'components/common/toast/Toast'
import { mapGetters } from "vuex";
export default {
  components: {
    CartNavBar,
    CartList,
    Toast
  },
  computed: {
      // 对象写法可以自己命名
    ...mapGetters({
      cartLength: "cartListLength"
    })
  }
};
</script>

<style scoped>
.cart-nav-bar {
    background: var(--color-tint);
    color: #fff;
}
</style>
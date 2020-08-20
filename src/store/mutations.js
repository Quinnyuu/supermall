import {
    ADD_COUNT,
    PUSH_CART
} from './type'

export default {
    [ADD_COUNT](state, payLoad) {
    payLoad.count++;
    },
    [PUSH_CART](state, payLoad) {
      payLoad.count = 1;
      payLoad.checked = true;
      state.cartList.push(payLoad);
    }
  }
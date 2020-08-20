import {
  ADD_COUNT,
  PUSH_CART
} from './type'

export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      let oldProduct = null
      //   循环的方法
      //   for (let i of context.state.cartList) {
      //       if (i.iid === payLoad.iid) {
      //           oldProduct = i;
      //       }
      //   }
      //数组的方法
      oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid);
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve('添加成功！')
      } else {
        context.commit(PUSH_CART, payLoad)
        resolve('添加成功！')
      }
    })
  }
}

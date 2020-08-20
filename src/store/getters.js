export default {
    cartList: state => state.cartList,
    cartListLength: (state,getters) => getters.cartList.length
}
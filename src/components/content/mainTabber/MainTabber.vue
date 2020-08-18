<template>
    <div>
        <tabber>
            <tabber-item path='/home' activeColor="#e70d94">
                <img src="~assets/img/tabbar/main.png" alt="" slot="item-icon" >
                <img src="~assets/img/tabbar/main-active.png" alt="" slot="item-icon-active">
                <div slot="item-text">首页</div>
            </tabber-item>
            <tabber-item path='/cart' activeColor="#e70d94">
                <img src="~assets/img/tabbar/cart.png" alt="" slot="item-icon">
                <img src="~assets/img/tabbar/cart-active.png" alt="" slot="item-icon-active">
                <div slot="item-text">购物车</div>
            </tabber-item>
            <tabber-item path='/category' activeColor="#e70d94">
                <img src="~assets/img/tabbar/category.png" alt="" slot="item-icon" >
                <img src="~assets/img/tabbar/category-active.png" alt="" slot="item-icon-active">
                <div slot="item-text">分类</div>
            </tabber-item>
            <tabber-item path='/mine' activeColor="#e70d94">
                <img src="~assets/img/tabbar/mine.png" alt="" slot="item-icon">
                <img src="~assets/img/tabbar/mine-active.png" alt="" slot="item-icon-active">
                <div slot="item-text">我的</div>
            </tabber-item>
        </tabber>
    </div>
</template>

<script>
import Tabber from 'components/common/tabber/Tabber'
import TabberItem from 'components/common/tabber/TabberItem'
export default {
    components: {
        Tabber,
        TabberItem        
    }
}
</script>

<style scoped>

</style>
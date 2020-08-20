<template>
    <div class="bottom-nav">
        <div class="server">
            <div class="server-icon"></div>
            <span>客服</span>
        </div>
        <div class="shop">
            <div class="shop-icon"></div>
            <span>店铺</span>
        </div>
        <div class="collect">
            <div class="collect-icon"></div>
            <span>已收藏</span>
        </div>
        <div class="cart-enter" @click="addCart">
             加入购物车
        </div>
        <div class="buy" @click="$router.push('/cart')">
            立即购买
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            addCart() {
                this.$emit('addCart');
            }
        }
    }
</script>

<style scoped>
    .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        height: 50px;
        background-color:#fff;
        z-index: 10;
        text-align: center;
    }
    .server,
    .shop,
    .collect {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
    }
    .cart-enter,
    .buy {
        flex: 2;
        line-height: 50px;
    }
    .cart-enter {
        background: rgb(255, 230, 3);
    }
    .buy {
        background: rgb(255, 96, 143);
    }
    .server-icon,
    .shop-icon,
    .collect-icon {
        height: 30px;
        width: 30px;
        margin-bottom: 2px;
        background-image: url(~assets/img/detail/detail_bottom.png);
        background-size: 30px;
    }
    .server-icon {
        background-position-y: -70px;
    }
    .shop-icon {
        background-position-y: -134px;
    }
</style>
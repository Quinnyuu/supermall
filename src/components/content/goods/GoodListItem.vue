<template>
    <div class="good-list-item">
        <img :src="goodItem.show.img" alt="">
        <div class="goods-info">
            <p>{{goodItem.title}}</p>
            <span class="price">{{goodItem.price}}</span>
            <span class="collect">{{goodItem.popularStar}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            goodItem: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style scoped>
    .good-list-item {
        width: 48%;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 3px;
    }
    .good-list-item img {
        width: 100%;
    }
    .goods-info {
        text-align: center;
    }
    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .goods-info .price {
        color: var(--color-high-text);
        font-weight: 600;
        margin-right: 10px;
    }
    .goods-info .collect::before {
        display: inline-block;
        content: '';
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
        margin-right: 3px;
    }
</style>
<template>
    <div class="good-list">
        <good-list-item :good-item="item" v-for="(item, index) in goods" :key="index"/>
    </div>
</template>

<script>
import GoodListItem from './GoodListItem'
    export default {
        props: {
            goods: {
                type: Array,
                default: () => []
            }
        },
        components: {
            GoodListItem
        }
    }
</script>

<style scoped>
    .good-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background: var(--color-background);
        padding: 1px;
    }
</style>
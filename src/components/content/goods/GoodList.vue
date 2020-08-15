<template>
    <div class="good-list">
        <good-list-item :good-item="item" v-for="item in goods" :key="item.iid"/>
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
        },
        methods: {
            
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
<template>
    <div class="tab-control-bar">
        <div v-for="(item,index) in titles" :key="item" class="tab-bar-item" @click="tabClick(index)">
            <span :class="{active: index == currentIndex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            titles: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            tabClick(index) {
                this.currentIndex = index;
                this.$emit('tabClick',index);
            }
        }
    }
</script>

<style scoped>
    .tab-control-bar {
        display: flex;
        height: 50px;
        line-height: 50px;
        background: #fff;
        text-align: center;
        font-size: 14px;
    }
    .tab-bar-item {
        flex: 1;
    }
    .tab-bar-item span {
    padding: 5px;
  }
    .active {
        color: var(--color-high-text);
        border-bottom: 2px solid var(--color-high-text);
    }
</style>
<template>
    <div class="check-buttom" :class="{active: isChecked}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        props: {
            isChecked: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .check-buttom {
        border-radius: 8px;
        border: 2px solid #b3afaf;
    }
    .active {
        background: var(--color-tint);
        border: 2px solid var(--color-tint);
    }
</style>
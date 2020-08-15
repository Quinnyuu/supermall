<template>
    <div class="swiper-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .swiper-item {
        float: left;
        width: 25%;
    }
    .swiper-item img {
        width: 100%;
    }

</style>
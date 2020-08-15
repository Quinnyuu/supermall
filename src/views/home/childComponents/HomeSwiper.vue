<template>
    <swiper>
        <swiper-item v-for="item in banner" :key="item.link">
            <a :href="item.link">
                <img :src="item.image">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        props: {
            banner: {
                type: Array,
                default: () => []
            }
        },
        components: {
            Swiper,
            SwiperItem
        },

    }
</script>

<style scoped>

</style>
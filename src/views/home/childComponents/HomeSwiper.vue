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
        data() {
            return {
                isLoad: false
            }
        },
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
        methods: {
            // swiperImageLoad() {
            //     if(!this.isLoad){
            //         this.$emit('swiperImageLoad');
            //         this.isLoad = true;
            //     }    
            // }
        }
    }
</script>

<style scoped>

</style>
<template>
    <swiper>
        <swiper-item>
            
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        props: {
            banner: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        }

        
    }
</script>

<style scoped>

</style>
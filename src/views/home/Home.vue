<template>
    <div>
      <nav-bar class="home-nav">
          <div slot="center">购物街</div>
      </nav-bar>
      <home-swiper :banner="banner"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import HomeSwiper from './HomeSwiper'
    export default {
        components: {
            NavBar,
            HomeSwiper
        },
        data() {
            return {
                banner: [],
                recommend: []
            }
        },
        created() {
            getHomeMultidata().then(res => {
                this.banner = res.data.banner.list;
                this.recommend = res.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background: var(--color-tint);
        color: #fff
    }
</style>
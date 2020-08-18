import {debounce} from './utils'
export const RefreshMixin = {
    data() {
        return {
            itemListener: null,
            newRefresh: null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroller.refresh,100);
        this.itemListener = () => {
                  this.newRefresh();
              }
        this.$bus.$on('detailImageLoad', this.itemListener)
    }
}


import BackTop from 'components/content/backTop/BackTop'
export const BackTopMixin = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    components: {
        BackTop
    },
    methods: {
        topClick() {
            this.$refs.scroller.scrollTo(0,0,30)
        },
        listenerShowBackTop(position) {
            this.isShowBackTop = -position.y > 1000
        }
    }
}
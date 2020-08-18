<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                scroller: {
                    type: Object,
                    default: () => {}
                }
            }
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.scroller = new BScroll(this.$refs.wrapper,{
                probeType: this.probeType,
                click: true,
                //根据需求决定是否开启监听滚动到底部事件
                pullUpLoad: this.pullUpLoad
            })

            this.scroller.on('scroll',(position) => {
                this.$emit('scroll',position);
            })

            if(this.pullUpLoad) {
                this.scroller.on('pullingUp',() => {
                    this.$emit('pullingUp')
                })
            }
            
        },
        methods: {
            scrollTo(x,y,time=300) {
                this.scroller && this.scroller.scrollTo(x,y,time);
            },
            refresh() {
                this.scroller && this.scroller.refresh();
            },
            finishPull() {
                this.scroller && this.scroller.finishPullUp();
            },
            getScaleY() {
                return this.scroller.y ? this.scroller.y : 0;
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="toastBox" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'hhhh',
                isShow: false
            }
        },
        methods: {
            toastMsg(message, duration= 2000) {
                this.message = message;
                this.isShow = true;
                setTimeout(() => {
                    this.message = '';
                    this.isShow = false;
                }, duration)
            }
        }
    }
</script>

<style scoped>
    .toastBox {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        border-radius: 5px;
        background: rgba(0, 0, 0, .6);
        color: #fff;
        z-index: 999;
    }
</style>
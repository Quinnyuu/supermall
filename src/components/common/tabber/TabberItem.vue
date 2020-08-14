<template>
    <div class="tabber-bar-item" @click="itemActive">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="isActive? {color:activeColor}: {}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    props:{
        path:String, 
        activeColor: {
            default: '#e70d94'
        }
    },   
    data() {
       return {

       }
   },
   computed: {
       isActive(){
           return this.$route.path.indexOf(this.path) !== -1
       }
   },
   methods: {
       itemActive() {
           this.$router.replace(this.path);
       }
   }
}
</script>

<style scoped>
.tabber-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
.tabber-bar-item img {
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 1px;
}
</style>
<template>
    <div id="tabber-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
 #tabber-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 49px;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(155,155,155,.3);
  }
</style>
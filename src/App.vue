<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabber></main-tabber>  
  </div>
</template>

<script>
import MainTabber from 'components/content/mainTabber/MainTabber'
export default {
  name: 'App',
  components: {
    MainTabber
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>

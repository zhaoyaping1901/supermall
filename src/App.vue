<template>
  <div id="app">
    
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
// @ is an alias to /src
import MainTabBar from '@/components/content/MainTabBar/MainTabBar'

export default {
  name: 'Home',
  components: {
    MainTabBar
  }
}
</script>
<style>
@import 'assets/css/base.css'
</style>

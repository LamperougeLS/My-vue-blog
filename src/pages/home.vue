<template>
   <div id='home'>
      <TopNav></TopNav>
      <router-view></router-view>
   </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
export default {
  components: {TopNav}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


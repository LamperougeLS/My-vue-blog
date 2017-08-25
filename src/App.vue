<template>
  <div id="app">
    <header>
      <TopNav></TopNav>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
import 'normalize.css'
import TopNav from './components/TopNav.vue'
export default {
  name: 'app',
  components: {TopNav}
}

</script>
<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  header{
    background-color: #817F7F;
  }
}
</style>

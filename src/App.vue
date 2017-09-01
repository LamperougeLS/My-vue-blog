<template>
  <div id="app">
    <router-view></router-view>
    <modal></modal>
  </div>
</template>
<script>
import 'normalize.css'
import modal from './components/modal.vue'

export default {
  name: 'app',
  components: {modal}
}

</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0 auto;
  height: 100%;
  }
li{
 list-style-type: none;
 margin:0;
 padding:0;
}
*{
  margin:0;
  padding:0;
}
</style>

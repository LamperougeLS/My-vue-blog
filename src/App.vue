<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import 'normalize.css'

export default {
  name: 'app'
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
  max-width: 1080/32rem;
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

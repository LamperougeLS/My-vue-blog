<template>
  <div class="tagList">
    <li v-for='tag in tags'>{{tag.name}}</li>
  </div>
</template>
<script>
export default {
  name: 'tagList',
  data() {
    return {
      tags: ''
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

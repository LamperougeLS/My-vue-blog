<template>
   <div id='homepage'>
      <TagList></TagList>
      <ArticleList></ArticleList>
   </div>
</template>

<script>

import TagList from '../components/TagList.vue'
import ArticleList from '../components/ArticleList.vue'
export default {
  components: {TagList, ArticleList}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


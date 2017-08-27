<template>
   <div id='home'>
      <TopNav></TopNav>
      <TagList></TagList>
      <ArticleList></ArticleList>
   </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import TagList from '../components/TagList.vue'
import ArticleList from '../components/ArticleList.vue'
export default {
  components: {TopNav, TagList, ArticleList}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  width: 750/32rem;
}

</style>


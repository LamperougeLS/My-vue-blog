<template>
   <div id='homepage'>
      <TagList></TagList>
      <ul v-if='articleList.length'>
        <ArticleList v-for='(article, index) in articleList' :title='article.title' :tag='article.tag' :abstract='article.abstract' :date='article.date' :key='index'>
        </ArticleList>
   	  </ul>
   </div>
</template>

<script>
import {mapState} from 'vuex'
import TagList from '../components/TagList.vue'
import ArticleList from '../components/ArticleList.vue'
export default {
  components: {TagList, ArticleList},
  computed: {
    ...mapState({
      articleList: state => state.homepage.articleList
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


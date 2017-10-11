<template>
   <div id='homepage'>
      <div id='tagList'>
    <!--  <router-link :to="{name:'directory',params:{tagName：tag.id}}" v-for='tag in tagList'> -->
      <li id='tag' v-for='(tag, index) in tagList' :key='index' >{{tag.name}}</li>
    <!-- </router-link> -->
      </div>
      <ul v-if='articleList.length'>
        <ArticleList v-for='(article, index) in articleList' :title='article.title' :tag='article.tag' :abstract='article.abstract' :date='article.date' :key='index'>
        </ArticleList>
   	  </ul>
   </div>
</template>

<script>
import {mapState} from 'vuex'
import ArticleList from '../components/ArticleList.vue'
export default {
  components: {ArticleList},
  computed: {
    ...mapState({
      articleList: state => state.homepage.articleList,
      tagList: state => state.homepage.tagList
    })
  },
  created () {
    this.$store.dispatch('getArticleList')
    this.$store.dispatch('getTagList')
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
#tagList{
  margin-top: 1/32rem;
  box-sizing: border-box;
  width: 100%;
  overflow-x:scroll;
  white-space: nowrap;
  font-size:0;
  border: 1/32rem solid #ebf0f0;

  /* ::-webkit-scrollbar        滚动条整体部分，其中的属性有width,height,background,border（就和一个块级元素一样）等。
  ::-webkit-scrollbar-button      滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
  ::-webkit-scrollbar-track         外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
  ::-webkit-scrollbar-track-piece        内层轨道，滚动条中间部分（除去）。
  ::-webkit-scrollbar-thumb               滚动条里面可以拖动的那部分
  ::-webkit-scrollbar-corner               边角
  ::-webkit-resizer                       定义右下角拖动块的样式 */
}

#tagList::-webkit-scrollbar{
  width:0;
  height:0; 
}


#tag{
  vertical-align:top;
  display: inline-block;
  border: 1/32rem solid black;
  border-radius: 3/32rem;
  margin-right:2/32rem;
  margin-bottom: 2/32rem;
  line-height: 28/32rem;
  height: 28/32rem;
  font-size: 10/32rem;
  width: 150/32rem;
}


</style>


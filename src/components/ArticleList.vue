<template>
  <div id="article-list">
      <!-- <router-link to="{name:'article',params:{}}" v-for='article in articleList'> -->
        <div class='article-content'>
          <header>
            <div class='article-title'>{{title}} <span class='article-tag'>{{'[分类：'+tag+']'}}</span></div>
            <span class='article-date'>日期： {{date}}</span>
          </header>
          <article>
            <p class="article-abstract">{{abstract + '...'}}</p>
          </article>
        </div>
      <!-- </router-link> -->
  </div>
</template>
<script>
export default {
  props: {
    'title': {
      default: '标题'
    },
    'tag': {
      default: '分类'
    },
    'date': {
      default: 'xxxx-xx-xx'
    },
    'abstract': {
      default: '摘要内容'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less' scoped>
#article-list {
  box-sizing: border-box;
  padding: 5/32rem 10/32rem;
  background-color: #ebf0f0;
  height: 100%;
}
.article-content{
  background-color: #fff;
  border:1/32rem solid #F6F1F1;
  border-radius:8/32rem;
  padding:20/32rem;
  margin-top:5/32rem;
  header{
    line-height: 35/32rem;
    height: 35/32rem;
    position: relative;
    margin-bottom:10/32rem;
  }
}
.article-abstract{
  overflow: hidden;
  word-wrap: break-word;
  text-align:left;
  line-height: 32/32rem;
  text-indent: 1rem;
  font-size:20/32rem;
  padding: 5/32rem;
}
.article-title{
  position:absolute;
  font-size:25/32rem;
  left:0;
}
.article-tag{
  font-size:25/32rem;
  text-indent:.5rem;
  color:#ADA3A3;
  font-weight: 400;
  vertical-align: center;
}
.article-date{
  font-size:15/32rem;
  position:absolute;
  right: 0;
}
</style>

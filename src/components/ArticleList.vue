<template>
  <div id="articleList">
    <ul v-if='articleList.length'>
      <!-- <router-link to="{name:'article',params:{}}" v-for='article in articleList'> -->
        <div class='article-content' v-for='article in articleList'>
          <header>
            <span class='article-title'>{{article.title}}</span>
            <span class='article-date'>日期： {{article.date}}</span>
          </header>
          <article>
            <p class='article-tag'>分类：{{article.tag}}</p>
            <p class="article-abstract">{{article.abstract + '...'}}</p>
          </article>
        </div>
      <!-- </router-link> -->
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      articleList: [{ title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfaasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsfasfasifjoasjfapofjpassdasdaasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsdasdafjasf' },
        { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'aasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsfhoaihfoiahasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpasfjsdsdsadaasf' },
        { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfishfoiasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfasfhfasfasfasfasifjoasjfapofjpasdasdasasfjasf' },
        { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpaasdasdasdsfasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfjasf' }
      ]
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less' scoped>
#articleList {
  box-sizing: border-box;
  padding: 5/32rem 10/32rem;
  background-color: #ebf0f0;
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
  font-size:15/32rem;
  text-align:left;
  text-indent:.5rem;
}
.article-date{
  font-size:15/32rem;
  position:absolute;
  right: 0;
}
</style>

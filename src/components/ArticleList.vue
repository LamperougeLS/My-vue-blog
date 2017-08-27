<template>
  <div id="articleList">
    <ul v-if='articleList.length'>
      <!-- <router-link to="{name:'article',params:{}}" v-for='article in articleList'> -->
        <div  v-for='article in articleList'>
          <header>
            <h3>{{article.title}}</h3>
            <h5>文章分类：{{article.tag}}</h5>
          </header>
          <article>
            <p>浏览：{{article.pageview}} 日期： {{article.date}}</p>
            <p class="abstract">{{article.abstract + '...'}}</p>
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
      articleList: [{ title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasf' },
        { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpasfjsdsdsadaasf' },
        { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpasdasdasasfjasf' },
        { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpaasdasdasdsfjasf' }
      ]
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less' scoped>
#article {
  box-sizing: border-box;
  padding: 2/32rem;
  width: 750/32rem;
}
.abstract{
  overflow: hidden;
  word-wrap: break-word;
  text-align:left;
  text-indent: 1rem;
}

</style>

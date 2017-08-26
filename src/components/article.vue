<template>
  <div id="article">
    <ul v-if='articleList.length'>
      <router-link to="{name:'article',params:{}}" v-for='article in articleList'>
        <div>
          <header>
            <h3>{{article.title}}</h3>
            <h1>文章分类：{{article.tag}}</h1>>
          </header>
          <article>
            <p>浏览：{{article.pageview}} 日期： {{article.date}}</p>
            <p>{{article.abstract}}</p>
          </article>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import topNav from './topNav.vue'
export default {
  data() {
    return {
      articleList: [{ title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpasfjasf' },
        { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpasfjasf' },
        { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpasfjasf' },
        { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpasfjasf' }
      ]
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#article {
  box-sizing: border-box;
  padding: 2/32rem;
}

</style>

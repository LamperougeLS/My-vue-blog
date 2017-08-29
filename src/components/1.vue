<template>
  <div id="message-list">
    <ul v-if='articleList.length'>
      <!-- <router-link to="{name:'article',params:{}}" v-for='article in articleList'> -->
      <div class='message-content' v-for='message in messageList'>
        <header>
          <h3 class='article-title'>{{message.title}}</h3>
        </header>
        <article>
          <span class='message-author'>日期： {{message.date}}</span>
          <span class='message-date'>回复： {{message.replies}}</span>
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
      messageList: [
   { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
   { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
   { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
   { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
   { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
   { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
   { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9}
      ]
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
#message-list {
  box-sizing: border-box;
  padding: 5/32rem 10/32rem;
  background-color: #ebf0f0;
  height: 100%;
}

.message-content {
  background-color: #fff;
  border: 1/32rem solid #F6F1F1;
  border-radius: 8/32rem;
  padding: 20/32rem;
  margin-top: 5/32rem;
  header {
    line-height: 35/32rem;
    height: 35/32rem;
    position: relative;
    margin-bottom: 10/32rem;
  }
}
.message-title {
  position: absolute;
  font-size: 25/32rem;
  left: 0;
}

.message-tag {
  font-size: 25/32rem;
  text-indent: .5rem;
  color: #ADA3A3;
  font-weight: 400;
  vertical-align: center;
}

.message-date {
  font-size: 15/32rem;
  position: absolute;
  right: 0;
}

</style>

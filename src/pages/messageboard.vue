<template>
  <div id="message-list">
    <ul v-if='messageList.length'>
      <!-- <router-link to="{name:'article',params:{}}" v-for='article in articleList'> -->
      <div class='message-content' v-for='message in messageList'>
        <header>
          <p class='message-title ellipsis'>{{message.title}}</p>
        </header>
        <section>
          <span class='message-author'>作者:{{message.author}}</span>
          <span class='message-date'>日期:{{message.date}}&nbsp&nbsp&nbsp&nbsp回复:{{message.replies}}</span>
        </section>
      </div>
      <!-- </router-link> -->
    </ul>
    <section id='other-button'><span>刷新</span><span>留言</span></section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      messageList: [ {title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
        {title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
        {title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
        {title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
        {title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
        {title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9},
        {title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifhoais', author: 'name', date: '2017-1-1', replies: 9}
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
  position:relative;
}

#other-button{
	position:fixed;
	right:10/32rem;
	bottom:0;
	width:160/32rem;
	height:80/32rem;
	span{
		width:50%;
		border:2/32rem solid #C4B7B7;
		border-radius: 80/32rem;
		font-size:20/32rem;
		margin-right: 10/32rem;
	}
}

.message-content {
  background-color: #fff;
  border: 1/32rem solid #F6F1F1;
  border-radius: 8/32rem;
  padding:20/32rem 40/32rem;
  margin-top:5/32rem;
  header{
  	width:100%;
	margin-bottom:25/32rem;
	height:30/32rem;
	line-height: 30/32rem;
  }
  section{
  	position: relative;
  	width: 100%;
  	height:30/32rem;
  	line-height: 30/32rem;
  }
}

.message-author{
	position:absolute;
	left:0;
	font-size:18/32rem;
}
.message-title {
  width:70%;
  text-align: left;
  font-size: 30/32rem;
}

.message-date {
	position:absolute;
  font-size: 18/32rem;
  right:0;
  text-align: right;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-break: keep-all
}
</style>

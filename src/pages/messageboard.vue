<template>
  <div id="message-list">
    
    <ul v-if='messageList.length'>
      <!-- <router-link to="{name:'article',params:{}}" v-for='article in articleList'> -->
      <div class='message-content' v-for='message in messageList'>
        <header class='message-title ellipsis'>{{message.title}}
        </header>
      <article>
        <P class='message-detail'>{{message.detail}}</P>
      </article>
        <footer>
          <span class='message-author'>作者:{{message.author}}</span>
          <span class='message-date'>日期:{{message.date}}</span>
        </footer>
      </div>
      <!-- </router-link> -->
    </ul>
    <section id='other-button'><span>刷新</span><span>留言</span></section>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      messageList : state => state.messageList
    })
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
  width:100%;
  position:relative;
}
#reply{
  position:fixed;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}
#reply-title,#reply-author{
  width:5rem;
}

#other-button{
	position:fixed;
	right:5/32rem;
	bottom:0;
	span{
		display: inline-block;
		width:80/32rem;
		height: 50/32rem;
		line-height: 50/32rem;
		border:2/32rem solid #C4B7B7;
		border-radius: 20/32rem;
		font-size:25/32rem;
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
	margin-bottom:20/32rem;
	height:30/32rem;
	line-height: 30/32rem;
  }
  footer{
  	position: relative;
  	height:30/32rem;
  	line-height: 30/32rem;
  }
}

.message-detail{
    text-align:left;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
    text-indent: 1rem;
    margin-bottom:25/32rem;
    line-height: 35/32rem;
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

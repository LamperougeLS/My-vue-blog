<template>
  <div v-if='replyshow' id='modal'>
    <section id='reply'>
      <input id='reply-title' type="text" placeholder=" 标题">
      <input id='reply-author' type="text" placeholder=" 名字">
      <textarea name="" id="reply-content" placeholder=" 留言内容"></textarea>
      <span id='reply-button'>
      <button>提交</button>
      <button>清空</button>
      </span>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      replyshow: false,
      newmessage: { title: '', author: '', date: '' }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
#modal{
  position: fixed;
  left: 0;
  top: 0;
  bottom:0;
  right: 0;
  width:100%;
  height: 100%;
  background:rgba(115,105,105,0.5);
  z-index: 10;
}

#reply {
  font-size:0;
  width:400/32rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity:1;
  border:1/32rem solid black;
}

#reply-content {
  box-sizing:border-box;
  width: 100%;
  height:8rem;
  font-size:20/32rem;
  resize: none;
}

#reply-button{
  width: 100%;
  button{
    width:50%;
    height:1rem;
    font-size:20/32rem;
  }
}
#reply-title,
#reply-author {
  width:100%;
  box-sizing:border-box;
  font-size: 20/32rem;
  height:1rem;
}

</style>

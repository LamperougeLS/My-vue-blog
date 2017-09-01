<template>
  <div id='modal'>
    <section id='reply'>
      <input id='reply-title' type="text" placeholder="请输入标题">
      <input id='reply-author' type="text" placeholder="请输入标题">
      <textarea name="" id="reply-content"></textarea>
      <button>提交</button>
      <button>清空</button>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
  width:350/32rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity:1;
  border:1/32rem solid black;
}

#reply-reply {
  width: 100%;
}

#reply-title,
#reply-author {
  width:100%;
}

</style>

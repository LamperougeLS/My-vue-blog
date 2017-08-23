<template>
  <nav class="topNav clearfix">
    <div class="nav-left clearfix">
      <li><i></i>首页</li>
      <li><i></i>留言板</li>
      <li><i></i>关于</li>
    </div>
    <div class="nav-right">
      <div class="search-input">
        <i></i>
        <input type="text" placeholder="请输入搜索内容">
      </div>
      <div class="user-login">
          <span>登录</span>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'topNav',
  data () {
    return {
      islogin: false
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.topNav{
  width: 750/32rem;
  margin: 0 auto;
  height: 70/32rem;
}
.nav-left {
  float:left;
  height:70/32rem;
  width:300/32rem;
  line-height:70/32rem;
  li {
    font-size:25/32rem;
    height:70/32rem;
    width:33.3%;
    line-height:70/32rem;
    display: block;
    float: left;

  }
}

.nav-right {
  margin-top:10/32rem;
  height:50/32rem;
  float:right;
  width:350/32rem;
}

.search-input {
  float:left;
  position:relative;
  i{
    display:block;
    position:absolute;
    left: 10/32rem;
    top:5/32rem;
    height: 40/32rem;
    width: 40/32rem;
  }
  input{
    padding-left: 50/32rem;
    width:210/32rem;
    height: 40/32rem;
    outline: 0;
    line-height: 50/32rem;
    font-size:20/32rem;
  }
}

.user-login {
  float:right;
  height:50/32rem;
  width: 50/32rem;
  font-size:20/32rem;
  line-height: 50/32rem;
  margin-right: 10/32rem;
}

.clearfix:before, clearfix:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;    //行高为0
    height: 0;     //高度为0
    font-size:0;    //字体大小为0
}

.clearfix { *zoom:1;}

</style>

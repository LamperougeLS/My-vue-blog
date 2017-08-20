<template>
<nav class="top-nav">
  <div class="nav-left">
    <li><i></i>首页</li>
    <li><i></i>留言板</li>
    <li><i></i>关于</li>
  </div>

  <div class="nav-right">
    <div class="search-input"><i></i><input type="text" placeholder="请输入搜索内容"></div>
    <div class="user-login">
      <span v-if="!islogin"><i></i>登录</span>
      <span v-if="islogin"><img src="" alt=""></span>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      islogin:true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nav-left {
  float: left;
  height：70/32rem;
  width：400/32rem;
  line-height: 70/32rem; 
  li{
    height：70/32rem;
    width: 33.3%;
    line-height: 70/32rem;
  }
}

.nav-right{
    height：70/32rem;
    float: right;
    width: 300/32rem;
}
.search-input{
  float: left;
  height: 60/32rem;
  width: 200/32rem;
  i{
    position: relative;
    left: 0;
    top:0;
  }
  input{
     padding-left: 30/32rem;
  }
}
.user-login{
  float: right;
  width: 70/32rem;
  

}
</style>

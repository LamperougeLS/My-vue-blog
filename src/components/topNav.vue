<template>
  <nav class="topNav">
    <div class="nav-left">
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
        登录
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
.topNav {
  box-sizing:border-box;
  width:100%;
  margin: 0 auto;
  height: 60/32rem;
  border: 1/32rem black solid;
}

.nav-left {
  float: left;
  margin-left: 20/32rem;
  height: 100%;
  width: 300/32rem;
  li {
    box-sizing: border-box;
    font-size: 15/32rem;
    height: 60/32rem;
    width: 33.3%;
    line-height: 60/32rem;
    display: block;
    float: left;
  }
}

.nav-right {
  margin-top: 10/32rem;
  float: right;
  height: 40/32rem;
  width: 350/32rem;
}

.search-input {
  float: left;
  position: relative;
  i {
    display: block;
    position: absolute;
    left: 5/32rem;
    top: 5/32rem;
    height: 30/32rem;
    width: 30/32rem;
  }
  input {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    border: 1/32rem black solid;
    padding-left: 40/32rem;
    width: 250/32rem;
    outline: 0;
    height: 40/32rem;
    font-size: 15/32rem;
  }
}

.user-login {
  float: right;
  height: 40/32rem;
  width: 80/32rem;
  font-size: 10/32rem;
  line-height: 40/32rem;
  margin-right: 10/32rem;
}





/* .clearfix:before, clearfix:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;    //行高为0
    height: 0;     //高度为0
    font-size:0;    //字体大小为0
}

.clearfix { *zoom:1;} */

</style>

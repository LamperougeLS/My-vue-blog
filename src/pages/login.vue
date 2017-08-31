<template>
  <div id="loginpage">
    <header>
      <li>登录</li>
      <li>注册</li>
    </header>
    <section v-if= "loginpageTab==='login'">
      <span id='username'>账号：<input type="text"></span>
      <p id='usernamecheck'>{{}}</p>
      <span id='password'>密码：<input type="password"></span>
      <p id='pswcheck'>{{}}</p>
      <button>登录</button><button>清空</button>
    </section>
    <section v-if="loginpageTab==='register'">
      <span id='username'>账号：<input type="text"></span>
      <p id='usernamecheck'>{{}}</p>
      <span id='password'>密码：<input type="password"></span>
      <span id='password'>密码：<input type="password"></span>
      <p id='pswcheck'>{{}}</p>
      <span>电话：123123213123</span>
      <span>邮箱：231231231@qq.com</span>
      <button>注册</button><button>清空</button>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      registername: '',
      loginpageTab: 'login',
      islogin: false

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>


</style>

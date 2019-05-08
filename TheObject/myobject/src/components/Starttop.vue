<template>
  <div class="starttop clearfix">
    <h3>ele.me</h3>
    <div class="access clearfix">
      <router-link to="" class="register">注册</router-link>
      <router-link to="" class="login">登录</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Starttop"
    }
</script>

<style scoped>
  .starttop{
    width: 100%;
   height:2rem;
    background-color: rgb(49, 144, 232);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 0.8rem;
    color: white;
  }
  h3{
    float:left;
    margin: 0.5rem;
  }
  .access{
    float: right;
    position: relative;
    top: 0.6rem;
    right: 0.6rem;
  }
  .login{
    font-size: 0.6rem;
    float: right;
    color: white;
    border-right: 2px solid white;
    text-decoration: none;
  }
  .register{
    font-size: 0.6rem;
    float: right;
    color: white;
    text-decoration: none;
  }
</style>

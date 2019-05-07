<template>
  <div class="footer text-center">
    <router-link :to="{path:'/Mai'}">
      <img src="../../images/饿了么.jpg"/><br>
      外卖</router-link>
    <router-link :to="{path:'/Sou'}">
      <img src="../../images/浏览器.png"/><br>
      搜索</router-link>
    <router-link :to="{path:'/Ding'}">
      <img src="../../images/列表.png"/><br>
      订单</router-link>
    <router-link :to="{path:'/My'}">
      <img src="../../images/用户.png"/><br>
      我的</router-link>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {
    /*
    百分比更换rem
    */
    height: 2.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
  }

  a {
    margin: 0 1rem;
    font-size: 0.5rem;
    color: gray;
    text-decoration: none;
    padding: 0.4rem;
    display: inline-block;
  }
  img{
    width:0.8rem ;
    height: 0.8rem;
  }
</style>

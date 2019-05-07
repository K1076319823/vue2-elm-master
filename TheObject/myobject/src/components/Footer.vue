<template>
  <div class="footer text-center">
    <router-link :to="{path:'/Footer/Mai'}">外卖</router-link>
    <router-link :to="{path:'/Footer/Sou'}">搜索</router-link>
    <router-link :to="{path:'/Footer/Ding'}">订单</router-link>
    <router-link :to="{path:'/Footer/My'}">我的</router-link>
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
    width: 100%;
    height: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  hr {
    margin: 0;
  }

  a {
    margin: 1.1rem;
    font-size: 0.5rem;
    color: gray;
    text-decoration: none;
  }
</style>

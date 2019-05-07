<template>
    <div class="footer">
      <router-link :to="{path:'/Mai'}">外卖</router-link>
      <router-link :to="{path:'/Sou'}">搜索</router-link>
      <router-link :to="{path:'/Ding'}">订单</router-link>
      <router-link :to="{path:'/My'}">我的</router-link>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .footer{
    /*
    百分比更换rem
    */
    width: 100%;
    height: 10%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: lightcyan;
  }
</style>

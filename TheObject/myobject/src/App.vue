<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

import '../build/resize.js' // 引入 resize.js 文件

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  /*
  百分比更换rem
  */
  html,body{
    width: 100%;
    height: 100%;
    font-size: 14px;
  }

  #app{
    width: 100%;
    height: 100%;
    background-color: rgb(235, 235, 235);
  }

  *{
    padding:0;
    margin:0;
    text-decoration: none;
  }
  /* Vue清除浮动 */
  .clearfix:after{
    content:'';
    display:table;
    clear: both;
  }
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

import '../build/resize.js' // 引入 resize.js 文件
// import '../node_modules/swiper/dist/css/swiper.min.css'
// import '../node_modules/swiper/dist/js/swiper.min.js'



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
    background-color: lightblue;
  }

  *{
    padding:0;
    margin:0;
    text-decoration: none;
  }
  .clearfix:after{
    content:'';
    display:table;
    clear: both;
  }
</style>

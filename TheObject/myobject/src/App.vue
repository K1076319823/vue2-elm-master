<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>

import '../build/resize.js' // 引入 resize.js 文件

import 'jquery/dist/jquery.min'
import Header from "./components/Header";
import Footer from "./components/Footer";
 // 引入 bootstrap.min css/js 文件
// import 'node_modules/bootstrap/dist/js/bootstrap.min.js'

export default {
  name: 'App',
  components: {Header,Footer}
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

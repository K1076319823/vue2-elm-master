<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>


import '../build/resize.js' // 引入 resize.js 文件

import 'bootstrap/dist/css/bootstrap.min.css' // 引入 bootstrap.min css/js 文件
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  name: 'App'
}
</script>

<style>
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

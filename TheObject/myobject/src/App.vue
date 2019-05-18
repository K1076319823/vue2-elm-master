<template>
  <div id="app">
    <transition name="fode">
    <router-view></router-view>
    </transition>
  </div>
</template>
<script>

import '../build/resize.js' // 引入 resize.js 文件
import store from '../store/index'
import Vue from 'vue'


export default {
  name: 'App',
  components: {

  },
  store
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  /* Vue 路由跳转动画 */
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-active{
    opacity: 0;
  }
  /*
  百分比更换rem
  */
  html,body{
    width: 100%;
    height:100%;
    font-size: 14px;
  }

  #app{
    width: 100%;
    height:100%;
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

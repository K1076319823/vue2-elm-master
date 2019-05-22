<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="transView elwidth"></router-view>
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
    store,
    data(){
      return {
        transitionName:'slide-left'
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path == '/') {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }
      }
    },
    created(){
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=> {
        sessionStorage.setItem("store", JSON.stringify(this.$store.state))
      })
    }


  }
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  .elwidth .el-rate {
    display: inline-block;
  }
  .elwidth .el-rate i{
    width: 0.1rem;
    font-size: 0.1rem;
  }
  .elwidth .el-rate .el-rate__text{
    font-size: 0.4rem;
  }


  /* Vue 路由跳转动画 */
  .transView{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);

  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }

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

<template>
  <div class="Ding">
    <div class="head clearfix">
      <div>
        <router-link :to="{path:'/index'}">
          <span class="glyphicon glyphicon-chevron-left jian"></span>
        </router-link>
      </div>
      <div class="center">
        订单列表
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Ding",
      components: {Footer, Header}
    }
</script>

<style scoped>
  .head{
    background-color: #3190e8;
    height:1.9rem;
  }
  a{
    color:#fff;
  }
  .head div{
    float:left;
    width:33%;
    color:#fff;
    font-size:1rem;
    line-height: 2rem;
  }
  .head .center{
    text-align: center;
    color:#fff;
    font-size:0.8rem;
  }
  .Ding{
    width: 100%;
    height:100%;
    background: rgb(245,245,245);
  }
</style>

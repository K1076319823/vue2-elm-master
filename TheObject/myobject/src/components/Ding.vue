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
    <div class="twohang ">
      <div class="yidan clearfix">
        <div class="left">
          <img data-v-b204fb80="" src="//elm.cangdu.org/img/16a4375cd3232590.png" alt="" class="IndentLogo">
        </div>
        <div class="right">
          <div class="clearfix"><h4 class="name">哈哈死亡诗社7777 </h4><span class="zhishi">></span> <span class="copy">等待支付</span></div>
          <div class="clearfix"><span class="danhao">23-31</span><span class="jia">￥:1738:00</span></div>
          <div class="clearfix"><span class="zou">去支付,还剩15分10秒</span></div>
        </div>
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
  .yidan{
   padding:0.5rem;
    background-color: #fff;
    border-bottom: 1px #ccc solid;
  }
  .yidan .left{
   width:18%;
    float:left;
  }
  .yidan .right{
    width:78%;
    float:right;
  }
  .left img{
    margin-top:0.5rem;
    width:100%;
  }
  h4{
    float:left;
  }
  .zhishi{
    color:#ccc;
    font-size:1rem;
    margin-left:0.5rem;
  }
  .copy{
    float:right;
    margin-top: 0.2rem;
    font-size: 0.7rem;
  }
  .danhao{
    float:left;
    font-size: 0.8rem;
    color:#ccc;
  }
  .jia{
    float:right;
    font-size:0.8rem;
    color:red;
  }
  .zou{
    margin-top:0.4rem;
    border:1px red solid;
    float:right;
    padding:0.2rem;
    color:red;
  }


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

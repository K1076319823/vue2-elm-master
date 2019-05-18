<template>
    <div class="dinglie">
      <div class="head clearfix">
        <div>
          <router-link :to="{path:'/Ding'}">
            <span class="glyphicon glyphicon-chevron-left jian"></span>
          </router-link>
        </div>
        <div class="center">
          订单详情
        </div>
      </div>
      <div class="one">
        <img data-v-b204fb80="" src="//elm.cangdu.org/img/16a4375cd3232590.png" alt="" class="IndentLogo">
        <p>等待支付</p>
        <span>再来1单</span>
      </div>
      <div class="two">
        <div class="clearfix">
          <div class="left">
            <img data-v-b204fb80="" src="//elm.cangdu.org/img/16a4375cd3232590.png" alt="" class="IndentLogo">演示效果
          </div>
          <div class="right">
            >
          </div>
        </div>
        <div class="clearfix">
          <div class="left">
            哈哈死亡诗社7777
          </div>
          <div class="right">
            <span class="number">18</span>
            <span>x1</span>
          </div>
        </div>
        <div class="clearfix">
          <div class="left">配送费</div>
          <div class="right">4</div>
        </div>
        <div class="clearfix">
          <span class="right ping">实付￥:1738:00</span>
        </div>
      </div>
      <div class="there">
        <h4>配送信息</h4>
        <p>送达时间: <span>尽快送达</span></p>
        <p>送达地址: <span>asold</span></p>
        <p>配送方式: <span>蜂鸟专送</span></p>
      </div>
      <div class="there">
        <h4>订单信息</h4>
        <p>订单号: </p>
        <p>在线支付 <span>支付方式</span></p>
        <p>下单时间: </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Dinglist"
    }
</script>

<style scoped>
  .head{
    background-color: #3190e8;
    height:1.9rem;
    position: fixed;
    width:100%;
  }
  .jian{
    color: white;
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
  .one{
    padding:2rem;
    text-align:center;
    background-color: #fff;
    margin-bottom: 0.2rem;
  }
  .one p{
    font-size:0.8rem;
    padding:0.2rem;
  }
  .one span{
    color:dodgerblue;
    border: 1px dodgerblue solid;
    padding:0.1rem;
  }
  .one img{
    width:3rem;
    padding-top:1rem;
  }
  .two{
    margin-bottom: 0.5rem;
  }
  .two .clearfix{
    border-bottom:1px #ccc solid;
    background-color: #fff;
    padding: 0.5rem ;
  }
  .two .left{
    float:left;
    font-weight: bold;
  }
  .two .left img{
    width:1rem;
    margin-right:0.3rem;
  }
  .two .right{
    float:right;
  }
  .number{
    margin-right:0.4rem;
  }
  .ping{
    color:orange;
  }
  .there{
    background-color: #fff;
    padding:0.5rem;
    margin:0.5rem 0;
  }
  .there p span{
    margin-left:1rem;
  }
</style>

<template>

  <div class="my">
    <Header></Header>
    <div class="myone clearfix">
      <div class="left">
        <div class="toutu"><span class="tou glyphicon glyphicon-user"></span></div>
      </div>
      <div class="center">
        <h4 class="dz"><b>登录/注册</b></h4>
        <p class="sjh glyphicon glyphicon-phone"><span >暂无绑定手机号</span></p>
      </div>
      <div class="right">
        <span class=" jian glyphicon glyphicon-chevron-right"></span>
      </div>
    </div>
    <div class="container-fluid">

        <div class="col-xs-4">
          <div class="one">
         <p><b>0.00</b>元</p>
          我的余额
        </div>
        </div>
        <div class="col-xs-4">
          <div class="one two">
            <p><b>1</b>个</p>
            我的优惠
          </div>
        </div>
        <div class="col-xs-4">
          <div class="one ths">
            <p><b>0</b>分</p>
            我的积分
          </div>
        </div>

    </div>
    <div class="biao">
      <div ><img src="../../images/ding.gif" />我的订单</div>
      <div><img src="../../images/shang.gif" />积分商城</div>
      <div ><img src="../../images/king.gif" />饿了吗会员</div>
    </div>
    <div class="biao">
      <div><img class="ee" src="../../images/shang2.png" />服务中心</div>
      <div><img class="ee" src="../../images/饿了么.jpg" />下载饿了吗APP</div>
    </div>


   <Footer></Footer>
  </div>
</template>

<script>


  import Header from "./Header";
  import Footer from "./Footer";
  export default {
    name: "Mai",
    components: {Footer, Header},
    comments:{
      Header,Footer
    }
  }
</script>

<style scoped>
  .my{

    margin-top:2rem;

  }
  .myone{

    height:4.3rem;
    box-sizing: border-box;
    width:100%;
    background:rgb(49, 144, 232);
    padding-top:1rem;
  }
  .myone .left{
    float:left;
    width:20%;
  }
  .toutu{
    display:inline-block;

    margin-left:0.5rem;
    width:2.52rem;
    height: 2.52rem;
    background: #fff;
    border-radius: 50%;
    text-align:center;
    padding:0.2rem;
  }
  .left .tou{
    display:block;
    color:#CCC;
    font-size:1.8rem;

  }
  .dz{
    display:inline-block;
    color:#fff;
  }
  .sjh{
    color:#fff;
    display:block;
  }
  .sjh span{
    margin-left:0.2rem;
  }
  .myone .center{
    float:left;
    margin-left:0.5rem;
  }
  .myone .right{
    float:right;

  }
  .right span{
    display:block;


  }
  .container-fluid{
    background-color: #fff;
    padding:0.6rem 0.2rem;
  }
   .one b{
   font-size:1.5rem;
     color:orange;
  }
   .two b{
     color:red;
     margin-left:1rem;
   }
   .ths b{
     color:green;
     margin-left:1rem;
   }
  .one p{
    display:block;

  }
  .one {
   font-size:0.8rem;
    line-height: 1.2rem;
    tetx-align:center;
    background-color: #fff;
  }
  .biao{
    margin:0.7rem 0;
  }
  .biao div{
    background-color: #fff;
    font-size:0.8rem;
    line-height: 1.8rem;
  }
  .biao div img{
    width:0.7rem;
    hieht:0.7rem;
    margin:0 0.5rem;
  }
  .biao div  .ee{
    width:0.5rem;
    hieht:0.5rem;
  }
  .jian{
    color:#fff;
    margin:1rem 0;
    text-align:right;
    margin-right:0.5rem;
  }


</style>



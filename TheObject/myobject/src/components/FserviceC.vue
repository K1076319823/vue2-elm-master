<template>
  <div class="FserviceC">
    <header class="header text-center"><span class="pull-left clearfix"><img src="../../images/左箭头.png" height="20" width="20"/></span>服务中心</header>
    <div class="container">
      <div class="row text-center " style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <div class="col-xs-6 online">
          <router-link :to="{path:'/OnlineServer'}">
            <img src="../../images/客服.png"/><br>
            在线客服
          </router-link>
        </div>
        <div class="col-xs-6 online" style="border-left: 1px solid rgba(0,0,0,0.1)">
          <router-link :to="{path:'/OnlinePhone'}">
            <img src="../../images/电话.png"/><br>
            联系电话
          </router-link>
        </div>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <div class="col-xs-12 host">热门问题</div>
      </div>
      <div class="row text-left" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10">超级会员权益说明<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10">签到规则<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">用户等级说明<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">积分说明<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">教我拍大片<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">支付问题<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">其他问题<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">准时达问题<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">会员说明<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">会员问题<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">红包问题<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">活动细则<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">补签规则<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">优惠说明<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">免责说明<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">代金券说明<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">商务合作<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">余额问题<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">超赞商家<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">匿名购买<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <router-link :to="{path:'/'}" class="f-link col-xs-10 text-left">活动问题<span class="pull-right"><img src="../../images/右箭头.png"/></span></router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "FserviceC",
  }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 2rem;
    background-color: rgb(49, 144, 232);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    z-index: 999;
  }
  .FserviceC {
    padding-top: 1rem;
    background: rgb(255, 255, 255);
  }
  a {
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    color: gray;
    line-height: 2rem;
    display: inline-block;
  }

  img {
    width: 1rem;
    height: 1rem;
  }

  .online {
    height: 4rem;
    vertical-align: bottom;
    padding: 0;
    margin-top: 1rem;
  }

  .host {
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.7rem;
  }

  .f-link {
    font-size: 0.6rem;
    display: inline-block;
  }

</style>

<template>
  <!-- 该组件只需要获取一个用户名数据 , 其余都是静态页面和JS -->
  <div class="VipCenter">
    <header class="header text-center"><span class="pull-left clearfix"><router-link :to="{path:'/My'}"><img src="../../images/左箭头.png" style="width: 0.8rem;"/></router-link></span>会员中心
    </header>
    <!-- 获取用户名数据 -->
    <div class="getVip">为账户 <b>{{v}}</b>购买会员</div>
    <div class="Vippre">
      <!-- 可跳转至服务中心里面的 会员说明 组件 -->
      <router-link :to="{path:'/huanyuanSpeak'}" class="link_a"><span class="pre pull-left">会员特权</span><span class="readme pull-right">会员说明<img src="../../images/右箭头.png" height="20" width="20"/></span></router-link>
      <div class="PreMD">
        <img src="../../images/sheng.jpeg" class="shengImg pull-left"/>
        <div class="pull-left">
          <h5>减免配送费</h5>
          <p>每月减免30单, 每日可减免3单, 每单最高减4元<br>蜂鸟专送专享</p>
        </div>
      </div>
      <div class="PreMD">
        <img src="../../images/jifen.jpeg" class="shengImg pull-left"/>
        <div class="pull-left">
          <h5>减免配送费</h5>
          <p>每月减免30单, 每日可减免3单, 每单最高减4元<br>蜂鸟专送专享</p>
        </div>
      </div>
    </div>

    <div class="openVip">
      <div class="openMD">
        <h4>开通会员</h4>
      </div>
      <div class="link_b">
        <span class="money pull-left clearfix">1个月 <i style="color: red;">$20</i></span>
        <!-- 跳转至 购买会员 组件 -->
        <router-link :to="{path:'/Vip_OnlinePay_F'}" class="getBtn pull-right clearfix">购买</router-link>
      </div>
    </div>

    <div class="conversion">
      <!--  -->
      <router-link :to="{path:'/Vip_Convert_F'}" class="link_a"><span class="pre pull-left">兑换会员</span><span
        class="readme pull-right">使用卡号卡密<img
        src="../../images/右箭头.png" height="20" width="20"/></span></router-link>
    </div>

    <div class="record">
      <router-link :to="{path:'/Shopjilu'}" class="link_a"><span class="pre pull-left">购买记录</span><span
        class="readme pull-right">开发票<img
        src="../../images/右箭头.png" height="20" width="20"/></span></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VipCenter_F",
    data(){
      return {
        v:'123'
      }
    }
  }
</script>

<style scoped>
  .VipCenter {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }

  .header {
    width: 100%;
    height: 2rem;
    background-color: #3190e8;
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
  }
  .header img{
    width: 0.8rem;
    height: 0.8rem;
  }
  .getVip {
    width: 100%;
    display: inline-block;
    padding: 0.5rem;
    background: #f5f5f5;
    color: #666666;
  }

  .Vippre {
    background: white;
    font-size: 0;
  }

  .link_a {
    width: 100%;
    display: inline-block;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: white;
  }

  .pre {
    font-size: 0.7rem;
    color: black;
    background: white;

  }

  .readme {
    color: rgba(0, 0, 0, 0.5);
  }

  .PreMD {
    width: 100%;
    display: inline-block;
    padding: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: white;

  }

  .shengImg {
    margin-right: 0.5rem;
    width: 1.6rem;
  }

  h5 {
    font-size: 0.7rem;
    margin: 0;
  }

  p {
    font-size: 0.5rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .openVip {
    width: 100%;
    margin-top: 0.5rem;
    background: white;
    display: inline-block;
  }

  .openMD {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  h4 {
    display: inline-block;
    width: 100%;
    padding: 0.5rem;
    margin: 0;
  }

  .link_b {
    display: inline-block;
    width: 100%;
    padding: 0.5rem;
  }

  .money {
    font-size: 0.8rem;
    height: 1rem;
  }

  i {
    font-weight: 600;
  }

  .getBtn {
    display: inline-block;
    border: 1px solid orangered;
    color: orangered;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;

  }

  .conversion {
    width: 100%;
    margin-top: 0.5rem;
    background: white;
    display: inline-block;
    font-size: 0;
  }

  .record {
    width: 100%;
    margin-top: 0.5rem;
    background: white;
    display: inline-block;
    font-size: 0;
  }
</style>


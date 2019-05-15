<template>
  <div class="Discounts" style="width: 100%; height: 100%; background:#f0f0f0;">
    <header class="header text-center">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/'}"><img src="../../images/左箭头.png" style="width: 0.8rem;"/></router-link>
        </span>我的优惠
    </header>
    <div class="header_link text-center">
      <router-link :to="{path:'/My_HongBao'}">红包</router-link>
      <router-link :to="{path:'/My_DaiJinQuan'}">商家代金券</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import My_HongBao from "./My_HongBao";
  export default {
      name: "My_Discounts_F",
    components: {My_HongBao},
  }
</script>

<style scoped>
  .header_link_a a {
    font-size: 0.7rem;
    color: #aaa;
  }

  .packet_right_left h4:nth-child(1) {
    margin-bottom: 0;
  }

  .packet_right_left p:nth-child(2),
  .packet_right_left p:nth-child(3) {
    font-size: 0.1rem;
    margin-bottom: 0;
  }

  .packet_left p:nth-child(3) {
    font-size: 0.1rem;
    color: #aaaaaa;
  }

  .packet_left span:nth-child(1) {
    font-size: 0.8rem;
  }

  .packet_left span {
    color: #ff5340;
    font-size: 1.5rem;
  }

  .discountsMD b {
    color: red;
  }

  .discountsMD img {
    width: 0.6rem;
  }

  .header_link {
    background: white;
  }

  .header_link a {
    width: 7.9rem;
    height: 2rem;
    line-height: 2rem;
    display: inline-block;
    color: black;
  }

  .header {
    width: 100%;
    height: 2rem;
    background-color: rgb(49, 144, 232);
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
  }

  .header img {
    width: 0.8rem;
    height: 0.8rem;

  }
</style>

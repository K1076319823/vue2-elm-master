<template>
  <div class="Past" style="background:#f0f0f0;">
    <header class="header text-center">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/My_HongBao'}">
<img src="../../images/左箭头.png"/>
          </router-link>
        </span>历史红包
    </header>
    <div class="box">
    <div class="packet clearfix" v-for="(pack, index) in disArr" :key="index" style="display: flex">
      <div class="packet_left pull-left">
        <span>￥</span><span>{{pack.amount}}</span>
        <p>{{pack.description_map.sum_condition}}</p>
      </div>
      <div class="packet_right pull-left clearfix">
        <div class="packet_right_left pull-left" style="width: 100%;">
          <h4>{{pack.name}}</h4>
          <p style="color: #aaa;">{{pack.description_map.validity_periods}}</p>
          <p style="color: #aaa;">{{pack.description_map.phone}}</p>
        </div>
      </div>
      <div class="pull-right">
        <div style="color:#ff5340;font-size: 0.8rem;"></div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "My_Past_F",
    data() {
      return {
        disArr:[]
      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0').then((res) => {
        this.disArr = res.data;
      }).catch((error) => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>
  .footerImg{
    width: 3rem;
  }
  .box{
    margin-top: 2rem;
    padding:0.5rem 0.6rem;
  }
  .packet_right_left h4:nth-child(1){
    margin-bottom:0 ;
  }
  .packet_right_left p:nth-child(2) ,
  .packet_right_left p:nth-child(3){
    font-size: 0.1rem;
    margin-bottom: 0;
  }
  .packet_right{
    padding-left: 1rem;
  }
  .packet_left{
    padding-right: 1rem;
    border-right: 1px dashed #aaaaaa;
    height: 100%;
  }
  .packet_left p:nth-child(3){
    font-size: 0.1rem;
    color: #aaaaaa;
  }
  .packet_left span:nth-child(1){
    font-size: 0.8rem;
  }
  .packet_left span{
    color: #aaa;
    font-size: 1.5rem;
  }
  .packet{
    width: 100%;
    height: 4.15rem;
    background-image: url("../../images/expired.png");
    background-repeat: repeat-x;
    background-size: 0.5rem;
    background-color: white;
    margin-top: 0.5rem;
    padding: 0.8rem;
    border-radius: 0.3rem;
  }
  .header {
    width: 100%;
    height: 2rem;
    background-color: rgb(49, 144, 232);
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    position: fixed;
    top: 0;
  }

  .header img {
    width: 0.8rem;
    height: 0.8rem;
  }
</style>

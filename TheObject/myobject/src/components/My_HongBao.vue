<template>
    <div class="Voucher" style="width: 100%; height: 100%; background:#f0f0f0;">
      <div class="discountsBox">
        <div class="discountsMD clearfix">
          <span class="pull-left">有 <b>{{nums}}</b>个红包即将到期</span>
          <span class="pull-right">
        <img src="../../images/description.png"/>
        <router-link :to="{path:'/'}">红包说明</router-link>
      </span>
        </div>
        <div class="packet clearfix" v-for="(pack, index) in disArr" :key="index">
          <div class="packet_left pull-left">
            <span>￥</span><span>{{pack.amount}}</span>
            <p>{{pack.description_map.sum_condition}}</p>
          </div>
          <div class="packet_right pull-left clearfix">
            <div class="packet_right_left pull-left" style="width: 100%;">
              <h4>{{pack.name}}</h4>
              <p>{{pack.description_map.validity_periods}}</p>
              <p>{{pack.description_map.phone}}</p>
            </div>
          </div>
          <div class="pull-right">
            <div style="color:#ff5340;font-size: 0.8rem;">{{pack.description_map.validity_delta}}</div>
          </div>
        </div>
        <div class="text-center" style="background:#f5f5f5;border-radius: 0 0 0.2rem 0.2rem">
          <p style="font-size: 0.1rem;display: inline-block;color: #aaa;">限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
        </div>
        <div class="text-center">
          <router-link :to="{path:'/'}" style="width: 100%;color: #aaa;font-size: 0.5rem;padding: 0.6rem 0 3rem;display: inline-block;">查看历史红包 <img src="../../images/右箭头灰色.png" class="link_img"></router-link>
        </div>
      </div>
      <footer style="width: 100%;height: 1.98rem;position: absolute; bottom: 0;left: 0;right: 0;background:white;" class="header_link header_link_a text-center">
        <router-link :to="{path:'/'}" style="border-right: 1px solid #f0f0f0">兑换红包</router-link>
        <router-link :to="{path:'/'}">推荐有奖</router-link>
      </footer>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Dis_Voucher_F",
      data(){
        return {
          nums:'',
          disArr:[]
        }
      },
      mounted(){
        Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0').then((res)=>{
          console.log(res);
          this.nums = res.data.length;
          this.disArr = res.data;
          console.log(this.disArr);
        }).catch((error)=>{
          console.log(error);
        })
      }
    }
</script>

<style scoped>
  .header_link_a a{
    font-size: 0.7rem;
    color: #aaa;
  }
  .link_img{
    width: 0.8rem;
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
    color: #ff5340;
    font-size: 1.5rem;
  }
  .packet{
    width: 100%;
    height: 4.15rem;
    background-image: url("../../images/hongbao.png");
    background-repeat: repeat-x;
    background-size: 0.5rem;
    background-color: white;
    margin-top: 0.5rem;
    padding: 0.8rem;
    border-radius: 0.3rem;
  }
  .discountsBox{
    padding: 0.5rem 0.6rem;
  }
  .discountsMD b{
    color: red;
  }
  .discountsMD img{
    width: 0.6rem;
  }
  .discountsMD{
    font-size: 0.5rem;
  }
  .header_link{
    background: white;
  }
  .header_link a{
    width: 7.9rem;
    height: 2rem;
    line-height: 2rem;
    display: inline-block;
    color: black;
  }
</style>

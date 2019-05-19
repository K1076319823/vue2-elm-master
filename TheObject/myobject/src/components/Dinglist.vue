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
      <img data-v-b204fb80="" :src="'//elm.cangdu.org/img/'+dianxiang.image_path"  alt="" class="IndentLogo">
      <p>等待支付</p>
      <span>再来1单</span>
    </div>
    <div class="two">
      <div class="clearfix">
        <div class="left">
          <img data-v-b204fb80="" :src="'//elm.cangdu.org/img/'+dianxiang.image_path"  alt="" class="IndentLogo"><span class="btit">{{dianxiang.name}}</span>
        </div>
        <div class="right jtou">
          >
        </div>
      </div>
      <table class="shopping" v-for="(it,index) in  dingdan" :key="index">
        <tr class="shoppingSum" >
          <!-- 商品名称 -->
          <td class="commom">{{it.proname}}</td>
          <!-- 商品数量 -->
          <td class="count">*{{it.count}}</td>
          <!-- 商品价格 -->
          <td class="price">{{it.price}}</td>
        </tr>
      </table>
      <div class="clearfix">
        <div class="lunchBox clearfix list2">
          <span class="tit">餐盒</span>
          <span class="lunchBox02">*{{cannum}}  </span>
          <span class="lunchBox02">¥ 3</span>
        </div>
        <!-- 配送费 -->
        <div class="road clearfix list2">
          <span class="tit">配送费</span>
          <span class="lunchBox02"></span>
          <span class="lunchBox02">¥ 5</span>
        </div>
      </div>
      <div class="clearfix">
        <span class="right ping">实付￥:<span class="allsum">{{$store.getters.getAllPrice+5+cannum*3}}</span></span>
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
      <p>订单号:10-{{ this.$store.state.shopid}} </p>
      <p>在线支付 <span>支付方式</span></p>
      <p>下单时间: {{day}}</p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "Dinglist",
    data() {
      return {
        dianxiang: [],//店铺头像
        dingdan:[],
        cannum:0,
        day :''
      }
    },
    mounted(){
      this.day= new Date();
        let m = this.$store.state.shopid;
        console.log(m, 1111)
        Vue.axios.get(`https://elm.cangdu.org/shopping/restaurant/${m}`).then((res) => {
            console.log(res.data);
            this.dianxiang = res.data;
            console.log(this.dianxiang, "111111")
          }
        )
      this.dingdan=this.$store.state.car
      console.log(this.dingdan)
      console.log('22')
      for(let i=0;i<this.dingdan.length;i++){
        // console.log(this.dingdan.length)
        this.cannum+=this.dingdan[i].count;
        // console.log(this.dingdan[i].count);
      }
      return this.cannum
    }


  }
</script>

<style scoped>

  .list2{
    font-size:0.6rem;
    width:100%;
  }
  table{
    font-size:0.6rem;
  }
  .list2  .tit{

    display:inline-block;
    width:50%;
    box-sizing: border-box;
  }
  .list2 .lunchBox02{
    width:20%;
    display:inline-block;
    text-align: center;
  }
  .head {
    background-color: #3190e8;
    height: 1.9rem;
    position: fixed;
    width: 100%;
  }

  .jian {
    color: white;
  }

  a {
    color: #fff;
  }

  .head div {
    float: left;
    width: 33%;
    color: #fff;
    font-size: 1rem;
    line-height: 2rem;
  }

  .head .center {
    text-align: center;
    color: #fff;
    font-size: 0.8rem;
  }

  .one {
    font-size:0.8rem;
    padding: 2rem;
    text-align: center;
    background-color: #fff;
    margin-bottom: 0.2rem;
  }

  .one p {
    font-size: 0.8rem;
    padding: 0.2rem;
  }

  .one span {
    color: dodgerblue;
    border: 1px dodgerblue solid;
    padding: 0.1rem;
  }

  .one img {
    width: 3rem;
    padding-top: 1rem;
  }

  .two {
    margin-bottom: 0.5rem;
  }

  .two .clearfix {
    background-color: #fff;
    padding: 0.5rem;
  }

  .two .left {
    float: left;
    font-weight: bold;

  }

  .two .left img {
    width: 2rem;
    margin-right: 0.3rem;
  }

  .two .right {
    float: right;
  }

  .number {
    margin-right: 0.4rem;
  }

  .ping {
    color: orange;

  }
  .allsum{
    font-size:1rem;
  }

  .there {
    background-color: #fff;
    padding: 0.5rem;
    margin: 0.5rem 0;
    font-size:0.6rem;
  }
  .there h4{
    font-size:0.8rem;
  }

  .there p span {
    margin-left: 1rem;
  }
  .shopping{
    background-color: #fff;
  }
  table{
    width:100%;
    background-color: #fff;
  }
  .commom{
    width:50%;
    box-sizing: border-box;
    padding:0.5rem;
  }
  .count, .price{
    background-color: #fff;
    width:25%;
    text-align: center;
  }
  .btit{
    font-size:0.8rem;
  }
  .jtou{
    font-size:1rem;
    line-height: 2rem;
  }
  .ping{
    font-size:0.6rem;
  }
</style>

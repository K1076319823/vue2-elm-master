<template>
  <div class="indent">
    <!-- 订单页面头部 -->
    <div class="header clearfix">
      <router-link :to="{path:'/CAndESocket'}" class="skip">
      </router-link>
      <p class="fonts">
        <router-link :to="{}" style="color:white">
          确认订单
        </router-link>
      </p>
    </div>

    <!-- 添加新的收货地址 -->
    <router-link :to="{path:'/Shop_Address'}">
      <div class="addSite">
        <img src="../../images/coord.png" alt="请升级浏览器">

        <span>{{addre}}</span>
        <div class="addGoBack"></div>
      </div>
    </router-link>
    <!-- 分割线 -->
    <div class="division"></div>
    <!-- 送达时间 -->
    <div class="reach">
      <div class="reachVessel">
        <p class="clearfix">
          <span class="plan">尽快送达 | 预计 21:50</span>
        </p>
        <p class="toTime">送达时间</p>
        <div class="mango">
          <p>蜂鸟</p>
          <p>专送</p>
        </div>
      </div>
    </div>
    <!-- 支付方式 -->
    <div class="pay">
      <p class="clearfix">
        <span class="way">支付方式</span>
        <span class="elect" @click="showTheList"></span>
        <span class="online">在线支付</span>
      </p>
    </div>
    <!-- 浅色分割线 -->
    <div class="lineVessel"></div>
    <!-- 红包,效果演示 -->
    <div class="goldCoin">
      <p class="redPacket">
        <span>红包</span>
        <span class="sustain">暂时只在饿了吗APP中支持</span>
      </p>
      <p class="effect">
        <img :src="'//elm.cangdu.org/img/'+dianxiang.image_path" alt="请升级浏览器">
        <span>{{dianxiang.name}}</span>
      </p>
    </div>
    <div class="lineVessel"></div>
    <!-- 结算内容 -->
    <div class="total">
      <!-- 展示被结算的内容 -->
      <table class="shopping" v-for="(it,index) in  dingdan" :key="index">
        <tr class="shoppingSum">
          <!-- 商品名称 -->
          <td class="commom">{{it.proname}}</td>
          <!-- 商品数量 -->
          <td class="count">*{{it.count}}</td>
          <!-- 商品价格 -->
          <td class="price">{{it.price}}</td>
        </tr>
      </table>
    </div>
    <!-- 餐盒 -->
    <div class="lunchBox clearfix">
      <span>餐盒</span>
      <span class="lunchBox02">{{cannum}}* ¥ 3 </span>
    </div>
    <!-- 配送费 -->
    <div class="road clearfix">
      <span>配送费</span>
      <span class="roadBox02">¥ 5</span>
    </div>
    <!-- 订单总价 -->
    <div class="totalVal clearfix">
      <span class="undone">订单 : ¥ {{$store.getters.getAllPrice+5+cannum*3}}</span>
    </div>
    <!-- 待支付 -->
    <div class="waitFor clearfix">
      <span>待支付</span>
      <span class="money">¥ {{$store.getters.getAllPrice+5+cannum*3}}</span>
    </div>

    <div class="division"></div>

    <!-- 订单备注, 发票抬头 -->
    <div class="theEnd">
      <!-- 订单备注 -->
      <p class="pOne">
        <span class="txtsLeft">订单备注</span>
        <span class="txtsRight">口味,偏好等</span>
        <span class="pOneI"></span>
      </p>
      <!-- 发票 -->
      <p class="pTwo">
        <span class="txtsLeft">发票抬头</span>
        <span class="txtsRight">不需要开发票</span>
        <span class="pTwoI"></span>
      </p>
    </div>

    <!-- 结算栏 -->
    <div class="finally clearfix">
      <span class="fina01">待支付 :</span>
      <span class="finMoney">¥ {{$store.getters.getAllPrice+5+cannum*3}}</span>
      <span class="finLogo"></span>
      <!--<router-link :to="{path:'/'}">-->
      <span class="thatSure" @click="loadD">确认下单</span>
      <!--</router-link>-->
    </div>

    <!-- 支付方式 -->
    <div class="payTheWay" v-show="close">
      <div class="payMask"></div>
      <div class="payContent">
        <p class="payTitle">支付方式</p>
        <p class="cargo clearfix">
          <span class="cargoTxt">货到付款 &nbsp; &nbsp;  (商家不支持货到付款)</span>
          <span class="cargoImg"></span>
        </p>
        <p class="onLinePay clearfix">
          <span class="onLineTxt">在线支付</span>
          <span class="onLineImg"></span>
        </p>
        <!--<p class="PyPay clearfix">-->
        <!--<span class="pyTxt">Py交易</span>-->
        <!--<span class="pyImg"></span>-->
        <!--</p> -->
      </div>
      <div class="close" @click="closeTheList"></div>
    </div>
    <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Com_PromptBox from "./Com_PromptBox";

  export default {
    name: 'Indent',
    components: {Com_PromptBox},
    data() {
      return {
        isHide: false,
        close: true,
        dingdan: [],
        cannum: 0,
        dianxiang: [],//店铺头像
        SetTxt: '未登录,请登录',
        addre: ''
      }
    },
    beforeCreate: function () {

    },
    methods: {
      closeTheList() {
        this.close = false;
      },
      showTheList() {
        this.close = true;
      },
      Show(a) {
        this.isHide = false
      },
      loadD() {
        Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
          if (res.data.message === '通过session获取用户信息失败') {
            this.isHide = true;
          }
          else {
            this.$router.push({path: '/ding'})
          }
        })
        this.$store.state.abc = "订单";
      }

    },
    mounted() {
      // console.log(this.$store.state.useraddr)
      let m = this.$store.state.shopid;
      Vue.axios.get(`https://elm.cangdu.org/shopping/restaurant/${m}`).then((res) => {
          this.dianxiang = res.data;
        }
      )
      this.dingdan = this.$store.state.car
      for (let i = 0; i < this.dingdan.length; i++) {
        // console.log(this.dingdan.length)
        this.cannum += this.dingdan[i].count;
        // console.log(this.dingdan[i].count);
      }
      if( this.$store.state.useraddr !== '' ){
        this.addre = this.$store.state.useraddr
      }else{
        this.addre = '请填写收货地址'
      }

      return this.cannum
    },
  }
</script>

<style scoped>
  /* reset */
  .payContent p {
    margin: 0;
    padding: 0;
  }

  /* 关闭支付方式按钮 */
  .close {
    width: 1.6rem;
    height: 1.6rem;
    background: url('../../images/close.png') no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    bottom: .8rem;
    left: 7.4rem;
  }

  /* 支付方式 */
  .onLinePay {
    width: 100%;
    height: 22%;
    background-color: white;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(243, 243, 243);
    background-color: rgb(243, 243, 243);
    border-left: 2px solid white;
    border-right: 2px solid white;
  }

  .pyImg {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url('../../images/Py.png') no-repeat;
    background-position: center center;
    background-size: cover;
    margin-top: .6rem;
    margin-left: 9rem;
  }

  .pyPay {
    width: 100%;
    height: 22%;
    background-color: white;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(243, 243, 243);
    background-color: rgb(243, 243, 243);
    border-left: 2px solid white;
    border-right: 2px solid white;
  }

  .pyTxt {
    float: left;
    margin-left: 1rem;
    color: rgb(155, 155, 155);
  }

  .onLineTxt {
    float: left;
    margin-left: 1rem;
    color: rgb(104, 104, 104);
  }

  .onLineImg {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url('../../images/thatsSure.png') no-repeat;
    background-position: center center;
    background-size: cover;
    margin-top: .6rem;
    margin-left: 8.5rem;
  }

  .cargoImg {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url('../../images/thatsFalse.png') no-repeat;
    background-position: center center;
    background-size: cover;
    margin-top: .6rem;
    margin-left: .76rem;
  }

  .cargoTxt {
    float: left;
    margin-left: 1rem;
  }

  .cargo {
    width: 100%;
    height: 22%;
    background-color: white;
    box-sizing: border-box;
    color: rgb(155, 155, 155);
    border-bottom: 1px solid rgb(243, 243, 243);
  }

  .payTitle {
    width: 100%;
    height: 18%;
    background-color: rgb(250, 250, 250);
    line-height: 1.8rem;
    text-shadow: 1px 1px 1px lightgray;
    color: rgb(63, 63, 63);
  }

  .payContent {
    width: 100%;
    height: 36%;
    background-color: rgb(253, 253, 253);
    line-height: 2rem;
    color: rgb(36, 36, 36);
    box-shadow: 1px 1px 1px rgb(180, 180, 180);
  }

  .payMask {
    width: 100%;
    height: 64%;
    background-color: black;
    opacity: .5;
  }

  .payTheWay {
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }

  /* 结算栏 */
  .thatSure {
    width: 32%;
    height: 100%;
    display: inline-block;
    background: linear-gradient(to right, rgb(82, 212, 117) 0%, #6be67f 100%);
    border-radius: 2px;
    float: right;
    text-align: center;
    color: white;
    line-height: 2.6rem;
  }

  .fina01 {
    color: white;
    display: inline-block;
    position: relative;
    bottom: 1rem;
    left: .8rem;
  }

  .finMoney {
    color: white;
    position: relative;
    bottom: 1rem;
    left: 1rem;
  }

  .finLogo {
    width: 2.6rem;
    height: 2.6rem;
    display: inline-block;
    background: url('../../images/theEnd.gif') no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    left: .78rem;
  }

  .finally {
    width: 100%;
    height: 9%;
    background: rgb(80, 66, 66);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  /* 订单备注, 发票抬头 */
  .theEnd {
    width: 100%;
    height: 30%;
    background-color: white;
    float: left;
  }

  .pOne {
    width: 100%;
    height: 30%;
    background-color: white;
    line-height: 2.6rem;
    box-sizing: border-box;
    padding-left: 1rem;
    padding-right: 2rem;
    color: rgb(75, 75, 75);
    margin-bottom: 0;
  }

  .pOne .txtsRight {
    float: right;
  }

  .pOneI {
    width: 1rem;
    height: 1rem;
    background-color: lightcoral;
  }

  .pOne .imger {
    width: 5%;
    height: 5%;
    background-color: white;
  }

  .pTwo {
    width: 100%;
    height: 30%;
    background-color: white;
    line-height: 2.6rem;
    box-sizing: border-box;
    padding-left: 1rem;
    color: rgb(75, 75, 75);
  }

  .pTwo .txtsRight {
    position: relative;
    left: 5.8rem;
  }

  /* 待支付 */
  .waitFor {
    width: 100%;
    font-size: .6rem;
    color: #666;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: white;
    line-height: 1rem;
  }

  .money {
    float: right;
    margin-right: 2rem;
    color: rgb(255, 102, 0);
    font-size: .8rem;
    padding-bottom: 0;
  }

  /* 订单总价 */
  .totalVal {
    width: 100%;
    font-size: .6rem;
    color: #666;
    padding-left: 1rem;
    padding-top: .6rem;
    background-color: white;
  }

  .undone {
    float: right;
    margin-right: 2rem;
    color: rgb(255, 102, 0);
    font-size: .6rem;
  }

  /* 餐盒 */
  .lunchBox {
    width: 100%;
    font-size: .6rem;
    color: #666;
    padding-left: 1rem;
    padding-top: .6rem;
    background-color: white;
  }

  .lunchBox02 {
    float: right;
    margin-right: 2rem;
    font-size: .4rem;
  }

  /* 配送费 */
  .road {
    width: 100%;
    padding-top: .5rem;
    font-size: .6rem;
    color: #666;
    padding-left: 1rem;
    background-color: white;
  }

  .roadBox02 {
    float: right;
    margin-right: 2rem;
    font-size: .4rem;
  }

  /* 结算内容 */
  .total {
    width: 100%;
    background-color: white;
  }

  .shopping {
    width: 100%;
    padding-top: .6rem;
    font-size: .6rem;
    color: #666;
    box-sizing: border-box;
    padding-left: 1rem;
    margin-bottom: 0;
  }

  .shoppingSum .common {
    display: inline-block;
  }

  .shoppingSum .count {
    margin-left: 7rem;
  }

  .shoppingSum .price {
    margin-left: 1.6rem;
    font-size: .4rem;
  }

  /* 红包,效果演示 */
  .effect {
    line-height: 2.4rem;
    margin-left: .6rem;
    font-size: .7rem;
    color: rgb(82, 82, 82);
  }

  .goldCoin {
    width: 100%;
    height: 15%;
    background-color: white;
    border-bottom: 1px solid rgb(221, 221, 221);
    border: .1px solid transparent;
  }

  .goldCoin img {
    width: 1.2rem;
    height: 1.2rem;
  }

  .redPacket {
    width: 100%;
    height: 16%;
    background-color: white;
    margin-top: .3rem;
    font-size: .4rem;
    color: rgb(151, 151, 151);
  }

  .redPacket:first-child span {
    margin-left: .8rem;
    display: inline-block;
  }

  .sustain {
    position: relative;
    left: 5.2rem;
    display: inline-block;
  }

  /* 浅色分割线 */
  .lineVessel {
    width: 100%;
    height: .08%;
    background-color: rgb(233, 233, 233);
    box-shadow: 1px 1px 1px lightgray;
  }

  /* 支付方式 */
  .way {
    float: left;
    margin-left: .8rem;
    line-height: 1.7rem;
  }

  .online {
    float: right;
    font-size: .6rem;
    line-height: 1.8rem;
    margin-left: 1rem;
  }

  .pay {
    width: 100%;
    height: 6%;
    background-color: white;
    color: rgb(102, 102, 102);
    line-height: 1.6rem;
  }

  .elect {
    display: inline-block;
    float: right;
    width: .8rem;
    height: .8rem;
    background: url('../../images/右箭头.png') no-repeat;
    background-position: center center;
    background-size: cover;
    margin-top: .5rem;
    margin-left: .2rem;
  }

  /* 送达时间 */
  .mango {
    width: 2.2rem;
    height: 2.2rem;
    background-color: rgb(76, 161, 240);
    float: right;
    text-align: center;
    line-height: .6rem;
    border: .2rem double white;
    border-radius: .4rem;
    color: rgb(252, 252, 252);
    position: relative;
    bottom: 1.6rem;
    right: 1rem;
  }

  .toTime {
    color: rgb(59, 59, 59);
    font-size: .74rem;
    margin-left: 1rem;
    font-weight: 600;
  }

  .plan {
    color: #3190e8;
    display: inline-block;
    float: right;
    margin-right: .6rem;
  }

  .reachVessel {
    width: 100%;
    height: 86%;
    background-color: white;
    margin: 2% 2% 0 0;
    border-left: .2rem solid rgb(49, 144, 232);
  }

  .reach {
    width: 100%;
    height: 16%;
    background-color: white;
    border: .1px solid transparent;
  }

  /* 分割线 */
  .division {
    width: 100%;
    height: .8%;
    background: url('../../images/address_bottom.png') repeat-x;
    background-size: contain;
  }

  /* 添加收货地址 */
  .indent {
    width: 100%;
    height: 100%;
  }

  .addSite {
    width: 100%;
    height: 11%;
    background-color: white;
    margin-top: 11.4%;
    line-height: 3.4rem;
    box-sizing: border-box;
    padding-left: 1rem;
    color: rgb(73, 73, 73);
    font-size: .7rem;
  }

  .addSite img {
    width: 1rem;
    height: 1rem;
  }

  .addSite > .addGoBack {
    width: 1rem;
    height: 1rem;
    background: url('../../images/右箭头.png') no-repeat;
    background-position: center center;
    background-size: cover;
    float: right;
    margin-top: 1.2rem;
    margin-right: 1rem;
  }

  .header {
    width: 100%;
    height: 7%;
    background-color: rgb(49, 144, 232);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 0.8rem;
    color: white;
    z-index: 9999999;
  }

  .fonts {
    position: absolute;
    left: 0rem;
    top: 0.5rem;
    display: inline-block;
    color: #fff;
    height: 1rem;
    z-index: 2;
    width: 50%;
    margin-left: 25%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .skip {
    width: 1.2rem;
    height: 1.2rem;
    background-color: white;
    position: absolute;
    left: 0.6rem;
    top: 0.4rem;
    background: url(../../images/login_arrows.png) no-repeat;
    background-position: center center;
    background-size: contain;

  }

  .commom {
    width: 50%;
    box-sizing: border-box;
    padding: 0.5rem;
  }

  .count, .price {
    width: 25%;
    text-align: center;
  }
</style>

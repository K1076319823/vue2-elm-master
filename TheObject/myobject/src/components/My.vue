<!-- 我的 -->
<template>
  <div class="my">
    <div class="head clearfix">
      <div class="left">
        <router-link :to="{path:'/index'}">
          <span class="glyphicon glyphicon-chevron-left jiant"></span>
        </router-link>
      </div>
      <div class="center">
        我的
      </div>
    </div>
    <!-- 利用点击事件判断要跳转到登录还是未登录页面  -->
    <div class="myone clearfix" @click="rouLink()">
      <div class="left">
        <div class="toutu"><span class="tou glyphicon glyphicon-user"></span></div>
      </div>
      <div class="center">
        <h4 class="dz">
          <button style="border: 0;background:rgba(0,0,0,0);outline: none">
            <b>{{user}}</b>
          </button>
        </h4>
        <p class="sjh glyphicon glyphicon-phone"><span>暂无绑定手机号</span></p>
      </div>
      <div class="right">
        <span class=" jian glyphicon glyphicon-chevron-right"></span>
      </div>
    </div>
    <div class="container-fluid">

      <div class="col-xs-4">
        <div class="one">
          <router-link :to="{path:'/Balance'}">
            <p><b>0.00</b>元</p>
            我的余额
          </router-link>
        </div>
      </div>
      <div class="col-xs-4">
        <router-link :to="{path:'/My_Discounts_F'}" style="color: black;">
          <div class="one two">
            <p><b>{{gift}}</b>个</p>
            我的优惠
          </div>
        </router-link>
      </div>
      <div class="col-xs-4">
        <router-link :to="{path:'/My_Integral_F'}" style="color: black;">
          <div class="one ths">
            <p><b>0</b>分</p>
            我的积分
          </div>
        </router-link>
      </div>

    </div>
    <div class="biao">
      <router-link :to="{path:'/Ding'}" style="color: black;">
        <div><img src="../../images/ding.gif"/>我的订单</div>
      </router-link>
      <router-link :to="{path:'/IntegralShop_F'}" style="color: black;">
        <div><img src="../../images/shang.gif"/>积分商城</div>
      </router-link>
      <router-link :to="{path:'/VipCenter_F'}" style="color: black;">
        <div><img src="../../images/king.gif"/>饿了吗会员</div>
      </router-link>
    </div>
    <div class="biao">
      <router-link :to="{path:'/FserviceC'}" style="color: black;">
        <div><img class="ee" src="../../images/shang2.png"/>服务中心</div>
      </router-link>
      <router-link :to="{path:'/Down_Loading'}" style="color: black;">
        <div><img class="ee" src="../../images/饿了么.jpg"/>下载饿了吗APP</div>
      </router-link>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios);
  export default {
    name: "Mai",
    components: {Footer},
    comments: {
      Footer
    },
    data() {
      return {
        LoginUp: '',
        gift: 0,
        user: ''
      }
    },
    mounted() {
      // true 是  登录状态
      // false是  未登录
      Vue.axios.get(`https://elm.cangdu.org/v1/user`).then((res) => {
        console.log(res.data)
        let status = res.data.status;
        if (status === 0) {
          this.user = '登录/注册'
        } else {
          this.gift = res.data.gift_amount
          this.user = res.data.username
          if(this.$store.state.Input  !== ''){
            this.user = this.$store.state.Input
          }else{
            this.user = res.data.username
          }
        }
      })
    },
    methods:{
      rouLink(){
        if(this.user === '登录/注册'){
          this.$router.push({
            path:'/login'
          })
        }else{
          this.$router.push({
            path:'/Account'
          })
        }
      }
    }
  }
</script>

<style scoped>
  .my {
  }

  a {
    color: #000;
  }

  .myone {

    height: 4.3rem;
    box-sizing: border-box;
    width: 100%;
    background-color: #3190e8;
    padding-top: 1rem;
  }

  .myone .left {
    float: left;
    width: 20%;
  }

  .toutu {
    display: inline-block;

    margin-left: 0.5rem;
    width: 2.52rem;
    height: 2.52rem;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    padding: 0.2rem;
  }

  .left .tou {
    display: block;
    color: #CCC;
    font-size: 1.8rem;

  }

  .dz {
    display: inline-block;

  }

  .dz b {
    color: #fff;
  }

  .sjh {
    color: #fff;
    display: block;
  }

  .sjh span {
    margin-left: 0.2rem;
  }

  .myone .center {
    float: left;
    margin-left: 0.5rem;
  }

  .myone .right {
    float: right;

  }

  .right span {
    display: block;

  }

  .container-fluid {
    background-color: #fff;
    padding: 0.6rem 0.2rem;
  }

  .one b {
    font-size: 1.5rem;
    color: orange;
  }

  .two b {
    color: red;
    margin-left: 1rem;
  }

  .ths b {
    color: green;
    margin-left: 1rem;
  }

  .one p {
    display: block;

  }

  .one {
    font-size: 0.8rem;
    line-height: 1.2rem;
    tetx-align: center;
    background-color: #fff;
  }

  .biao {
    margin: 0.7rem 0;
  }

  .biao div {
    background-color: #fff;
    font-size: 0.8rem;
    line-height: 1.8rem;
  }

  .biao div img {
    width: 0.7rem;
    hight: 0.7rem;
    margin: 0 0.5rem;
  }

  .biao div .ee {
    width: 0.5rem;
    height: 0.5rem;
  }

  .jian {
    color: #fff;
    margin: 1rem 0;
    text-align: right;
    margin-right: 0.5rem;
  }

  .head {
    background-color: #3190e8;
  }

  .head div {
    float: left;
    width: 33%;
    color: #fff;
    font-size: 1rem;
    line-height: 2rem;
  }

  .head .left {
    height: 1rem;
  }

  .head .center {
    text-align: center;
    color: #fff;
    font-size: 0.8rem;
  }

  .jiant {
    color: #fff;
    display: block;
    line-height: 1rem;
    margin-top: 0.4rem;
  }

</style>



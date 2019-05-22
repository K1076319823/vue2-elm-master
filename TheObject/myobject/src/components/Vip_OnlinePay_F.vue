<template>
  <div class="OnlinePay">
    <header class="header text-center">
      <span class="pull-left clearfix">
        <router-link :to="{path:'/VipCenter_F'}">
        <img src="../../images/左箭头.png"/>
        </router-link>
      </span>在线支付
    </header>
    <div class="timer text-center">
      <span>支付剩余时间</span>
      <h1>0 : {{minutes}} : {{seconds}}</h1>
    </div>
    <div class="title">
      <h3>选择支付方式</h3>
    </div>

    <div class="radio" style="border-bottom: 1px solid rgba(0,0,0,0.1);vertical-align: middle;">
      <span class="pull-left" >
      <img src="../../images/zhifubao.png" style="width: 2rem;height: 2rem;" />
        支付宝
      </span>
      <span class="pull-right" @click="changeImg"><img :src='pitchBackImage' style="width: 1.5rem;height: 1.5rem;"></span>
    </div>
    <div class="radio" style="border-bottom: 1px solid rgba(0,0,0,0.1);vertical-align: middle;">
      <span class="pull-left" >
      <img src="../../images/weixin.png" style="width: 2rem;height: 2rem;" />
        微信
      </span>
      <span class="pull-right" @click="changeImg"><img :src='notBackImage'  style="width: 1.5rem;height: 1.5rem;"></span>
    </div>
    <div style="width: 100%;" class="text-center">
      <button class="underPay btn btn-success" @click="underPay()">确认支付</button>
    </div>
    <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
  </div>
</template>

<script>

  import Mint from 'mint-ui'
  import Swiper from 'swiper';
  import Com_PromptBox from "./Com_PromptBox";

  export default {
    name: "Vip_OnlinePay_F",
    components: {Com_PromptBox},
    data() {
      return {
        SetTxt: '',
        isHide: true,
        minutes: 15,
        seconds: 0,
        //样式
        pitchBackImage: require('../../images/选中.png'),
        notBackImage:require('../../images/未选中.png'),
        size:'2rem'
      }
    },
    mounted() {
      this.isHide = true;
      this.SetTxt = '暂不开放支付功能';
      this.countDown();
      this.add();
      new Swiper(this.$refs.slider, {
        // pagination: '.swiper-pagination',
      });

    },
    methods: {
      countDown(time) {
        return time < 10 ? "0" + time : "" + time;
      },
      add() {
        let _this = this;
        let timer = window.setInterval(function () {
          if (_this.seconds === 0 && _this.minutes) {
            _this.seconds = 59;
            _this.minutes -= 1;
            // console.log(typeof(_this.minutes));
          } else if (_this.minutes === 0 && _this.seconds === 0) {
            _this.seconds = 0;
            window.clearInterval(timer);
          } else {
            _this.seconds -= 1;
            // console.log(_this.seconds);
          }
          if (_this.seconds == 0 && _this.minutes == 0) {
            _this.isHide = true;
            _this.SetTxt = '支付超时';
          }
        }, 1000);

      },
      underPay() {
        this.SetTxt = '当前环境无法支付, 请打开官方APP进行付款'
        this.isHide = true;
      },
      Show(e) {
        this.isHide = false;
      },
      changeImg(){

      }
    },
  }
</script>

<style scoped>
  .tsbox img {
    margin-top: 1rem;
    width: 3.03rem;
    height: 3.03rem;
  }

  .tsbox p {
    font-size: 0.75rem;
    margin-top: 0.4rem;
  }

  .alert button {
    display: inline-block;
    width: 100%;
    height: 1rem;
    position: relative;

  }

  .alert p {
    font-size: 0.65rem;
  }

  .underPay {
    width: 90%;
    height: 1.74rem;
    font-weight: 600;
    margin: 0.5rem;
    background: #4cd964;
    border: 0;
  }

  .input-radio {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: red;
  }

  .radio {
    width: 100%;
    display: inline-block;
    background: white;
    margin: 0;
    padding: 0.8rem;
    vertical-align: middle
  }

  .title h3 {
    font-size: 0.8rem;
    margin: 0;
  }

  .title {
    width: 100%;
    display: inline-block;
    padding: 0.5rem;
  }

  .timer {
    width: 100%;
    height: 6.32rem;
    background: white;
    padding: 0.5rem;
  }

  .timer span {
    display: inline-block;
    margin-top: 1.5rem;
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

  .header img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .OnlinePay {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
</style>


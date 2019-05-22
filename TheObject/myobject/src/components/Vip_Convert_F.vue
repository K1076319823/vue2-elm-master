<template>
  <div class="Convert">
    <header class="header text-center"><span class="pull-left clearfix">
      <router-link :to="{path:'/VipCenter_F'}">
      <img src="../../images/左箭头.png"/>
      </router-link>
    </span>兑换会员
    </header>
    <div class="ConvertUser">
      <p><span class="overCon">成功兑换后将关联到当前账号:</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><b>{{v}}</b></span>
      </p>
    </div>
    <div class="ConvertInput" v-for="(place , index) in InPlace" :key="index">
      <input type="text" :placeholder='place.in' :maxlength='place.max' @input="ifIn" :v-model='place[2]'>
    </div>
    <div class="btn_box">
      <button class="btn" :style='BackBtn' @click="HideBox">兑换</button>
    </div>
    <div class="footer clearfix">
      <h3>——温馨提示——</h3>
      <div class="footerMD text-left">
        <p class="pull-left">新兑换的会员服务, 权益以『会员说明』为准。</p>
        <p class="pull-left">月卡: 30次减免配送费.</p>
        <p class="pull-left">季卡: 90次减免配送费.</p>
        <p class="pull-left">年卡: 360次减免配送费.</p>
        <p class="pull-left"> * 仅限蜂鸟专送订单, 每日最多减免3单,每单最高减免4元</p>
        <p class="pull-left">(一个月按31天计算)</p>
      </div>
    </div>
    <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
  </div>
</template>

<script>
  import Vue from 'vue'
  import F_Service_Com from "./F_Service_Com";
  import Com_PromptBox from "./Com_PromptBox";
  export default {
    name: "Vip_Convert_F",
    components: {Com_PromptBox, F_Service_Com},
    data() {
      return {
        v:'',
        isHide:false,
        InPlace: [
          {in: '请输入10位卡号',max:10,txtIN:''},
          {in: '请输入6位卡密',max:6,CodeIn:''},
        ],
        BackBtn:{
          background : '#ccc'
        },
        SetTxt:'无效的卡号'
      }
    },
    mounted(){
      console.log(this.InPlace);
      Vue.axios.get(`https://elm.cangdu.org/v1/user`).then((res) => {
        // console.log(res)
        this.v = res.data.username
      })
    },
    methods:{
      ifIn() {
        let one = this.InPlace.txtIN.length;
        let tow = this.InPlace.CodeIn.length;
        // console.log(one)
        // console.log(tow)
        if (one >= 1 && tow == 6) {
          this.BackBtn.background = '#4cd964';
        } else if (one < 1 && tow < 6) {
          this.BackBtn.background = '#ccc';
        }
      },
      HideBox() {
        this.isHide = true;
      },
      Show(e) {
        this.isHide = e;
      }
    }
  }
</script>

<style scoped>
  .footerMD{
    line-height: 0.8rem;
  }
  .footer{
    margin: 0 auto;
    text-align: center;
  }
  .footer h3{
    display: inline-block;
    font-size: 0.6rem;
    color: #aaaaaa;
    margin: 0.7rem 0;
  }

  .footer p {
    width: 100%;
    display: inline-block;
    font-size: 0.5rem;
    color: #aaaaaa;
    padding-left: 2.08rem;
    margin-bottom: 0;
  }
  .btn_box button{
    width: 100%;
    background: #cccccc;
    color: white;
    font-weight: 600;
    font-size: 0.75rem;
    padding: 0.3rem;
    outline: none;
  }
  .btn_box{
    width: 14.61rem;

    margin: 0.7rem auto;
  }
  .overCon{
    color: gray;
  }
  input {
    width: 100%;
    height: 2rem;
    outline: none;
    border: 0;
    padding-left: 0.5rem;
    border-top: 1px solid #f5f5f5;
    font-size: 0.7rem;
  }

  .Convert {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
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

  .ConvertUser {
    padding: 0.5rem;
  }

  .ConvertUser p {
    font-size: 0.63rem;
    margin-bottom: 0;
  }
</style>


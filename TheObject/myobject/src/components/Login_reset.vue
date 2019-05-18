<template>
  <div class="reset">
    <div class="reset_top">
      <!-- 左侧点击按钮 -->
      <p class="goBack">
        <router-link :to="{path:'/Account'}" class="goback"></router-link>
      </p>
      <p class="pSize">重置密码</p>
    </div>
    <form action="" class="login_form">
      <input type="text" placeholder="账号" v-model="User">
      <input type="text" placeholder="旧密码" v-model="Oldps">
      <input type="text" placeholder="请输入新密码" v-model="Newps">
      <input type="text" placeholder="请确认密码" v-model="Okps">
      <div class="codes clearfix">
        <input type="text" placeholder="验证码" class="coder" v-model="Ycode" maxlength="4">
        <div class="codeModule">
          <img :src="nums" alt="抱歉，请刷新页面" class="codertu">
          <span>看不清</span>
          <a href="javascript:;" @click="sendReq">换一张</a>
        </div>
      </div>

      <div class="loginSim" @click="resetps">
        <input type="submit" value="确认修改" title="确认修改" class="lastInt">
      </div>
    </form>
    <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>

  </div>
</template>

<script>

  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import Com_PromptBox from "./Com_PromptBox";

  Vue.use(VueAxios, axios);

  export default {
    name: 'Reset',
    components: {Com_PromptBox},
    data() {
      return {
        nums: '',
        // txtNums: val
        User: '',
        Oldps: '',
        Newps: '',
        Okps: '',
        Ycode: '',
        xmsg: [],
        isHide: false,
        SetTxt: ''
      }
    },
    mounted() {
      Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
        this.nums = res.data.code;
        console.log(this.nums)
      })
    },
    updated() {

    },
    methods: {
      resetps() {
        Vue.axios.post('https://elm.cangdu.org/v2/changepassword', {
          username: this.User,
          oldpassWord: this.Oldps,
          newpassword: this.Newps,
          confirmpassword: this.Okps,
          captcha_code: this.Ycode
        }).then((res) => {
          this.xmsg = res.data
          console.log(this.xmsg);
          if(res.data.message === '用户名参数错误'){
            this.SetTxt = '请输入正确的账号'
          }else if(res.data.message === "必须添加旧密码"){
            this.SetTxt = '请输入旧密码'
          }else if(res.data.message === "必须填写新密码"){
            this.SetTxt = '请输入新密码'
          }else if(res.data.message === "必须填写确认密码"){
            this.SetTxt = '请输入确认密码'
          }else if(res.data.message === "请填写验证码"){
            this.SetTxt = '请输入验证码'
          }else if(res.data.message === "两次密码不一致"){
            this.SetTxt = res.data.message
          }else if(res.data.success === "密码修改成功"){
            this.SetTxt = res.data.success
          }
        })
        this.isHide = true
      },
      Show() {
        this.isHide = false
      },
      sendReq() {
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
          this.nums = res.data.code;
        })
      }
    }
  }

</script>

<style scoped>
  .codeModule img {
    width: 30%;
    height: 6%;
    position: absolute;
    right: 3rem;
    bottom: 15.5rem;
    background-color: white;
  }

  .loginDatas {
    width: 20%;
    height: 100%;
    background-color: #3190e8;
  }

  .reset {
    width: 100%;
    height: 100%;
    background-color: rgb(245, 245, 245);
    overflow: scroll;
    overflow-x: hidden;
  }

  .reset_top {
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
  }

  .pSize {
    margin-right: 1.7rem;
    margin-top: .1rem;
    display: inline-block;
    font-weight: 600;
  }

  .login_form {
    border: .1px solid transparent;
    margin-top: 16%;
    display: block;
    width: 100%;
    height: 46%;
    background-color: rgb(245, 245, 245);
    font-size: .7rem;
  }

  .goback {
    width: 1rem;
    height: 1rem;
    background: url(../../images/login_arrows.png) no-repeat;
    background-position: center center;
    background-size: contain;
    float: left;
  }

  input {
    display: inline-block;
    border: 0;
    border-bottom: 1px solid rgb(240, 240, 240);
    width: 100%;
    height: 16%;
    background-color: white;
    box-sizing: border-box;
    padding: 0.4rem 0.6rem;
    outline: none;
  }

  .lastInt {
    background-color: rgb(76, 217, 100);
    color: white;
    border-radius: 4px;
    width: 94%;
    height: 20%;
    margin-top: 1.4rem;
  }

  .loginSim {
    text-align: center;
  }

  .goBack {
    position: relative;
    top: .5rem;
    left: .2rem;
  }

  .codes {
    width: 100%;
    height: 18.4%;
    background-color: white;
  }

  .coder {
    width: 40%;
    height: 100%;
  }

  img {
    width: 14%;
    height: 100%;
    background-color: lightcoral;
  }

  .codeModule {
    width: 16%;
    height: 98%;
    background-color: white;
    display: inline-block;
    font-size: .6rem;
    float: right;
    box-sizing: border-box;
    padding-top: .2rem;
    line-height: 1rem;
    color: #666;
  }

  a {
    text-decoration: none;
  }
</style>

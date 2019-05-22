<template>
  <!-- 用户信息 -->
  <div class="account">
    <div class="accontHeader clearfix">
      <router-link :to="{path:'/My'}" style="width: .8rem;height: 0.8rem;z-index: 9999;"></router-link>
      <h4>账户信息</h4>
    </div>
    <div class="upload">
      <span>头像</span>
      <input type="file" value="传送" class="filer">
      <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightOnly">
      <img src="../../images/profile.png" alt="请升级浏览器" class="profile">
    </div>
    <div class="username" @click="userName()">
      <span>用户名</span>
      <span style="margin-left: 8rem;color: gray;font-size: 0.7rem;width: 5rem;overflow: hidden">{{user}}</span>
      <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightImgs pull-right">

    </div>
    <div class="site" @click="Location()">
      <span>收货地址</span>
      <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightImgs">
    </div>
    <p class="binding">账号绑定</p>
    <div class="phone" @click="title">
      <img src="../../images/bindphone.png" alt="请升级浏览器" class="myPhone">
      <span>手机</span>
      <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightImgs">
    </div>
    <p class="safety">安全设置</p>
    <div class="loginPas">
      <router-link :to="{path:'/Reset'}" style="width: 100%;height: 100%;display: inline-block">
      <span style="color: black;">登陆密码</span>
      <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightImgs">
      <span class="loginTxt">修改</span>
      </router-link>
    </div>
    <input type="button" value="退出登录" class="logout" @click="EscUser">
    <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
    <Account_LogOutBox v-show='OutBox' @outbox="OutShow($event)"></Account_LogOutBox>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import Com_PromptBox from "./Com_PromptBox";
  import Account_LogOutBox from "./Account_LogOutBox";

  export default {
    name: 'Account',
    components: {Account_LogOutBox, Com_PromptBox},
    data() {
      return {
        user: '',
        isHide: false,
        OutBox:false,
        SetTxt: ''
      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {

        if (this.$store.state.Input !== '') {
          this.user = this.$store.state.Input
        } else {
          this.user = res.data.username
        }
      })
    },
    methods: {
      EscUser() {
        this.OutBox = true
      },
      userName() {
        this.$router.push({
          path: '/Account_UserName'
        })
      },
      Location() {
        this.$router.push({
          path: '/Account_Location'
        })
      },
      title() {
        this.isHide = true,
          this.SetTxt = '请在手机APP中设置'
      },
      Show(e){
        this.isHide = false
      },
      OutShow(e){
        this.OutBox = false
      }
    }
  }
</script>

<style scoped>
  .myPhone {
    position: relative;
    bottom: .1rem;
  }

  .profile {
    width: 2rem;
    height: 2rem;
    float: right;
    position: relative;
    top: .54rem;
    right: .8rem;
  }

  input.filer {
    opacity: 0;
    position: absolute;
    width: 30%;
    height: 12%;
    left: 11rem;
    top: 2.4rem;
    float: right;
    outline: none;
    z-index: 1;
  }

  .rightOnly {
    position: relative;
    top: 1.2rem;
  }

  .rightImgs {
    position: relative;
    top: .56rem;
  }

  .rightArr {
    width: .8rem;
    height: .8rem;
    float: right;
  }

  .loginTxt {
    font-size: .75rem;
    float: right;
    color: rgb(189, 189, 189);
    position: relative;
  }

  .upload {
    width: 100%;
    height: 16%;
    background-color: white;
    margin-top: 2.4rem;
    border-bottom: 1px solid rgb(230, 230, 230);
    line-height: 3.4rem;
    box-sizing: border-box;
    padding-left: .8rem;
    padding-right: .4rem;
  }

  .username {
    width: 100%;
    height: 10%;
    background-color: white;
    border-bottom: 1px solid rgb(230, 230, 230);
    line-height: 2rem;
    box-sizing: border-box;
    padding-left: .8rem;
    padding-right: .4rem;
  }

  .site {
    width: 100%;
    height: 10%;
    background-color: white;
    border-bottom: 1px solid rgb(230, 230, 230);
    line-height: 2rem;
    box-sizing: border-box;
    padding-left: .8rem;
    padding-right: .4rem;
  }

  .binding {
    width: 100%;
    height: 8%;
    background: rgb(242, 242, 242);
    border-bottom: 1px solid rgb(230, 230, 230);
    display: inline-block;
    line-height: 1.6rem;
    box-sizing: border-box;
    padding-left: .8rem;
    font-size: .4rem;
    color: rgb(59, 59, 59);
  }

  .phone {
    width: 100%;
    height: 10%;
    background-color: white;
    border-bottom: 1px solid rgb(230, 230, 230);
    line-height: 2rem;
    box-sizing: border-box;
    padding-left: .8rem;
    padding-right: .4rem;
  }

  .safety {
    width: 100%;
    height: 8%;
    background: rgb(242, 242, 242);
    border-bottom: 1px solid rgb(230, 230, 230);
    display: inline-block;
    line-height: 1.6rem;
    box-sizing: border-box;
    padding-left: .8rem;
    padding-right: .4rem;
    font-size: .4rem;
    color: rgb(59, 59, 59);
  }

  .loginPas {
    width: 100%;
    height: 10%;
    background-color: white;
    border-bottom: 1px solid rgb(230, 230, 230);
    line-height: 2rem;
    box-sizing: border-box;
    padding-left: .8rem;
    padding-right: .4rem;
  }

  :root {
    background-color: lightgray;
  }

  .logout {
    outline: none;
    border: 0;
    width: 96%;
    height: 7.6%;
    background-color: rgb(231, 92, 77);
    position: absolute;
    bottom: 0;
    left: 2%;
    color: white;
    border-radius: 4px;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .account {
    width: 100%;
    height: 69%;
    background-color: rgb(242, 242, 242);
    /* 样式注册完毕，删除伪代码 */
    border: .1px solid transparent;
    position: relative;
  }

  .accontHeader {
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

  h4 {
    line-height: 1.3rem;
    font-size: .8rem;
    font-weight: 700;
    position: relative;
    right: .6rem;
  }

  .accontHeader a {
    width: 1rem;
    height: 1rem;
    background-color: #3190e8;
    display: inline-block;
    float: left;
    position: relative;
    left: .4rem;
    top: .5rem;
    background: url("../../images/login_arrows.png") no-repeat;
    background-position: center center;
    background-size: cover;
  }
</style>

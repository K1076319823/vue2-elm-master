<template>
  <!-- 退出登录提示框 -->
  <div>
    <div class="tsbox mint-msgbox-btn text-center animated bounceIn">
      <img src="../../images/警告.png"/>
      <p class="mint-cell mint" style="font-size: 1.5rem;margin: 1.2rem 0 1.5rem">是否退出登录</p>
      <div>
        <button class="wait btn btn-default" @click="wait">再等等</button>
        <button class="under btn btn-default" @click="under">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import Mint from 'mint-ui'

  export default {
    name: "Account_LogOutBox",
    data(){
      return{
        isHide:'',
      }
    },
    props:{
      childCom:{
        type:String,
        default:""
      }
    },
    methods: {
      wait(){
        this.$emit("outbox",this.isHide);
      },
      under() {
        Vue.axios.get('https://elm.cangdu.org/v2/signout').then((res) => {
          this.$router.push({
            path:'/My'
          })
        })
      }
    }
  }
</script>

<style scoped>
  button {
    border: 0;
    outline: none;
  }

  .under {
    background: #dd6b55;
    color: white;
    width: 4.57rem;
    padding: 0.45rem
  }

  .wait {
    margin-right: 0.5rem;
    background: #c1c1c1;
    color: white;
    width: 3.92rem;
    padding: 0.45rem;
  }

  .tsbox img {
    margin-top: 1rem;
    width: 4.23rem;
    height: 4.23rem;
  }

  .tsbox p {
    font-size: 0.75rem;
    margin-top: 0.4rem;
  }

  .tsbox {
    width: 15.05rem;
    height: 12.71rem;
    border-radius: 0.2rem;
    position: absolute;
    top: 8rem;
    left: 0.47rem;
  }

</style>

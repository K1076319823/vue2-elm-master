<template>
  <div class="Box" style="background:#f0f0f0;width: 100%; height: 100%;">
    <header class="header text-center"
            style="width: 100%;height: 2rem;background-color: rgb(49, 144, 232);line-height: 2rem;font-size: 0.8rem;font-weight: 600;color: white;">
        <span class="pull-left clearfix">
           <router-link :to="{path:'/My_HongBao'}">
             <img src="../../images/左箭头.png" style="width: 0.8rem;height: 0.8rem;"/>
          </router-link>

        </span>兑换红包
    </header>
    <div class="text-center" style="margin-top: 0.8rem; padding: 0 0.4rem;">
      <input type="text"
             style="border: 0;width: 100%;height: 2.12rem;padding-left: 0.4rem;font-size: 0.7rem;border-radius: 0.2rem"
             placeholder="请输入兑换码" v-model="txtIN" @input="ifIn">
      <div style="margin-top: 0.8rem" class="clearfix">
        <input type="text" maxlength="4" placeholder="验证码"
               style="border: 0;width: 8.81rem;height: 2.2rem;padding-left: 0.4rem;font-size: 0.7rem;border-radius: 0.2rem"
               class="pull-left" v-model="CodeIn" @input="ifIn">
        <div class="pull-right clearfix"
             style="width: 5.9rem;height: 2.2rem;background:white;padding: 0.4rem;border-radius: 0.2rem">
          <img :src="Code" alt="" class="pull-left" style="width:3rem;height: 1.5rem;margin-right: 0.3rem">
          <a class="AuthCode" style="display: inline-block;" @click="ChangeCode()">
            <span style="color: gray;">看不清</span>
            <p class="btn-link">换一张</p>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center" style="margin-top: 1rem">
      <button :class="{btn:true}" :style="BackBtn"
              style="width: 14.62rem;height: 1.8rem;color: white;font-size: 0.7rem;" @click="under()">兑换
      </button>
    </div>
    <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Com_PromptBox from "./Com_PromptBox";

  export default {
    name: "My_ConvertHB",
    components: {Com_PromptBox},
    data() {
      return {
        isHide: false,
        Code: '',
        txtIN: '',
        CodeIn: '',
        SetTxt: '无效的验证码',
        BackBtn: {
          background: '#ccc'
        },
      }
    },
    methods: {
      ChangeCode() {
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
          this.Code = res.data.code;
        })
      },
      ifIn() {
        let one = this.txtIN.length;
        let tow = this.CodeIn.length
        if (one >= 1 && tow == 4) {
          this.BackBtn.background = '#4cd964';
        } else if (one < 1 && tow < 4) {
          this.BackBtn.background = '#ccc';
        }
      },
      under() {
        this.isHide = true;
      },
      HideBox() {
        this.isHide = true;
      },
      Show(e) {
        this.isHide = e;
      }
    },
    mounted() {
      Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
        this.Code = res.data.code;
        console.log(this.Code);
      }).catch((error) => {
        console.log(error);
      });
      this.ChangeCode();
    },
  }
</script>

<style scoped>
  .AuthCode {
    font-size: 0.53rem;
  }
</style>

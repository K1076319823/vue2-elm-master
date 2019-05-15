<template>
  <div class="DownLoad">
    <header class="header text-center">
      <span class="pull-left clearfix">
        <router-link :to="{path:'/My'}"><img src="../../images/左箭头.png" style="width: 0.8rem;"/></router-link>
      </span>下载
    </header>
    <div class="text-center btn-block">
      <img src="../../images/elmlogo.jpeg" class="img-rounded"/>
      <p>下载饿了么APP</p>
      <button class="btn" style="width:14.61rem;height: 1.7rem;background:#4cd964;color: white;" @click="HideBox">下载
      </button>
    </div>
    <!-- SetTxt 写在data里  -->
    <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
  </div>
</template>

<script>

  import Com_PromptBox from "./Com_PromptBox";

  export default {
    name: "Down_Loading",
    components: {Com_PromptBox},
    data() {
      return {
        isHide: false,
        SetTxt: 'IOS用户请前往AppStore下载'
      }
    },
    methods: {
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
  .header {
    width: 100%;
    height: 2rem;
    background-color: rgb(49, 144, 232);
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1rem;
  }

  .img-rounded {
    border-radius: 1rem;
    height: 7.68rem;
    width: 7.68rem;
  }

  p {
    margin: 0.3rem 0;
    font-size: 0.8rem;
  }

  .Down {
    width: 14rem;
    height: 1.7rem;
    line-height: 1.7rem;
    background: #4cd964;
    display: inline-block;
    border-radius: 0.2rem;
    color: white;
    font-size: 0.7rem;
    margin-top: 0.5rem;
  }
</style>

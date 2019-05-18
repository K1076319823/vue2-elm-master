<template>
  <div class="">
    <div class="tsbox mint-msgbox-btn text-center bounceIn">
      <img src="../../images/警告.png"/>
      <p class="mint-cell mint">{{childCom}}</p>
      <button class="underbtn mint-button--default mint-button" @click="SendHide($event)">{{under}}</button>
    </div>
  </div>
</template>

<script>
  import Mint from 'mint-ui'

  export default {
    name: "Com_PromptBox",
    data() {
      return {
        isHide:'',
        under: '确定',
      }
    },
    props:{
      childCom:{
        type:String,
        default:""
      }
    },
    methods: {
      SendHide(e){
        this.$emit("childEvent",this.isHide);
      }
    }
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

  .tsbox {
    width: 12rem;
    height: 8.75rem;
    border-radius: 0.2rem;
    position: absolute;
    top: 8rem;
    left: 2rem;
  }

  .underbtn {
    width: 100%;
    background-color: #4cd964;
    color: white;

  }
</style>

<template>
  <div class="Integral">
    <header class="header text-center"><span class="pull-left clearfix"><router-link :to="{path:'/My'}"><img src="../../images/左箭头.png" style="width: 0.8rem;"/></router-link></span>我的积分
    </header>
    <div class="InteMD">
      <div class="InteBox">
        <div class="InteTxt_one clearfix">
          <span class="pull-left">当前积分</span>
          <span class="pull-right">
            <img src="../../images/description.png"/>
            <router-link :to="{path:'/jifenspaeak'}">积分说明</router-link>
          </span>
        </div>
        <p class="InteTxt_tow">
          <span>{{nuMber}}</span>
          <span>分</span>
        </p>
        <button class="btn" @click="HideBox()">积分兑换商品</button>
      </div>
    </div>
    <div class="footer_MD clearfix">
      <span class="pull-left">最近30天积分记录</span>
    </div>
    <section class="footer text-center">
      <img src="../../images/no-log.png"/>
      <p>最近30天无积分记录</p>
      <p>快去下单赚大量积分吧</p>
    </section>
   <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
  </div>
</template>

<script>
  import Com_PromptBox from "./Com_PromptBox";
  export default {
    name: "My_Integral_F",
    components: {Com_PromptBox},
    data(){
      return {
        nuMber:9999999999,
        isHide:false,
        SetTxt:'快去下单赚取大量积分吧'
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
  .tsbox img{
    margin-top: 1rem;
    width: 3.03rem;
    height: 3.03rem;
  }
  .tsbox p {
    font-size: 0.75rem;
    margin-top: 0.4rem;
  }
  .tsbox{
    width: 12rem;
    height: 8.75rem;
    border-radius: 0.2rem;
    position: absolute;
    top: 8rem;
    left: 2rem;
  }
  .underbtn{
    background: #4cd964;
  }
  .footer p:nth-child(3){
    font-size: 0.5rem;
    color: #aaaaaa;
  }
  .footer p:nth-child(2){
    font-size: 0.7rem;
    margin-top: 0.8rem;
  }
  .footer img{
    width: 8rem;
    height: 5rem;
  }
  .footer_MD{
    width: 100%;
    padding: 0.5rem;
    color: #aaaaaa;
  }
  button{
    width: 100%;
    height: 2rem;
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    background: #fe6d47;
    outline:none ;
  }
  .InteTxt_tow span:nth-child(1){
    font-size: 2rem;
  }
  .InteTxt_one img {
    width: 0.6rem;
    height: 0.6rem;
  }

  .InteTxt_one {
    font-size: 0.55rem;
  }

  .InteBox {
    width: 100%;
    height: 100%;
    background: white;
    border: 0.3rem solid rgb(49, 144, 232);
    padding: 0.4rem;
  }

  .InteMD {
    width: 100%;
    height: 7.3rem;

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
  .Integral{
    background: #f0f0f0;
    width: 100%;
    height: 100%;
  }
</style>

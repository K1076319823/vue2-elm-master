<template>
    <div class="Recommend" style="background:#f0f0f0;height: 100%;">
      <header class="header text-center"
              style="width: 100%;height: 2rem;background-color: rgb(49, 144, 232);line-height: 2rem;font-size: 0.8rem;font-weight: 600;color: white;">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/My_HongBao'}">
          <img src="../../images/左箭头.png" style="width: 0.8rem;height: 0.8rem;"/>
          </router-link>
        </span>推荐有奖
      </header>
      <div style="width: 16rem; height: 10rem;">
        <img src="../../images/activity.png" style="width: 100%; height: 100%;"/>
      </div>
      <div class="invite text-center" style="padding: 1rem 0;background:white;">
        <span  @click="HideBox()">
        <p><img src="../../images/weixin.png" style="width:2.5rem;"/></p>
        邀请微信好友</span>
        <span  @click="HideBox()">
        <p><img src="../../images/qq.png" style="width:2.5rem;"/></p>
        邀请微信好友</span>
        <span  @click="HideBox()">
        <p><img src="../../images/fenxiang.png" style="width:2.5rem;"/></p>
        面对面邀请</span>
      </div>
      <section class="text-center SecFont" style="display: flex;margin: 1rem;">
        <div style="display: inline-block;width: 7.98rem;">
          <span>累计收益</span>
          <p style="margin-bottom: 0"><b>0</b><span>元</span></p>
        </div>
        <div style="display: inline-block;width: 7.98rem;border-left: 0.1px solid gray">
          <span>累计收益</span>
          <p style="margin-bottom: 0"><b>0</b><span>元</span></p>
        </div>
      </section>
      <footer class="text-center" style="margin-top:1rem ">
        <span style="color: #4d4d4d;font-size: 0.5rem;">-收益明细-</span>
        <div style="margin-top: 1rem">
          <img src="../../images/qianbao.png" alt="" style="width: 1.3rem;">
        <div style="font-size: 0.5rem;margin-top: 0.5rem;color: #aaa;">还不赶紧去邀请好友</div>
        </div>
      </footer>
      <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
    </div>
</template>

<script>
    import Com_PromptBox from "./Com_PromptBox";
    export default {
        name: "My_Recommend_F",
      components: {Com_PromptBox},
      data(){
          return {
            isHide:false,
            SetTxt:'请在饿了么APP中打开',
          }
      },
      methods:{
        HideBox(){
          this.isHide = true;
        },
        Show(e){
          this.isHide = e;
        }
      }
    }
</script>

<style scoped>
  .invite span:nth-child(2){
    padding: 0 2rem;
  }
  .invite span{
    display: inline-block;
    font-size: 0.5rem;
  }
  b{
    color: red;
    font-size: 0.8rem;
  }
  .SecFont span{
    font-size: 0.55rem;
  }
</style>

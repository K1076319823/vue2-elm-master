<template>
    <div class="DaiJinQuan">
      <div class=" clearfix">
        <span style="font-size: 0.5rem; padding: 0.5rem 0.6rem;;display: inline-block" class="pull-right">
          <img src="../../images/description.png" alt="" class="des">
          <router-link :to="{path:'/daimoneyspaek'}">商家代金券说明</router-link>
        </span>
      </div>

      <div class="text-center" style="margin-top: 4rem">
        <img src="../../images/voucher.png" class="voucher"/>
        <div style="margin-top: 1rem">
        <p style="font-size: 0.7rem;">无法使用代金券</p>
        <p style="font-size: 0.5rem;color: #aaa;">非客户端或客户端版本过低</p>
        <p>
          <router-link :to="{path:'/Down_Loading'}" class="btn" style="background:#56d176;color: white;">下载或升级客户端</router-link>
        </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "My_DaiJinQuan"
    }
</script>

<style scoped>
  .des{
    width: 0.6rem;
  }
  .DaiJinQuan{
    width: 100%;
  }
  .voucher{
    width: 6rem;
    height: 3.4rem;
  }
</style>


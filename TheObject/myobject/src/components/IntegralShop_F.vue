<template>
    <div class="Integral">
      <div class="Position text-center">
        <div class="again">请重新进入</div>
        <p>请返回后重新进入积分商城~</p>
          <img src="//yun.duiba.com.cn/webapp/img/retrylogin.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "IntegralShop_F"
    }
</script>

<style scoped>
  html ,body{

  }
  .Integral{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    position: relative;
  }
  img {
    width: 7.51rem;
    height: 7.51rem;
  }
  .again{
    font-size: 1rem;
    font-weight: 600;
    color: #0d7fd5;
  }
  p{
    font-size: 0.58rem;
    margin: 0.6rem;
  }
  .Position{
    position: absolute;
    top: 8rem;
    left: 0;
    right: 0;
  }
</style>

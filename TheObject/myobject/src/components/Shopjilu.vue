<template>
    <div class="shopjilu">
      <div class="head clearfix">
        <div class="left">
          <router-link :to="{path:'/VipCenter_F'}">
            <span class="glyphicon glyphicon-chevron-left jiant"></span>
          </router-link>
        </div>
        <div class="center">
          购买记录
        </div>
      </div>
      <div class="fan">
        <img src="../../images/no-log.png" height="170" width="300"/></div>
    </div>
</template>

<script>
    export default {
        name: "Shopjilu"
    }
</script>

<style scoped>
  .head div{
    float:left;
    width:33%;
    color:#fff;
    font-size:1rem;
    line-height: 2rem;
  }
  .head .left{
    height:1rem;
  }
  .head .center{
    text-align: center;
    color:#fff;
    font-size:0.8rem;
  }
  .jfspack{
    background-color: #fff;
  }
  .head{
    background-color: #3190e8;
  }
  .fan {
    padding:2rem;
  }
</style>

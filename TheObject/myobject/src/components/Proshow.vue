<template>
    <div class="Proshow">
      <div class="head clearfix">
        <div>
          <router-link :to="{path:'/index'}">
            <span class="glyphicon glyphicon-chevron-left jian"></span>
          </router-link>
        </div>
        <div class="center">
          name
        </div>
      </div>
      <div class="photo">
        <img data-v-a51691c2="" src="//elm.cangdu.org/img/16772d91c1823153.jpg" class="food_img">
      </div>
      <div class="ping">
        <p>123</p>
        <p>1231</p>
        <p>评分: <span class="org">X</span></p>
        <p>月售:<span>1000单</span   > <span class="org">售价￥20元起</span></p>
        <p>评论数: <span>995</span>  好评率: <span class="org">14%</span> </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Proshow"
    }
</script>

<style scoped>
  .head{
    background-color: #3190e8;
    height:1.9rem;
    position: fixed;
    left:0;
    top:0;
    width:100%;
  }
  .head div{
    float:left;
    width:33%;
    color:#fff;
    font-size:1rem;
    line-height: 2rem;
  }
  .head .center{
    text-align: center;
    color:#fff;
    font-size:0.8rem;
  }
  .jian{
    color: white;
  }
  .photo{
    margin-top:1.9rem ;
    width:100%;
  }
  .photo img{
    width:100%;
  }
  .ping{
    background-color: #fff;
  }
  .org{
    color: orange;
  }

</style>

<template>
    <div class="Proshow">
      <div class="head clearfix">
        <div>
          <router-link :to="{path:'/CAndESocket'}">
            <span class="glyphicon glyphicon-chevron-left jian"></span>
          </router-link>
        </div>
        <div class="center">
          {{this.$route.query.prosname}}
        </div>
      </div>
      <div class="photo">
        <img data-v-a51691c2="" :src="'//elm.cangdu.org/img/'+this.$route.query.prosimg" class="food_img">
      </div>
      <div class="ping">
        <h2> {{this.$route.query.prosname}}</h2>
        <p>{{this.$route.query.prosM}}</p>
        <p>评分: <span class="org">{{this.$store.state.prosfen}}</span></p>
        <p>月售:<span>{{this.$route.query.prosS}}单</span   > <span class="org1">售价￥
          <span class="red">{{this.$route.query.prosprice}}</span>元起</span></p>
        <p>评论数: <span>{{this.$store.state.zan}}</span>  <span class="org1"> 好评率: <span class="red">{{this.$route.query.prosGd}}</span>%</span> </p>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
    export default {
        name: "Proshow"
    }
</script>

<style scoped>
  .Proshow{
    background-color: #fff;
    width:100%;
    height:100%;
  }
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
    padding:0.5rem;
  }
  .org{
    color: orange;
  }
  .org1{
    width:60%;
    text-align:right;
    margin-left:3rem;

  }
  .red{
    color:orange;
    padding:0.2rem;
    font-size:0.6rem;
  }

</style>

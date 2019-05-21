<template>
    <div class="DJhead">
          <router-link :to="{path:'/index'}">
            <span class="glyphicon glyphicon-chevron-left jiant"></span>
          </router-link>
      <div class="toubu">
        <img :src="'//elm.cangdu.org/img/'+ DJ.image_path"  alt="">
      </div>
      <div class="tuwen">
        <div class="clearfix" >
        <div class="left">
          <img :src="'//elm.cangdu.org/img/'+ DJ.image_path"  alt="">
        </div>
        <div class="right">
          <h4>{{DJ.name}}</h4>
          <p class="song">商家专送/分钟送达/{{DJ.piecewise_agent_fee.tips}}</p>
          <p >公告:{{DJ.promotion_info}}</p>
        </div>
        </div>
        <div class="clearfix">
          <div class="erleft">
          <span class="jian">减</span>
          <span class="man">{{DJ.activities[0].description}}</span>
          </div>
          <div class="ms">
            {{num}}个活动
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import Vue from 'vue';

    export default {
        name: "DJhead",
      data() {
        return {
         DJ:[],
          num:0
          }
      },
      mounted() {
        setTimeout(()=>{
          let id = this.$store.state.shopid;
          Vue.axios.get(`https://elm.cangdu.org/shopping/restaurant/${id}`).then((res) => {
            // 遍历商品的信息展示在界面上
            this.DJ = res.data;
            this.num =res.data.activities.length;
            // console.log(res.data.activities.length);
          })
        },500)
      },

    }
</script>

<style scoped>
  .jiant{
    color:#fff;
    position: fixed;
    font-size:1rem;
    top:0.3rem;
    z-index:2;
    left:0;
  }
  .toubu{
    width:100%;
    height:5.5rem;
  }
  .toubu img{
    width:100%;
    height:5.5rem;
    overflow: hidden;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }
  .tuwen {
    width:100%;
    padding:0.5rem;
    position: fixed;
    top:0;
    left:0;
    color:#fff;
  }
  .tuwen .left{
    float:left;
    width:20%;
  }
  .left img{
    width:100%;
    margin-top:0.5rem;
  }
  .tuwen .right{
    float:left;
    margin-left:0.5rem;
  }
  h4{
    font-size:0.8rem;
  }
  .right p{
    font-size:0.5rem;
  }
  .jian{
    background:red;
    font-size:0.5rem;
      color:#fff;
    padding:0.1rem;
  }
  .man{
    font-size:0.5rem;
    color:#fff;
  }
  .erleft{
    float:left;
  }
  .ms{
    float:right;
    margin-right:0.5rem;
  }



</style>

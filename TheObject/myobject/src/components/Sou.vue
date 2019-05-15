<template>
  <div>
    <div class="head clearfix">
      <div>
        <router-link :to="{path:'/index'}">
          <span class="glyphicon glyphicon-chevron-left jian"></span>
        </router-link>
      </div>
      <div class="center">
          搜索
      </div>
    </div>
    <form action="#">
      <label for="input"></label>
      <div class="onehang clearfix">
        <input type="text" name="input" id="input" class="input-lg" placeholder="请输入商家或美食名称" v-model="Input">
        <div class="btn btn-primary" @click="F_btn">提交</div>
      </div>
    </form>
    <p class="li" v-show='flag==true'>
      历史信息
    </p>
    <p class="li" v-show='flag==false'>
      商家
    </p>
    <!--{{sangjia}}-->
    <!--<h3 v-show='fe==false'>暂无搜索</h3>-->
    <div v-for="(sxin,index) in sangjia" :key="index">
      <div class="yidan clearfix">
        <div class="left">
          <img class="souimg" :src="'//elm.cangdu.org/img/'+ sxin.image_path" alt="">
        </div>
       <div class="right">
         <p>{{sxin.name}}</p>
         月销{{sxin.rating_count}}单 <br>
         20元起送/
         距离:{{sxin. distance}}
       </div>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
  import Footer from "./Footer";
  import Vue from "vue"
  import Swiper from 'swiper'

  export default {
    name: "Sou",
    data() {
      return {
        Input: '',
        sangjia:'',
        flag:true,
        fe:false
      }
    },
    components: { Footer},
    mounted() {
      new Swiper (this.$refs.slider, {
        // pagination: '.swiper-pagination',
      })
    },
    methods:{
      F_btn() {
        this.flag = !this.flag
        let jin=this.$store.state.latitude
        let wei=this.$store.state.longitude
        console.log(jin,wei)
        let sou = `https://elm.cangdu.org/v4/restaurants?geohash=${jin},${wei}&keyword=${this.Input}`
        console.log(this.Input);
        Vue.axios.get(sou).then((res) => {
          console.log(res.data);
          this.sangjia=res.data;
        }).catch((error) => {
          console.log('请求错误', error);
          this.fe = !this.fe
        })
      }
    }
  }
</script>

<style scoped>
  .head{
    background-color: #3190e8;
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
  form{
    background-color: #fff;
  }


  #input {
    width: 12rem;
    height: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    background: rgb(245, 245, 245);
    font-size: 0.6rem;
    font-weight: 600;
    float:left;
  }

  .btn {
    width: 2.7rem;
    font-weight: 600;
    float:right;
  }
  .jian{
    color:#fff;
  }
  .onehang{
    margin:0 auto;
    width:94%;
    padding:0 0 3% 0;
    margion-top:0;
  }
  .souimg{
    width:2rem;
  }
  .yidan{
    background-color: #fff;
    padding:0.3rem;
    border-bottom:1px #ccc solid;
  }
   .left, .right{
    float:left;
  }
  .right{
    padding: 0 0.5rem;

  }
  .li{
    padding:0.2rem 0.5rem;
  }
</style>

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
    <div class="tijiao">
    <form action="#">
      <label for="input"></label>
      <div class="onehang clearfix">
        <span class="xiankuang"  v-show='flag==false' >{{zixian}}</span>
        <input type="text" name="input" id="input" class="input-lg" placeholder="请输入商家或美食名称" v-model="Input">
        <span class="literr"  @click="deinput" >X</span>
        <div class="btn btn-primary" @click="F_btn">提交</div>
      </div>
    </form>
    </div>
<div class="dataxi">
      <div v-show='ftiao==true'>
      <p class="li" >
        删除历史
      </p>
      <div v-for="(item,index) in perhistory" :key="index" class="tiao " >
        <div class="onedata clearfix">
          <div class="nshao" @click="add(item.Input)" >{{item.Input}} </div> <div @click="deletePer(index)" class="err">X</div>
        </div>
      </div>
      <div class="jilu" @click="clearall">清除历史记录</div>
    </div>
    <div v-show='flag==false'>
    <p class="li" >
      商家
    </p>
    <!--<h3 v-show='fe==false' class="niming">暂无搜素记录</h3>-->
    <div v-for="(sxin,index) in sangjia" :key="index">
      <div class="yidan clearfix"  @click="Scity(sxin.id)">
        <router-link :to="{path:'/CAndESocket'}">
        <div class="left">
          <img class="souimg" :src="'//elm.cangdu.org/img/'+ sxin.image_path" alt="">
        </div>
       <div class="right">
         <p>{{sxin.name}}</p>
         月销{{sxin.rating_count}}单 <br>
         20元起送/
         距离:{{sxin. distance}}
       </div>
        </router-link>
      </div>
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
        ftiao:false,
        perhistory:[],
        zixian:'',
        // fe:false
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
        this.ftiao=false;
        this.fe=false;
        // this.flag = !this.flag;
        this.flag = false;
        this.zixian=this.Input;
        console.log(this.zixian);
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
          // this.fe = true
        })
        let per ={
          Input:this.Input,
        };
        this.perhistory.push(per);
        this.Input = "";

      },
      deletePer(i){
        this.perhistory.splice(i,1);
      },
      add(nei){
        this.Input = nei;
        this.perhistory.splice(0,1);
     },
      clearall(){
       this.ftiao=false;
        this.perhistory.splice(0,this.perhistory.length);
      },
      deinput(){
       this.Input="";
       this.ftiao=true;
        this.flag = !this.flag;
      },
        Scity(id){
          console.log(id);
          this.$store.state.shopid=id;
        }
    }
  }
</script>

<style scoped>
  .tijiao{
    position: fixed;
    width:100%;
    background-color: #fff;
  top:2.2rem;
    left:0;
  }
  .dataxi{
   margin-top: 6rem;
  }
  .onehang{
    position: relative;
  }
  .literr{
    position: absolute;
    left:11rem;
    top:0.3rem;
    font-size:0.7rem;
  }
  .tiao {
    background-color: #fff;

  }
  .jilu{
    background-color: #fff;
    color:dodgerblue;
    text-align: center;
    line-height: 1.2rem;
    font-size:0.7rem;
  }
  .onedata{
    padding:0.3rem;
    font-size:0.6rem;
  }
  .nshao{
    float:left;
  }
  .err{
    float:right;
  }
  .head{
    position: fixed;
    width:100%;
    top:0;
    left:0;
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
    height: 1.5rem;
    font-weight: 600;
    float:right;
    text-align:center;
    /*line-height: 1.5rem;*/
    font-size:0.7rem;
  }

  .jian{
    color:#fff;
  }
  .niming{
    background-color: #fff;
    text-align: center;
    padding:2rem;
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
    font-size:0.6rem;
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
    font-size:0.7rem;
  }
  .xiankuang{
    position: absolute;
    left:0rem;
    top:0rem;
    text-align: left;
    height: 1.3rem;
    padding:0.2rem;
    font-size:0.6rem;
    width:10rem;
    line-height: 1.3rem;
    font-weight: bold;
    background-color:  rgb(245, 245, 245);
  }
</style>

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
        <button class="btn btn-primary" @click="F_btn(t)">提交</button>
      </div>
    </form>
    <Footer></Footer>
  </div>

</template>

<script>
  import Footer from "./Footer";
  import Vue from "vue"

  export default {
    name: "Sou",
    data() {
      return {
        Input: '',
      }
    },
    components: { Footer},
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/shopping/restaurants').then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log('请求错误', error);
      })
    },
    methods:{
      F_btn(t) {
        
      }
    }
  }
</script>

<style scoped>
  .head{
    background-color: blue;
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
</style>

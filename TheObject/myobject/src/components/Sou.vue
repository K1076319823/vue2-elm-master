<template>
  <div class="Sou text-center">
    <Header></Header>
    <form action="#">
      <label for="input"></label>
      <div>
        <input type="text" name="input" id="input" class="input-lg" placeholder="请输入商家或美食名称" v-model="Input">
        <button class="btn btn-primary" @click="F_btn(t)">提交</button>
      </div>
    </form>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "./Footer";
  import Header from "./Header";
  import Vue from "vue"

  export default {
    name: "Sou",
    data() {
      return {
        Input: '',
      }
    },
    components: {Header, Footer},
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
  .Sou {
    width: 100%;
    height: 100%;
    background: rgb(245, 245, 245);
    margin-top: 1.9rem;
  }

  #input {
    width: 12rem;
    height: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    background: rgb(245, 245, 245);
    font-size: 0.6rem;
    font-weight: 600;
  }

  .btn {
    width: 2.7rem;
    font-weight: 600;
  }
</style>

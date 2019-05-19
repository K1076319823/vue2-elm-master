<template>
  <div class="Ding">
    <div class="head clearfix">
      <div>
        <router-link :to="{path:'/index'}">
          <span class="glyphicon glyphicon-chevron-left jian"></span>
        </router-link>
      </div>
      <div class="center">
        订单列表
      </div>
    </div>
    <div class="twohang">
      <div class="yidan clearfix" v-for="(Arr , index) in dataArr" :key="index">
        <div class="left">
          <img data-v-b204fb80="" :src="'//elm.cangdu.org/img/' + Arr.restaurant_image_url" alt=""
               style="width: 2rem;height: 2rem;margin-right: 0.6rem">
        </div>
        <div class="pull-right one" @click="btnLink">
          <div class="clearfix" style="width: 100%;">
            <h4 class="name">{{Arr.restaurant_name}}</h4>
            <span class="copy text-right">等待支付</span>
          </div>
          <div class="clearfix" style="border-bottom: 1px solid rgba(0,0,0,0.05)">
            <span class="danhao">{{Arr.formatted_created_at}}</span>
          </div>
        </div>
        <div class="pull-right" style="width: 12rem;border-bottom: 1px solid rgba(0,0,0,0.05);padding: 0.6rem 0;">
          <span class="pull-left">2121 等{{2}}件商品</span><span class="pull-right">$20</span>
        </div>
        <div class="pull-right" style="width: 12rem;">
        <button class="pull-right btn btn-default" style="margin-top: 0.4rem;padding: 0.1rem;font-size: 0.5rem;outline: none;color: deepskyblue;">再来一单</button>
      </div>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Header from "./Header";
  import Footer from "./Footer";

  export default {
    name: "Ding",
    components: {Footer, Header},
    data() {
      return {
        dataArr: ''
      }
    },
    methods: {
      btnLink(){
        this.$router.push({
          path:'/Dinglist'
        })
      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
        let user_id = res.data.user_id
        Vue.axios.get(`https://elm.cangdu.org/bos/v2/users/${user_id}/orders?limit=1&offset=0`).then((respons) => {
          console.log(respons)
          this.dataArr = respons.data;
        })
      })
    },
    watch: {
      second: {
        handler(newVal) {
          this.num(newVal)

        }
      },
      minute: {
        handler(newVal) {
          this.num(newVal)
        }
      }
    }
  }

</script>

<style scoped>
  .one {
    width: 12rem;
  }

  .yidan {
    padding: 0.5rem;
    background-color: #fff;
    border-bottom: 1px #ccc solid;
  }

  .yidan .left {
    float: left;
  }

  .left img {
    width: 100%;
  }

  h4 {
    float: left;
    font-size: 0.8rem;
  }

  .copy {
    float: right;
    font-size: 0.6rem;
  }

  .danhao {
    float: left;
    font-size: 0.6rem;
    color: #ccc;
    margin: 0.2rem 0;
  }

  .name {
    font-size: 0.8rem;
    margin: 0;
  }

  .head {
    background-color: #3190e8;
    height: 1.9rem;
  }

  a {
    color: #fff;
  }

  .head div {
    float: left;
    width: 33%;
    color: #fff;
    font-size: 1rem;
    line-height: 2rem;
  }

  .head .center {
    text-align: center;
    color: #fff;
    font-size: 0.8rem;
  }

  .Ding {
    width: 100%;
    height: 100%;
    background: rgb(245, 245, 245);
  }
</style>

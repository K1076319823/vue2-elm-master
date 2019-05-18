<template>
  <div class="header clearfix">
    <!-- 这个 P标签里面的城市是可变的,先写死 -->
    <router-link to="" class="skip">
    </router-link>
    <p class="fonts">
      <router-link :to="{path:'/Citydingwei'}" style="color: white;">{{$route.query.address}}</router-link>
    </p>
    <div class="access clearfix">
      <span class="register" @click="rouTer()">{{a}}</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import store from '../../store/index'

  Vue.use(VueAxios, axios);

  export default {
    name: 'Header',
    store,
    data() {
      return {
        a: ''
      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
        console.log(res.data)
        if (res.data.status !== 0) {
          this.a = res.data.username
          if (this.$store.state.Input !== '') {
            this.a = this.$store.state.Input
          } else {
            this.a = res.data.username
          }
        } else if (res.data.status === 0) {
          this.a = '登录 | 注册'
        }
      })
    },
    methods: {
      rouTer() {

        if (this.a === '登录 | 注册') {
          this.$router.push({
            path: '/login'
          })
          console.log(11)
        } else {
          this.$router.push({
            path: '/Account'
          })
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 7%;
    background-color: #3190e8;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 0.8rem;
    color: white;
    z-index: 9999999;
  }

  .fonts {
    position: absolute;
    left: 0rem;
    top: 0.5rem;

    display: inline-block;
    /*text-overflow:ellipsis;*/
    color: #fff;
    height: 1rem;
    z-index: 2;
    width: 50%;
    margin-left: 25%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .access {
    float: right;
    position: relative;
    top: 0.6rem;
    right: 0.6rem;

  }

  .skip {
    width: 1.2rem;
    height: 1.2rem;
    background-color: lightcoral;
    position: absolute;
    left: 0.6rem;
    top: 0.5rem;
    background: url(../../images/search.png) no-repeat;
    background-position: center center;
    background-size: contain;

  }

  .login {
    font-size: 0.6rem;
    float: right;
    color: white;
    border-right: 2px solid white;
    text-decoration: none;
  }

  .register {
    font-size: 0.6rem;
    float: right;
    color: white;
    text-decoration: none;
  }
</style>

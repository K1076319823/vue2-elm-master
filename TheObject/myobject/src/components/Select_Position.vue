<template>
  <!-- 增加地址的搜索地址 -->
  <div style="list-style: none;background:#ebebeb;">
    <header class="header text-center clearfix">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/Select_Address'}">
<img src="../../images/左箭头.png"/>
          </router-link>
        </span>搜索地址
    </header>
    <div style="width: 100%;background: white;padding: 0.45rem;margin-top: 2rem" class="clearfix">
      <input type="text" class="pull-left" placeholder="请输入小区/写字楼/学校等" v-model="Input">
      <button class="btn btn-default pull-right" @click="getadd()" style="outline: none;">确认</button>
    </div>
    <div class="text-center notSeach" style="margin-top: 6rem;" v-show="notSeach">
      <p>找不到地址?</p>
      <p>请尝试输入小区 , 写字楼 或 用户名</p>
      <p>详细地址(如门牌号)可稍后输入哦.</p>
    </div>
    <ul>
      <li class="Forin" v-for="(per , index) in ForArr" :key="index">
        <router-link :to="{path:'/Select_Address',query:{SelectPathname:per.address,SelectGeohash:per.geohash}}">
          <p>{{per.name}}</p>
          <p>{{per.address}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue';
  import store from '../../store/index'

  export default {
    name: "Select_Position",
    components: {},
    data() {
      return {
        ForArr:'',
        Input:'',
        notSeach:true,

      }
    },
    methods: {
      getadd() {
        this.notSeach = false
        let b = this.$store.state.addid
        let a = 'https://elm.cangdu.org/v1/pois?city_id=' + b + '&keyword=' + this.Input + '&type=search'
        Vue.axios.get(a).then((response) => {
          // console.log(response);
          this.ForArr = response.data

        });
      }
    },
    mounted(){
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
        // console.log(res);
      })
    }
  }
</script>

<style scoped>
  .Forin p{
    margin: 0;
  }
  .Forin{
    padding: 0.4rem;
    color: rgba(0,0,0,0.5);
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .notSeach p {
    font-size: .7rem;
    color: #aaa;
  }

  .warnpath {
    padding: 0.3rem;
    background: #fff6e4;
    color: #ff883f;
  }

  button {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 3rem;
    background: rgb(49, 144, 232);
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
    outline: none;
  }

  input {
    padding: 0.3rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 11.8rem;
    border-radius: 0.1rem;
    height: 1.72rem;
    background: #ebebeb;
    outline: none;
  }

  .header {
    width: 100%;
    height: 2rem;
    background-color: rgb(49, 144, 232);
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    position: fixed;
    top: 0;
  }

  .header img {
    width: 0.8rem;
    height: 0.8rem;
  }
</style>

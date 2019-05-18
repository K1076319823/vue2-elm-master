<template>
  <!-- 增加地址的搜索地址 -->
  <div style="list-style: none;background:#ebebeb;">
    <header class="header text-center clearfix">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/Account_NewPath'}">
<img src="../../images/左箭头.png"/>
          </router-link>
        </span>搜索地址
    </header>
    <div style="width: 100%;background: white;padding: 0.45rem;margin-top: 2rem" class="clearfix">
      <input type="text" class="pull-left" placeholder="请输入小区/写字楼/学校等" v-model="Input">
      <button class="btn btn-default pull-right" @click="getadd()">确认</button>
    </div>
    <p class="warnpath text-center" style="margin: 0">为了满足商家的送餐要求, 建议您从列表中选择地址</p>
    <div class="text-center notSeach" style="margin-top: 6rem;" v-show="notSeach">
      <p>找不到地址?</p>
      <p>请尝试输入小区 , 写字楼 或 用户名</p>
      <p>详细地址(如门牌号)可稍后输入哦.</p>
    </div>
    <ul>
      <li class="Forin" v-for="(per , index) in ForArr" :key="index">
        <router-link :to="{path:'/Account_NewPath',query:{pathname:per.name,geohash:per.geohash}}">
        <p>{{per.name}}</p>
        <p>{{per.address}}</p>
        </router-link>
      </li>
    </ul>
    <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
  </div>
</template>

<script>
  import Vue from 'vue';
  import store from '../../store/index'
  import Com_PromptBox from "./Com_PromptBox";

  export default {
    name: "Account_Position",
    components: {Com_PromptBox},
    data() {
      return {
        notSeach: false,
        Input: '',
        ForArr: [],
        isHide:false,
        SetTxt:''
      }
    },
    methods: {
      getadd() {
        let b = this.$store.state.addid
        let a = 'https://elm.cangdu.org/v1/pois?city_id=' + b + '&keyword=' + this.Input + '&type=search'
        Vue.axios.get(a).then((response) => {
          console.log(response);
          this.ForArr = response.data

          if(response.data.message === '参数错误'){
            this.isHide = true
            this.SetTxt = '由于您手机网速未能成功拉取定位,请返回重新获取定位'
          }else{
            this.isHide = false
          }
        });
        this.notSeach = false;
      },
      Show(){
        this.$router.push({
          path:'/Citydingwei'
        })
      }
    },
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

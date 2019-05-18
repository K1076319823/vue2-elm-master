<template>
  <!-- 选择收货地址 -->
  <div style="background:white;height: 100%;">
    <header class="header text-center clearfix">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/Account'}">
<img src="../../images/左箭头.png"/>
          </router-link>
        </span>选择地址
    </header>
    <!-- 内容层 -->
    <router-link :to="{path:'/',query:{addName:add.name,addGeohash:add.geohash}}" class="inFor clearfix" v-for="(add , index) in dataArr" :key="index">
      <div class="pull-left" style="margin: 0.3rem 0.5rem 0 0 ;"><img src="../../images/选中.png" style="width: 1.2rem;"/>
      </div>
      <div class="pull-left">
        <p style="margin: 0;"><b style="font-size: 0.8rem;">{{add.name}}</b><span
          style="margin:01rem">{{add.sex == '1' ? '男' : '女'}}</span><span>{{add.phone}}</span></p>
        <p style="margin: 0.4rem 0 0 0"><span
          class="Home">{{add.tag}}</span><span>{{add.address}}{{add.address_detail}}</span></p>
      </div>
    </router-link>
    <!-- 新增加收货地址 -->
    <p class="Footer text-center">
      <router-link :to="{path:'/Select_Address'}"><img src="../../images/定位.png" style="width: 1rem;height: 1rem"/>
        新增加收货地址
      </router-link>
    </p>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "Shop_Address",
    data() {
      return {
        dataArr: '',

      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((respons) => {
        let userId = respons.data.user_id
        Vue.axios.get(`https://elm.cangdu.org/v1/users/${userId}/addresses`).then((res) => {
          console.log(res.data)
          this.dataArr = res.data
        })
      })

    }
  }
</script>

<style scoped>
  .Footer a {
    width: 100%;
    height: 100%;
    display: inline-block;
    font-size: 0.7rem;
    background: white;
  }

  .Footer {
    width: 100%;
    height: 2.5rem;
    position: fixed;
    bottom: 0;
    display: inline-block;
    line-height: 2.5rem;
    margin: 0;
  }

  .inFor {
    color: black;
    width: 100%;
    padding: 0.5rem 0.3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: inline-block;
  }

  .inFor span {
    font-size: 0.7rem;
  }

  .inFor .Home {
    display: inline-block;
    background: #ff5722;
    font-size: 0.2rem;
    border-radius: 0.1rem;
    padding: 0 0.3rem;
    margin-right: 0.4rem;
    color: white;
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

<template>
  <!-- 选择收货地址 -->
  <div style="background:white;height: 100%;">
    <header class="header text-center clearfix">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/Indent'}">
<img src="../../images/左箭头.png"/>
          </router-link>
        </span>选择地址
    </header>
    <!-- 内容层 -->
    <div class="biaoshi">
      <router-link :to="{query:{addName:add.name,addGeohash:add.geohash}}" class="inFor clearfix"
                   v-for="(add , index) in dataArr" :key="index">
        <div class="pull-left" @click="xuan(add.name)" :class="{'ms':selectName === add.name ? true : false}">
          <p style="margin: 0;"><b style="font-size: 0.8rem;">{{add.name}}</b><span
            style="margin:01rem">{{add.sex == '1' ? '男' : '女'}}</span><span>{{add.phone}}</span></p>
          <p style="margin: 0.4rem 0 0 0"><span
            class="Home">{{add.tag}}</span><span>{{add.address}}{{add.address_detail}}</span></p>
          <div class="pull-left" style="margin: 0.3rem 0.5rem 0 0 ;"><img src="../../images/选中.png" class="dui"
                                                                          style="width: 1.2rem;"/>
          </div>
          <p class="delet" @click="deletePer(index)">删除本条信息</p>
        </div>

      </router-link>
      <div class="quebtn">
        <button class="que" @click="myque()">确认</button>
      </div>
      <!-- 新增加收货地址 -->
      <p class="Footer text-center">
        <router-link :to="{path:'/Select_Address'}"><img src="../../images/定位.png" style="width: 1rem;height: 1rem"/>
          新增加收货地址
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "Shop_Address",
    data() {
      return {
        dataArr: '',
        selectName: ""
      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((respons) => {
        let userId = respons.data.user_id
        Vue.axios.get(`https://elm.cangdu.org/v1/users/${userId}/addresses`).then((res) => {
          this.dataArr = res.data
        })
      })

    },
    methods: {
      xuan(cName) {
        this.selectName = cName;
        return this.selectName
      },
      myque() {
        for (let i = 0; i < this.dataArr.length; i++) {
          if (this.dataArr[i].name === this.selectName) {
            this.$store.state.usname = this.selectName;
            this.$store.state.useraddr = this.dataArr[i].address;
            this.$store.state.useraddrs = this.dataArr[i].address_detail;
            this.$store.state.userph = this.dataArr[i].phone;
            console.log(this.dataArr[i].address)
          }
        }
        if (this.selectName !== "") {
          this.$router.push({path: '/Indent'})
        }
      },
      deletePer(i) {
        this.dataArr.splice(i, 1);
      }
    }
  }
</script>

<style scoped>
  .quebtn {
    text-align: center;
  }

  .que {
    margin: 1rem auto;
    background: yellowgreen;
    width: 50%;
    height: 1.2rem;
    border-radius: 0.5rem;
    color: #fff;
  }

  .biaoshi {
    margin-top: 2rem;
  }

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
    position: relative;
  }

  .inFor span {
    font-size: 0.7rem;
  }

  .biaoshi .ms .dui {
    opacity: 1;
  }

  .dui {
    position: absolute;
    top: 0.5rem;
    left: 90%;
    opacity: 0.1;
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

  .delet {
    color: red;
    position: absolute;
    right: 0.5rem;
    top: 3rem;
  }
</style>

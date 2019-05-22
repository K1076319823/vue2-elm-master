<template>
  <!-- 收货地址 -->
  <div>
    <header class="header text-center clearfix">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/Account'}">
<img src="../../images/左箭头.png"/>
          </router-link>
        </span>编辑地址
      <span class="pull-right" style="margin-right: 0.3rem;font-weight: 500;font-size: 0.6rem;" @click="compile">{{pile}}</span>
    </header>
    <!-- 循环v-for -->
    <div class="child">
      <div class="inFor" v-for="(daArr , index) in dataArr" :key="index">
        <div class="pull-left">
          <p>{{daArr.address}}</p>
          <p>{{daArr.phone}}</p>
        </div>
        <p class="pull-right" v-show='Delete' @click="DeleteBtn(index)">X</p>
      </div>
    </div>
    <router-link :to="{path:'/Account_NewPath'}">
      <div class="inForBtn">
        <span>新增地址</span>
        <span class="pull-right">
      <img src="../../images/右箭头灰色.png" style="width: 1rem;height: 1rem;"/>
      </span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "Account_Location",
    data() {
      return {
        dataArr: [],
        userId: '',
        BackColor: '#fff8c3',
        Delete: false,
        pile: '编辑',
        address_id: '',
      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
        this.userId = res.data.user_id
        Vue.axios.get(`https://elm.cangdu.org/v1/users/${this.userId}/addresses`).then((respons) => {
          this.dataArr = respons.data

          for (let i = 0; i < respons.data.length; i++) {
            this.address_id = respons.data[i].id

          }
        })
      })
    },
    methods: {
      compile() {
        if (this.pile === '编辑') {
          this.pile = '完成'
          this.Delete = true
        } else {
          this.pile = '编辑'
          this.Delete = false
        }
      },
      DeleteBtn(i) {
        Vue.axios.delete(`https://elm.cangdu.org/v1/users/${this.userId}/addresses/${this.address_id}`).then((res) => {


          // 判断如果删除成功再次请求新数据放入定义的数组里
          if (res.data.success === "删除地址成功") {
            Vue.axios.get(`https://elm.cangdu.org/v1/users/${this.userId}/addresses`).then((respons) => {
              this.dataArr = respons.data

              for (let i = 0; i < respons.data.length; i++) {
                this.address_id = respons.data[i].id

              }
            })
          }
        })
      }
    },
  }
</script>

<style scoped>
  .child .inFor:nth-child(1) {
    background: #fff8c3;
  }

  .inForBtn {
    padding: 0.4rem;
    width: 100%;
    margin-top: 0.4rem;
    border-top: 0.5px solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    background: white;
  }

  .inFor p {
    margin: 0;
  }

  .inFor {
    padding: 0.4rem;
    width: 100%;
    height: 2.5rem;
    border-top: 0.5px solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    background: white;
    display: inline-block;
  }

  .header {
    width: 100%;
    height: 2rem;
    background-color: rgb(49, 144, 232);
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.4rem;
  }

  .header img {
    width: 0.8rem;
    height: 0.8rem;
  }
</style>

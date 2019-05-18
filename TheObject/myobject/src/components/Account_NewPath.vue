<template>
  <!-- 新增地址 -->
  <div>
    <header class="header text-center clearfix">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/Account_Location'}">
<img src="../../images/左箭头.png"/>
          </router-link>
        </span>新增地址
    </header>
    <div style="padding: 0.5rem;background:white;">
      <input type="text" placeholder="请填写你的姓名" v-model="nameModel" @input="nameYZ">
      <p v-show="nameTF">请填写您的姓名</p>
      <input type="text" placeholder="小区/写字楼/学校等" @click="seachPath" v-model="GetMsg">
      <input type="text" placeholder="请填写详细送餐地址" v-model="pathModel" @input="PathYZ">
      <p v-show="pathTF">{{pathTitle}}</p>
      <input type="text" placeholder="请填写能够联系到您的手机号" v-model="phone" @input="PhoneYZ">
      <p v-show="phoneTF">{{phoneTitle}}</p>
      <input type="text" placeholder="备用联系手机号 (选填)" v-model="phone_bk">
    </div>
    <div class="btnBox">
      <button class="btn btn-default" @click="getTitle">新增地址</button>
    </div>
    <Com_PromptBox v-show='isHide' :childCom="SetTxt" @childEvent="Show($event)"></Com_PromptBox>
  </div>
</template>

<script>

  import Com_PromptBox from "./Com_PromptBox";
  import Vue from 'vue';

  export default {
    name: "Account_NewPath",
    components: {Com_PromptBox},
    data() {
      return {
        GetMsg: '',
        isHide: false,
        // 提示框变量
        SetTxt: '',
        // 姓名变量
        nameModel: '',
        nameTF: false,
        // 送餐地址变量
        pathTitle: '',
        pathTF: false,
        pathModel: '',
        // 手机验证变量
        phoneTitle: '',
        phoneTF: false,
        phone: '',
        // 备注电话
        phone_bk: '',
        // 存储数据登录的id
        UserId: '',
        geohash: this.$route.query.geohash,

      }
    },
    methods: {
      seachPath() {
        this.$router.push({
          path: '/Account_Position'
        })
      },
      // 点击事件
      getTitle() {
        Vue.axios.post(`//elm.cangdu.org/v1/users/${this.UserId}/addresses`, {
          address: this.GetMsg,
          address_detail: this.pathModel,
          geohash: this.geohash,
          name: this.nameModel,
          phone: this.phone,
          tag: '123',
          sex: 1,
          phone_bk: this.phone_bk,
          tag_type: 3,
        }).then((res) => {
          console.log(res)
          if (res.data.message === '地址信息错误') {
            this.SetTxt = res.data.message;
            this.isHide = true
          } else if (res.data.message === '详细地址信息错误') {
            this.SetTxt = res.data.message;
            this.isHide = true
          } else if (res.data.message === '添加地址失败') {
            this.SetTxt = '获取手机号错误'
            this.isHide = true
          }

          // 添加成功不允许弹窗
          if(res.data.success === '添加地址成功'){
            this.$router.push({
              path:'/Account_Location'
            })
            this.isHide = false
          }
        })

      },
      Show() {
        this.isHide = false;
      },
      // 姓名验证
      nameYZ() {
        if (this.nameModel < 1) {
          this.nameTF = true
        }
      },
      // 送餐地址验证
      PathYZ() {
        if (this.pathModel.length < 1) {
          this.pathTitle = '请详细填写送餐地址'
        } else if (this.pathModel.length < 3) {
          this.pathTitle = '送餐地址太短, 不能识别'
          this.pathTF = true
        } else {
          this.pathTF = false
        }
      },
      // 验证手机号
      PhoneYZ() {
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.phone)) && this.phone.length !== 11) {
          this.phoneTitle = '手机号格式不对';
          this.phoneTF = true
          if (this.phone.length === 0) {
            this.phoneTitle = '手机号不能为空';
          }
        } else if ((/^1(3|4|5|7|8)\d{9}$/.test(this.phone)) && this.phone.length === 11) {
          this.phoneTF = false
        }
      },

    },
    created() {
      this.GetMsg = this.$route.query.pathname
      console.log(this.geohash)
      // console.log(this.$store.state.latitude);

    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
        console.log(res);
        this.UserId = res.data.user_id;
      })
    }
  }
</script>

<style scoped>
  p {
    font-size: 0.2rem;
    color: red;
    margin: 0;
  }

  .btnBox {
    padding: 0.5rem;
  }

  button {
    width: 100%;
    height: 1.8rem;
    background: #4cd964;
    color: white;
    font-size: 0.65rem;
    font-weight: 600;
    outline: none;
  }

  input {
    width: 100%;
    margin: 0.2rem 0;
    padding: 0.2rem;
    outline: none;
    background: #ebebeb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.1rem;
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

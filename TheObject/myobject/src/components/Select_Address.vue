<template>
    <!-- 选择地址, 增加地址 -->
  <div style="background:white;height: 100%;">
  <header class="text-center">
    选择地址
  </header>
    <div class="clearfix Box">
      <div class="one">
      <span class="pull-left tact contact">联系人</span>
      <div class="pull-left inPut">
        <div style="border-bottom: 1px solid rgba(0,0,0,0.04);width: 100%;">
          <input type="text" class="nameInput" placeholder="名字" v-model="UserName">
        </div>
        <div style="width: 100%;" class="sexInput">
          <el-radio v-model="radio" label="1">小哥哥</el-radio>
          <el-radio v-model="radio" label="2">小姐姐</el-radio>
        </div>
      </div>
    </div>
      <div class="tow">
        <span class="pull-left tact tactPhone">联系电话</span>
        <div class="pull-left inPut">
            <input type="text" class="nameInput" placeholder="手机" v-model="InputPhone">
        </div>
        <img src="../../images/手机.png" style="width: 1.2rem;height: 1.2rem;margin-top: 0.6rem"/>
      </div>
      <div class="three">
        <span class="pull-left tact contact">送餐地址</span>
        <div class="pull-left inPut">
          <div style="border-bottom: 1px solid rgba(0,0,0,0.04);width: 100%;">
            <input type="text" class="nameInput" style="color: gray;" placeholder="您的地址" @click="seachPath()" v-model="PathName">
          </div>
          <div style="width: 100%;" class="sexInput">
            <input type="text" class="nameInput" placeholder="详细地址(如门牌号等)" v-model="detailed">
          </div>
        </div>
      </div>
      <div class="four">
        <span class="pull-left tact tactPhone">标签</span>
        <div class="pull-left inPut">
          <input type="text" class="nameInput" placeholder="无/家/学校/公司" v-model="tag">
        </div>
      </div>
      <button class="btn btn-default under" @click="under">确认</button>
  </div>
  </div>
</template>

<script>
  import Vue from 'vue';
    export default {
        name: "Select_Address",
      data(){
          return{
            // 存用户名id
            UserId:'',
            radio:'1',
            // 用户名
            UserName:'',
            // 手机号
            InputPhone:'',
            // 获取送餐地址
            PathName:this.$route.query.SelectPathname,
            // 获取详细地址
            detailed:'',
            // 获取标签
            tag:'',
            // 获取经纬度
            geohash: this.$route.query.geohash
          }
      },
      methods:{
          // 点击进入搜索地址
        seachPath(){
          this.$router.push({
            path:'/Select_Position'
          })
        },
        // 点击确认传递数据 , 增加收货地址
        under(){
          let radio = parseInt(this.radio)
          console.log(this.geohash)
          Vue.axios.post(`https://elm.cangdu.org/v1/users/${this.UserId}/addresses`,{
            address:this.PathName,
            address_detail:this.detailed,
            geohash:this.geohash,
            name:this.UserName,
            phone:this.InputPhone,
            tag:this.tag,
            sex:radio,
            phone_bk:'123123',
            tag_type:2,
          }).then((res)=>{
              console.log(res)
          })
        },
      },
      mounted(){
          // 获取登录的用户名id
        Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
          console.log(res);
          this.UserId = res.data.user_id;
        })
      }
    }
</script>

<style scoped>
  .Box input{
    font-size: 0.7rem;
  }
  .under{
    background: #4cd964;
    color: white;
    width: 100%;
    height: 2rem;
    margin-top: 0.6rem;
  }
  .tactPhone{
    display: inline-block;
    font-size: 0.8rem;
    line-height: 2.5rem;
  }
  .four{
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.04);
    display: inline-block;
  }
  .three{
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.04);
    display: inline-block;
  }
  .tow{
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.04);
    display: inline-block;
  }
  .one{
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid rgba(0,0,0,0.04);
  }
  .sexInput{
    height: 2.5rem;
    line-height: 2.5rem;
  }
  .nameInput{
    height: 2.5rem;
    width: 100%;
    border: 0;
    font-size: 0.8rem;
    outline: none;
  }
  .contact{
    display: inline-block;
    font-size: 0.8rem;
    height: 5rem;
    line-height: 2.5rem;
  }
  .tact{
    width: 4rem;
  }
  .inPut{
    width: 9rem;
  }
  .Box{
    margin: 0 0.6rem;
  }
  header{
    width: 100%;
    height: 2rem;
    background:rgb(49, 144, 232);
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
  }
</style>

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
    <div class="twohang ">
      <div class="yidan clearfix">
        <div class="left">
          <img data-v-b204fb80="" :src="'//elm.cangdu.org/img/'+dianxiang.image_path"  alt="" class="IndentLogo">
        </div>
        <div class="right">
          <div class="clearfix"><h4 class="name">{{dianxiang.name}} </h4><span class="zhishi">></span> <span class="copy">等待支付</span></div>
          <div class="clearfix"><span class="danhao">10-{{ this.$store.state.shopid}}</span><span class="jia">￥:{{$store.getters.getAllPrice+5+cannum*3}}</span></div>
          <div class="clearfix">
            <router-link :to="{path:'/Dinglist'}">
            <span class="zou">去支付,还剩{{minutes }}分{{seconds}}秒</span>
            </router-link>
          </div>
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
          minutes: 15,
          seconds: 0,
          dianxiang: [],//店铺头像
          dingdan: [],
          cannum: 0,
          abc:'订单'
        }
      },
      methods: {
        num(n) {
          return n < 10 ? '0' + n : '' + n
        },
        timer() {
          var _this = this
          var time = window.setInterval(function () {
            if (_this.seconds === 0 && _this.minutes !== 0) {
              _this.seconds = 59
              _this.minutes -= 1
            } else if (_this.minutes === 0 && _this.seconds === 0) {
              _this.seconds = 0
              window.clearInterval(time)
            } else {
              _this.seconds -= 1
            }
          }, 1000)
        }
      },
      mounted() {
        this.timer()
        let m = this.$store.state.shopid;
        // console.log(m, 1111)
        Vue.axios.get(`https://elm.cangdu.org/shopping/restaurant/${m}`).then((res) => {
            // console.log(res.data);
            this.dianxiang = res.data;
            // console.log(this.dianxiang, "111111")
          }
        )
        this.dingdan = this.$store.state.car
        // console.log(this.dingdan)
        // console.log('22')
        for (let i = 0; i < this.dingdan.length; i++) {
          // console.log(this.dingdan.length)
          this.cannum += this.dingdan[i].count;
          // console.log(this.dingdan[i].count);
        }
        return this.cannum
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
  .yidan{
   padding:0.5rem;
    background-color: #fff;
    border-bottom: 1px #ccc solid;
  }
  .yidan .left{
   width:18%;
    float:left;
  }
  .yidan .right{
    width:78%;
    float:right;
  }
  .left img{
    margin-top:0.5rem;
    width:100%;
  }
  h4{
    float:left;
    font-size:0.8rem;
  }
  .zhishi{
    color:#ccc;
    font-size:1rem;
    margin-left:0.5rem;
  }
  .copy{
    float:right;
    margin-top: 0.2rem;
    font-size: 0.7rem;
  }
  .danhao{
    float:left;
    font-size: 0.8rem;
    color:#ccc;
  }
  .jia{
    float:right;
    font-size:0.8rem;
    color:red;
  }
  .zou{
    margin-top:0.4rem;
    border:1px red solid;
    float:right;
    padding:0.2rem;
    color:red;
    font-size:0.5rem;
  }


  .head{
    background-color: #3190e8;
    height:1.9rem;
  }
  a{
    color:#fff;
  }
  .head div{
    float:left;
    width:33%;
    color:#fff;
    font-size:1rem;
    line-height: 2rem;
  }
  .head .center{
    text-align: center;
    color:#fff;
    font-size:0.8rem;
  }
  .Ding{
    width: 100%;
    height:100%;
    background: rgb(245,245,245);
  }
</style>

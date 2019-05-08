<template>
  <div>
    <Header></Header>
    <div class="Mai">
      <div class="merchant">
        <span class="pull-left clearfix"><img src="../../images/商家.png" class="merimg"/></span>
        <span class="pull-right clearfix merfont">附近商家</span>
      </div>
      <ul class="ulinfor" v-for="(pro , index) in proArr" :key="index">
        <li class="pull-left imgli">
          <img :src="'//elm.cangdu.org/img/'+ pro.image_path" alt="" class=""/>
        </li>
        <li class="pull-left ul_text">
          <h4 class="head">
            <span class="pp">{{premium ? '品牌': NaN}}</span>
            {{pro.name}}
            <span class="pull-right ">
            <b>{{pro.supports[0].icon_name}}</b>
            <b>{{pro.supports[1].icon_name}}</b>
          </span>
          </h4>
          <h4>
            <span class="pull-left">
              <span class="rating">{{pro.rating}}</span>
              <span class="recent">月售{{pro.recent_order_num}}单</span>
            </span>
            <span class="pull-right">
              <span class="delivery">{{pro.delivery_mode.text}}</span>
              <span class="supports">{{pro.supports[1].name}}</span>
            </span>
          </h4><br>
          <h4>
            <span class="pull-left piecewise">
              ￥20起送 / {{pro.piecewise_agent_fee.tips}}
            </span>
            <span class="pull-right distance">
              <span>{{pro.distance}}</span>
              /
              <span class="time">{{pro.order_lead_time}}</span>
            </span>
          </h4>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  import Vue from 'vue'
  import Swiper from 'swiper'

  export default {
    name: "Mai",
    data() {
      return {
        premium: true,
        proArr: []
      }
    },
    components: {Footer, Header},
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=113.689133&longitude=31.255541').then((res) => {
        this.proArr = res.data;
        console.log(res);
        console.log(res.data[0].supports[2].icon_name);
        let pre = res.data.is_premium;
        for (let i = 0; i < res.data.is_premium ; i++) {
          if(pre === true) {
            this.premium = true
          } else {
            this.premium = false;
          }
        }

      }).catch((error) => {
        console.log('请求错误', error);
      });
      new Swiper(this.$refs.slider, {
        // pagination: '.swiper-pagination',
      })
    }
  }
</script>

<style scoped>
  .Mai {
    width: 100%;
    margin-top: 3rem;
    background: white;
    border-top: 1px solid gray;
  }

  .merchant {
    width: 3.3rem;
    color: gray;
    display: inline-block;
    margin: 0.3rem 0 0 0.3rem;
  }

  .merimg {
    width: 0.8rem;
    height: 0.8rem;
  }

  .merfont {
    line-height: 1rem;
    font-size: 0.55rem;
  }

  .ulinfor {
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    padding: 0.6rem 0.8rem;
    list-style: none;
    color: black;
  }

  .imgli {
    width: 20%;
    margin-right: 0.4rem;
  }

  .imgli img {
    width: 100%;
    height: 100%;

  }

  .ul_text {
    display: inline-block;
    width: 75%;
  }

  .head {
    width: 100%;
    font-size: 0.6rem;
    font-weight: 600;
    margin-top: 0;
  }

  .pp {
    font-size: 0.45rem;
    display: inline-block;
    background: orange;
    padding: 0.1rem;
    border-radius: 0.1rem;
    font-weight: 600;
    margin-right: 0.3rem;
  }

  b {
    font-size: 0.01rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.4);
  }

  .delivery,
  .supports {
    font-size: 0.001rem;
    display: inline-block;
    color: white;
    background: deepskyblue;
    border-radius: 0.1rem;

  }

  .supports {
    background: none;
    border: 1px solid deepskyblue;
    color: deepskyblue;
  }

  .piecewise {
    font-size: 0.001rem;
    display: inline-block;
  }

  .distance,
  .time {
    font-size: 0.01rem;
  }

  .time {
    color: deepskyblue;
  }

  .rating {
    font-size: 0.01rem;
    color: red;
  }

  .recent {
    font-size: 0.01rem;
  }
</style>

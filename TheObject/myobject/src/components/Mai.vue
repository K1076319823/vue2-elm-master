<template>
  <div>
    <div class="Mai">
      <div class="merchant">
         <span class="pull-left clearfix"><img src="../../images/商家.png" class="merimg"/></span>
        <span class="pull-right clearfix merfont">附近商家</span>
      </div>
      <router-link :to="{path:'/CAndESocket'}" v-for="(pro , index) in proArr" :key="index" >
        <ul class="ulinfor" @click="Scity(pro.id,pro.rating_count,pro.rating)">
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
              <!-- 评分星星 -->
              <!--<span class="rating">{{pro.rating}}</span>-->
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
</el-rate>
              <!------------------------------------------>
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
      </router-link>
    </div>
  </div>

</template>

<script>
  import Footer from "./Footer";
  import Swiper from 'swiper'
  import Vue from 'vue';
  import Starttop from "./Starttop";
  import axios from 'axios'
  import Vuex from 'vuex'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios, Vue);
  export default {
    name: "Mai",
    data() {
      return {
        premium: true,
        proArr: [],
        idArr: [],
        value5:4.7
      }
    },
    components: {Footer},
    mounted() {
      let j = this.$store.state.latitude;
      let w = this.$store.state.longitude;
      let c = this.$store.state.msg1;
      // console.log(j , w,'当前城市是:',c)
      Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${j}&longitude=${w}`).then((res) => {
        // 遍历商品的信息展示在界面上
        this.proArr = res.data;
        // console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          let pre = []
          pre = res.data[i].is_premium
          // console.log(pre);
          if (pre == true) {
            this.premium = true
          } else {
            this.premium = false
          }
        }
        // 遍历里面的id值将其存入Vuex里
        for (let i =0;i<res.data.length;i++){
          this.idArr = res.data[i].id;
          // console.log(this.idArr)
          // console.log(res.data[i])
        }

      }).catch((error) => {
        // console.log('请求错误', error);
      });
      new Swiper(this.$refs.slider, {
        // pagination: '.swiper-pagination',
      })
    },
    methods: {
      Scity(id,z,f){
        // console.log(id);
        this.$store.state.zan=z;
        this.$store.state.prosfen=f;
        this.$store.state.shopid=id;

      }
    }
  }
</script>

<style scoped>
  .Mai {
    width: 100%;
    margin-top: 0.5rem;
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


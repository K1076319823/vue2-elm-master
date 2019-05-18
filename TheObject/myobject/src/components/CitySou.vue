<template>
    <div class="CitySou">
      <div class="head clearfix">
        <div>
          <router-link :to="{path:'/Citydingwei'}">
            <span class="glyphicon glyphicon-chevron-left jian"></span>
          </router-link>
        </div>
        <div class="center">
          <b>
            {{$store.state.msg1}}
          </b>
        </div>
        <div class="right">
          <router-link :to="{path:'/Citydingwei'}"><span>切换城市</span></router-link>
        </div>
      </div>
    <div class="sou">
      <div>
        <input type="text" placeholder="输入学校、商务楼、地址" @input="text1" v-model="text">
      </div>
      <div class="tijiao" @click="getadd" >
        提交
      </div>
      <div  v-show="isshow">
        <p class="history"> 搜索历史:</p>
        <h3 class="hish3"> {{$store.state.cityname}}</h3>
        <p>{{$store.state.msgaddr}}</p>
      </div>
    </div>
      <div  v-for=" (add,index) in hit" class="list" :key='index'>

        <router-link :to="{path:'/index',query:{address:add.address}}">
          <div class="cl" @click="storeadd(add.name,add.address)">
          <h3>{{add.name}}</h3>
          <p>
            {{add.address}}
          </p>
          </div>
        </router-link>
      </div>
    </div>

</template>

<script>
  import  Vue from 'vue';
  import store from '../../store/index'
  import Starttop from "./Starttop";
 /* import axios from 'axios'
  import Vuex from 'vuex'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios);
  Vue.use(Vuex)*/

  export default {
    name: "CitySou",
    store,
    data() {
      return {
        newaddr: '',
        text: '',
        hit: {},
        isshow: true,
        perCity:[] , //存储城市历史
        name:'',
        addr:''
      }

    },
    methods: {
      // addThingEnter(event){
      //   console.log(event.target.value);
      // }
      text1() {
        console.log(this.text);
      },

      // Dcity(b){
      //   this.$store.state.msgaddr=b;
      //   console.log(this.$store.state.msgaddr,111)
      //   // console.log(this.$store.state, '11111111')
      // },

      Dcity(b){
        this.$store.state.msgaddr=b
        console.log(this.$store.state.msgaddr ,"aaaaaa")
      },

      getadd() {
       let b=this.$store.state.addid
        console.log(b,'333')
        let a = 'https://elm.cangdu.org/v1/pois?city_id=' + b + '&keyword=' + this.text + '&type=search'
        console.log(a);
        Vue.axios.get(a).then((response)=>{
          console.log(response.data);
          this.hit = response.data;
        });
          this.isshow = false;
      },
      storeadd(a,b){
        this.$store.state.cityname=a;
        this.$store.state.msgaddr=b;
        console.log(this.$store.state.cityname,this.$store.state.msgaddr ,"aaaaaa")
       }



      // updata() {
      //   let a = 'https://elm.cangdu.org/v1/pois?city_id=&keyword=' + this.text + 'type=search'
      //   Vue.axios.get(a).then((response) => {
      //     console.log(response.data);
      //     this.hit = response.data;
      //   });
      // }

    }
  }



</script>

<style scoped>
.CitySou{
  width:100%;
  height:100%;

}
.head{
  background-color: #3190e8;
  position: fixed;
  left:0;
  top:0;
  width:100%;
  padding:0 0.2rem;
  height:2rem;
  box-sizing: border-box;
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

}
  .head .right{
    text-align: right;
    font-size:0.7rem;
  }
.right span{
  color:#fff;
}
.sou{
  box-sizing: border-box;
  background-color: #fff;
  margin:2.8rem 0 0.5rem 0 ;
  padding:0.3rem;
}
  .sou div{
    width:14rem;
    margin:0 auto;
    box-sizing: border-box;
  }
.sou div input{
  width:14rem;
  border:0;
  border:1px #ccc solid;
  display:block;
  height:1.5rem;
  margin:0.5rem 0;
 padding:0.4rem;
  box-sizing: border-box;
}
  .tijiao{
    width:100%;
    height:1.5rem;
    background: #3190e8;
    color:#fff;
    border-radius: 0.2rem;
    text-align:center;
    font-size:0.7rem;
    line-height: 1.5rem;
  }
  .history{
    margin:0.5rem auto;
    padding:0.5rem;
    box-sizing: border-box;
    line-height: 1.2rem;
    border-bottom:1px #ccc solid;
  }
  .hish3{
  color: #3190e8;
    margin-bottom:1rem;
}
  .list{
    background-color: #fff;
    padding:0.5rem;
    box-sizing: border-box;
    margin:0;
    border-bottom: 1px #ccc solid;
  }
.list h3{
  margin:0;
}
.list p{
  margin:0;
  color:#999;
  margin:0.5rem 0;
}
  .sou{
    margin-bottom:0;
  }
  .jian{
    color:#fff;
  }
</style>

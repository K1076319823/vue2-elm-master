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

    </div>
      <p class="history" v-show="isshow"> 搜索历史:</p>
      <div  v-for="add in hit " class="list">
        <router-link :to="{path:'/index'}">
          <h3>{{add.name}}</h3>
          <p @click="Dcity(add.address)">
            {{add.address}}
          </p>
        </router-link>
      </div>
    </div>

</template>

<script>
  import  Vue from 'vue';
  import Starttop from "./Starttop";
 /* import axios from 'axios'
  import Vuex from 'vuex'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios);
  Vue.use(Vuex)*/

  export default {
    name: "CitySou",
    data() {
      return {
        newaddr: '',
        text: '',
        hit: {},
        isshow: true
      }

    },
    methods: {
      // addThingEnter(event){
      //   console.log(event.target.value);
      // }
      text1() {
        console.log(this.text);
      },
      Dcity(b){
        this.$store.state.msgaddr=b
        console.log(this.$store.state.msgaddr)
      },
      getadd() {
       let b=this.$store.state.addid
        console.log(b,'333')
        let a = 'https://elm.cangdu.org/v1/pois?city_id=' + b + '&keyword=' + this.text + '&type=search'
        console.log(a,'jhjj');
        Vue.axios.get(a).then((response) => {
          console.log(response.data);
          this.hit = response.data;
        });
          this.isshow = !this.isshow;
      },

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
.head{
  background-color: blue;
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
  background-color: #fff;
  margin:0.5rem 0 ;
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
    background: blue;
    color:#fff;
    border-radius: 0.2rem;
    text-align:center;
    font-size:0.7rem;
    line-height: 1.5rem;
  }
  .history{
    width:15.3rem;
    margin:0 auto;
    border-bottom: 1px #ccc solid;
    line-height: 1.2rem;
  }
  .list{
    background-color: #fff;
    margin:0;
    border-bottom: 1px #ccc solid;
    padding:0.5rem;
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

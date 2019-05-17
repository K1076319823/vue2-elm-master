<template>
  <div class="city">
    <Starttop></Starttop>
   <div class="one">
     <p class="clearfix"><span>当前定位城市:</span><b>定位不准确时,请在城市列表中选择</b></p>
     <div class="dingweiarea clearfix">
       <router-link :to="{path:'/CitySou'}">
         <div class="dwcity"  @click="Dwcity(Dcity.name,Dcity.id,Dcity.latitude,Dcity.longitude)">{{Dcity.name}}</div>
       </router-link>
       <p class="jian">
         <router-link :to="{path:'/CitySou'}">
           <span class=" jian glyphicon glyphicon-chevron-right"></span>
         </router-link>
       </p>
     </div>

   </div>
    <div class="hod ">
      <p>热门城市</p>
      <div v-for="(lt,index) in Hotcity" :key='index'  >
       <router-link  :to="{path:'/CitySou'}" ><div class="hname" @click="Dwcity(lt.name,lt.id,lt.latitude,lt.longitude)">{{lt.name}}</div></router-link>
      </div>
    </div>
    <div v-for="(item ,i) in fc" :key='i' class="allsC">
      <div class="clearfix abc" >
        <p>{{i}}</p>
        <router-link :to="{path:'/CitySou'}">
          <div class="allcity" v-for="(addr,index) in item" :key="index" @click="Dwcity(addr.name,addr.id,addr.latitude,addr.longitude)">
            {{addr.name}}
            <!--{{addr.id}}-->
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>
<script>
  import  Vue from 'vue';
  import Starttop from "./Starttop";
  import axios from 'axios'
  import Vuex from 'vuex'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios);
  Vue.use(Vuex)
    export default {
      name: "Citydingwei",
      data() {
        return {
          //所有商品的数组
          Hotcity: {},
          Grocity: {},
          citykey: {},
          newCity: {},
          Dcity:{},

        }
      },
      methods:{
        Dwcity(a,b,c,d){
          this.$store.state.msg1=a
          // console.log(b,'qqqq')
          this.$store.state.addid=b
          this.$store.state.latitude=c
          this.$store.state.longitude=d
          console.log(this.$store.state.msg1,this.$store.state.addid)
          console.log(this.$store.state.latitude,this.$store.state.longitude)
        },

      },

      components: {Starttop},
      comments: {
        Starttop
      },
      computed:{
        fc() {
          this.citykey = Object.keys(this.Grocity);
          this.citykey.sort();
          console.log(this.citykey);
            for (let i = 0; i < this.citykey.length;i++) {
            const index = this.citykey[i];
            this.newCity[index]=this.Grocity[index];
          }
            console.log(this.newCity);
            return this.newCity;
          }
        },
        mounted() {
          Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot').then((response) => {
            console.log(response.data);
            this.Hotcity = response.data;
          });
          Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((response) => {
            // console.log(response.data);
            this.Grocity = response.data;
          });
          Vue.axios.get('https://elm.cangdu.org/v1/cities?type=guess').then((response) => {
            // console.log(response.data);
            this.Dcity = response.data;
          });

        }

    }
</script>

<style scoped>
  .allsC{
    margin-top:1rem;
  }
  .abc{
    background-color: #fff;

  }
.one{
  margin-top:2rem;
  background-color: #fff;
}
.one p{
  padding:0 0.4rem;
  border-bottom: 1px #ccc solid;
  line-height: 1.5rem;
}
  .one b{
    float:right;
  }
  .dingweiarea{
  line-height: 1.5rem;
  }
  .dwcity{
    float:left;
    font-size:1rem;
    color:rgb(49, 144, 232);
  }
  .jian{
    float:right;
    text-align: right;
    line-height: 1.5rem;
    border-bottom: 1px #fff solid;
  }
  .hod{
    background-color: #fff;

  }
  .hod p{
    margin-bottom:0;
    line-height: 1.5rem;
    border-top:1px #ccc solid;
  }
  .hod .hname{
    float:left;
    width:25%;
    box-sizing: border-box;
  }
  .hname{
    width:25%;
    box-sizing: border-box;
    float:left;
    text-align:center;
    background-color: #fff;
    font-size:0.7rem;
    color: rgb(49, 144, 232);
    line-height: 1.5rem;
    border:1px #ccc solid;
    background-color: #fff;
  }
  .allcity{
    width:25%;
    box-sizing: border-box;
    float:left;
    text-align:center;
    background-color: #fff;
    font-size:0.5rem;
    color:#000;
    line-height: 1.5rem;
    border:1px #ccc solid;
    text-align:center;
    height:1.5rem;
    /*text-overflow: ellipsis;*/
    overflow: hidden;


  }
  .abc{
    margin:0.5rem  0;
    border:1px #ccc solid;
  }
  .abc p{
    background-color: #ccc;
    margin-bottom:0;
  }
  .allcity{
    border:1px #ccc solid;
  }
</style>

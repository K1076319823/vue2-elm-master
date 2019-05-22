<template>
  <div class="FserviceC">
    <header class="header text-center">
      <span class="pull-left clearfix">
        <router-link :to="{path:'/My'}" style="padding: 0;">
          <img src="../../images/左箭头.png" style="width: 0.8rem;height: 0.8rem;"/>
        </router-link>
      </span>
      服务中心
    </header>
    <div class="container">
      <div class="row text-center " style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <div class="col-xs-6 online">
          <router-link :to="{path:'/OnlineServer'}">
            <p><img src="../../images/客服.png"/></p>
            在线客服
          </router-link>
        </div>
        <div class="col-xs-6 online" style="border-left: 1px solid rgba(0,0,0,0.1)">
          <router-link :to="{path:'/OnlinePhone'}">
            <p><img src="../../images/电话.png"/></p>
            联系电话
          </router-link>
        </div>
      </div>
      <div class="row" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
        <div class="col-xs-12 host"><h4 style="padding: 0.6rem 0;">热门问题</h4></div>
      </div>
    </div>
    <div style="border-bottom: 1px solid rgba(0,0,0,0.1);width: 100%;padding:0.5rem;" class="clearfix" v-for="(SerArr , index) in array" :key="index">
      <router-link :to="{path:'/F_Service_Com'}" style="padding: 0;vertical-align: middle;">
        <p @click="huoqu(SerArr,index)"><span class="pull-left">{{SerArr}}</span><img src="../../images/右箭头.png" style="width: 0.8rem;height: 0.8rem;" class="pull-right"/></p>
      </router-link>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios);
  export default {
    name: "FserviceC",
    components: {},
    data() {
      return {
        Server: [],
        array:[],
        arrayTxt:[],
        arr2:[],
        array2:[]

      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res) => {
        this.Server = res.data;
        let arr=[]
        //将所有的键值对放进数组
        for(let a in res.data){
          arr.push(a)
        }
        let arr1=[]
        let arr2=[]
        //将问题取出放进数组
        for(let i=0;i<arr.length;i++){
          if (arr[i].indexOf('Caption')!=-1){
            arr1.push(arr[i])
          }else if(arr[i].indexOf('Caption') == -1){
            //对应数据需要传递的内容
            arr2.push(arr[i])
            // console.log(arr2)
            this.array2= arr2
          }
        }

        for (let i in arr1){
          // console.log(i)
          // console.log(res.data[arr2[i]])
          this.array.push(res.data[arr1[i]])
        }
        for(let j in arr2){
          this.arrayTxt.push(res.data[arr2[j]])
        }
        // console.log( this.array2)
        // console.log(this.arrayTxt)
        // console.log(this.array);
      }).catch((error) => {
        console.log('请求错误', error);
      })

    },

    methods:{
      huoqu(b,c){
        this.$store.state.tit=b
        // console.log(this.$store.state.tit)
        this.$store.state.neirong=c
        // console.log(this.$store.state.neirong)
        this.$store.state.arry1=this.array2;
        // console.log(this.$store.state.arry1);
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 2rem;
    background-color: #3190e8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    z-index: 999;
  }

  .FserviceC {
    padding-top: 1rem;
    background: rgb(255, 255, 255);
  }

  a {
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    color: gray;
    padding: 0.6rem 0;
    display: inline-block;
  }

  img {
    width: 1rem;
    height: 1rem;
  }

  .online {
    /*height: 4rem;*/
    /*vertical-align: bottom;*/
    /*padding: 0;*/
    margin-top: 1rem;
  }

  .host {
    /*height: 2.5rem;*/
    /*line-height: 2.5rem;*/
    font-size: 0.7rem;
  }

</style>

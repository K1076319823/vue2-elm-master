<template>
    <div class="Baspak">
      <div class="head clearfix">
        <div class="left">
          <router-link :to="{path:'/index'}">
            <span class="glyphicon glyphicon-chevron-left jiant"></span>
          </router-link>
        </div>
        <div class="center">
          余额说明
        </div>
      </div>
      <div class="duan">

        <ul>
          <!--<li v-for="item in ipaddrArray" >-->
         <!--{{item}}-->
          <!--</li>-->
        </ul>
      </div>
    </div>
</template>

<script>
  import  Vue from 'vue';
    export default {
        name: "Baspask",
      data() {
        return {
          yue: "",
          arry:[]
        }
      },
      computed:{
    // ipaddrArray:function(){
    //   return this. yue.split('###')
    // }
    },

      created(){
        Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((response) => {
        console.log(response.data.balanceContent);
        this.yue= response.data.balanceContent;
      })
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
  .head .left{
    height:1rem;
  }
  .head .center{
    text-align: center;
    color:#fff;
    font-size:0.8rem;
  }
  .jiant{
    color:#fff;
    display:block;
    line-height: 1rem;
    margin-top:0.4rem;
  }

</style>

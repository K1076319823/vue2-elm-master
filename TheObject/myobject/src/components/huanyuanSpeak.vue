<template>
    <div class="yuanspeak">
      <div class="head clearfix">
        <div class="left">
          <router-link :to="{path:'/VipCenter_F'}">
            <span class="glyphicon glyphicon-chevron-left jiant"></span>
          </router-link>
        </div>
        <div class="center">
          我的优惠
        </div>
      </div>
      <div class="shuoming" >
       尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
          购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
          注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
      </div>
      <div class="duan">

        <div>
          <div v-for="(item,i) in bbb" :key="i">
            <h4><b>{{item[1]}}{{item[2]}}</b></h4>
            <div v-for="(a,i) in item.slice(2)" :key="i">
              <p>{{a}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import  Vue from 'vue';
    export default {
        name: "huanyuanSpeak",
   data() {
    return {
      yue:'',
      arr:[],
      arry:[],
      li:[],
      overarry:[]
    }
  },
  created(){
    Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((response) => {
      // console.log(response.data.memberTimesContent);
      this.yue= response.data.memberTimesContent;
      this.li = this.yue;
    })
  },
  computed:{
    bbb(){
      this.arr = this.yue.split('###')
      this.arr.map((a)=>{
        this.arry.push(a.split(' '))
      });
      this.arry.splice(0,1)
      this.arry.map((b)=>{
        for(var i=0; i<b.length;i++){
          if(b[i]=="*"){
            b.splice(i,1,'')
          }
        }
      })
      // console.log(this.arry)
      return this.arry;
    },


    ddd(){
      this.overarry = this.li.split(0,'###')
    }
  }

    }
</script>

<style scoped>
  .yuanspeak{
    background-color: #fff;
  }
  .head{
    background-color: #3190e8;
    position: fixed;
    top:0;
    left:0;
    width:100%;
  }
  h4{
    margin:0.5rem 0;
    line-height: 1.2rem;
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
  .duan{
    padding:0.5rem;
  }
  .shuoming {
    display:block;
    float:left;
    padding:1.5rem;
    margin-top:1.6rem;
  }
</style>

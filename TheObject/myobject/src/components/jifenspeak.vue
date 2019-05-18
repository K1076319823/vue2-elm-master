<template>
    <div class="jfspack">
      <div class="head clearfix">
        <div class="left">
          <router-link :to="{path:'/My_Integral_F'}">
            <span class="glyphicon glyphicon-chevron-left jiant"></span>
          </router-link>
        </div>
        <div class="center">
          积分说明
        </div>
      </div>
      <div class="duan">

        <div>
          <div v-for="(item,i) in bbb" :key="i">
            <h4>{{item[1]}}{{item[2]}}</h4>
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
        name: "jifenspeak",
   data() {
    return {
      yue:'',
      arr:[],
      arry:[],
    }
  },
  created(){
    Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((response) => {
      console.log(response.data.pointtextContent);
      this.yue= response.data.pointtextContent;
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
          if(b[i]=='在个人中心'){
            b.splice(i+1,3,'我的红包>')
          }
        }
      })
      console.log(this.arry)
      return this.arry;
    }
  }
    }
</script>

<style scoped>
  .jfspack{
    background-color: #fff;
  }
  .head{
    background-color: #3190e8;
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
</style>

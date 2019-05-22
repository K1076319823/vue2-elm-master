<template>
  <div class="footer text-center" >
    <router-link :to="{path:'/index'}">
      <div :class="{select:selectName==='外卖'?true:false}" @click="getProsByCateBtn('外卖')">
        <span class="el-icon-eleme "></span>
        外卖
      </div></router-link>
    <router-link :to="{path:'/Sou'}">
      <div :class="{select:selectName==='搜索'?true:false}" @click="getProsByCateBtn('搜索')"  >
      <span class="el-icon-discover"></span>
      搜索
      </div></router-link>
    <router-link :to="{path:'/Ding'}">
      <div :class="{select:selectName==='订单'?true:false}" @click="getProsByCateBtn('订单')"   >
      <span class="el-icon-tickets"></span>
        订单
      </div></router-link>
    <router-link :to="{path:'/My'}">
      <div :class="{select:selectName==='我的'?true:false}" @click="getProsByCateBtn('我的')"   >
      <span class="el-icon-user-solid"></span>
        我的
      </div></router-link>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        selectName:'外卖'
      }
      },
    mounted(){
      // console.log(this.$store.state.abc);
      this.selectName=this.$store.state.abc;
    },
        methods: {
          getProsByCateBtn(cName){
            this.$store.state.abc = cName;
            // console.log(this.selectName, 100)
          }
      }
  }
</script>

<style scoped>
  .footer {
    /*
    百分比更换rem
    */
    height: 2.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
  }

  a {
    width:25%;
    box-sizing: border-box;
    margin: 0 1rem;
    font-size: 0.5rem;
    color: gray;
    text-decoration: none;
    padding: 0.4rem;
    display: inline-block;
  }
  a span{
    font-size:0.9rem;
    padding:0.1rem;
  }
  .select{
    color: #3190e8;
  }
</style>

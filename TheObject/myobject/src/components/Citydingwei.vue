<template>
  <div class="city">
    <Starttop></Starttop>
   <div class="one">
     <p class="clearfix"><span>当前定位城市:</span><b>定位不准确时,请在城市列表中选择</b></p>
     <p class="jian">
       <router-link to=""><span class=" jian glyphicon glyphicon-chevron-right"></span></router-link></p>
   </div>
    <div class="hod">
      <p>热门城市</p>

    </div>
  </div>
</template>

<script>
  import  Vue from 'vue';
    import Starttop from "./Starttop";
    export default {
        name: "Citydingwei",
      data(){
        return {
          //所有商品的数组
          Hotcity: {},
        }},
      components: {Starttop},
      comments:{
        Starttop
      },
      computed: {},
      created() {
        Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot' ).then((response) => {
          console.log(response.data);
        })
      }
    }
</script>

<style scoped>
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
  .jian{
    text-align: right;
  }
  .hod{
    background-color: #fff;
  }
</style>

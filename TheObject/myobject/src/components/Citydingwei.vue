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
      <div v-for="lt in Hotcity ">
       <router-link  :to="{}"><div class="hname">{{lt.name}}</div></router-link>
      </div>
    </div>
    <div v-for="(item ,i) in fc">
      <div class="clearfix abc" >
        <p>{{i}}</p>
        <div class="allcity" v-for="addr in item">
          {{addr.name}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import  Vue from 'vue';
    import Starttop from "./Starttop";
    export default {
      name: "Citydingwei",
      data() {
        return {
          //所有商品的数组
          Hotcity: {},
          Grocity: {},
          citykey: {},
          newCity: {}
        }
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
        created() {
          Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot').then((response) => {
            console.log(response.data);
            this.Hotcity = response.data;
          });
          Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((response) => {
            // console.log(response.data);
            this.Grocity = response.data;
          });

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
    margin-bottom:1rem;
  }
  .hod p{
    margin-bottom:0;
    line-height: 1.5rem;
    border-top:1px #ccc solid;
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
  }
  .allcity{
    width:25%;
    box-sizing: border-box;
    float:left;
    text-align:center;

    font-size:0.5rem;
    color: #ccc;
    line-height: 1.5rem;
    border:1px #ccc solid;
    text-align:center;
    height:1.5rem;
    /*text-overflow: ellipsis;*/
    overflow: hidden;


  }
  .abc{
    margin:1rem 0;
    background-color: #fff;
    border:1px red solid;
  }
  .abc p{
    background-color: red;
    margin-bottom:0;
    margin-top:1rem;
  }
  .allcity{
    border:1px #ccc solid;
  }
</style>

<template>
  <div class="selewen">
    <header class="header text-center" style="width: 100%;height: 2rem;background-color: rgb(49, 144, 232);line-height: 2rem;font-size: 0.8rem;font-weight: 600;color: white;">
        <span class="pull-left clearfix">
          <router-link :to="{path:'/FserviceC'}"><img src="../../images/左箭头.png" style="width: 0.8rem;height: 0.8rem;"/></router-link>
        </span>
      {{$store.state.tit}}
    </header>
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
  import Vue from 'vue';
  import store from '../../store/index'
  export default {
    name: "F_Service_Com",
    store,
    data() {
      return {
        title:'',
        text:'',
        arr2:[],
        sss:'',
          yue:'',
          arr:[],
          arry:[],

      }
    },
    mounted() {
      this.arr2 = this.$store.state.arry1
      this.sss = this.arr2[this.$store.state.neirong];
     console.log(this.sss,this.$store.state.neirong);
      Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res) => {
        // this.title = res.data.supervipCaption;
        this.yue= res.data[this.sss];
        console.log(res.data)
      }).catch((error) => {
        console.log(error);
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
  .selewen{
    background-color: #fff;

  }
  .duan{
    padding:0.5rem;
  }
  h4{
    margin:0.5rem 0;
    line-height: 1.2rem;
  }
</style>
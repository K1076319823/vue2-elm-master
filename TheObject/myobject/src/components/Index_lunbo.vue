<template>
  <div>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper">
      
        <div class="swiper-slide" > 
          <router-link v-for="(slide,index) in comshopArrLeft" :key="index" to="" @click.prevent>
              <div class="vessel">
                <img :src="'//fuss10.elemecdn.com/' + slide.image_url" title="slide.title"/>
                <p class="pSize">{{ slide.title }}</p>
              </div>
          </router-link>
        </div>

        <div class="swiper-slide" > 
          <router-link  v-for="(slide,index) in comshopArrRight" :key="index" to="" @click.prevent>
            <div class="vessel">
              <img :src="'//fuss10.elemecdn.com/' + slide.image_url" title="slide.title"/>
              <p class="pSize">{{ slide.title }}</p>
            </div>
          </router-link>
        </div>

    </div>
  </div>
  </div>
  </template>
  <script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios);

  export default {
    name: "Slider",
    data(){     
        return{
        shopArr:[],
        comshopArrLeft: [],
        comshopArrRight: []
      }
    },
    mounted(){      
            Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res)=>{
                  console.log(res.data)
                  this.shopArr = res.data;
                  this.comshopArrLeft = this.shopArr.slice(0,8)
                  console.log(this.comshopArrLeft)
                  this.comshopArrRight = this.shopArr.slice(8,17)
                  console.log(this.comshopArrRight)
            }).catch(function(error){
                  console.log(error)
            }),
            new Swiper (this.$refs.slider, {    
                pagination: '.swiper-pagination',            
            })
        }
    }
    </script>

    <style scoped>
      .swiper-container {
        width: 100%;
        margin-top: 12.5%;
        padding: 0;
      }

      .swiper-wrapper {
        width: 100%;
        height: 200px;
      }

      .swiper-slide img {
        max-width: 80%;
        /* display: block; */
      }

      .swiper-slide {
        width: 100%;
        height: 100%;
      }
      .vessel{
        width: 60%;
        height: 50%;
        /* float: left; */
        /* text-align: center; */
        margin: 8% auto 0;
      }
      .swiper-slide a{
        width: 25%;
        height: 50%;
        background-color: white;
        text-decoration: none;
        color: #666;
        float: left;
      }
      a{
        text-align: center;
      }
      .pSize{
        font-size: 14px;
        text-shadow: 2px 2px 2px solid lightgray;
      }

  </style>


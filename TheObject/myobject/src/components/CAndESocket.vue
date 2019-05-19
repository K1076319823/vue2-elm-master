<template>
 <div>
   <DJhead></DJhead>
   <div>
     <div class="CAndESocket">
       <div class="titler clearfix">
            <span class="commo">
                <router-link :to="{ path: '/CAndESocket/Common' }">
                    <div class="shopBox">商品</div>
                </router-link>
            </span>
         <span class="appraise">
                <router-link :to="{ path: '/CAndESocket/Evaluate' }">
                    评价
                </router-link>
            </span>
       </div>
       <!-- 给路由插座 添加动画 -->
       <transition name="fade" mode="out-in">
         <router-view class="orange-router"></router-view>
       </transition>
     </div>
   </div>
 </div>
</template>

<script>
import Common from '../components/Common.vue'
import Evaluate from '../components/Evaluate.vue'
import DJhead from "./DJhead";



export default {
    name: 'CAndESocket',
    components: {
      DJhead,



        Common,
        Evaluate
    }
}
</script>

<style scoped>
    .CAndESocket{
      position: fixed;
      top:6rem;
      left:0;
      width:100%;
    }
    .fade-enter-active{
        animation: fadeIn 1s;
    }
    .fade-leave-active{
        animation: fadeOut 1s;
    }

    a{
        text-decoration: none;
        font-weight: 600;
        color: rgb(49, 144, 232);
    }
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    .evaluate{
        width: 100%;
        height: 100%;
        background-color: rgb(245, 245, 245);
    }
     .titler{
        width: 100%;
        height: 8%;
        background-color: white;
        border-bottom: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        font-size: .8rem;
        line-height: 2.3rem;
        box-shadow: 4px 4px 4px rgb(163, 163, 163);
    }
    .sohopBox{
        display: inline-block;
        box-sizing: border-box;
        padding: 10px 2px;
    }
    .titler span{
        display: inline-block;
    }
    .commo{
        width: 50%;
        display: inline-block;
        float: left;
        text-align: center;
        box-sizing: border-box;
    }
    .appraise{
        width: 50%;
        display: inline-block;
        float: left;
        text-align: center;
        color: rgb(49, 144, 232);
        font-weight: 600;
    }
</style>

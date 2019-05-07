<template>
    <div class="i_lunbo">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">

                </div>

                <div class="swiper-slide swiper-slider">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'I_lunbo'
}

// import Swiper from '../node_modules/swiper/swiper.min.js'

// swiper JS 分配
// var mySwiper = new Swiper ('.swiper-container', {

//         // 轮播图的方向，也可以是vertical方向

//         direction:'horizontal',

//         //播放速度

//         loop: true,

//         // 自动播放时间

//         autoplay:true,

//         // 播放的速度

//         speed:2000,

//     　　// 这样，即使我们滑动之后， 定时器也不会被清除

//     　　autoplayDisableOnInteraction : false

//       });
</script>

<style scoped>
    /* @import '../node_modules/swiper/swiper.min.css'; */
    .i_lunbo{
        width: 100%;
        height: 40%;
    }
    .swiper-container{

        width: 100%;

        height: 100%;

    }

    .swiper-slide{

        width: 100%;

        height: 100%;
        background-color: lightblue;

    }

    .swiper-slider{
        width: 100%;

        height: 100%;
        background-color: lightcoral;
    }
</style>
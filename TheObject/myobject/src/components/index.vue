<template>
    <div class="index">
        <!-- 这是第一天的 郑州站, swiper, 以及 页脚组件配置 -->
        <Header></Header>
        <Slider></Slider>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header.vue';
import Slider from './Index_lunbo';
import Footer from './Footer.vue';


export default {
    name: 'Index',
    components: {
        Header, Footer,Slider
    }
}
</script>

<style scoped>
    html,body{
        width: 100%;
        height: 100%;
    }
    .index{
        width: 100%;
        height: 100%;
    }

</style>
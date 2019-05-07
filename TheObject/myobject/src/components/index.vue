<template>
    <div class="index">
        <!-- 这是第一天的 郑州站, swiper, 以及 页脚组件配置 -->
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import I_lunbo from './Index_lunbo';

export default {
    name: 'Index',
    components: {
        Header, Footer,I_lunbo
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
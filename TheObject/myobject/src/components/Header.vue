<template>
    <div class="header clearfix">
        <!-- 这个 P标签里面的城市是可变的,先写死 -->
        <router-link to="" class="skip">
            <!-- <img src="../images/search.png" alt="您的浏览器不符合要求,请升级浏览器"> -->
        </router-link>
        <p class="fonts">郑州站</p>
        <div class="access clearfix">
            
            <router-link to="" class="register">注册</router-link>
            <router-link to="" class="login">登录</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 7%;
        background-color: rgb(49, 144, 232);
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        text-align: center;
        font-size: 0.8rem;
        color: white;
    }
    .fonts{
        margin: .5rem 30% 0 38%;
        display: inline-block;
    }
    .access{
        float: right;
        position: relative;
        top: 0.6rem;
        right: 0.6rem;
    }
    .skip{
        width: 1.2rem;
        height: 1.2rem;
        background-color: lightcoral;
        position: absolute;
        left: 0.6rem;
        top: 0.5rem;
        background: url(../../images/search.png) no-repeat;
    }
    .login{
        font-size: 0.6rem;
        float: right;
        color: white;
        border-right: 2px solid white;
        text-decoration: none;
    }
    .register{
        font-size: 0.6rem;
        float: right;
        color: white;
        text-decoration: none;
    }
</style>
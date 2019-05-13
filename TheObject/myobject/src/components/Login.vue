<template>
    <div class="login">
        <div class="login_top clearfix">
            <!-- 左侧点击按钮 -->
            <p class="goBack">
                <router-link to="/index" class="goback"></router-link>
            </p>

            <p class="pSize">密码登录</p>
        </div>
        <form action="" class="login_form">
            <input type="text" placeholder="请输入账号">
            <div class="pas">
                <input :type="isText" placeholder="请输入密码" class="pasint" >

                <label for="" class="slide" @click="clicker">
                    <!-- 点击执行动画 -->
                    <transition name="slides">
                        <div class="int" v-if="show"></div>
                    </transition>
                </label>
            </div>
            <div class="codes">
                <input type="text" placeholder="验证码" class="coder">
                <img src="" alt="">
                <div class="codeModule">
                    <img :src="nums" alt="请刷新应用">
                    <span>看不清</span>
                    <a href="javascript:;">换一张</a>
                </div>
            </div>

            <div class="loginFonts">
                <p>温馨提示：未注册过的账号，登录时将自动注册</p>
                <p>注册过的用户可凭账号密码登录</p>
            </div>

            <div class="loginSim">
                <input type="submit" value="登录" title="点击登录" class="lastInt">
            </div>

             <router-link to="">重置密码?</router-link>
        </form>

    </div>
</template>

<script>

    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios);

    export default {
        name: 'Login',
        data(){
            return{
                value1: true,
                value2: true,
                show: true,
                isText: 'text',
                isPass: 'password',
                nums: ''
            }
        },
        mounted() {
            Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
             this.nums = res.data.code;
             console.log(res.data);
             console.log(this.nums)
           })
        },
        methods: {
            clicker(){
                this.show = !this.show
                if(this.show === false){
                    this.isText = this.isPass
                    // console.log(this.show)
                }else if(this.show === true){
                    this.isText = 'text'
                    // console.log(this.show)
                }else if(this.show === false){
                    this.isPass = 'password'
                    // console.log(this.show)
                }
            }
        },
    }

</script>

<style scoped>
    .codeModule img{
        width: 140%;
        height: 100%;
        position: absolute;
        right: 3rem;
        bottom: .3rem;
        background-color: white;
    }
    .slides-enter-active, .slides-leave-active {
        transition:all .2s linear;
        transform: translate3d(0,0,0);
    }
    .slides-enter, .slides-leave-to {
        transform: translate3d(100%,0,0);
    }
    .pas{
        width: 100%;
        height: 16%;
        background-color: white;
        border-bottom: 1px solid rgb(247, 247, 247);
    }
    .pasint{
        width: 84%;
        height: 100%;
    }
    .slide{
        width: 16%;
        height: 40%;
        background-color: rgb(231, 248, 255);
        position: relative;
        left: 78%;
        bottom: 70%;
        border-top-left-radius:.4rem;
        border-top-right-radius:.4rem;
        border-bottom-right-radius:.4rem;
        border-bottom-left-radius:.4rem;
        border: 1px solid rgb(197, 231, 243);
    }
    .int{
        width: 66%;
        height: 170%;
        background-color: rgb(241,241,241);
        border-radius: 50%;
        background: url(../../images/eye.png) no-repeat;
        background-position: center center;
        background-size: contain;
        position: relative;
        bottom: 28%;
        right: 10%;

    }
    .login{
        width: 100%;
        height: 100%;
        background-color: rgb(245, 245, 245);
        overflow:scroll;
        overflow-x:hidden;
    }
    .login_top{
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
    .pSize{
        margin-right: 2rem;
        margin-top: .1rem;
        display: inline-block;
        font-weight: 600;
    }
    .login_form{
        border: .1px solid transparent;
        margin-top: 16%;
        display: block;
        width: 100%;
        height: 46%;
        background-color: rgb(245, 245, 245);
        font-size: .7rem;
    }
    .goback{
        width: 1rem;
        height: 1rem;
        background: url(../../images/login_arrows.png) no-repeat;
        background-position: center center;
        background-size: contain;
        float: left;
    }
    input{
        display: inline-block;
        border: 0;
        border-bottom: 1px solid rgb(240, 240, 240);
        width: 100%;
        height: 16%;
        background-color: white;
        box-sizing: border-box;
        padding: 0.4rem 0.6rem;
        outline: none;
    }
    .loginFonts{
        font-size: 0.2rem;
        color: rgb(252, 15, 15);
        box-sizing: border-box;
        padding-left: .4rem;
        padding-top: .4rem;
        line-height: 20px;
    }
    .lastInt{
        background-color: rgb(76, 217, 100);
        color: white;
        border-radius: 4px;
        width: 94%;
        height: 20%;
    }
    .loginSim{
        text-align: center;
    }
    a{
        float: right;
        font-size: .6rem;
        color: rgb(59, 149, 233);
        margin: .8rem .8rem 0 0;
    }
    .goBack{
        position: relative;
        bottom: .3rem;
        left: .2rem;
    }
    .codes{
        width: 100%;
        height: 18.4%;
        background-color: white;
    }
    .coder{
        width: 70%;
        height: 100%;
    }
    img{
        width: 14%;
        height: 100%;
        background-color: lightcoral;
    }
    .codeModule{
        width: 20%;
        height: 80%;
        background-color: white;
        display: inline-block;
        font-size: .59rem;
        box-sizing: border-box;
        line-height: .3rem;
        text-align: center;
        color: #666;
        position: relative;
        bottom: .6rem;
        left: 1rem;
    }
    a{
        text-decoration: none;
        font-size: .56rem;
    }
</style>

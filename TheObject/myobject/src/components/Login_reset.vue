<template>
    <div class="reset">
        <div class="reset_top">
            <!-- 左侧点击按钮 -->
            <p class="goBack">
                <router-link to="" class="goback"></router-link>
            </p>
            <p class="pSize">重置密码</p>
        </div>
        <form action="" class="login_form">
            <input type="text" placeholder="账号">
            <input type="text" placeholder="旧密码">
            <input type="text" placeholder="请输入新密码">
            <input type="text" placeholder="请确认密码">
            <div class="codes">
                <input type="text" placeholder="验证码" class="coder">
                <img src="" alt="">
                <div class="codeModule">
                    <span>看不清</span>
                    <a href="javascript:;">换一张</a>
                </div>
            </div>

            <div class="loginSim">
                <input type="submit" value="确认修改" title="确认修改" class="lastInt">
            </div>
        </form>
           
    </div>
</template>

<script>
export default {
    name: 'Reset'
}
</script>

<style scoped>
    
    .reset{
        width: 100%;
        height: 100%;
        background-color: rgb(245, 245, 245);
        overflow:scroll;
        overflow-x:hidden;
    }
    .reset_top{
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
        margin-right: 1.7rem;
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
    .lastInt{
        background-color: rgb(76, 217, 100);
        color: white;
        border-radius: 4px;
        width: 94%; 
        height: 20%;
        margin-top: 1.4rem;
    }
    .loginSim{
        text-align: center;
    }
    .goBack{
        position: relative;
        top: .5rem;
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
        width: 16%;
        height: 98%;
        background-color: white;
        display: inline-block;
        font-size: .6rem;
        float: right;
        box-sizing: border-box;
        padding-top: .2rem;
        line-height: 1rem;
        color: #666;
    }
    a{
        text-decoration: none;
    }
</style>
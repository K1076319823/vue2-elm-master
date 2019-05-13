<template>
    <div class="account">
        <div class="accontHeader clearfix">
            <router-link to=""></router-link>
            <h4>账户信息</h4>
        </div>
        <div class="upload">
            <span>头像</span>
            <input type="file" value="传送" class="filer">
            <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightOnly">
            <img src="../../images/profile.png" alt="请升级浏览器" class="profile">
        </div>
        <div class="username">
            <span>用户名</span>
            <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightImgs">
        </div>
        <div class="site">
            <span>收货地址</span>
            <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightImgs">
        </div>
        <p class="binding">账号绑定</p>
        <div class="phone">
            <img src="../../images/bindphone.png" alt="请升级浏览器" class="myPhone">
            <span>手机</span>
            <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightImgs">
        </div>
        <p class="safety">安全设置</p>
        <div class="loginPas">
            <span>登陆密码</span>
            
            <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightImgs">
            <span class="loginTxt">修改</span>
        </div>
        <input type="button" value="退出登录" class="logout">
    </div>
</template>

<script>
export default {
    name: 'Account'

}
</script>

<style scoped>
    .myPhone{
        position: relative;
        bottom: .1rem;
    }
    .profile{
        width: 2rem;
        height: 2rem;
        float: right;
        position: relative;
        top: .54rem;
        right: .8rem;
    }
    input.filer{
        opacity: 0;
        position: absolute;
        width: 30%;
        height: 12%;
        left: 11rem;
        top: 2.4rem;
        float: right;
        outline: none;
        z-index: 1;
    }
    .rightOnly{
        position: relative;
        top: 1.2rem;
    }
    .rightImgs{
        position: relative;
        top: .56rem;
    }
    .rightArr{
        width: .8rem;
        height: .8rem;
        float: right;
    }
    .loginTxt{
        font-size: .75rem;
        float: right;
        color: rgb(189, 189, 189);
        position: relative;
    }
    .upload{
        width: 100%;
        height: 16%;
        background-color: white;
        margin-top: 2.4rem;
        border-bottom: 1px solid rgb(230, 230, 230);
        line-height: 3.4rem;
        box-sizing: border-box;
        padding-left: .8rem;
        padding-right: .4rem;
    }
    .username{
        width: 100%;
        height: 10%;
        background-color: white;
        border-bottom: 1px solid rgb(230, 230, 230);
        line-height: 2rem;
        box-sizing: border-box;
        padding-left: .8rem;
        padding-right: .4rem;
    }
    .site{
        width: 100%;
        height: 10%;
        background-color: white;
        border-bottom: 1px solid rgb(230, 230, 230);
        line-height: 2rem;
        box-sizing: border-box;
        padding-left: .8rem;
        padding-right: .4rem;
    }
    .binding{
        width: 100%;
        height: 8%;
        background: rgb(242, 242, 242);
        border-bottom: 1px solid rgb(230, 230, 230);
        display: inline-block;
        line-height: 1.6rem;
        box-sizing: border-box;
        padding-left: .8rem;
        font-size: .4rem;
        color: rgb(59, 59, 59);
    }
    .phone{
        width: 100%;
        height: 10%;
        background-color: white;
        border-bottom: 1px solid rgb(230, 230, 230);
        line-height: 2rem;
        box-sizing: border-box;
        padding-left: .8rem;
        padding-right: .4rem;
    }
    .safety{
        width: 100%;
        height: 8%;
        background: rgb(242, 242, 242);
        border-bottom: 1px solid rgb(230, 230, 230);
        display: inline-block;
        line-height: 1.6rem;
        box-sizing: border-box;
        padding-left: .8rem;
        padding-right: .4rem;
        font-size: .4rem;
        color: rgb(59, 59, 59);
    }
    .loginPas{
        width: 100%;
        height: 10%;
        background-color: white;
        border-bottom: 1px solid rgb(230, 230, 230);
        line-height: 2rem;
        box-sizing: border-box;
        padding-left: .8rem;
        padding-right: .4rem;
    }
    :root{
        background-color: lightgray;
    }
    .logout{
        outline: none;
        border: 0;
        width: 96%;
        height: 7.6%;
        background-color: rgb(231, 92, 77);
        position: absolute;
        bottom: 0;
        left: 2%;
        color: white;
        border-radius: 4px;
    }
    p{
        margin: 0;
        padding: 0;
    }
    .account{
        width: 100%;
        height: 69%;
        background-color: rgb(242, 242, 242); 
        /* 样式注册完毕，删除伪代码 */
        border: .1px solid transparent;
        position: relative;
    }
    .accontHeader{
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
    h4{
        line-height: 1.3rem;
        font-size: .8rem;
        font-weight: 700;
        position: relative;
        right: .6rem;
    }
    .accontHeader a{
        width: 1rem;
        height: 1rem;
        background-color: lightcoral;
        display: inline-block;
        float: left;
        position: relative;
        left: .4rem;
        top: .5rem;
        background: url("../../images/login_arrows.png") no-repeat;
        background-position: center center;
        background-size: cover;
    }
</style>
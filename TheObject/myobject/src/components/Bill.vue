<template>
    <div class="bill">
        <!-- 发票顶部导航 -->
        <div class="header clearfix">
            <router-link to="" class="skip">
            </router-link>
            <p class="fonts">
                <router-link :to="{}" style="color:white">
                    选择发票抬头
                </router-link>
            </p>
        </div>
        <!--  -->
        <div class="txtVessel">
            <span class="billTxt">开你MMP</span>
            <img src="../../images/thatsSure.png" alt="请升级浏览器">
        </div>

        <button class="subBtn">请自觉确认</button>
    </div>
</template>

<script>
export default {
    name: 'Bill'
}
</script>

<style scoped>
.txtVessel{
    width: 100%;
    height: 12%;
    margin-top: 12%;
    line-height: 3.6rem;
    box-sizing: border-box;
    padding-left: 1rem;
}
.txtVessel img{
    width: 1rem;
    height: 1rem;
    float: right;
    position: relative;
    top: 1.3rem;
    right: 1rem;
}
.billTxt{
    display: inline-block;
    font-size: .8rem;
    color: rgb(37, 37, 37);
}
.subBtn{
    width: 90%;
    height: 6%;
    background-color: rgb(76, 217, 100);
    border: 0;
    border-radius: 4px;
    margin: 0 5%;
    color: white;
    font-size: .8rem;
}
/* --------- reset 默认样式 ------------ */
*{
    margin: 0;
    padding: 0;
}
html,body{
    width: 100%;
    height: 100%;
}
button{
    outline: none;
}
.bill{
    width: 100%;
    height: 100%;
    background-color: white;
}

/* ------------- 导航头 ------------- */
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
        z-index: 9999999;
    }
    .fonts{
        position: absolute;
        left:0rem;
        top:0.5rem;
        display: inline-block;
        color: #fff;
        height:1rem;
        z-index:2;
        width:50%;
        margin-left:25%;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .skip{
        width: 1.2rem;
        height: 1.2rem;
        background-color: white;
        position: absolute;
        left: 0.6rem;
        top: 0.4rem;
        background: url(../../images/login_arrows.png) no-repeat;
        background-position: center center;
        background-size: contain;
    }
</style>
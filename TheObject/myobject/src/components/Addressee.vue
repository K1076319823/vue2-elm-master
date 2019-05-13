<template>
    <div class="vessel">
        <div class="addressee clearfix">
            <router-link to=""></router-link>
            <h4>编辑地址</h4>
            <span>编辑</span>
        </div>
        <div class="line"></div>
        <div class="addSite">
            <span>新增地址</span>
            <!-- <img src="" alt="请升级浏览器"> -->
            <img src="../../images/right_arrows.png" alt="请升级浏览器" class="rightArr rightImgs">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Addressee'
}
</script>

<style scoped>
    .addressee span{
        display: inline-block;
        float: right;
        position: relative;
        font-size: .7rem;
        bottom: 1.6rem;
        right: 1rem;
    }
    .rightImgs{
        position: relative;
        top: .5rem;
        right: .5rem;
    }
    .rightArr{
        width: .8rem;
        height: .8rem;
        float: right;
    }
    .addSite{
        width: 100%;
        height: 1.9rem;
        background-color: white;
        margin-top: 2%;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        font-size: .68rem;
    }
    .addSite span{
        display: inline-block;
        margin-top: .42rem;
        margin-left: .6rem;
    }
    .line{
        width: 100%;
        height: 2%;
        border-bottom: 1px solid rgb(216, 216, 216);
        margin-top: 14%;
    }
    .vessel{
        width: 100%;
        height: 28.4%;
        background-color: #EBEBEB; 
        /* 样式注册完毕，删除伪代码 */
        border: .1px solid transparent;
        position: relative;
    }
    .addressee{
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
    .addressee a{
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
    h4{
        line-height: 1.3rem;
        font-size: .8rem;
        font-weight: 700;
        position: relative;
        right: .6rem;
    }
</style>
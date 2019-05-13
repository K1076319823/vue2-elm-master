<template>
    <div class="vessel">
        <div class="changeUser clearfix">
            <router-link to=""></router-link>
            <h4>修改用户名</h4>
            <form action="">
                <input type="text" placeholder="输入用户名" class="userName">
                <p>用户名只能修改一次  <span>(5-24字符之间)</span></p>
                <br>
                <input type="submit" value="确认修改" class="ensureChange">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChangeUser'
}
</script>

<style scoped>
    :root{
        background-color: white;
    }
    .ensureChange{
        width: 94.8%;
        background-color: rgb(49, 153, 232);
        font-size: .7rem;
        outline: none;
        border: 0;
        padding-top: .52rem;
        padding-bottom: .52rem;
        color: rgb(152, 204, 244);
        position: relative;
        bottom: .2rem;
        border-radius: 2px;
    }
    .userName{
        border: 0;
        outline: none;
        margin-top: .3rem;
        width: 94.8%;
        height: 1.6rem;
        font-size: .7rem;
        border: 1px solid lightgray;
        border-radius: 2px;
        box-sizing: border-box;
        padding-left: .2rem;
        padding-top: .16rem;
        background-color: #F2F2F2;
    }
    form p{
        font-size: .46rem;
        padding: .5rem 0 0;
        margin-left: .5rem;
        position: relative;
        right: 3.6rem;
        color: #666;
    }
    form span{
        display: inline-block;
        margin-left: .2rem;
    }
    p{
        margin: 0;
        padding: 0;
    }
    .vessel{
        width: 100%;
        height: 28.4%;
        background-color: #EBEBEB; 
        /* 样式注册完毕，删除伪代码 */
        border: .1px solid transparent;
        position: relative;
    }
    .changeUser{
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
    .changeUser a{
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
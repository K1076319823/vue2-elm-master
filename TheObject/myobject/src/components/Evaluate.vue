<template>
    <div class="evaluate">
        <!-- 父级路由组件 -->
        <div class="titler clearfix">
            <span class="commo">
                <div class="shopBox">商品</div>
            </span>
            <span class="appraise">
                评价
            </span>
        </div>
        <!-- 请求接口一: 获取评价分数 -->
        <div class="evaScore">
            <header>
                <div class="score">
                    <p class="score01">{{ shopScore }}</p>
                    <p class="score02 tintFont">综合评价</p>
                    <p class="score03">高于周边商家{{ compare }}%</p>
                </div>
                <div class="star">
                    <p>
                        <span class="tintFont">服务态度</span>
                        <span class="orangeFont">★★★★★</span>
                        <span class="orangeFont">{{ overall }}</span>
                    </p>
                    <p>
                        <span class="tintFont">菜品评价</span>
                        <span class="orangeFont">★★★★</span>
                        <span class="orangeFont">{{ service }}</span>
                    </p>
                    <p>
                        <span class="tintFont">送达时间</span>
                        <span class="tintFont">10</span>
                        <span class="tintFont">分钟</span>
                    </p>
                </div>
            </header>
        </div>
        <!-- 请求接口二: 获取评价分类 -->
        <div class="evaClass">
            <ul class="classUl clearfix">
                <li class="classLi">1111</li>
                <li>2222</li>
            </ul>
        </div>
        <!-- 请求接口三: 获取评价信息 -->
        <div class="evaMsg">
            <ul>
                <li class="msgLi">
                    <img src="../../images/qq.png" alt="请升级浏览器">
                    <p class="msgTitle">
                        11111111
                        <span>2017-02-10</span>
                    </p>
                    <p class="msgStar">
                        <span>★★★★</span>
                        <span>按时送达</span>
                    </p>
                    <p class="msgPhoto">
                        <img src="../../images/1.png" alt="请升级浏览器">
                        <img src="../../images/1.png" alt="请升级浏览器">
                    </p>
                    <ul class="msgDetails">
                        <li>超级123</li>
                        <li>3344321</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios);

    export default {
        name: 'Evaluate',
        data(){
            return{
                compare: '', //高于周边商家百分比
                shopScore: '',  // 商品分数
                overall: '', //服务态度
                service: '', //菜品态度
            }
        },
        // 请求数据
        mounted(){
            // 请求接口一: 获取评论分数
            Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores').then((res) => {
                    // console.log(res.data)
                    this.compare = (res.data.compare_rating*100).toFixed(1)
                    this.shopScore = res.data.food_score.toFixed(1)
                    this.overall = res.data.overall_score.toFixed(1)
                    this.service = res.data.service_score.toFixed(1)
            })
            // 请求接口二: 获取评价分类
            Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings/tags').then((res) => {
                    // console.log(res.data)
            })
            // 请求接口三: 获取评价信息
            Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings').then((res) => {
                    // console.log(res.data)
            })
        }
    }
</script>

<style scoped>
/* 字体颜色 */
.tintFont{
    color: rgb(116, 116, 116) !important;
    text-shadow: .1px .1px .1px rgb(217, 231, 233);
}
/* 评价分数 css样式 */
.evaScore{
    width: 100%;
    height: 16%;
    background-color: white;
    border: .1px solid transparent;
    border-top: 1px solid lightgray;
}
header{
    width: 80%;
    height: 80%;
    margin: .38rem auto 0;
    /* background-color: lightgreen; */
}
.score{
    width: 40%;
    height: 100%;
    float: left;
    text-align: center;
    position: relative;
    top: .6rem;
}
.score01{
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(255, 157, 92);
    line-height: 1.2rem;
}
.score02{
    font-size: .6rem;
    color: rgb(65, 65, 65);
}
.score03{
    font-size: .4rem;
    color: rgb(128, 128, 128);
}
.star{
    width: 60%;
    height: 100%;
    float: right;
    box-sizing: border-box;
    padding-left: .6rem;
    font-size: .6rem;
    line-height: 1rem;
    position: relative;
    top: .4rem;
}
.orangeFont{
    color: darkorange;
}
/* 评价分类 css样式 */
.evaClass{
    width: 100%;
    height: 26%;
    background-color: lightskyblue;
    margin-top: .5rem;
    border: .1px solid transparent;
}
.evaClass>ul{
    width: 94%;
    height: 86%;
    background-color: lightgreen;
    margin: .2rem auto 0;
}
.classUl>li{
    float: left;
    display: inline-block;
    background-color: rgb(235, 245, 255);
    padding: .2rem .4rem;
    margin-left: .2rem;
    margin-top: .2rem;
    border-radius: 4px;
    color: rgb(109, 120, 133)
}
/* 评价信息 css样式 */
.evaMsg{
    width: 100%;
    height: 26%;
    background-color: lightcoral;
    padding-bottom: .8rem;
    border-bottom: 1px solid black;
}
.evaMSg ul{
    width: 100%;
    height: 30%;
}
.msgLi{
    width: 100%;
    height: 100%;
    background-color: lightblue;
}
/* ------------------------------------- */
.msgLi img{
    width: 1.4rem;
    height: 1.4rem;
    margin-left: .4rem;
    margin-top: .4rem;
}
.msgTitle{
    display: inline-block;
    margin-left: .6rem;
}
.msgTitle>span{
    margin-left: 7.4rem;
}
.msgStar{
    margin-left: 2.56rem;
    position: relative;
    bottom: .46rem;
}
.msgPhoto{
    margin-left: 2rem;
}
.msgDetails{
    margin-left: 2rem;
}
.msgDetails>li{
    display: inline-block;
    margin-top: 1rem;
    margin-left: .2rem;
    border: 1px solid black;
    border-radius: 4px;
    padding: .2rem .4rem;
}



/* ------------------------------------------------------- */
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    .evaluate{
        width: 100%;
        height: 100%;
        background-color: rgb(245, 245, 245);
    }
     .titler{
        width: 100%;
        height: 8%;
        background-color: white;
        border-bottom: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        font-size: .8rem;
        line-height: 2.3rem;
        box-shadow: 4px 4px 4px rgb(163, 163, 163);
    }
    .sohopBox{
        display: inline-block;
        box-sizing: border-box;
        padding: 10px 2px;
    }
    .titler span{
        display: inline-block;
    }
    .commo{
        width: 50%;
        display: inline-block;
        float: left;
        text-align: center;
        box-sizing: border-box;
        /* font-weight: 600; */
    }
    .appraise{
        width: 50%;
        display: inline-block;
        float: left;
        text-align: center;
        color: rgb(49, 144, 232);
        font-weight: 600;
    }
</style>
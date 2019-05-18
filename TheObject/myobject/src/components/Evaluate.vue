<template>
    <div class="evaluate">
        <!-- 父级路由组件 -->
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
                <li  v-for="(lists, index) in appraise" :key="index" 
                   :class="active == index ? 'addclass' : '' "  @click="down(index)">
                    {{ lists.name }} ({{ lists.count }})
                </li>
            </ul>
        </div>
        <!-- 请求接口三: 获取评价信息 -->
        <div class="evaMsg" v-for="(lists, index) in evaMsgs" :key="index">
            <ul class="msgUl">
                <li class="msgLi">
                    <img src="../../images/theUser.png" alt="请升级浏览器">
                    <p class="msgTitle">
                        <span class="msgUser">{{ lists.username }}</span>
                        <span class="msgDat">{{ lists.rated_at }}</span>
                    </p>
                    <p class="msgStar">
                        <span class="starLeft">★★★★</span>
                        <span class="startRight">按时送达</span>
                    </p>
                    <p class="msgPhoto">
                        <img src="../../images/1.png" alt="请升级浏览器">
                        <img src="../../images/1.png" alt="请升级浏览器">
                    </p>
                    <ul class="msgDetails">
                        <li>德克士热辣鸡腿堡</li>
                        <li>鲜奶布丁</li>
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
                appraise: [], // 第二条评价数据的文本
                appraiseNum: [], //第二条评价数据的值
                evaMsgs: [], //第三条数据的请求数组
                active: false // 判断第二条请求数据里的元素有没有被点击
                
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
            Vue.axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${this.$store.state.shopid}/ratings/tags`).then((res) => {
                    // console.log(res.data)
                    for (let key in res.data) {
                       this.appraise.push(res.data[key])
                       this.appraiseNum.push(res.data[key].count)
                    }
                    // console.log(this.appraise)
            })
            // 请求接口三: 获取评价信息
            Vue.axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${this.$store.state.shopid}/ratings`).then((res) => {
                    console.log(res.data)
                    for (let key in res.data) {
                        this.evaMsgs.push(res.data[key])
                    }
                    console.log(this.evaMsgs)
            })
        },
        methods: {
            down(index){
                this.active = index
            }
        }
    }
</script>

<style scoped>
/* 点击第二条请求数据变色 */
.addclass{
   background-color: rgb(49, 144, 232) !important;
   color: white !important;
}
/* 字体颜色 */
.tintFont{
    color: rgb(116, 116, 116) !important;
    text-shadow: .1px .1px .1px rgb(217, 231, 233);
}
/* 评价分数 css样式 */
.evaScore{
    width: 100%;
    height: 17%;
    background-color: white;
    border: .1px solid transparent;
    border-top: 1px solid lightgray;
}
header{
    width: 80%;
    height: 80%;
    margin: .38rem auto 0;
}
.score{
    width: 40%;
    height: 100%;
    float: left;
    text-align: center;
    position: relative;
    top: .6rem;
    right: .2rem;
}
.score01{
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(255, 145, 72);
    line-height: 1.2rem;
}
.score02{
    font-size: .6rem;
    color: rgb(65, 65, 65);
}
.score03{
    width: 6rem;
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
    height: 28%;
    background-color: white;
    margin-top: .4rem;
    border: .1px solid transparent;
    border-bottom: 1px solid rgb(219, 219, 219);
}
.evaClass>ul{
    width: 94%;
    height: 86%;
    margin: .6rem auto 0;
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
    height: 27.2%;
    padding-bottom: .8rem;
}
.msgUl{
    width: 100%;
    display: inline-block;
}
.msgUl>li{
    border-bottom: 1px solid rgb(219, 219, 219);
}
.msgLi{
    width: 100%;
    height: 8rem;
    background-color: white;
    display: inline-block;
    border-top: .1px solid transparent;
    border-bottom: 1px solid black;
}
.msgDat{
    position: relative;
    left: 4rem;
    bottom: 4rem;
    font-size: .4rem;
    color: rgb(153, 153, 153);
}
.msgUser{
    position: relative;
    bottom: 2rem;
    right: 5.2rem;
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
    float: right;
    line-height: 2rem;
}
.msgTitle>span{
    margin-left: 7.4rem;
}
.msgStar{
    margin-left: 2.56rem;
    position: relative;
    bottom: 4.4rem;
}
.msgStar:last-child{
    color: #666;
}
.msgStar>span{
    color: darkorange;
}
.msgPhoto{
    margin-left: 2rem;
    position: relative;
    bottom: 3.8rem;
}
.msgDetails{
    margin-left: 2rem;
    position: relative;
    bottom: 3.8rem;
    padding-bottom: .36rem;
    border-bottom: 1px solid lightgray;
}
.msgDetails>li{
    display: inline-block;
    margin-top: 1rem;
    margin-left: .2rem;
    border: 1px solid rgb(196, 196, 196);
    border-radius: 4px;
    padding: .2rem .4rem;
    color: rgb(153, 153, 153);
}
.msgLi+img{
    transform: scale(1.2);
}

/* ------------------------------------------------------- */
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    #app{
        width: 100%;
        height: 100%;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    .evaluate{
        width: 100%;
        height: 560px;
        background-color: rgb(245, 245, 245);
    }
</style>
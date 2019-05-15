<template>
    <div class="mall"> 
        <div class="titler clearfix">
            <span class="commo">
                <div class="shopBox">商品</div>
            </span>
            <span class="appraise">
                评价
            </span>
        </div>
        <!-- 左边的选取区域 -->
        <div class="wrapper" ref='wrapper'> 
            <ul class="cate-left"> 
                <li class="ellipsis" v-for="(list,index) in leftName" :key='index'>
                    <a :href="'#' + index" @click="changeMe(index)" >{{list}}</a>
                </li>
            </ul> 
        </div> 
        <!-- 右边的具体商品 -->
        <!-- <div class="shopLists"> -->
            <div class="wrapper2" ref='wrapper2'>
                <ul class="cate-right">
                    <li v-for="(list,index) in foods" :key="index" class="right-txts">
                        <a href="javascript:;" class="bigTitle clearfix">
                            <span class="title" :id="index">{{ list.name }}</span>
                            <span class="texts">{{ list.description }}</span>
                        </a>
                        <div > 
                            <!-- 商品详情 -->
                            <div v-for="(lists,id) in list.foods" :key="id">
                                <div class="vessel clearfix">
                                    <!-- <img :src="'//elm.cangdu.org/img/'+lists.image_path" alt=""> -->
                                    <img :src= "'//elm.cangdu.org/img/'+ lists.image_path" alt="请升级浏览器">
                                    <ul class="vesseler" >
                                        <li class="smallTitle">{{ lists.name }}</li>
                                        <li class="referral">{{ lists.description }}</li>
                                        <li class="month">月售{{ lists.month_sales }}份</li>
                                        <li class="good">好评率{{lists.satisfy_rate}}%</li>
                                        <li class="money">￥{{ lists.specfoods[0].price }}</li>
                                        <li class="money_txts">起</li>
                                        <!-- 插值表达式书写事件，传入后台请求的参数 -->
                                        <!-- moveBall -->
                                        <!-- @click="bounceWeb" -->
                                        <div @click="bounceWeb(lists)">
                                            <li class="choose" @click="addToShopCar(lists)" >
                                                {{checked(lists.specfoods)}}
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
        
                        </div>
                    </li> 
                </ul> 
            </div> 
        <!-- </div> -->

        <!-- 购物车 -->
        <!-- :class="searchBarFixed == true ? 'isFixed' : '' " -->
        <div class="isFixed clearfix">
            <div class="logo"></div>
            <div class="logoPrice" id="badge"></div>
            <ul class="totalVessel">
                <li class="totalPrice">￥0.00</li>
                <li class="delivery">配送费￥5</li>
            </ul>
            <div class="price">还差 ￥20起送</div>
        </div>

        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <!-- 实现小球根据不同位置，都能实现加入购物车的平移效果 -->
            <div class="ball" v-if="ballFlage" ref="ball"></div>
        </transition>


        <!-- 点击添加弹出窗口 -->
        <div class="bounceWeb" v-show="bounce">
            <div class="popUp">
                <div class="popTitle clearfix">
                    <span>{{ shopName }}</span>
                    <img src="../../images/close.png" alt="请升级浏览器" @click="closeBounce">
                </div>
                
                <span class="size">规格</span>
                <div class="sizeSelect">
                    <div @click="clicker01Btn">{{ bounceValue01 }}</div>
                    <div @click="clicker02Btn">{{ bounceValue02 }}</div>
                </div>
                <div class="popBot">
                    <span class="sizeMoney" >￥{{ bouncePrice }}</span>
                    <span class="addToCar">加入购物车</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios);

    export default {
        name: 'Common',
        data () {
            return {
                leftName: [],
                foods:[],
                searchBarFixed: Boolean,
                ballFlage: false,
                // 定义数组存储购买的商品
                shopDatas: [],
                bounce: false,
                // 弹出框里的三个数据
                bounceValue01: '',
                bounceValue02: '',
                bouncePrice: '',
                bouncePrice01: '',
                bouncePrice02: '',
                shopName: '',
                shopObj: {},
                // 设置a选择状态
                changeA: false

            } 
        },
        mounted(){
            Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1').then((res) => {
                for (const key in res.data) {
                    this.leftName.push(res.data[key].name)
                    // 循环遍历出 每一个左边栏对应的 右边栏列表块
                    this.foods.push(res.data[key])
                }
                // console.log(this.leftName)
                // console.log(this.foods)
            }) 

            // 设置窗口监听
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            checked(lists){
                // console.log(lists)
                if(lists.length == 1){
                    return '+' 
                }else{
                    return '选规格'
                }
            },
            moveBall(){
                this.ballFlage = !this.ballFlage;
            },
            // 小球动画
            beforeEnter(el){
                el.style.transform = "translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth

                // 小球动画的优化思路
                // 提供一个 domObject.getBoundingClientRect( ), 方法，来获取 一个dom节点相对于页面的
                // top, right, bottom, left 的值

                // 获取小球相对于页面中的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect()
                // 获取徽标在网页中过的位置
                const badgePosition =  document.getElementById('badge').getBoundingClientRect()
                // 
                const xDist = badgePosition.left - ballPosition.left
                const yDist = badgePosition.top - ballPosition.top

                el.style.transform = `translate(${xDist}px, ${yDist}px)`
                el.style.transition = "all 1s cubic-bezier(0,.01,0,.85)"
                done()
            },
            afterEnter(el){
                this.ballFlage = !this.ballFlage
            },
            // 添加对象到购物车
            addToShopCar(shop){
                // console.log('111')
                // console.log(shop)
                // this.shopObj = shop
                // console.log(shop)
                // let shopObj = {name: shop, count: 1}
                // if(this.shopDatas === null){
                //     this.shopDatas.push(shopObj)
                //     console.log(this.shopDatas)
                // }else{
                //     let isHas = this.shopDatas.some((v)=>{
                //         return v.name._id === shop._id;
                //     })

                //     if(isHas){
                //         const arr = this.shopDatas.filter((v)=>{
                //             return v.name._id === shop._id
                //         })
                //         arr[0].count++
                //     }else{
                //         this.shopDatas.push(shopObj)
                //     }
                // }
            },

            // 添加按钮被点击，弹出窗口
            bounceWeb(lists){
                // console.log(lists)
                this.shopObj = lists
                console.log(this.shopObj)
               
                if(lists.specfoods.length > 1){
                    // 定义 拥有选规格外卖的数据变量
                    this.bounceValue01 = lists.specfoods[0].specs_name
                    this.bounceValue02 = lists.specfoods[1].specs_name
                    // 第一个按钮的 价格
                    this.bouncePrice01 = lists.specfoods[0].price
                    this.bouncePrice = lists.specfoods[0].price
                    // 第二个按钮的 价格
                    this.bouncePrice02 = lists.specfoods[1].price
                    this.bounce = !this.bounce
                    this.shopName = lists.name
                }else{
                    this.bounce = false

                }
            },
            clicker01Btn(){
              this.bouncePrice  = this.bouncePrice01
            },
            clicker02Btn(){
              this.bouncePrice = this.bouncePrice02
            },
            // 关闭弹窗
            closeBounce(){
                this.bounce = false;
            },
            changeMe(target){
                console.log(target)
                // target.style.backgroundColor = "red"
                this.changeA = !this.changeA
            }
        }                       
    }
</script>

<style scoped>  
    /* 左侧 A标签的点击样式 */
    .colorful{
        color: rgb(49, 144, 232)
    }
    /* 购物车选择规格 */
    .bounceWeb{
        width: 100%;
        height: 10000%;
        position: absolute;
        left:0;
        top:0;
        bottom: 2.3rem;
        background-color: rgba(0,0,0, .42);
        border: .1px solid transparent;
    }
    .popUp{
        width: 76%;
        height: 200px;
        background-color: white;
        border-radius: 4px;
        opacity: 1;
        margin: 9rem auto 0;
    }
    .popTitle{
        width: 100%;
        height: 20%;
        /* background-color: lightcoral; */
        font-size: 1rem;
        text-align: center;
    }
    .popTitle span{
        font-size: .8rem;
        margin-left: 1.4rem;
        line-height: 2.2rem;
        color: rgb(34, 34, 34);
    }
    .popTitle img{
        width: 1.4rem;
        height: 1.4rem;
        float: right;
        margin-top: .4rem;
        margin-right: .6rem;
    }
    .size{
        font-size: .8rem;
        color: #666;
        margin-left: .4rem;
        margin-top: 2rem;
    }
    .sizeSelect{
        width: 40%;
        height: 18%;
        margin-top: .4rem;
        /* background-color: lightcoral; */
    }
    .sizeSelect>div:first-child{
        width: 46%;
        height: 100%;
        /* background-color: lightblue; */
        float: left;
        margin-left: .4rem;
        border: 1px solid rgb(49, 153, 232);
        color: rgb(49, 153, 232);
        border-radius: 4px;
        text-align: center;
        line-height: 1.6rem;
    }
    .sizeSelect>div:last-child{
        width: 36%;
        height: 100%;
        /* background-color: lightblue; */
        float: right;
        border: 1px solid rgb(49, 153, 232);
        border-radius: 4px;
        text-align: center;
        line-height: 1.6rem;
    }
    .popBot{
        width: 100%;
        height: 30%;
        /* background-color: lightgreen; */
        position: relative;
        top: 1.2rem;
        line-height: 2rem;
    }
    .sizeMoney{
        font-size: 1rem;
        font-weight: 800;
        margin-left: .6rem;
        color: rgb(255, 130, 52);
        position: relative;
        top: .3rem;
    }
    .addToCar{
        width: 34%;
        height: 70%;
        background-color: rgb(49, 153, 232);
        color: white;
        padding: .4rem .6rem;
        margin-left: 4.2rem;
        border-radius: 4px;
    }

    body,html{
        width: 100%;
        height: 100%;
    }
    /* 购物车小球 */
    .ball{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: rgb(255, 97, 61);
        z-index: 100;
        position: relative;
        left: 12.7rem;
        top: 5.9rem;
    }
    /* 购物车 */
     .isFixed{
        position:fixed;
        background-color: rgb(61, 61, 63);
        width: 100%;
        height: 8%;
        bottom:0;
        z-index:1;
        border-top-left-radius:.2em;
        border-top-right-radius:.2em;
    }
    .logoPrice{
        width: 1rem;
        height: 1rem;
        background-color: rgb(255, 97, 61);
        position: relative;
        bottom: 4.1rem;
        left: 3.1rem;
        border-radius: 50%;
    }
    .price{
        float: right;
        width: 6rem;
        height: 3rem;
        color: white;
        display: inline-block;
        position: relative;
        bottom: 4rem;
        background-color: rgb(83, 83, 86);
        border-radius: .2rem;
        font-size: .7rem;
        font-weight: 800;
        line-height: 2.34rem;
        text-align: center;
    }
    .totalVessel{
        float: left;
        position: relative;
        bottom: 3.7rem;
        left: 4.4rem;
        color: white;
    }
    .choose{
        font-size: .7rem;
        position: relative;
        left: 5rem;
        bottom: 1rem;
        width: 3rem;
        height: 1rem;
        background-color: rgb(49, 144, 232);
        text-align: center;
        color: white;
        border-radius: .3rem;
    }
    .totalPrice{
        font-size: .8rem;
        line-height: 1rem;
    }
    .delivery{
        font-size: .4rem;
        font-weight: 400;
    }
    .logo{
        width: 2.6rem;
        height: 2.6rem;
        background-color: rgb(61, 61, 63);
        position: relative;
        left: 1rem;
        bottom: 1rem;
        border-radius: 50%;
        box-sizing: content-box;
        border: .2rem solid rgb(68, 68, 68);
        background: url('../../images/goShoping.png') no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .shopLists{
        
    }


    ul{
        list-style: none;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .mall{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        position: relative;
    }
    .titler{
        width: 100%;
        height: 8%;
        background-color: white;
        border-bottom: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        font-size: .8rem;
        line-height: 2.3rem;
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
        color: rgb(49, 144, 232);
        box-sizing: border-box;
        font-weight: 600;
    }
    .appraise{
        width: 50%;
        display: inline-block;
        float: left;
        text-align: center;
    }
    /* 左边选区区域 */
    .wrapper{
        width: 26%;
        height: 615.41px;
        position: absolute;
        overflow: auto;
        overflow-x:hidden;
    }
    /* 右边的商品详情 */
    .wrapper2{
        width: 74%;
        height: 615.41px;
        position: absolute;
        left: 4.2rem;
        overflow: auto;
        overflow-x:hidden;
    }
   
    .vessel{
        width: 100%;
        background-color: white;
        border-bottom: 1px solid lightgray;
    }
    .vessel img{
        width: 20%;
        float: left;
        vertical-align: top;
        box-sizing: border-box;
        padding-left: .3rem;
        padding-top: .3rem;
    }
    .vesseler{
        width: 80%;
        float: right;
        background-color:white;
        box-sizing: border-box;
        padding: .2rem;
        position: relative;
        border-bottom: .2px solid lightgray;
    }
    .smallTitle{
        font-size: .76rem;
        font-weight: 600;
        overflow: hidden;
    }
    .referral{
        font-size: .6rem;
        color: #666;
    }
    .good{
        position: relative;
        bottom: .46rem;
        left: 3rem;
        font-weight: 400;
        color: black;
    }
    .month{
        font-weight: 400;
        color: black;
        position: relative;
        top: .4rem;
    }
    .money{
        font-size: .7rem;
        font-weight: 700;
        color: darkorange;
    }
    .money_txts{
        position: absolute;
        bottom: 1.28rem;
        left: 1.8rem;
        color: rgb(107, 107, 107);
    }
    .right-txts>a{
        color: rgb(102, 102, 102);
        width: 100%;
        background-color: lightgray;
    }
    .title{
        width: 44%;
        background-color: rgb(245, 245, 245);
        font-size: 1rem;
        font-weight: 600;
        float: left;
        padding: .18rem 0;
        box-sizing: border-box;
        padding-left: .4rem;
        padding-top: .6rem;
    }
    .texts{
        width: 56%;
        background-color: rgb(245, 245, 245);
        float: left;
        padding-top: .54rem;
        box-sizing: border-box;
        padding-bottom: .4rem;
        padding-top: .94rem;
    }
    .cate-left{
        width: 100%;
    }
    .cate-left>li{
        background-color: #F5F5F5;
    }
    .ellipsis{
        width: 100%;
        font-size: .8rem;
        font-weight: 600;
        line-height: 3.5rem;
        border-bottom: 1px solid lightgray;
        box-sizing: border-box;
        padding-left: .4rem; 
        color: rgb(121, 121, 121);
        text-shadow: 0 .1px rgb(233, 233, 233), 
                      .1px 0 rgb(233, 233, 233),
                      -.1px 0 rgb(233, 233, 233),
                      0 -.1px rgb(233, 233, 233);
        border-left: 3px solid rgb(49, 144, 232);
    }
    .ellipsis a{
        text-decoration: none;
        color: rgb(121, 121, 121);
    }
</style>